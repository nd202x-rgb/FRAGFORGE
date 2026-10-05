"use client";

import { useState } from "react";

interface Tab {
  id: number;
  url: string | null;
  label: string;
  priv: boolean;
}

const ENGINES = [
  { id: "bing", name: "Bing", embed: true, url: (q: string) => `https://www.bing.com/search?q=${encodeURIComponent(q)}` },
  { id: "searx", name: "SearXNG", embed: true, url: (q: string) => `https://searx.be/search?q=${encodeURIComponent(q)}` },
  { id: "marginalia", name: "Marginalia", embed: true, url: (q: string) => `https://search.marginalia.nu/search?query=${encodeURIComponent(q)}` },
  { id: "google", name: "Google ↗", embed: false, url: (q: string) => `https://www.google.com/search?q=${encodeURIComponent(q)}` },
  { id: "ddg", name: "DuckDuckGo ↗", embed: false, url: (q: string) => `https://duckduckgo.com/?q=${encodeURIComponent(q)}` },
  { id: "brave", name: "Brave ↗", embed: false, url: (q: string) => `https://search.brave.com/search?q=${encodeURIComponent(q)}` },
];

const QUICK_LINKS = [
  { label: "Reddit r/gaming", url: "https://www.reddit.com/r/gaming/" },
  { label: "Twitch", url: "https://www.twitch.tv" },
  { label: "Steam", url: "https://store.steampowered.com" },
  { label: "PCPartPicker", url: "https://pcpartpicker.com" },
  { label: "HowLongToBeat", url: "https://howlongtobeat.com" },
  { label: "ProSettings", url: "https://prosettings.net" },
];

function looksLikeUrl(s: string): boolean {
  return /^[\w-]+(\.[a-z]{2,})+(\/.*)?$/i.test(s.trim());
}

function tabLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url.slice(0, 20);
  }
}

let nextId = 1;

export function BrowseClient() {
  const [tabs, setTabs] = useState<Tab[]>([{ id: 0, url: null, label: "New tab", priv: false }]);
  const [active, setActive] = useState(0);
  const [engine, setEngine] = useState(ENGINES[0]);
  const [address, setAddress] = useState("");
  const [history, setHistory] = useState<{ url: string; label: string }[]>([]);

  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  function updateTab(id: number, patch: Partial<Tab>) {
    setTabs((ts) => ts.map((t) => (t.id === id ? { ...t, ...patch } : t)));
  }

  function newTab(priv = false) {
    const id = nextId++;
    setTabs((ts) => [...ts, { id, url: null, label: priv ? "Private" : "New tab", priv }]);
    setActive(id);
    setAddress("");
  }

  function closeTab(id: number) {
    setTabs((ts) => {
      const rest = ts.filter((t) => t.id !== id);
      if (rest.length === 0) {
        const fresh = { id: nextId++, url: null, label: "New tab", priv: false };
        setActive(fresh.id);
        return [fresh];
      }
      if (active === id) setActive(rest[rest.length - 1].id);
      return rest;
    });
  }

  function go(input: string) {
    const raw = input.trim();
    if (!raw) return;
    let url: string;
    if (looksLikeUrl(raw)) {
      url = raw.startsWith("http") ? raw : `https://${raw}`;
    } else {
      url = engine.url(raw);
    }
    if (!engine.embed && !looksLikeUrl(raw)) {
      // Engines that block embedding — open in a real browser tab.
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    updateTab(tab.id, { url, label: tabLabel(url) });
    if (!tab.priv) {
      setHistory((h) => [{ url, label: tabLabel(url) }, ...h.filter((x) => x.url !== url)].slice(0, 12));
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">Utility</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        In-app <span className="text-glow-neon text-neon">browser</span>
      </h1>
      <p className="mt-3 max-w-2xl text-mist">
        Search the web without leaving FragForge — Bing, SearXNG and Marginalia
        run in-page, private tabs leave no history.
      </p>

      <div className={`panel mt-6 overflow-hidden ${tab.priv ? "border-vio/50" : ""}`}>
        {/* Tab strip */}
        <div className="flex items-center gap-1 overflow-x-auto border-b border-edge bg-panel-2 px-2 pt-2">
          {tabs.map((t) => (
            <div
              key={t.id}
              role="button"
              tabIndex={0}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => e.key === "Enter" && setActive(t.id)}
              className={`group flex max-w-40 cursor-pointer items-center gap-2 rounded-t-lg px-3 py-2 text-xs font-semibold ${
                t.id === active
                  ? t.priv
                    ? "bg-vio/15 text-vio"
                    : "bg-panel text-white"
                  : "text-faint hover:text-mist"
              }`}
            >
              {t.priv && <span>🕶</span>}
              <span className="truncate">{t.label}</span>
              <span
                role="button"
                tabIndex={-1}
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(t.id);
                }}
                className="text-faint opacity-0 hover:text-mag group-hover:opacity-100"
              >
                ✕
              </span>
            </div>
          ))}
          <button onClick={() => newTab()} title="New tab" className="mb-1 rounded-md px-2.5 py-1.5 text-sm text-faint hover:bg-white/5 hover:text-white">
            +
          </button>
          <button
            onClick={() => newTab(true)}
            title="New private tab"
            className="mb-1 rounded-md px-2.5 py-1.5 text-sm text-vio/80 hover:bg-vio/10 hover:text-vio"
          >
            🕶+
          </button>
        </div>

        {/* Address bar */}
        <div className={`flex items-center gap-2 border-b border-edge px-3 py-2.5 ${tab.priv ? "bg-vio/5" : "bg-panel"}`}>
          <select
            value={engine.id}
            onChange={(e) => setEngine(ENGINES.find((x) => x.id === e.target.value) ?? ENGINES[0])}
            aria-label="Search engine"
            className="rounded-lg border border-edge bg-void/70 px-2 py-2 text-xs font-bold text-mist outline-none focus:border-neon"
          >
            {ENGINES.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
          <form
            className="flex flex-1 items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              go(address);
            }}
          >
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder={tab.priv ? "Search privately or enter a URL…" : "Search or enter a URL…"}
              className="min-w-0 flex-1 rounded-full border border-edge bg-void/70 px-4 py-2 text-sm outline-none focus:border-neon"
            />
            <button type="submit" className="rounded-full bg-neon px-4 py-2 text-xs font-black text-void hover:shadow-[0_0_14px_rgba(255,122,26,0.4)]">
              Go
            </button>
          </form>
          {tab.url && (
            <a
              href={tab.url}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-lg border border-edge px-3 py-2 text-xs font-bold text-mist hover:border-neon hover:text-white"
            >
              Open ↗
            </a>
          )}
        </div>

        {tab.priv && (
          <p className="border-b border-vio/30 bg-vio/10 px-4 py-1.5 text-[11px] font-semibold text-vio">
            🕶 Private tab — nothing you visit here is saved. Close it and it&rsquo;s gone.
          </p>
        )}

        {/* Viewport */}
        {tab.url ? (
          <iframe key={tab.id + tab.url} src={tab.url} title="Web content" className="h-[38rem] w-full border-0 bg-white" />
        ) : (
          <div className="p-8">
            <h2 className="text-lg font-bold">Start browsing</h2>
            <p className="mt-1 text-sm text-faint">
              Search with the engine picker, or type a URL. Results for Bing,
              SearXNG and Marginalia load right here — Google, DuckDuckGo and
              Brave open in a real tab (they refuse to be embedded).
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {QUICK_LINKS.map((l) => (
                <button
                  key={l.url}
                  onClick={() => {
                    setAddress(l.url);
                    const url = l.url;
                    updateTab(tab.id, { url, label: tabLabel(url) });
                    if (!tab.priv) {
                      setHistory((h) => [{ url, label: tabLabel(url) }, ...h.filter((x) => x.url !== url)].slice(0, 12));
                    }
                  }}
                  className="rounded-full border border-edge px-4 py-2 text-xs font-bold text-mist hover:border-neon hover:text-white"
                >
                  {l.label}
                </button>
              ))}
            </div>
            {history.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-faint">Recent (non-private)</h3>
                <div className="mt-3 space-y-1.5">
                  {history.map((h) => (
                    <button
                      key={h.url}
                      onClick={() => {
                        updateTab(tab.id, { url: h.url, label: h.label });
                        setAddress(h.url);
                      }}
                      className="block w-full truncate rounded-lg border border-edge bg-void/40 px-4 py-2 text-left text-sm text-mist hover:border-neon hover:text-white"
                    >
                      {h.label} — <span className="text-faint">{h.url}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

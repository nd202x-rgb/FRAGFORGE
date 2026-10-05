"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface MediaItem {
  id: string;
  title: string;
  author: string;
  seconds: number;
  views: number;
  thumb: string;
}

type Tab = "videos" | "shorts" | "tiktok" | "instagram";

const TIKTOK_CREATORS = [
  { handle: "valorant", label: "Valorant" },
  { handle: "leagueoflegends", label: "League" },
  { handle: "fortnite", label: "Fortnite" },
  { handle: "playapex", label: "Apex" },
  { handle: "rocketleague", label: "Rocket League" },
  { handle: "overwatch", label: "Overwatch" },
  { handle: "diablo", label: "Diablo" },
  { handle: "rockstargames", label: "Rockstar" },
  { handle: "minecraft", label: "Minecraft" },
  { handle: "roblox", label: "Roblox" },
  { handle: "pubg", label: "PUBG" },
  { handle: "epicgames", label: "Epic" },
];

const IG_ACCOUNTS = [
  { handle: "valorant", label: "Valorant" },
  { handle: "leagueoflegends", label: "League" },
  { handle: "fortnite", label: "Fortnite" },
  { handle: "playapex", label: "Apex" },
  { handle: "overwatch", label: "Overwatch" },
  { handle: "callofduty", label: "Call of Duty" },
  { handle: "rockstargames", label: "Rockstar" },
  { handle: "pubg", label: "PUBG" },
  { handle: "minecraft", label: "Minecraft" },
  { handle: "roblox", label: "Roblox" },
  { handle: "xbox", label: "Xbox" },
  { handle: "playstation", label: "PlayStation" },
];

const QUICK_SEARCHES = [
  "valorant tips",
  "cs2 pro moments",
  "league of legends guide",
  "fortnite clips",
  "tekken 8 combos",
  "elden ring boss fight",
  "gaming setup",
];

function fmtViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

function fmtTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, "0")}`;
}

function Player({ item, shorts, onClose }: { item: MediaItem; shorts: boolean; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-void/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`w-full overflow-hidden rounded-2xl border border-edge bg-panel shadow-2xl ${
          shorts ? "max-w-sm" : "max-w-3xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-edge px-4 py-2.5">
          <p className="min-w-0 truncate text-sm font-bold">{item.title}</p>
          <button onClick={onClose} aria-label="Close player" className="ml-3 shrink-0 text-faint hover:text-white">
            ✕
          </button>
        </div>
        <div className={shorts ? "aspect-[9/16]" : "aspect-video"}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <p className="px-4 py-2.5 text-xs text-faint">
          {item.author} · {fmtViews(item.views)} views · plays inside FragForge
        </p>
      </div>
    </div>
  );
}

export function MediaClient() {
  const [tab, setTab] = useState<Tab>("videos");
  const [query, setQuery] = useState("valorant tips");
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [playing, setPlaying] = useState<MediaItem | null>(null);
  const [creator, setCreator] = useState(TIKTOK_CREATORS[0].handle);
  const [igUser, setIgUser] = useState(IG_ACCOUNTS[0].handle);
  const debounce = useRef<ReturnType<typeof setTimeout>>(null);

  const search = useCallback(async (q: string, mode: "videos" | "shorts") => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/media?q=${encodeURIComponent(q)}&mode=${mode}`);
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Search failed");
        setItems([]);
      } else {
        setItems(json.items);
      }
    } catch {
      setError("Search failed — try again");
      setItems([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (tab !== "videos" && tab !== "shorts") return;
    if (debounce.current) clearTimeout(debounce.current);
    debounce.current = setTimeout(() => search(query, tab), 350);
  }, [query, tab, search]);

  const isYt = tab === "videos" || tab === "shorts";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">Watch</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Media <span className="text-glow-neon text-neon">corner</span>
      </h1>
      <p className="mt-3 max-w-2xl text-mist">
        Long-form guides, shorts and creator clips from YouTube, TikTok and
        Instagram — played right here, no other tabs needed.
      </p>

      {/* Tabs */}
      <div className="mt-7 flex flex-wrap gap-2">
        {(
          [
            ["videos", "▶ Videos"],
            ["shorts", "⚡ Shorts"],
            ["tiktok", "♪ TikTok"],
            ["instagram", "◈ Instagram"],
          ] as [Tab, string][]
        ).map(([t, label]) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
              tab === t
                ? "bg-neon text-void shadow-[0_0_18px_rgba(255,122,26,0.4)]"
                : "border border-edge text-mist hover:border-neon hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {isYt && (
        <>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={tab === "shorts" ? "Search shorts — e.g. valorant clips…" : "Search videos — any game, player, technique…"}
              className="min-w-0 flex-1 rounded-full border border-edge bg-void/60 px-5 py-3 text-sm outline-none focus:border-neon"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {QUICK_SEARCHES.map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                  query === s
                    ? "border-neon bg-neon/15 text-neon"
                    : "border-edge text-faint hover:border-neon hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {loading && <p className="mt-8 text-sm text-faint">Searching {tab}…</p>}
          {error && <p className="mt-8 text-sm text-mag">{error}</p>}
          {!loading && !error && items.length === 0 && (
            <p className="mt-8 text-sm text-faint">
              Nothing found — try another search.
            </p>
          )}

          <div
            className={`mt-6 grid gap-4 ${
              tab === "shorts"
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {items.map((v) => (
              <button
                key={v.id}
                onClick={() => setPlaying(v)}
                className="panel panel-hover group overflow-hidden text-left"
              >
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element -- external thumb */}
                  <img
                    src={v.thumb}
                    alt=""
                    className={`w-full object-cover ${tab === "shorts" ? "aspect-[3/4]" : "aspect-video"}`}
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    {fmtTime(v.seconds)}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-3xl opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
                    ▶
                  </span>
                </div>
                <div className="p-3">
                  <p className="line-clamp-2 text-sm font-bold leading-snug">{v.title}</p>
                  <p className="mt-1 text-xs text-faint">
                    {v.author} · {fmtViews(v.views)} views
                  </p>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {tab === "tiktok" && (
        <>
          <p className="mt-5 text-sm text-mist">
            Official game channels — scroll and play without opening TikTok.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {TIKTOK_CREATORS.map((c) => (
              <button
                key={c.handle}
                onClick={() => setCreator(c.handle)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  creator === c.handle
                    ? "border-neon bg-neon/15 text-neon"
                    : "border-edge text-faint hover:border-neon hover:text-white"
                }`}
              >
                @{c.handle}
              </button>
            ))}
          </div>
          <div className="panel mt-5 overflow-hidden">
            <iframe
              key={creator}
              src={`https://www.tiktok.com/embed/@${creator}`}
              title={`TikTok @${creator}`}
              allowFullScreen
              scrolling="yes"
              className="h-[42rem] w-full border-0"
            />
          </div>
        </>
      )}

      {tab === "instagram" && (
        <>
          <p className="mt-5 text-sm text-mist">
            Official game accounts — browse posts and reels inside FragForge.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {IG_ACCOUNTS.map((c) => (
              <button
                key={c.handle}
                onClick={() => setIgUser(c.handle)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  igUser === c.handle
                    ? "border-neon bg-neon/15 text-neon"
                    : "border-edge text-faint hover:border-neon hover:text-white"
                }`}
              >
                @{c.handle}
              </button>
            ))}
          </div>
          <div className="panel mt-5 overflow-hidden">
            <iframe
              key={igUser}
              src={`https://www.instagram.com/${igUser}/embed/`}
              title={`Instagram @${igUser}`}
              allowFullScreen
              scrolling="yes"
              className="h-[42rem] w-full border-0"
            />
          </div>
        </>
      )}

      {playing && (
        <Player item={playing} shorts={tab === "shorts"} onClose={() => setPlaying(null)} />
      )}
    </div>
  );
}

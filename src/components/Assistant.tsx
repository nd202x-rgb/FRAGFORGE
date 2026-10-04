"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Msg {
  role: "user" | "bot";
  text: string;
  links?: { label: string; href: string }[];
  authError?: boolean;
}

const SUGGESTIONS = [
  "How do I counter-strafe in Valorant?",
  "Best budget gaming mouse?",
  "Can my PC run Elden Ring?",
  "Find teammates for Apex",
];

// Lightweight renderer for the bot's **bold** markdown.
function renderText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold text-white">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function Assistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy, open]);

  async function send(text: string) {
    const body = text.trim();
    if (!body || busy) return;
    setDraft("");
    setMessages((m) => [...m, { role: "user", text: body }]);
    setBusy(true);
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: body }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.status === 401) {
        setMessages((m) => [
          ...m,
          {
            role: "bot",
            text: "I'd love to help — but coaching is for members. Sign in (it's free) and ask me anything.",
            authError: true,
          },
        ]);
      } else if (!res.ok) {
        setMessages((m) => [
          ...m,
          { role: "bot", text: json.error ?? "Something went wrong — try again." },
        ]);
      } else {
        setMessages((m) => [...m, { role: "bot", text: json.reply, links: json.links }]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Connection hiccup — try that again." },
      ]);
    }
    setBusy(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="FORGE AI assistant"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-edge-bright bg-panel-2 shadow-[0_0_24px_rgba(255,122,26,0.35)] transition-transform hover:scale-110"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- static logo asset */}
        <img src="/logo-mark.png" alt="" className="h-9 w-9 rounded-lg object-cover" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-edge bg-panel shadow-2xl">
          <div className="flex items-center gap-2.5 border-b border-edge bg-panel-2 px-4 py-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- static logo asset */}
            <img src="/logo-mark.png" alt="" className="h-8 w-8 rounded-lg object-cover" />
            <div>
              <p className="text-sm font-extrabold leading-tight">
                FORGE <span className="text-neon">AI</span>
              </p>
              <p className="text-[11px] text-faint">Coach for all 23 games</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="ml-auto rounded-lg px-2 py-1 text-faint hover:bg-white/5 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm leading-relaxed text-white">
                  Hey! I know every technique, drill, spec and gear pick on
                  FragForge. What are we grinding today?
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-edge bg-void/60 px-3 py-1.5 text-left text-xs text-mist transition-colors hover:border-neon hover:text-white"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : ""}`}>
                <div
                  className={`max-w-[88%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm bg-neon text-void"
                      : "rounded-bl-sm border border-white/10 bg-white/5 text-mist"
                  }`}
                >
                  {renderText(m.text)}
                  {m.authError && (
                    <Link
                      href="/login?next=/games"
                      className="mt-2 inline-block rounded-lg bg-neon px-3 py-1.5 text-xs font-bold text-void"
                    >
                      Sign in free →
                    </Link>
                  )}
                  {m.links && m.links.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.links.map((l) => (
                        <Link
                          key={l.href + l.label}
                          href={l.href}
                          className="rounded-full border border-neon/40 bg-neon/10 px-2.5 py-1 text-[11px] font-bold text-neon hover:bg-neon/20"
                        >
                          {l.label} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex items-center gap-1.5 px-2 text-faint">
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-neon" />
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-neon [animation-delay:0.3s]" />
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-neon [animation-delay:0.6s]" />
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(draft);
            }}
            className="flex items-center gap-2 border-t border-edge p-3"
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              maxLength={500}
              placeholder="Ask FORGE AI…"
              className="min-w-0 flex-1 rounded-full border border-edge bg-void/60 px-4 py-2.5 text-sm outline-none focus:border-neon"
            />
            <button
              type="submit"
              disabled={busy}
              aria-label="Send"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neon text-sm font-black text-void transition-transform hover:scale-105 disabled:opacity-50"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  );
}

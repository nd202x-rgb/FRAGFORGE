"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface ChatMsg {
  id: number;
  username: string;
  body: string;
  created_at: string;
  avatar: string | null;
}

const AVATAR_COLORS = ["#22d3ee", "#8b5cf6", "#f43f8e", "#f5b942", "#4ade80", "#f97316", "#38bdf8", "#e879f9"];

function avatarColor(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function fmtTime(iso: string): string {
  return new Date(iso + "Z").toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function SquadClient({
  slug,
  accent,
  signedIn,
  username,
}: {
  slug: string;
  accent: string;
  signedIn: boolean;
  username: string | null;
}) {
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [draft, setDraft] = useState("");
  const [callOpen, setCallOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const lastId = useRef(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const pinnedToBottom = useRef(true);

  function onScroll() {
    const el = listRef.current;
    if (!el) return;
    pinnedToBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
  }

  const poll = useCallback(async () => {
    try {
      const res = await fetch(`/api/chat?room=${slug}&after=${lastId.current}`);
      if (!res.ok) return;
      const json = (await res.json()) as { messages: ChatMsg[] };
      if (json.messages.length) {
        lastId.current = json.messages[json.messages.length - 1].id;
        setMessages((m) => [...m, ...json.messages].slice(-200));
      }
    } catch {
      /* offline — next poll retries */
    }
  }, [slug]);

  useEffect(() => {
    poll();
    const t = setInterval(poll, 3000);
    return () => clearInterval(t);
  }, [poll]);

  useEffect(() => {
    const last = messages[messages.length - 1];
    const ownMessage = !!username && last?.username === username;
    if (pinnedToBottom.current || ownMessage) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, username]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const body = draft.trim();
    if (!body) return;
    setDraft("");
    setError(null);
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ room: slug, body }),
    });
    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      setError(json.error ?? "Failed to send");
      setDraft(body);
      return;
    }
    poll();
  }

  const jitsiRoom = `fragforge-${slug}`;

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-5">
      {/* Text chat */}
      <div className="panel flex h-[34rem] flex-col lg:col-span-3">
        <div className="flex items-center justify-between border-b border-edge px-5 py-3">
          <h2 className="text-sm font-bold uppercase tracking-widest text-faint">
            Lobby chat
          </h2>
          {username && <span className="chip">as {username}</span>}
        </div>
        <div
          ref={listRef}
          onScroll={onScroll}
          className="flex-1 space-y-4 overflow-y-auto px-5 py-4"
        >
          {messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full text-lg"
                style={{ backgroundColor: `${accent}18`, color: accent }}
              >
                💬
              </span>
              <p className="mt-3 max-w-xs text-sm text-faint">
                No messages yet — be the first to post your rank, region and what you&apos;re queueing.
              </p>
            </div>
          )}
          {messages.map((m) => {
            const mine = !!username && m.username === username;
            const color = avatarColor(m.username);
            return (
              <div key={m.id} className={`flex items-end gap-2.5 ${mine ? "flex-row-reverse" : ""}`}>
                {m.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element -- user-uploaded file with cache-bust query
                  <img
                    src={m.avatar}
                    alt={m.username}
                    title={m.username}
                    className="h-8 w-8 shrink-0 select-none rounded-full object-cover"
                  />
                ) : (
                  <span
                    className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full text-xs font-black text-void"
                    style={{ backgroundColor: mine ? accent : color }}
                    title={m.username}
                  >
                    {m.username.slice(0, 1).toUpperCase()}
                  </span>
                )}
                <div className={`max-w-[75%] ${mine ? "text-right" : ""}`}>
                  <p className="mb-1 px-1 text-[11px] text-faint">
                    {mine ? (
                      <span className="font-bold" style={{ color: accent }}>
                        You
                      </span>
                    ) : (
                      <Link
                        href={`/messages/${encodeURIComponent(m.username)}`}
                        className="font-bold hover:underline"
                        style={{ color }}
                        title={`Private message ${m.username}`}
                      >
                        {m.username}
                      </Link>
                    )}
                    {" · "}
                    {fmtTime(m.created_at)}
                  </p>
                  <p
                    className={`inline-block whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-left text-sm leading-relaxed ${
                      mine ? "rounded-br-sm text-void" : "rounded-bl-sm text-white"
                    }`}
                    style={
                      mine
                        ? { backgroundColor: accent }
                        : { backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }
                    }
                  >
                    {m.body}
                  </p>
                </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>
        {signedIn ? (
          <form onSubmit={send} className="flex items-center gap-2 border-t border-edge p-4">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              maxLength={500}
              placeholder="LFG? Drop your rank, region, mode…"
              className="min-w-0 flex-1 rounded-full border border-edge bg-void/60 px-4 py-2.5 text-sm outline-none focus:border-neon"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black text-void transition-transform hover:scale-105"
              style={{ backgroundColor: accent }}
            >
              ➤
            </button>
          </form>
        ) : (
          <div className="border-t border-edge p-4 text-center text-sm text-mist">
            <Link href={`/login?next=/squads/${slug}`} className="font-bold text-neon hover:underline">
              Sign in
            </Link>{" "}
            or{" "}
            <Link href="/register" className="font-bold text-neon hover:underline">
              join free
            </Link>{" "}
            to chat.
          </div>
        )}
        {error && <p className="px-4 pb-3 text-xs text-mag">{error}</p>}
      </div>

      {/* Voice & video */}
      <div className="panel flex flex-col lg:col-span-2">
        <div className="border-b border-edge px-5 py-3">
          <h2 className="text-sm font-bold uppercase tracking-widest text-faint">
            Voice & video room
          </h2>
        </div>
        <div className="flex flex-1 flex-col p-5">
          {!callOpen ? (
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <p className="max-w-xs text-sm text-mist">
                Jump into the public voice/video lobby for this game — powered by
                Jitsi Meet, no install needed. Anyone with the link can join.
              </p>
              <button
                onClick={() => setCallOpen(true)}
                className="mt-5 rounded-lg px-6 py-3 text-sm font-bold text-void transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: accent }}
              >
                Start call
              </button>
              <p className="mt-3 text-xs text-faint">
                Room: meet.jit.si/{jitsiRoom}
              </p>
            </div>
          ) : (
            <>
              <iframe
                src={`https://meet.jit.si/${jitsiRoom}#config.prejoinPageEnabled=false&userInfo.displayName=${encodeURIComponent(username ?? "FragForge player")}`}
                allow="camera; microphone; display-capture; autoplay; clipboard-write"
                className="h-[26rem] w-full rounded-lg border border-edge"
                title={`${slug} voice and video room`}
              />
              <button
                onClick={() => setCallOpen(false)}
                className="mt-3 self-center text-xs font-bold text-mag hover:underline"
              >
                Leave call
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

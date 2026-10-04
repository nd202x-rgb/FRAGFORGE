"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface ChatMsg {
  id: number;
  username: string;
  body: string;
  created_at: string;
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
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

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
        <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
          {messages.length === 0 && (
            <p className="text-sm text-faint">
              No messages yet — be the first to post your rank, region and what you&apos;re queueing.
            </p>
          )}
          {messages.map((m) => (
            <div key={m.id} className="text-sm">
              <span className="font-bold" style={{ color: accent }}>
                {m.username}
              </span>
              <span className="ms-2 text-xs text-faint">
                {new Date(m.created_at + "Z").toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
              <p className="text-mist">{m.body}</p>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        {signedIn ? (
          <form onSubmit={send} className="flex gap-2 border-t border-edge p-4">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              maxLength={500}
              placeholder="LFG? Drop your rank, region, mode…"
              className="min-w-0 flex-1 rounded-lg border border-edge bg-void/60 px-3 py-2.5 text-sm outline-none focus:border-neon"
            />
            <button
              type="submit"
              className="rounded-lg px-5 text-sm font-bold text-void transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: accent }}
            >
              Send
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

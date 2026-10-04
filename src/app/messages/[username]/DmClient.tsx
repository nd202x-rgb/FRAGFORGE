"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Avatar, avatarColor } from "../InboxClient";

interface DmMsg {
  id: number;
  mine: boolean;
  body: string;
  created_at: string;
}

interface Peer {
  username: string;
  avatar: string | null;
  pro: number;
}

function fmtTime(iso: string): string {
  return new Date(iso + "Z").toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function DmClient({ peer, me }: { peer: Peer; me: string }) {
  const [messages, setMessages] = useState<DmMsg[]>([]);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState<string | null>(null);
  const lastId = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const pinnedToBottom = useRef(true);
  const peerName = peer.username;
  const peerColor = avatarColor(peerName);

  function onScroll() {
    const el = listRef.current;
    if (!el) return;
    pinnedToBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
  }

  const poll = useCallback(async () => {
    try {
      const res = await fetch(
        `/api/dm/${encodeURIComponent(peerName)}?after=${lastId.current}`,
      );
      if (!res.ok) return;
      const json = (await res.json()) as { messages: DmMsg[] };
      if (json.messages.length) {
        lastId.current = json.messages[json.messages.length - 1].id;
        setMessages((m) => [...m, ...json.messages].slice(-200));
      }
    } catch {
      /* next poll retries */
    }
  }, [peerName]);

  useEffect(() => {
    poll();
    const t = setInterval(poll, 3000);
    return () => clearInterval(t);
  }, [poll]);

  useEffect(() => {
    const last = messages[messages.length - 1];
    if (pinnedToBottom.current || last?.mine) {
      const el = listRef.current;
      if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const body = draft.trim();
    if (!body) return;
    setDraft("");
    setError(null);
    const res = await fetch(`/api/dm/${encodeURIComponent(peerName)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body }),
    });
    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      setError(json.error ?? "Failed to send");
      setDraft(body);
      return;
    }
    poll();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link href="/messages" className="text-sm font-bold text-neon hover:underline">
        ← All messages
      </Link>

      <div className="panel mt-4 flex h-[calc(100vh-13rem)] min-h-[28rem] flex-col">
        <div className="flex items-center gap-3 border-b border-edge px-5 py-3.5">
          <Avatar username={peerName} avatar={peer.avatar} size={9} />
          <div>
            <p className="font-bold leading-tight">{peerName}</p>
            <p className="text-xs text-faint">Private chat — only you two can see this</p>
          </div>
          {!!peer.pro && (
            <span className="chip ml-auto border-gold/40 bg-gold/10 font-bold text-gold">
              GO PRO
            </span>
          )}
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
                style={{ backgroundColor: `${peerColor}18`, color: peerColor }}
              >
                ⚔
              </span>
              <p className="mt-3 max-w-xs text-sm text-faint">
                Say hi to {peerName} — squad up, trade tips or plan a scrim.
              </p>
            </div>
          )}
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-end gap-2.5 ${m.mine ? "flex-row-reverse" : ""}`}
            >
              {m.mine ? (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neon text-xs font-black text-void">
                  {me.slice(0, 1).toUpperCase()}
                </span>
              ) : (
                <Avatar username={peerName} avatar={peer.avatar} size={8} />
              )}
              <div className={`max-w-[75%] ${m.mine ? "text-right" : ""}`}>
                <p className="mb-1 px-1 text-[11px] text-faint">
                  <span
                    className="font-bold"
                    style={{ color: m.mine ? "#ff7a1a" : peerColor }}
                  >
                    {m.mine ? "You" : peerName}
                  </span>
                  {" · "}
                  {fmtTime(m.created_at)}
                </p>
                <p
                  className={`inline-block whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-left text-sm leading-relaxed ${
                    m.mine ? "rounded-br-sm bg-neon text-void" : "rounded-bl-sm text-white"
                  }`}
                  style={
                    m.mine
                      ? undefined
                      : {
                          backgroundColor: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }
                  }
                >
                  {m.body}
                </p>
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={send} className="flex items-center gap-2 border-t border-edge p-4">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            maxLength={500}
            placeholder={`Message ${peerName}…`}
            className="min-w-0 flex-1 rounded-full border border-edge bg-void/60 px-4 py-2.5 text-sm outline-none focus:border-neon"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neon text-sm font-black text-void transition-transform hover:scale-105"
          >
            ➤
          </button>
        </form>
        {error && <p className="px-4 pb-3 text-xs text-mag">{error}</p>}
      </div>
    </div>
  );
}

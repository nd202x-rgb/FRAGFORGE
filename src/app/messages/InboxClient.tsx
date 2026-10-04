"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

interface Conversation {
  username: string;
  avatar: string | null;
  last_body: string;
  last_at: string;
  unread: number;
}

interface FoundUser {
  username: string;
  avatar: string | null;
  pro: number;
}

const AVATAR_COLORS = ["#ff7a1a", "#8b5cf6", "#f43f8e", "#f5b942", "#4ade80", "#f97316", "#38bdf8", "#e879f9"];

export function avatarColor(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

const SIZE_CLS: Record<number, string> = {
  8: "h-8 w-8",
  9: "h-9 w-9",
  10: "h-10 w-10",
  12: "h-12 w-12",
};

export function Avatar({
  username,
  avatar,
  size = 10,
}: {
  username: string;
  avatar: string | null;
  size?: number;
}) {
  const cls = SIZE_CLS[size] ?? "h-10 w-10";
  if (avatar) {
    // eslint-disable-next-line @next/next/no-img-element -- user-uploaded file with cache-bust query
    return <img src={avatar} alt="" className={`${cls} shrink-0 rounded-full object-cover`} />;
  }
  return (
    <span
      className={`${cls} flex shrink-0 items-center justify-center rounded-full text-sm font-black text-void`}
      style={{ backgroundColor: avatarColor(username) }}
    >
      {username.slice(0, 1).toUpperCase()}
    </span>
  );
}

function fmtWhen(iso: string): string {
  const d = new Date(iso + "Z");
  const now = Date.now();
  if (now - d.getTime() < 24 * 3600 * 1000) {
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  return d.toLocaleDateString([], { month: "short", day: "numeric" });
}

export function InboxClient() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [q, setQ] = useState("");
  const [results, setResults] = useState<FoundUser[]>([]);
  const [searching, setSearching] = useState(false);
  const debounce = useRef<ReturnType<typeof setTimeout>>(null);

  const poll = useCallback(async () => {
    try {
      const res = await fetch("/api/dm");
      if (res.ok) {
        const json = await res.json();
        setConversations(json.conversations);
      }
    } catch {
      /* next poll retries */
    }
  }, []);

  useEffect(() => {
    const first = setTimeout(poll, 0);
    const t = setInterval(poll, 4000);
    return () => {
      clearTimeout(first);
      clearInterval(t);
    };
  }, [poll]);

  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);
    const term = q.trim();
    if (!term) return;
    debounce.current = setTimeout(async () => {
      const res = await fetch(`/api/users?q=${encodeURIComponent(term)}`);
      if (res.ok) {
        const json = await res.json();
        setResults(json.users);
      }
      setSearching(false);
    }, 250);
  }, [q]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
        Direct messages
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Private <span className="text-glow-neon text-neon">messages</span>
      </h1>

      <div className="panel mt-8 p-5">
        <input
          value={q}
          onChange={(e) => {
            const v = e.target.value;
            setQ(v);
            if (v.trim()) {
              setSearching(true);
            } else {
              setSearching(false);
              setResults([]);
            }
          }}
          placeholder="Find a player to message — type their username…"
          className="w-full rounded-full border border-edge bg-void/60 px-5 py-3 text-sm outline-none focus:border-neon"
        />
        {q.trim() && (
          <div className="mt-3 divide-y divide-edge overflow-hidden rounded-xl border border-edge">
            {results.map((u) => (
              <Link
                key={u.username}
                href={`/messages/${encodeURIComponent(u.username)}`}
                className="flex items-center gap-3 bg-void/40 px-4 py-3 transition-colors hover:bg-white/5"
              >
                <Avatar username={u.username} avatar={u.avatar} size={9} />
                <span className="font-semibold">{u.username}</span>
                {!!u.pro && (
                  <span className="chip border-gold/40 bg-gold/10 text-[10px] font-bold text-gold">
                    PRO
                  </span>
                )}
                <span className="ml-auto text-xs font-bold text-neon">Message →</span>
              </Link>
            ))}
            {!searching && results.length === 0 && (
              <p className="px-4 py-3 text-sm text-faint">No players match “{q.trim()}”.</p>
            )}
          </div>
        )}
      </div>

      <div className="panel mt-6 overflow-hidden">
        <div className="border-b border-edge px-5 py-3">
          <h2 className="text-sm font-bold uppercase tracking-widest text-faint">
            Conversations
          </h2>
        </div>
        {conversations.length === 0 ? (
          <p className="px-5 py-10 text-center text-sm text-faint">
            No private chats yet — search a username above, or click a player&apos;s
            name in any squad room to start one.
          </p>
        ) : (
          <div className="divide-y divide-edge">
            {conversations.map((c) => (
              <Link
                key={c.username}
                href={`/messages/${encodeURIComponent(c.username)}`}
                className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-white/5"
              >
                <Avatar username={c.username} avatar={c.avatar} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="truncate font-bold">{c.username}</p>
                    <span className="shrink-0 text-xs text-faint">{fmtWhen(c.last_at)}</span>
                  </div>
                  <p className="mt-0.5 truncate text-sm text-faint">{c.last_body}</p>
                </div>
                {c.unread > 0 && (
                  <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-neon px-1.5 text-[11px] font-black text-void">
                    {c.unread > 9 ? "9+" : c.unread}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

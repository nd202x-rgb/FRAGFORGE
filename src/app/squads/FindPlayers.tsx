"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RoleBadge } from "@/components/RoleBadge";

interface Player {
  username: string;
  avatar: string | null;
  pro: number;
  role: string;
  bio: string;
}

const AVATAR_COLORS = ["#ff7a1a", "#8b5cf6", "#f43f8e", "#f5b942", "#4ade80", "#f97316", "#38bdf8", "#e879f9"];

function avatarColor(name: string): string {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) | 0;
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

export function FindPlayers({
  signedIn,
  isPro,
}: {
  signedIn: boolean;
  isPro: boolean;
}) {
  const [q, setQ] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const debounce = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);
    debounce.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/users?q=${encodeURIComponent(q.trim())}`);
        if (res.ok) {
          const json = await res.json();
          setPlayers(json.users);
        }
      } finally {
        setLoading(false);
      }
    }, 250);
  }, [q]);

  return (
    <div className="panel mt-8 p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold">
            Find <span className="text-neon">players</span>
          </h2>
          <p className="mt-1 text-sm text-mist">
            Search anyone on FragForge and start a private chat.{" "}
            {!isPro && (
              <span className="text-gold">Messaging is a GO PRO feature.</span>
            )}
          </p>
        </div>
        <Link
          href="/messages"
          className="rounded-lg bg-neon px-4 py-2 text-sm font-bold text-void transition-all hover:shadow-[0_0_20px_rgba(255,122,26,0.45)]"
        >
          Private messages →
        </Link>
      </div>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search players by username…"
        className="mt-4 w-full rounded-full border border-edge bg-void/60 px-5 py-3 text-sm outline-none focus:border-neon"
      />

      {!signedIn ? (
        <p className="mt-5 text-sm text-faint">
          <Link href="/login?next=/squads" className="font-bold text-neon hover:underline">
            Sign in
          </Link>{" "}
          to browse and message players.
        </p>
      ) : loading ? (
        <p className="mt-5 text-sm text-faint">Loading players…</p>
      ) : players.length === 0 ? (
        <p className="mt-5 text-sm text-faint">
          No players match “{q.trim()}”.
        </p>
      ) : (
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {players.map((p) => (
            <div
              key={p.username}
              className="flex items-center gap-3 rounded-xl border border-edge bg-void/40 p-3.5"
            >
              {p.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element -- user-uploaded file with cache-bust query
                <img src={p.avatar} alt="" className="h-11 w-11 shrink-0 rounded-full object-cover" />
              ) : (
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-black text-void"
                  style={{ backgroundColor: avatarColor(p.username) }}
                >
                  {p.username.slice(0, 1).toUpperCase()}
                </span>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <p className="truncate font-bold">{p.username}</p>
                  <RoleBadge role={p.role} pro={p.pro} />
                </div>
                {p.bio && (
                  <p className="mt-0.5 truncate text-xs text-faint">{p.bio}</p>
                )}
              </div>
              <Link
                href={isPro ? `/messages/${encodeURIComponent(p.username)}` : "/gopro"}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-transform hover:scale-105 ${
                  isPro
                    ? "bg-neon text-void"
                    : "border border-gold/40 bg-gold/10 text-gold"
                }`}
              >
                {isPro ? "Message" : "PRO 🔒"}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

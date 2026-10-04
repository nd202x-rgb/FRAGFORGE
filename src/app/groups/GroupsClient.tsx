"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Avatar } from "../messages/InboxClient";
import { RoleBadge } from "@/components/RoleBadge";

interface Group {
  id: number;
  name: string;
  members: number;
  last_body: string | null;
  last_at: string | null;
}

interface FoundUser {
  username: string;
  avatar: string | null;
  pro: number;
  role: string;
}

export function GroupsClient({ isPro }: { isPro: boolean }) {
  const [groups, setGroups] = useState<Group[]>([]);
  const [name, setName] = useState("");
  const [memberQ, setMemberQ] = useState("");
  const [results, setResults] = useState<FoundUser[]>([]);
  const [picks, setPicks] = useState<FoundUser[]>([]);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debounce = useRef<ReturnType<typeof setTimeout>>(null);
  const router = useRouter();

  const load = useCallback(async () => {
    const res = await fetch("/api/groups");
    if (res.ok) {
      const json = await res.json();
      setGroups(json.groups);
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(load, 0);
    const i = setInterval(load, 8000);
    return () => {
      clearTimeout(t);
      clearInterval(i);
    };
  }, [load]);

  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);
    const term = memberQ.trim();
    if (!term) return;
    debounce.current = setTimeout(async () => {
      const res = await fetch(`/api/users?q=${encodeURIComponent(term)}`);
      if (res.ok) {
        const json = await res.json();
        setResults(json.users.filter((u: FoundUser) => !picks.some((p) => p.username === u.username)));
      }
    }, 250);
  }, [memberQ, picks]);

  async function create(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || creating) return;
    setCreating(true);
    setError(null);
    const res = await fetch("/api/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.trim(), members: picks.map((p) => p.username) }),
    });
    setCreating(false);
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(json.error ?? "Could not create group");
      return;
    }
    router.push(`/groups/${json.id}`);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">Social</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Friend <span className="text-glow-neon text-neon">groups</span>
      </h1>
      <p className="mt-3 max-w-xl text-mist">
        Private group chats for your crew — name it anything, add whoever you
        like, share media. Creating groups is a GO PRO perk; anyone invited can chat.
      </p>

      {/* Create */}
      <form onSubmit={create} className="panel mt-8 p-5 sm:p-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-faint">
          Create a group
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={40}
            placeholder="Group name — e.g. Ranked Grinders, Friday Fortnite…"
            className="min-w-0 flex-1 rounded-full border border-edge bg-void/60 px-5 py-3 text-sm outline-none focus:border-neon"
          />
          <button
            type="submit"
            disabled={!name.trim() || creating || !isPro}
            className="rounded-full bg-neon px-6 py-3 text-sm font-extrabold text-void transition-all hover:shadow-[0_0_20px_rgba(255,122,26,0.45)] disabled:opacity-40"
          >
            {creating ? "Creating…" : "Create"}
          </button>
        </div>
        {!isPro && (
          <p className="mt-3 text-sm text-gold">
            Creating groups needs{" "}
            <Link href="/gopro" className="font-bold underline">
              GO PRO
            </Link>{" "}
            — but you can chat in any group you&rsquo;re added to.
          </p>
        )}

        {/* Member picker */}
        <input
          value={memberQ}
          onChange={(e) => setMemberQ(e.target.value)}
          placeholder="Add members — search usernames…"
          className="mt-4 w-full rounded-full border border-edge bg-void/60 px-5 py-2.5 text-sm outline-none focus:border-neon"
        />
        {memberQ.trim() && results.length > 0 && (
          <div className="mt-2 divide-y divide-edge overflow-hidden rounded-xl border border-edge">
            {results.slice(0, 5).map((u) => (
              <button
                type="button"
                key={u.username}
                onClick={() => {
                  setPicks((p) => [...p, u]);
                  setMemberQ("");
                  setResults([]);
                }}
                className="flex w-full items-center gap-3 bg-void/40 px-4 py-2.5 text-left transition-colors hover:bg-white/5"
              >
                <Avatar username={u.username} avatar={u.avatar} size={8} />
                <span className="font-semibold">{u.username}</span>
                <RoleBadge role={u.role} pro={u.pro} />
                <span className="ml-auto text-xs font-bold text-neon">+ Add</span>
              </button>
            ))}
          </div>
        )}
        {picks.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {picks.map((p) => (
              <span
                key={p.username}
                className="flex items-center gap-2 rounded-full border border-edge bg-void/60 py-1 pl-1 pr-2.5 text-sm"
              >
                <Avatar username={p.username} avatar={p.avatar} size={8} />
                {p.username}
                <button
                  type="button"
                  onClick={() => setPicks((x) => x.filter((y) => y.username !== p.username))}
                  className="text-faint hover:text-mag"
                  aria-label={`Remove ${p.username}`}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        )}
        {error && <p className="mt-3 text-sm text-mag">{error}</p>}
      </form>

      {/* Group list */}
      <div className="mt-8">
        <h2 className="text-sm font-bold uppercase tracking-widest text-faint">
          Your groups
        </h2>
        {groups.length === 0 ? (
          <p className="mt-4 text-sm text-faint">
            No groups yet — create one above{!isPro ? " (needs GO PRO)" : ""}, or ask
            a friend to add you to theirs.
          </p>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {groups.map((g) => (
              <Link
                key={g.id}
                href={`/groups/${g.id}`}
                className="panel panel-hover flex items-center gap-3.5 p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-neon/15 text-sm font-black text-neon">
                  {g.name.slice(0, 2).toUpperCase()}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="truncate font-bold">{g.name}</p>
                    <span className="chip shrink-0 text-[10px]">{g.members} players</span>
                  </div>
                  <p className="mt-0.5 truncate text-xs text-faint">
                    {g.last_body || "No messages yet"}
                  </p>
                </div>
                <span className="text-sm font-bold text-neon">→</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

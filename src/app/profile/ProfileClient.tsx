"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

interface Profile {
  username: string;
  email: string;
  avatar: string | null;
  bio: string;
  pro: boolean;
  memberSince: string;
  linkedCount: number;
}

export function ProfileClient({ initial }: { initial: Profile }) {
  const [avatar, setAvatar] = useState(initial.avatar);
  const [bio, setBio] = useState(initial.bio);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function uploadAvatar(file: File) {
    setError(null);
    setMsg(null);
    setBusy(true);
    const form = new FormData();
    form.append("avatar", file);
    const res = await fetch("/api/profile", { method: "POST", body: form });
    setBusy(false);
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(json.error ?? "Upload failed");
      return;
    }
    setAvatar(json.avatar);
    setMsg("Profile picture updated");
    router.refresh();
  }

  async function saveBio() {
    setError(null);
    setMsg(null);
    setBusy(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bio }),
    });
    setBusy(false);
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(json.error ?? "Save failed");
      return;
    }
    setMsg("Bio saved");
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
        Player card
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        My <span className="text-glow-neon text-neon">profile</span>
      </h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        {/* Identity card */}
        <div className="panel relative overflow-hidden p-6 lg:col-span-2">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon/10 blur-3xl" />
          <div className="flex flex-col items-center text-center">
            <button
              onClick={() => fileRef.current?.click()}
              className="group relative h-28 w-28 overflow-hidden rounded-2xl border-2 border-edge transition-colors hover:border-neon"
              title="Change profile picture"
            >
              {avatar ? (
                // eslint-disable-next-line @next/next/no-img-element -- user-uploaded file with cache-bust query
                <img src={avatar} alt={initial.username} className="h-full w-full object-cover" />
              ) : (
                <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neon to-vio text-4xl font-black text-void">
                  {initial.username.slice(0, 1).toUpperCase()}
                </span>
              )}
              <span className="absolute inset-0 flex items-center justify-center bg-black/55 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                Change photo
              </span>
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/png,image/jpeg,image/webp,image/gif"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) uploadAvatar(f);
                e.target.value = "";
              }}
            />
            <h2 className="mt-4 text-xl font-extrabold">{initial.username}</h2>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {initial.pro && (
                <span className="chip border-gold/40 bg-gold/10 font-bold text-gold">
                  GO PRO
                </span>
              )}
              <span className="chip">
                Member since {new Date(initial.memberSince + "Z").toLocaleDateString()}
              </span>
            </div>
            <p className="mt-3 text-sm text-mist">{initial.email}</p>
            <p className="mt-1 text-xs text-faint">
              PNG / JPG / WebP / GIF, up to 3 MB — shown in squad chat and DMs
            </p>
          </div>

          <div className="mt-6 border-t border-edge pt-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-mist">Linked game accounts</span>
              <Link href="/connect" className="font-bold text-neon hover:underline">
                {initial.linkedCount} linked · manage →
              </Link>
            </div>
          </div>
        </div>

        {/* Bio editor */}
        <div className="panel p-6 lg:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-faint">
            Bio
          </h3>
          <p className="mt-1 text-xs text-faint">
            Tell other players your main, rank and what you queue. Max 280 chars.
          </p>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={280}
            rows={5}
            placeholder="e.g. Immortal Jett main · EU · looking for a 5-stack for ranked grind…"
            className="mt-4 w-full resize-none rounded-xl border border-edge bg-void/60 px-4 py-3 text-sm leading-relaxed outline-none focus:border-neon"
          />
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-faint">{bio.length}/280</span>
            <button
              onClick={saveBio}
              disabled={busy}
              className="rounded-lg bg-neon px-5 py-2 text-sm font-bold text-void transition-all hover:shadow-[0_0_20px_rgba(255,122,26,0.45)] disabled:opacity-50"
            >
              Save bio
            </button>
          </div>
          {error && <p className="mt-3 text-sm text-mag">{error}</p>}
          {msg && <p className="mt-3 text-sm text-neon">{msg}</p>}

          <div className="mt-6 grid gap-3 border-t border-edge pt-6 sm:grid-cols-2">
            <Link
              href="/messages"
              className="panel-hover rounded-xl border border-edge bg-void/40 p-4"
            >
              <p className="font-bold">Private messages →</p>
              <p className="mt-1 text-xs text-faint">
                Chat 1:1 with anyone on FragForge
              </p>
            </Link>
            <Link
              href="/squads"
              className="panel-hover rounded-xl border border-edge bg-void/40 p-4"
            >
              <p className="font-bold">Squad rooms →</p>
              <p className="mt-1 text-xs text-faint">
                Find teammates per game, with voice & video
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

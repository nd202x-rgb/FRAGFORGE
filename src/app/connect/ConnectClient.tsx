"use client";

import { useState, type FormEvent } from "react";

interface PlatformDef {
  id: string;
  name: string;
  placeholder: string;
  hint: string;
  accent: string;
  findUrl?: { label: string; url: string };
}

const PLATFORMS: PlatformDef[] = [
  {
    id: "discord",
    name: "Discord",
    placeholder: "username (e.g. shadowsniper)",
    hint: "Your Discord @username — used for squad invites.",
    accent: "#5865f2",
    findUrl: { label: "Open Discord", url: "https://discord.com/app" },
  },
  {
    id: "steam",
    name: "Steam",
    placeholder: "Vanity URL or SteamID64",
    hint: "Profile → Edit Profile → Custom URL, or your 17-digit SteamID64.",
    accent: "#66c0f4",
    findUrl: { label: "steamcommunity.com", url: "https://steamcommunity.com/my/profile" },
  },
  {
    id: "riot",
    name: "Riot ID",
    placeholder: "Name#TAG (e.g. TenZ#NA1)",
    hint: "Used for Valorant, League of Legends and TFT.",
    accent: "#eb0029",
    findUrl: { label: "account.riotgames.com", url: "https://account.riotgames.com" },
  },
  {
    id: "epic",
    name: "Epic Games",
    placeholder: "Epic display name",
    hint: "Fortnite and Rocket League identity.",
    accent: "#a1a1aa",
    findUrl: { label: "epicgames.com/account", url: "https://www.epicgames.com/account/personal" },
  },
  {
    id: "battlenet",
    name: "Battle.net",
    placeholder: "Name#1234",
    hint: "Overwatch 2 and Call of Duty: Warzone.",
    accent: "#00aeff",
    findUrl: { label: "account.battle.net", url: "https://account.battle.net" },
  },
  {
    id: "ea",
    name: "EA / Origin",
    placeholder: "EA ID",
    hint: "Apex Legends and EA FC.",
    accent: "#ff4747",
    findUrl: { label: "myaccount.ea.com", url: "https://myaccount.ea.com" },
  },
  {
    id: "xbox",
    name: "Xbox",
    placeholder: "Gamertag",
    hint: "Your Xbox Live gamertag.",
    accent: "#107c10",
    findUrl: { label: "xbox.com", url: "https://account.xbox.com/Profile" },
  },
  {
    id: "psn",
    name: "PlayStation",
    placeholder: "PSN ID",
    hint: "Your PSN Online ID.",
    accent: "#0070d1",
    findUrl: { label: "psnprofiles.com", url: "https://psnprofiles.com" },
  },
];

export function ConnectClient({
  initialLinked,
  discordClientId,
}: {
  initialLinked: Record<string, string>;
  discordClientId: string | null;
}) {
  const [linked, setLinked] = useState<Record<string, string>>(initialLinked);
  const [values, setValues] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState<Record<string, string>>({});

  async function link(e: FormEvent<HTMLFormElement>, platform: string) {
    e.preventDefault();
    const tag = (values[platform] ?? "").trim();
    if (tag.length < 2) return;
    const res = await fetch("/api/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ platform, tag }),
    });
    const json = await res.json().catch(() => ({}));
    if (res.ok) {
      setLinked((l) => ({ ...l, [platform]: tag }));
      setMsg((m) => ({ ...m, [platform]: "Linked ✓" }));
    } else {
      setMsg((m) => ({ ...m, [platform]: json.error ?? "Failed" }));
    }
  }

  async function unlink(platform: string) {
    await fetch(`/api/accounts?platform=${platform}`, { method: "DELETE" });
    setLinked((l) => {
      const next = { ...l };
      delete next[platform];
      return next;
    });
    setMsg((m) => ({ ...m, [platform]: "Removed" }));
  }

  const discordOAuthUrl = discordClientId
    ? `https://discord.com/oauth2/authorize?client_id=${discordClientId}&response_type=code&scope=identify&prompt=consent`
    : null;

  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {PLATFORMS.map((p) => {
        const current = linked[p.id];
        return (
          <div key={p.id} className="panel p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-black text-void"
                  style={{ backgroundColor: p.accent }}
                >
                  {p.name.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <h3 className="font-bold">{p.name}</h3>
                  {p.findUrl && (
                    <a
                      href={p.findUrl.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-faint hover:text-neon"
                    >
                      {p.findUrl.label} ↗
                    </a>
                  )}
                </div>
              </div>
              {current && <span className="chip border-neon/50 text-neon">Linked</span>}
            </div>
            <p className="mt-3 text-xs text-mist">{p.hint}</p>
            {current ? (
              <div className="mt-3 flex items-center justify-between rounded-lg border border-edge bg-void/60 px-3 py-2.5">
                <span className="text-sm font-semibold">{current}</span>
                <button
                  onClick={() => unlink(p.id)}
                  className="text-xs font-bold text-mag hover:underline"
                >
                  Unlink
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => link(e, p.id)} className="mt-3 flex gap-2">
                <input
                  value={values[p.id] ?? ""}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, [p.id]: e.target.value }))
                  }
                  placeholder={p.placeholder}
                  className="min-w-0 flex-1 rounded-lg border border-edge bg-void/60 px-3 py-2 text-sm outline-none focus:border-neon"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-white/[0.07] px-4 text-sm font-bold transition-colors hover:bg-white/[0.12]"
                >
                  Link
                </button>
              </form>
            )}
            {p.id === "discord" && discordOAuthUrl && !current && (
              <a
                href={discordOAuthUrl}
                className="mt-2 block text-center text-xs font-semibold text-[#5865f2] hover:underline"
              >
                or connect via Discord OAuth ↗
              </a>
            )}
            {msg[p.id] && <p className="mt-2 text-xs text-faint">{msg[p.id]}</p>}
          </div>
        );
      })}
    </div>
  );
}

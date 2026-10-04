import type { Metadata } from "next";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { GAMES } from "@/lib/games";
import { ConnectClient } from "./ConnectClient";

export const metadata: Metadata = {
  title: "Connect accounts",
  description: "Link Discord and game accounts to your FragForge profile.",
};

export const dynamic = "force-dynamic";

export default async function ConnectPage() {
  const user = await getCurrentUser();
  if (!user) {
    return (
      <div className="mx-auto max-w-md px-4 py-24 text-center">
        <div className="panel p-10">
          <h1 className="text-2xl font-extrabold">Sign in required</h1>
          <p className="mt-2 text-sm text-mist">
            Create an account to link Discord, Steam and your game profiles.
          </p>
          <Link
            href="/login?next=/connect"
            className="mt-6 inline-block rounded-lg bg-neon px-6 py-2.5 text-sm font-bold text-void"
          >
            Sign in
          </Link>
        </div>
      </div>
    );
  }
  const rows = getDb()
    .prepare("SELECT platform, tag FROM linked_accounts WHERE user_id = ?")
    .all(user.id) as { platform: string; tag: string }[];
  const linked = Object.fromEntries(rows.map((r) => [r.platform, r.tag]));

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <span className="chip">Signed in as {user.username}</span>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
        Link your accounts
      </h1>
      <p className="mt-3 max-w-2xl text-mist">
        Add your gamer tags so squadmates can find you — stored on your profile,
        editable any time.
      </p>
      <ConnectClient initialLinked={linked} discordClientId={process.env.DISCORD_CLIENT_ID ?? null} />

      <section className="mt-16">
        <h2 className="text-2xl font-extrabold tracking-tight">Join the community Discords</h2>
        <p className="mt-2 max-w-2xl text-sm text-mist">
          Official and community servers for every game we cover — LFG, patch talk,
          tournaments and scrims.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((g) => (
            <div key={g.slug} className="panel panel-hover p-4">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-black"
                  style={{ backgroundColor: `${g.accent}22`, color: g.accent }}
                >
                  {g.short}
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold">{g.name}</h3>
                  <a
                    href={g.site}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-faint hover:text-neon"
                  >
                    Official site ↗
                  </a>
                </div>
                <a
                  href={g.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="ms-auto rounded-lg bg-[#5865f2] px-3 py-1.5 text-xs font-bold text-white transition-transform hover:scale-105"
                >
                  Join ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

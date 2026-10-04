import type { Metadata } from "next";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";
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
    </div>
  );
}

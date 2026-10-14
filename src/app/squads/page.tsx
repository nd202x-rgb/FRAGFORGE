import type { Metadata } from "next";
import Link from "next/link";
import { GAMES } from "@/lib/games";
import { getCurrentUser } from "@/lib/auth";
import { Reveal } from "@/components/Reveal";
import { FindPlayers } from "./FindPlayers";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Squad rooms",
  description: "Find teammates for every game — text chat plus voice and video rooms.",
};

export default async function SquadsPage() {
  const user = await getCurrentUser();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="chip">Community</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Squad rooms
        </h1>
        <p className="mt-3 max-w-2xl text-mist">
          One room per game — chat in text, or jump into the built-in voice and
          video room to find a squad for your next match.
        </p>
      </Reveal>

      <FindPlayers signedIn={!!user} />

      {/* Global lounge — open to every member */}
      <Reveal delay={0.05}>
        <Link
          href="/squads/lounge"
          className="panel panel-hover group mt-8 flex items-center gap-4 p-5"
          style={{
            borderColor: "#f5b94255",
            backgroundImage:
              "linear-gradient(120deg, rgba(245,185,66,0.12), transparent 55%)",
          }}
        >
          <span
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-sm font-black"
            style={{ backgroundColor: "#f5b94222", color: "#f5b942" }}
          >
            GL
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-extrabold text-lg">Global Lounge</h3>
              <span className="chip" style={{ borderColor: "#f5b94266", color: "#f5b942" }}>
                Open to all members
              </span>
            </div>
            <p className="mt-0.5 text-sm text-mist">
              The public lobby for every signed-up player — hang out, talk
              anything, meet people even if you&apos;re not queuing a game.
              Chat · Voice · Video
            </p>
          </div>
          <span
            className="ms-auto shrink-0 rounded-lg px-4 py-2 text-sm font-bold text-void transition-transform group-hover:scale-[1.03]"
            style={{ backgroundColor: "#f5b942" }}
          >
            Enter →
          </span>
        </Link>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map((g, i) => (
          <Reveal key={g.slug} delay={Math.min(i * 0.03, 0.3)}>
            <Link
              href={`/squads/${g.slug}`}
              className="panel panel-hover group flex items-center gap-3 p-4"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg text-xs font-black"
                style={{ backgroundColor: `${g.accent}22`, color: g.accent }}
              >
                {g.short}
              </span>
              <div className="min-w-0">
                <h3 className="truncate font-bold">{g.name}</h3>
                <p className="text-xs text-faint">Chat · Voice · Video</p>
              </div>
              <span
                className="ms-auto text-sm font-bold opacity-0 transition-opacity group-hover:opacity-100"
                style={{ color: g.accent }}
              >
                →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

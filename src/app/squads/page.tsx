import type { Metadata } from "next";
import Link from "next/link";
import { GAMES } from "@/lib/games";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Squad rooms",
  description: "Find teammates for every game — text chat plus voice and video rooms.",
};

export default function SquadsPage() {
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
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

import type { Metadata } from "next";
import { GAMES } from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Game guides",
  description: "Pro techniques and PvP guides for every major competitive game.",
};

export default function GamesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="chip">{GAMES.length} titles</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Every game. Every technique.
        </h1>
        <p className="mt-3 max-w-2xl text-mist">
          Pick a title and get straight to what wins: real PvP techniques,
          drills, pro settings and counter-play — no fluff.
        </p>
      </Reveal>
      <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {GAMES.map((g) => (
          <StaggerItem key={g.slug}>
            <GameCard game={g} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

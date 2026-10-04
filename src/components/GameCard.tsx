import Link from "next/link";
import type { GameMeta } from "@/lib/games";

export function GameCard({ game }: { game: GameMeta }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="panel panel-hover group relative block overflow-hidden p-5"
    >
      <div
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-45"
        style={{ backgroundColor: game.accent }}
      />
      <div className="relative">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-black"
          style={{ backgroundColor: `${game.accent}22`, color: game.accent }}
        >
          {game.short}
        </span>
        <h3 className="mt-4 font-extrabold tracking-tight">{game.name}</h3>
        <p className="mt-1 text-sm text-mist">{game.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="chip">{game.genre}</span>
          <span
            className="text-sm font-bold opacity-0 transition-opacity group-hover:opacity-100"
            style={{ color: game.accent }}
          >
            Guide →
          </span>
        </div>
      </div>
    </Link>
  );
}

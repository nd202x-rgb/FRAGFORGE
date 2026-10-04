import Image from "next/image";
import Link from "next/link";
import { gameBadge, gameBanner, type GameMeta } from "@/lib/games";

export function GameCard({ game }: { game: GameMeta }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="panel panel-hover group relative block overflow-hidden"
    >
      {/* Banner art */}
      <div className="relative aspect-[21/9] w-full overflow-hidden">
        <Image
          src={gameBanner(game)}
          alt={`${game.name} key art`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,15,20,0.95)] via-transparent to-transparent" />
        <span className="chip absolute right-3 top-3 bg-void/70 backdrop-blur-sm">
          {game.genre}
        </span>
      </div>

      <div className="relative -mt-8 flex items-end gap-3 px-5 pb-5">
        {/* Box-art badge */}
        <span className="relative h-24 w-16 shrink-0 overflow-hidden rounded-lg border border-edge shadow-lg">
          <Image
            src={gameBadge(game)}
            alt={`${game.name} box art`}
            fill
            sizes="64px"
            className="object-cover"
          />
        </span>
        <div className="min-w-0 pb-1">
          <h3 className="truncate font-extrabold tracking-tight">{game.name}</h3>
          <p className="truncate text-sm text-mist">{game.tagline}</p>
          <span
            className="mt-1.5 inline-block text-sm font-bold opacity-0 transition-opacity group-hover:opacity-100"
            style={{ color: game.accent }}
          >
            Guide →
          </span>
        </div>
      </div>
    </Link>
  );
}

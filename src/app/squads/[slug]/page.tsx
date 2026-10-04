import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GAME_BY_SLUG, GAMES } from "@/lib/games";
import { getCurrentUser } from "@/lib/auth";
import { SquadClient } from "./SquadClient";

export function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

export const dynamic = "force-dynamic";

export async function generateMetadata(props: PageProps<"/squads/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const game = GAME_BY_SLUG.get(slug);
  if (!game) return {};
  return { title: `${game.name} squad room` };
}

export default async function SquadRoomPage(props: PageProps<"/squads/[slug]">) {
  const { slug } = await props.params;
  const game = GAME_BY_SLUG.get(slug);
  if (!game) notFound();
  const user = await getCurrentUser();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <Link href="/squads" className="text-sm font-semibold text-mist hover:text-neon">
        ← All squad rooms
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-xl text-sm font-black"
          style={{ backgroundColor: `${game.accent}22`, color: game.accent }}
        >
          {game.short}
        </span>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {game.name} squad room
          </h1>
          <p className="text-sm text-mist">
            Find teammates · <Link href={`/games/${game.slug}`} className="hover:text-neon">open the guide ↗</Link>
          </p>
        </div>
      </div>

      <SquadClient
        slug={game.slug}
        accent={game.accent}
        signedIn={!!user}
        username={user?.username ?? null}
      />
    </div>
  );
}

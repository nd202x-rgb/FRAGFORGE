import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GAME_BY_SLUG, GAMES } from "@/lib/games";
import { getCurrentUser } from "@/lib/auth";
import { SquadClient } from "./SquadClient";

export function generateStaticParams() {
  return [...GAMES.map((g) => ({ slug: g.slug })), { slug: LOUNGE.slug }];
}

export const dynamic = "force-dynamic";

export const LOUNGE = {
  slug: "lounge",
  name: "Global Lounge",
  short: "GL",
  accent: "#f5b942",
  subtitle: "Every member hangs here — gamers, casuals, everyone. No rank required.",
};

function roomMeta(slug: string) {
  const game = GAME_BY_SLUG.get(slug);
  if (game) {
    return {
      slug: game.slug,
      name: `${game.name} squad room`,
      short: game.short,
      accent: game.accent,
      subtitle: `Find teammates · guide inside`,
      guideSlug: game.slug,
    };
  }
  if (slug === LOUNGE.slug) {
    return { ...LOUNGE, name: "Global Lounge", guideSlug: null };
  }
  return null;
}

export async function generateMetadata(props: PageProps<"/squads/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const meta = roomMeta(slug);
  if (!meta) return {};
  return { title: meta.name };
}

export default async function SquadRoomPage(props: PageProps<"/squads/[slug]">) {
  const { slug } = await props.params;
  const meta = roomMeta(slug);
  if (!meta) notFound();
  const user = await getCurrentUser();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <Link href="/squads" className="text-sm font-semibold text-mist hover:text-neon">
        ← All squad rooms
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-xl text-sm font-black"
          style={{ backgroundColor: `${meta.accent}22`, color: meta.accent }}
        >
          {meta.short}
        </span>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {meta.name}
          </h1>
          <p className="text-sm text-mist">
            {meta.guideSlug ? (
              <>
                Find teammates ·{" "}
                <Link href={`/games/${meta.guideSlug}`} className="hover:text-neon">
                  open the guide ↗
                </Link>
              </>
            ) : (
              meta.subtitle
            )}
          </p>
        </div>
      </div>

      <SquadClient
        slug={meta.slug}
        accent={meta.accent}
        signedIn={!!user}
        username={user?.username ?? null}
      />
    </div>
  );
}

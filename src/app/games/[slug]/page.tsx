import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GAME_BY_SLUG, GAMES } from "@/lib/games";
import { loadGameContent } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { TechniqueCard } from "@/components/TechniqueCard";

export function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(props: PageProps<"/games/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const game = GAME_BY_SLUG.get(slug);
  if (!game) return {};
  return { title: `${game.name} pro guide`, description: game.tagline };
}

export default async function GamePage(props: PageProps<"/games/[slug]">) {
  const { slug } = await props.params;
  const game = GAME_BY_SLUG.get(slug);
  if (!game) notFound();
  const content = await loadGameContent(slug);

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-edge px-4 py-16 sm:px-6">
        <div
          className="absolute -top-32 left-1/4 h-80 w-[36rem] rounded-full opacity-25 blur-[110px]"
          style={{ backgroundColor: game.accent }}
        />
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto max-w-7xl">
          <Link href="/games" className="text-sm font-semibold text-mist hover:text-neon">
            ← All games
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <span
              className="flex h-20 w-20 items-center justify-center rounded-2xl text-xl font-black"
              style={{ backgroundColor: `${game.accent}22`, color: game.accent }}
            >
              {game.short}
            </span>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{game.name}</h1>
                <span className="chip">{game.genre}</span>
              </div>
              <p className="mt-1 text-mist">
                {game.tagline} · {game.publisher}
              </p>
            </div>
            <div className="ms-auto flex flex-wrap gap-2">
              <a
                href={game.site}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-edge bg-white/[0.05] px-4 py-2 text-sm font-bold transition-colors hover:border-neon hover:text-neon"
              >
                Official site ↗
              </a>
              <a
                href={game.discord}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg px-4 py-2 text-sm font-bold text-void transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: "#5865f2" }}
              >
                Join Discord ↗
              </a>
              <Link
                href={`/squads/${game.slug}`}
                className="rounded-lg px-4 py-2 text-sm font-bold text-void transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: game.accent }}
              >
                Squad room →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {/* PC requirements */}
        <Reveal>
          <section className="mb-14 grid gap-4 sm:grid-cols-2">
            <div className="panel p-5">
              <h2 className="text-sm font-bold uppercase tracking-widest text-faint">
                Minimum requirements
              </h2>
              <p className="mt-2 text-sm text-mist">{game.specs.min}</p>
            </div>
            <div className="panel p-5" style={{ borderColor: `${game.accent}44` }}>
              <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: game.accent }}>
                For best performance
              </h2>
              <p className="mt-2 text-sm text-mist">{game.specs.recommended}</p>
            </div>
          </section>
        </Reveal>

        {!content ? (
          <div className="panel p-10 text-center">
            <h2 className="text-xl font-bold">Guide incoming</h2>
            <p className="mt-2 text-mist">
              The full {game.name} technique guide is being forged right now — check back soon.
            </p>
          </div>
        ) : (
          <div className="space-y-14">
            {/* Overview + pillars */}
            <Reveal>
              <section>
                <p className="max-w-3xl text-lg leading-relaxed text-mist">{content.overview}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {content.skillPillars.map((p) => (
                    <span
                      key={p}
                      className="chip"
                      style={{ borderColor: `${game.accent}55`, color: "#e6e9f0" }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Techniques */}
            <section>
              <Reveal>
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Pro techniques
                </h2>
                <p className="mt-1 text-mist">
                  {content.techniques.length} techniques that separate {game.short} grinders from the pack.
                </p>
              </Reveal>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {content.techniques.map((t, i) => (
                  <Reveal key={t.name} delay={Math.min(i * 0.04, 0.3)}>
                    <TechniqueCard technique={t} accent={game.accent} />
                  </Reveal>
                ))}
              </div>
            </section>

            {/* PvP */}
            <section>
              <Reveal>
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  PvP mastery
                </h2>
                <p className="mt-1 max-w-3xl text-mist">{content.pvp.intro}</p>
              </Reveal>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {content.pvp.modes.map((m) => (
                  <Reveal key={m.mode}>
                    <div className="panel h-full p-6">
                      <h3 className="font-bold" style={{ color: game.accent }}>
                        {m.mode}
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-mist">
                        {m.advice.map((a) => (
                          <li key={a} className="flex gap-2">
                            <span style={{ color: game.accent }}>▸</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
                <Reveal>
                  <div className="panel h-full border-mag/30 p-6">
                    <h3 className="font-bold text-mag">Counter-play</h3>
                    <ul className="mt-3 space-y-2 text-sm text-mist">
                      {content.pvp.counterPlay.map((c) => (
                        <li key={c} className="flex gap-2">
                          <span className="text-mag">✕</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </section>

            {/* Drills + settings */}
            <section className="grid gap-8 lg:grid-cols-2">
              <Reveal>
                <div className="panel h-full p-6">
                  <h2 className="text-xl font-extrabold tracking-tight">Daily drills</h2>
                  <ul className="mt-4 space-y-4">
                    {content.drills.map((d) => (
                      <li key={d.name} className="border-l-2 pl-4" style={{ borderColor: game.accent }}>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{d.name}</span>
                          <span className="chip">{d.duration}</span>
                        </div>
                        <p className="mt-1 text-sm text-mist">{d.how}</p>
                        <p className="mt-1 text-xs text-faint">Goal: {d.goal}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <div className="space-y-8">
                <Reveal>
                  <div className="panel p-6">
                    <h2 className="text-xl font-extrabold tracking-tight">What the pros run</h2>
                    <ul className="mt-4 space-y-3">
                      {content.proSettings.map((p) => (
                        <li key={p.player} className="flex items-start gap-3">
                          <span
                            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black text-void"
                            style={{ backgroundColor: game.accent }}
                          >
                            {p.player.slice(0, 1)}
                          </span>
                          <div>
                            <span className="font-bold">{p.player}</span>
                            <span className="text-mist"> · {p.team}</span>
                            <p className="text-sm text-mist">{p.notes}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
                <Reveal>
                  <div className="panel p-6">
                    <h2 className="text-xl font-extrabold tracking-tight">Common mistakes</h2>
                    <ul className="mt-3 space-y-2 text-sm text-mist">
                      {content.commonMistakes.map((m) => (
                        <li key={m} className="flex gap-2">
                          <span className="text-gold">!</span>
                          {m}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 border-t border-edge pt-3 text-sm text-mist">
                      <span className="font-semibold text-white">Meta note:</span> {content.metaNote}
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

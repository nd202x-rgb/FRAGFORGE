import type { Metadata } from "next";
import Link from "next/link";
import { COURSES, COACHING, PRO_FEATURES } from "@/content/gopro";
import { GAME_BY_SLUG } from "@/lib/games";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "GO PRO",
  description: "Premium video courses, coaching and ranked climb programs — one tier above free.",
};

export default function GoProPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="chip border-gold/50 text-gold">Demo pricing — no real checkout</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          GO <span className="text-gold">PRO</span>
        </h1>
        <p className="mt-3 max-w-2xl text-mist">
          Free guides get you started. GO PRO is the paid tier: structured video
          courses from the best coaches in every game, VOD reviews, and ranked
          climb programs.
        </p>
      </Reveal>

      {/* Plans */}
      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="panel h-full p-6">
            <h2 className="text-xl font-extrabold">Free</h2>
            <p className="mt-1 text-2xl font-black text-mist">$0</p>
            <ul className="mt-4 space-y-2 text-sm text-mist">
              <li className="flex gap-2"><span className="text-neon">✓</span> All {COURSES.length} game technique guides</li>
              <li className="flex gap-2"><span className="text-neon">✓</span> Squad rooms: text, voice & video</li>
              <li className="flex gap-2"><span className="text-neon">✓</span> Gear picks & system requirements</li>
            </ul>
            <Link
              href="/register"
              className="mt-6 inline-block rounded-lg border border-edge bg-white/[0.05] px-5 py-2.5 text-sm font-bold transition-colors hover:bg-white/[0.1]"
            >
              Create free account
            </Link>
          </div>
        </Reveal>
        <Reveal>
          <div className="panel h-full border-gold/40 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-gold">GO PRO</h2>
              <span className="chip border-gold/50 text-gold">Best value</span>
            </div>
            <p className="mt-1 text-2xl font-black">
              $9<span className="text-sm font-bold text-mist">/mo</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-mist">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex gap-2"><span className="text-gold">✓</span>{f}</li>
              ))}
            </ul>
            <button
              className="mt-6 rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-void transition-transform hover:scale-[1.03]"
              title="Demo — checkout not wired"
            >
              Upgrade to GO PRO
            </button>
          </div>
        </Reveal>
      </section>

      {/* Courses */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Pro video courses
          </h2>
          <p className="mt-1 max-w-2xl text-mist">
            Built around the best real coaches and creators for each game —
            organized as lessons, linked to their videos.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {COURSES.map((c, i) => {
            const meta = GAME_BY_SLUG.get(c.slug);
            return (
              <Reveal key={c.slug} delay={Math.min(i * 0.03, 0.3)}>
                <div className="panel panel-hover flex h-full flex-col p-5">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-black"
                      style={{
                        backgroundColor: `${meta?.accent ?? "#22d3ee"}22`,
                        color: meta?.accent ?? "#22d3ee",
                      }}
                    >
                      {meta?.short ?? c.game.slice(0, 3).toUpperCase()}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold">{c.game}</h3>
                      <p className="text-xs text-faint">with {c.creator}</p>
                    </div>
                    <span className="ms-auto chip border-gold/50 text-gold">PRO</span>
                  </div>
                  <p className="mt-3 text-xs text-mist">{c.focus}</p>
                  <ul className="mt-3 flex-1 space-y-1.5 text-xs text-mist">
                    {c.lessons.map((l) => (
                      <li key={l} className="flex gap-2">
                        <span className="text-gold">▸</span>{l}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 rounded-lg border border-edge bg-white/[0.04] py-2 text-center text-xs font-bold transition-colors hover:bg-white/[0.08]"
                  >
                    Watch course videos ↗
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Coaching */}
      <section className="mt-16">
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            1:1 coaching
          </h2>
          <p className="mt-1 text-mist">Demo pricing — pair with a specialist coach per game.</p>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {COACHING.map((o) => (
            <Reveal key={o.name}>
              <div className="panel panel-hover h-full p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{o.name}</h3>
                  <span className="text-lg font-extrabold text-gold">{o.price}</span>
                </div>
                <p className="mt-2 text-sm text-mist">{o.desc}</p>
                <button
                  className="mt-4 w-full rounded-lg border border-edge bg-white/[0.04] py-2 text-xs font-bold transition-colors hover:bg-white/[0.08]"
                  title="Demo — checkout not wired"
                >
                  Book session
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

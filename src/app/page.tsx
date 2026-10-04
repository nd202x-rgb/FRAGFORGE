import Link from "next/link";
import { GAMES } from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const TICKER = [...GAMES, ...GAMES];

const FEATURES = [
  {
    icon: "⚔",
    title: "Pro PvP techniques",
    body: "Counter-strafing, flick shots, wave management, whiff punishing — broken down step by step per game.",
  },
  {
    icon: "🎯",
    title: "Daily drills",
    body: "Structured practice routines that actually move your rank, tuned to each game's skill pillars.",
  },
  {
    icon: "🖥",
    title: "Gear that matters",
    body: "Real mice, monitors and laptops the pros use — price-checked against Amazon and AliExpress.",
  },
  {
    icon: "🕹",
    title: "Emulator corner",
    body: "Legal emulation setup guides for retro titles — from Dolphin to RPCS3 with official sources.",
  },
  {
    icon: "🤝",
    title: "Squad up",
    body: "Link your Discord, Steam and Riot accounts so your grind follows you across every title.",
  },
  {
    icon: "📊",
    title: "Meta tracking",
    body: "What the current patch rewards — and how the top 0.1% exploit it before it gets nerfed.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="absolute -top-32 left-1/2 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-vio/25 blur-[120px]" />
        <div className="scanline absolute inset-0 -z-10 overflow-hidden" />
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="chip">13 games · 150+ techniques · pro-verified</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
              FORGE YOUR
              <span className="block bg-gradient-to-r from-neon via-vio to-mag bg-clip-text text-transparent">
                EDGE.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-mist">
              Every pro technique, PvP strategy and gear pick for the games you
              actually play — from Radiant-level Valorant guides to GM Tekken
              punishment charts.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/games"
                className="rounded-lg bg-neon px-6 py-3 font-bold text-void transition-all hover:shadow-[0_0_28px_rgba(34,211,238,0.5)]"
              >
                Browse game guides
              </Link>
              <Link
                href="/register"
                className="rounded-lg border border-edge-bright px-6 py-3 font-bold text-white transition-colors hover:bg-white/5"
              >
                Join free
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-edge bg-panel/60 py-3">
        <div className="animate-marquee flex w-max items-center gap-8">
          {TICKER.map((g, i) => (
            <span
              key={`${g.slug}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap text-sm font-bold tracking-wider text-mist"
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: g.accent }}
              />
              {g.name.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* Games grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Pick your battlefield
              </h2>
              <p className="mt-2 text-mist">
                Deep technique guides for every major competitive title.
              </p>
            </div>
            <Link href="/games" className="hidden text-sm font-semibold text-neon hover:underline sm:block">
              View all →
            </Link>
          </div>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GAMES.slice(0, 8).map((g) => (
            <StaggerItem key={g.slug}>
              <GameCard game={g} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Built like a training camp
          </h2>
          <p className="mt-2 max-w-xl text-mist">
            Not another wiki. Every guide is structured around what actually
            wins fights at high rank.
          </p>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <StaggerItem key={f.title}>
              <div className="panel panel-hover h-full p-6">
                <span className="text-2xl">{f.icon}</span>
                <h3 className="mt-3 font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{f.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="panel relative overflow-hidden p-10 text-center sm:p-16">
            <div className="absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-neon/20 blur-[100px]" />
            <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
              Stop guessing. Start climbing.
            </h2>
            <p className="relative mx-auto mt-3 max-w-lg text-mist">
              Create a free account, link your game profiles and Discord, and
              turn every session into deliberate practice.
            </p>
            <Link
              href="/register"
              className="relative mt-7 inline-block rounded-lg bg-neon px-8 py-3 font-bold text-void transition-all hover:shadow-[0_0_28px_rgba(34,211,238,0.5)]"
            >
              Create free account
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

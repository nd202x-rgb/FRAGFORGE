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

const APPS = [
  { icon: "🎮", label: "Games", href: "/games", color: "#ff7a1a" },
  { icon: "💬", label: "Squads", href: "/squads", color: "#38bdf8" },
  { icon: "👥", label: "Groups", href: "/groups", color: "#8b5cf6" },
  { icon: "⭐", label: "GO PRO", href: "/gopro", color: "#fbbf24" },
  { icon: "🖱", label: "Gear", href: "/gear", color: "#4ade80" },
  { icon: "▶", label: "Media", href: "/media", color: "#f43f5e" },
  { icon: "🌐", label: "Browse", href: "/browse", color: "#22d3ee" },
  { icon: "🕹", label: "Emulators", href: "/emulators", color: "#a78bfa" },
  { icon: "🔗", label: "Connect", href: "/connect", color: "#5865f2" },
  { icon: "◉", label: "Profile", href: "/profile", color: "#f472b6" },
  { icon: "✉", label: "Messages", href: "/messages", color: "#34d399" },
  { icon: "🤖", label: "FORGE AI", href: "/games", color: "#fb923c" },
];

const DOCK = [APPS[0], APPS[1], APPS[5], APPS[6]];

function AppIcon({ app, big = false }: { app: (typeof APPS)[number]; big?: boolean }) {
  return (
    <Link href={app.href} className="group flex flex-col items-center gap-1.5">
      <span
        className={`flex items-center justify-center rounded-[22%] font-bold shadow-lg transition-transform group-hover:scale-110 ${
          big ? "h-14 w-14 text-xl" : "h-12 w-12 text-lg"
        }`}
        style={{
          background: `linear-gradient(145deg, ${app.color}, ${app.color}88)`,
          boxShadow: `0 6px 18px ${app.color}44`,
        }}
      >
        {app.icon}
      </span>
      <span className="text-[10px] font-semibold text-white/90">{app.label}</span>
    </Link>
  );
}

export default function Home() {
  return (
    <div>
      {/* App-launcher hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="absolute -top-32 left-1/2 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-vio/25 blur-[120px]" />
        <div className="scanline absolute inset-0 -z-10 overflow-hidden" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="chip">the gaming app · 23 games · 200+ techniques</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
                YOUR GAMING.
                <span className="block bg-gradient-to-r from-white via-neon to-orange-600 bg-clip-text text-transparent">
                  ONE APP.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-mist lg:mx-0">
                Guides, squad rooms, group chats, a media corner, an in-app
                browser and real gear picks — everything a player needs, in one
                installable app.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href="/games"
                  className="rounded-lg bg-neon px-6 py-3 font-bold text-void transition-all hover:shadow-[0_0_28px_rgba(255,122,26,0.5)]"
                >
                  Open the app
                </Link>
                <Link
                  href="/register"
                  className="rounded-lg border border-edge-bright px-6 py-3 font-bold text-white transition-colors hover:bg-white/5"
                >
                  Join free
                </Link>
              </div>
              <p className="mt-4 text-xs text-faint">
                📲 Installs like a native app — in your browser: menu → “Add to
                Home Screen” (mobile) or the install icon in the address bar
                (desktop).
              </p>
            </Reveal>
          </div>

          {/* Phone mockup — a working app launcher */}
          <Reveal delay={0.2} className="mx-auto">
            <div className="relative w-[19rem] rounded-[3rem] border-[10px] border-zinc-800 bg-black shadow-[0_0_80px_rgba(255,122,26,0.15)]">
              <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
              <div className="flex items-center justify-between px-8 pb-1 pt-4 text-[10px] font-bold text-white/80">
                <span>9:41</span>
                <span className="flex items-center gap-1">
                  <span>▂▅▆</span>
                  <span>🔋</span>
                </span>
              </div>
              <div className="relative h-[34rem] overflow-hidden rounded-b-[2.4rem] bg-gradient-to-b from-[#14101f] via-[#1a0f14] to-[#0a0a0f] px-5 pt-8">
                <p className="text-center text-xs font-bold text-white/60">
                  FRAG<span className="text-neon">FORGE</span>
                </p>
                <div className="mt-6 grid grid-cols-4 gap-x-2 gap-y-5">
                  {APPS.map((a) => (
                    <AppIcon key={a.label} app={a} />
                  ))}
                </div>
                <div className="absolute inset-x-4 bottom-4 flex justify-around rounded-3xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
                  {DOCK.map((a) => (
                    <AppIcon key={a.label} app={a} big />
                  ))}
                </div>
              </div>
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
              className="relative mt-7 inline-block rounded-lg bg-neon px-8 py-3 font-bold text-void transition-all hover:shadow-[0_0_28px_rgba(255,122,26,0.5)]"
            >
              Create free account
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

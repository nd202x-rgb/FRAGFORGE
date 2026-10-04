import Link from "next/link";
import { GAMES } from "@/lib/games";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-edge bg-panel/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon to-vio font-black text-void">
              F
            </span>
            <span className="text-lg font-extrabold tracking-tight">
              Frag<span className="text-neon">Forge</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
            Forge your edge. Pro-level techniques, PvP strategies, drills and
            gear for every competitive game — built by grinders, for grinders.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            Guides
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-mist">
            {GAMES.slice(0, 6).map((g) => (
              <li key={g.slug}>
                <Link href={`/games/${g.slug}`} className="hover:text-neon">
                  {g.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/games" className="font-semibold text-neon">
                All games →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">
            More
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-mist">
            <li><Link href="/gear" className="hover:text-neon">Gear picks</Link></li>
            <li><Link href="/emulators" className="hover:text-neon">Emulators</Link></li>
            <li><Link href="/connect" className="hover:text-neon">Connect accounts</Link></li>
            <li><Link href="/register" className="hover:text-neon">Create account</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-edge py-5 text-center text-xs text-faint">
        FragForge is an unofficial demo guide hub. Not affiliated with any game
        publisher. Gear links are outbound search links — verify prices before buying.
      </div>
    </footer>
  );
}

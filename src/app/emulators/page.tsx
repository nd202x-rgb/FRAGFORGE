import type { Metadata } from "next";
import { EMULATORS } from "@/content/emulators";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Emulators",
  description: "Legal emulation setup for retro games — official sources only.",
};

export default function EmulatorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="chip">Legal corner</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          The emulator corner
        </h1>
        <p className="mt-3 max-w-2xl text-mist">
          Run your retro library on modern hardware — every link goes to the
          official project, never a repack.
        </p>
      </Reveal>

      <Reveal>
        <div className="panel mt-8 border-gold/30 p-5">
          <h2 className="flex items-center gap-2 font-bold text-gold">
            ⚖ Stay legal
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Emulators themselves are legal — they are clean-room reimplementations
            of console hardware. What is not legal in most regions is downloading
            ROMs, BIOS files or firmware you do not own. Dump games and BIOS from
            consoles you own (tools like CleanRip, GodMode9 or your console&apos;s
            homebrew), and check your local laws. We link official project pages
            only — never ROM sites.
          </p>
        </div>
      </Reveal>

      <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {EMULATORS.map((e) => (
          <StaggerItem key={e.name}>
            <div className="panel panel-hover flex h-full flex-col p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold">{e.name}</h3>
                <span className="chip">{e.status}</span>
              </div>
              <p className="mt-1.5 text-sm font-semibold text-neon">{e.systems}</p>
              <p className="mt-1 text-xs text-faint">Runs on: {e.platform}</p>
              <p className="mt-3 flex-1 text-sm text-mist">{e.notes}</p>
              <a
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 rounded-lg border border-edge bg-white/[0.04] py-2 text-center text-xs font-bold transition-colors hover:border-edge-bright hover:bg-white/[0.08]"
              >
                Official site ↗
              </a>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

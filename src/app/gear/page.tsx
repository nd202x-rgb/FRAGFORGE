import type { Metadata } from "next";
import Image from "next/image";
import { GEAR } from "@/content/gear";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gear picks",
  description: "Pro-grade gaming gear at real street prices — Amazon and AliExpress compared.",
};

const TIER_STYLE: Record<string, { label: string; cls: string }> = {
  pro: { label: "Pro pick", cls: "border-neon/50 text-neon" },
  mid: { label: "Mid", cls: "border-vio/50 text-vio" },
  budget: { label: "Budget", cls: "border-gold/50 text-gold" },
};

export default function GearPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="chip">Demo guide — verify prices before buying</span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Gear that actually matters
        </h1>
        <p className="mt-3 max-w-2xl text-mist">
          What ranked grinders and pros actually buy — real products at real
          street prices. Links open Amazon and AliExpress searches for each item.
        </p>
      </Reveal>

      {GEAR.map((cat) => (
        <section key={cat.id} className="mt-14">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight">{cat.title}</h2>
            <p className="mt-1 text-sm text-mist">{cat.blurb}</p>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cat.items.map((item, i) => {
              const tier = TIER_STYLE[item.tier];
              return (
                <Reveal key={item.name} delay={Math.min(i * 0.05, 0.25)}>
                  <div className="panel panel-hover flex h-full flex-col overflow-hidden">
                    <div className="relative aspect-[3/2] w-full overflow-hidden">
                      <Image
                        src={`/gear/${cat.id}-${i}.jpg`}
                        alt={`${cat.title} — ${item.name}`}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <span className={`chip absolute left-3 top-3 bg-void/70 backdrop-blur-sm ${tier.cls}`}>
                        {tier.label}
                      </span>
                      <span className="absolute right-3 top-3 rounded-lg bg-void/70 px-2.5 py-1 text-sm font-extrabold text-gold backdrop-blur-sm">
                        {item.price}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="mt-1.5 flex-1 text-sm text-mist">{item.why}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <a
                        href={item.amazon}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-edge bg-white/[0.04] py-2 text-center text-xs font-bold transition-colors hover:border-edge-bright hover:bg-white/[0.08]"
                      >
                        Amazon ↗
                      </a>
                      <a
                        href={item.aliexpress}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-edge bg-white/[0.04] py-2 text-center text-xs font-bold transition-colors hover:border-edge-bright hover:bg-white/[0.08]"
                      >
                        AliExpress ↗
                      </a>
                      <a
                        href={item.daraz}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-edge bg-white/[0.04] py-2 text-center text-xs font-bold transition-colors hover:border-edge-bright hover:bg-white/[0.08]"
                      >
                        Daraz ↗
                      </a>
                      <a
                        href={item.alibaba}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-edge bg-white/[0.04] py-2 text-center text-xs font-bold transition-colors hover:border-edge-bright hover:bg-white/[0.08]"
                      >
                        Alibaba ↗
                      </a>
                    </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

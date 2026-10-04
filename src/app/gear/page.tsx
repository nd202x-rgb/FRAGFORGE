import type { Metadata } from "next";
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
                  <div className="panel panel-hover flex h-full flex-col p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`chip ${tier.cls}`}>{tier.label}</span>
                      <span className="text-lg font-extrabold text-gold">{item.price}</span>
                    </div>
                    <h3 className="mt-3 font-bold">{item.name}</h3>
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
                </Reveal>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

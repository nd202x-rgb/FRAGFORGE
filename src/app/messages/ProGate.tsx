import Link from "next/link";

export function ProGate() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <span className="chip border-gold/40 bg-gold/10 font-bold text-gold">
        GO PRO feature
      </span>
      <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Private <span className="text-glow-neon text-neon">messages</span>
      </h1>
      <p className="mx-auto mt-4 max-w-md text-mist">
        1:1 private chats are part of GO PRO — subscribe once and message any
        player on FragForge, plus unlock every video course and coaching offer.
      </p>
      <Link
        href="/gopro"
        className="mt-7 inline-block rounded-xl bg-neon px-7 py-3.5 text-sm font-extrabold text-void transition-all hover:shadow-[0_0_30px_rgba(255,122,26,0.5)]"
      >
        Upgrade to GO PRO →
      </Link>
      <p className="mt-3 text-xs text-faint">$9/month · cancel anytime · squad rooms stay free</p>
    </div>
  );
}

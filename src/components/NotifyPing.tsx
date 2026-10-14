"use client";

import { useEffect, useRef } from "react";

type Convo = {
  username: string;
  last_body?: string | null;
  last_at?: number | null;
  unread: number;
};

function beep() {
  try {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new AC();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.setValueAtTime(1174, ctx.currentTime + 0.09);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.09, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.45);
  } catch {
    /* audio unavailable */
  }
}

// Global message notifier: polls the DM inbox, pops an OS notification +
// sound + tab badge when a new message arrives (works in the exe too —
// Electron renders these as native OS notifications).
export default function NotifyPing() {
  const lastTotal = useRef<number | null>(null);
  const askedPerm = useRef(false);

  useEffect(() => {
    const tick = async () => {
      try {
        const r = await fetch("/api/dm", { cache: "no-store" });
        if (!r.ok) return; // signed out
        const j = (await r.json()) as { conversations?: Convo[] };
        const convs = j.conversations ?? [];
        const total = convs.reduce((s, c) => s + (c.unread || 0), 0);
        const newest = [...convs]
          .filter((c) => c.unread > 0)
          .sort((a, b) => (b.last_at ?? 0) - (a.last_at ?? 0))[0];

        if (lastTotal.current !== null && total > lastTotal.current) {
          beep();
          if ("Notification" in window) {
            if (Notification.permission === "granted") {
              const n = new Notification(
                `FragForge — ${newest?.username ?? "new message"}`,
                {
                  body: newest
                    ? `${newest.username}: ${String(newest.last_body ?? "").slice(0, 90)}`
                    : `You have ${total} unread messages`,
                  icon: "/logo-mark.png",
                  tag: "ff-dm",
                },
              );
              n.onclick = () => window.focus();
            } else if (Notification.permission === "default" && !askedPerm.current) {
              askedPerm.current = true;
              Notification.requestPermission();
            }
          }
        }

        document.title =
          total > 0 ? `(${total}) FragForge` : "FragForge";
        lastTotal.current = total;
      } catch {
        /* offline */
      }
    };

    const id = setInterval(tick, 4000);
    tick();
    return () => clearInterval(id);
  }, []);

  return null;
}

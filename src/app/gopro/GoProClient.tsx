"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function SubscribeButton({ signedIn, pro }: { signedIn: boolean; pro: boolean }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (pro) {
    return (
      <span className="mt-6 inline-block rounded-lg border border-gold/50 bg-gold/10 px-5 py-2.5 text-sm font-bold text-gold">
        PRO active ✓
      </span>
    );
  }
  if (!signedIn) {
    return (
      <Link
        href="/login?next=/gopro"
        className="mt-6 inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-void transition-transform hover:scale-[1.03]"
      >
        Sign in to upgrade
      </Link>
    );
  }

  async function go() {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/gopro/checkout", { method: "POST" });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "Checkout failed — try again");
        return;
      }
      window.location.href = json.url;
    } catch {
      setError("Network error — try again");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-6">
      <button
        onClick={go}
        disabled={busy}
        className="rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-void transition-transform hover:scale-[1.03] disabled:opacity-60"
      >
        {busy ? "Opening checkout…" : "Upgrade to GO PRO"}
      </button>
      {error && <p className="mt-2 text-xs text-mag">{error}</p>}
    </div>
  );
}

export function ProReturn() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const [state, setState] = useState<"idle" | "done" | "failed">("idle");
  const ran = useRef(false);

  useEffect(() => {
    if (!sessionId || ran.current) return;
    ran.current = true;
    fetch("/api/gopro/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ session_id: sessionId }),
    })
      .then(async (r) => {
        const json = await r.json().catch(() => ({}));
        setState(r.ok && json.pro ? "done" : "failed");
      })
      .catch(() => setState("failed"))
      .finally(() => router.refresh());
  }, [sessionId, router]);

  if (state === "idle") return null;
  if (state === "failed") {
    return (
      <div className="panel mt-6 border-mag/40 bg-mag/10 px-5 py-4 text-sm text-mag">
        Payment didn&apos;t complete — nothing was charged. Try upgrading again.
      </div>
    );
  }
  return (
    <div className="panel mt-6 border-gold/50 bg-gold/10 px-5 py-4 text-sm font-bold text-gold">
      GO PRO activated — welcome to the paid tier. All courses are unlocked on your account.
    </div>
  );
}

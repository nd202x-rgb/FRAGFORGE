"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const isRegister = mode === "register";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const fd = new FormData(e.currentTarget);
    const payload = isRegister
      ? {
          email: fd.get("email"),
          username: fd.get("username"),
          password: fd.get("password"),
        }
      : { email: fd.get("email"), password: fd.get("password") };
    const res = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) {
      setError(json.error ?? "Something went wrong");
      return;
    }
    const next = searchParams.get("next") ?? "/games";
    router.push(next.startsWith("/") ? next : "/games");
    router.refresh();
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="panel p-8">
        <h1 className="text-2xl font-extrabold tracking-tight">
          {isRegister ? "Create your account" : "Welcome back"}
        </h1>
        <p className="mt-1 text-sm text-mist">
          {isRegister
            ? "Track your grind across every game."
            : "Sign in to sync your linked accounts."}
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-mist">Email</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-lg border border-edge bg-void/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-neon"
              placeholder="you@example.com"
            />
          </label>
          {isRegister && (
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-mist">
                Username
              </span>
              <input
                name="username"
                required
                minLength={3}
                maxLength={24}
                autoComplete="username"
                className="mt-1.5 w-full rounded-lg border border-edge bg-void/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-neon"
                placeholder="xShadowSlayer"
              />
            </label>
          )}
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-mist">
              Password
            </span>
            <input
              name="password"
              type="password"
              required
              minLength={isRegister ? 8 : 1}
              autoComplete={isRegister ? "new-password" : "current-password"}
              className="mt-1.5 w-full rounded-lg border border-edge bg-void/60 px-3 py-2.5 text-sm outline-none transition-colors focus:border-neon"
              placeholder={isRegister ? "8+ characters" : "Your password"}
            />
          </label>
          {error && (
            <p className="rounded-lg border border-mag/40 bg-mag/10 px-3 py-2 text-sm text-mag">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-neon py-2.5 text-sm font-bold text-void transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.45)] disabled:opacity-50"
          >
            {busy ? "Working…" : isRegister ? "Create account" : "Sign in"}
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-mist">
          {isRegister ? (
            <>
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-neon hover:underline">
                Sign in
              </Link>
            </>
          ) : (
            <>
              New to FragForge?{" "}
              <Link href="/register" className="font-semibold text-neon hover:underline">
                Join free
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function UserMenu({ username, avatar }: { username: string; avatar: string | null }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setOpen(false);
    router.refresh();
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg border border-edge bg-panel-2 px-3 py-1.5 text-sm font-semibold transition-colors hover:border-edge-bright"
      >
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element -- user-uploaded file with cache-bust query
          <img src={avatar} alt="" className="h-6 w-6 rounded-full object-cover" />
        ) : (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-neon to-vio text-xs font-black text-void">
            {username.slice(0, 1).toUpperCase()}
          </span>
        )}
        {username}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-edge bg-panel-2 shadow-2xl">
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm text-mist hover:bg-white/5 hover:text-white"
          >
            My profile
          </Link>
          <Link
            href="/messages"
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm text-mist hover:bg-white/5 hover:text-white"
          >
            Messages
          </Link>
          <Link
            href="/connect"
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm text-mist hover:bg-white/5 hover:text-white"
          >
            Linked accounts
          </Link>
          <button
            onClick={logout}
            className="block w-full px-4 py-2.5 text-left text-sm text-mag hover:bg-white/5"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { getCurrentUser } from "@/lib/auth";
import { UserMenu } from "./UserMenu";

const LINKS = [
  { href: "/games", label: "Games" },
  { href: "/squads", label: "Squads" },
  { href: "/gopro", label: "GO PRO" },
  { href: "/gear", label: "Gear" },
  { href: "/emulators", label: "Emulators" },
  { href: "/connect", label: "Connect" },
];

export async function Nav() {
  const user = await getCurrentUser();
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-void/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative block h-9 w-9 overflow-hidden rounded-lg transition-transform group-hover:rotate-12">
            <Image src="/logo-mark.png" alt="FragForge" fill sizes="36px" className="object-cover" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Frag<span className="text-neon">Forge</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-mist transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <UserMenu username={user.username} avatar={user.avatar} role={user.role} pro={user.pro} />
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-3 py-2 text-sm font-medium text-mist transition-colors hover:text-white"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-neon px-4 py-2 text-sm font-bold text-void transition-all hover:shadow-[0_0_20px_rgba(255,122,26,0.45)]"
              >
                Join free
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Assistant } from "@/components/Assistant";
import NotifyPing from "@/components/NotifyPing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FragForge — Pro Gaming Academy",
    template: "%s · FragForge",
  },
  description:
    "Pro-level techniques, PvP guides, drills, gear picks and emulators for every popular competitive game.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "FragForge",
    statusBarStyle: "black-translucent",
  },
  icons: { apple: "/logo-mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#ff7a1a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Assistant />
        <NotifyPing />
      </body>
    </html>
  );
}

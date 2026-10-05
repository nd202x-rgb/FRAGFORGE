import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";

// Public Invidious instances, tried in order until one answers.
const INSTANCES = [
  "https://invidious.f5.si",
  "https://inv.nadeko.net",
  "https://invidious.nerdvpn.de",
  "https://yewtu.be",
];

export interface MediaItem {
  id: string;
  title: string;
  author: string;
  seconds: number;
  views: number;
  thumb: string;
}

interface RawResult {
  type: string;
  videoId?: string;
  title?: string;
  author?: string;
  lengthSeconds?: number;
  viewCount?: number;
}

// GET /api/media?q=<query>&mode=videos|shorts — YouTube search via Invidious.
export async function GET(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  const url = new URL(req.url);
  const q = (url.searchParams.get("q") ?? "").trim().slice(0, 120);
  const mode = url.searchParams.get("mode") === "shorts" ? "shorts" : "videos";
  if (!q) {
    return NextResponse.json({ error: "Empty query" }, { status: 400 });
  }

  async function fetchSearch(query: string, host: string) {
    const res = await fetch(
      `${host}/api/v1/search?q=${encodeURIComponent(query)}&type=video&page=1`,
      { signal: AbortSignal.timeout(8_000) },
    );
    if (!res.ok) return null;
    return (await res.json()) as RawResult[];
  }

  for (const host of INSTANCES) {
    try {
      const raw = await fetchSearch(q, host);
      if (!raw) continue;
      let raw2: RawResult[] | null = null;
      if (mode === "shorts") {
        // Generic queries surface almost no sub-60s hits — the #shorts
        // modifier is what returns actual short-form videos.
        raw2 = await fetchSearch(`${q} #shorts`, host);
      }
      const seen = new Set<string>();
      let items: MediaItem[] = [...raw, ...(raw2 ?? [])]
        .filter((r) => r.type === "video" && r.videoId && !seen.has(r.videoId))
        .map((r) => {
          if (r.videoId) seen.add(r.videoId);
          return {
            id: r.videoId as string,
            title: (r.title ?? "").slice(0, 140),
            author: r.author ?? "",
            seconds: r.lengthSeconds ?? 0,
            views: r.viewCount ?? 0,
            thumb: `https://i.ytimg.com/vi/${r.videoId}/hqdefault.jpg`,
          };
        });
      items =
        mode === "shorts"
          ? items.filter((v) => v.seconds > 0 && v.seconds <= 180)
          : items.filter((v) => v.seconds > 180);
      return NextResponse.json({ items: items.slice(0, 18) });
    } catch {
      continue;
    }
  }
  return NextResponse.json(
    { error: "Video search is busy — try again in a moment" },
    { status: 502 },
  );
}

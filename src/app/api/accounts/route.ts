import { NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";

const PLATFORMS = ["discord", "steam", "riot", "epic", "battlenet", "ea", "xbox", "psn"] as const;

const linkSchema = z.object({
  platform: z.enum(PLATFORMS),
  tag: z.string().min(2).max(64),
});

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  const body = await req.json().catch(() => null);
  const parsed = linkSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid platform or tag" }, { status: 400 });
  }
  const { platform, tag } = parsed.data;
  getDb()
    .prepare(
      `INSERT INTO linked_accounts (user_id, platform, tag) VALUES (?, ?, ?)
       ON CONFLICT (user_id, platform) DO UPDATE SET tag = excluded.tag`,
    )
    .run(user.id, platform, tag);
  return NextResponse.json({ data: { platform, tag } });
}

export async function DELETE(req: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  const url = new URL(req.url);
  const platform = url.searchParams.get("platform");
  if (!platform || !PLATFORMS.includes(platform as (typeof PLATFORMS)[number])) {
    return NextResponse.json({ error: "Invalid platform" }, { status: 400 });
  }
  getDb()
    .prepare("DELETE FROM linked_accounts WHERE user_id = ? AND platform = ?")
    .run(user.id, platform);
  return NextResponse.json({ data: { ok: true } });
}

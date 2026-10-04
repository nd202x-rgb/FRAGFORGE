import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { GAME_BY_SLUG } from "@/lib/games";

const MAX_BODY = 500;
const PAGE = 60;

export const LOUNGE_ROOM = "lounge";

function validRoom(room: string | null | undefined): room is string {
  return !!room && (room === LOUNGE_ROOM || GAME_BY_SLUG.has(room));
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const room = searchParams.get("room");
  if (!validRoom(room)) {
    return NextResponse.json({ error: "Unknown room" }, { status: 400 });
  }
  const after = Number(searchParams.get("after") ?? "0") || 0;
  const rows = getDb()
    .prepare(
      `SELECT m.id, m.username, m.body, m.media_url, m.media_type, m.created_at, u.avatar, u.pro, u.role FROM chat_messages m
       JOIN users u ON u.id = m.user_id
       WHERE m.room = ? AND m.id > ? ORDER BY m.id DESC LIMIT ?`,
    )
    .all(room, after, PAGE) as { id: number; username: string; body: string; created_at: string; avatar: string | null; pro: number; role: string }[];
  return NextResponse.json({ messages: rows.reverse() });
}

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in to chat" }, { status: 401 });
  }
  let json: { room?: string; body?: string; media_url?: string; media_type?: string };
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const room = json.room;
  const body = (json.body ?? "").trim().slice(0, MAX_BODY);
  const mediaUrl =
    typeof json.media_url === "string" && json.media_url.startsWith("/uploads/chat/")
      ? json.media_url.slice(0, 200)
      : null;
  const mediaType = mediaUrl ? (json.media_type ?? "").slice(0, 60) : null;
  if (!validRoom(room)) {
    return NextResponse.json({ error: "Unknown room" }, { status: 400 });
  }
  if (!body && !mediaUrl) {
    return NextResponse.json({ error: "Empty message" }, { status: 400 });
  }
  const info = getDb()
    .prepare("INSERT INTO chat_messages (room, user_id, username, body, media_url, media_type) VALUES (?, ?, ?, ?, ?, ?)")
    .run(room, user.id, user.username, body, mediaUrl, mediaType);
  return NextResponse.json({ ok: true, id: Number(info.lastInsertRowid) });
}

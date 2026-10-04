import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";

const MAX_BODY = 500;
const PAGE = 60;

function membership(groupId: number, userId: number) {
  return getDb()
    .prepare("SELECT 1 FROM group_members WHERE group_id = ? AND user_id = ?")
    .get(groupId, userId);
}

// GET /api/groups/<id>?after=<msgId> — group messages (members only).
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  const { id } = await params;
  const groupId = Number(id);
  if (!Number.isInteger(groupId)) {
    return NextResponse.json({ error: "Bad group id" }, { status: 400 });
  }
  if (!membership(groupId, user.id)) {
    return NextResponse.json({ error: "Not a member of this group" }, { status: 403 });
  }
  const db = getDb();
  const group = db
    .prepare("SELECT id, name, created_by FROM chat_groups WHERE id = ?")
    .get(groupId) as { id: number; name: string; created_by: number } | undefined;
  if (!group) {
    return NextResponse.json({ error: "Unknown group" }, { status: 404 });
  }
  const after = Number(new URL(req.url).searchParams.get("after") ?? "0") || 0;
  const rows = db
    .prepare(
      `SELECT m.id, m.username, m.body, m.media_url, m.media_type, m.created_at,
              u.avatar, u.pro, u.role
       FROM group_messages m JOIN users u ON u.id = m.user_id
       WHERE m.group_id = ? AND m.id > ? ORDER BY m.id DESC LIMIT ?`,
    )
    .all(groupId, after, PAGE);
  const members = db
    .prepare(
      `SELECT u.username, u.avatar, u.pro, u.role FROM group_members gm
       JOIN users u ON u.id = gm.user_id WHERE gm.group_id = ? ORDER BY u.username`,
    )
    .all(groupId);
  return NextResponse.json({
    group: { id: group.id, name: group.name, mine: group.created_by === user.id },
    members,
    messages: rows.reverse(),
  });
}

// POST /api/groups/<id> { body?, media_url?, media_type? } — post to group.
export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  const { id } = await params;
  const groupId = Number(id);
  if (!Number.isInteger(groupId)) {
    return NextResponse.json({ error: "Bad group id" }, { status: 400 });
  }
  if (!membership(groupId, user.id)) {
    return NextResponse.json({ error: "Not a member of this group" }, { status: 403 });
  }
  const json = (await req.json().catch(() => null)) as {
    body?: string;
    media_url?: string;
    media_type?: string;
  } | null;
  const body = (json?.body ?? "").trim().slice(0, MAX_BODY);
  const mediaUrl =
    typeof json?.media_url === "string" && json.media_url.startsWith("/uploads/chat/")
      ? json.media_url.slice(0, 200)
      : null;
  const mediaType = mediaUrl ? (json?.media_type ?? "").slice(0, 60) : null;
  if (!body && !mediaUrl) {
    return NextResponse.json({ error: "Empty message" }, { status: 400 });
  }
  const info = getDb()
    .prepare(
      "INSERT INTO group_messages (group_id, user_id, username, body, media_url, media_type) VALUES (?, ?, ?, ?, ?, ?)",
    )
    .run(groupId, user.id, user.username, body, mediaUrl, mediaType);
  return NextResponse.json({ ok: true, id: Number(info.lastInsertRowid) });
}

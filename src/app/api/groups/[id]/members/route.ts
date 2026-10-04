import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";

// POST /api/groups/<id>/members { username } — add a member (must already be in the group).
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
  const db = getDb();
  if (
    !db
      .prepare("SELECT 1 FROM group_members WHERE group_id = ? AND user_id = ?")
      .get(groupId, user.id)
  ) {
    return NextResponse.json({ error: "Not a member of this group" }, { status: 403 });
  }
  const json = (await req.json().catch(() => null)) as { username?: string } | null;
  const username = (json?.username ?? "").trim();
  const target = db
    .prepare("SELECT id, username, avatar, pro, role FROM users WHERE username = ? COLLATE NOCASE")
    .get(username) as
    | { id: number; username: string; avatar: string | null; pro: number; role: string }
    | undefined;
  if (!target) {
    return NextResponse.json({ error: "Unknown user" }, { status: 404 });
  }
  if (target.id === user.id) {
    return NextResponse.json({ error: "You're already in the group" }, { status: 400 });
  }
  db.prepare("INSERT OR IGNORE INTO group_members (group_id, user_id) VALUES (?, ?)").run(
    groupId,
    target.id,
  );
  return NextResponse.json({
    ok: true,
    member: { username: target.username, avatar: target.avatar, pro: target.pro, role: target.role },
  });
}

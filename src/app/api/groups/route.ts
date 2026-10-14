import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";

const MAX_NAME = 40;

// GET /api/groups — my groups: name, member count, latest message.
export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  const rows = getDb()
    .prepare(
      `SELECT g.id, g.name, g.created_by,
              (SELECT COUNT(*) FROM group_members gm2 WHERE gm2.group_id = g.id) AS members,
              (SELECT COALESCE(m.body, m.media_type, '') FROM group_messages m WHERE m.group_id = g.id ORDER BY m.id DESC LIMIT 1) AS last_body,
              (SELECT m.created_at FROM group_messages m WHERE m.group_id = g.id ORDER BY m.id DESC LIMIT 1) AS last_at
       FROM chat_groups g
       JOIN group_members gm ON gm.group_id = g.id AND gm.user_id = :me
       ORDER BY COALESCE(last_at, g.created_at) DESC`,
    )
    .all({ me: user.id }) as {
    id: number;
    name: string;
    created_by: number;
    members: number;
    last_body: string | null;
    last_at: string | null;
  }[];
  return NextResponse.json({ groups: rows });
}

// POST /api/groups { name, members?: string[] } — create a friend group (free for all).
export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  const json = (await req.json().catch(() => null)) as {
    name?: string;
    members?: string[];
  } | null;
  const name = (json?.name ?? "").trim().slice(0, MAX_NAME);
  if (!name) {
    return NextResponse.json({ error: "Name your group" }, { status: 400 });
  }
  const db = getDb();
  const info = db
    .prepare("INSERT INTO chat_groups (name, created_by) VALUES (?, ?)")
    .run(name, user.id);
  const groupId = Number(info.lastInsertRowid);
  const addMember = db.prepare(
    "INSERT OR IGNORE INTO group_members (group_id, user_id) VALUES (?, ?)",
  );
  addMember.run(groupId, user.id);
  const findUser = db.prepare(
    "SELECT id FROM users WHERE username = ? COLLATE NOCASE",
  );
  let added = 0;
  for (const raw of json?.members ?? []) {
    const row = findUser.get(String(raw).trim()) as { id: number } | undefined;
    if (row && row.id !== user.id) {
      addMember.run(groupId, row.id);
      added++;
    }
  }
  return NextResponse.json({ ok: true, id: groupId, added });
}

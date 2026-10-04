import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";

// GET /api/users?q=abc — username search for the player directory.
// Empty q returns the newest members (browse mode for Find players).
export async function GET(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  const q = (new URL(req.url).searchParams.get("q") ?? "").trim();
  const db = getDb();
  const rows = (q.length < 1
    ? db
        .prepare(
          `SELECT username, avatar, pro, role, bio FROM users
           WHERE id != ? ORDER BY id DESC LIMIT 21`,
        )
        .all(user.id)
    : db
        .prepare(
          `SELECT username, avatar, pro, role, bio FROM users
           WHERE username LIKE ? ESCAPE '\\' AND id != ?
           ORDER BY username LIMIT 10`,
        )
        .all(`%${q.replace(/[\\%_]/g, (c) => `\\${c}`)}%`, user.id)) as {
    username: string;
    avatar: string | null;
    pro: number;
    role: string;
    bio: string;
  }[];
  return NextResponse.json({ users: rows });
}

import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";

// GET /api/users?q=abc — username search for starting a private chat.
export async function GET(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  const q = (new URL(req.url).searchParams.get("q") ?? "").trim();
  if (q.length < 1) {
    return NextResponse.json({ users: [] });
  }
  const rows = getDb()
    .prepare(
      `SELECT username, avatar, pro FROM users
       WHERE username LIKE ? ESCAPE '\\' AND id != ?
       ORDER BY username LIMIT 10`,
    )
    .all(`%${q.replace(/[\\%_]/g, (c) => `\\${c}`)}%`, user.id) as {
    username: string;
    avatar: string | null;
    pro: number;
  }[];
  return NextResponse.json({ users: rows });
}

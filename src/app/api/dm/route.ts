import { NextResponse } from "next/server";
import { getCurrentUser, hasProAccess } from "@/lib/auth";
import { getDb } from "@/lib/db";

// GET /api/dm — conversation list: every user I've exchanged messages with,
// latest message first. GO PRO feature.
export async function GET() {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  if (!hasProAccess(user)) {
    return NextResponse.json(
      { error: "Private messages are a GO PRO feature", upgrade: true },
      { status: 403 },
    );
  }
  const rows = getDb()
    .prepare(
      `WITH peers AS (
        SELECT DISTINCT CASE WHEN sender_id = :me THEN recipient_id ELSE sender_id END AS peer_id
        FROM dm_messages WHERE sender_id = :me OR recipient_id = :me
      ),
      latest AS (
        SELECT peer_id, MAX(id) AS last_id FROM (
          SELECT CASE WHEN sender_id = :me THEN recipient_id ELSE sender_id END AS peer_id, id
          FROM dm_messages WHERE sender_id = :me OR recipient_id = :me
        ) GROUP BY peer_id
      )
      SELECT u.username, u.avatar, u.pro, u.role, m.body AS last_body, m.created_at AS last_at,
             (SELECT COUNT(*) FROM dm_messages r
              WHERE r.sender_id = u.id AND r.recipient_id = :me
                AND r.id > COALESCE((SELECT last_read_id FROM dm_reads WHERE reader_id = :me AND peer_id = u.id), 0)) AS unread
      FROM peers
      JOIN latest ON latest.peer_id = peers.peer_id
      JOIN dm_messages m ON m.id = latest.last_id
      JOIN users u ON u.id = peers.peer_id
      ORDER BY latest.last_id DESC`,
    )
    .all({ me: user.id }) as {
    username: string;
    avatar: string | null;
    pro: number;
    role: string;
    last_body: string;
    last_at: string;
    unread: number;
  }[];
  return NextResponse.json({ conversations: rows });
}

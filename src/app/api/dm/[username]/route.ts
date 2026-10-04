import { NextResponse } from "next/server";
import { getCurrentUser, hasProAccess } from "@/lib/auth";
import { getDb } from "@/lib/db";

const MAX_BODY = 500;
const PAGE = 60;

interface PeerRow {
  id: number;
  username: string;
  avatar: string | null;
  pro: number;
  role: string;
}

async function findPeer(username: string): Promise<PeerRow | undefined> {
  return getDb()
    .prepare("SELECT id, username, avatar, pro, role FROM users WHERE username = ? COLLATE NOCASE")
    .get(decodeURIComponent(username)) as PeerRow | undefined;
}

function proGate() {
  return NextResponse.json(
    { error: "Private messages are a GO PRO feature", upgrade: true },
    { status: 403 },
  );
}

// GET /api/dm/<username>?after=<id> — thread messages, marks the conversation read.
export async function GET(
  req: Request,
  { params }: { params: Promise<{ username: string }> },
) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  if (!hasProAccess(user)) return proGate();
  const { username } = await params;
  const peer = await findPeer(username);
  if (!peer || peer.id === user.id) {
    return NextResponse.json({ error: "Unknown user" }, { status: 404 });
  }
  const after = Number(new URL(req.url).searchParams.get("after") ?? "0") || 0;
  const db = getDb();
  const rows = db
    .prepare(
      `SELECT id, sender_id, body, media_url, media_type, created_at FROM dm_messages
       WHERE ((sender_id = :me AND recipient_id = :peer) OR (sender_id = :peer AND recipient_id = :me))
         AND id > :after
       ORDER BY id DESC LIMIT :page`,
    )
    .all({ me: user.id, peer: peer.id, after, page: PAGE }) as {
    id: number;
    sender_id: number;
    body: string;
    media_url: string | null;
    media_type: string | null;
    created_at: string;
  }[];
  const messages = rows.reverse().map((m) => ({
    id: m.id,
    mine: m.sender_id === user.id,
    body: m.body,
    media_url: m.media_url,
    media_type: m.media_type,
    created_at: m.created_at,
  }));
  const lastId = rows.length ? rows[rows.length - 1].id : 0;
  if (lastId > 0) {
    db.prepare(
      `INSERT INTO dm_reads (reader_id, peer_id, last_read_id) VALUES (?, ?, ?)
       ON CONFLICT (reader_id, peer_id) DO UPDATE SET last_read_id = excluded.last_read_id`,
    ).run(user.id, peer.id, lastId);
  }
  return NextResponse.json({
    peer: { username: peer.username, avatar: peer.avatar, pro: peer.pro, role: peer.role },
    messages,
  });
}

// POST /api/dm/<username> { body } — send a private message.
export async function POST(
  req: Request,
  { params }: { params: Promise<{ username: string }> },
) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  if (!hasProAccess(user)) return proGate();
  const { username } = await params;
  const peer = await findPeer(username);
  if (!peer || peer.id === user.id) {
    return NextResponse.json({ error: "Unknown user" }, { status: 404 });
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
    .prepare("INSERT INTO dm_messages (sender_id, recipient_id, body, media_url, media_type) VALUES (?, ?, ?, ?, ?)")
    .run(user.id, peer.id, body, mediaUrl, mediaType);
  return NextResponse.json({ ok: true, id: Number(info.lastInsertRowid) });
}

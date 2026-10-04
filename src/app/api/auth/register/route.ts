import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { createSession, hashPassword, isSecureRequest, setSessionCookie } from "@/lib/auth";

const schema = z.object({
  email: z.string().email().max(200),
  username: z
    .string()
    .min(3)
    .max(24)
    .regex(/^[a-zA-Z0-9_.-]+$/, "Letters, numbers, _ . - only"),
  password: z.string().min(8).max(128),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }
  const { email, username, password } = parsed.data;
  const db = getDb();
  const existing = db
    .prepare("SELECT email, username FROM users WHERE email = ? OR username = ?")
    .get(email, username) as { email: string; username: string } | undefined;
  if (existing) {
    const field = existing.email.toLowerCase() === email.toLowerCase() ? "email" : "username";
    return NextResponse.json({ error: `That ${field} is already taken` }, { status: 409 });
  }
  const result = db
    .prepare("INSERT INTO users (email, username, password_hash) VALUES (?, ?, ?)")
    .run(email, username, hashPassword(password));
  const userId = Number(result.lastInsertRowid);
  const { token, expiresAt } = createSession(userId);
  await setSessionCookie(token, expiresAt, isSecureRequest(req));
  return NextResponse.json({ data: { id: userId, email, username } });
}

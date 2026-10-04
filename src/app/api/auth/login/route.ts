import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { createSession, isSecureRequest, setSessionCookie, verifyPassword } from "@/lib/auth";

const schema = z.object({
  email: z.string().email().max(200),
  password: z.string().min(1).max(128),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 400 });
  }
  const { email, password } = parsed.data;
  const user = getDb()
    .prepare("SELECT id, email, username, password_hash FROM users WHERE email = ?")
    .get(email) as
    | { id: number; email: string; username: string; password_hash: string }
    | undefined;
  if (!user || !verifyPassword(password, user.password_hash)) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }
  const { token, expiresAt } = createSession(user.id);
  await setSessionCookie(token, expiresAt, isSecureRequest(req));
  return NextResponse.json({ data: { id: user.id, email: user.email, username: user.username } });
}

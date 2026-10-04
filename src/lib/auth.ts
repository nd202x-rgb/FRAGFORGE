import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { getDb } from "./db";

export const SESSION_COOKIE = "ff_session";
const SESSION_DAYS = 30;

export interface AuthUser {
  id: number;
  email: string;
  username: string;
  pro: number; // 1 once a GO PRO Stripe checkout completes
  role: string; // 'member' | 'owner'
  avatar: string | null;
  bio: string;
}

// PRO access = paid subscription, or the site owner.
export function hasProAccess(user: AuthUser): boolean {
  return user.pro === 1 || user.role === "owner";
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const candidate = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  return candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

export function createSession(userId: number): { token: string; expiresAt: Date } {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
  getDb()
    .prepare("INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)")
    .run(token, userId, expiresAt.toISOString());
  return { token, expiresAt };
}

export function isSecureRequest(req: Request): boolean {
  return (
    req.headers.get("x-forwarded-proto") === "https" ||
    new URL(req.url).protocol === "https:"
  );
}

export async function setSessionCookie(
  token: string,
  expiresAt: Date,
  secure: boolean,
): Promise<void> {
  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
    secure,
  });
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const row = getDb()
    .prepare(
      `SELECT u.id, u.email, u.username, u.pro, u.role, u.avatar, u.bio FROM sessions s
       JOIN users u ON u.id = s.user_id
       WHERE s.token = ? AND s.expires_at > datetime('now')`,
    )
    .get(token) as AuthUser | undefined;
  return row ?? null;
}

export async function destroySession(): Promise<void> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (token) {
    getDb().prepare("DELETE FROM sessions WHERE token = ?").run(token);
  }
  jar.delete(SESSION_COOKIE);
}

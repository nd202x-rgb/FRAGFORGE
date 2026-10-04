import { NextResponse } from "next/server";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";

const MAX_AVATAR_BYTES = 3 * 1024 * 1024;
const EXT_BY_TYPE: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
};

// POST multipart/form-data { avatar: File } — uploads a profile picture.
// POST application/json { bio } — updates the profile bio.
export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }

  const contentType = req.headers.get("content-type") ?? "";

  if (contentType.includes("multipart/form-data")) {
    const form = await req.formData().catch(() => null);
    const file = form?.get("avatar");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    const ext = EXT_BY_TYPE[file.type];
    if (!ext) {
      return NextResponse.json({ error: "PNG, JPG, WebP or GIF only" }, { status: 400 });
    }
    if (file.size > MAX_AVATAR_BYTES) {
      return NextResponse.json({ error: "Image must be under 3 MB" }, { status: 400 });
    }
    const dir = path.join(process.cwd(), "data", "uploads", "avatars");
    mkdirSync(dir, { recursive: true });
    const filename = `u${user.id}.${ext}`;
    writeFileSync(path.join(dir, filename), Buffer.from(await file.arrayBuffer()));
    const avatar = `/uploads/avatars/${filename}?v=${Date.now()}`;
    getDb().prepare("UPDATE users SET avatar = ? WHERE id = ?").run(avatar, user.id);
    return NextResponse.json({ avatar });
  }

  const json = (await req.json().catch(() => null)) as { bio?: string } | null;
  if (!json || typeof json.bio !== "string") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  const bio = json.bio.trim().slice(0, 280);
  getDb().prepare("UPDATE users SET bio = ? WHERE id = ?").run(bio, user.id);
  return NextResponse.json({ bio });
}

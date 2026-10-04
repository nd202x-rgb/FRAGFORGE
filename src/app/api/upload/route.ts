import { NextResponse } from "next/server";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { getCurrentUser } from "@/lib/auth";

const MAX_BYTES = 25 * 1024 * 1024; // 25 MB
const EXT_BY_TYPE: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "video/mp4": "mp4",
  "video/webm": "webm",
  "audio/mpeg": "mp3",
  "audio/ogg": "ogg",
  "audio/wav": "wav",
  "application/pdf": "pdf",
};

// POST multipart/form-data { file } — chat media upload.
// Returns { url, type } to embed in a chat/DM/group message.
export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  const form = await req.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }
  const ext = EXT_BY_TYPE[file.type];
  if (!ext) {
    return NextResponse.json(
      { error: "Images, videos, audio or PDF only" },
      { status: 400 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "File must be under 25 MB" }, { status: 400 });
  }
  const dir = path.join(process.cwd(), "data", "uploads", "chat");
  mkdirSync(dir, { recursive: true });
  const filename = `c${user.id}-${Date.now()}.${ext}`;
  writeFileSync(path.join(dir, filename), Buffer.from(await file.arrayBuffer()));
  return NextResponse.json({ url: `/uploads/chat/${filename}`, type: file.type });
}

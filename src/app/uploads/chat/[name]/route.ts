import { NextResponse } from "next/server";
import { readFileSync } from "node:fs";
import path from "node:path";

const TYPE_BY_EXT: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
  mp4: "video/mp4",
  webm: "video/webm",
  mp3: "audio/mpeg",
  ogg: "audio/ogg",
  wav: "audio/wav",
  pdf: "application/pdf",
};

// Serves chat media from data/uploads/chat/.
// (Files added under public/ after a production build are not served by Next.)
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const match = /^c(\d+)-(\d+)\.(png|jpg|webp|gif|mp4|webm|mp3|ogg|wav|pdf)$/.exec(name);
  if (!match) {
    return new NextResponse("Not found", { status: 404 });
  }
  const file = path.join(process.env.FRAGFORGE_DATA_DIR ?? process.cwd(), "data", "uploads", "chat", name);
  try {
    const data = readFileSync(file);
    return new NextResponse(new Uint8Array(data), {
      headers: {
        "Content-Type": TYPE_BY_EXT[match[3]],
        "Cache-Control": "public, max-age=300",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}

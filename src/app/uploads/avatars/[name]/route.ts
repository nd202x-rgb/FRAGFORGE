import { NextResponse } from "next/server";
import { readFileSync } from "node:fs";
import path from "node:path";

const TYPE_BY_EXT: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
};

// Serves user-uploaded avatars from data/uploads/avatars/.
// (Files added under public/ after a production build are not served by Next.)
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const match = /^u(\d+)\.(png|jpg|webp|gif)$/.exec(name);
  if (!match) {
    return new NextResponse("Not found", { status: 404 });
  }
  const file = path.join(process.env.FRAGFORGE_DATA_DIR ?? process.cwd(), "data", "uploads", "avatars", name);
  try {
    const data = readFileSync(file);
    return new NextResponse(new Uint8Array(data), {
      headers: {
        "Content-Type": TYPE_BY_EXT[match[2]],
        "Cache-Control": "public, max-age=60",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}

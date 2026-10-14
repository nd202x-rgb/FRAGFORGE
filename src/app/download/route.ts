import { readFileSync } from "node:fs";
import path from "node:path";

// Serve the branded download page at /download (static file lives in public/dl/)
export function GET() {
  const html = readFileSync(
    path.join(process.cwd(), "public", "dl", "index.html"),
    "utf8",
  );
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { stripeFetch } from "@/lib/stripe";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in required" }, { status: 401 });
  }
  let json: { session_id?: string };
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!json.session_id || !json.session_id.startsWith("cs_")) {
    return NextResponse.json({ error: "Invalid session id" }, { status: 400 });
  }
  try {
    const session = await stripeFetch(
      `/checkout/sessions/${encodeURIComponent(json.session_id)}`,
    );
    if (String(session.client_reference_id) !== String(user.id)) {
      return NextResponse.json({ error: "Session belongs to another account" }, { status: 403 });
    }
    if (session.status === "complete" || session.payment_status === "paid") {
      getDb().prepare("UPDATE users SET pro = 1 WHERE id = ?").run(user.id);
      return NextResponse.json({ pro: true });
    }
    return NextResponse.json({ pro: false, status: session.status });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 502 });
  }
}

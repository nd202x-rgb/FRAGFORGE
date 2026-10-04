import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { answerQuery } from "@/lib/assistant";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { error: "Sign in to chat with FORGE AI" },
      { status: 401 },
    );
  }
  const json = (await req.json().catch(() => null)) as { message?: string } | null;
  const message = (json?.message ?? "").trim().slice(0, 500);
  if (!message) {
    return NextResponse.json({ error: "Empty message" }, { status: 400 });
  }
  try {
    const result = await answerQuery(message);
    return NextResponse.json(result);
  } catch (e) {
    console.error("assistant error", e);
    return NextResponse.json(
      { error: "Coach is mid-fight — try again" },
      { status: 500 },
    );
  }
}

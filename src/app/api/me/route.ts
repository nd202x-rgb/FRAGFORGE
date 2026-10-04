import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ data: null });
  const accounts = getDb()
    .prepare("SELECT platform, tag FROM linked_accounts WHERE user_id = ? ORDER BY platform")
    .all(user.id);
  return NextResponse.json({ data: { ...user, accounts } });
}

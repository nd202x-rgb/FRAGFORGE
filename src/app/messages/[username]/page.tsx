import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { DmClient } from "./DmClient";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return { title: `Chat with ${decodeURIComponent(username)} — FragForge` };
}

export default async function DmPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/messages");
  const { username } = await params;
  const peer = getDb()
    .prepare("SELECT username, avatar, pro, role FROM users WHERE username = ? COLLATE NOCASE")
    .get(decodeURIComponent(username)) as
    | { username: string; avatar: string | null; pro: number; role: string }
    | undefined;
  if (!peer || peer.username.toLowerCase() === user.username.toLowerCase()) {
    redirect("/messages");
  }
  return (
    <DmClient
      peer={{ username: peer.username, avatar: peer.avatar, pro: peer.pro, role: peer.role }}
      me={user.username}
    />
  );
}

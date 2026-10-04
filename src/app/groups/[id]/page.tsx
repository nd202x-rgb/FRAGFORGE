import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { GroupClient } from "./GroupClient";

export const dynamic = "force-dynamic";

export default async function GroupPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/groups");
  const { id } = await params;
  const member = getDb()
    .prepare("SELECT 1 FROM group_members WHERE group_id = ? AND user_id = ?")
    .get(Number(id), user.id);
  if (!member) redirect("/groups");
  return <GroupClient groupId={id} username={user.username} />;
}

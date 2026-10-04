import { redirect } from "next/navigation";
import { getCurrentUser, hasProAccess } from "@/lib/auth";
import { GroupsClient } from "./GroupsClient";

export const dynamic = "force-dynamic";

export const metadata = { title: "Friend groups — FragForge" };

export default async function GroupsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/groups");
  return <GroupsClient isPro={hasProAccess(user)} />;
}

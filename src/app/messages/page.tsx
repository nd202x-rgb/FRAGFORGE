import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { InboxClient } from "./InboxClient";

export const dynamic = "force-dynamic";

export const metadata = { title: "Messages — FragForge" };

export default async function MessagesPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/messages");
  return <InboxClient />;
}

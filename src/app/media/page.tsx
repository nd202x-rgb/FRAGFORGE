import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { MediaClient } from "./MediaClient";

export const dynamic = "force-dynamic";

export const metadata = { title: "Media corner — FragForge" };

export default async function MediaPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/media");
  return <MediaClient />;
}

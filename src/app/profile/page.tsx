import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { ProfileClient } from "./ProfileClient";

export const dynamic = "force-dynamic";

export const metadata = { title: "My Profile — FragForge" };

export default async function ProfilePage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/profile");

  const row = getDb()
    .prepare("SELECT created_at FROM users WHERE id = ?")
    .get(user.id) as { created_at: string };
  const linkedCount = (
    getDb()
      .prepare("SELECT COUNT(*) AS n FROM linked_accounts WHERE user_id = ?")
      .get(user.id) as { n: number }
  ).n;

  return (
    <ProfileClient
      initial={{
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        bio: user.bio,
        pro: !!user.pro,
        role: user.role,
        memberSince: row.created_at,
        linkedCount,
      }}
    />
  );
}

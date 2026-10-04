import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <div className="relative px-4 py-20">
      <div className="bg-grid absolute inset-0 -z-10" />
      <Suspense>
        <AuthForm mode="login" />
      </Suspense>
    </div>
  );
}

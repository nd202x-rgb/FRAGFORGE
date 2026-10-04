import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = { title: "Create account" };

export default function RegisterPage() {
  return (
    <div className="relative px-4 py-20">
      <div className="bg-grid absolute inset-0 -z-10" />
      <Suspense>
        <AuthForm mode="register" />
      </Suspense>
    </div>
  );
}

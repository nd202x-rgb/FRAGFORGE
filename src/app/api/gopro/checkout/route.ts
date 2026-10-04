import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { stripeFetch } from "@/lib/stripe";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in to upgrade" }, { status: 401 });
  }
  const origin = new URL(req.url).origin;
  const body = new URLSearchParams({
    mode: "subscription",
    "line_items[0][price_data][currency]": "usd",
    "line_items[0][price_data][unit_amount]": "900",
    "line_items[0][price_data][recurring][interval]": "month",
    "line_items[0][price_data][product_data][name]": "FragForge GO PRO",
    "line_items[0][price_data][product_data][description]":
      "Pro video courses, VOD reviews and ranked climb programs for every game.",
    "line_items[0][price_data][product_data][tax_code]": "txcd_10000000",
    "line_items[0][quantity]": "1",
    client_reference_id: String(user.id),
    customer_email: user.email,
    success_url: `${origin}/gopro?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/gopro`,
  });
  try {
    const session = await stripeFetch("/checkout/sessions", { body });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 502 });
  }
}

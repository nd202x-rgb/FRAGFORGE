// Minimal Stripe REST client — no npm dependency needed for Checkout Sessions.
const API = "https://api.stripe.com/v1";

export function stripeConfigured(): boolean {
  return !!process.env.STRIPE_SECRET_KEY;
}

export async function stripeFetch(
  path: string,
  options: { method?: string; body?: URLSearchParams } = {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("Stripe is not configured (STRIPE_SECRET_KEY missing)");
  const res = await fetch(`${API}${path}`, {
    method: options.method ?? (options.body ? "POST" : "GET"),
    headers: {
      Authorization: `Bearer ${key}`,
      ...(options.body ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
    },
    body: options.body,
    cache: "no-store",
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(json?.error?.message ?? `Stripe request failed (${res.status})`);
  }
  return json;
}

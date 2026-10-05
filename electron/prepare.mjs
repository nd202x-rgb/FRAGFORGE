import { cpSync, rmSync, mkdirSync, existsSync, writeFileSync } from "fs";
import path from "path";

const root = process.cwd();
const out = path.join(root, "dist-app");

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

// Next standalone server bundle
cpSync(path.join(root, ".next", "standalone"), out, { recursive: true });

// static assets standalone doesn't include
cpSync(path.join(root, "public"), path.join(out, "public"), { recursive: true });
cpSync(
  path.join(root, ".next", "static"),
  path.join(out, ".next", "static"),
  { recursive: true },
);

// seed database + uploads (first run copies them to the writable data dir)
if (existsSync(path.join(root, "data"))) {
  cpSync(path.join(root, "data"), path.join(out, "data"), { recursive: true });
}

// runtime keys for the packaged app (from env at package time — not committed)
const cfg = {};
for (const k of ["OPENAI_API_KEY", "STRIPE_SECRET_KEY"]) {
  if (process.env[k]) cfg[k] = process.env[k];
}
writeFileSync(
  path.join(root, "electron", "config.json"),
  JSON.stringify(cfg, null, 2),
);

console.log("dist-app ready:", Object.keys(cfg).length, "keys baked");

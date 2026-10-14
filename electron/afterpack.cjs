// electron-builder strips node_modules out of the extraResources copy of
// dist-app, which leaves resources/app/server.js unable to require('next').
// Restore the standalone server's dependencies next to it after packing.
const { cpSync, existsSync } = require("fs");
const path = require("path");

module.exports = async function afterPack(context) {
  const src = path.join(context.packager.projectDir, "dist-app", "node_modules");
  const dest = path.join(context.appOutDir, "resources", "app", "node_modules");
  if (!existsSync(src)) return;
  cpSync(src, dest, { recursive: true, verbatimSymlinks: true });
};

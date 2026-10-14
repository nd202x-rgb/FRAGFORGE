const { app, BrowserWindow, shell, ipcMain } = require("electron");
const { spawn, execFile } = require("child_process");
const path = require("path");
const fs = require("fs");
const http = require("http");
const https = require("https");
const os = require("os");

const PORT = 3478;
const BIND = "0.0.0.0"; // reachable by friends on the network
const LOCAL = `http://127.0.0.1:${PORT}`;

let serverProc = null;
const ONLINE_SERVER = "https://fragforge-production.up.railway.app";

let mode = "local"; // "local" | "join"

// --- cloudflared quick tunnel: public URL for cross-internet hosting ---
const TUNNEL_DIR = () => path.join(app.getPath("userData"), "bin");
const TUNNEL_BIN = () =>
  path.join(TUNNEL_DIR(), process.platform === "win32" ? "cloudflared.exe" : "cloudflared");
const TUNNEL_DOWNLOAD = {
  win32: "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe",
  linux: "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64",
};
let tunnelProc = null;
let tunnelUrl = null;
let tunnelState = "idle"; // idle | downloading | starting | ready | error
let tunnelErr = null;

function downloadFile(url, dest, depth = 0) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && depth < 5) {
          res.resume();
          resolve(downloadFile(res.headers.location, dest, depth + 1));
          return;
        }
        if (res.statusCode !== 200) {
          res.resume();
          reject(new Error(`download failed: ${res.statusCode}`));
          return;
        }
        const out = fs.createWriteStream(dest);
        res.pipe(out);
        out.on("finish", () => out.close(resolve));
        out.on("error", reject);
      })
      .on("error", reject);
  });
}

async function ensureTunnelBin() {
  const bin = TUNNEL_BIN();
  if (fs.existsSync(bin)) return bin;
  fs.mkdirSync(TUNNEL_DIR(), { recursive: true });
  if (process.platform === "darwin") {
    const tgz = path.join(TUNNEL_DIR(), "cloudflared.tgz");
    await downloadFile(
      "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-darwin-amd64.tgz",
      tgz,
    );
    await new Promise((res, rej) =>
      execFile("tar", ["-xzf", tgz, "-C", TUNNEL_DIR()], (e) => (e ? rej(e) : res())),
    );
    fs.unlinkSync(tgz);
  } else {
    const url = TUNNEL_DOWNLOAD[process.platform];
    if (!url) throw new Error(`no tunnel binary for ${process.platform}`);
    await downloadFile(url, bin);
    if (process.platform !== "win32") fs.chmodSync(bin, 0o755);
  }
  return bin;
}

function startTunnel() {
  if (tunnelProc || tunnelState === "downloading") return;
  tunnelState = "downloading";
  tunnelErr = null;
  ensureTunnelBin()
    .then((bin) => {
      tunnelState = "starting";
      tunnelProc = spawn(bin, ["tunnel", "--url", LOCAL, "--no-autoupdate"], {
        env: { ...process.env, NO_AUTOUPDATE: "true", TUNNEL_METRICS: "127.0.0.1:0" },
      });
      const onData = (d) => {
        const m = String(d).match(/https:\/\/[-a-z0-9]+\.trycloudflare\.com/);
        if (m && !tunnelUrl) {
          tunnelUrl = m[0];
          tunnelState = "ready";
        }
      };
      tunnelProc.stdout.on("data", onData);
      tunnelProc.stderr.on("data", onData);
      tunnelProc.on("exit", () => {
        tunnelProc = null;
        if (tunnelState !== "ready") tunnelState = "error";
        tunnelErr = tunnelErr ?? "tunnel exited";
      });
      tunnelProc.on("error", (e) => {
        tunnelProc = null;
        tunnelState = "error";
        tunnelErr = String(e);
      });
    })
    .catch((e) => {
      tunnelState = "error";
      tunnelErr = String(e);
    });
}

function stopTunnel() {
  if (tunnelProc) tunnelProc.kill();
  tunnelProc = null;
  tunnelUrl = null;
  tunnelState = "idle";
}
// ----------------------------------------------------------------------

function statePath() {
  return path.join(app.getPath("userData"), "launcher-state.json");
}
function loadState() {
  try {
    return JSON.parse(fs.readFileSync(statePath(), "utf8"));
  } catch {
    return {};
  }
}
function saveState(patch) {
  try {
    fs.writeFileSync(statePath(), JSON.stringify({ ...loadState(), ...patch }));
  } catch {}
}

function lanUrls() {
  const urls = [LOCAL];
  for (const [name, addrs] of Object.entries(os.networkInterfaces())) {
    for (const a of addrs ?? []) {
      if (a.family === "IPv4" && !a.internal) {
        urls.push(`http://${a.address}:${PORT}`);
      }
    }
  }
  return urls;
}

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      const req = http.get(url, (res) => {
        res.resume();
        resolve(true);
      });
      req.on("error", () => {
        req.destroy();
        if (Date.now() - start > timeoutMs) resolve(false);
        else setTimeout(tick, 300);
      });
    };
    tick();
  });
}

function probe(url, timeoutMs = 4000) {
  return new Promise((resolve) => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.get(url, { timeout: timeoutMs }, (res) => {
      res.resume();
      resolve(res.statusCode < 500);
    });
    req.on("timeout", () => {
      req.destroy();
      resolve(false);
    });
    req.on("error", () => resolve(false));
  });
}

function seedDataDir(appDir, userDataDir) {
  const bundled = path.join(appDir, "data");
  const target = path.join(userDataDir, "data");
  if (fs.existsSync(bundled) && !fs.existsSync(target)) {
    fs.cpSync(bundled, target, { recursive: true });
  }
  fs.mkdirSync(target, { recursive: true });
  return userDataDir;
}

async function startLocalServer() {
  if (serverProc) return;
  const appDir = path.join(process.resourcesPath, "app");
  const serverJs = path.join(appDir, "server.js");
  if (!fs.existsSync(serverJs)) return; // dev mode: connect to an externally started server
  const dataRoot = seedDataDir(appDir, app.getPath("userData"));

  const env = {
    ...process.env,
    ELECTRON_RUN_AS_NODE: "1",
    NODE_ENV: "production",
    PORT: String(PORT),
    HOSTNAME: BIND,
    FRAGFORGE_DATA_DIR: dataRoot,
    FRAGFORGE_DB_PATH: path.join(dataRoot, "data", "fragforge.db"),
  };

  const cfgPath = path.join(process.resourcesPath, "config.json");
  if (fs.existsSync(cfgPath)) {
    try {
      Object.assign(env, JSON.parse(fs.readFileSync(cfgPath, "utf8")));
    } catch {}
  }

  serverProc = spawn(process.execPath, [serverJs], { cwd: appDir, env });
  serverProc.on("error", () => {});
  serverProc.on("exit", () => {
    serverProc = null;
  });
}

function openGame(win, base) {
  win.setMinimumSize(1024, 640);
  win.setSize(1440, 900);
  win.center();
  win.loadURL(base);
}

function makeWindow() {
  const win = new BrowserWindow({
    width: 560,
    height: 560,
    resizable: true,
    backgroundColor: "#0a0a0f",
    title: "FragForge",
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    const allowed = mode === "join" ? loadState().serverUrl : LOCAL;
    if (url.startsWith("http") && allowed && !url.startsWith(allowed)) {
      shell.openExternal(url);
      return { action: "deny" };
    }
    return { action: "allow" };
  });
  win.webContents.on("will-navigate", (event, url) => {
    const allowed = mode === "join" ? loadState().serverUrl : LOCAL;
    if (
      url.startsWith("http") &&
      allowed &&
      !url.startsWith(allowed) &&
      !url.startsWith(LOCAL)
    ) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });
  return win;
}

app.whenReady().then(async () => {
  const win = makeWindow();

  ipcMain.handle("ff:host-info", () => ({ urls: lanUrls() }));

  ipcMain.handle("ff:tunnel-status", () => ({
    state: tunnelState,
    url: tunnelUrl,
    err: tunnelErr,
  }));

  ipcMain.handle("ff:play", async (_e, host) => {
    mode = "local";
    saveState({ mode: "local" });
    await startLocalServer();
    await waitForServer(LOCAL);
    openGame(win, LOCAL);
    return { ok: true };
  });

  // host: start server + internet tunnel but stay on the share screen
  ipcMain.handle("ff:host", async () => {
    mode = "local";
    saveState({ mode: "local" });
    await startLocalServer();
    const up = await waitForServer(LOCAL);
    startTunnel();
    return { ok: up };
  });

  ipcMain.handle("ff:open", () => {
    openGame(win, LOCAL);
    return { ok: true };
  });

  ipcMain.handle("ff:join-online", async () => {
    const ok = await probe(ONLINE_SERVER);
    if (!ok) return { ok: false };
    mode = "join";
    saveState({ mode: "join", serverUrl: ONLINE_SERVER });
    openGame(win, ONLINE_SERVER);
    return { ok: true };
  });

  ipcMain.handle("ff:join", async (_e, url) => {
    const base = url.replace(/\/+$/, "");
    const ok = await probe(base);
    if (!ok) return { ok: false };
    mode = "join";
    saveState({ mode: "join", serverUrl: base });
    openGame(win, base);
    return { ok: true };
  });

  // return to the launcher (from a join session)
  ipcMain.handle("ff:launcher", () => {
    mode = "local";
    saveState({ mode: "local" });
    stopTunnel();
    win.setSize(560, 560);
    win.center();
    win.loadFile(path.join(__dirname, "launcher.html"));
  });

  // Always-online startup: join the shared server straight away (Discord-style);
  // the launcher is only the fallback when it's unreachable.
  win.loadFile(path.join(__dirname, "launcher.html"));
  (async () => {
    if (await probe(ONLINE_SERVER, 6000)) {
      mode = "join";
      saveState({ mode: "join", serverUrl: ONLINE_SERVER });
      openGame(win, ONLINE_SERVER);
    }
  })();
});

app.on("window-all-closed", () => {
  if (serverProc) serverProc.kill();
  if (tunnelProc) tunnelProc.kill();
  app.quit();
});

app.on("quit", () => {
  if (serverProc) serverProc.kill();
  if (tunnelProc) tunnelProc.kill();
});

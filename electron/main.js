const { app, BrowserWindow, shell, ipcMain } = require("electron");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
const http = require("http");
const os = require("os");

const PORT = 3478;
const BIND = "0.0.0.0"; // reachable by friends on the network
const LOCAL = `http://127.0.0.1:${PORT}`;

let serverProc = null;
let mode = "local"; // "local" | "join"

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
    const req = http.get(url, { timeout: timeoutMs }, (res) => {
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

  ipcMain.handle("ff:play", async (_e, host) => {
    mode = "local";
    saveState({ mode: "local" });
    await startLocalServer();
    await waitForServer(LOCAL);
    openGame(win, LOCAL);
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
    win.setSize(560, 560);
    win.center();
    win.loadFile(path.join(__dirname, "launcher.html"));
  });

  win.loadFile(path.join(__dirname, "launcher.html"));
});

app.on("window-all-closed", () => {
  if (serverProc) serverProc.kill();
  app.quit();
});

app.on("quit", () => {
  if (serverProc) serverProc.kill();
});

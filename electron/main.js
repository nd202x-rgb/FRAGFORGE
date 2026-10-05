const { app, BrowserWindow, shell } = require("electron");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
const http = require("http");

const PORT = 3478;
const HOST = "127.0.0.1";
let serverProc = null;

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      const req = http.get(url, (res) => {
        res.resume();
        resolve();
      });
      req.on("error", () => {
        req.destroy();
        if (Date.now() - start > timeoutMs) {
          reject(new Error("FragForge server did not start"));
        } else {
          setTimeout(tick, 250);
        }
      });
    };
    tick();
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

app.whenReady().then(async () => {
  const appDir = path.join(process.resourcesPath, "app");
  const serverJs = path.join(appDir, "server.js");
  const dataRoot = seedDataDir(appDir, app.getPath("userData"));

  const env = {
    ...process.env,
    ELECTRON_RUN_AS_NODE: "1",
    NODE_ENV: "production",
    PORT: String(PORT),
    HOSTNAME: HOST,
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

  const base = `http://${HOST}:${PORT}`;
  try {
    await waitForServer(base);
  } catch (e) {
    app.quit();
    return;
  }

  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1024,
    minHeight: 640,
    backgroundColor: "#0a0a0f",
    title: "FragForge",
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true },
  });

  // external links open in the system browser, not the app
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("http") && !url.startsWith(base)) {
      shell.openExternal(url);
      return { action: "deny" };
    }
    return { action: "allow" };
  });
  win.webContents.on("will-navigate", (event, url) => {
    if (url.startsWith("http") && !url.startsWith(base)) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  win.loadURL(base);
});

app.on("window-all-closed", () => {
  if (serverProc) serverProc.kill();
  app.quit();
});

app.on("quit", () => {
  if (serverProc) serverProc.kill();
});

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ffLauncher", {
  play: (host) => ipcRenderer.invoke("ff:play", host),
  host: () => ipcRenderer.invoke("ff:host"),
  open: () => ipcRenderer.invoke("ff:open"),
  tunnelStatus: () => ipcRenderer.invoke("ff:tunnel-status"),
  join: (url) => ipcRenderer.invoke("ff:join", url),
  hostInfo: () => ipcRenderer.invoke("ff:host-info"),
  launcher: () => ipcRenderer.invoke("ff:launcher"),
});

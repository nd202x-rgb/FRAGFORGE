const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ffLauncher", {
  play: (host) => ipcRenderer.invoke("ff:play", host),
  join: (url) => ipcRenderer.invoke("ff:join", url),
  hostInfo: () => ipcRenderer.invoke("ff:host-info"),
  launcher: () => ipcRenderer.invoke("ff:launcher"),
});

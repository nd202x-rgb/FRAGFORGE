export interface Emulator {
  name: string;
  systems: string;
  platform: string; // what it runs on
  status: string; // development status
  url: string; // official site/repo
  notes: string;
}

export const EMULATORS: Emulator[] = [
  { name: "RetroArch", systems: "NES → PS1, Arcade, 40+ cores", platform: "Windows / macOS / Linux / Android / iOS", status: "Actively developed", url: "https://www.retroarch.com", notes: "All-in-one frontend — use it for anything 2D-era and under." },
  { name: "Dolphin", systems: "GameCube / Wii", platform: "Windows / macOS / Linux / Android", status: "Actively developed", url: "https://dolphin-emu.org", notes: "Near-perfect compatibility; netplay built in for Smash Melee." },
  { name: "PCSX2", systems: "PlayStation 2", platform: "Windows / macOS / Linux", status: "Actively developed", url: "https://pcsx2.net", notes: "99%+ library playable; upscaling makes PS2 look remastered." },
  { name: "RPCS3", systems: "PlayStation 3", platform: "Windows / Linux / macOS", status: "Actively developed", url: "https://rpcs3.net", notes: "Needs a strong CPU; ~70% of the PS3 library fully playable." },
  { name: "PPSSPP", systems: "PlayStation Portable", platform: "Everything incl. mobile", status: "Actively developed", url: "https://www.ppsspp.org", notes: "Runs on a potato; great for Monster Hunter and fighting ports." },
  { name: "mGBA", systems: "GB / GBC / GBA", platform: "Windows / macOS / Linux / Switch / Vita", status: "Actively developed", url: "https://mgba.io", notes: "Most accurate GBA emulation; built-in fast-forward and netplay." },
  { name: "melonDS", systems: "Nintendo DS / DSi", platform: "Windows / macOS / Linux / Android", status: "Actively developed", url: "https://melonds.kuribo64.net", notes: "Best DS accuracy + local Wi-Fi emulation for multiplayer." },
  { name: "Azahar", systems: "Nintendo 3DS", platform: "Windows / macOS / Linux / Android", status: "Actively developed", url: "https://azahar-emulator.org", notes: "Community successor to Citra after the 2024 takedown." },
  { name: "xemu", systems: "Original Xbox", platform: "Windows / macOS / Linux", status: "Actively developed", url: "https://xemu.app", notes: "~70% library playable; needs your own Xbox BIOS dump." },
  { name: "Xenia", systems: "Xbox 360", platform: "Windows / Linux", status: "Community builds", url: "https://xenia.jp", notes: "Experimental but improving fast; check per-game compatibility." },
  { name: "Cemu", systems: "Wii U", platform: "Windows / Linux / macOS", status: "Actively developed", url: "https://cemu.info", notes: "Open-sourced since 2022; Breath of the Wild at 4K/60." },
  { name: "Ryujinx successors (Kenji-NX)", systems: "Nintendo Switch", platform: "Windows / Linux / macOS", status: "Fork-maintained", url: "https://github.com/Kenji-NX/Kenji-NX", notes: "Original Ryujinx discontinued in 2024; community forks continue. Requires firmware and keys dumped from your own console." },
];

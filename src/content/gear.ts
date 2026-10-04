export interface GearItem {
  name: string;
  price: string; // typical street price
  tier: "pro" | "mid" | "budget";
  why: string; // why players pick it
  amazon: string; // amazon search URL
  aliexpress: string; // aliexpress search URL
}

export interface GearCategory {
  id: string;
  title: string;
  blurb: string;
  items: GearItem[];
}

const amz = (q: string) => `https://www.amazon.com/s?k=${encodeURIComponent(q)}`;
const ali = (q: string) => `https://www.aliexpress.com/wholesale?SearchText=${encodeURIComponent(q)}`;

export const GEAR: GearCategory[] = [
  {
    id: "mice",
    title: "Gaming mice",
    blurb: "The single biggest aim upgrade. Sub-65g wireless is the pro standard.",
    items: [
      { name: "Logitech G Pro X Superlight 2", price: "$159", tier: "pro", why: "The most-used mouse in pro Valorant and CS — 60g, HERO 2 sensor, flawless wireless.", amazon: amz("Logitech G Pro X Superlight 2"), aliexpress: ali("Logitech G Pro X Superlight 2") },
      { name: "Razer Viper V3 Pro", price: "$159", tier: "pro", why: "54g symmetrical shape, 8KHz polling, Focus Pro 35K sensor — Faker and CS pros run it.", amazon: amz("Razer Viper V3 Pro"), aliexpress: ali("Razer Viper V3 Pro") },
      { name: "ZOWIE EC2-CW", price: "$139", tier: "pro", why: "The CS:GO/CS2 pro classic — ergonomic shell, no software needed, 3360-grade sensor.", amazon: amz("ZOWIE EC2-CW"), aliexpress: ali("ZOWIE EC2-CW") },
      { name: "VXE Dragonfly R1 Pro", price: "$30–40", tier: "budget", why: "AliExpress favorite — PAW3395 sensor and 49g shell at a quarter of flagship price.", amazon: amz("VXE Dragonfly R1 Pro"), aliexpress: ali("VXE Dragonfly R1 Pro") },
      { name: "Attack Shark X3", price: "$25–30", tier: "budget", why: "PAW3395 sensor, tri-mode wireless, ~49g — the cheapest true 'flagship sensor' mouse.", amazon: amz("Attack Shark X3 mouse"), aliexpress: ali("Attack Shark X3") },
    ],
  },
  {
    id: "keyboards",
    title: "Keyboards",
    blurb: "Hall-effect rapid trigger is the 2025/26 competitive standard for FPS and fighters.",
    items: [
      { name: "Wooting 60HE+", price: "$175", tier: "pro", why: "Rapid trigger + adjustable actuation made it the default keyboard of pro Valorant.", amazon: amz("Wooting 60HE"), aliexpress: ali("Wooting 60HE") },
      { name: "Razer Huntsman V3 Pro TKL", price: "$220", tier: "pro", why: "Analog optical switches with rapid trigger; TKL layout favored by CS and Fortnite pros.", amazon: amz("Razer Huntsman V3 Pro TKL"), aliexpress: ali("Razer Huntsman V3 Pro") },
      { name: "SteelSeries Apex Pro TKL Gen 3", price: "$220", tier: "mid", why: "OmniPoint 3.0 adjustable switches, OLED smart display, esports-grade build.", amazon: amz("SteelSeries Apex Pro TKL Gen 3"), aliexpress: ali("SteelSeries Apex Pro TKL") },
      { name: "Aula F75", price: "$45", tier: "budget", why: "Gasket-mount 75% that punches way above its price — the AliExpress community darling.", amazon: amz("Aula F75 keyboard"), aliexpress: ali("Aula F75") },
      { name: "Monsgeek FUN60 Ultra", price: "$50–60", tier: "budget", why: "Hall-effect rapid trigger under $60 — Wooting features on an AliExpress budget.", amazon: amz("Monsgeek FUN60"), aliexpress: ali("Monsgeek FUN60") },
    ],
  },
  {
    id: "monitors",
    title: "Monitors",
    blurb: "240Hz+ is the competitive floor; OLED is the new endgame.",
    items: [
      { name: "ZOWIE XL2546K 240Hz", price: "$430–500", tier: "pro", why: "The LAN standard in CS2 — DyAc+ backlight strobing gives the clearest motion in esports.", amazon: amz("ZOWIE XL2546K"), aliexpress: ali("ZOWIE XL2546K") },
      { name: "ASUS ROG Swift OLED PG27AQDM", price: "$750", tier: "pro", why: "27\" 240Hz OLED — near-zero response time, the streamer/pro hybrid pick.", amazon: amz("ASUS ROG PG27AQDM"), aliexpress: ali("ASUS PG27AQDM") },
      { name: "Alienware AW2524H 500Hz", price: "$650", tier: "mid", why: "500Hz IPS for the highest refresh competitive play in Valorant/CS2.", amazon: amz("Alienware AW2524H"), aliexpress: ali("Alienware AW2524H") },
      { name: "KOORUI 24\" 180Hz (GN01)", price: "$110–130", tier: "budget", why: "Fast IPS 180Hz at entry price — the best budget ticket into high-refresh gaming.", amazon: amz("KOORUI 24 inch 180Hz monitor"), aliexpress: ali("KOORUI 180Hz monitor") },
    ],
  },
  {
    id: "audio",
    title: "Headsets & audio",
    blurb: "Footsteps win rounds. Closed-back imaging beats raw bass.",
    items: [
      { name: "Logitech G Pro X 2 Lightspeed", price: "$249", tier: "pro", why: "Graphene drivers, wireless + Bluetooth, the headset most worn at VCT and BLAST events.", amazon: amz("Logitech G Pro X 2"), aliexpress: ali("Logitech G Pro X 2") },
      { name: "SteelSeries Arctis Nova Pro", price: "$350", tier: "pro", why: "Hi-res drivers with a dedicated DAC — imaging tuned for footsteps and utility cues.", amazon: amz("SteelSeries Arctis Nova Pro"), aliexpress: ali("Arctis Nova Pro") },
      { name: "HyperX Cloud III", price: "$99", tier: "mid", why: "The value king for a decade — comfortable, durable, clean positional audio.", amazon: amz("HyperX Cloud III"), aliexpress: ali("HyperX Cloud III") },
      { name: "KZ x Crinacle IEM (in-ear)", price: "$25–40", tier: "budget", why: "Audiophile IEMs give better imaging than most gaming headsets under $150.", amazon: amz("KZ Crinacle IEM"), aliexpress: ali("KZ Crinacle IEM") },
    ],
  },
  {
    id: "pc",
    title: "PC parts & laptops",
    blurb: "Frames first: a strong CPU + GPU pairing keeps you above monitor refresh.",
    items: [
      { name: "AMD Ryzen 7 9800X3D", price: "$479", tier: "pro", why: "The fastest gaming CPU — 3D V-Cache crushes 1% lows in CS2, Valorant and Warzone.", amazon: amz("Ryzen 7 9800X3D"), aliexpress: ali("Ryzen 9800X3D") },
      { name: "NVIDIA RTX 5070 Ti", price: "$750", tier: "pro", why: "240+ fps at 1440p in every competitive title; DLSS 4 frame gen for single-player.", amazon: amz("RTX 5070 Ti"), aliexpress: ali("RTX 5070 Ti") },
      { name: "ASUS ROG Zephyrus G14 (2025)", price: "$1,600", tier: "pro", why: "OLED 120Hz+, RTX 50-series in 1.5kg — the laptop pros travel with.", amazon: amz("ASUS ROG Zephyrus G14"), aliexpress: ali("ROG Zephyrus G14") },
      { name: "Lenovo Legion Pro 5", price: "$1,400", tier: "mid", why: "RTX 5070 + 240Hz display — the best fps-per-dollar gaming laptop.", amazon: amz("Lenovo Legion Pro 5"), aliexpress: ali("Lenovo Legion Pro 5") },
      { name: "Acer Nitro V 15", price: "$750", tier: "budget", why: "RTX 4050/4060 entry machine — runs Valorant/CS2 at high refresh on a budget.", amazon: amz("Acer Nitro V 15"), aliexpress: ali("Acer Nitro V 15") },
    ],
  },
  {
    id: "pads",
    title: "Mousepads",
    blurb: "The cheapest consistency upgrade — control pads for tac shooters, speed for tracking.",
    items: [
      { name: "Artisan Zero Soft", price: "$70", tier: "pro", why: "The pad half the VCT uses — balanced control and glide, legendary consistency.", amazon: amz("Artisan Zero mousepad"), aliexpress: ali("Artisan Zero mousepad") },
      { name: "ZOWIE G-SR-SE", price: "$45", tier: "mid", why: "Humidity-proof control surface — CS pros' second-favorite pad after the Artisan.", amazon: amz("ZOWIE G-SR-SE"), aliexpress: ali("ZOWIE G-SR-SE") },
      { name: "Esports Tiger Aqua Control+", price: "$20", tier: "budget", why: "AliExpress gem — Artisan-adjacent weave for a third of the price.", amazon: amz("Aqua Control mousepad"), aliexpress: ali("Aqua Control Plus mousepad") },
    ],
  },
];

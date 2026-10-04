export interface GameMeta {
  slug: string;
  name: string;
  short: string;
  genre: string;
  accent: string; // hex color used for theming
  tagline: string;
  publisher: string;
}

export const GAMES: GameMeta[] = [
  { slug: "valorant", name: "Valorant", short: "VAL", genre: "Tactical FPS", accent: "#ff4655", tagline: "Precision gunplay meets agent utility", publisher: "Riot Games" },
  { slug: "cs2", name: "Counter-Strike 2", short: "CS2", genre: "Tactical FPS", accent: "#f0a42f", tagline: "The definitive competitive shooter", publisher: "Valve" },
  { slug: "league-of-legends", name: "League of Legends", short: "LoL", genre: "MOBA", accent: "#0ac8b9", tagline: "The world's biggest competitive game", publisher: "Riot Games" },
  { slug: "dota-2", name: "Dota 2", short: "DOTA", genre: "MOBA", accent: "#c23c2a", tagline: "Deepest strategy in esports", publisher: "Valve" },
  { slug: "fortnite", name: "Fortnite", short: "FN", genre: "Battle Royale", accent: "#a04dd8", tagline: "Build, edit, outplay", publisher: "Epic Games" },
  { slug: "apex-legends", name: "Apex Legends", short: "APEX", genre: "Battle Royale", accent: "#da292a", tagline: "Movement is a weapon", publisher: "EA / Respawn" },
  { slug: "overwatch-2", name: "Overwatch 2", short: "OW2", genre: "Hero Shooter", accent: "#f06414", tagline: "Teamfights decided by ult economy", publisher: "Blizzard" },
  { slug: "rocket-league", name: "Rocket League", short: "RL", genre: "Sports / Car", accent: "#3f8cff", tagline: "Car soccer at 200 km/h", publisher: "Psyonix / Epic" },
  { slug: "warzone", name: "Call of Duty: Warzone", short: "WZ", genre: "Battle Royale", accent: "#6bb33e", tagline: "Urzikstan's fastest TTK", publisher: "Activision" },
  { slug: "rainbow-six-siege", name: "Rainbow Six Siege", short: "R6", genre: "Tactical FPS", accent: "#e8b31a", tagline: "Destruction is information", publisher: "Ubisoft" },
  { slug: "marvel-rivals", name: "Marvel Rivals", short: "MR", genre: "Hero Shooter", accent: "#fa4454", tagline: "Super-powered 6v6 chaos", publisher: "NetEase / Marvel" },
  { slug: "tekken-8", name: "Tekken 8", short: "TK8", genre: "Fighting", accent: "#ff9f1a", tagline: "3D fighting at its deepest", publisher: "Bandai Namco" },
  { slug: "street-fighter-6", name: "Street Fighter 6", short: "SF6", genre: "Fighting", accent: "#2f7bff", tagline: "Drive Rush changed everything", publisher: "Capcom" },
];

export const GAME_BY_SLUG = new Map(GAMES.map((g) => [g.slug, g]));

export interface CourseTrack {
  game: string;
  slug: string;
  creator: string; // real well-known coach/creator for the game
  focus: string;
  lessons: string[];
  url: string; // youtube search url for the creator's guides
}

export const PRO_FEATURES = [
  "Structured video courses per game — fundamentals to advanced PvP",
  "Weekly VOD-review breakdowns by top coaches",
  "Ranked climb roadmaps: what to drill at every tier",
  "Private GO PRO lounge in every squad room",
  "Early access to new game guides and meta reports",
];

const yt = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

export const COURSES: CourseTrack[] = [
  { game: "Valorant", slug: "valorant", creator: "Woohoojin", focus: "Radiant-level fundamentals, crosshair discipline, deathmatch philosophy", lessons: ["Aim routine that actually transfers", "Peeking fundamentals: jiggle vs wide", "Ranked mindset and VOD review method"], url: yt("woohoojin valorant guide") },
  { game: "Counter-Strike 2", slug: "cs2", creator: "voo", focus: "Movement, spray control and CT/T defaults for every active map", lessons: ["Counter-strafe to clean first bullet", "Utility lineups that win rounds", "Playing advantages: 5v4 and 4v5"], url: yt("voo cs2 movement guide") },
  { game: "League of Legends", slug: "league-of-legends", creator: "Coach Curtis", focus: "Wave management, tempo and jungle tracking for solo queue", lessons: ["The three wave states that decide lane", "Recall timing and losing gracefully", "Mid-game macro when you're fed"], url: yt("coach curtis league guide") },
  { game: "Dota 2", slug: "dota-2", creator: "Purge", focus: "Position-by-position fundamentals and itemization logic", lessons: ["Pull and stack timings", "When to fight vs when to farm", "Reading the draft"], url: yt("purge dota 2 guide") },
  { game: "Fortnite", slug: "fortnite", creator: "itsJerian", focus: "Build/edit speed, piece control and aim-mechanics drills", lessons: ["Edit-course routines", "Piece control fundamentals", "Box-fight retakes"], url: yt("itsjerian fortnite guide") },
  { game: "Apex Legends", slug: "apex-legends", creator: "The Gaming Merchant", focus: "Positioning, rotation timing and legend counters", lessons: ["Ring rotations that survive endgame", "Playing off your team's legend comp", "Beaming: recoil patterns"], url: yt("apex legends positioning guide merchant") },
  { game: "Overwatch 2", slug: "overwatch-2", creator: "Awkward", focus: "Unranked-to-GM fundamentals per role", lessons: ["Tank space and ult economy", "Support positioning under dive", "DPS target priority"], url: yt("awkward overwatch 2 guide") },
  { game: "Rocket League", slug: "rocket-league", creator: "Wayton Pilkin", focus: "Mechanics ladder: speedflip, aerial control, half-flips", lessons: ["Speedflip consistency routine", "Aerial car control drills", "Rotation discipline in 3s"], url: yt("wayton pilkin rocket league guide") },
  { game: "Rainbow Six Siege", slug: "rainbow-six-siege", creator: "Kaosx", focus: "Entry mechanics, drones and ranked map knowledge", lessons: ["Clearing angles solo", "Default drones that deny info", "Site setup priorities"], url: yt("kaosx siege guide") },
  { game: "Tekken 8", slug: "tekken-8", creator: "Fergus", focus: "Fundamentals, punishment and Heat system mastery", lessons: ["Movement and KBD", "Punishing the top 15 moves", "Heat vs chip: when to spend"], url: yt("fergus tekken 8 guide") },
  { game: "Street Fighter 6", slug: "street-fighter-6", creator: "Diaphone", focus: "Drive system, footsies and matchup planning", lessons: ["Drive Rush confirms", "Anti-air consistency", "Burnout management"], url: yt("diaphone street fighter 6 guide") },
  { game: "GTA Online", slug: "gta-online", creator: "Tylarious", focus: "Money grind routes, heist speedruns and free-mode PvP", lessons: ["Cayo Perico solo elite runs", "Freemode counter-griefing", "Best solo businesses to buy first"], url: yt("tylarious gta online guide") },
  { game: "Forza Horizon 5", slug: "forza-horizon-5", creator: "HokiHoshi", focus: "Racing lines, tuning basics and rivals ladder technique", lessons: ["Trail braking into corners", "Tuning for S1-class rivals", "Drivatar-free pace"], url: yt("hokihoshi forza horizon 5 tune guide") },
  { game: "Minecraft", slug: "minecraft", creator: "Couriway", focus: "Speedrun strategy, bastion/fortress routes and PvP kits", lessons: ["1.16 RSG route overview", "Bastion routing and piglin trades", "Crystal/sword PvP basics"], url: yt("couriway minecraft speedrun guide") },
  { game: "Destiny 2", slug: "destiny-2", creator: "Datto", focus: "Buildcrafting, raid mechanics and Crucible fundamentals", lessons: ["Reading a raid before day one", "Crucible positioning & team shooting", "Endgame build archetypes"], url: yt("datto destiny 2 guide") },
  { game: "Diablo IV", slug: "diablo-4", creator: "wudijo", focus: "Endgame builds, pit pushing and seasonal racing", lessons: ["Leveling route for season start", "Build scaling: where damage comes from", "Pit push technique"], url: yt("wudijo diablo 4 guide") },
  { game: "Rust", slug: "rust", creator: "posty", focus: "Wipe-day plan, base meta and PvP aim/movement", lessons: ["First-hour wipe routine", "Compound vs honeycomb: base choices", "Roof-camping and countering it"], url: yt("rust pvp guide posty") },
  { game: "Elden Ring", slug: "elden-ring", creator: "distortion2", focus: "Boss punish windows, route knowledge and RL1-style discipline", lessons: ["Poise and stance-break math", "Boss punish windows", "Leveling route for a first clear"], url: yt("elden ring boss guide distortion2") },
  { game: "Baldur's Gate 3", slug: "baldurs-gate-3", creator: "Mortismal Gaming", focus: "Tactician/Honour builds, action economy and party comps", lessons: ["Honour-mode run planning", "Action economy: bonus actions that win fights", "Party comp synergies"], url: yt("mortismal baldurs gate 3 guide") },
  { game: "Roblox", slug: "roblox", creator: "Community guides", focus: "Top Roblox competitive games (Blox Fruits, BedWars, Arsenal)", lessons: ["Blox Fruits grinding routes", "BedWars bridging and PvP", "Arsenal aim drills"], url: yt("roblox pvp guide") },
  { game: "Call of Duty: Warzone", slug: "warzone", creator: "IceManIsaac", focus: "Meta builds, rotations and win-rate fundamentals", lessons: ["Current meta loadouts", "Rotation & positioning in final circles", "Gulag and buy-back discipline"], url: yt("icemanisaac warzone guide") },
  { game: "Marvel Rivals", slug: "marvel-rivals", creator: "Community coaches", focus: "Hero matchups, team comps and ult combos", lessons: ["Counter-picking by comp", "Ult tracking and combos", "Dive vs brawl positioning"], url: yt("marvel rivals guide") },
  { game: "Valheim", slug: "valheim", creator: "Community guides", focus: "Boss prep, biome progression and building", lessons: ["Boss prep checklists", "Progression route per biome", "Efficient base builds"], url: yt("valheim progression guide") },
];

export interface CoachingOffer {
  name: string;
  price: string;
  desc: string;
}

export const COACHING: CoachingOffer[] = [
  { name: "VOD review session", price: "$19", desc: "Submit a ranked VOD — a coach breaks down your decision-making timestamp by timestamp." },
  { name: "Live coaching hour", price: "$39", desc: "1:1 session: live ranked analysis, drills assigned to your exact weak spots." },
  { name: "Ranked climb program", price: "$99/mo", desc: "Weekly sessions + a personalized drill plan until you hit your target rank." },
];

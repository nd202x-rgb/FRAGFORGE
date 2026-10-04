import { GAMES, GAME_BY_SLUG } from "./games";
import { GEAR } from "@/content/gear";
import { EMULATORS } from "@/content/emulators";
import { loadGameContent, type GameContent, type Technique } from "./content";

export interface AssistantLink {
  label: string;
  href: string;
}

export interface AssistantReply {
  reply: string;
  links: AssistantLink[];
}

const ALIASES: Record<string, string> = {
  val: "valorant",
  cs: "cs2", csgo: "cs2", counterstrike: "cs2", strike: "cs2", "counter-strike": "cs2",
  lol: "league-of-legends", league: "league-of-legends",
  dota: "dota-2", dota2: "dota-2",
  fn: "fortnite",
  apex: "apex-legends",
  ow: "overwatch-2", ow2: "overwatch-2", overwatch: "overwatch-2",
  rl: "rocket-league", rocketleague: "rocket-league",
  cod: "warzone", wz: "warzone",
  r6: "rainbow-six-siege", siege: "rainbow-six-siege", rainbow: "rainbow-six-siege",
  rivals: "marvel-rivals", marvel: "marvel-rivals",
  tekken: "tekken-8", tekken8: "tekken-8",
  sf6: "street-fighter-6", streetfighter: "street-fighter-6", "street-fighter": "street-fighter-6",
  gta: "gta-online", gta5: "gta-online", gtao: "gta-online",
  forza: "forza-horizon-5", fh5: "forza-horizon-5", horizon: "forza-horizon-5",
  mc: "minecraft",
  elden: "elden-ring", eldenring: "elden-ring",
  diablo: "diablo-4", d4: "diablo-4",
  destiny: "destiny-2",
  bg3: "baldurs-gate-3", baldurs: "baldurs-gate-3", baldursgate: "baldurs-gate-3",
  // iconic characters → their game
  jett: "valorant", reyna: "valorant", sage: "valorant", omen: "valorant",
  yoru: "valorant", killjoy: "valorant", raze: "valorant", sova: "valorant",
  phoenix: "valorant", chamber: "valorant", deadlock: "valorant", clove: "valorant",
  genji: "overwatch-2", tracer: "overwatch-2", reinhardt: "overwatch-2",
  mercy: "overwatch-2", kiriko: "overwatch-2", widow: "overwatch-2", ana: "overwatch-2",
  yasuo: "league-of-legends", ahri: "league-of-legends", zed: "league-of-legends",
  jinx: "league-of-legends", teemo: "league-of-legends", darius: "league-of-legends",
  wraith: "apex-legends", pathfinder: "apex-legends", octane: "apex-legends",
  bloodhound: "apex-legends", horizon2: "apex-legends", fuse: "apex-legends",
  kazuya: "tekken-8", jin: "tekken-8", paul: "tekken-8", king: "tekken-8",
  law: "tekken-8", lili: "tekken-8", reina: "tekken-8", victor: "tekken-8",
  ryu: "street-fighter-6", ken: "street-fighter-6", chun: "street-fighter-6",
  blanka: "street-fighter-6", akuma: "street-fighter-6", cammy: "street-fighter-6",
  ghost: "warzone", price: "warzone", soap: "warzone",
  sledge: "rainbow-six-siege", ash: "rainbow-six-siege", thermite: "rainbow-six-siege",
  jager: "rainbow-six-siege", bandit: "rainbow-six-siege", smoke: "rainbow-six-siege",
  thanos: "marvel-rivals", magneto: "marvel-rivals", venom: "marvel-rivals",
  ironman: "marvel-rivals", spiderman: "marvel-rivals", hela: "marvel-rivals",
};

const NAME_TOKEN_SKIP = new Set(["counter", "online", "street", "world"]);

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "do", "does", "how", "to", "in", "on", "of", "for",
  "and", "or", "what", "which", "can", "i", "my", "me", "you", "your", "it", "this",
  "that", "be", "best", "should", "would", "could", "get", "with", "at", "from",
  "tell", "show", "give", "about", "any", "some", "please", "want", "need", "use",
  "using", "good", "improve", "better", "learn", "help", "game", "games", "play",
  "playing", "player", "when", "where", "why", "am", "was", "were", "there", "here",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

function detectGames(query: string): string[] {
  const norm = query.toLowerCase();
  const tokens = new Set(tokenize(query));
  const phraseHits = new Set<string>();
  const tokenHits = new Set<string>();
  const aliasHits = new Set<string>();
  for (const g of GAMES) {
    if (norm.includes(g.slug) || norm.includes(g.name.toLowerCase())) {
      phraseHits.add(g.slug);
      continue;
    }
    for (const t of g.name.toLowerCase().split(/[\s:.-]+/)) {
      // "counter" (Counter-Strike) / "online" (GTA Online) are everyday words —
      // let the full-name phrase or an alias match those games instead
      if (t.length > 3 && tokens.has(t) && !NAME_TOKEN_SKIP.has(t)) {
        tokenHits.add(g.slug);
        break;
      }
    }
  }
  for (const [alias, slug] of Object.entries(ALIASES)) {
    if (tokens.has(alias)) aliasHits.add(slug);
  }
  // full-name/slug phrase hits > name-token hits > alias hits
  // ("rocket league" beats the shared token "league"→LoL)
  const ordered = [
    ...phraseHits,
    ...[...tokenHits].filter((s) => !phraseHits.has(s)),
    ...[...aliasHits].filter((s) => !phraseHits.has(s) && !tokenHits.has(s)),
  ];
  return ordered.filter((s) => GAME_BY_SLUG.has(s));
}

const contentCache = new Map<string, GameContent | null>();
async function contentOf(slug: string): Promise<GameContent | null> {
  if (!contentCache.has(slug)) {
    contentCache.set(slug, await loadGameContent(slug));
  }
  return contentCache.get(slug) ?? null;
}

// prefix match handles suffixes: "frag" ~ "fragging", "peek" ~ "peeking"
function tokHit(word: string, tokens: Set<string>): boolean {
  if (tokens.has(word)) return true;
  if (word.length >= 4) {
    for (const t of tokens) {
      if (t.length >= 4 && (word.startsWith(t) || t.startsWith(word))) return true;
    }
  }
  return false;
}

function scoreTechnique(t: Technique, tokens: Set<string>): number {
  let score = 0;
  for (const w of tokenize(t.name)) if (tokHit(w, tokens)) score += 4;
  for (const w of tokenize(t.category)) if (tokHit(w, tokens)) score += 2;
  for (const w of tokenize(t.summary)) if (tokHit(w, tokens)) score += 1;
  for (const w of tokenize(t.proTip)) if (tokHit(w, tokens)) score += 0.5;
  return score;
}

function formatTechnique(t: Technique, gameName: string): string {
  const steps = t.steps.slice(0, 3).map((s, i) => `${i + 1}. ${s}`).join("\n");
  return `**${t.name}** (${gameName} — ${t.category}, difficulty ${t.difficulty}/5)\n${t.summary}\n\n${steps}\n\nPro tip: ${t.proTip}`;
}

const gameLink = (slug: string): AssistantLink => {
  const g = GAME_BY_SLUG.get(slug)!;
  return { label: `${g.name} guide`, href: `/games/${slug}` };
};

export async function answerQuery(rawQuery: string): Promise<AssistantReply> {
  const q = rawQuery.trim();
  const tokens = new Set(tokenize(q));
  const games = detectGames(q);

  const hasAny = (...words: string[]) => words.some((w) => tokens.has(w));
  const phrase = (p: string) => q.toLowerCase().includes(p);

  // ---- greeting ----
  if (/^(hi|hey|hello|yo|sup|hola|wassup|help)[\s!.]*$/i.test(q)) {
    return {
      reply:
        "Hey! I'm FORGE AI — your coach for all 23 games on FragForge. Ask me things like:\n\n• “How do I counter-strafe in Valorant?”\n• “Best budget gaming mouse?”\n• “Can my PC run Elden Ring?”\n• “Tekken punishment drills”\n• “Find me teammates for Apex”",
      links: [
        { label: "All games", href: "/games" },
        { label: "Gear picks", href: "/gear" },
        { label: "Squad rooms", href: "/squads" },
      ],
    };
  }

  // ---- emulators ----
  if (hasAny("emulator", "emulate", "emulation", "rom", "roms", "retro", "dolphin", "pcsx2", "rpcs3", "ppsspp", "cemu", "xenia", "xemu", "gba", "gamecube", "wii", "ps2", "ps3", "psp", "3ds", "nintendo")) {
    const hits = EMULATORS.filter(
      (e) =>
        tokens.size === 0 ||
        tokenize(`${e.name} ${e.systems} ${e.platform}`).some((w) => tokens.has(w)),
    ).slice(0, 3);
    const list = (hits.length ? hits : EMULATORS.slice(0, 4))
      .map((e) => `**${e.name}** — ${e.systems} (${e.platform}) — ${e.notes}`)
      .join("\n\n");
    return {
      reply: `Emulator corner — we only link legal emulators (dump your own games):\n\n${list}`,
      links: [{ label: "All emulators", href: "/emulators" }],
    };
  }

  // ---- game list ----
  if (phrase("what games") || phrase("which games") || phrase("games do you") || phrase("games you cover") || phrase("list of games")) {
    const names = GAMES.map((g) => g.name).join(", ");
    return {
      reply: `We cover ${GAMES.length} games:\n\n${names}\n\nEvery guide has pro techniques, PvP advice, drills, real pro settings and PC requirements.`,
      links: [{ label: "Browse all games", href: "/games" }],
    };
  }

  // ---- specs / requirements (before gear: "can my pc run X" is a specs question) ----
  if (hasAny("requirements", "specs", "spec", "minimum", "recommended", "fps", "run", "runs") || phrase("can i run") || phrase("can my pc") || phrase("how many fps")) {
    if (games.length) {
      const g = GAME_BY_SLUG.get(games[0])!;
      return {
        reply: `**${g.name} PC requirements:**\n\nMinimum: ${g.specs.min}\n\nRecommended for best performance: ${g.specs.recommended}\n\nIf your build is below minimum, check our budget PC builds.`,
        links: [gameLink(g.slug), { label: "PC builds & laptops", href: "/gear" }],
      };
    }
    return {
      reply:
        "Tell me which game — e.g. “Can my PC run Elden Ring?” Every guide page lists minimum and best-performance specs. Or ask “best PC build under $1200”.",
      links: [{ label: "All games", href: "/games" }, { label: "PC builds", href: "/gear" }],
    };
  }

  // ---- gear ----
  const gearWords = hasAny(
    "mouse", "mice", "keyboard", "monitor", "headset", "headphones", "earphone", "iem",
    "gpu", "cpu", "graphics", "card", "ram", "ssd", "pc", "build", "rig", "laptop",
    "mousepad", "pad", "controller", "gear", "equipment", "setup", "buy", "price",
    "amazon", "aliexpress", "daraz", "alibaba", "cheap", "budget", "affordable",
  );
  if (gearWords) {
    const wantBudget = hasAny("cheap", "budget", "affordable", "low");
    const catKeyword: Record<string, string[]> = {
      mice: ["mouse", "mice"],
      keyboards: ["keyboard", "keyboards"],
      monitors: ["monitor", "monitors", "display", "screen"],
      audio: ["headset", "headphones", "audio", "iem", "earphone", "earphones"],
      builds: ["build", "builds", "rig", "pc"],
      laptops: ["laptop", "laptops", "notebook"],
      pc: ["gpu", "cpu", "graphics", "card", "ram", "ssd", "parts", "upgrade"],
      pads: ["mousepad", "mousepads", "pad", "pads", "mat"],
    };
    let wantedCat: string | null = null;
    for (const [id, kws] of Object.entries(catKeyword)) {
      if (kws.some((w) => tokens.has(w))) {
        wantedCat = id;
        break;
      }
    }
    const items = GEAR.flatMap((c) =>
      c.items
        .filter(() => !wantedCat || c.id === wantedCat)
        .filter((it) => (wantBudget ? it.tier === "budget" : true))
        .map((it) => ({ it, cat: c.title })),
    );
    const scored = items
      .map(({ it, cat }) => ({
        it, cat,
        score: tokenize(`${it.name} ${it.why}`).filter((w) => tokens.has(w)).length
          + (wantBudget && it.tier === "budget" ? 5 : 0)
          + (hasAny("pro", "recommend") && it.tier === "pro" ? 3 : 0),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    if (scored.length) {
      const list = scored
        .map(({ it, cat }) => `**${it.name}** — ${it.price} (${cat}, ${it.tier} tier)\n${it.why}`)
        .join("\n\n");
      return {
        reply: `Here's what I'd put in your setup${wantBudget ? " (budget picks)" : ""} — every item links out to Amazon, AliExpress, Daraz and Alibaba:\n\n${list}`,
        links: [{ label: "Full gear guide", href: "/gear" }],
      };
    }
  }

  // ---- squad / teammates / chat ----
  if (hasAny("squad", "teammate", "teammates", "team", "lfg", "lobby", "friends", "voice", "video", "call", "party", "duo", "stack") || phrase("people to play") || phrase("find players")) {
    if (games.length) {
      const g = GAME_BY_SLUG.get(games[0])!;
      return {
        reply: `Head to the **${g.name} squad room** — there's live lobby chat plus a free voice & video room (Jitsi, no install). You can also click any player's name in chat to DM them privately.`,
        links: [
          { label: `${g.name} squad room`, href: `/squads/${g.slug}` },
          { label: "Global Lounge", href: "/squads/lounge" },
        ],
      };
    }
    return {
      reply:
        "Every game has its own **squad room** with text chat + a free voice/video lobby, and there's a Global Lounge for everyone. Click a player's name anywhere in chat to private-message them.",
      links: [
        { label: "Browse squad rooms", href: "/squads" },
        { label: "Private messages", href: "/messages" },
      ],
    };
  }

  // ---- discord ----
  if (hasAny("discord", "server", "community")) {
    if (games.length) {
      const g = GAME_BY_SLUG.get(games[0])!;
      return {
        reply: `Join the official ${g.name} Discord: ${g.discord}\n\nYou can also link your Discord tag on the Connect page so FragForge players can find you.`,
        links: [
          { label: `${g.name} page`, href: `/games/${g.slug}` },
          { label: "Connect accounts", href: "/connect" },
        ],
      };
    }
    return {
      reply:
        "Every game page has a **Join Discord** button to that game's official/community server. Link your own Discord tag under Connect so other players can reach you.",
      links: [
        { label: "All games", href: "/games" },
        { label: "Connect accounts", href: "/connect" },
      ],
    };
  }

  // ---- GO PRO (not when asking for a game's pro settings/techniques) ----
  const gameIntent = hasAny("settings", "sens", "sensitivity", "dpi", "crosshair", "config", "drill", "drills", "technique", "techniques", "meta", "pvp", "mistake", "mistakes", "counter");
  if (
    (hasAny("premium", "subscription", "subscribe", "price", "cost", "pay", "upgrade", "coaching", "course", "courses", "tutorial", "tutorials") || phrase("go pro") || (tokens.has("pro") && !gameIntent))
    && !(games.length > 0 && gameIntent)
  ) {
    return {
      reply:
        "**GO PRO** is $9/month and unlocks per-game video courses built on real coaches and pros (Woohoojin for Valorant, Coach Curtis for LoL, Wayton Pilkin for Rocket League…) plus 1:1 coaching offers. You subscribe through Stripe and your account shows a gold PRO badge.",
      links: [{ label: "GO PRO", href: "/gopro" }],
    };
  }

  // ---- account / profile ----
  if (hasAny("profile", "avatar", "pfp", "bio", "account", "password", "picture", "customize")) {
    return {
      reply:
        "On your **profile page** you can upload a profile picture, write a bio, and manage your linked game accounts. Your avatar shows up in squad chat and private messages.",
      links: [
        { label: "My profile", href: "/profile" },
        { label: "Connect accounts", href: "/connect" },
      ],
    };
  }

  // ---- private messages ----
  if (hasAny("dm", "dms", "private", "message", "messages", "pm", "whisper")) {
    return {
      reply:
        "Go to **Messages** for private 1:1 chats — search any username to start one, or click a player's name in any squad room. Unread counts show in your inbox.",
      links: [{ label: "Open messages", href: "/messages" }],
    };
  }

  // ---- auth / navigation ----
  if (hasAny("signin", "signup", "sign", "login", "register", "logout", "password")) {
    return {
      reply:
        "Use **Sign in** if you already have an account, or **Join free** to register — it takes 10 seconds and unlocks every guide, squad room, DM and me.",
      links: [
        { label: "Sign in", href: "/login" },
        { label: "Create account", href: "/register" },
      ],
    };
  }

  // ---- which games ----
  if (hasAny("list", "supported", "all", "what") && (hasAny("game", "games") || phrase("what games"))) {
    const names = GAMES.map((g) => g.name).join(", ");
    return {
      reply: `We cover ${GAMES.length} games:\n\n${names}\n\nEvery guide has pro techniques, PvP advice, drills, real pro settings and PC requirements.`,
      links: [{ label: "Browse all games", href: "/games" }],
    };
  }

  // ---- game-specific content ----
  const slugPool = games.length ? games : GAMES.map((g) => g.slug);
  const candidates: { t: Technique; score: number; slug: string }[] = [];
  for (const slug of slugPool) {
    const c = await contentOf(slug);
    if (!c) continue;
    for (const t of c.techniques) {
      const s = scoreTechnique(t, tokens);
      if (s > 0) candidates.push({ t, score: s, slug });
    }
    if (games.length && slugPool.length === 1) break;
  }
  candidates.sort((a, b) => b.score - a.score);

  const wantDrill = hasAny("drill", "drills", "practice", "warmup", "warm", "routine", "aim", "train", "training");
  const wantSettings = hasAny("sens", "sensitivity", "settings", "dpi", "crosshair", "config", "setup") && !gearWords;
  const wantMistakes = hasAny("mistake", "mistakes", "stuck", "tilt", "elo", "climb", "rank", "ranked", "losing", "lose");
  const wantMeta = hasAny("meta", "patch", "tier", "strong", "op", "broken", "nerf", "buff");
  const wantPvp = hasAny("pvp", "counter", "beat", "against", "versus", "vs", "deal");

  const primary = games.length ? await contentOf(games[0]) : null;
  const gName = games.length ? GAME_BY_SLUG.get(games[0])!.name : "";

  if (wantPvp && primary) {
    const counters = primary.pvp.counterPlay.slice(0, 4).map((c) => `• ${c}`).join("\n");
    return {
      reply: `Beating the meta in ${gName}:\n\n${counters}`,
      links: [gameLink(games[0])],
    };
  }
  if (wantDrill && primary) {
    const drills = primary.drills
      .map((d) => `**${d.name}** (${d.duration}) — ${d.how} → ${d.goal}`)
      .slice(0, 3)
      .join("\n\n");
    return {
      reply: `${gName} practice drills straight from our guide:\n\n${drills}`,
      links: [gameLink(games[0])],
    };
  }
  if (wantSettings && primary) {
    const pros = primary.proSettings
      .map((p) => `**${p.player}** (${p.team}) — ${p.notes}`)
      .slice(0, 3)
      .join("\n\n");
    return {
      reply: `Pro settings & playstyles to copy for ${gName}:\n\n${pros}\n\nFull guide has the complete list.`,
      links: [gameLink(games[0])],
    };
  }
  if (wantMistakes && primary) {
    const errs = primary.commonMistakes.slice(0, 4).map((m) => `• ${m}`).join("\n");
    return {
      reply: `The mistakes that keep ${gName} players stuck:\n\n${errs}\n\n${primary.pvp.intro}`,
      links: [gameLink(games[0])],
    };
  }
  if (wantMeta && primary) {
    return {
      reply: `Current ${gName} meta: ${primary.metaNote}\n\n${primary.pvp.intro}`,
      links: [gameLink(games[0])],
    };
  }
  // ---- counter-play without a game needs the game named ----
  if (wantPvp && !games.length && !(candidates.length && candidates[0].score >= 5)) {
    return {
      reply:
        "Counter-play depends entirely on the game — tell me which one, e.g. “how do I counter a Jett in Valorant” or “how to beat rushers in CS2”, and I'll give you the matchup advice.",
      links: [{ label: "All games", href: "/games" }],
    };
  }

  // ---- technique search (beats generic PvP when a named technique matches) ----
  if (candidates.length && candidates[0].score >= 3) {
    const top = candidates.slice(0, 2);
    const body = top
      .map(({ t, slug }) => formatTechnique(t, GAME_BY_SLUG.get(slug)!.name))
      .join("\n\n---\n\n");
    return {
      reply: body,
      links: top.map(({ slug }) => gameLink(slug)),
    };
  }

  // ---- generic game question ----
  if (games.length && primary) {
    const g = GAME_BY_SLUG.get(games[0])!;
    const pillars = primary.skillPillars.slice(0, 5).map((p) => `• ${p}`).join("\n");
    return {
      reply: `**${g.name}** — ${primary.overview}\n\nThe skills that decide your rank:\n${pillars}\n\nAsk me for a specific technique (“how do I entry frag”), drills, pro settings or requirements.`,
      links: [gameLink(g.slug), { label: `${g.name} squad room`, href: `/squads/${g.slug}` }],
    };
  }

  // ---- fallback ----
  return {
    reply:
      "I'm strongest at game-specific questions. Try:\n\n• “How do I jiggle peek in CS2?”\n• “Rocket League training drills”\n• “Elden Ring PC requirements”\n• “Best budget keyboard”\n• “Find teammates for Warzone”\n• “What does GO PRO include?”",
    links: [
      { label: "All games", href: "/games" },
      { label: "Gear", href: "/gear" },
      { label: "Squads", href: "/squads" },
    ],
  };
}

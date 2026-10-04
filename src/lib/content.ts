// Content contract every src/content/games/<slug>.ts module must satisfy.
// Each module exports a `default` GameContent. Files are loaded via
// webpack/turbopack context import — there is intentionally NO index.ts
// so parallel agents can add game modules without merge conflicts.

export type Difficulty = 1 | 2 | 3 | 4 | 5;

export interface Technique {
  name: string;
  /** e.g. "Aim", "Movement", "Utility", "Economy", "Mental", "Macro" */
  category: string;
  difficulty: Difficulty;
  summary: string; // 1-2 sentences, what it is and why it wins fights
  steps: string[]; // 3-6 concrete, ordered steps to execute it
  proTip: string; // one sentence — how pros abuse/refine it
}

export interface PvPMode {
  mode: string; // e.g. "Ranked solo queue", "Arena 3v3"
  advice: string[]; // 3-6 bullets specific to that mode
}

export interface PvPSection {
  intro: string; // how PvP works in this game, what separates ranks
  modes: PvPMode[];
  counterPlay: string[]; // how to beat common strategies/metas
}

export interface Drill {
  name: string;
  duration: string; // e.g. "10 min"
  how: string; // what to do — concrete and game-specific
  goal: string; // what improvement to look for
}

export interface ProSetting {
  player: string; // real pro player name
  team: string; // real team/org
  notes: string; // what to copy from their setup/playstyle
}

export interface GameContent {
  slug: string; // must match filename and lib/games.ts slug
  overview: string; // 2-3 sentences on the game + its competitive scene
  skillPillars: string[]; // 4-6 core skills that decide rank
  techniques: Technique[]; // 8-12 entries, all real and game-specific
  pvp: PvPSection;
  drills: Drill[]; // 4-6 practice routines
  proSettings: ProSetting[]; // 3-5 real pros
  commonMistakes: string[]; // 4-6 errors ranked players make
  metaNote: string; // 1-2 sentences on the current meta
}

export async function loadGameContent(slug: string): Promise<GameContent | null> {
  try {
    const mod = await import(`@/content/games/${slug}`);
    return (mod.default ?? mod) as GameContent;
  } catch {
    return null;
  }
}

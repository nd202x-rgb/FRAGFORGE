import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "diablo-4",
  overview:
    "Diablo IV is an isometric ARPG where endgame power comes from stacking multiplicative bonuses across gear, Paragon, and skill synergies — not from raw reaction speed. Its competitive scene lives on The Pit leaderboards, Tormented boss kill times, and seasonal Hardcore ladders rather than arenas. Ranked-equivalent progress is decided by how well you convert farming hours into the right [x] multipliers and capped defenses.",
  skillPillars: [
    "Build synergy",
    "Damage bucketing",
    "Cooldown rotation",
    "Defensive layering",
    "Farming efficiency",
    "Gear tempering",
  ],
  techniques: [
    {
      name: "Builder-spender rotation weaving",
      category: "Combat",
      difficulty: 3,
      summary:
        "Spamming your spender starves resources and desyncs your cooldowns — a real rotation alternates generator, spender, and buffs on a fixed rhythm.",
      steps: [
        "Identify your builder (generator) and spender — every meta build has both.",
        "Open every pack with your debuff or buff skill, THEN spender, THEN builder to refill.",
        "Weave the spender the instant resources allow — never let the bar sit full while cooldowns tick.",
        "Hold your major cooldowns (ultimates, buffs) for elite packs and boss phases, not trash.",
      ],
      proTip: "Top clears weave on cooldown timers, not feel — practice the loop until your buff uptime is near 100% before you touch higher Torment.",
    },
    {
      name: "Elite hunting and pack dragging",
      category: "Combat",
      difficulty: 2,
      summary:
        "Trash mobs are worth little — drag them into elite packs and kill the aura-granting elite first so the whole pull dies faster.",
      steps: [
        "Sprint past small trash groups to the next elite pack instead of full-clearing.",
        "Herd everything into one clump around the elite with a brief body-pull.",
        "Kill the elite carrying Suppressor, Shielding, or Vampiric affix FIRST — it buffs everything around it.",
        "Loot splashes during the fight; standing around afterwards is where deaths happen.",
      ],
      proTip: "Pit leaders clear 10+ minutes by ignoring 80% of the map — density management, not kill speed, is the real cap.",
    },
    {
      name: "Evade and mobility discipline",
      category: "Movement",
      difficulty: 3,
      summary:
        "Your evade and mobility skills are your second life — burning both on offense leaves you dead in the next telegraphed slam.",
      steps: [
        "Track your evade charges; never enter an elite pull with zero.",
        "Save one mobility skill (Teleport, Dash, Leap, Blood Mist) for escapes, not damage.",
        "Evade INTO packs when engaging, evade OUT when a wind-up starts — direction matters.",
        "After a big dodge, reposition diagonally, not straight back, so you stay in range to punish.",
      ],
      proTip: "Hardcore players treat mobility cooldowns like HP — they'd rather lose 5 seconds of DPS than be caught one charge short on a boss slam.",
    },
    {
      name: "Stagger burst windows",
      category: "Combat",
      difficulty: 4,
      summary:
        "Bosses take massively increased damage while Staggered — build CC during the bar, then dump everything when it breaks.",
      steps: [
        "Watch the blue stagger bar under boss HP — it fills from any CC, slow, or freeze effect.",
        "Weave in your CC skills even if they do low damage; their real job is filling that bar.",
        "When stagger triggers, dump EVERY cooldown, spender, and potion-buffed burst into the window.",
        "Between staggers, farm resources and cooldowns — don't waste bursts on a full-HP bar.",
      ],
      proTip: "Tormented boss speedruns are stagger-optimized, not DPS-optimized — a well-timed stagger kill beats a sloppy 30-second burn by minutes.",
    },
    {
      name: "Multiplicative damage bucketing",
      category: "Buildcraft",
      difficulty: 4,
      summary:
        "Damage bonuses marked [x] multiply; everything else adds into a shared pool — chasing additive stats once you're at cap is throwing away power.",
      steps: [
        "Read your character sheet for the [x] tags — those are true multipliers, everything else is additive.",
        "Cap your additive sources (attack power, main stat) on gear, then hunt [x] on tempering, glyphs, and aspects.",
        "Prioritize bonuses that scale your build's core interaction (e.g., crit damage, vulnerable, overpower as your build uses them).",
        "Check Maxroll or Icy Veins for which [x] actually multiplies — the UI lies by omission constantly.",
      ],
      proTip: "One more [x] multiplier can outdamage a dozen additive upgrades — the gap between T1 and T4 Torment clears is almost always one missing multiplier.",
    },
    {
      name: "Vulnerable and crit uptime",
      category: "Buildcraft",
      difficulty: 3,
      summary:
        "Vulnerable and Critical Strike are the two biggest multipliers in the game — if they're not on the enemy or you most of the time, half your damage evaporates.",
      steps: [
        "Check your skills for a vulnerable applier — it should be part of your rotation opener.",
        "Stack crit chance on gear and Paragon until you're near the effective cap for your build.",
        "Keep the vulnerable debuff ticking on the target; letting it fall off is losing 20-30% damage.",
        "On bosses, reapply vulnerable on every phase transition — the window is free damage.",
      ],
      proTip: "Build guides pick skills you think are filler specifically to keep vulnerable at 100% — don't cut them before you understand why they're there.",
    },
    {
      name: "Paragon glyph pathing",
      category: "Macro",
      difficulty: 4,
      summary:
        "The Paragon board is where builds are actually made — route to glyph sockets and legendary nodes that multiply your core damage, not every shiny stat.",
      steps: [
        "Plan your board path on a planner (d4builds, Maxroll) BEFORE spending points.",
        "Prioritize glyph sockets for glyphs that match your damage type — a legendary glyph with the wrong stat is wasted points.",
        "Level your glyphs by clearing The Pit — glyph XP only comes from Pit completions.",
        "Take magic nodes only if they sit on your route to a glyph or legendary — don't detour for +2%.",
      ],
      proTip: "Players swap glyphs per content type — Pit pushing swaps in pure-damage glyphs; Hardcore swaps in DR glyphs. Have 2-3 socketed boards, not one.",
    },
    {
      name: "Helltide and Infernal Hordes density routing",
      category: "Farming",
      difficulty: 2,
      summary:
        "Farming efficiency is a routes problem — knowing where the densest packs and biggest reward chests sit turns a 20-minute farm into a 8-minute one.",
      steps: [
        "In Helltide, follow the marked zones and kill ONLY inside them — outside zones spawn nothing.",
        "Farm cinders to the 250-cinder chest first, then the cheaper ones; big chests are the actual reward.",
        "In Infernal Hordes, pick the waves that spawn Aether fiends and elites; they're the currency pinatas.",
        "Clear your inventory between runs — a full bag means you stopped mid-route to sort, which is a farm killer.",
      ],
      proTip: "Leaderboard farmers track cinders-per-minute, not total haul — if a route dips below ~15/min, rotate zones immediately.",
    },
    {
      name: "Pit pushing discipline",
      category: "Endgame",
      difficulty: 5,
      summary:
        "The Pit is a timed endurance gauntlet — one death, one bad pull, or one slow boss and the push-tier run is over.",
      steps: [
        "Push 2-3 tiers below your max until the route feels automatic, then move up one tier at a time.",
        "Enter with full potions, incense, and elixirs — the consumable buffs are non-negotiable at push tiers.",
        "Fight elites in open ground where you can kite; don't pull into dead ends.",
        "Never die — a death respawns you far away and eats clock time you can't recover.",
        "On the boss, save everything for the stagger window; between staggers, play defensive.",
      ],
      proTip: "Pit leaderboard players reset a run the moment the first pull goes wrong — the difference between rank 50 and rank 5 is knowing when to bail early.",
    },
    {
      name: "Tempering and Masterworking resets",
      category: "Gear",
      difficulty: 3,
      summary:
        "Tempering bricks items if you misclick, and Masterworking is all about the rank-4/8/12 crits — discipline separates a great item from a vendor legendary.",
      steps: [
        "Temper only the correct category for your build (offensive tempers on weapons, defensive on armor).",
        "Accept that temper attempts are limited — if you brick a near-BiS, hold it as a backup, not as your main.",
        "Masterwork to 12 when the item is your best; the 4/8/12 crits land on random affixes.",
        "Reset and redo masterworking until the crits land on your key damage affixes — it costs materials, not sanity.",
      ],
      proTip: "Triple-crit masterworking on the right affix is the single biggest gear power spike in the game — grinders spend hours on it, not because it's fun, but because it works.",
    },
    {
      name: "Boss rota farming",
      category: "Farming",
      difficulty: 2,
      summary:
        "Tormented and lair bosses are the fastest path to mythics and high-end aspects — summon them on rotation with your materials instead of farming one.",
      steps: [
        "Save boss-summon materials (Shards of Agony, Living Steel, etc.) — don't burn them on low-tier kills.",
        "Run rotations: summon a boss, loot, then move to the next one in your list.",
        "Party up when possible — each member's materials multiply the loot everyone gets.",
        "Check which boss drops your target mythic or aspect before you commit materials.",
      ],
      proTip: "The farm that matters most is the boss rotation you can sustain — 20 minutes of boss rotas beats two hours of random dungeon clears for gear.",
    },
    {
      name: "Hardcore escape discipline",
      category: "Survivability",
      difficulty: 3,
      summary:
        "Hardcore is a different game — every pull needs an escape plan, every build needs a cheat-death layer, and greed is the number one killer.",
      steps: [
        "Bind your Scroll of Escape to a key you can hit instantly — treat it as a panic button, not a last resort.",
        "Build at least two defensive layers: armor cap, resist cap, damage reduction, plus a cheat-death aspect or effect.",
        "If a boss pulls you into a bad phase or a pack overwhelms you, scroll out IMMEDIATELY — don't gamble.",
        "Farm a tier lower than your softcore power level; the safety margin is the strategy.",
      ],
      proTip: "wudijo's hardcore kills work because he disengages the instant the fight looks wrong — patience kills more HC characters than any boss ever has.",
    },
  ],
  pvp: {
    intro:
      "Diablo IV's competitive scene is PvE-first: The Pit leaderboard is the ranked ladder, Fields of Hatred is the only literal PvP zone, and Hardcore is the ultimate prove-it mode. Ranked progress is measured in Pit tiers and clear times, not kill-death ratios — the gap between leaderboard players isn't gear, it's route optimization and stagger discipline.",
    modes: [
      {
        mode: "The Pit (leaderboard push)",
        advice: [
          "Push in the seasonal meta build — off-meta classes hit a hard wall 10-20 tiers early.",
          "Reset the run the moment the first pull goes wrong; a bad start can't be salvaged.",
          "Max out your Paragon glyphs first — glyph level is the single biggest Pit power source.",
          "Party-pushing is faster than solo; a coordinated 4-stack clears density far more efficiently.",
          "If you're farming glyph XP, stop at a tier where you clear comfortably; dying wastes more time than a slower tier costs.",
        ],
      },
      {
        mode: "Fields of Hatred PvP",
        advice: [
          "Go in with empty pockets — don't carry shards you can't afford to lose.",
          "Build for burst and mobility, not sustained DPS — PvP fights last seconds.",
          "Extract your shards early and often; holding a large stack makes you a gank magnet.",
          "Watch the extraction points — players camp them for free kills on anyone banking shards.",
          "Bring an unstoppable or escape skill; getting crowd-controlled is death in this zone.",
        ],
      },
      {
        mode: "Hardcore seasonal ladder",
        advice: [
          "Build defensive layers FIRST — damage means nothing if a boss one-shots you.",
          "Keep a Scroll of Escape on your bar and your panic key; practice using it before you need it.",
          "Farm a full difficulty tier below your softcore power — the safety margin is the strategy.",
          "If you disconnect or lag, log out instantly; DC deaths don't get second chances.",
          "Level a second character on softcore to test builds before committing your HC life to them.",
        ],
      },
    ],
    counterPlay: [
      "Against Suppressor or Shielding elites: step inside the bubble to deal damage, and kill the aura-carrier first — ignoring it lets the whole pack become unkillable.",
      "Against gank parties in Fields of Hatred: extract early and often, fight near your own extraction to deny them their shards, and never chase into the zone interior.",
      "Against empowered boss phases on Tormented: hold all defensive cooldowns for the empowered window, burn everything during stagger, and farm the sub-adds that feed the boss buffs.",
      "Against Pit-tier one-shot mechanics: swap one damage aspect for a damage-reduction aspect and cap your armor/resists — the top players sacrifice damage for survival at push tiers.",
      "Against meta glass-cannon builds in PvP: kite their opener, wait for their mobility cooldowns to expire, then punish them during their downtime.",
    ],
  },
  drills: [
    {
      name: "Training dummy parse",
      duration: "10 min",
      how: "Hit the training dummy in Kyovashad and run your full rotation for 3 minutes straight — check that your buffs stay at near-100% uptime and the spender never sits idle.",
      goal: "Your buff/debuff uptime stays above 90% with zero filler moments in the parse.",
    },
    {
      name: "Helltide route timer",
      duration: "10 min",
      how: "Run one full Helltide zone and count cinders earned; aim to route through the densest zones and open the 250-cinder chest before time expires.",
      goal: "Consistently earn 250+ cinders per Helltide visit without backtracking.",
    },
    {
      name: "Pit speed clear calibration",
      duration: "10 min",
      how: "Run The Pit at a tier you can finish in under 8 minutes — time the clear, note where you slowed, and re-run until the route is automatic.",
      goal: "Two consecutive clears under the same time with no deaths.",
    },
    {
      name: "Tormented stagger practice",
      duration: "10 min",
      how: "Summon a mid-tier boss and fight it with a rule: only burst during the stagger window — play defensively otherwise and observe the phase patterns.",
      goal: "Kill the boss with damage concentrated inside the stagger phases.",
    },
    {
      name: "No-death Nightmare clear",
      duration: "15 min",
      how: "Run a Nightmare Dungeon at your push tier with a personal rule — take zero deaths; if you die, reset immediately and note what killed you.",
      goal: "One clean clear with zero deaths; the kill source is your next practice item.",
    },
  ],
  proSettings: [
    {
      player: "wudijo",
      team: "Maxroll",
      notes: "The greatest Diablo IV player alive — the first to solo-kill Echo of Lilith on Hardcore. Copy his disengage discipline and his obsession with build math over hype.",
    },
    {
      player: "Raxxanterax",
      team: "Independent",
      notes: "The leaderboard grinder — he treats every endgame mode as a speedrun. Copy his route optimization and his mantra: farming efficiency beats raw power at every tier.",
    },
    {
      player: "Rob2628",
      team: "Maxroll",
      notes: "Barbarian main and Maxroll guide author — his builds are the meta starting point every season. Copy his tempering priorities and his mastery of damage buckets.",
    },
    {
      player: "MacroBioBoi",
      team: "Maxroll",
      notes: "Necromancer and build crafter — his guides teach you to think in multipliers. Copy his Paragon pathing and his layered-defense approach to Hardcore.",
    },
    {
      player: "Northwar",
      team: "Maxroll",
      notes: "Sorcerer specialist and Maxroll author — his Pit pushes are masterclasses in cooldown management. Copy his rotation timing and his stagger-window discipline.",
    },
  ],
  commonMistakes: [
    "Copying a build guide without understanding why the [x] multipliers are picked — a Paragon board built for a different weapon or skill is dead weight.",
    "Hoarding materials instead of running boss rotas — summoned bosses are the only reliable source of mythics and high-end aspects.",
    "Ignoring armor and resist caps — you're one-shot by empowered phases that geared players walk through.",
    "Farming a tier below your power level — Torment difficulty scales rewards massively; comfort-tier farming is a time tax.",
    "Salvaging legendaries without checking the aspect roll — a bad unique with a good aspect is worth more than a good unique with a bad one.",
    "Standing in ground effects and telegraphed slams — the top deaths are the ones you could have walked out of with one evade charge.",
  ],
  metaNote:
    "The current-era meta is defined by Pit pushing and Tormented boss speedruns — top builds stack multiplicative [x] bonuses and cap defenses, with seasonal patches rotating which class sits on top each cycle. Copying the meta is fine; the leaderboard is decided by who executes it cleaner.",
};

export default content;

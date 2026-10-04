import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "minecraft",
  overview:
    "Minecraft looks like a building toy and plays like the deepest skill sandbox ever shipped — its competitive scene lives on Hypixel ladders, speedrun leaderboards, MCC, and anarchy/crystal PvP servers. Nothing separates good players from great ones like movement and preparation: the fights are won in the hotbar before they start.",
  skillPillars: [
    "Combat timing",
    "Movement & clutching",
    "Resource economy",
    "F3 & game sense",
    "Routing & preparation",
    "Base defense",
  ],
  techniques: [
    {
      name: "W-tap sprint resetting",
      category: "Combat",
      difficulty: 2,
      summary:
        "Tap W between hits to reset your sprint so every hit deals sprint knockback — the foundation of 1.8-style combo PvP.",
      steps: [
        "Land your first hit while sprinting — it carries bonus knockback.",
        "Release and re-tap W instantly after the hit lands.",
        "Repeat on the enemy's knockback window so they can never reach you.",
        "Mix in strafes so they can't turn to face you between resets.",
      ],
      proTip: "Minemen ladder players chain W-taps into 'combo locks' — once the first knockback lands, the fight is already decided.",
    },
    {
      name: "Jump-reset momentum",
      category: "Movement",
      difficulty: 3,
      summary:
        "Jump the instant you take a hit to convert enemy knockback into forward momentum — you get pushed TOWARD them instead of away.",
      steps: [
        "Watch for the moment the enemy's swing lands on you.",
        "Tap spacebar exactly as the hit registers — you take the damage but keep your direction.",
        "Use the borrowed momentum to close distance or escape toward cover.",
      ],
      proTip: "UHC legends use jump resets to phase THROUGH combo attempts — you're untouchable if every hit just pushes you somewhere useful.",
    },
    {
      name: "Block hitting",
      category: "Combat",
      difficulty: 2,
      summary:
        "In legacy PvP (1.8 and servers that emulate it), hold right-click while attacking to halve incoming damage without losing combos.",
      steps: [
        "Hold right-click (sword block) while left-clicking to attack.",
        "Release right-click for a split second to sprint reset if needed.",
        "Re-block between hits to soak damage during trades.",
      ],
      proTip: "Top players alternate W-tap and block-hit on rhythm — offense and defense in the same tick window.",
    },
    {
      name: "MLG bucket clutch",
      category: "Movement",
      difficulty: 3,
      summary:
        "Place water at your feet mid-fall to survive any drop — the single most clutch mechanic in the game.",
      steps: [
        "Always hotbar a water bucket in a consistent slot (most players use 2 or 9).",
        "During the fall, look straight down and spam right-click where you'll land.",
        "Jump back INTO your water column immediately — it also stops follow-up falls.",
        "Practice on bedwarspractice.club or an MLG server until it's reflex.",
      ],
      proTip: "Dream's Manhunt series made this famous — pros now layer it with pearls and boats as backup clutches.",
    },
    {
      name: "Ender pearl pre-throws",
      category: "Movement",
      difficulty: 2,
      summary:
        "Throw a pearl into safety BEFORE engaging — if the fight goes bad, the pearl lands and teleports you out.",
      steps: [
        "Before a risky fight, toss a pearl at a safe ledge or water source.",
        "Fight normally — the pearl lands seconds later if you don't recall it.",
        "If you're losing, eat the damage and the pearl becomes your escape.",
        "In Bed Wars: pearl INTO enemy bases, not away — aggression is the escape.",
      ],
      proTip: "Gamerboy80 popularized the 'pearl bait': throw a visible pearl at the enemy's bed so they chase it while you free-hit them.",
    },
    {
      name: "Crystal anchor cycle",
      category: "Combat",
      difficulty: 4,
      summary:
        "The core of crystal PvP: place a crystal, break it instantly, and anchor your combo so the enemy can't escape the damage loop.",
      steps: [
        "Place obsidian, then an end crystal on top.",
        "Break the crystal with your sword the same tick it lands — don't wait for it to spin up.",
        "Replace the crystal mid-swing to keep damage rolling.",
        "Anchor the enemy by surrounding them so they can't pearl out.",
      ],
      proTip: "Crystal players place and detonate inside the same tick window — if your place-to-break isn't one motion, you lose the trade.",
    },
    {
      name: "Bed bomb one-cycle",
      category: "Combat",
      difficulty: 4,
      summary:
        "Place a bed next to the Ender Dragon during her perch, sleep in it, and detonate it for massive damage — the speedrun kill.",
      steps: [
        "Wait for the dragon to perch on the exit-portal fountain — she never touches the outer towers.",
        "Place a bed on the fountain rim (or a block you place) right at her head level while she's perched.",
        "Sleep in the bed to trigger the explosion on her face.",
        "Repeat 4–5 times; finish with arrows if she escapes low.",
      ],
      proTip: "WR runners one-cycle the dragon by bed-bombing her before she takes off — the timing window is about two ticks.",
    },
    {
      name: "Pie-chart entity detection",
      category: "Game sense",
      difficulty: 2,
      summary:
        "Shift+F3 reveals a pie chart of nearby entities — use it to find bastions, spawners, and hidden players through walls.",
      steps: [
        "Press Shift+F3 (or F3 + shift) to open the debug pie chart.",
        "Look for 'spawner' or 'chest' blocks in the colored wedges.",
        "Dig toward the wedge direction — the pie chart reveals structures through bedrock.",
      ],
      proTip: "Speedrunners pie-ray for fortresses and bastions; griefers use it to find hidden stashes on anarchy servers.",
    },
    {
      name: "Bastion top-routing",
      category: "Speedrun",
      difficulty: 4,
      summary:
        "Enter bastions from the top bridge to grab the gold block and loot chest before the piglins path to you — the WR route.",
      steps: [
        "Find the bastion's top tower by its lava fountain glow.",
        "Bridge to the highest bridge and dig through to the gold block.",
        "Loot the gold block and any chest on the upper floor in under 10 seconds.",
        "Drop or pearl out before the piglin brutes converge.",
      ],
      proTip: "Feinberg and Couriway practice bastion routes on a fixed seed until they can blind-run it in under 45 seconds.",
    },
    {
      name: "Totem hot-swap discipline",
      category: "Defense",
      difficulty: 2,
      summary:
        "Keep a totem in your offhand and a backup in a fixed hotbar slot — when the first pops, your swap is already muscle memory.",
      steps: [
        "Carry two totems minimum in hardcore or SMP — one in your offhand, one on the bar.",
        "Slot 9 = backup totem, always — never let it sit in the chest.",
        "The moment the totem pops, press F (swap hands) with the backup slot selected — never hunt for it mid-fight.",
        "After the swap, immediately pearl or bucket out — you're at 1 HP.",
      ],
      proTip: "Hardcore legends like Philza live because the second totem is muscle memory — the first one popping is already the escape signal.",
    },
    {
      name: "Snowball knock-back interrupts",
      category: "Utility",
      difficulty: 1,
      summary:
        "Snowballs and eggs deal zero damage but full knockback — use them to break enemy sprint, interrupt bridges, and start combos.",
      steps: [
        "Hotbar snowballs in an easy slot (usually 3 or 4).",
        "Throw one as the enemy approaches — it breaks their sprint and staggers them.",
        "Close in during the stagger and land the first hit.",
        "In Bed Wars, snowball the bridge-runner to knock them into the void.",
      ],
      proTip: "Bed Wars players call it 'egg spam' — at high levels it's a legit opener, not a troll.",
    },
  ],
  pvp: {
    intro:
      "Minecraft PvP is a mechanics test disguised as a crafting game — the same hit lands differently in 1.8 (combo, sprint reset) vs 1.9+ (shield, axe timing, charged attacks). The ranked climb on Hypixel, Minemen, and UHC ladders is decided by who controls space better, not who clicks faster. The dominant pattern is aggression without resources; the counter is preparation and movement.",
    modes: [
      {
        mode: "Hypixel Bed Wars / SkyWars",
        advice: [
          "Rush mid for emeralds in the first 90 seconds — controlling the mid spawn controls the whole game.",
          "Layer your bed defense: wool, then wood, then obby/endstone — never leave it naked wool.",
          "Snowball the bridge-runner first, THEN fight them on the ground.",
          "Pearl INTO the enemy base when you're low — aggression is the escape hatch.",
          "Solo queue: always hold the mid bridge and let your teammates split — you can't carry alone.",
        ],
      },
      {
        mode: "Minemen Club / Lunar 1.8 ladders (NoDebuff, Boxing)",
        advice: [
          "Practice W-tap and block-hit in unranked until the combo is reflex — ranked will expose hesitation.",
          "Against combo lockers, build UP: ladders, cobwebs, and uneven terrain break sprint reset.",
          "Never fight on flat ground against a better player — force them into water or slabs.",
          "Warm up with 10 Boxing matches before queueing NoDebuff — Boxing has no excuse losses.",
        ],
      },
      {
        mode: "Crystal PvP / SMP (Lifesteal, 2b2t-style)",
        advice: [
          "Always carry a spare totem — the first pop is your exit signal, not your death.",
          "Don't fight on flat obsidian — terrain advantage beats gear advantage in crystal PvP.",
          "Anchor cycle on uneven ground where the enemy can't pearl out cleanly.",
          "Bring harming arrows and a piercing crossbow — crystals are dodged, debuffs aren't.",
          "On Lifesteal, play for the heart steal — one kill is worth more than five deaths.",
        ],
      },
    ],
    counterPlay: [
      "Against a combo locker: build up, drop cobwebs, or use water/lava — their sprint reset needs flat ground.",
      "Against a crystal PVPer: build a pillar and fight from above — crystals can't reach you vertically.",
      "Against a Bed Wars rusher: pre-fire their bridge with snowballs and hold the mid bridge — denial beats dueling.",
      "Against a shield turtle (1.9+): axe their shield to disable it, or sprint behind them — axes break shields in one hit.",
      "Against a speedrunner in UHC: deny them the nether portal early — no potions means no late game.",
    ],
  },
  drills: [
    {
      name: "Bedwarspractice clutch reps",
      duration: "15 min",
      how: "Join bedwarspractice.club and run the MLG Rush/Clutch modes — only water bucket and pearl clutches, no blocks.",
      goal: "Land 9/10 clutches before queueing ranked; miss two and you restart the drill.",
    },
    {
      name: "Minemen Boxing warmup",
      duration: "10 min",
      how: "Play 5 unranked Boxing matches on Minemen Club focusing ONLY on W-tap resets — no block hitting, no running.",
      goal: "Win 3/5 without taking knockback — your sprint reset is ready when it stops feeling like a decision.",
    },
    {
      name: "One-cycle dragon simulator",
      duration: "15 min",
      how: "Load a fixed seed (or the speedrun practice map), reach the End, and bed-bomb the dragon during the perch until it's muscle memory.",
      goal: "Kill the dragon in under 8 seconds on 5 consecutive runs — that's the WR pace.",
    },
    {
      name: "Bastion blind-run",
      duration: "20 min",
      how: "Use a practice seed or the Bastion Practice mod; run top-routing on 10 bastions, timing each.",
      goal: "Sub-60 second bastion clear on 8/10 attempts — loot, gold block, out.",
    },
    {
      name: "Bed Wars bridge duel",
      duration: "10 min",
      how: "Queue Bed Wars solo; every fight must start on the mid bridge. Win the bridge or reset — no backing off.",
      goal: "Win the mid bridge 7/10 times; the bridge is the game.",
    },
  ],
  proSettings: [
    {
      player: "Dream",
      team: "Dream Team / Speedrun",
      notes: "The Manhunt and speedrun king — copy his layered clutching (bucket → pearl → boat) and his pre-planned escape routes; he never improvises, he rehearses.",
    },
    {
      player: "Technoblade",
      team: "Hypixel legend",
      notes: "The greatest Bed Wars/SkyWars player ever — study his positioning: he never fights on flat ground, always on terrain he owns, and he counted enemy resources like a second health bar.",
    },
    {
      player: "Gamerboy80",
      team: "Hypixel",
      notes: "The Bed Wars stats king — copy his mid-bridge control and his 'pearl into the base' aggression; he treats the game as a resource race, not a duel.",
    },
    {
      player: "Feinberg",
      team: "Speedrun leaderboard",
      notes: "Current WR-tier speedrunner — copy his bastion top-routing and his discipline: he restarts runs at the first mistake, which is why his average is untouchable.",
    },
    {
      player: "Fruitberries",
      team: "MCC / Team Canada",
      notes: "The MCC all-rounder — copy his movement-first approach: he wins fights by being somewhere the enemy can't reach, not by out-clicking them.",
    },
  ],
  commonMistakes: [
    "Spam-clicking in 1.9+ combat — the charged attack is the only hit that matters; spam does 1 damage.",
    "Fighting without a totem in the offhand — one creeper or combo ends a hardcore world.",
    "Leaving the Bed Wars bed defense at one layer of wool — a 4-block bed dies to a single pearl.",
    "Chasing kills instead of objectives — in Bed Wars and Lifesteal, the win is the bed/heart, not the kill feed.",
    "Standing still to place blocks — you should be strafing or bridging while placing, not planting your feet.",
    "No escape plan — if you can't bucket, pearl, or block your way out, don't take the fight.",
  ],
  metaNote:
    "Modern PvP is split: 1.8 combo ladders still dominate Minemen and Hypixel, while 1.9+ timing and crystal/anchor PvP rule anarchy and SMP. Speedrun meta is bastion top-routing + one-cycle — the sub-8-minute barrier is now the entry point, not the record.",
};

export default content;

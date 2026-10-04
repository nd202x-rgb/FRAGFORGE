import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "valheim",
  overview:
    "Valheim is a 1–10 player Viking survival sandbox where progression is gated by biome bosses, not a tech tree. Combat is deliberately souls-lite — parries, dodge-roll i-frames and a shared stamina bar — and every 'difficulty spike' is really a preparation check: the right food, the right mead, the right weapon type. There is no ranked ladder, so skill is measured by no-death clears, hardcore runs and all-bosses speedruns.",
  skillPillars: [
    "Parry and block timing",
    "Stamina discipline",
    "Food and mead preparation",
    "Terrain and kiting",
    "Boss preparation",
    "Base defense and logistics",
  ],
  techniques: [
    {
      name: "Parry-riposte",
      category: "Combat",
      difficulty: 3,
      summary:
        "Block at the last instant instead of holding guard — a successful parry staggers the enemy and opens a riposte window that ends most fights in one counter.",
      steps: [
        "Carry a buckler, not a tower shield — bucklers trade block power for a much bigger parry multiplier.",
        "Watch the wind-up, not the weapon — raise your block as the swing lands, not when it starts.",
        "When the enemy staggers (visual stun + sound cue), unload your heaviest attack into the riposte window.",
        "Against attacks too heavy to parry, dodge-roll instead — a broken guard is worse than no block.",
      ],
      proTip: "Veterans hold a tower shield for unblockable boss slams and a buckler for everything else — swapping mid-fight is the mark of someone who's done this before.",
    },
    {
      name: "Dodge-roll i-frames",
      category: "Movement",
      difficulty: 4,
      summary:
        "Blocking isn't the only defense — the dodge roll (block + direction + jump) grants invulnerability frames that let you phase straight through attacks.",
      steps: [
        "Hold block, tap a direction, and press jump — the roll has i-frames for most of its animation.",
        "Roll INTO the attack toward the enemy's flank, not away — you end behind them with a free hit.",
        "It costs stamina, so treat rolls as your escape hatch, not your default defense.",
        "Practice the timing on greydwarves before you need it on a troll.",
      ],
      proTip: "The best players roll through a boss's biggest swing and come out swinging — the roll is both the dodge and the engage.",
    },
    {
      name: "Stamina discipline",
      category: "Survival",
      difficulty: 1,
      summary:
        "Sprinting, swinging, blocking, rolling and jumping all drain one bar — hitting zero means you can't fight or flee, and stamina regen punishes you for spending it.",
      steps: [
        "Stop sprinting before you make contact — enter every fight with at least half a bar.",
        "Count your swings: know how many attacks a full bar buys with your weapon.",
        "Never roll or sprint when the bar is under ~25% — disengage and let it regen first.",
        "Stamina foods before movement tech: a bigger bar beats better footwork.",
      ],
      proTip: "Every naked-in-the-swamp death clip starts the same way: empty bar, mob still swinging. Pros spend stamina like ammo, not like air.",
    },
    {
      name: "Sneak-attack opener",
      category: "Combat",
      difficulty: 2,
      summary:
        "Unaware enemies take massively multiplied damage — a knife backstab or a full-draw bow headshot deletes most trash mobs before the fight starts.",
      steps: [
        "Crouch and approach from behind — the eye icon shows your visibility to each enemy.",
        "Knives have a huge sneak multiplier; one backstab drops greydwarves and most draugr.",
        "For ranged, take a full-draw headshot from stealth — the crit plus sneak bonus is a one-shot.",
        "Pull one mob at a time this way instead of alerting the whole camp.",
      ],
      proTip: "Trolls are the classic sneak-opener target — one stab plus a kite finishes what would otherwise be a five-minute fight.",
    },
    {
      name: "Troll mining",
      category: "Logistics",
      difficulty: 2,
      summary:
        "Copper nodes extend underground and take forever to break with a pickaxe — so let a troll's swings smash the deposit for you while you dance.",
      steps: [
        "Find a copper node near a troll spawn in the Black Forest.",
        "Aggro the troll and stand on the far side of the deposit so its overhead slams land on the ore.",
        "Dodge-roll through each swing; the troll breaks the node in a fraction of the time a pickaxe would.",
        "Finish the troll with a bow or let it wander off after you've scooped the ore.",
      ],
      proTip: "Speedrunners route troll mining into every all-bosses run — free ore breaking while you barely lift a finger.",
    },
    {
      name: "The Bonemass cheese",
      category: "Bosses",
      difficulty: 2,
      summary:
        "Bonemass is summoned at a fixed altar — prepare the ground before the pull and the boss literally cannot reach you.",
      steps: [
        "Locate the altar (the green withered-bone skull in the swamp) and mark it on your map.",
        "Dig a pit under the spawn point with a pickaxe, or build a platform overhead on nearby trees.",
        "Summon the boss, then stand where it can't reach — rain arrows and blunt weapons down on it.",
        "If you fight it fair instead: blunt damage and poison-resistance mead are non-negotiable.",
      ],
      proTip: "Fight it legitimately once for the satisfaction — then cheese it on every rerun. There is no prize for heroism in the swamp.",
    },
    {
      name: "Resistance-mead preparation",
      category: "Survival",
      difficulty: 2,
      summary:
        "Meads aren't optional buffs — frost resistance gates the mountains, poison resistance gates the swamp, fire resistance gates the Ashlands. Show up without them and the biome kills you before the mobs do.",
      steps: [
        "Build a cauldron and fermenter as soon as bronze lets you — fermentation takes real time.",
        "Brew bases ahead of progression: frost for mountains/Moder, poison for swamp/Bonemass, fire for Ashlands/Fader.",
        "Carry two of the active mead plus healing meads — chug the resistance one BEFORE crossing the biome line.",
        "Keep brewing between bosses so a death doesn't strand you mead-less on a corpse run.",
      ],
      proTip: "Every famous wipe story starts with someone entering a new biome without its mead. The grinder's rule: mead first, ego second.",
    },
    {
      name: "Rested buff and comfort stacking",
      category: "Base",
      difficulty: 1,
      summary:
        "Sitting by a fire under a roof grants Rested — faster HP/stamina regen and bonus XP — and every comfort item in your home extends its duration.",
      steps: [
        "Get the shelter checkmark: fire, roof, and a seat is the minimum to trigger Rested.",
        "Raise comfort level with furniture tiers — beds, rugs, banners, braziers — each level adds minutes to the buff.",
        "Refresh Rested before every expedition; a ~20-minute buff covers most boss attempts.",
        "On long trips, drop a campfire + lean-to at your staging point to refresh it on-site.",
      ],
      proTip: "High-comfort players plan runs around the Rested timer — leave home buffed, fight the boss inside the window, portal back before it drops.",
    },
    {
      name: "Earthworks raid defense",
      category: "Base",
      difficulty: 3,
      summary:
        "Mobs can't dig and can't climb — raised earth walls and water-level moats are permanent, unbreakable raid defense that no wooden palisade can match.",
      steps: [
        "Use the hoe's 'raise ground' to build walls at least 2m tall around your compound — enemies cannot path over them.",
        "Alternatively, dig a moat down to water level; swimmers can't attack and trolls can't cross.",
        "Leave one controlled entrance with a gate and a kill zone you can shoot into.",
        "Workbenches and campfires suppress spawns — blanket your base radius with them.",
      ],
      proTip: "When 'the ground is shaking' hits, earthworks bases just farm the raid from the walls — the event becomes free loot instead of a rebuild.",
    },
    {
      name: "Food rotation",
      category: "Survival",
      difficulty: 1,
      summary:
        "Three food slots define your effective HP and stamina — mix health-heavy and stamina-heavy foods for the fight you're about to have, and never let a slot lapse.",
      steps: [
        "Check all three slots before leaving base — an empty slot is HP you're not bringing.",
        "Run two stamina foods + one health for scouting and building; invert for bosses.",
        "Cook in bulk at the cauldron and stock the best tier your progression allows — serpent stew tier before endgame bosses.",
        "Re-eat mid-fight if a slot expires — food tick-down mid-boss is a silent death.",
      ],
      proTip: "Veterans keep a labeled 'boss chest' of pre-cooked top-tier food so the pull never waits on cooking.",
    },
    {
      name: "Portal logistics",
      category: "Logistics",
      difficulty: 3,
      summary:
        "Metals can't go through portals — the transport problem IS the game. Plan your routes so ore sails once and everything else teleports forever.",
      steps: [
        "Carry a portal kit everywhere: 20 fine wood, 10 greydwarf eyes, 2 surtling cores — a return trip you always have.",
        "Name portals by destination ('home-swamp-iron'), not by vibes — a mislabeled portal is a lost run.",
        "Sail or cart ore back on one dedicated run; never try to shortcut metal through a portal.",
        "Stage forward portals at each biome edge before boss pulls so corpse runs take seconds.",
      ],
      proTip: "The famous base sites all sit on coastal chokepoints — every biome's ore run converges on one harbor and one portal wall.",
    },
    {
      name: "Pull discipline",
      category: "Combat",
      difficulty: 2,
      summary:
        "Valheim mobs chain-aggro — fight one at a time or die to five. A single arrow pull turns a death sentence into a queue.",
      steps: [
        "Tag the edge mob with a bow shot and back up into ground you've already cleared.",
        "Never fight toward the pack — retreat in the direction you came from.",
        "Use terrain: fight on chokepoints, behind rocks, or across ditches the mob has to path around.",
        "If a second mob aggros anyway, kite — run wide circles until they de-leash, then re-pull.",
      ],
      proTip: "Every 'just one more mob' is how grinders lose an hour of progress — pros disengage the instant the pull goes bad and reset it.",
    },
  ],
  pvp: {
    intro:
      "Valheim has no matchmaking — its competitive scene is PvE mastery: who clears bosses with fewer deaths, who survives a no-map run, who posts the faster all-bosses time. What separates casuals from grinders is preparation discipline: the Rested buff, the right mead, the right damage type, and a corpse-run plan. The skill ceiling is real — i-frame rolls, parry timing and pull control are mechanics you either drilled or didn't.",
    modes: [
      {
        mode: "Hardcore / permadeath runs",
        advice: [
          "One life means death deletes the character — treat every expedition as if gear is gone forever.",
          "Bank a 'second body' gear set at home so an early death doesn't end the run's momentum.",
          "Retreat discipline beats fighting skill: disengage at 25% HP, every single time.",
          "Never scout a new biome without Rested, full food, and the resistance mead — no exceptions for 'quick looks.'",
          "Corpse insurance doesn't exist — over-prepare every boss pull and pre-place your return portal.",
        ],
      },
      {
        mode: "All-bosses speedrun",
        advice: [
          "Practice the boss order as a route — Eikthyr to Fader — and scout seeds where bosses spawn close together.",
          "Skip the pretty base: minimal comfort, portable crafting, and boats staged where each biome ends.",
          "Use troll mining for fast copper and sneak-openers to skip fights that don't drop progression items.",
          "Pre-mark every altar on first contact — you will be back, and finding it twice costs minutes.",
          "Deaths cost time, not the run — build a stripped-down corpse-run kit you can grab in one trip.",
        ],
      },
      {
        mode: "PvP-toggle duels",
        advice: [
          "Valheim's friendly-fire toggle enables real duels — stamina management decides them more than damage output.",
          "Parry timing wins mirrors: bait the enemy's swing, parry, and riposte before they recover.",
          "Roll through their opener rather than blocking — you end up behind them with stamina to spare.",
          "Weapon reach matters: atgeirs and spears out-space knives; bring the reach your opponent doesn't have.",
          "Fight around your own campfire — the comfort regen edge is small but duels are won on small edges.",
        ],
      },
    ],
    counterPlay: [
      "Against deathsquitos: hear the buzz, face it, raise any shield — they shatter on a block. Never turn your back to run.",
      "Against trolls: roll through the overhead slam into their flank and punish the recovery — early blocking just breaks your guard.",
      "Against Fuling camps: pull singly with a longbow from the tree line; a berserker + shaman combo at night is a wipe, not a fight.",
      "Against Bonemass: swap to blunt (iron mace or Frostner), chug poison mead before the pull, and fight at the edge of his melee range where the adds can't stack.",
      "Against sea serpents: harpoon them with the abyssal harpoon and drag them to shallow water — scales sink in the deep, so killing mid-ocean means no loot.",
    ],
  },
  drills: [
    {
      name: "Greydwarf nest parry gauntlet",
      duration: "10 min",
      how: "Find a greydwarf spawner in the Black Forest and leave it alive. Stand at its edge and parry each spawning dwarf — kill only with ripostes.",
      goal: "Ten consecutive parries without a guard break before you call it warm.",
    },
    {
      name: "Troll dance",
      duration: "10 min",
      how: "Aggro a troll and stay inside its melee range for two minutes, rolling through every swing — no sprinting away, no attacks, pure defense.",
      goal: "Read the overhead slam vs sweep animations until the roll timing is reflex, not thought.",
    },
    {
      name: "Deer hunt one-shots",
      duration: "10 min",
      how: "Hunt deer in the Meadows with a crude bow and flint arrows — sneak, full draw, head-height aim. One arrow, one deer, or the rep doesn't count.",
      goal: "Clean one-shots on moving deer at 20m, leading the head consistently.",
    },
    {
      name: "Naked swamp night run",
      duration: "10 min",
      how: "Strip to a torch and cross a swamp at night with zero gear — survive by pull discipline and disengagement, not fighting. No kills allowed.",
      goal: "Reach the far side with zero fights taken — pure kiting, de-leashing and route planning.",
    },
    {
      name: "Boss pre-flight checklist",
      duration: "10 min",
      how: "Before any boss pull, run the list out loud: Rested 20+ min, three foods active, correct resistance mead x2, weapon repaired, portal tagged at the arena edge.",
      goal: "Every boss attempt starts from an identical, fully-prepped state — zero 'oh no' moments mid-pull.",
    },
  ],
  proSettings: [
    {
      player: "FireSpark81",
      team: "FireSpark81 (YouTube)",
      notes: "The Valheim guide king — copy his boss-prep checklists and biome-by-biome gear tiers; every build guide assumes you will not die, which is the correct default.",
    },
    {
      player: "C4nnibiz",
      team: "C4nnibiz (YouTube)",
      notes: "The base-building authority — copy his earthworks-first philosophy: moat and raised walls before aesthetics, and comfort stacked deliberately for the longest Rested buff.",
    },
    {
      player: "Lirik",
      team: "Solo (Twitch)",
      notes: "His early viral Valheim streams showed fearless first-contact play — copy his bow kiting and how he resets bad pulls by disengaging instead of panic-sprinting deeper.",
    },
    {
      player: "shroud",
      team: "Solo (Twitch)",
      notes: "The aim-god took his FPS mechanics to Valheim bosses — copy his bow discipline: full draw only, head-height holds, never spam-shooting at range.",
    },
    {
      player: "ChristopherOdd",
      team: "ChristopherOdd (YouTube)",
      notes: "Long-form Valheim series built on methodical prep — copy his rule of never entering a new biome without the mead brewed, the portal placed, and the exit plan set.",
    },
  ],
  commonMistakes: [
    "Fighting on an empty stomach — an empty food slot is HP and stamina you're leaving at home.",
    "Trying to haul ore through a portal — it won't go; the boat run is the gameplay loop, not a chore to skip.",
    "Naked corpse runs through a hostile biome — leave a rescue gear set at home or the second death is worse than the first.",
    "No moat or raised wall before the raids start — 'the ground is shaking' finds every open longhouse.",
    "Attacking Bonemass with swords and arrows — he shrugs off pierce and slash; bring blunt or go home.",
    "Ignoring the Rested buff — it's free regen and XP, and letting it drop to a leaky roof is self-griefing.",
  ],
  metaNote:
    "The endgame meta post-Ashlands centers on flametal-tier gear, siege-proof earthwork bases and surviving Fader's meteor mechanics; eitr-magic builds from the Mistlands era stay strong, but Rested-buff and mead discipline still gate progression harder than any weapon.",
};

export default content;

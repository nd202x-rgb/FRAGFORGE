import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "roblox",
  overview:
    "Roblox isn't one game — it's a platform of competitive experiences, and each one (BedWars, Rivals, The Strongest Battlegrounds, Arsenal, Blade Ball) has its own ladder, meta, and sweat community. The transferable skills are camera control, movement tech, and latency awareness; players who master those fundamentals climb fast in every experience they touch. Ranked play lives inside each game, so the grinders who dominate are the ones who adapt fastest instead of one-tricking a single title.",
  skillPillars: [
    "Shift-lock camera control",
    "Movement tech",
    "Latency adaptation",
    "Objective tempo",
    "Combo execution",
    "Cross-game adaptation",
  ],
  techniques: [
    {
      name: "Shift-lock combat camera",
      category: "Movement",
      difficulty: 2,
      summary:
        "Enable shift-lock (or the game's built-in lock) so your character strafes relative to your crosshair — you fight with WASD circles instead of clumsy first-person turns.",
      steps: [
        "Turn on shift-lock in Roblox settings (or press the game's lock key — most battlegrounds games have one).",
        "Fight while strafing A/D in a circle around the enemy, camera locked on them.",
        "Weave S in and out of their range so their swings whiff while yours connect.",
        "Release shift-lock when you need to sprint-escape — it slows directional movement.",
      ],
      proTip: "Top BedWars players toggle shift-lock mid-fight: locked to track the enemy, unlocked to sprint-jump out before the third hit lands.",
    },
    {
      name: "Third-person corner scouting",
      category: "Positioning",
      difficulty: 1,
      summary:
        "Roblox's default camera sees around walls without exposing your avatar — hold camera on the corner and gather free information the enemy thinks you don't have.",
      steps: [
        "Hug a wall or doorframe in third person and pan the camera past the edge.",
        "Spot the enemy's position, kit, and direction before you ever show a body part.",
        "Pre-aim at head height in camera space, THEN step out already aimed.",
        "Assume every enemy is doing the same to you — never sit still on a predictable angle.",
      ],
      proTip: "Arsenal and Rivals sweats call this 'camera peeking' — the cleanest kills in Roblox are the ones where the enemy never saw a hitbox before they died.",
    },
    {
      name: "Speed bridging under pressure",
      category: "Movement",
      difficulty: 3,
      summary:
        "Sprint-place blocks beneath you in a straight line to cross gaps at full speed — the signature BedWars skill that decides who controls mid first.",
      steps: [
        "Hold W and jump, place a block at your feet at the apex of each hop.",
        "Angle your camera ~45 degrees down so placement stays consistent.",
        "Don't stop when an arrow or projectile flies past — flinching is how you fall.",
        "Bridge diagonally upward when contesting a higher lane so you arrive with high ground.",
      ],
      proTip: "Rektway bridges without looking down — he watches the ENEMY base while placing so he arrives already knowing where the defenders stand.",
    },
    {
      name: "Layered bed defense",
      category: "Macro",
      difficulty: 2,
      summary:
        "A bed buried under one material dies to one tool — layer cheap and hard materials so attackers burn time and alert you with noise.",
      steps: [
        "First layer: blast-proof or hard material directly on the bed.",
        "Second layer: cheap filler (wool, wood) to force extra breaks.",
        "Add a water/fire trap layer if your game supports it — it buys respawn time.",
        "Re-layer between fights; a half-eaten defense is an open invitation.",
      ],
      proTip: "Clan-war teams assign one player as the dedicated 'bed builder' — the team with the boring defender wins more tournaments than the team with the best rusher.",
    },
    {
      name: "Generator tempo control",
      category: "Economy",
      difficulty: 3,
      summary:
        "Diamond and emerald spawners run on fixed timers — arrive exactly on spawn and you starve the enemy economy while never wasting a second waiting.",
      steps: [
        "Learn your game's gen timers (BedWars diamonds/emeralds tick on a clock).",
        "Route your fights to end near a gen right before it spawns — kill, collect, move.",
        "Never idle on a generator: arrive, grab, leave before the counter-rotate.",
        "If you can't take a gen, deny it — fight ON the pad so the enemy can't safely collect either.",
      ],
      proTip: "TanqR's BedWars tempo is a metronome: watch his rotations and he's never more than five seconds early or late to a spawn — that's an economy gap that wins games by itself.",
    },
    {
      name: "M1 combo extension",
      category: "Combat",
      difficulty: 3,
      summary:
        "In battlegrounds games (The Strongest Battlegrounds, Combat Warriors), the M1 string isn't a mash — it's a timed chain where each hit stuns long enough to link a skill.",
      steps: [
        "Land 3–4 M1 taps in rhythm — don't mash, each hit has a stun window.",
        "After the third or fourth hit, cancel into a move (uppercut, dash, or skill).",
        "Read the ragdoll: if they flew, chase with a dash and restart the string.",
        "If they blocked or evaded, disengage — a mashed fifth hit is how you get punished.",
      ],
      proTip: "TSB grinders lab combos on The Weakest Dummy for hours — the difference between a 30% and a 70% health combo is knowing exactly which M1 count each move links from.",
    },
    {
      name: "Side-dash whiff punish",
      category: "Combat",
      difficulty: 4,
      summary:
        "The highest-value fighting habit on the platform: let the enemy swing first, dash perpendicular past it, and punish the endlag while they're still in recovery.",
      steps: [
        "Stand just inside their move's range to bait the attack.",
        "Side-dash (Q/E or dash key) the INSTANT they commit — through them, not away.",
        "They whiff into recovery; you land the first M1 of your own combo for free.",
        "If they don't bite, reset spacing — never punish a whiff that didn't happen.",
      ],
      proTip: "Every battlegrounds lobby has a masher. Good players farm them: bait the same move three times, punish the third so hard they start playing scared.",
    },
    {
      name: "Wall combo confirm",
      category: "Combat",
      difficulty: 4,
      summary:
        "Cornered enemies can't ragdoll away — push fights toward walls so your knockback moves return them into your next hit instead of freeing them.",
      steps: [
        "Steer the fight toward a wall with your strafing — you pick where the fight happens.",
        "Open with a knockback move so they slam INTO the wall, not away from you.",
        "Link M1s during the wall-stun recovery for an extended string.",
        "Save your biggest finisher for the wall confirm — it can't be dashed out of.",
      ],
      proTip: "Ranked battlegrounds players fight like it's a wall-splat game from neutral — they'll give up damage mid-screen just to keep wall advantage.",
    },
    {
      name: "Explosive jumping",
      category: "Movement",
      difficulty: 3,
      summary:
        "Roblox's physics lets you rocket-jump with your own explosives — in Arsenal, Doomspire-style games and anywhere with splash damage, it's a free high-ground ticket.",
      steps: [
        "Jump first, THEN fire the rocket/explosive at your feet — firing grounded wastes it.",
        "Aim slightly behind your movement direction to get pushed forward AND up.",
        "Land on the high ground already camera-peeking the lane below.",
        "Track your HP — repeat rocket jumps are a resource, not a free move.",
      ],
      proTip: "bandites uses the self-knockback mid-fight to break tracking — an enemy locked onto your strafe pattern can't adjust to a vertical dodge.",
    },
    {
      name: "Ladder flicks and wall hops",
      category: "Movement",
      difficulty: 4,
      summary:
        "Obby and parkour tech that wins races: ladder flicking launches you off a ladder top, wall-hopping jumps between parallel walls — pure movement skill no ping can buy.",
      steps: [
        "Ladder flick: climb to the top, flick the camera away while jumping — momentum throws you onto the ledge.",
        "Wall hop: jump against one wall, flick camera to face the opposite wall, jump again on contact.",
        "Practice on obby games (Tower of Hell, Juke's Towers of Hell) where sections repeat until mastered.",
        "Turn on shift-lock for flicks that need precise facing angles.",
      ],
      proTip: "PinkLeaf clears Tower of Hell stages that tilt entire lobbies — the tech isn't secret, it's 500 repetitions per section until the flick is reflex.",
    },
    {
      name: "Curve-read deflects",
      category: "Reaction",
      difficulty: 4,
      summary:
        "Blade Ball's parry isn't reaction to the ball — it's reading the curve, the ability glow, and the target indicator before the ball even redirects at you.",
      steps: [
        "Watch the ball's TARGET line, not the ball — you get warned the moment it locks to you.",
        "Deflect on the sound cue and distance, not on panic — early parries whiff, late ones kill you.",
        "Learn each ability's visual tell (curve shots, speed boosts, fake-outs) so the read comes first.",
        "At high ball speeds, pre-position your camera — you won't have time to turn mid-deflect.",
      ],
      proTip: "Top Blade Ball players stare at the OTHER players, not the ball — whoever looks nervous is about to get the redirect.",
    },
    {
      name: "Lag-comp leading",
      category: "Aim",
      difficulty: 4,
      summary:
        "Roblox servers are laggy by design — hits register on the server, not your screen, so high-ping fights are won by aiming where the server thinks the enemy is.",
      steps: [
        "Check your ping (Shift+F5 or the game's stat overlay) — over 100ms changes everything.",
        "Lead shots ahead of the enemy's visible position, further the higher your ping.",
        "In melee games, swing EARLY — your input needs travel time to the server.",
        "Favor hitscan and area-damage weapons over precision projectiles on bad ping.",
      ],
      proTip: "Rivals grinders on 150+ ping deliberately play shotgun-style close ranges — you can't out-lag-comp a sniper duel, so change the fight instead of the aim.",
    },
  ],
  pvp: {
    intro:
      "Roblox PvP is fragmented by design — each experience runs its own ladder, kits, and physics quirks. What separates ranks everywhere is the same trio: camera discipline, movement tech, and playing objectives over kills. The dominant ranked pattern is kill-chasing — players who farm stats and lose games; the counter is tempo play that treats every fight as an economy decision.",
    modes: [
      {
        mode: "BedWars ranked / clan wars",
        advice: [
          "Rush mid first — emerald control compounds; a 2-minute lead in gen tempo is worth three kills.",
          "Track finals, not kills: once a bed breaks, that player is one death from elimination — hunt the bedless.",
          "Split roles every game: one rushes, one holds base, one floats between gens — three solo-queuers lose to any coordinated trio.",
          "Buy utility over armor early: knockback tools and blocks win more fights than an armor tier.",
          "After breaking a bed, bank resources and re-layer YOUR base — overextending resets all your pressure.",
        ],
      },
      {
        mode: "Rivals ranked duels",
        advice: [
          "Treat it as a mechanics lab: duels expose raw aim and peek discipline with nothing else to blame.",
          "Pre-aim the common peaks on each map — Rivals maps are small and angles repeat.",
          "Change your range after every death — repeating the same duel angle is free elo for the enemy.",
          "Warm up in the shooting range before queueing; cold queueing in a duel mode is throwing.",
        ],
      },
      {
        mode: "Battlegrounds 1v1s (TSB / Combat Warriors)",
        advice: [
          "Play patient neutral — the masher who attacks first loses to the side-dash punish every time.",
          "Lab each character's M1 count and wall routes before ranked; muscle memory beats theory mid-fight.",
          "Don't burn your evasive early — it's your only exit from a wall combo and they know it too.",
          "Watch the leaderboard players' matches in your server; Roblox lobbies are open film study.",
        ],
      },
    ],
    counterPlay: [
      "Against bridge rushers: meet them at mid with knockback — a rushed bridge is a one-way trip into the void.",
      "Against third-person corner campers: wide-swing the angle or pressure with a projectile — their info advantage dies the second you move unexpectedly.",
      "Against M1 mashers: stop trading hits — bait the string, side-dash, and punish the endlag once instead of mirroring the mash.",
      "Against spawn/final-kill farmers: stagger your respawn timing and take a long route — they farm players who run the same lane twice.",
      "Against projectile spam (Arsenal/BB): zigzag with jump-strafes and close distance through cover — spam only wins at the range it was designed for.",
    ],
  },
  drills: [
    {
      name: "Rivals range warmup",
      duration: "10 min",
      how: "Hit the Rivals shooting range (or an aim-trainer experience) and run headshot-only tracking on moving targets before any ranked session.",
      goal: "Consistent first-shot connects on strafing targets — if you're missing cold, you're donating elo.",
    },
    {
      name: "Tower of Hell movement reps",
      duration: "15 min",
      how: "Run Tower of Hell or Juke's Towers of Hell sections focusing ONLY on ladder flicks and wall hops — restart the section every failed flick until it chains.",
      goal: "Three clean flicks in a row per section; the movement transfers to every parkour- and chase-based game on the platform.",
    },
    {
      name: "Dummy combo lab",
      duration: "15 min",
      how: "In The Strongest Battlegrounds, grind your main's full combo on The Weakest Dummy: M1 count, move links, wall route. No breaks between reps.",
      goal: "Land the full combo ten times consecutively without a dropped link — then it survives ranked pressure.",
    },
    {
      name: "BedWars speed-bridge sprints",
      duration: "10 min",
      how: "Private server or practice mode: bridge from your island to mid on a timer. Fall = restart the rep, not the drill.",
      goal: "Under 30 seconds spawn-to-mid without a single fall, while keeping your camera on the enemy base.",
    },
    {
      name: "Blade Ball deflect-only lobbies",
      duration: "15 min",
      how: "Play Blade Ball with one rule: no abilities, only raw deflects — you must survive on reads and timing alone.",
      goal: "Reach top 3 twice in a row without ability crutches; abilities become bonuses instead of lifelines.",
    },
    {
      name: "Death-cam autopsy",
      duration: "10 min",
      how: "Record a ranked session (Medal.tv, OBS, or Roblox's own capture). Watch only your deaths and tag each: bad peek, lost tempo, or dropped combo.",
      goal: "Name your single biggest death category — that's next week's drill, not 'play more'.",
    },
  ],
  proSettings: [
    {
      player: "TanqR",
      team: "RB Battles champion",
      notes: "The most decorated competitive Roblox player alive — multi-time RB Battles champion and BedWars demon. Copy his gen-tempo rotations and his boring, mistake-free fundamentals over flashy plays.",
    },
    {
      player: "bandites",
      team: "Independent FPS creator",
      notes: "The platform's benchmark for FPS aim across Arsenal and Phantom Forces. Study his crosshair discipline and how he uses explosive self-knockback to break enemy tracking mid-fight.",
    },
    {
      player: "PinkLeaf",
      team: "Independent obbyist",
      notes: "The movement GOAT — Tower of Hell clears that other top players can't replicate. Copy his section-by-section repetition method and his refusal to rush a flick he hasn't perfected.",
    },
    {
      player: "Rektway",
      team: "Independent BedWars creator",
      notes: "One of the most mechanically gifted BedWars players — his speed-bridging and aggressive bed trades show how to convert movement skill directly into objective pressure.",
    },
    {
      player: "KreekCraft",
      team: "Independent / RB Battles competitor",
      notes: "The platform's biggest competitor-creator and a real RB Battles threat across dozens of different games. Copy his cross-game adaptability — he learns a new experience's core loop faster than anyone on the platform.",
    },
  ],
  commonMistakes: [
    "Kill-chasing instead of objectives — a 20-elim BedWars loss is still a loss; finals and beds decide ranked, not K/D.",
    "Mashing M1s on autopilot — a readable combo string is a free side-dash punish for anyone who's labbed the matchup.",
    "Ignoring your ping — fighting on 200ms like it's 20ms loses you every melee trade; adjust timing or change your range.",
    "Sitting still on one angle — third-person camera means everyone's scouting you; a static player is a pre-aimed kill.",
    "Tilting into instant requeue — Roblox lobbies are fast, so ranked tilt costs you three games before you notice, not one.",
    "Fighting through the chat window — typing mid-round is a free final kill for anyone paying attention.",
  ],
  metaNote:
    "The current era rewards transferable mechanics over single-game grinding — movement tech (shift-lock strafing, dash cancels, bridging) and latency management carry across every flagship PvP experience. Ranked ladders increasingly favor objective tempo and labbed combos over raw kill-farming.",
};

export default content;

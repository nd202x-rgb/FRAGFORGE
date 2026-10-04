import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "gta-online",
  overview:
    "GTA Online is Rockstar's persistent open-world sandbox where dozens of players share a Los Santos lobby and every fight mixes gunplay, vehicles, and gear prep. It was never built as an esport, but a decade of freemode warfare produced a real competitive culture: tryhard loadouts, 1v1 sniper lobbies, stunt-race leaderboards, and speedrun heists. There's no ranked ladder — the grind is reputation, money per hour, and never losing a fight your loadout could have won.",
  skillPillars: [
    "Strafe sniping",
    "Loadout & gear prep",
    "Vehicle control",
    "Radar & utility timing",
    "Disengage discipline",
    "Heist routing",
  ],
  techniques: [
    {
      name: "Bulletproof helmet + mask stacking",
      category: "Gear",
      difficulty: 1,
      summary:
        "The bulletproof helmet — the core of the tryhard uniform — lets you tank a headshot that drops every unarmored player; pair it with a utility mask for the classic look.",
      steps: [
        "Buy a bulletproof helmet at any clothing store (Hats section).",
        "Stack a utility mask from the Vespucci mask shop on the boardwalk.",
        "Save the combo as an outfit so you re-equip it in two clicks after every death.",
        "Wear it BEFORE the fight starts — it does nothing for the shot that already killed you.",
      ],
      proTip: "Serious freemode players treat the outfit as a buy-in: no helmet and mask, no fight — it effectively buys you a free sniper headshot per life.",
    },
    {
      name: "BST timing (Bull Shark Testosterone)",
      category: "Utility",
      difficulty: 1,
      summary:
        "Brucie's BST is a ~60-second damage-and-defense steroid that turns losing footfights into wins for pocket change.",
      steps: [
        "Call Brucie → Bull Shark Testosterone; the package drops at a nearby marker.",
        "Grab it, then activate it from the Interaction Menu when the fight actually starts.",
        "Pop it the moment a 1v1 becomes contested — the duration is shorter than it feels, don't waste it pre-fight.",
        "Re-call it between deaths so you're never taking a fair fight you don't have to.",
      ],
      proTip: "Tryhards treat BST as a second health bar — the damage buff also makes YOUR sniper shots more lethal during the strafe duel.",
    },
    {
      name: "Strafe sniping",
      category: "Aim",
      difficulty: 4,
      summary:
        "The core footfight skill of GTAO: stay scoped, never stop moving, and land heavy-sniper headshots mid-strafe.",
      steps: [
        "Run the Heavy Sniper Mk II — the standard tool of every serious 1v1 lobby.",
        "ADS and strafe in an irregular rhythm: left-right with random pauses, never a metronome.",
        "Hold your reticle at head height on their strafe line — let them walk into the shot.",
        "Fire on the move; GTAO snipers stay accurate mid-strafe unlike most shooters.",
        "Downscope between shots to reposition — scoped FOV blinds you to flanks.",
      ],
      proTip: "Free-aim lobbies are the real test — switch aim assist off before you go looking for tryhard fights, because assisted players get farmed the moment the rules flip.",
    },
    {
      name: "Combat roll escapes",
      category: "Movement",
      difficulty: 2,
      summary:
        "The roll is a fast lateral dodge that breaks sniper aim-lines — the panic button that isn't panic.",
      steps: [
        "While aiming, tap roll toward cover or sideways off their aim-line.",
        "Roll while reloading or eating snacks — you stay mobile without presenting a static head.",
        "Chain roll → strafe → roll when crossing open ground under sniper fire.",
      ],
      proTip: "Roll INTO snipers counterintuitively: closing distance makes their over-scoped FOV a liability and forces an AR-range fight they're worse at.",
    },
    {
      name: "EWO and spawn manipulation",
      category: "Macro",
      difficulty: 1,
      summary:
        "Easy Way Out — killing yourself before the enemy can — denies their kill, resets you to a fresh spawn, and breaks spawn traps.",
      steps: [
        "Interaction Menu → 'Kill Yourself' the instant a fight is unwinnable.",
        "The tryhard version is faster: RPG or grenade at your own feet mid-strafe.",
        "You respawn at full health in a new spot; the kill feed shows a suicide, not their frag.",
        "Use it to escape spawn-camp loops and to deny a kill on a fight already lost.",
      ],
      proTip: "It's real tech and universally mocked — every EWO is a conceded fight on the scoreboard that matters, the lobby's memory. Use it to save time, never to pad pride.",
    },
    {
      name: "Ghost Organization flanking",
      category: "Utility",
      difficulty: 2,
      summary:
        "A CEO's Ghost Organization (or Lester's Off the Radar) erases you from the minimap — the only true stealth tool in a game built on radar pings.",
      steps: [
        "Register as a CEO via SecuroServ → 'Ghost Organization' hides your whole org for about three minutes.",
        "Solo alternative: call Lester → 'Off the Radar' for a shorter window.",
        "Activate BEFORE you're in their sightline — a late pop still marks your last position.",
        "Flank from the angle their minimap says is empty; radar discipline wins fights before aiming does.",
      ],
      proTip: "Pair it with a CEO-spawned Buzzard: a helicopter delivered off the map is a strike they never saw coming.",
    },
    {
      name: "First-person footfights",
      category: "Aim",
      difficulty: 2,
      summary:
        "First-person mode tightens aim control and speeds up strafing feel — nearly every serious footfighter plays in FPP.",
      steps: [
        "Switch to first person before engaging, not mid-gunfight.",
        "Max your first-person field of view in settings — peripheral vision is life.",
        "Re-learn recoil: guns kick visibly in FPP, so burst ARs and SMGs.",
        "Swap back to third person for corner awareness and vehicle play.",
      ],
      proTip: "Tryhards peek corners in third person (the camera sees around walls) but fight in first — use both views deliberately, not by accident.",
    },
    {
      name: "Anti-griefer loadout (the Mk II answer)",
      category: "Vehicles",
      difficulty: 3,
      summary:
        "The Oppressor Mk II has hard counters: Imani missile lock-on jammers, explosive sniper rounds, and the Raiju's stealth mode.",
      steps: [
        "Own a jammer-equipped vehicle — the Buffalo STX, Annis 300R, or other Imani-tech cars — for contested-lobby movement.",
        "Their homing missiles can't lock a jammer vehicle, so the Mk II must free-aim or get close.",
        "When they close in: Heavy Sniper Mk II with explosive rounds deletes the bike in two hits.",
        "The air answer is the F-160 Raiju — stealth mode makes enemy homing useless against it too.",
      ],
      proTip: "The Mk II is only 'unfair' if you drive what it wants you to drive — jammer vehicles turned it from apex predator to annoyance.",
    },
    {
      name: "Head-glitch cover play",
      category: "Positioning",
      difficulty: 3,
      summary:
        "Duck behind chest-high cover so only your head's hitbox clears the top — you shoot over while presenting almost no target.",
      steps: [
        "Find chest-height cover: concrete barriers, crates at the docks, LSIA equipment.",
        "Enter cover and ADS over the top edge — you fire while most of your body is hidden.",
        "Pre-aim their strafe line and let them scope a target that barely exists.",
        "If pressured, roll out sideways — never stand up in place.",
      ],
      proTip: "The head-glitch spots around LSIA and the docks are classic 1v1 arenas for a reason — owning the cover IS owning the fight.",
    },
    {
      name: "Sticky bomb drive-bys",
      category: "Vehicles",
      difficulty: 2,
      summary:
        "A window-dropped sticky is a near-guaranteed kill on anyone tailing you — the original anti-chase weapon.",
      steps: [
        "Equip sticky bombs before driving anywhere contested.",
        "While pursued, aim out the driver window and drop one on their lane.",
        "Detonate the instant their bumper crosses it.",
        "Brake into corners to compress their reaction window — they physically cannot swerve in time.",
      ],
      proTip: "Drop one under your own parked car when you bail — the 'trap car' still catches tunnel-visioned chasers today.",
    },
    {
      name: "Kerb boosting",
      category: "Racing",
      difficulty: 4,
      summary:
        "Clipping specific kerbs and bumps mid-corner triggers a physics speed boost — the hidden tech that decides every competitive stunt race.",
      steps: [
        "Learn each track's boostable kerbs — community testing (Broughy1322's content is the reference) documents which surfaces work.",
        "Hit the kerb at full throttle mid-turn; the bump kicks the suspension into bonus speed.",
        "Route your racing line around boostable spots, not just the geometric line.",
        "Practice in Time Trials — no traffic means every boost is measurable.",
      ],
      proTip: "Top leaderboard times are unreachable without it — mid-drive speed boosts are why the 'slower' driver on your screen has the faster lap.",
    },
    {
      name: "Slipstream timing",
      category: "Racing",
      difficulty: 2,
      summary:
        "GTA's slipstream is a massive tow — sit in the draft, then pull out late for a pass they can't answer.",
      steps: [
        "Fix lobby settings first: slipstream ON, catch-up OFF — catch-up punishes the leader, not the slower driver.",
        "Hold the draft on straights instead of burning it early.",
        "Pull out at the last moment before the braking zone for a slingshot pass.",
        "Defending? Weave gently to break their tow — they lose boost the instant they leave your line.",
      ],
      proTip: "In clean racing crews, passes are won by draft management over a whole lap — not one kamikaze move at turn one.",
    },
  ],
  pvp: {
    intro:
      "GTA Online PvP happens in freemode, not on a ladder — the 'rank' you're grinding is reputation, K/D theater, and money per hour. Public lobbies are asymmetric warfare where gear prep, vehicle choice, and radar control decide fights before the first shot. The dominant pattern is the BST-popped, helmet-stacked strafe sniper; the dominant counter is simply refusing to take the fight their kit was built for.",
    modes: [
      {
        mode: "Public freemode (war lobbies)",
        advice: [
          "Stock armor, snacks, and BST before engaging — snacks heal mid-fight and you fight at half strength without them.",
          "Register as CEO or MC for vehicle spawns and Ghost Organization; a Buzzard delivered to a fight beats driving to a funeral.",
          "Set your spawn location to a property — dying deep in Blaine County is a long walk back to relevance.",
          "Scan the player list first: obvious modders and orbital-cannon regulars mean session-hop, not a fair fight.",
          "Disengage freely — there's no round timer, and the only real loss is feeding someone's K/D clip.",
        ],
      },
      {
        mode: "Deathmatches & 1v1 lobbies",
        advice: [
          "Join through Jobs → Deathmatches, or host a sniper-only arena — 1v1 DMs are the community's aim laboratory.",
          "Learn each map's spawn rotation; controlling spawns wins more than out-aiming does.",
          "Prefer free-aim lobbies — assisted-aim reps don't transfer to tryhard rules.",
          "Practice your real kit only: heavy-sniper strafing, combat rolls, snack timing between deaths.",
          "EWO in a DM is just a concede — expect the lobby to treat it that way.",
        ],
      },
      {
        mode: "Adversary modes (Motor Wars, Sumo, Deadline)",
        advice: [
          "Motor Wars is GTA's battle royale: land on weapon spawns, play the shrinking circle's edge, save your best vehicle for the endgame.",
          "Deadline is pure line control — feint turns to draw opponents into walls instead of out-dragging them.",
          "Sumo rewards positioning over speed: bait the charge, sidestep, let their momentum exit the ring.",
          "Run adversary playlists during double-$ weeks — the rotation pays better than most filler between heists.",
        ],
      },
    ],
    counterPlay: [
      "Against Oppressor Mk II griefers: drive an Imani jammer vehicle so their homing can't lock, force them close, then two-tap the bike with explosive sniper rounds — or just spawn a Raiju and outclass it entirely.",
      "Against jet strafers (Lazer, Hydra, Raiju): explosive rounds up the tailpipe or a Railgun shot; reposition under cover between their passes instead of standing in the open watching.",
      "Against BST strafe-snipers: don't mirror the duel — a Widowmaker beam at mid-range or an armored Nightshark charging them removes the range their whole kit depends on.",
      "Against spawn campers: go off-radar or ghost to the aggressor, walk passive to the nearest interior, and re-engage on YOUR spawn's terms.",
      "Against godmode and cheat-menu users: there is no outplay — report, vote-kick, session-hop. Feeding them clips is free content for them.",
    ],
  },
  drills: [
    {
      name: "Shooting range warmup",
      duration: "10 min",
      how: "Run the Bunker shooting-range challenges plus the Ammu-Nation range — pistols, ARs, and the heavy sniper, headshots only.",
      goal: "Consistent gold-medal times before you take real footfights.",
    },
    {
      name: "Deathmatch reps",
      duration: "15 min",
      how: "Join player-created sniper deathmatches via the Jobs menu (or host your own 1v1 arena) in free-aim sessions. If you die standing still, count it as a technique failure, not an aim failure.",
      goal: "Win rounds on strafe-snipe discipline alone — zero stationary scopes.",
    },
    {
      name: "Time Trial chasing",
      duration: "15 min",
      how: "Run the weekly standard and RC Time Trials until you beat par, then hot-lap a stunt circuit with catch-up off and hunt kerb-boost spots.",
      goal: "Find where kerb boosting buys you tenths — that's real race pace, not traffic luck.",
    },
    {
      name: "Cayo Perico elite pace",
      duration: "20 min",
      how: "Solo scope-to-finale via the drainage tunnel approach: practice hack speed, guard headshots, and the compound route until elite pace is boring.",
      goal: "Sub-15-minute finales with the elite bonus — the best money-per-hour rep in the game.",
    },
    {
      name: "Dogfight school",
      duration: "15 min",
      how: "Invite-only session with a friend spamming homing missiles from an Mk II or jet. First reps in the Sparrow — it equips countermeasures at the Kosatka workshop, so drill chaff/flare timing plus evasive rolls. Then swap to the F-160 Raiju: it has no countermeasures, so drill Stealth Mode timing to break their lock-on, then hard-angle breaks before their next missile.",
      goal: "Survive ten locked missiles in a row without eating one — chaff/flare dodges in the Sparrow, stealth breaks in the Raiju.",
    },
  ],
  proSettings: [
    {
      player: "Broughy1322",
      team: "NODO racing community",
      notes: "The authority on which car is actually fastest — he lap-tests every vehicle on a standardized circuit. Copy his tier lists for race picks and his test-it-yourself distrust of the in-game stat bars.",
    },
    {
      player: "GhillieMaster",
      team: "Solo creator",
      notes: "GTAO's PvP meta analyst — his breakdowns of the Mk II problem and anti-griefer loadouts define how veterans build. Copy his philosophy: counter the meta, don't mirror it.",
    },
    {
      player: "DarkViperAU",
      team: "Solo speedrunner",
      notes: "GTA speedrunning's most famous name — his movement fluency, routing discipline, and thousands of hours of input precision show what engine mastery looks like.",
    },
    {
      player: "ToriksLV",
      team: "GTAO speedrun boards",
      notes: "Top Cayo Perico heist speedrunner — copy his elite-run routing: every second saved is a decision made before the finale starts.",
    },
    {
      player: "Tylarious",
      team: "Solo creator",
      notes: "The grinding-efficiency authority — copy his money-per-hour discipline: the right vehicle for the right job, prep before profit, no wasted sessions.",
    },
  ],
  commonMistakes: [
    "Caring about K/D — it's padded by EWO spam and sniping unarmed cargo haulers; nobody good respects the stat, only the fight wins.",
    "Fighting unprepared — no armor, no snacks, no BST is a permanent handicap before the first shot.",
    "Standing still while scoped — a stationary sniper is a free headshot for anyone strafing.",
    "Chasing jets and Mk IIs across the map in a car — you're a target on their terms; make them come down or leave.",
    "Buying supercars before tool vehicles — a Sparrow, armored Kuruma, and a Nightshark pay for themselves; the shiny car doesn't.",
    "Selling cargo in a war lobby — scout the session with a cheap resupply or use invite-only; a destroyed sell run is an hour gone.",
  ],
  metaNote:
    "Recent-era updates armed the defenders: Imani lock-on jammers, the stealthy Raiju, and the Railgun ended the Oppressor Mk II's uncontested reign, so modern freemode wars tilt toward armored ground vehicles and explosive-round kits. The footfight holy trinity — bulletproof helmet, BST, and strafe sniping — hasn't changed in years.",
};

export default content;

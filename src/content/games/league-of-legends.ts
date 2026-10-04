import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "league-of-legends",
  overview:
    "League of Legends is a 5v5 MOBA where games are decided before teamfights start — CS leads, wave states, and objective timers compound into advantages that outscale any single outplay. Ranked climbing is an economy game disguised as a mechanics game: the player who farms 8 CS/min, recalls on tempo, and rotates first beats the 'mechanically gifted' player who dies chasing kills. Every tier jump comes from removing one category of deaths, not adding a new trick.",
  skillPillars: [
    "Wave management",
    "CS efficiency",
    "Trading patterns",
    "Vision control",
    "Jungle tracking",
    "Objective timing",
  ],
  techniques: [
    {
      name: "Wave freezing",
      category: "Wave Management",
      difficulty: 3,
      summary:
        "Hold the enemy wave just outside your tower's range so the opposing laner must overextend to farm — turning their CS into your gank setup.",
      steps: [
        "Last-hit at the lowest possible health and never AoE the wave.",
        "Keep 3–4 more enemy caster minions than yours alive so the wave never dies out.",
        "Stand between the wave and the enemy laner — your threat zones them off gold, not your tower.",
        "Hold until your jungler arrives or the enemy bleeds 10+ CS to the minions themselves.",
      ],
      proTip: "Pros freeze on the wave bounce — a rebounding wave parked near your tower is free map pressure: the enemy either walks up to die or walks away to starve.",
    },
    {
      name: "Level 2 power spike",
      category: "Trading",
      difficulty: 2,
      summary:
        "The first minion of the second wave decides the lane — hit level 2 before your opponent and all-in while they still have one ability.",
      steps: [
        "Kill the entire first wave fast, then focus the first melee minion of wave two.",
        "The instant your level-up flashes, walk forward and press your full combo.",
        "A level-2-versus-level-1 fight wins roughly 80% of the time regardless of matchup.",
        "If the enemy hits 2 first, concede the wave — fighting into their spike is how lanes die at three minutes.",
      ],
      proTip: "Challenger mids and supports count every minion — they pre-position on the last wave-one minion so the level-up lands mid-combo, not mid-retreat.",
    },
    {
      name: "Trading stance",
      category: "Trading",
      difficulty: 3,
      summary:
        "Punish the enemy every time they step up to last-hit — their auto is locked on the minion, yours is free.",
      steps: [
        "Track which minion is lowest and stand inside your wave beside it.",
        "When the enemy commits an auto to CS, hit them with an auto or spell and walk back.",
        "Never trade into the enemy minion wave early — three caster minions out-damage you.",
        "Repeat every CS they take; winning trades by 100 HP stacks into a dive or recall advantage.",
      ],
      proTip: "Watch Chovy lane: he doesn't 'go for kills,' he makes every single CS the enemy takes cost health until the wave itself wins the all-in for him.",
    },
    {
      name: "Last-hitting under tower",
      category: "Farming",
      difficulty: 2,
      summary:
        "Tower shots have fixed damage — learn the pattern and a losing lane still farms its way back into the game.",
      steps: [
        "Melee minions: let the tower hit twice, then last-hit (needs no extra autos at most levels).",
        "Caster minions: auto once, let the tower hit once, then last-hit — or prep them early with an auto before the tower arrives.",
        "Cannon minions need real damage — weave spells between tower shots.",
        "While farming under tower, hold your escape or CC — that's exactly when junglers dive.",
      ],
      proTip: "Weakside pros treat tower CS as a rhythm game, not a scramble — prep casters before the wave even reaches the tower and you lose almost nothing.",
    },
    {
      name: "Cannon wave recalls",
      category: "Economy",
      difficulty: 2,
      summary:
        "Recall on cannon waves — the enemy can't crash a cannon wave fast, so you lose almost no CS and get a free reset.",
      steps: [
        "Shove the wave before the cannon wave, then instantly recall as the cannon arrives.",
        "Buy, and walk back while the enemy is still grinding through cannon HP.",
        "Never recall on a wave the enemy can freeze against you — that costs you two waves, not one.",
        "If you must recall on a bad wave, fake it: step into fog, wait for the enemy to back off, then stay.",
      ],
      proTip: "Keria built his reputation on recall timing — T1 syncs backs to cannon waves and objective timers so they never show up late or broke.",
    },
    {
      name: "Roam windows off prio",
      category: "Roaming",
      difficulty: 3,
      summary:
        "You can't roam while your wave is under tower — shove first, THEN move, so the enemy pays a wave to follow you.",
      steps: [
        "Hard-shove your wave into the enemy tower before leaving lane — never roam on a stacked wave.",
        "Move through river toward a fight, a gank, or just deep vision — a fake roam pressures the map too.",
        "Take your play, then return before your next wave crashes; a roam that costs you two waves is a loss even if it works.",
        "If the enemy follows, they're down a wave — spam ping them and turn on the tired party.",
      ],
      proTip: "Caps roams look 'random' but aren't — he only leaves on a crashed wave, so the follow-up always costs the enemy mid turret plates.",
    },
    {
      name: "Jungle tracking",
      category: "Vision",
      difficulty: 4,
      summary:
        "The enemy jungler is never 'missing' — camp timings and lane behavior tell you exactly where they are and when they'll gank.",
      steps: [
        "Watch which lanes arrive late to see which buff the enemy started — that tells you their first clear path.",
        "Track camps by spawn order: whichever side they started is the side they return to when it respawns.",
        "When their camps are up on your side, play weak — that's the gank window, not a coincidence.",
        "Ping their position to your team every time you figure it out — a tracked jungler is a wasted jungler.",
      ],
      proTip: "Oner wins lanes he never touches — T1's laners play aggressive exactly when tracking says the enemy jungler is on the opposite side of the map.",
    },
    {
      name: "Objective setup",
      category: "Macro",
      difficulty: 4,
      summary:
        "Dragons and Barons are won 60 seconds early — shove waves, get vision, and arrive first so the enemy walks into a losing fight or gives it free.",
      steps: [
        "At ~1:00 before spawn, shove your lane and spend every ward you have on river entrances.",
        "Recall to spend gold BEFORE the objective — showing up with 1,500 unspent gold is arriving weak on purpose.",
        "Force the enemy to facecheck into your team or concede — never start the objective 50/50 while their jungler is alive and nearby.",
        "After taking it, reset instantly — teams that linger to 'do a little more' hand the next objective back.",
      ],
      proTip: "Gen.G's discipline is the model: they'll give a kill to keep objective timers — Chovy has skipped free kills to recall for a dragon spawn on tempo.",
    },
    {
      name: "Attack-move kiting",
      category: "Mechanics",
      difficulty: 3,
      summary:
        "Orbwalking — auto, move between attacks, repeat — keeps you at max range where melee can't touch you but you never stop dealing damage.",
      steps: [
        "Bind attack-move (A-click) so misclicks attack the nearest target instead of walking you into melee.",
        "Auto once, immediately click a step sideways or back during the wind-down, then auto again.",
        "Move between EVERY attack — a standing ADC is a dead one even at full build.",
        "Kite toward your team or tower, never parallel to the enemy — distance is the resource you're spending.",
      ],
      proTip: "Ruler kites so cleanly that pro frontlines die without ever reaching him — the secret isn't speed, it's never wasting a single wind-down frame.",
    },
    {
      name: "Warding on timers",
      category: "Vision",
      difficulty: 3,
      summary:
        "Wards are currency spent on timing — ward when the enemy jungler is about to path near you, not randomly on cooldown.",
      steps: [
        "Ward river or the enemy's raptor-side entrance right before the standard early gank windows, not at minute one.",
        "On a recall, buy a control ward and place it where your NEXT two minutes will be — drag-side or baron-side.",
        "Before pushing past river, ward the path their jungler takes TO you — you need to see them coming, not already standing there.",
        "Sweep before your team groups around an objective — removing their vision wins fights before they start.",
      ],
      proTip: "Keria places wards that watch a future rotation, not the present lane — copy the timing logic (ward for the next objective), not his pixel spots.",
    },
    {
      name: "Front-to-back teamfighting",
      category: "Teamfighting",
      difficulty: 4,
      summary:
        "In a straight 5v5, kill what's in front of you — diving past a frontline for the 'right' target feeds the carry you're trying to protect.",
      steps: [
        "Stand behind your frontline at max auto range and hit whoever steps into it — yes, even the tank.",
        "Save your mobility and self-peel for the diver; your job is staying alive through their engage.",
        "As the diver's cooldowns burn, the fight 'opens' — now walk up and hit the backline for free.",
        "Only diverge front-to-back when your team commits a full dive together — a solo dive is just a death.",
      ],
      proTip: "Gumayusi's positioning is the clinic — he treats enemy divers as the first objective of the fight, killing them before the 'real' fight even starts.",
    },
  ],
  pvp: {
    intro:
      "League PvP is a resource race disguised as a deathmatch. Gold, XP, and tempo decide fights before they happen — the kill scoreboard lies constantly. Every rank jump comes from one thing: dying less on your own terms. Iron-to-Gold is a CS gap, Gold-to-Diamond is a wave-management gap, and Diamond-plus is a timing gap — who shows up first and what each death costs.",
    modes: [
      {
        mode: "Ranked solo/duo queue",
        advice: [
          "One-trick two or three champions maximum — lane mastery beats champion-pool size at every rank below Masters.",
          "Dodge lobbies with off-role autofills in key roles or an already-typing-ADC — the LP cost is nothing next to the tilt.",
          "Mute at the first sign of typing; pings carry every fact that matters.",
          "Play weakside happily: when your jungler shows top, give CS rather than coinflip a 1v2 — dying 'because jungle diff' is still your death.",
          "Review YOUR deaths after losses, not your teammates' — the only constant in your games is you.",
        ],
      },
      {
        mode: "Clash / Flex 5-stack",
        advice: [
          "Draft around comfort picks, not 'counter picks' — a played matchup wins more than a theoretically good one.",
          "Designate ONE shotcaller for objective calls mid-game; split calls lose more Barons than bad mechanics.",
          "Plan a level-one every game — invade, lane bush cheese, or stacked early wards, but never load in passive.",
          "Play protect-the-carry: in coordinated play the team that peels best wins, because everyone knows how to dive.",
          "Scout from champ select — check opponents' most-played and ban their comfort, not the meta boogeyman.",
        ],
      },
      {
        mode: "Norms / ARAM warm-up",
        advice: [
          "Use normals for first-timing mechanics, not new champion identities — practice your ranked pool's combos, not off-meta picks.",
          "ARAM is a teamfight reps tool — practice front-to-back positioning and ability-haste combos under constant pressure.",
          "Treat every warm-up death as data: were you greedy on the wave, missing a ward, or late on tempo?",
        ],
      },
    ],
    counterPlay: [
      "Against a perma-pusher: freeze near your tower and call your jungler — their aggression is free ganks if you refuse to trade pushes.",
      "Against a roaming mid: shove on every roam, take plates, and ping their path — a roam that costs them two waves is a loss even when it works.",
      "Against early-cheese junglers (Shaco, Twitch, level-2 ganks): ward their likely entrance before the first gank window and play tall until they show.",
      "Against a scaling comp: don't farm passively — stack early dragons and Rift Herald pressure so the game ends before their win condition comes online.",
      "Against a fed assassin: group early, save one point-and-click CC for them, and never side-lane alone — assassins eat isolation, starve in groups.",
    ],
  },
  drills: [
    {
      name: "Practice Tool CS to 10",
      duration: "12 min",
      how: "Load Practice Tool as your main, lane against no enemy, and last-hit only — no abilities until 80+ CS, then allow them. Target 10 min with zero deaths-of-focus.",
      goal: "Consistent 90+ CS at 10:00 in the tool; 75+ means lane pressure is bleeding you in ranked.",
    },
    {
      name: "1v1 mirror customs",
      duration: "10 min",
      how: "Run first-blood-only 1v1s in a custom against a friend or a mid bot on your main. Only trading stance and level-2 spikes — no all-ins past 300 HP.",
      goal: "Recognize exactly which minion kills unlock your spike and how much a minion wave adds to an enemy's damage.",
    },
    {
      name: "Freeze drill",
      duration: "8 min",
      how: "Practice Tool: let the enemy wave push to your tower side, then hold the freeze for 5 straight minutes — last-hit only, thin the wave only when it threatens to crash.",
      goal: "Hold a freeze 5+ minutes without the wave dying or crashing — that patience is the entire skill.",
    },
    {
      name: "Jungle tracking reps",
      duration: "1 week of games",
      how: "Every game, announce to yourself where the enemy jungler is every 30 seconds — from lane leashes, first gank side, and camp respawn logic. Write down every correct call.",
      goal: "Predict the gank BEFORE the ping in 7 of 10 attempts — that's the difference between Gold and Diamond awareness.",
    },
    {
      name: "Own-death VOD review",
      duration: "10 min",
      how: "After each loss, watch only your deaths. Tag each one: bad wave state, missing ward, late recall, or forced fight. One category per replay allowed.",
      goal: "Find which single death type is killing you most — that's your only drill until it's gone.",
    },
    {
      name: "Recall tempo check",
      duration: "5 min",
      how: "In ranked, before every recall ask: 'Is a cannon wave coming or did I just shove?' If neither, hold or shove first — log every bad recall and the CS it cost.",
      goal: "Zero recalls that lose a full wave — bad backs are a hidden 500-gold leak per game.",
    },
  ],
  proSettings: [
    {
      player: "Faker",
      team: "T1",
      notes: "The GOAT's edge isn't mechanics anymore — it's efficiency. Copy his recall tempo, his refusal to fight on even footing, and how he turns small lane leads into map-wide pressure.",
    },
    {
      player: "Chovy",
      team: "Gen.G",
      notes: "The CS machine — 10+ CS/min through every meta. Study his trading stance and wave math; he wins lanes before junglers ever touch them.",
    },
    {
      player: "Keria",
      team: "T1",
      notes: "The best playmaking support alive — copy his roam windows off crashed waves and his habit of warding for the NEXT objective, not the current lane.",
    },
    {
      player: "Caps",
      team: "G2",
      notes: "Western mid-lane benchmark — copy his level-2/3 aggression and his willingness to sacrifice a wave only when the roam is already won.",
    },
    {
      player: "Knight",
      team: "Bilibili Gaming",
      notes: "Punish-timing specialist — watch how he tracks enemy cooldowns mid-trade and all-ins the exact frame a key spell is down.",
    },
  ],
  commonMistakes: [
    "Pushing past river without vision, then blaming the jungler — the wave was lost when you decided to shove it blind.",
    "Chasing kills across the map while two waves die to your tower — a kill is worth less than the CS and plates you just burned.",
    "Fighting before your item or level spike — a 1-item-vs-2-item 'outplay' is just a coin flip you chose to flip.",
    "Recalling on random waves instead of cannon waves — bad backs cost more LP than bad mechanics.",
    "Queueing tilted and replaying the same losing lane pattern — tilt doesn't fix itself in queue, it feeds.",
    "Copying pro picks without the fundamentals — a scaling pick on a player who can't CS is just a slower loss.",
  ],
  metaNote:
    "The current era rewards tempo and early objective stacking — Voidgrubs and dragon control snowball harder than late-game scaling, so lanes that secure priority and rotate first dominate the map. Hard-scaling picks still work, but only in teams that can survive the early skirmish war.",
};

export default content;

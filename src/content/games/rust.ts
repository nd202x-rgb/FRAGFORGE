import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "rust",
  overview:
    "Rust is an open-world survival sandbox where every player on the map is both your competition and your loot delivery. There is no ranked ladder — the wipe is the leaderboard, and a stocked base on day two is the ELO. Skill here is an economy of information, timing, and spray control far more than raw aim.",
  skillPillars: [
    "Recoil control",
    "Snowball discipline",
    "Raid economics",
    "Base design",
    "Sound awareness",
    "Monument control",
  ],
  techniques: [
    {
      name: "AK spray control",
      category: "Aim",
      difficulty: 5,
      summary:
        "The assault rifle's recoil is a fixed S-pattern — identical every spray. Muscle memory, not reaction, is what deletes hazmats at range.",
      steps: [
        "Load an aim-train server (UKN, Combattag) and shoot a wall to see the exact pattern.",
        "Pull down, then compensate left-to-right as the pattern kicks — same correction every mag.",
        "Win the first 5 bullets: that's where most fights are decided.",
        "Past ~40m, fire 5–10 round bursts and reset instead of holding the whole mag.",
        "Crouch while spraying — it tightens the pattern noticeably.",
      ],
      proTip: "Players like Trausi hold full 30-round sprays at distance because the pattern is memorized, not reacted to — grind the wall until it's reflex.",
    },
    {
      name: "SAR tap rhythm",
      category: "Aim",
      difficulty: 3,
      summary:
        "Semi-auto rifles reward controlled taps and repositioning — the mid-tier workhorse beats AKs when you fight on rhythm instead of panic-spamming.",
      steps: [
        "Crouch before engaging — semi-autos gain real accuracy standing still.",
        "Tap 2–3 bullets on a rhythm, crosshair upper chest, let the gun rise into the head.",
        "Dip behind cover between tap windows — never stand exposed past three shots.",
        "Reposition sideways after every exchange so their return fire hits air.",
      ],
      proTip: "Watch hjune's SAR fights: two taps, reposition, two taps. The guy who taps on tempo wins mid-tier fights before spray ever matters.",
    },
    {
      name: "Bow snowball",
      category: "Economy",
      difficulty: 3,
      summary:
        "On wipe day, hunt players instead of nodes — one dead farmer near a recycler is worth an hour of farming.",
      steps: [
        "Craft bow + arrows + stone tools within your first two minutes off the beach.",
        "Shadow players heading to monuments or recyclers — they carry the early loot density.",
        "Crouch in foliage near exits and shoot the loaded ones, not the nakeds.",
        "Depo instantly — stash or sprint it home, then go hunt again with nothing to lose.",
        "Snowball the kills into a crossbow, then a DB, then a kit — don't build first.",
      ],
      proTip: "The best solos don't place a foundation until they already have a kit — the kit IS the base on day one.",
    },
    {
      name: "Keycard route snowball",
      category: "Macro",
      difficulty: 2,
      summary:
        "The green-to-blue-to-red card chain through monuments is the fastest legal tech unlock on the map — skipping it is skipping free guns.",
      steps: [
        "Fuse the green room at Harbor, Satellite Dish, or Abandoned Cabins for a green card.",
        "Run Water Treatment, Airfield, or Train Yard blue rooms — fuse plus green card in.",
        "Cash the blue card at Launch Site or Military Tunnels red rooms for military crates.",
        "Bring ~25%+ radiation protection or a hazmat for the big monuments.",
        "Recycle everything duplicate on the way out — scrap is the real prize.",
      ],
      proTip: "Speedrunners finish the full card chain before most players have a base down — the route is a solved opening, learn it like one.",
    },
    {
      name: "Soft-side picking",
      category: "Raiding",
      difficulty: 2,
      summary:
        "Every wall has a weak side that takes roughly 10x tool damage — raiding through it costs pickaxes, not sulfur.",
      steps: [
        "Learn to read the difference: smooth/finished face is hard side, rough planks and frame is soft.",
        "Get inside a compound first, then pick inward through the soft sides you now face.",
        "Pick quietly — it makes almost no noise and doesn't show on any map.",
        "When building, mirror your honeycomb so no soft side faces outward.",
      ],
      proTip: "Veteran raiders read a base's whole layout from its foundations — which walls are worth boom and which are worth pickaxes is decided before you spend a scrap.",
    },
    {
      name: "Raid math",
      category: "Economy",
      difficulty: 4,
      summary:
        "Raids are arithmetic before they're violence: count the doors to the core, then buy exactly enough boom to open them.",
      steps: [
        "Scout the base fully — count every door and wall layer between outside and the core.",
        "Know the prices: a rocket runs ~1,400 sulfur-equivalent, C4 ~2,200, a satchel ~480.",
        "Compare doors vs walls — 63 explosive ammo beats a satchel on a sheet door.",
        "Craft 20% over your count: splash misses, splash gets wasted, math gets interrupted.",
        "Seal the breach the moment you're in — new doors and rebuilt walls before you loot.",
      ],
      proTip: "Wobo's raid-cost tables are the bible — the best raiders do the math before they craft a single satchel, and dry raiders get countered.",
    },
    {
      name: "Counter-raiding timing",
      category: "Macro",
      difficulty: 4,
      summary:
        "Explosions are a dinner bell — arrive while raiders are mid-breach, when they're split, loaded, and committed.",
      steps: [
        "The second you hear boom, note the direction and grab a kit plus a sleeping bag.",
        "Drop a bag near the raid BEFORE engaging — dying costs 90 seconds, not the run.",
        "Approach wide through dead ground, never the open field in front of the base.",
        "Wait until they breach core and funnel inside — that's when they're richest and weakest.",
        "Third-party the loot haul, not the breach itself.",
      ],
      proTip: "Pros treat every explosion on the map as their own free raid — the counter-raid IS the raid, without the sulfur bill.",
    },
    {
      name: "Airlock and codelock discipline",
      category: "Base Defense",
      difficulty: 1,
      summary:
        "Most 'door camped and went deep' stories end with a missing codelock, not better enemy aim — two doors and locks on everything is survival law.",
      steps: [
        "Every entrance gets two doors minimum — never a single door to outside air.",
        "Codelock ALL doors, including inner ones — keylocks let anyone who kills you walk in.",
        "Never open the outer door while the inner is open with players outside.",
        "Build a window frame or embrasure to check outside before exiting.",
        "Drop a shotgun trap in the airlock — it turns a deep raid into a donation.",
      ],
      proTip: "Big clans run triple-airlocks with shop fronts — every extra door a raider opens is a gamble they're paying sulfur to make.",
    },
    {
      name: "External TC layering",
      category: "Base Defense",
      difficulty: 3,
      summary:
        "Losing your core TC means losing the base — external tool cupboards keep building privilege yours even when raiders go deep.",
      steps: [
        "Place external TCs beyond your compound walls, spread apart, authorized only to you.",
        "Upgrade them to at least sheet metal — a wood external is a free takeover.",
        "Never auth teammates or randoms on externals — one bad auth hands over the compound.",
        "More TCs means a raider must find and destroy every one to grief you out.",
      ],
      proTip: "Zergs run four-plus externals for a reason: raiders who hit the core but miss the externals wake up to a re-sealed base.",
    },
    {
      name: "Heavy-scientist kiting",
      category: "Macro",
      difficulty: 4,
      summary:
        "Large Oil Rig heavies shred anyone in close range — the whole encounter is keeping them at distance on geometry they can't climb.",
      steps: [
        "Bring a red card and fuse, and clear normal scientists top-down first.",
        "When the Chinook drops heavies, break line of sight and take the catwalks.",
        "Kite them along open stretches — they can't climb ladders and path badly on edges.",
        "Shoot the head — heavies have huge HP pools and body shots waste mags.",
        "Start the locked crate hack, then defend the timer instead of wandering off.",
      ],
      proTip: "Rig speedrunners fight heavies from the same two catwalk angles every run — pick your kill lane before the Chinook arrives.",
    },
    {
      name: "Audio discipline",
      category: "Info",
      difficulty: 2,
      summary:
        "Rust's loudest player is the dead one — footsteps, doors, and bolt cycles carry further than gunfights.",
      steps: [
        "Crouch-walk near bases and other players — it cuts footstep audio dramatically.",
        "Never chop trees or sprint loudly near your own base — you're announcing the door.",
        "Listen for door creaks, bag timers, and turret beeps before rounding any corner.",
        "Check the killfeed when you hear a fight — it tells you kits and casualties for free.",
      ],
      proTip: "Every big Rust clip starts the same way — 'I heard them before they saw me.' Play with headphones like the walls are transparent.",
    },
  ],
  pvp: {
    intro:
      "Rust PvP is information warfare punctuated by five-second gunfights. What separates day-one nakeds from wipe dominators isn't aim — it's depo discipline, fight selection, and knowing which interactions are worth having at all. The dominant pattern is dying loaded because you couldn't resist one more node.",
    modes: [
      {
        mode: "Vanilla monthly wipe (officials)",
        advice: [
          "Queue the moment force wipe hits — an hour late on officials means fighting through an established beach.",
          "First-hour priorities: bag, tools, bow — before any base. The map is richest while everyone is prim.",
          "Build NEAR monuments, not on them — two-minute recycler access beats living in a target.",
          "Check BattleMetrics for queue times and pop decay — a dying server on day three is a wasted wipe.",
          "Never build on the beach or the main road — visibility is a raid advertisement.",
        ],
      },
      {
        mode: "Solo/duo/trio group-limit servers",
        advice: [
          "Build small and hidden over big and honeycombed — a found 2x1 loses to a missed 1x2.",
          "Depo constantly: stash runs mid-farm are what keep a death from becoming a setback.",
          "Engage teams only when a member peels off alone — three fair fights are three bad fights.",
          "Snowball off their raids: on group-limit, one counter-raid can feed your whole wipe.",
          "Play the off-hours — your worst enemy on limited servers is a full trio catching you mid-farm.",
        ],
      },
      {
        mode: "Modded 2x/5x/10x servers",
        advice: [
          "Treat gather multipliers as free lab time — practice raid math and base designs you'd never risk vanilla sulfur on.",
          "Learn each server's plugin commands (/home, /tpa, /kit, clans) — half the skill gap is teleport etiquette.",
          "Use the compressed progression to rep endgame kits: AK spray and rocket raids cost nothing here.",
          "Expect fights constantly — modded pop plays like a deathmatch with bases, so build disposable.",
        ],
      },
    ],
    counterPlay: [
      "Against roofcampers: never loot bodies in their sightline — walk the dead ground in dips and tree lines, and hit them when they descend for the haul.",
      "Against door campers: check embrasures before opening, exit through a second route or a shop front, and let the airlock shotgun trap do the arguing.",
      "Against offline raiders: external TCs, turrets inside, boom spread across loot rooms — make yourself the worst sulfur-per-loot value on the grid.",
      "Against counter-raiders at your raid: post an overwatch lookout, seal the breach with fresh doors BEFORE looting, and move the haul in trips.",
      "Against bow snowballers while farming: farm at night off the monument paths, ears up over eyes, and never carry more than you can lose.",
    ],
  },
  drills: [
    {
      name: "UKN spray arena",
      duration: "15 min",
      how: "Join a UKN Training server and spray walls with the AK at increasing range — watch the pattern, pull the opposite, repeat full mags.",
      goal: "A 30-round spray tight enough to down a geared player at 30m without bursting.",
    },
    {
      name: "Combat Tag deathmatch reps",
      duration: "15 min",
      how: "Run SAR and AK deathmatch arenas on Combattag servers, taking only fights where your crosshair is already placed — disengage from panic swings.",
      goal: "Win fights without ever firing while sprinting — retrain placement-first habits.",
    },
    {
      name: "Primitive Battlefield",
      duration: "15 min",
      how: "Play bow/crossbow/DB-only prim servers and take every fight — the compressed kit gap isolates pure positioning and timing.",
      goal: "Consistently beat double-barrel rushes with bow movement and peek timing.",
    },
    {
      name: "Build-server raid lab",
      duration: "20 min",
      how: "On a free-build server, put up a standard 2x1 with airlock, then satchel and rocket your own doors — count exactly what each layer costs.",
      goal: "Quote door and wall raid costs from memory before you ever craft boom.",
    },
    {
      name: "Keycard route time trial",
      duration: "15 min",
      how: "On a fresh or low-pop server, rehearse the green-to-blue-to-red route: fuse locations, card doors, recycler stops — time the full lap.",
      goal: "Finish the chain fast enough that you hit Launch Site before the geared players do.",
    },
  ],
  proSettings: [
    {
      player: "Posty",
      team: "Solo (Twitch)",
      notes: "The gold standard for solo-versus-group snowballs — copy his fight selection above all: he only takes fights where the loot justifies the risk.",
    },
    {
      player: "hjune",
      team: "Solo (Twitch)",
      notes: "Elite semi-auto spacing and controlled aggression — copy his retreat rhythm: two taps, reposition, never ego-peek the same angle twice.",
    },
    {
      player: "Trausi",
      team: "Solo (Twitch)",
      notes: "The benchmark for raw AK spray — study how he holds full mags at range and stays disciplined on crosshair placement between sprays.",
    },
    {
      player: "Aloneintokyo",
      team: "Solo (YouTube)",
      notes: "The base-building meta's most creative mind — copy his raid-cost thinking: make every door a math problem and every approach a trap.",
    },
    {
      player: "Wobo",
      team: "Solo (YouTube)",
      notes: "The data channel — copy his raid-cost tables, damage numbers, and mechanic breakdowns; the best raiders run Wobo math, not vibes.",
    },
  ],
  commonMistakes: [
    "Farming with a full kit — depo or die: one unbanked run feeds the guy who grubs you.",
    "Skipping codelocks on outer doors — the most common wipe-ender in the game, bar none.",
    "Hoarding all boom in one loot room — one breach shouldn't end your whole wipe.",
    "Raiding without counting doors — running dry mid-raid turns you into the counter-raid's loot.",
    "Looting a breached base before re-sealing it — open walls are an invitation, not a victory.",
    "Ego-peeking geared players on a bow after you've been seen — prim only wins unseen.",
  ],
  metaNote:
    "On vanilla, the endgame meta is multi-TC compound builds, minicopter and scrap-heli mobility, and stockpiled boom for online raid defenses — while official Primitive and Hardcore modes carved out a parallel meta where bow fights and DB plays decide everything.",
};

export default content;

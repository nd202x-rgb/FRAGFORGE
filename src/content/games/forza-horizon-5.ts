import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "forza-horizon-5",
  overview:
    "Forza Horizon 5 is an open-world racing game set in Mexico where pace is decided long before the race starts — in the tuning menu. Between Horizon Open lobbies, the weekly Trial, and Rivals leaderboards, the competitive scene is a ladder of PI classes and meta builds. Fast drivers win with braking discipline and corner exits, not by holding the throttle longer.",
  skillPillars: [
    "Braking point discipline",
    "Racing line",
    "Tuning and PI budgeting",
    "Clean racing",
    "Throttle control",
    "Slipstreaming",
  ],
  techniques: [
    {
      name: "Trail braking",
      category: "Braking",
      difficulty: 4,
      summary:
        "Brake hard in a straight line, then bleed off the pedal as you turn in — carrying speed deeper without washing wide.",
      steps: [
        "Hit 100% brake before the corner, with the wheels pointing straight.",
        "As you start turning in, smoothly release the brake to about 30-40% pressure.",
        "Aim to be fully off the brake and back to throttle at the apex.",
        "If you run wide, you turned while still braking hard — release earlier, not later.",
      ],
      proTip: "Leaderboard grinders trail brake to rotate the car, not just slow it — the front end bites mid-corner and lets you pick up the throttle a half-second earlier.",
    },
    {
      name: "Outside-inside-outside racing line",
      category: "Racing line",
      difficulty: 1,
      summary:
        "Enter wide, clip the inside apex, let the car run to the outside on exit — the widest possible arc is the fastest possible arc.",
      steps: [
        "Position on the outside edge of the track before turn-in.",
        "Clip the inside apex at the midpoint of the corner — not before, not after.",
        "Let the car drift to the outside edge on exit, using every inch of tarmac.",
        "Chained corners: sacrifice the first apex to nail the exit of the last one onto the straight.",
      ],
      proTip: "Pros treat the driving line assist as a suggestion, not a rule — the true fastest line often skips the painted apex entirely, especially in fast sweepers.",
    },
    {
      name: "Manual with clutch for faster shifts",
      category: "Assists",
      difficulty: 2,
      summary:
        "Switching to manual + clutch is a free half-second per lap — the game's clutch shifts gears noticeably faster than automatic or plain manual.",
      steps: [
        "In Settings, change Shifting to 'Manual w/ Clutch'.",
        "On pad: hold A (clutch) and tap B/X to shift; on wheel: same mapping to buttons.",
        "Practice shifting at the top of each gear until the extra button press is muscle memory.",
        "Upgrade to it in stages — plain manual first, add clutch once gears feel automatic.",
      ],
      proTip: "Every serious Rivals player runs manual + clutch — the shift speed difference is baked into the physics, so you're racing with a built-in handicap until you learn it.",
    },
    {
      name: "Braking without the driving line",
      category: "Braking",
      difficulty: 3,
      summary:
        "Turning off the driving line forces you to learn real braking references — trees, billboards, and shadow lines don't lie, the red paint does.",
      steps: [
        "Pick ONE braking marker per corner: a tree, a house, the start of a kerb.",
        "Brake at the marker and note the result — too early, move the marker 10 metres later.",
        "Only move your marker when you nail the corner twice in a row at the current one.",
        "Relearn markers per class — an S2 car brakes 50+ metres before a B-class car.",
      ],
      proTip: "Rivals grinders never chase the line — they pick fixed markers and shave metres off each lap. That's why their pace survives when tracks get wet or dirty.",
    },
    {
      name: "Meta car and PI budgeting",
      category: "Tuning",
      difficulty: 3,
      summary:
        "Every online lobby is a PI ceiling — the winners arrive in cars that spend the budget on tyres and handling, not a giant engine.",
      steps: [
        "Check the lobby class (A800, S1-900, S2-998) and pick a chassis known to hit that PI cleanly.",
        "Spend budget on race tyres and aero first — grip wins races, power wins drag strips.",
        "Leave PI unused rather than wasting it on cosmetics-heavy upgrades that break the build.",
        "Download top-shared tunes from the community (search by class + road/dirt) until you can build your own.",
      ],
      proTip: "The A-class off-road meta is the Hot Wheels Bone Shaker — every grinder knows it, every lobby bans or mirrors it. Know the meta cars before you queue.",
    },
    {
      name: "Slipstream management",
      category: "Overtaking",
      difficulty: 2,
      summary:
        "The draft in FH5 is strong enough to pass anyone on a straight — but slingshotting into the lead means you now drag the pack behind you.",
      steps: [
        "Tuck directly behind the car ahead 3-4 car lengths before a straight — you gain free top speed.",
        "Pull out of the draft late, not early — an early pull-out just gives your slipstream away.",
        "Pass before the braking zone ends, or tuck back in and try the next straight.",
        "Once you're P1, break the tow: move off-line on straights so P2 can't draft you.",
      ],
      proTip: "Smart online players ride in P2's draft until the final straight — they pass once, at the end, when there's no straight left to get drafted back.",
    },
    {
      name: "Throttle control on RWD powerbuilds",
      category: "Throttle",
      difficulty: 4,
      summary:
        "High-power RWD cars are the fastest in the game but spin the moment you're greedy — feather the throttle, don't floor it.",
      steps: [
        "Roll onto the throttle progressively out of slow corners — never pin it at the apex.",
        "Use the handbrake button lightly to square the car up if the rear steps out.",
        "Shift up early (short-shift) in second and third to keep the engine out of peak torque.",
        "If you're still spinning, your diff settings are wrong — lower deceleration, raise acceleration lock.",
      ],
      proTip: "S2-class leaderboard runs are almost all RWD — the meta is learning to squeeze 90% throttle, not 100%. The last 10% just makes smoke.",
    },
    {
      name: "Rewind discipline",
      category: "Rivals",
      difficulty: 2,
      summary:
        "In Rivals, rewind is a free tool — but every rewind costs you ghost position and sector momentum, so spamming it is slower than it looks.",
      steps: [
        "Rewind BEFORE you fully commit to a bad corner entry — half-deleted is still faster than a crash.",
        "Never rewind a second time to chase a micro-improvement — take the lap and bank it.",
        "On failed sectors, rewind to the previous apex marker, not just before the spin.",
        "In PR stunts and drift zones, rewind resets your approach — use it to re-line the entry, not just the crash.",
      ],
      proTip: "Top Rivals grinders bank a clean lap rather than a perfect one — a P10 ghost beat 20 times beats a P1 ghost you rage-quit chasing.",
    },
    {
      name: "Corner-cut management",
      category: "Clean racing",
      difficulty: 3,
      summary:
        "The game's corner-cut detection is strict in multiplayer — learn where the invisible walls and slow-downs are before they cost you a race.",
      steps: [
        "In any new circuit, free-roam a lap testing where you can safely cross the kerb.",
        "Note which corners ghost you or reset your car — those are the no-go zones in Open.",
        "Cut only where the detection is forgiving: short grass strips and shallow kerbs.",
        "Never cut a corner to make a pass — the pass is cheap, the penalty is a ghost reset.",
      ],
      proTip: "Watch how Rivals ghosts treat the limit lines — the real meta is knowing exactly which 20cm of track you're allowed to use that the painted kerb pretends you're not.",
    },
    {
      name: "Loose-surface braking",
      category: "Offroad",
      difficulty: 3,
      summary:
        "Dirt and cross-country races punish tarmac habits — brake earlier, in a straighter line, and let the car slide rather than fight it.",
      steps: [
        "Move every braking marker 20-30% earlier than tarmac equivalent.",
        "Brake in a straight line — turning while braking on loose surfaces just slides you wide.",
        "Use the handbrake gently to rotate tight hairpins, then throttle-steer out.",
        "Weight the car with throttle lifts mid-corner instead of brake taps.",
      ],
      proTip: "Cross-country specialists run rally tires + softer suspension — the meta is letting the car float through the corner, not planting it like a road car.",
    },
    {
      name: "Draft positioning in Open lobbies",
      category: "Clean racing",
      difficulty: 2,
      summary:
        "Horizon Open is contact racing — positioning beats pace. The trick is being un-rammable, not just fast.",
      steps: [
        "Never race side-by-side into a corner — back out before they drift into you.",
        "Take the inside line on entry so rammers have to brake to hit you — they usually won't.",
        "Give up P1 into turn one rather than fight a dirty line — you can draft back past on the straight.",
        "If someone dive-bombs you, ghost through the wall-ride and retake position cleanly after.",
      ],
      proTip: "The fastest Open racers lose turn one on purpose — rammers eliminate each other, and clean P2-to-P1 draft passes beat door-to-door fighting every race.",
    },
  ],
  pvp: {
    intro:
      "Forza Horizon 5 PvP is a build-vs-build contest disguised as a driving game — the car you bring decides half the result before the lights go out. Ranked progression lives in the Weekly Playlist and Series points, but the real skill ladder is Horizon Open, the Trial, and Rivals leaderboards. What separates the leaderboards from the lobbies is consistency: the fast guys are fast every lap, not just the laps they don't crash.",
    modes: [
      {
        mode: "Horizon Open (custom online racing)",
        advice: [
          "Check the class BEFORE the race — bring your strongest meta car for that PI ceiling, not your favourite.",
          "Treat turn one as a warzone: take the inside line, cover your exit, expect contact.",
          "Draft P2 deliberately until the final straight — one clean pass beats three dirty ones.",
          "Don't try to win from a spin — a reset to P8 costs less than a wall-ride fight you can't win.",
          "Play the weekly class playlists to earn the unlocks — the meta car you need often sits behind a challenge.",
        ],
      },
      {
        mode: "The Trial (weekly seasonal championship)",
        advice: [
          "Practice the three trial races in Rivals mode first — know which corner is the car killer on each track.",
          "Bring the meta car for the class; a bad trial car loses points before the flag drops.",
          "Chase clean second-places over risky firsts — consistent top-3 across three races wins the trial.",
          "Watch the weather: wet trials change every braking marker — slow down 10% and finish clean.",
          "Ram nobody — the trial is co-op points, and one dirty move can cost the whole team the championship.",
        ],
      },
      {
        mode: "The Eliminator (battle royale)",
        advice: [
          "Prioritise car level over position early — a high-level car beats a good start every time.",
          "Watch the fog, not the minimap — players push into the circle early and get eliminated free.",
          "Challenge only when your car is competitive — a level-2-vs-level-6 challenge is a donation.",
          "Use the final-stage 1v1 format: learn the final circle arena so you know the fast lines.",
          "Sit mid-pack in head-to-heads — top-3 finishes earn more than P10 gambles.",
        ],
      },
    ],
    counterPlay: [
      "Against a rammer: take the inside line, brake earlier, and let them slide wide — they crash, you finish.",
      "Against a powerbuild RWD S2 car: race tight and technical — they spin on corners where your grippy AWD doesn't.",
      "Against a meta Bone Shaker in A-class: either mirror the meta or race a different class — fighting it with a home-built car is a lost cause.",
      "Against a corner-cutter: hold your line and let the ghost-detection penalise them — their lap is slower after the reset.",
      "Against a fast qualifier who rams turn one: drop to P2, ride the draft, and pass them at the end — they always overdrive the last lap.",
    ],
  },
  drills: [
    {
      name: "Goliath consistency run",
      duration: "15 min",
      how: "Load The Goliath in Rivals and run three laps back-to-back with rewind OFF. Bank your best lap and don't restart the session.",
      goal: "Three clean laps within 2 seconds of each other — the goal is repeatability, not one hero lap.",
    },
    {
      name: "Rivals ladder climb",
      duration: "20 min",
      how: "Pick one S1-class road race in Rivals. Beat the ghost 5 positions above you, bank the lap, repeat — move up one rival at a time.",
      goal: "A new personal-best rival time that survives, not a lap you had to rewind 12 times to keep.",
    },
    {
      name: "Manual + clutch muscle memory",
      duration: "10 min",
      how: "Free roam the Horizon Festival strip and motorway. Drive for 10 minutes doing only gear shifts — every upshift and downshift on cue.",
      goal: "Shifting feels automatic enough that you never look down mid-race again.",
    },
    {
      name: "Trial dress rehearsal",
      duration: "15 min",
      how: "Run the current weekly Trial in single-player first. Note which corner causes the most damage and which AI is fastest — that's who you beat in the real event.",
      goal: "You can podium the solo Trial before queuing the real one — the car and track are solved.",
    },
    {
      name: "Draft practice on the motorway",
      duration: "10 min",
      how: "In Open free roam or a custom race, practice tucking into another car's slipstream at high speed, then pulling out cleanly to pass at the end of the straight.",
      goal: "A clean slipstream pass with no contact — judged by the pass happening before the braking zone ends.",
    },
  ],
  proSettings: [
    {
      player: "Don Joewon Song",
      team: "Independent",
      notes: "The Forza tuning godfather — his leaderboard-tuning method is the benchmark. Copy his approach of spending PI on tyres and aero first, then power; his shared tunes dominate every class.",
    },
    {
      player: "Tachyon",
      team: "Independent",
      notes: "FH5's top-speed and drag record holder — he solves builds the way speedrunners solve routes. Copy his obsession with tyre compounds and gear ratios over raw horsepower numbers.",
    },
    {
      player: "Nalak28",
      team: "Independent",
      notes: "A perennial Rivals leaderboard grinder — he banks clean laps and climbs rather than chasing one hero run. Copy his rival-by-rival climbing method and his rewind discipline.",
    },
    {
      player: "Sepi SP4",
      team: "Independent",
      notes: "The community's drift and build specialist — his slide mechanics and wheel setup guides are the reference. Copy his soft-suspension, low-grip rear-end approach to dirt and drift events.",
    },
    {
      player: "HokiHoshi",
      team: "Independent",
      notes: "The go-to source for FH5 car lists and class meta — his per-class best-car breakdowns decide what's in every ranked lobby. Copy his method of testing the same track in multiple builds to find the sleeper pick.",
    },
  ],
  commonMistakes: [
    "Bringing a max-PI build that spent everything on power — a grippy under-PI car beats an overpowered brick every race.",
    "Leaving the driving line on past learning stage — it hides your real braking errors and makes you slow in every new lobby.",
    "Full-throttle out of every corner on RWD — the spin-out that loses you 5 positions is always the 10% of throttle you didn't need.",
    "Fighting for turn one every race — rammers eliminate themselves; clean P2 finishes more points than a crashed-out P1.",
    "Ignoring the tune for the class — a B-class dirt build on an A-class road race loses before the first corner.",
    "Rewind-spamming a single Rivals lap — a banked top-50 lap is worth more than a rage-quit top-5 attempt.",
  ],
  metaNote:
    "The meta is settled and stale: AWD swaps dominate every class ceiling, the Hot Wheels Bone Shaker is the A-class off-road king, and S2-class leaderboards are almost all RWD powerbuilds. Lobby results are decided by PI budgeting, not driving talent.",
};

export default content;

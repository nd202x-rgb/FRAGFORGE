import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "valorant",
  overview:
    "Valorant is a 5v5 tactical shooter where crisp gunplay meets agent utility. Unlike pure aim games, rounds are won by stacking small advantages — map control, ability timing, and economy — before the first bullet is fired. Ranked play is decided less by who flicks harder and more by who makes fewer repeatable mistakes.",
  skillPillars: [
    "Crosshair placement",
    "Counter-strafing",
    "Utility timing",
    "Economy management",
    "Trade fragging",
    "Map control",
  ],
  techniques: [
    {
      name: "Counter-strafe shooting",
      category: "Aim",
      difficulty: 3,
      summary:
        "Tap the opposite movement key to stop instantly, then fire — your first bullet is only accurate when your velocity is zero.",
      steps: [
        "Strafe left with A, then tap D once the instant you want to shoot.",
        "Wait one tick (~100ms) for full accuracy — the gun sways visually first.",
        "Fire a 1–2 bullet burst, then strafe again immediately.",
        "Chain it: strafe, counter-strafe, burst, repeat while moving between cover.",
      ],
      proTip: "Radiant players counter-strafe on rhythm — practice the A-D-tap metronome in the Range until it's muscle memory, not thought.",
    },
    {
      name: "Pre-aim crosshair placement",
      category: "Aim",
      difficulty: 2,
      summary:
        "Keep your crosshair at head height where an enemy will appear — never on the ground or mid-wall.",
      steps: [
        "Learn head height on every map — most angles sit at the same height.",
        "Clear corners one at a time, crosshair hugging the edge you're about to see.",
        "Move your crosshair BEFORE you peek, not during — the peek should need only a micro-flick.",
      ],
      proTip: "Watch any TenZ VOD: his crosshair is already on the enemy's head before they appear. Placement beats reaction time every single fight.",
    },
    {
      name: "Jiggle peek for info",
      category: "Movement",
      difficulty: 2,
      summary:
        "Tap a sliver of the angle to bait shots and confirm enemy positions without committing to a fight.",
      steps: [
        "Stand close to the corner edge so your shoulder shows for ~0.2s.",
        "Tap A (or D) to show shoulder, immediately counter-strafe back behind cover.",
        "Listen for the enemy shot — now you know the angle is held and can flash through it.",
      ],
      proTip: "Pros jiggle the same angle twice: first to bait the shot, second to swing on the reload timing.",
    },
    {
      name: "Trade fragging discipline",
      category: "Macro",
      difficulty: 2,
      summary:
        "Never let a teammate die alone — position one step behind them so their death becomes your kill.",
      steps: [
        "Stay within one strafe of your entry player, crosshair on their peek angle.",
        "When they swing and die, YOU swing instantly — the enemy is reloading or readjusting.",
        "If your entry lives, hold the second angle they can't cover.",
      ],
      proTip: "Fnatic built a dynasty on spacing: every teammate dying traded means you are never down a man for free.",
    },
    {
      name: "Off-angle holding",
      category: "Positioning",
      difficulty: 3,
      summary:
        "Hold where the enemy's crosshair won't already be — the second-most-common angle, not the obvious one.",
      steps: [
        "Identify the standard clear order for your site (most players clear left-to-right).",
        "Position one step off the most common angle so enemies must flick to you.",
        "Take ONE kill, then reposition — off-angles lose value once seen.",
      ],
      proTip: "Sentinels' Zekken famously rotates between two off-angles mid-hold: first kill from the rafter, second from the floor.",
    },
    {
      name: "Utility-dump executes",
      category: "Utility",
      difficulty: 4,
      summary:
        "Layer smokes, flashes and recon in a 3-second window so the site holder faces a wall of utility, not a fair fight.",
      steps: [
        "Call the exec 5 seconds early so teammates stage their utility.",
        "Smoke the deepest sightlines FIRST, then flash over the smoke, then recon/drone through.",
        "Entry swings on the flash pop — never before, never 2 seconds late.",
        "Post-plant: reposition to crossfire angles and hold for retake utility.",
      ],
      proTip: "Watch how LOUD's 2022 retakes stacked Breach flash + Skye flash — a blinded enemy can't punish a dry peek.",
    },
    {
      name: "Economy forcing rules",
      category: "Economy",
      difficulty: 2,
      summary:
        "Know exactly when to full-buy, force, or eco — bad buys lose 3 rounds, not 1.",
      steps: [
        "Round 2 after a pistol win: full buy rifles + light armor, never just SMGs.",
        "Check team's combined credits — if the whole team can't buy, call 'eco' together.",
        "On eco, buy utility only (flashes under 400) and play for picks with a Sheriff.",
        "Never half-buy after a lost pistol — two ecos are cheaper than one botched force.",
      ],
      proTip: "Pro teams call 'glass cannon' rounds deliberately — full rifle, no armor — when the map gives you free first contact.",
    },
    {
      name: "Defaulting for map control",
      category: "Macro",
      difficulty: 4,
      summary:
        "Spread the map, take space slowly, and punish defenders who peek for info — the ranked-killer macro.",
      steps: [
        "Spread 2-1-2 or 3-2 across lanes instead of grouping 5.",
        "Each group takes shallow map control and holds — don't push past what you can trade.",
        "When a defender over-peeks for info anywhere, collapse on that site instantly.",
        "With 30s left, group and execute onto the weaker site.",
      ],
      proTip: "Defaulting is boring by design — you are farming defender mistakes. Pros call it 'letting them make the first error.'",
    },
    {
      name: "Spike denial timing",
      category: "Utility",
      difficulty: 3,
      summary:
        "In post-plant, your utility isn't for kills — it's to make the defuse cost the enemy their life or the round.",
      steps: [
        "Plant for your post-plant position (e.g., default for long on Ascent A).",
        "Hold one piece of damage utility (molly, shock dart) for the tap sound.",
        "The moment you hear defuse start, dump utility on the spike — don't peek first.",
        "Retreat to safety and repeat — the clock is your teammate.",
      ],
      proTip: "Viper players win rounds from spawn: a single Snake Bite on a tapped spike forces a stick or a lost round.",
    },
    {
      name: "Fast rotates off contact",
      category: "Macro",
      difficulty: 3,
      summary:
        "The moment your teammates make contact on one site, the other site is already emptying — rotate before the fight ends.",
      steps: [
        "Anchor a site alone? If two enemies show mid, call it and start drifting.",
        "When the execute begins elsewhere, sprint — don't lurk slowly and arrive late.",
        "Rotate THROUGH spawn or safe lanes, never through contested space alone.",
      ],
      proTip: "Watch pro retakes: the third player is usually already moving before the bomb plants. Late rotates lose retakes more than bad aim.",
    },
    {
      name: "Jump peek baiting",
      category: "Movement",
      difficulty: 2,
      summary:
        "Show your head over a corner without exposing your body — bait Operator shots and confirm positions for free.",
      steps: [
        "Stand where only your head clears the corner edge (usually a box or ledge).",
        "Tap jump once — your head appears for a fraction of a second.",
        "If the Op fires, count the 4–5s rechamber and swing or re-peek wide.",
      ],
      proTip: "Aspas baits the Op shot, then IMMEDIATELY re-peeks the same angle — most AWPers whiff the follow-up because they're mentally committed to the first shot.",
    },
  ],
  pvp: {
    intro:
      "Valorant PvP is a game of information and timing disguised as an aim contest. Every rank jump — Iron to Diamond, Diamond to Immortal — comes from removing one category of mistakes, not adding a new trick. The dominant pattern in ranked is dry-peeking contested angles; the dominant counter is disciplined trading.",
    modes: [
      {
        mode: "Ranked solo queue",
        advice: [
          "Dodge agent-select griefing — a bad team comp costs the match before round 1.",
          "In agent select, hover a flex pick (fill) and pick last if your team looks lost.",
          "Mute tilted teammates instantly; comms only matter for enemy positions and timing.",
          "Play for the trade, not the clutch — ranked punishes hero plays far harder than it rewards them.",
          "Instalock your best agent on attack; fill smokes on defense if nobody else does.",
        ],
      },
      {
        mode: "5-stack / Premier",
        advice: [
          "Assign roles before queue: entry, second entry, lurk, anchor, flex — not just agents.",
          "Default every attack half until you read the enemy's defensive habits.",
          "Designate ONE lurker per round and rotate them — predictable lurks get punished.",
          "Debrief between halves: what utility beat you, who carried their site, where to exploit.",
        ],
      },
      {
        mode: "Unrated / Swiftplay warm-up",
        advice: [
          "Use these for mechanics only: practice new agents, lineups, or counter-strafing rhythm.",
          "Play aggressively — treat every round as a mechanics rep, not a win.",
          "Mirror your ranked agent pool: practicing Jett won't help if you play Cypher ranked.",
        ],
      },
    ],
    counterPlay: [
      "Against a dry-peeker: pre-aim the angle, hold ONE position, and let them walk into it — patience beats reaction.",
      "Against a lurker: anchor deep, don't chase info kills, and wait for their plant timing to collapse.",
      "Against heavy utility execs: play off-site until the dump ends, then retake as a unit with recon.",
      "Against eco rounds: take long fights only, deny them close-range freebies, and respect the Sheriff one-tap.",
      "Against Operator users: wide-swing their off-angles, jump-peek to bait the shot, or just don't fight their lane.",
    ],
  },
  drills: [
    {
      name: "The Range aim warmup",
      duration: "10 min",
      how: "Eliminate 100 bots on Medium, then 30 on Hard, using ONLY headshots — focus on first-bullet accuracy, not speed.",
      goal: "Consistent 25+ on Hard bots before queueing ranked.",
    },
    {
      name: "Counter-strafe metronome",
      duration: "5 min",
      how: "In a custom or the Range, strafe left-right continuously and tap the opposite key each direction, firing one bullet at each stop. No misses allowed.",
      goal: "Your shots land in a straight line on the wall while you're visibly moving.",
    },
    {
      name: "Deathmatch discipline",
      duration: "15 min",
      how: "Play 2 deathmatches with a rule: only take fights from crosshair-placement, never flick. If you must flick, disengage.",
      goal: "Kill 20+ per DM without a single desperation flick — retrain placement-first habits.",
    },
    {
      name: "Retake simulator",
      duration: "10 min",
      how: "Custom game: plant spike at a site, then retake it solo vs easy bots with full utility. Practice the utility order every time.",
      goal: "Same retake sequence every attempt until it feels boring — then add pressure.",
    },
    {
      name: "VOD review — your own deaths",
      duration: "10 min",
      how: "Record a ranked game; watch only your deaths. For each, ask: bad peek, bad trade spacing, or bad timing?",
      goal: "Identify which single mistake type killed you most — that's your next week's drill.",
    },
  ],
  proSettings: [
    {
      player: "TenZ",
      team: "Sentinels",
      notes: "The aim king's fundamentals: ~800 DPI, 0.28–0.32 sens, pure wrist aim, minimal crosshair movement — copy his placement-first style, not just numbers.",
    },
    {
      player: "aspas",
      team: "Leviatán",
      notes: "The greatest entry fragger alive — low sens (~0.4 @ 800), immaculate movement, always takes the FIRST fight of a round. Study his pathing on Bind.",
    },
    {
      player: "Chronicle",
      team: "Fnatic",
      notes: "Greatest support/flex ever — every utility decision is pre-planned. Copy his flash timings and his 'play for the trade, not the hero' discipline.",
    },
    {
      player: "Derke",
      team: "Team Vitality",
      notes: "Aggressive but never stupid: his wide swings punish predictable defenders. Watch how he angles before swinging, not just the swing itself.",
    },
    {
      player: "zekken",
      team: "Sentinels",
      notes: "Youngest superstar — his off-angle rotation mid-hold and clutch patience show that positioning beats raw aim at every rank.",
    },
  ],
  commonMistakes: [
    "Dry-peeking the same angle repeatedly — a held angle only needs one free kill to tilt you.",
    "Forcing a buy every round — two coordinated ecos beat three botched forces.",
    "Chasing kills instead of trades — dying alone in a 4v5 throws rounds pros would never lose.",
    "Ignoring utility timing — a flash 0.5s late is just a wasted 250 credits.",
    "Standing still to aim — if you're not strafing between shots, you're a free target.",
    "Rotating after the fight ends — arrive before the plant or don't bother; late rotates feed.",
  ],
  metaNote:
    "Post-patch balance favors disciplined execs over dry aggression — coordinated utility and spike denial win more rounds than hero plays in the current VCT season.",
};

export default content;

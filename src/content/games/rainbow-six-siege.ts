import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "rainbow-six-siege",
  overview:
    "Rainbow Six Siege is a 5v5 tactical shooter where destruction is the strategy — walls, floors and hatches are all angles waiting to be opened. Rounds are won on intel and timing before anyone takes a gunfight: drones, cams and sound decide which fights are fair and which are executions. Ranked is less about who aims harder and more about who walks into fewer pre-aimed angles.",
  skillPillars: [
    "Intel gathering",
    "Crosshair placement",
    "Map and vertical knowledge",
    "Sound awareness",
    "Trade spacing",
    "Utility timing",
  ],
  techniques: [
    {
      name: "Drone-first clearing",
      category: "Intel",
      difficulty: 2,
      summary:
        "Your drone is a free life — clear every room with it before your body enters, and you'll win fights before they start.",
      steps: [
        "During prep phase, park your drone near where you plan to enter — not in the objective where it gets shot.",
        "Before pushing a floor, drive your second drone through your route and ping defenders.",
        "Check the room, then the room past it — a clear room now means nothing if the next one holds an anchor.",
        "Once confirmed, swing instantly on live intel — stale info is a guess, fresh info is a kill.",
      ],
      proTip: "Watch Canadian's old DarkZero VODs: he spent 20 seconds droning to save a 2-second fight. Un-sexy intel wins Siege.",
    },
    {
      name: "Quick peeking (Beaulo peek)",
      category: "Movement",
      difficulty: 4,
      summary:
        "Lean out and back in one fluid motion — the enemy sees a pixel for a fraction of a second while you see their whole position.",
      steps: [
        "Hold E-peek, strafe out, fire one burst, then strafe back while releasing the lean.",
        "Chain both leans (Q-E rhythm) while strafing to make your head a moving, minimal target.",
        "Peek for information first — one quick peek to locate, second peek to kill.",
        "Never quick-peek the same angle twice in a row — good players pre-fire the repeat.",
      ],
      proTip: "Beaulo made this famous because he peeks for info, not kills — the second peek, on known head position, is where the kill happens.",
    },
    {
      name: "Prefiring common angles",
      category: "Aim",
      difficulty: 3,
      summary:
        "If you know where a head should be, shoot before you see it — Siege's TTK is so low that the first accurate bullet wins.",
      steps: [
        "Learn the 2-3 spots defenders hold on each site (head-glitch, door frame, rotate edge).",
        "As you swing the door, fire at head level at the angle — not at the visible enemy, at the expected one.",
        "Burst 3-5 rounds while continuing your strafe — standing still to spray gets you traded.",
        "If the spot is empty, you've lost nothing; if held, you've won the fight on frame one.",
      ],
      proTip: "Pros pre-fire rotate holes and pixel angles constantly — in Siege you rarely get a second shot, so the first must be scary.",
    },
    {
      name: "Head-level crosshair discipline",
      category: "Aim",
      difficulty: 1,
      summary:
        "Siege has one of the fastest headshot TTKs in shooters — one bullet to the head kills, so your crosshair lives at head height.",
      steps: [
        "Hold your crosshair at standing head height on approach, crouch head height when defenders play low.",
        "Slice doorways: keep the crosshair on the edge of the frame where a head appears, not the door center.",
        "Adjust for elevation — stairs and hatches mean enemies appear above and below, not just level.",
        "Reset to head height after every action: reloads, drone pulls, sprint transitions.",
      ],
      proTip: "Shaiiko's aim looks 'boring' because his crosshair never leaves head level — the flick you see is 5 degrees, not 50.",
    },
    {
      name: "Vertical play (soft-floor pressure)",
      category: "Macro",
      difficulty: 4,
      summary:
        "Floors are made of paper — attackers can kill anchors from above or below, and defenders can do the same with C4.",
      steps: [
        "Learn which sites have destructible floors/ceilings (most bomb sites do) and which beams are safe.",
        "Open the floor above site with a shotgun, Buck's Skeleton Key, or Sledge's hammer — don't fight through doors.",
        "Drone first to find anchors under your feet, then shoot down through the soft floor.",
        "On defense, hold a C4 below the common plant spot and listen for the plant animation sound.",
      ],
      proTip: "Buck and Sledge exist because vertical pressure wins rounds without a fair fight — pros open floors before they open doors.",
    },
    {
      name: "Trade spacing",
      category: "Macro",
      difficulty: 2,
      summary:
        "Siege punishes solo deaths harder than any shooter — 4v5 with 90 seconds left is nearly a lost round, so every death must be tradeable.",
      steps: [
        "Push one step behind your teammate, crosshair on the angle they're about to expose.",
        "When they get swung on, you swing within half a second — the killer is mid-reload or repositioning.",
        "Never push the same doorway as two teammates — you can't trade through a human wall.",
        "On defense, play pairs: one roamer, one anchor covering the same lane from two angles.",
      ],
      proTip: "Pro sites are built around crossfires — two defenders holding angles that cover each other's death. Solo holds lose pro rounds.",
    },
    {
      name: "Rotate hole discipline",
      category: "Macro",
      difficulty: 2,
      summary:
        "Rotation holes are the difference between a site that holds and one that collapses — defenders must move between bomb sites freely.",
      steps: [
        "In prep phase, open rotates between A and B sites with shotguns, impacts or the bailiff — never reinforce between sites.",
        "Feet-height rotates let you crouch through; head-height rotates give you a sightline when needed.",
        "NEVER reinforce the wall between the two bombsites — you've walled yourself out of the retake.",
        "Attackers: use the defenders' rotates against them — a rotate hole is a flank route late-round.",
      ],
      proTip: "The fastest way to spot a low-rank lobby: fully reinforced bombsites. Pros open the map; rookies seal it shut.",
    },
    {
      name: "Utility sequencing (burning ADS and shields)",
      category: "Utility",
      difficulty: 3,
      summary:
        "Defenders stack Jäger ADS, Wamai magnets and bulletproof utility — attackers who dump projectiles correctly strip all of it before the execute.",
      steps: [
        "Drone the site first to count defensive utility: ADS discs, magnets, shields, Evil Eyes.",
        "Throw cheap utility (flashbangs, frags) to burn ADS charges — each ADS eats one projectile.",
        "Bring the counter-picks: Thatcher EMPs, Twitch/Brava drones, or Ash/Zofia rounds to delete utility.",
        "Only swing after the site is stripped — entering into a full utility stack is feeding.",
      ],
      proTip: "Pro executes run on a script: EMP, burn ADS, destroy shield, flash, enter. Ranked players skip to 'enter' and wonder why they die.",
    },
    {
      name: "Plant denial and retake timing",
      category: "Utility",
      difficulty: 3,
      summary:
        "The defuser is the objective, not the kills — defenders win post-plant by making the plant cost the attacker everything.",
      steps: [
        "Save one denial tool for post-plant: C4, Smoke's gas, Echo's bursts, or a nitro from below.",
        "Listen for the plant beep — that's your cue, not the sightline. Sound triggers the denial.",
        "If the plant lands, don't panic-peek the defuser — force the planter off with utility first.",
        "Attackers: plant for YOUR post-plant (default spots are pre-aimed; plant for your cover position).",
      ],
      proTip: "Smoke players win rounds from two rooms away — a single gas canister on a stick denies the defuse without showing a pixel.",
    },
    {
      name: "Sound whoring",
      category: "Intel",
      difficulty: 3,
      summary:
        "Siege's audio is a legal wallhack — footsteps, barbed wire, breaching and reloads all tell you where the next fight is.",
      steps: [
        "Play with a headset and turn off music — Siege is unplayable on speakers at rank.",
        "Learn the audio cues: rappel thumps, barricade rips, barbed wire rustle, drone hum, plant beep.",
        "Stand still to listen before pushing — sprinting deafens you to everything but yourself.",
        "Crouch-walk and slow-walk when within 10 meters of enemies — sound sells your position first.",
      ],
      proTip: "Anchors like BDS's defense win rounds off a single footstep — they hear the push, call it, and the crossfire is set before the door opens.",
    },
    {
      name: "Roam timing (waste their clock)",
      category: "Macro",
      difficulty: 4,
      summary:
        "A roamer's job isn't kills — it's making attackers spend 60 seconds and two drones clearing space you're not even in.",
      steps: [
        "Pick a roam that stalls the attacker's route, not one that hides you in a corner forever.",
        "Show presence early — one gunshot or a spotted drone makes the whole team drone cautiously.",
        "Disengage after contact; a roamer who dies for one kill wasted 30 seconds of their own team's setup.",
        "Return to site before the final execute — a dead roamer or a late returner loses the retake numbers.",
      ],
      proTip: "The best roamers get kills by accident — their real damage is the 45 seconds attackers burned. Judge your roam by the clock, not the scoreboard.",
    },
    {
      name: "Cam and drone denial",
      category: "Intel",
      difficulty: 1,
      summary:
        "Intel works both ways — shooting default cams and drones starves defenders of the information they need to hold angles on you.",
      steps: [
        "Learn default camera locations on every ranked map — they're static and take one bullet.",
        "Shoot cams on your approach route FIRST, before you're standing in their view.",
        "On defense, hunt drones in prep phase — every dead drone is a blind entry later.",
        "Mute and Mozzie players: place jammers and pests on drone entry lanes, not in the objective itself.",
      ],
      proTip: "Pros treat prep-phase drones like eco rounds — losing both drones is the attacker's version of a botched buy.",
    },
  ],
  pvp: {
    intro:
      "Siege PvP is an information war wearing a shooter's clothes. What separates ranks isn't reaction time — it's who walked into a pre-aimed angle because they skipped the drone. Every rank jump comes from removing one category of free deaths: un-droned pushes, solo entries, silent kills off missed sound cues.",
    modes: [
      {
        mode: "Ranked solo queue",
        advice: [
          "Ban phase matters: ban the defender your team can't counter (usually a denial op like Azami or Fenrir), not whoever is 'annoying'.",
          "Drone for your team even when you want to entry — a dead teammate with two drones out is worth more than your one kill.",
          "Call sites, not 'they're there' — precise callouts (Top White, Blue Stairs) win trades; vague ones waste them.",
          "Mute instantly, never argue — a tilted teammate still soaks bullets if you play off them.",
          "Fill roles in operator select: if nobody picks hard breach, you pick it — a round lost to a reinforced wall is unwinnable.",
        ],
      },
      {
        mode: "5-stack / competitive",
        advice: [
          "Assign roles before queue: IGL, entry, support, flex, roam — operators follow roles, not the reverse.",
          "Default your attack halves: spread, drone, and collapse on reads instead of calling execs blind.",
          "Script your executes: EMP, ADS burn, flash, swing — assign each step to a player and a timing.",
          "Rotate your roamer per round — predictable roam paths get droned out and farmed.",
        ],
      },
      {
        mode: "Standard / Quick Match warm-up",
        advice: [
          "Use unranked-style modes to learn new operators' recoil and gadget timing, not to pad K/D.",
          "Play the same operator pool you queue ranked with — reps on ops you don't play are wasted reps.",
          "Practice your prep phase: park drones, open rotates, set your defenses on a real timer.",
        ],
      },
    ],
    counterPlay: [
      "Against roam-heavy teams: drone top-down and clear floor by floor — never chase a roamer; cut their return path instead.",
      "Against spawn peeks: drone your spawn approach in prep, pre-aim common peek windows, or just take the long route.",
      "Against stacked ADS/magnet utility: burn charges with flashbangs before throwing the utility that matters, or bring Thatcher and delete it all.",
      "Against anchors holding pixel angles: open the floor or wall behind them — don't fight a head-glitch head-on.",
      "Against shield operators: don't contest the front — explosives, crossfires and vertical shots beat a shield face-to-face.",
    ],
  },
  drills: [
    {
      name: "T-Hunt headshot reps",
      duration: "10 min",
      how: "Run Terrorist Hunt (Training Grounds) on a map you play ranked — headshots only, your ranked operator and gun. Push fast, no camping.",
      goal: "Clear runs with consistent head-level spray control before queueing.",
    },
    {
      name: "Shooting Range recoil walls",
      duration: "5 min",
      how: "In the in-game Shooting Range, mag-dump your ranked guns at the wall from 15m — learn each recoil pattern and pull against it.",
      goal: "Tight groupings at head height without over-correcting; Siege kills in 3-4 bullets.",
    },
    {
      name: "Drone-route reps",
      duration: "10 min",
      how: "Custom game, attack side: drone a full clear of one bomb site and call every defender position out loud, then verify with cams.",
      goal: "A complete site clear in under 40 seconds — speed and accuracy both.",
    },
    {
      name: "Vertical pressure practice",
      duration: "10 min",
      how: "Custom game on Oregon or Clubhouse: open the floor above site with Buck/Sledge, drone for anchors, and learn which beams are safe to stand on.",
      goal: "Know the destructible zones and safe beams on your top 3 ranked maps.",
    },
    {
      name: "Death replay review",
      duration: "10 min",
      how: "Record a ranked game and watch only your deaths. For each one: was it no drone, bad angle, no trade, or missed sound cue?",
      goal: "Find your most common death type — that's the technique to drill next week.",
    },
  ],
  proSettings: [
    {
      player: "Beaulo",
      team: "DarkZero (ex-TSM)",
      notes: "The quick-peek king — copy his fluid lean-strafe rhythm and his info-first peeks, not his (famously high) sensitivity numbers.",
    },
    {
      player: "Shaiiko",
      team: "Team BDS",
      notes: "The cleanest anchor aim in the game — his crosshair never leaves head level. Study how he holds angles with micro-adjustments, not flicks.",
    },
    {
      player: "Spoit",
      team: "G2 Esports",
      notes: "Aggressive entry done right — watch how he converts droned intel into instant swings. The lesson is the timing, not the aggression.",
    },
    {
      player: "Canadian",
      team: "DarkZero (ex-SSG)",
      notes: "SI 2020 (SSG) and SI 2022 (DarkZero) champion IGL — the greatest shot-calling mind in the game. His drone discipline and round pacing show that Siege is won in the 40 seconds before the gunfight.",
    },
    {
      player: "Paluh",
      team: "Team Liquid",
      notes: "Brazilian superstar and clutch player — study his post-plant patience and how he plays time and position instead of chasing kills.",
    },
  ],
  commonMistakes: [
    "Pushing without droning — every un-droned room is a coin flip, and Siege coins kill you in one bullet.",
    "Reinforcing between the two bombsites — you've walled your own team out of the retake.",
    "Peeking the same angle repeatedly — in Siege, a held angle only needs one headshot to end you.",
    "Roaming too far or returning late — a roamer who arrives after the plant is a 4v5 you chose.",
    "Getting both drones destroyed in prep phase — that's playing the whole round on half the intel.",
    "Chasing kills instead of playing the defuser — the objective ends rounds, the scoreboard doesn't.",
  ],
  metaNote:
    "The current competitive meta rewards intel stacking and vertical pressure — dry aggression gets farmed by crossfires, and coordinated executes with burn utility beat mechanical entries at every level of ranked and pro play.",
};

export default content;

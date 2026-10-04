import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "cs2",
  overview:
    "Counter-Strike 2 is a 5v5 tactical shooter played in 12-round halves where economy, utility and positioning decide rounds before the first duel happens. Its competitive ladder runs through Premier matchmaking and FACEIT, and the ranked gap is almost never raw aim — it's discipline: peek choices, trade spacing, and buy-round decisions. Whoever throws away fewer rounds wins.",
  skillPillars: [
    "Crosshair placement",
    "Strafe-stopping (counter-strafe)",
    "Spray control",
    "Utility usage",
    "Economy management",
    "Trade fragging",
  ],
  techniques: [
    {
      name: "Counter-strafe stopping",
      category: "Aim",
      difficulty: 3,
      summary:
        "Tap the opposite movement key to halt instantly — CS2's first bullet is only accurate when your velocity hits zero, and the strafe-stop is faster than letting go of the key.",
      steps: [
        "Strafe with A, then tap D the instant you want to shoot.",
        "Fire the moment your character stops — don't wait for a visual confirm.",
        "Fire a 2–3 bullet burst or a one-tap, then strafe again immediately.",
        "Chain it across angles: strafe, stop, shoot, strafe — never stand still.",
      ],
      proTip: "CS2's subtick makes the stop window tighter than CS:GO — drill the rhythm in aim_botz until your fingers do it before your brain does.",
    },
    {
      name: "Spray control and spray transfer",
      category: "Aim",
      difficulty: 4,
      summary:
        "The AK's first ~10 bullets climb vertically then kick right — pull down, then down-left, and you can hose a site entry instead of tap-firing into a 3v1.",
      steps: [
        "Learn the AK pattern on a wall in Recoil Master: it goes up, then right, then left.",
        "Pull down for the first 8–10 bullets, then compensate left as it kicks right.",
        "Spray only inside ~15 meters or vs a committed plant/defuse — burst at range.",
        "For a transfer: finish the first target, then drag the spray through the second instead of resetting.",
      ],
      proTip: "Watch donk entry — he doesn't reset his spray between kills, he drags through targets. The second kill is free if the spray is already under control.",
    },
    {
      name: "XANTARES peek (wide swing)",
      category: "Movement",
      difficulty: 3,
      summary:
        "A full-speed wide swing blows up defenders holding a tight angle — their crosshair is placed for a shoulder, and you arrive a meter deeper than they aimed.",
      steps: [
        "Identify a held angle you must clear — an AWPer or a rifler on a default spot.",
        "Sprint wide past the angle's edge, full commit — no hesitation mid-swing.",
        "Counter-strafe to a stop a step beyond where the enemy aimed, then fire.",
        "Use it sparingly: once the enemy knows you wide-swing, they hold deeper.",
      ],
      proTip: "It's named after XANTARES for a reason — he swings so far out that opponents' first bullet lands where a normal peek would be. Commit fully or don't do it.",
    },
    {
      name: "Jiggle peek / shoulder bait",
      category: "Movement",
      difficulty: 2,
      summary:
        "Show a sliver of shoulder at a corner to bait an AWP shot or confirm a hold — free info with zero commitment.",
      steps: [
        "Stand close to the corner so your shoulder exposes for a fraction of a second.",
        "Tap out and immediately strafe back behind cover.",
        "Listen for the shot — a whiffed AWP means a 1.5s window to re-aggress.",
        "Alternate: jiggle, jiggle, then wide-swing on the third contact when they relax.",
      ],
      proTip: "s1mple baits the shot, then instantly re-peeks the SAME angle — most AWPers mentally commit to the first shot and are late scoping back in.",
    },
    {
      name: "Pre-aiming and pre-firing common angles",
      category: "Aim",
      difficulty: 2,
      summary:
        "Keep your crosshair at head height on the exact pixel an enemy appears — the peek should need a micro-adjustment, not a flick.",
      steps: [
        "Learn the standard hold spots per map (Mirage stairs, Inferno pit, Anubis mid doors).",
        "Slice corners one at a time, crosshair glued to the edge about to appear.",
        "Pre-fire confirmed common spots — shooting before you fully clear removes their reaction advantage entirely.",
      ],
      proTip: "NiKo's one-taps look like cheats because his crosshair never leaves head level — his first bullet IS on the head, the flick is a myth. Placement first, always.",
    },
    {
      name: "Defaulting for map control (T-side)",
      category: "Macro",
      difficulty: 4,
      summary:
        "Spread across lanes, take shallow space and punish CTs who push for info — the macro that wins more ranked rounds than any exec.",
      steps: [
        "Spread 2-1-2 or 3-2 — never run 5 down one lane against a holding defense.",
        "Each group clears its slice of map and holds; don't push past what you can trade.",
        "When a CT pushes for info anywhere and dies, collapse — one over-aggressive defender opens a whole site.",
        "With 30–40 seconds left, group and hit the site that lost its anchor.",
      ],
      proTip: "Defaulting is farming CT impatience — ranked defenders WILL peek for info. Let them make the first error, then hit the site that just lost a body.",
    },
    {
      name: "Coordinated smoke exec",
      category: "Utility",
      difficulty: 4,
      summary:
        "Land smokes on the deep sightlines first, flash over the top, molly the corners — the site holder fights your utility, not a fair gunfight.",
      steps: [
        "Call the exec 5 seconds early so everyone stages smokes and flashes.",
        "Smoke the deepest sightlines first (Mirage A: stairs, jungle, CT) — cut rotations visually.",
        "Molly the close corners (sandwich, under balcony) where anchors hide.",
        "Entry swings the instant the flash pops — a second late and the smoke is just cover for them.",
      ],
      proTip: "karrigan's Execs work because the entry goes on the flash pop, not on a count — time your swing to the pop sound, not your teammate's call.",
    },
    {
      name: "Trade fragging and spacing",
      category: "Macro",
      difficulty: 2,
      summary:
        "Stay one strafe behind your entry so their death becomes your kill — in CS2, a teammate dying untraded is the single most common way ranked rounds die.",
      steps: [
        "Follow your entry at one-strafe distance, crosshair on the angle they're clearing.",
        "When they swing and die, YOU swing instantly — the enemy is on their reload timing.",
        "If your entry lives and pushes deeper, hold the second angle they can't watch.",
        "If the trade isn't on, DON'T swing — reposition and keep the man count even.",
      ],
      proTip: "Team Spirit's whole T-side is built around donk going first and the second man on his hip — nobody dies alone, and nobody should in your games either.",
    },
    {
      name: "Lurk timing and rotation cutting",
      category: "Positioning",
      difficulty: 4,
      summary:
        "Hold the lane CTs rotate through — when your team execs A, the mid and flank defenders sprint to help, and you're already on their path.",
      steps: [
        "Take a deep, quiet position on a rotation lane (e.g., Mirage mid to B apps).",
        "Wait for the exec sounds — smokes landing, steps — then play for the rotators, not the site.",
        "Kill a rotator and the site loses a defender for free; whiff and you've wasted the round.",
        "Vary your lurk every round — same timing twice and the CTs pre-clear you.",
      ],
      proTip: "A lurk is only valuable if it punishes the rotation, not pads your K/D — if you get two lurk kills and the site still falls, your timing was a second late.",
    },
    {
      name: "Re-aggress with the AWP",
      category: "Positioning",
      difficulty: 3,
      summary:
        "Peek, shoot, fall back — then immediately re-peek the same angle while the enemy is still processing your first shot.",
      steps: [
        "Take your first shot from a strong angle, then scope out and reposition one step.",
        "Re-peek the SAME angle on rhythm — enemies expect a retreat, not a second look.",
        "After the second shot, rotate off — the angle is burned and they're pre-aimed for you.",
        "Fall to a second angle with an escape path, never a corner.",
      ],
      proTip: "ZywOo's passive AWPing looks unaggressive until you count kills — he holds one angle, takes the free kill, re-aggresses once, and leaves. Boring wins rounds.",
    },
    {
      name: "Retake protocol (CT-side)",
      category: "Macro",
      difficulty: 4,
      summary:
        "Retakes fail when CTs trickle in one at a time — regroup, flash together, and clear the site as a unit.",
      steps: [
        "Call 'regroup' the moment a site falls — surviving CTs rotate off the bomb's line of sight.",
        "Arrive together: three CTs hitting a 2-man site at once beats three 1v2s.",
        "Flash or molly in first — never dry-clear a planted site.",
        "Stick or fake the defuse on sound: if they peek, trade; if not, plant the win.",
      ],
      proTip: "Vitality's retakes win because the LAST player waits for the first flash — 0.5 seconds of patience turns a lost retake into a stacked one.",
    },
    {
      name: "Economy discipline in MR12",
      category: "Economy",
      difficulty: 2,
      summary:
        "MR12 means halves are shorter and economy mistakes cost proportionally more — a botched buy can swing a 2-round loss into a broken half.",
      steps: [
        "Round 2 after pistol: full buy rifles + armor. Losing the follow-up is the most thrown ranked round.",
        "Check your team's combined money — if the squad can't buy together, call 'eco' together.",
        "On eco: P250 or Deagle + a flash, stack a site, and play for one pick into a plant.",
        "Know the loss bonus ladder: losing early rounds builds $1900+; a force only makes sense on bonus rounds or when the enemy is also broke.",
      ],
      proTip: "In MR12 the 'hero rifle' round is almost never worth it — two disciplined ecos fund the buy that decides the half.",
    },
  ],
  pvp: {
    intro:
      "CS2 ranked is decided by repeatable errors, not ceiling plays — the same dry-peeked angles, the same unbought flashes, the same 4v5 thrown by chasing a kill instead of taking the trade. Premier and FACEIT both punish solo aggression; the climb is made of discipline and trade spacing, not heroics.",
    modes: [
      {
        mode: "Premier ranked (MR12)",
        advice: [
          "Premier map veto matters: ban the maps you don't have a T-side plan for, not just the ones you lose on.",
          "Insta-pick your strongest T-side map — halves are short and a weak T half is hard to claw back in MR12.",
          "Mute tilted teammates instantly; comms only matter for enemy positions and timing calls.",
          "Play for the trade, not the clutch — one untraded death throws a 12-round half harder than any whiff.",
          "Watch the mini-map on defense: if a site falls, rotate before the plant, not after.",
        ],
      },
      {
        mode: "FACEIT pugs",
        advice: [
          "FACEIT punishes dry-peekers faster — expect coordinated execs and pre-aimed angles.",
          "Lobby with a consistent stack if you can; solo FACEIT has more smurf variance than Premier.",
          "Play your role even in a pug — anchoring a site alone loses fewer rounds than rotating for info kills.",
          "Call defaults, not hero calls: in a pug, '5-man the map' loses to 'spread and punish the peek'.",
        ],
      },
      {
        mode: "Deathmatch / warmup",
        advice: [
          "Use DM to warm up mechanics only: counter-strafe rhythm, spray control, headshot discipline — not to frag out.",
          "Rule your DM: only fights from crosshair placement. If you'd need a flick, disengage.",
          "Mirror your ranked gun pool — if you play rifle in matches, don't farm DM with the AWP.",
        ],
      },
    ],
    counterPlay: [
      "Against a dry-peeker: hold ONE off-angle patiently and let them walk into it — ranked players re-peek the same spot until you punish it.",
      "Against a rush: molly the choke, fall back one layer, and play for trades — never stand in the choke and fight 3 rifles alone.",
      "Against a lurker: anchor deep, don't rotate for info kills, and collapse on plant timing — the lurk starves if it can't punish the rotation.",
      "Against heavy execs: play off-site until the smokes bloom, then retake as a unit with a flash — dying in the smoke dump loses the site AND your body.",
      "Against an AWPer: jump-peek to bait the shot, wide-swing their off-angles, or just don't fight their lane — the AWP wins on your mistakes, not its aim.",
    ],
  },
  drills: [
    {
      name: "aim_botz headshot warmup",
      duration: "10 min",
      how: "On the aim_botz workshop map, kill 100 bots with only AK one-taps, then 50 more while strafe-stopping between every shot — no standing still.",
      goal: "Consistent sub-2-second-per-kill pace with clean headshots before queueing Premier.",
    },
    {
      name: "Recoil Master spray drill",
      duration: "10 min",
      how: "On Recoil Master, spray the AK at the wall target and watch the tracers — pull down for the first 10 bullets, then down-left, until the grouping is a palm-sized pattern.",
      goal: "20-bullet spray lands in a tight group at mid-range without looking at the tracer display.",
    },
    {
      name: "Yprac prefire map",
      duration: "15 min",
      how: "Run a Yprac prefire map for your most-played ranked map (Mirage or Inferno) — clear each angle with your crosshair already on the spot before it appears.",
      goal: "Clear the full route without a single flick — the aim is already there before the peek.",
    },
    {
      name: "Valve deathmatch discipline",
      duration: "15 min",
      how: "Play 2 official deathmatches with a rule: only take fights off strafe-stops and pre-aim. If you'd need a desperation flick, disengage and reposition.",
      goal: "20+ kills per DM with zero standing-still shots — retrain stop-then-shoot, not flick-then-die.",
    },
    {
      name: "Demo review — your own deaths",
      duration: "10 min",
      how: "Download your last Premier demo, skip to every one of your deaths, and tag each: bad peek, bad trade spacing, or bad timing?",
      goal: "Find which single mistake killed you most — that's the only thing to drill next week.",
    },
  ],
  proSettings: [
    {
      player: "ZywOo",
      team: "Team Vitality",
      notes: "The most consistent AWP/rifle hybrid ever — copy his passive positioning and angle selection, not the flick highlights. He wins by never being where the enemy pre-aims.",
    },
    {
      player: "donk",
      team: "Team Spirit",
      notes: "The scariest entry in the game right now — study his fast wide peeks and spray transfers, not just his aim. He takes the first fight of every round and wins it with mechanics, not luck.",
    },
    {
      player: "s1mple",
      team: "Natus Vincere",
      notes: "Greatest to ever AWP — aggressive angles, instant re-aggress, and total confidence. Copy his commitment to a pick: he decides and executes, never hesitates.",
    },
    {
      player: "NiKo",
      team: "Falcons",
      notes: "The cleanest crosshair placement in CS — every headshot is pre-aimed before the peek. Watch his Demos for placement discipline, not the one-tap clips.",
    },
    {
      player: "m0NESY",
      team: "Falcons",
      notes: "Flashy but fundamentally sound — aggressive AWP angles and smart re-aggress timing. Copy how he bails himself out of losing duels, not just how he wins them.",
    },
  ],
  commonMistakes: [
    "Dry-peeking the same angle twice — a held angle only needs one free kill, and ranked players hand it over willingly.",
    "Forcing every round — two coordinated ecos beat three botched forces, and MR12 punishes a broken economy harder.",
    "Chasing kills instead of taking trades — dying alone in a 4v5 loses a round pros would never throw.",
    "Skipping utility on a buy — a rifle with no flash loses more entries than a Galil with one.",
    "Standing still to aim — if you're not strafe-stopping between shots, you're a free kill for anyone counter-strafing back.",
    "Rotating after the plant — arrive before the bomb goes down or retake as a unit; a late lone rotate just feeds the post-plant.",
  ],
  metaNote:
    "MR12's shorter halves and CS2's subtick favor fast entries and economy discipline — coordinated defaults and trade-heavy execs win more ranked rounds than solo aggression, and the current era belongs to mechanically fast riflers like donk over slow passive holds.",
};

export default content;

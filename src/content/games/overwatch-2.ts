import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "overwatch-2",
  overview:
    "Overwatch 2 is a 5v5 hero shooter where mechanical aim is only the entry fee — fights are won on cooldowns, ult economy, and team sync. With one tank carrying the frontline, every death cascades into a lost objective, which is why ranked play is decided by who staggers less, trades cooldowns smarter, and swaps counters faster. It is the only shooter where the 'right' play is often to stop shooting and wait for your team.",
  skillPillars: [
    "Cover discipline",
    "Cooldown tracking",
    "Ult economy",
    "Target focus",
    "Reset timing",
    "Hero counter-swapping",
  ],
  techniques: [
    {
      name: "Playing off cover",
      category: "Positioning",
      difficulty: 2,
      summary:
        "Fire from a corner, ledge, or payload edge so you can break line of sight in one strafe — you only take damage while you choose to peek.",
      steps: [
        "Before the fight starts, identify the piece of natural cover nearest your position — never fight in open space.",
        "Peek, fire 2-3 shots or one ability, then strafe back behind the corner.",
        "Let your tank hold space while you reload behind cover — output only matters if you're alive.",
        "Rotate between two pieces of cover so enemies can't pre-aim your peek spot.",
      ],
      proTip: "Lip plays hitscan like a corner rhythm game — peek, burst, hide, repeat. Watch his Widow VODs: he's invisible more than he's visible.",
    },
    {
      name: "Cooldown tracking",
      category: "Macro",
      difficulty: 3,
      summary:
        "Every hero is their cooldowns — count key abilities like suzu, nade, lamp, and hook so you know exactly when the fight is actually winnable.",
      steps: [
        "At the start of each fight, note which defensive cooldowns the enemy has used.",
        "Call 'no suzu' or 'no nade' the second you see them burned — that is your engage window.",
        "Don't commit your own key cooldown until the enemy's counter is down.",
        "Track the rotation: Kiriko suzu ~15s, Ana nade ~12s, Bap lamp ~23s — these ARE the fight timers.",
      ],
      proTip: "Pro shotcallers don't call targets first — they call missing cooldowns. 'Ana no nade' is the green light for every dive in OWCS.",
    },
    {
      name: "Ult economy management",
      category: "Macro",
      difficulty: 4,
      summary:
        "Treat ults like currency: spend 2-3 max per fight, never ult a losing fight, and always know what answers the enemy is holding.",
      steps: [
        "Before each fight, mentally tab your team's ults: you want to win with the fewest spent.",
        "If a fight is already lost (down 2+ teammates), hold your ult — ulting feeds staggered charge into the next fight.",
        "Track enemy ults from kill feed and sound cues — if Genji has blade, your supports save defensive ults for it.",
        "Layer ults in sequence (engage → answer → sustain), never stack two offensive ults on the same fight unless it's match point.",
      ],
      proTip: "Crazy Raccoon wins team fights while spending one ult and banking two. The team that finishes a fight with more ults banked wins the next one for free.",
    },
    {
      name: "Off-angle pressure",
      category: "Positioning",
      difficulty: 3,
      summary:
        "Take a side angle that splits the enemy's attention — the tank can't shield two directions and supports can't heal who they can't see.",
      steps: [
        "While your tank holds main, rotate to a flank or secondary lane that still sees the objective.",
        "Apply just enough pressure to force a cooldown or a head-turn — you don't need the kill, you need the split.",
        "The moment the enemy turns to deal with you, your team's front hits the weakened main angle.",
        "If two enemies rotate to you, retreat to cover and re-peek elsewhere — you've already won the trade.",
      ],
      proTip: "Proper's entire Echo/Tracer value is off-angle timing — he shows himself exactly when the enemy commits to the front, never a second early.",
    },
    {
      name: "Staggering kills",
      category: "Macro",
      difficulty: 2,
      summary:
        "After winning a fight, kill the last straggler slowly — a staggered D.Va or tank arrives 15s after their team and loses the next fight alone.",
      steps: [
        "When a fight is clearly won, DON'T insta-kill the last enemy.",
        "Let them stand — body-block or zone them so they can't suicide to reset.",
        "Kill them at the last moment before their team respawns, maximizing the stagger.",
        "On the flip side, if YOU are the straggler, dive off the map or die instantly — don't be the reason your team plays 4v5 next fight.",
      ],
      proTip: "Pros stagger baby D.Va so brutally she can lose 30 seconds of match time. One good stagger wins the entire next team fight before it starts.",
    },
    {
      name: "Knowing when to reset",
      category: "Macro",
      difficulty: 2,
      summary:
        "The highest-EV play in Overwatch is often running away — dying together at respawn is a loss, dying one-by-one is a lost match.",
      steps: [
        "Read the fight early: 2+ teammates down before the point is contested = the fight is over.",
        "Disengage immediately — break LOS, retreat to spawn, or take the fast death (jump off the map if safe).",
        "Group at spawn and count to 10 as a team — do NOT trickle back in alone.",
        "If enemies push your staggered teammates, stall with mobility only: touch-and-go on point, never commit.",
      ],
      proTip: "Amateur ranked games are lost on trickling, not aim. Pros literally say 'let it go' on comms — giving up a point beats giving up the next fight too.",
    },
    {
      name: "Synced dive timing",
      category: "Teamplay",
      difficulty: 4,
      summary:
        "Dive only works when Winston leap, Tracer recall, and support heals land on the same target in the same second — stagger it and everyone feeds.",
      steps: [
        "Call the target BEFORE anyone jumps: 'Zen, 3-2-1, go'.",
        "Tank initiates contact first — DPS arrive with the leap, not before it.",
        "Everyone commits together for exactly one burst window, then exits on tank's disengage.",
        "If the dive fails, reset fully — a half-dive that lingers feeds ultimate charge to the enemy.",
      ],
      proTip: "Team Falcons' dive is terrifying because Hanbin's DVa lands the same frame Winston does. Desync by one second and it's a 1v5 highlight reel for the enemy Ana.",
    },
    {
      name: "Peeling for your backline",
      category: "Teamplay",
      difficulty: 3,
      summary:
        "When a flanker dives your supports, turning around IS the play — a saved Ana outheals any damage you'd do chasing their tank.",
      steps: [
        "Bind mental audio triggers: sleep dart sound, 'behind us' calls, support voice lines = turn NOW.",
        "The closest teammate to the dove support peels — not everyone, just one.",
        "Body-block damage for your support: stand between them and the flanker.",
        "After the peel, reposition supports to safer ground — they'll get dove again.",
      ],
      proTip: "Viol2t plays aggressive because his tank always bails him out mid-duel. An unpeeled backline loses every fight no matter how good the frontline looks.",
    },
    {
      name: "High ground control",
      category: "Positioning",
      difficulty: 3,
      summary:
        "High ground wins sightlines, cover, and disengage routes — taking it early is free value, contesting it late costs everything.",
      steps: [
        "At round start, rotate to claim high ground BEFORE the enemy — speed beats aim here.",
        "Use it to see rotations and poke safely; enemies on low ground must spend cooldowns to touch you.",
        "Defend it with denial: boops, tank presence, or sniper pressure — don't give it up without a fight.",
        "Only drop down when the fight moves below — returning to high ground for the next fight.",
      ],
      proTip: "Watch any pro map of Circuit Royal or Watchpoint Gibraltar: the entire match is a fight over two ledges. Ground play is just what happens between ledge contests.",
    },
    {
      name: "Baiting key cooldowns",
      category: "Utility",
      difficulty: 4,
      summary:
        "Show enough threat to force the defensive ability, back off, then re-engage into the gap — you trade presence for their escape button.",
      steps: [
        "Poke aggressively at the start of a fight to force early defensive cooldowns.",
        "The moment suzu/immortality/nade pops, disengage — let the fight 'reset'.",
        "Count the cooldown, then hard-engage the SECOND the window opens.",
        "Repeat: every enemy defensive cooldown you bait is a teammate's kill later.",
      ],
      proTip: "Shu holds his Ana nade until the enemy burns theirs — the second purple nade of a fight wins it. Bait first, commit second.",
    },
    {
      name: "Counter-swapping mid-round",
      category: "Macro",
      difficulty: 3,
      summary:
        "Overwatch is a draft game — refusing to swap off a countered hero loses fights no aim can fix.",
      steps: [
        "After each lost fight, ask: what killed me, and is there a hero who stops it?",
        "Swap early — a mid-round swap costs ~10s of presence but fixes the next three fights.",
        "Mirror the problem: they run Widow? Go dive. They run Pharah? Go hitscan. They run Genji? Go beam.",
        "Communicate the swap on comms so your team plays around the new comp.",
      ],
      proTip: "Proper swaps heroes more than any pro and it's why he wins — he'd rather lose an ult charge than fight an uphill matchup for five minutes.",
    },
    {
      name: "Stalling on point",
      category: "Positioning",
      difficulty: 2,
      summary:
        "Touch the objective at the last possible moment to reset the overtime clock — one good stall wins maps single-handedly.",
      steps: [
        "Save one mobility cooldown for stall duty (Tracer blink, Wraith, bubble, Translocator).",
        "Touch point to contest, then IMMEDIATELY escape — you stall by surviving, not fighting.",
        "Chain it: one teammate touches, escapes; next teammate touches — overtime ticks down in bursts.",
        "On defense, stall near your spawn — reinforcements arrive every respawn.",
      ],
      proTip: "Pro stall plays look impossible until you count them: each touch costs the enemy 5-8 seconds. Mei's ice block and Reaper's wraith are stall buttons, not fight buttons.",
    },
  ],
  pvp: {
    intro:
      "Overwatch 2 PvP is a resource war disguised as a deathmatch. Ranked is decided by three things in order: who staggers less, who tracks cooldowns better, and who commits ults only to winning fights. The gap between ranks isn't aim — it's that Diamond players die together and Masters players die alone. Every fight is a negotiation over cooldowns and space.",
    modes: [
      {
        mode: "Role Queue ranked (solo)",
        advice: [
          "Play tank or flex support — the solo-tank role decides ranked more than any other position.",
          "Mute tilted comms instantly; you only need callouts for flanks and cooldown status.",
          "Swap counters after every lost fight — refusal to swap loses more ranked games than bad aim.",
          "Track your own deaths as trickle-or-staggered: if you die alone after the fight ends, that's the loss.",
          "Play for the point, not the killfeed — a lost objective beats an ace that doesn't capture.",
        ],
      },
      {
        mode: "Open Queue / Stadium",
        advice: [
          "In open queue, draft a frontline before thinking about damage — no-tank comps fold to any coordinated push.",
          "In Stadium, build around one power fantasy (e.g., all-in ability power or weapon) instead of splitting — hybrid builds lose to focused ones.",
          "Stadium powers change hero matchups — a maxed-out Soldier can duel a tank. Respect builds, not just heroes.",
          "Communicate builds in the prep phase — your team should synergize, not pick five solo carries.",
        ],
      },
      {
        mode: "Scrims / stacked teams",
        advice: [
          "Assign an ult shotcaller — only one person decides when ults commit, everyone else tracks.",
          "Practice dives and engages to a count: '3-2-1' eliminates desync better than any individual mechanic.",
          "Between maps, review what cooldown combo beat you — then run the counter-comp next round.",
          "Set designated stall duty and stagger duty per player — these 'boring' jobs win close maps.",
          "Warm up in team queue only — scrims with cold aim teach bad habits.",
        ],
      },
    ],
    counterPlay: [
      "Against dive comps: run Brig/Zen backlines and peel for each other — a peeled support negates an entire dive comp.",
      "Against Widow/sniper one-tricks: play off cover, dive the perch with mobile tanks, or just don't contest their sightline.",
      "Against bunker/poke comps: never take the frontal fight — flank, touch point, or force them to move before engaging.",
      "Against ball/doomfist disruption: pick CC heroes (Sombra hack, sleep dart) and coordinate focus fire the moment they commit.",
      "Against ult-stacked fights: kite backward and let the ults land on empty ground — surviving the storm wins the cleanup.",
    ],
  },
  drills: [
    {
      name: "VAXTA aim warmup",
      duration: "10 min",
      how: "Load the VAXTA custom workshop code (the standard OW aim trainer) and track+flick targets for 10 minutes on your main hero before queueing.",
      goal: "Consistent headshot rate on your role's primary weapon — you're warming muscle memory, not learning.",
    },
    {
      name: "Cooldown callout drill",
      duration: "15 min",
      how: "Play a Quick Play match where you say every enemy defensive cooldown out loud as it happens ('nade down', 'suzu used'). No playing, just tracking.",
      goal: "You can name every enemy's missing cooldown at any moment in the fight — that's when tracking becomes passive.",
    },
    {
      name: "Reset discipline drill",
      duration: "10 min",
      how: "Play 3 games where you reset the instant 2 teammates die — disengage, escape, regroup. Track how many fights you DON'T feed into.",
      goal: "Zero trickle deaths per game — this one habit moves you a full rank.",
    },
    {
      name: "Stagger practice",
      duration: "5 min",
      how: "In a custom game vs bots, practice winning a fight then delaying the final kill on the last enemy — body-block and zone instead of shooting.",
      goal: "Hold a stagger for 10+ seconds reliably without the enemy resetting — feel the timing.",
    },
    {
      name: "VOD review — your own deaths",
      duration: "10 min",
      how: "Record a ranked game and watch ONLY your deaths. Tag each one: bad position, no peel, cooldowns down, or trickled in?",
      goal: "Find your most common death cause — that's your next week's drill, not more aim.",
    },
  ],
  proSettings: [
    {
      player: "Proper",
      team: "Crazy Raccoon",
      notes: "The best flex DPS alive — copy his off-angle timing and instant counter-swaps. Proper never fights an uphill matchup for more than one fight.",
    },
    {
      player: "Lip",
      team: "Crazy Raccoon",
      notes: "Hitscan fundamentals personified — his corner-peek rhythm and first-bullet patience show that OW aim is about exposure control, not flicks.",
    },
    {
      player: "Shu",
      team: "Crazy Raccoon",
      notes: "Greatest Ana/nade timing in the world — study how he holds his purple nade until the enemy's defensive nade is already spent. Bait first, commit second.",
    },
    {
      player: "Hanbin",
      team: "Team Falcons",
      notes: "The best DVa ever — copy his peel discipline and how he wins fights by denying enemy space instead of chasing kills.",
    },
    {
      player: "Viol2t",
      team: "Team Falcons",
      notes: "Aggressive support with perfect backup timing — his Zen positioning shows how to deal damage AND stay peelable at the same time.",
    },
  ],
  commonMistakes: [
    "Trickling into the fight after teammates die — each staggered death is a thrown fight, not bad luck.",
    "Ulting a fight that's already lost — losing the fight AND the ult charge is how rounds cascade into losses.",
    "Refusing to swap off a countered hero — a Widow on attack into dive comp loses regardless of skill.",
    "Ignoring the backline — nobody peels, supports die, and suddenly every fight is a 4v5.",
    "Standing in the open to 'get the shot' — every exposed second is damage the enemy doesn't have to earn.",
    "Stacking every ult into one fight — win or lose, the next fight has nothing left and the counter-push rolls you.",
  ],
  metaNote:
    "The perks-era meta rewards flexible brawl and dive hybrids over rigid compositions — heroes who can flex between poke and commit get the most value. With Stadium changing how builds work, ranked players who adapt comps fight-to-fight beat players who one-trick regardless of matchup.",
};

export default content;

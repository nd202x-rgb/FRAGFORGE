import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "tekken-8",
  overview:
    "Tekken 8 is a 3D fighter where every button is a commitment and every knockdown is a question. Unlike 2D fighters, neutral is won with lateral movement — sidesteps, backdashes, and spacing — long before a launcher lands. Ranked is decided by matchup knowledge and punishment discipline, not raw execution: the player who knows what is -15 beats the player with the faster electric.",
  skillPillars: [
    "Korean backdash & spacing",
    "Block punishment",
    "Sidestep timing",
    "Heat management",
    "Okizeme & wake-up control",
    "Matchup knowledge",
  ],
  techniques: [
    {
      name: "Korean backdash cancel (KBD)",
      category: "Movement",
      difficulty: 4,
      summary:
        "Chained backdashes that cancel each other's recovery — the single biggest skill gap between mid and high ranks, because it turns defense into a whiff-punish machine.",
      steps: [
        "Tap back, back to start a backdash.",
        "Cancel the recovery by rolling to down-back, then immediately back again.",
        "Repeat the b, b → d/b rhythm until it flows as one motion — speed comes from canceling recovery, not tapping faster.",
        "Use it to open distance after your own pressure or to bait a whiffed punish attempt.",
      ],
      proTip: "Watch Knee's spacing: he backdashes into exactly the range where the opponent's whiff punish comes out, then launches it. KBD is not retreat — it is bait.",
    },
    {
      name: "Block punishment fundamentals",
      category: "Defense",
      difficulty: 2,
      summary:
        "Every unsafe move the opponent throws is owed damage — know your -10, -12, and -15 punishers and collect every single time.",
      steps: [
        "Learn your standing punishers by frame tier: jab at -10, your fast mid at -12/-13, your launcher at -15.",
        "Turn on frame data in Practice mode and check the block frames of every string that keeps hitting you.",
        "Punish EVERY launch-punishable move — a hopkick or hellsweep you let go unpunished teaches the opponent to spam it.",
        "Start with the five most common moves you face per set, not the whole frame sheet.",
      ],
      proTip: "Every ranked set is a frame quiz — the punish you land on a hopkick is worth more than any 60-damage combo.",
    },
    {
      name: "Sidestep into whiff punish",
      category: "Movement",
      difficulty: 3,
      summary:
        "Tekken is played in three dimensions — a well-timed sidestep makes linear strings whiff completely and earns you a free launch.",
      steps: [
        "Learn which direction your character's sidestep covers best — most moves track weakly to one side.",
        "Step as the opponent commits to a linear string or jab check — not preemptively, or you eat a homing move.",
        "Launch the whiffed recovery; a clean sidestep is worth a full combo.",
        "If stepping gets clipped twice, the opponent is using homing — switch to block punish instead.",
      ],
      proTip: "Arslan Ash steps AFTER the opponent starts the string — late steps dodge tracking, early steps get clipped. Step on their rhythm, not yours.",
    },
    {
      name: "Throw breaking by arm",
      category: "Defense",
      difficulty: 2,
      summary:
        "Throws are a 50/50 you can turn into a 100 — the grabbing arm tells you the break: right arm is 1, left arm is 2, both arms is 1+2.",
      steps: [
        "Train your eyes on the arm animation in Practice mode — set the dummy to random 1, 2, and 1+2 throws.",
        "Break with the matching input the instant you see the arm, not on prediction.",
        "Until your reads are consistent, hedge with 1+2 against grapplers — their command grabs break there.",
        "A broken throw leaves the opponent minus — take your turn back immediately.",
      ],
      proTip: "Top players hedge, not react, at ranked level: default 1+2 versus King and Armor King, and read arms against everyone else.",
    },
    {
      name: "Low parry reads",
      category: "Defense",
      difficulty: 3,
      summary:
        "Input d/f at the exact moment a low connects to parry it into a full launch — the single most feared read in the game.",
      steps: [
        "Identify the opponent's money low — every character has one (hellsweep, snake edge family, d/b+3 pokes).",
        "Track the pattern: most players go low after a specific blocked hit or when they feel safe.",
        "Input d/f on the read, not the reaction — you are parrying a habit, not an animation.",
        "Use it two or three times a set maximum; conditioning is the weapon, and a whiffed parry eats a hopkick.",
      ],
      proTip: "Ulsan low-parries on patterns, not reactions — he counts how many times the low has appeared this round. Track habits, not ankles.",
    },
    {
      name: "Heat management",
      category: "Offense",
      difficulty: 3,
      summary:
        "Heat is two free turns of offense per round — spent on mixups it wins rounds, spent on panic it loses them.",
      steps: [
        "Enter Heat through plus-frame engagers landed on block, never as a neutral panic button.",
        "Spend the gauge on mixups and Heat dash extensions — a Heat dash keeps you plus and forces a real 50/50.",
        "Hold Heat Smash for confirmed hits or chip-out kills — raw Heat Smash is the most launchable thing you own.",
        "If the opponent has not used Heat yet, respect their armor option late in the round.",
      ],
      proTip: "Top players pop Heat when they are AHEAD in life — it forces the opponent to gamble on every decision to come back.",
    },
    {
      name: "Okizeme: control the wake-up",
      category: "Offense",
      difficulty: 3,
      summary:
        "A knockdown is not a break — it is a question. Stand over them, bait the panic option, and collect the launch.",
      steps: [
        "After a knockdown, hover at range one-and-a-half — close enough to punish, far enough that wake-up kicks whiff.",
        "Bait wake-up spring kicks by standing still; launch the whiff.",
        "If they stay down, apply a grounded hit or approach for a mix — the ground game is free damage.",
        "Never autopilot a running attack — that is exactly what their wake-up timing is waiting for.",
      ],
      proTip: "Ranked players eat one wake-up kick launch and learn nothing — stand over them and watch first. The patient player owns the knockdown.",
    },
    {
      name: "Jab checks & keep-out",
      category: "Neutral",
      difficulty: 2,
      summary:
        "Your jab and d/f+1 are stop signs — fast pokes that interrupt dashes, stuff approaches, and earn you the right to take space.",
      steps: [
        "Jab is roughly ten frames — use it to interrupt any offense you are unsure about.",
        "d/f+1 is your mid-range check: it catches people dashing in and starts your own offense on hit.",
        "A landed check earns plus frames — follow with a throw or a fast mid for a micro-mix.",
        "Check, then move — the poke is a question, and the movement after it is the real offense.",
      ],
      proTip: "Watch how little top players swing: whole first rounds are won on twelve-damage pokes, because each check earns the right to take space.",
    },
    {
      name: "Frame traps & plus-frame offense",
      category: "Offense",
      difficulty: 4,
      summary:
        "Real pressure is math, not mashing — know which of your strings end plus and what wins the frame race afterward.",
      steps: [
        "Learn your two or three moves that end plus on block — every character has pressure tools that jail into more offense.",
        "On plus frames, use a counter-hit tool — disrespectful opponents eat the CH launcher every time.",
        "When they finally stop pressing, THAT is when you throw or go low.",
        "If your pressure ends minus, stop — extending past it is how you get launched.",
      ],
      proTip: "The trap is not the plus move — it is knowing the exact frame where their fastest interrupt loses. Lab your +4 options until the math is automatic.",
    },
    {
      name: "Wall carry & stage positioning",
      category: "Macro",
      difficulty: 3,
      summary:
        "Tekken 8 is a positional game — fifty damage into wall oki beats sixty-five into open stage, every round.",
      steps: [
        "Choose combo routes by distance to the wall, not by max damage — long carry routes set up the real kill.",
        "At the wall, pressure is lethal: lows chip, throws cannot be techrolled to safety, and splats re-combo.",
        "Defensively, techroll AWAY from the wall on every knockdown — positioning is chosen on the ground.",
        "In neutral, fight for center stage — giving up wall access for free is how mid players die.",
      ],
      proTip: "Pros trade small damage deliberately to keep their backs to open space — watch how often they give up a jab check to reclaim center stage.",
    },
    {
      name: "Rage discipline",
      category: "Mental",
      difficulty: 2,
      summary:
        "Rage Art is a free comeback button — for whoever stays calm. Bait theirs, and spend yours where it cannot miss.",
      steps: [
        "When the opponent enters Rage, keep playing your normal game — freezing is how their armor finds you.",
        "Use quick, safe pokes while holding block — most Rage Arts are thrown in the first seconds of the glow.",
        "Block it, then take the launch: it is a mid, and it is death on block.",
        "Spend your own Rage Art as a combo ender or guaranteed punish, never raw from neutral.",
      ],
      proTip: "Count to three after they glow red — most ranked Rage Arts come out in that window, and the patient player collects a full launch for it.",
    },
  ],
  pvp: {
    intro:
      "Tekken 8 PvP is a knowledge test disguised as a reflex test. Every rank wall is a character you have not labbed — the game has fifty-plus moves per character and ranked sets are decided by who punishes the popular ones. The dominant pattern online is autopilot offense: flowchart pressure that dies to one well-timed sidestep, low parry, or block punish.",
    modes: [
      {
        mode: "Ranked Battle",
        advice: [
          "Pick ONE main and push it to real proficiency before touching alts — rank follows defense, not roster breadth.",
          "Between sets, spend ten minutes in Practice on the character that just beat you — lab the five moves that hit you.",
          "Two-and-done players you cannot download: rematch to confirm it was not a fluke, then leave.",
          "Demotion matches are just sets — autopilot loses more games than nerves ever will.",
          "Win by removing their best move first; once the hellsweep stops working, most ranked players have no plan B.",
        ],
      },
      {
        mode: "Quick Match / Tekken Fight Lounge",
        advice: [
          "Play long sets — adaptation across a first-to-ten is where real growth happens, not in one-off ranked wins.",
          "Queue into players clearly better than you; getting downloaded is the fastest matchup tutorial that exists.",
          "Save replays of your losses and use the punishment tips — the game literally marks the punishes you missed.",
          "Use the lounge to practice one tech at a time: tonight is sidesteps, tomorrow is throw breaks.",
        ],
      },
      {
        mode: "Offline locals / tournaments",
        advice: [
          "Bring a written gameplan per matchup — on stage you will not improvise defense you have not rehearsed.",
          "Reset between games: stand up, breathe, and decide the one adjustment for the next game before sitting down.",
          "Never change your main mid-tournament — play your game and lose on your terms.",
          "Warm up on setups before your pool matches; pad lag and monitor differences are real.",
        ],
      },
    ],
    counterPlay: [
      "Against autopilot pressure: block the first string, note the gap where they always press, and interrupt at exactly that gap — flowchart players never vary it.",
      "Against throw spammers: hedge your breaks with 1+2, then launch the whiffed command grab; once throws stop working their whole offense collapses.",
      "Against low-poke turtles: land one early low parry — the fear of a second parry opens your mids for free all set.",
      "Against keep-out characters: sidewalk toward them instead of dashing — lateral movement shrinks their best long-range tools.",
      "Against wake-up mashers: do a meaty safe mid or simply block — their spring kicks and panic options feed you launches.",
    ],
  },
  drills: [
    {
      name: "KBD reps",
      duration: "5 min",
      how: "In Practice mode, backdash-cancel across the full stage length on both sides without getting clipped — slow and clean first, then add speed.",
      goal: "Ten consecutive clean cancels each direction before you queue — it should feel like rhythm, not inputs.",
    },
    {
      name: "Throw-break gauntlet",
      duration: "10 min",
      how: "Set the Practice dummy to random 1, 2, and 1+2 throws at full speed. Break every one on the arm read — no guessing.",
      goal: "Thirty consecutive correct breaks. When the read is automatic, throws stop being a mixup.",
    },
    {
      name: "Low-parry read reps",
      duration: "10 min",
      how: "Record the dummy doing the matchup's money low mixed with a similar-looking mid. Low parry only the low — blocking the mid is a pass.",
      goal: "Catch the low on read three times in a row without getting hit by the mid lookalike.",
    },
    {
      name: "Punishment homework",
      duration: "15 min",
      how: "Load your last loss from replays, open the punishment tips, and drill every marked punish in Practice until each lands three times clean.",
      goal: "Zero missed launch-punishable opportunities in your next set against that character.",
    },
    {
      name: "Ghost battle mirror",
      duration: "10 min",
      how: "Play Super Ghost Battle against your own ghost — it fights like you, so every habit that beats you is one you need to fix.",
      goal: "Write down the three habits your ghost exploits in you; that list is next week's practice plan.",
    },
  ],
  proSettings: [
    {
      player: "Arslan Ash",
      team: "Team Falcons",
      notes: "The greatest defensive player alive — copy his patience: he presses almost nothing in neutral and wins entire sets on whiff punishment and late sidesteps.",
    },
    {
      player: "Knee",
      team: "DRX",
      notes: "A decade-plus of dominance across every character — study his movement and spacing; his KBD positioning turns the opponent's best moves into whiffed launches.",
    },
    {
      player: "Ulsan",
      team: "DRX",
      notes: "The clutch king of reads — watch how he tracks opponent habits round-by-round and detonates flowcharts with low parries and calibrated aggression.",
    },
    {
      player: "Chanel",
      team: "ZETA DIVISION",
      notes: "Relentless but never reckless — copy how he maintains plus-frame pressure without overextending, and how his pokes always precede the real mixup.",
    },
    {
      player: "JDCR",
      team: "DRX (best known)",
      notes: "Two-time Evo champion — study his Armor King neutral: every approach is earned by a check first, and his throw game is layered behind real strike threat.",
    },
  ],
  commonMistakes: [
    "Pressing after a blocked string — if you are minus and still mashing, you are gifting counter-hit launches.",
    "Autopilot combos — the max-damage route that drops at the wall or skips wall carry loses rounds the optimal route wins.",
    "Never labbing the character that beat you — the same hellsweep will hit you next set, and the set after that.",
    "Mashing on wake-up — get-up kicks are launch-punishable; stay down or techroll until you see the whiff.",
    "Fighting with your back to the wall — giving up stage position for free turns every poke into a splat.",
    "Rage Art panic — throwing it raw from neutral or freezing when they glow. It is a mid: block it, launch it.",
  ],
  metaNote:
    "The current meta rewards aggression with structure: Heat lets every character force real 50/50s, so the gap between ranked and tournament play is defensive — the players climbing are the ones turning the opponent's Heat into a blocked, punished mistake.",
};

export default content;

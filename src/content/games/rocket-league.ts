import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "rocket-league",
  overview:
    "Rocket League is 3v3 car football: five minutes of boost, rotation and aerials where the ball never stops moving. Ranked is won less by who has the fanciest flip reset and more by who makes the last mistake — most goals come from broken rotations, not broken mechanics. The skill ceiling is absurd, but the skill floor that matters is positioning and first touch.",
  skillPillars: [
    "Rotation discipline",
    "Boost management",
    "First touch and possession",
    "50/50 control",
    "Aerial timing",
    "Power shooting",
  ],
  techniques: [
    {
      name: "Rotation discipline",
      category: "Macro",
      difficulty: 2,
      summary:
        "First man challenges, second supports, third stays back — rotating out through the back post means a whiff costs nothing and a double-commit costs a goal.",
      steps: [
        "Identify your spot: if a teammate is closer to the ball and facing it, you are NOT first man.",
        "After your touch, rotate out through the back post — never turn back into the same play.",
        "Grab the far-side small pads on your way back, not the big boost your teammate needs.",
        "Arrive at third man positioned to defend AND to push up the instant your teammate's touch is safe.",
      ],
      proTip: "Watch Squishy's replays frame-by-frame: he almost never has the ball, yet he's always exactly where the next touch happens — rotation is an offense skill disguised as defense.",
    },
    {
      name: "Boost pathing on small pads",
      category: "Boost",
      difficulty: 1,
      summary:
        "The 12-boost pads on each lane respawn constantly — pad routes keep you at 80+ boost without ever leaving rotation to fight for corner boost.",
      steps: [
        "Memorize the small-pad lines on every ranked map — they curve exactly along rotation paths.",
        "Pick up pads by driving OVER them on your way to your next position, never by detouring.",
        "Only take big corner boost when you're already rotating through it or spawning after a goal.",
        "At zero boost, play for positioning and fakes — don't chase a corner boost and abandon third man.",
      ],
      proTip: "Pros treat big boosts as a bonus, not a need — M0nkey M00n hovers around 30–60 boost constantly because his pad routes are the rotation itself.",
    },
    {
      name: "Fast aerial",
      category: "Aerials",
      difficulty: 3,
      summary:
        "Jump, tilt back, and boost through the whole ascent with a second jump at the top — reaching the ball a full second earlier decides whether you're shooting or chasing a replay.",
      steps: [
        "Jump once while boosting and tilt the nose back immediately.",
        "Feather boost to keep climbing straight up instead of drifting forward.",
        "Hit your second jump near the top of the arc to carry momentum forward into the ball.",
        "Land wheels-down already facing your recovery position — the play doesn't end at the hit.",
      ],
      proTip: "Pros practice fast aerials only in training packs — free play lies about timing because you pick the setup; packs make you read a real ball.",
    },
    {
      name: "Speed flip kickoff",
      category: "Mechanics",
      difficulty: 4,
      summary:
        "A diagonal flip with a cancel that carries you through the ball at full boost — a clean speed flip wins the 50 and puts the ball at their corner before their second man can react.",
      steps: [
        "Boost from spawn and line up slightly off-center of the ball's approach lane.",
        "Flip diagonally forward and cancel instantly by pulling the stick/keys back.",
        "Stay boost-locked through the landing and contact the ball dead-center.",
        "If you can't win the 50 to a safe side, deliberately hit it softly toward the nearest wall pad.",
      ],
      proTip: "RLCS kickoffs are pre-decided — pros watch the opponent's spawn pattern and choose speed flip, delayed flip, or a soft 'kill the play' touch before the countdown ends.",
    },
    {
      name: "Wave dash",
      category: "Movement",
      difficulty: 2,
      summary:
        "Flip into the ground and cancel it so the wheels absorb the flip — free speed with no boost, from landings, wall drops, and recoveries.",
      steps: [
        "Jump lightly or fall from a wall/ceiling drop with your nose tilted slightly down.",
        "Front-flip the instant your wheels touch the ground and cancel immediately.",
        "Chain a second wave dash off the landing slide to keep momentum through turns.",
        "Use it to arrive at rotations faster — the speed is for positioning, not style.",
      ],
      proTip: "Pros wave dash on almost every recovery — it's so automatic that a missed wave dash on a replay is immediately visible as lost tempo.",
    },
    {
      name: "First touch possession catch",
      category: "Possession",
      difficulty: 2,
      summary:
        "Killing the ball's momentum on your hood or nose turns a 50/50 chip into a dribble — most ranked players boom every touch away and give the ball back.",
      steps: [
        "Read the incoming ball's speed and position your car to absorb it, not block it.",
        "Feather boost into the catch — meeting the ball hard is just a clear with extra steps.",
        "Let the ball settle, then start the dribble or flick instead of touching it forward instantly.",
        "If defenders are already on you, take a low first touch and 50 it into the corner instead.",
      ],
      proTip: "Possession play is the biggest rank multiplier between Diamond and Grand Champion — pros call it 'slowing the game down while driving faster.'",
    },
    {
      name: "Shadow defense",
      category: "Defense",
      difficulty: 3,
      summary:
        "Face your own net and mirror the dribbler's path — you block the goal, not the ball, and force the attacker to beat you or shoot early.",
      steps: [
        "Rotate behind the play and match the attacker's drive line, staying between them and net.",
        "Drive backwards alongside them — never turn around to face the ball.",
        "When they commit to a touch, cut inside toward goal for the challenge they can't dodge.",
        "If they hesitate, keep shadowing — time in your box favors the defender.",
      ],
      proTip: "Chronic's shadow defense is clinic-grade: he lets attackers show their whole setup, then dives only when the last touch is committed — patience is the mechanic.",
    },
    {
      name: "Backboard reads",
      category: "Defense",
      difficulty: 3,
      summary:
        "Reads off your own backboard or ceiling let you clear balls that look unplayable — the wall bounce is predictable, panic is not.",
      steps: [
        "When a ball flies over your goal, drive up the wall or boost to the ceiling early.",
        "Read the rebound angle: the board kick is predictable, follow it out rather than contesting mid-air.",
        "Jump and flip into the ball to clear it over the incoming pressure.",
        "If a teammate is behind you, deliberately leave the board ball for their bigger clear.",
      ],
      proTip: "AppJack and top defenders practice backboard packs daily — the read is what separates a save from an own-goal double-tap.",
    },
    {
      name: "45-degree flick",
      category: "Offense",
      difficulty: 4,
      summary:
        "Pop the ball on your roof, drive under it at an angle, and flip through it diagonally — the flick beats a goalkeeper who can't read whether you went early or late.",
      steps: [
        "Dribble slowly and let the ball settle on the front half of your roof.",
        "Speed up slightly and drive under the ball so your nose tips it upward.",
        "Flip diagonally into the ball — contact with the roof corner adds height and power.",
        "Practice against an open net until you can hit top corner 3 times in a row before adding defenders.",
      ],
      proTip: "Musty invented it, but every pro now flicks on the first touch — watch yanxnz take a catch directly into a flick with no setup bounce.",
    },
    {
      name: "Delayed low-50",
      category: "Duel",
      difficulty: 2,
      summary:
        "Arriving a half-second late to a 50/50 wins it more often than arriving on time — the other car commits, the ball pops, and you're flipping into a free possession.",
      steps: [
        "Read the 50 trajectory — if the ball is between you and an enemy, drive slightly past the contact point.",
        "Jump just before contact so the ball hits the undercarriage, not the nose.",
        "Stay grounded on the landing and flip toward wherever the ball pops loose.",
        "In a losing 50, turn INTO the pinch line so your ball deflects toward their backboard, not center.",
      ],
      proTip: "Pros fake the 50 entirely: they drive at the ball, stop, let the opponent flip through air, then take the free touch around them.",
    },
    {
      name: "Demo and bump rotation",
      category: "Offense",
      difficulty: 3,
      summary:
        "Demoing the keeper or rotating through their backboard forces defenders to defend a goal with one less man — violence is a legal macro tool.",
      steps: [
        "Only demo on your way through rotation — a dedicated demo run breaks your own spacing.",
        "Target the keeper or the player rotating to cover — a demo has no value if it's already a 2v3.",
        "Boost fully before contact, and keep speed through the demo to take the next position.",
        "Pair it with a pass or shot: the demo means nothing if the ball isn't on its way in.",
      ],
      proTip: "Rocket League's best demo artists (like Arsenal in his prime) made bump plays a full offensive system — entire team strategies built around deleting one defender at the exact right second.",
    },
    {
      name: "Half-flip recovery",
      category: "Movement",
      difficulty: 1,
      summary:
        "A backwards flip with an instant cancel turns you 180 degrees while staying in the play — the difference between defending a counter-attack and watching it.",
      steps: [
        "Jump and flip backwards, then instantly cancel by holding the stick/keys forward.",
        "Air roll mid-cancel so the wheels land flat and facing the new direction.",
        "Chain it into a wave dash for an immediate recovery in either direction.",
        "Use it to stop chasing every ball — turn and recover first, re-engage second.",
      ],
      proTip: "Half-flips are so fundamental that pros don't even consider them a 'mechanic' — a missed half-flip in a replay marks a player as still learning, not struggling.",
    },
  ],
  pvp: {
    intro:
      "Rocket League PvP is a tempo contest disguised as car football: every rank below Grand Champion is lost on spacing, not speed. The dominant ranked pattern is double-committing — two teammates challenging the same ball — and the dominant counter is simply never doing it. Mechanical gap matters far less than who keeps more players in the play after every touch.",
    modes: [
      {
        mode: "Ranked 3v3 solo queue",
        advice: [
          "Don't touch the first kickoff ball unless you're the one spawned to take it — a contested kickoff is a goal conceded.",
          "Play behind your teammates' mistakes: third man exists to clean up, not to contest the same play.",
          "Mute chat at the first 'What a save!' — tilted teammates whiff more than bad ones.",
          "Force 50/50s and leave possessions early; ranked players can't read a soft touch or a fake.",
          "If two teammates both ball-chase, you play permanent third man — a boring win beats a fun loss.",
        ],
      },
      {
        mode: "Ranked 2v2 / duo queue",
        advice: [
          "Two-man rotation is brutal: your bad touch is a 1v1 — never challenge unless the ball is won or the miss is safe.",
          "Vocalize who's taking the kickoff in duo queue; silent double commits are instant Ls in 2s.",
          "Pass backward on purpose — a retreating touch is a setup, not a bailout.",
          "If your teammate is in a solo play, position for their expected touch, not where they are.",
        ],
      },
      {
        mode: "Tournaments / ranked 1v1",
        advice: [
          "1v1 is a different game: every touch is a decision, never boom the ball away under zero pressure.",
          "Possession beats mechanics — hold the ball, make them challenge, then beat the challenge.",
          "Kickoffs are rounds: study their kickoff habit in the first 3 spawns and counter it deliberately.",
          "Demo strategically in tournaments — a removed player in a tight series is worth a goal.",
          "Between games, adjust: counter the exact thing that just beat you instead of queueing the same plan.",
        ],
      },
    ],
    counterPlay: [
      "Against ball chasers: let them over-commit, then one-touch the ball over both of them into open space — they can't be in two places.",
      "Against freestylers: stay grounded, don't jump for fakes, and challenge only when the ball leaves their car — a flip reset needs you to bite.",
      "Against a turtle/goalkeeper: fake challenges, demo the backboard rotation, or force a pass instead of shooting — an over-challenged keeper concedes anyway.",
      "Against a heavy kickoff cheat team: neutral kickoff or backflip — give them the 50 and win the second ball at their corner boost instead.",
      "Against demo-heavy rotations: space your three players wider, bait the demo run with a fake approach, then punish the 2v3 they created.",
    ],
  },
  drills: [
    {
      name: "Fast aerial pack grind",
      duration: "15 min",
      how: "Run any top-rated 'Fast Aerials' training pack (Squishy's packs or 'Aerial Shots – Pass') 50 shots back-to-back — focus on boost usage, not scoring.",
      goal: "Reach the ball at height with 40+ boost left, every shot.",
    },
    {
      name: "Free play air roll laps",
      duration: "10 min",
      how: "Fly continuous laps around the arena in free play holding air roll, steering with only small corrections — never land, never touch the ground.",
      goal: "Three full laps without a wheel touching the floor; this is the air control foundation every aerial build needs.",
    },
    {
      name: "Backboard read reps",
      duration: "10 min",
      how: "Custom training pack 'Backboard Defense' or 'Wall Reads': replay every ball off your board, clear it over the imaginary pressure.",
      goal: "First-touch the rebound consistently instead of panic-doubling it into your own net.",
    },
    {
      name: "Kickoff variety rep",
      duration: "10 min",
      how: "Do 30 kickoffs against an All-Star bot, alternating speed flip, delayed flip, and a soft neutral touch — log which ball outcomes each produces.",
      goal: "Read the opponent's kickoff pattern in 3 spawns and pick a counter that wins the second ball, not the first.",
    },
    {
      name: "Dribble-to-flick in free play",
      duration: "15 min",
      how: "Free play, unlimited boost, self-pass off the backboard into a catch, then dribble three steps and flick at the top corner — repeat until boring.",
      goal: "Land the flick top-corner 5 times in a row with a defender-free setup before trying it in ranked.",
    },
    {
      name: "1v1 tournament grind",
      duration: "20 min",
      how: "Queue 5 straight ranked 1v1s with one rule: you cannot boom the ball unless a 50 is genuinely lost — every other touch stays controlled.",
      goal: "Your forced-mistake game sharpens; possession play is what actually carries through Champion.",
    },
  ],
  proSettings: [
    {
      player: "SquishyMuffinz",
      team: "NRG (former, retired)",
      notes: "The mechanical godfather of car control, retired from pro play — copy his spacing and his 'always exactly positioned' movement; his camera settings (steep FOV-110 class) are what most pros still base theirs on.",
    },
    {
      player: "jstn",
      team: "FUT Esports (ex-NRG)",
      notes: "Cleanest power-shooter in the game — study how he generates 100+ kph shots off half-touches, and how he takes the SECOND ball after kickoff instead of the first.",
    },
    {
      player: "M0nkey M00n",
      team: "Twisted Minds (ex-Vitality, ex-BDS)",
      notes: "The complete modern player — copy his boost pathing and how he turns a zero-possession game into constant pressure without ever wasting a touch.",
    },
    {
      player: "yanxnz",
      team: "FURIA",
      notes: "The dribble/flick king — his first-touch-to-flick is the fastest in the world; watch how he manufactures shots from balls everyone else plays safe.",
    },
    {
      player: "Atomic",
      team: "NRG",
      notes: "One of the best 1v1/2v2 players in NA and an RLCS 2025 world champion — copy his possession patience and fake-50 discipline; he wins the second ball, not the first, on almost every kickoff.",
    },
  ],
  commonMistakes: [
    "Double-committing — two players challenging the same ball is how 80% of ranked goals get conceded.",
    "Ball-chasing every touch — rotating out through the back post is the play, not an admission of defeat.",
    "Boost-begging the corners — fighting your own teammate for 100 boost while the play moves on without either of you.",
    "Booming every possession away — a free clear is just giving the ball back with extra steps.",
    "Panic-jumping for fakes — freestylers don't beat you, your committed flip does; stay grounded.",
    "Breaking rotation to chase your own missed touch — the recovery is worth more than the hero dive.",
  ],
  metaNote:
    "The current era rewards possession and 50/50 reads over pure mechanics — top teams win by slowing the game down, taking controlled touches, and punishing over-extensions rather than out-freestyling opponents.",
};

export default content;

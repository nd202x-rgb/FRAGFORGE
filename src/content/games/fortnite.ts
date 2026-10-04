import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "fortnite",
  overview:
    "Fortnite is a 100-player battle royale where gunfights are only half the game — building and editing turn every fight into vertical, three-dimensional chess. Ranked is decided by who survives the mid-game; tournaments are decided by storm surge and placement math. The players who climb aren't the flashiest — they're the ones who manage materials, filter their fights, and rotate before the lobby does.",
  skillPillars: [
    "Building speed",
    "Edit timing",
    "Piece control",
    "Box fighting",
    "Aim and tracking",
    "Rotation and storm play",
  ],
  techniques: [
    {
      name: "Cranking 90s",
      category: "Build",
      difficulty: 2,
      summary:
        "The vertical speed move — spiral walls and ramps around yourself to gain a full level of height per rep, faster than any other build pattern.",
      steps: [
        "Start on a ramp and jump, placing a wall in front of your landing spot.",
        "Turn 90 degrees mid-air, place a second wall, then a ramp beneath you.",
        "Land on the ramp, sprint up it, and repeat the wall-wall-ramp cycle.",
        "Chain 3-4 reps — each one gains a level while covering you from three angles.",
      ],
      proTip: "Pros don't count pieces — they drill 90s on rhythm in freebuild until it's reflexive, then only speed up when a real fight demands height.",
    },
    {
      name: "Right-hand peek",
      category: "Positioning",
      difficulty: 3,
      summary:
        "Fight from the right edge of your own cover so the enemy sees a sliver of your model while you hold a full view of them.",
      steps: [
        "Box up and put your window on the left side; stand on the right half of the box.",
        "Keep your body behind the right wall edge — only your shoulder and crosshair cross the line.",
        "Edit the window only to shoot, then reset it between every shot.",
        "From their angle you're nearly invisible; from yours it's a fair fight.",
      ],
      proTip: "Every pro fights off their right shoulder by default — if you're exposed on the left side of your own box, you're holding it backwards.",
    },
    {
      name: "Piece control",
      category: "Build",
      difficulty: 4,
      summary:
        "Build into and around the enemy's box to steal their walls, floor, and cone — once you own their builds, their box is your kill box.",
      steps: [
        "Pressure the enemy wall until it breaks, then place your own wall instantly — the wall replace.",
        "Claim the inside: drop a floor and cone into their space to cut their movement options.",
        "Take the side walls too — own two of their three exits before you open anything.",
        "Edit a window in a wall YOU own and take the shot — never edit a wall they can reset on you.",
      ],
      proTip: "Peterbot wins fights before the first shotgun shot — watch his clips: he claims the cone and both side walls, then edits the enemy into a box with no exit.",
    },
    {
      name: "Box fighting",
      category: "Build",
      difficulty: 3,
      summary:
        "The close-quarters language of comp Fortnite — edits, resets, and trades inside one-tile fights where patience beats speed.",
      steps: [
        "Fight from full builds only — never trade damage standing in the open.",
        "Edit when you have a shot lined up, fire, and reset immediately — every open second is their turn.",
        "Track their habits: a player who keeps opening the same window is telling you exactly when they'll peek.",
        "Losing the exchange? Turtle — reset every wall and bait them into over-peeking your held angle.",
      ],
      proTip: "Box fighting is a rhythm game — pros fake the edit twice to read your reaction, then open on the third count when you're committed.",
    },
    {
      name: "Edit timing and confirmation",
      category: "Edit",
      difficulty: 3,
      summary:
        "The edit only counts when you confirm — clean edit-aim-confirm timing beats raw finger speed every fight.",
      steps: [
        "Never pre-edit a live wall — a blue edit on their wall is a death sentence.",
        "Hold edit, select tiles, confirm — with your shotgun already aimed at the opening.",
        "Reset with the same keybind speed every rep until it's one motion, not three.",
        "Only walk through the edit if you see the enemy — cancel the peek instead of trading blind.",
      ],
      proTip: "Mongraal's edits look instant because his aim is already through the window — the confirm is the last fraction of a move he pre-aimed.",
    },
    {
      name: "High-ground retakes",
      category: "Build",
      difficulty: 4,
      summary:
        "When an enemy takes height, structured retake patterns let you fight back up — straight-line ramp pushes just feed them the easy shot.",
      steps: [
        "Never chase straight up their ramp — you'll eat a floor-and-cone block every time.",
        "Pick a retake pattern: protected ramp-rush or 90s into a double-edit around their sightline.",
        "Build cover while you climb — walls behind, floors above — height without protection is a target.",
        "If they stay boxed on top, floor-and-cone them from below to claim the layer, then hold it.",
      ],
      proTip: "Pros only retake when forced — the smarter counter to losing height in stacked lobbies is tarping low and re-engaging after they have to drop.",
    },
    {
      name: "AR-to-SMG pressure rhythm",
      category: "Aim",
      difficulty: 2,
      summary:
        "Break the wall with AR spray, own the replace or fire through the gap, and never over-spray yourself into an empty mag mid-fight.",
      steps: [
        "Spray their wall with AR until it's one bullet from breaking.",
        "Swap to your build and place on their wall slot — own the replace, or shoot the instant it drops.",
        "While they panic-rebuild, punish with shotgun or track them through the hole with SMG.",
        "Cap your spray at 6-8 rounds — a full magazine is worth more than one broken wall.",
      ],
      proTip: "Ranked lobbies spray endlessly and reload into free deaths — pros spray in short bursts so a full shotgun tube is always ready when the wall falls.",
    },
    {
      name: "Tarping",
      category: "Build",
      difficulty: 2,
      summary:
        "Wrap yourself in floors and cones while rotating so cross-map tags and snipers can't touch you — the default endgame movement.",
      steps: [
        "Place a floor and cone inside your box before moving — the cone blocks overhead angles.",
        "Hop in short bursts: place two walls ahead, break or edit through, repeat.",
        "Tarp along the dead side of the zone, never through mid-map traffic.",
        "Spend the mats — 150 wood to save 75 HP is the best trade in the game.",
      ],
      proTip: "In stacked endgames the whole lobby is one moving tarp — learn to slip floor-and-cone layers without stopping or you're free damage for Zone Wars players.",
    },
    {
      name: "Material discipline",
      category: "Economy",
      difficulty: 2,
      summary:
        "Farming is a route, not a chore — high-yield mats on your drop path and smart wood/brick/metal budgeting decide fights before they start.",
      steps: [
        "Farm on the drop path: fences, POI-edge trees, and vehicles give the most mats per swing.",
        "Enter fights only above ~300 mats — below that, disengage and farm; you're gambling your life otherwise.",
        "Budget by material: brick and metal for hold boxes, wood for fast pushes and retakes.",
        "Loot eliminated players' mats instantly — it's part of the fight, not an afterthought.",
      ],
      proTip: "FNCS winners route their entire early game around material density — Bugha's consistency streak started with the farm route, not the aim.",
    },
    {
      name: "Deadside rotations",
      category: "Macro",
      difficulty: 4,
      summary:
        "Rotate where the lobby isn't — the far side of the zone away from popular drops keeps you out of third parties all game.",
      steps: [
        "Read the pull: the dead side is the zone edge furthest from where most players dropped.",
        "Rotate earlier than feels necessary — moving first costs nothing, moving last costs everything.",
        "Skirt the storm edge instead of crossing through the middle of the zone.",
        "If your entry spot is held, tarp the last stretch — they expect dry runners, not a moving wall.",
      ],
      proTip: "Endgame lobbies live or die on which side they enter zone — the winning route is the one nobody else had to fight for.",
    },
    {
      name: "Surge-tag discipline",
      category: "Macro",
      difficulty: 5,
      summary:
        "In stacked comp lobbies, storm surge kills passive players — you must farm damage tags early to stay above the threshold or the game itself drains your HP.",
      steps: [
        "Watch the surge warning — when it's active, every second not dealing damage is costing you.",
        "Tag every safe angle early: POI pokes, vehicle chases, cross-map taps all count.",
        "Farm tags, not kills — 100 damage from safety beats a 200-damage fight that 50/50s you.",
        "Below threshold? Force the smartest available fight NOW — surge ticking in a box is how half of comp lobbies die.",
      ],
      proTip: "Peterbot treats surge as a quota — he takes every cheap poke angle in the first two zones, then plays the endgame with zero pressure on his own terms.",
    },
    {
      name: "Pick-your-fight filter",
      category: "Mental",
      difficulty: 3,
      summary:
        "The ranked killer is taking every fight — pros run a three-question filter before engaging: mats, position, third-party risk.",
      steps: [
        "Before you shoot, check mats, cover, and who else is close — all three green or you don't engage.",
        "Disengage losing trades instantly: box, heal, reset — there's no honor in a 40-60 exchange.",
        "Third-party instead of first-party — let two teams break each other, then clean up the winner.",
        "One knock? Push. Two downs in ten seconds? Leave — the rotation won't pay for the extra kills.",
      ],
      proTip: "Bugha's 'boring' playstyle is a filter, not a lack of skill — he skips fights everyone else takes because the math never favors the aggressor.",
    },
  ],
  pvp: {
    intro:
      "Fortnite PvP is a marathon of micro-decisions: build or hide, fight or farm, rotate or wait. Ranked is decided by mid-game survival and elim efficiency; tournaments are decided by storm surge and placement points. The dominant ranked pattern is over-fighting — taking every angle because mechanics feel free. The dominant counter is disciplined disengagement and arriving at endgame with mats, position, and surge clearance.",
    modes: [
      {
        mode: "Ranked Battle Royale",
        advice: [
          "Land edge-of-POI, not center — the middle of a contested drop is a 50/50 lottery you don't need.",
          "Fight in the first two zones only with 300+ mats and a clear escape route.",
          "Placement pays at every rank checkpoint — a top-10 with 3 elims beats a hot 15th with 6.",
          "Don't turtle after every tag — a held box is a dinner bell for every third party in the POI.",
          "Assume zero team help in solo queue — only take fights you can clean up alone.",
        ],
      },
      {
        mode: "FNCS / Cash Cup tournaments",
        advice: [
          "Lock one drop spot for the whole event — rotating your landing mid-tournament bleeds points.",
          "Farm surge tags from minute one: every POI poke, vehicle fight, and cross-map tap counts.",
          "Placement outscores early elims — play for consistent top-15s, not hero games.",
          "Plan your endgame route off the first zone pull — the dead-side rotate wins more matches than peak mechanics.",
          "Track the lobby count: under ~40 alive you can slow down; stacked lobbies demand proactive tags.",
        ],
      },
      {
        mode: "Zero Build ranked",
        advice: [
          "Treat terrain like builds — rotate cover to cover, never across open ground.",
          "Movement items replace mats — shockwaves and grapples win the fights guns can't.",
          "Third parties are deadlier without walls — finish fights fast or don't start them.",
          "Head-glitched ridges and high ground matter even more here — claim them before the zone does.",
        ],
      },
    ],
    counterPlay: [
      "Against box-holders who never peek: replace their wall, don't enter — piece-control the cone and sides, then edit them into a box with no exits.",
      "Against nonstop W-key pressure: stop trading, tarp sideways, and let them over-extend — an over-extended keyer is a free kill in the open.",
      "Against high-ground teams in endgame: don't retake early — play the low layers and shoot them out only when the storm forces them down.",
      "Against heal-off stallers in late circles: chip them early, claim their med space with builds, and keep damage ticking so they can't breathe.",
      "Against wall-spammers spraying your box: hold turbo-build, pre-place a ramp inside, and peek only the moment their mag runs dry.",
    ],
  },
  drills: [
    {
      name: "Freebuild warmup",
      duration: "10 min",
      how: "Private Creative island: crank 90s across the map, double-edit through floor-and-ramp tunnels, then box up and edit out every side — non-stop for 10 minutes.",
      goal: "Your first 90 in a real fight should feel identical to your hundredth rep.",
    },
    {
      name: "Edit course runs",
      duration: "10 min",
      how: "Load a top edit-course map from Creative discovery and run full clears until you can string every edit without a reset or a missed tile.",
      goal: "Consistent full-course clears with zero failed edits — speed comes after clean.",
    },
    {
      name: "Piece-control trainer",
      duration: "10 min",
      how: "Run a dedicated piece-control Creative map: wall replace, floor-and-cone the box, claim both side walls before the timer resets.",
      goal: "Own three sides of the target box in under 2 seconds per rep.",
    },
    {
      name: "Realistic 1v1 / boxfight rounds",
      duration: "15 min",
      how: "Queue box-fight or realistic PvP maps against a friend or randoms; treat every round like endgame — limited mats, no excuses, win the wall game.",
      goal: "Win rounds by owning pieces, not out-aiming — if aim is carrying you, drill piece control more.",
    },
    {
      name: "Zone Wars lobbies",
      duration: "15 min",
      how: "Queue Zone Wars — it's endgame simulation: tiny moving zones, real builds, stacked lobby tarping. Play it like a tournament final.",
      goal: "Consistently reach the final moving circles — late-game panic is the habit you're deleting.",
    },
    {
      name: "VOD review — your own deaths",
      duration: "10 min",
      how: "Record a ranked session and watch only your deaths. Label each one: over-committed fight, no mats, late rotate, or lost piece control.",
      goal: "Name your single biggest leak — that's your drill for next week.",
    },
  ],
  proSettings: [
    {
      player: "Bugha",
      team: "Dignitas",
      notes: "The consistency king — a World Cup winner built on low-variance decisions: never over-fight, rotate early, treat every match like a scrim. Copy the boring discipline, not just the clips.",
    },
    {
      player: "Peterbot",
      team: "Falcons",
      notes: "The mechanics ceiling of modern comp Fortnite — elite piece control, first-fight aggression, and flawless surge management. His Creative clips are basically the current meta playbook.",
    },
    {
      player: "Clix",
      team: "XSET",
      notes: "Pure mechanical confidence — the cleanest box-fight edits in the game. Copy his commit-or-cancel decisiveness: he never half-peeks an edit or hesitates on a push.",
    },
    {
      player: "Mongraal",
      team: "FaZe Clan",
      notes: "Still the edit-speed benchmark — his Creative grind is famous for a reason. Copy his practice structure: edit courses and freebuild reps before touching ranked.",
    },
    {
      player: "Mero",
      team: "Xen",
      notes: "The controller consistency model — calm aim, smart fight selection, zero wasted mechanics. Copy how he only plays angles he already owns and never chases lost trades.",
    },
  ],
  commonMistakes: [
    "Taking every 50/50 — hot-drop coin flips are how ranked players stay hard-stuck.",
    "Boxing after every tag — turtling to heal rings the dinner bell for every third party nearby.",
    "Rotating late through the middle of zone — the lobby is already holding that line.",
    "Overbuilding simple fights — three boxes of mats burned on a fight that needed two walls.",
    "Tunnel-visioning one player — their teammate is already flanking your tarp.",
    "Never farming on route — entering mid-game fights at 150 mats is playing on hard mode.",
  ],
  metaNote:
    "The current era is fast and mechanic-forward — piece control and aggressive box fighting define comp lobbies, while movement items decide Zero Build fights. Storm-surge discipline still separates tournament grinders from ranked mechanics.",
};

export default content;

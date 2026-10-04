import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "dota-2",
  overview:
    "Dota 2 is a 5v5 MOBA where 120+ heroes draft into an endlessly deep strategy game — lanes, jungle camps, runes, and buybacks all interact. Its scene feeds The International through open qualifiers and year-round tours, so ranked players climb inside the same ecosystem the pros play in. Rank is decided less by reaction time and more by decision quality: where you are on the map, what you fight for, and when you refuse to fight.",
  skillPillars: [
    "Last hitting and denying",
    "Creep equilibrium",
    "Map awareness",
    "Farm efficiency",
    "Draft and itemization",
    "Teamfight positioning",
  ],
  techniques: [
    {
      name: "Last hit and deny discipline",
      category: "Farm",
      difficulty: 1,
      summary:
        "Every last hit is ~40+ gold and every deny halves the enemy's lane XP — laning is a resource race you win creep by creep.",
      steps: [
        "Watch creep health bars, not hero animations — hit when your damage kills in one attack.",
        "Prioritize ranged creeps and siege creeps: they hold the most gold and XP per hit.",
        "Right-click your OWN creeps below half HP to deny — the enemy loses XP entirely.",
        "Under your tower, count the hits it takes: melee creeps die at 2 tower hits + your attack, ranged need a setup hit.",
      ],
      proTip: "Nisha's mid replays show 70+ CS at 10 minutes while denying constantly — he treats every creep as a coin flip he refuses to lose, not background noise.",
    },
    {
      name: "Creep blocking",
      category: "Lane",
      difficulty: 2,
      summary:
        "Body-block your first wave so it meets the enemy wave on YOUR side of the river — free high-ground advantage and safer CS.",
      steps: [
        "At the horn, walk in front of your wave and stop them from running ahead.",
        "Stutter-walk in short clicks to physically slow the front creeps.",
        "Aim to meet the enemy wave just downhill of your own tower.",
        "Repeat on wave two if the first block succeeded — you keep the equilibrium for free.",
      ],
      proTip: "Every pro mid lands the first block perfectly — watch Quinn's POV: the block IS the lane, and he re-blocks wave 2 while the enemy is still reacting to wave 1.",
    },
    {
      name: "Creep aggro pulling",
      category: "Lane",
      difficulty: 3,
      summary:
        "Right-click the enemy hero to drag creeps toward you — reposition the wave to steal a last hit, deny a creeps, or fix a broken equilibrium.",
      steps: [
        "Stand in your creeps' aggro range (~500 units) and right-click the enemy hero.",
        "Cancel the attack immediately — the creeps peel toward you regardless.",
        "Drag them into YOUR ranged creep so it dies fast and shifts equilibrium your way.",
        "Use it to last-hit under tower or to pull the enemy's farm out of safety.",
      ],
      proTip: "Malr1ne uses aggro pulls every single wave — he isn't harassing you, he's programming your creeps to die exactly where he wants them.",
    },
    {
      name: "Pulling and stacking camps",
      category: "Support",
      difficulty: 2,
      summary:
        "Pulling your small camp into the lane resets equilibrium and feeds your carry safe farm — stacking turns one camp into three.",
      steps: [
        "Hit the small neutral camp at :53–:55 so creeps chase you into the lane wave.",
        "Let the lane creeps kill the neutrals — deny yours, tank none, get XP.",
        "If the pull spawns another camp, pull THAT one too for a double pull.",
        "When nothing connects, hit the camp at :54 and walk away — it respawns stacked.",
      ],
      proTip: "Boxi stacks 3–4 camps by minute 8 almost every game — the stack itself isn't the play, it's the free farm and heal he hands his carry later.",
    },
    {
      name: "Animation canceling / stutter-stepping",
      category: "Mechanics",
      difficulty: 3,
      summary:
        "Your attack's damage lands before the swing animation finishes — cancel the recovery and you attack faster and reposition while hitting.",
      steps: [
        "Issue the attack command; the moment damage lands, instantly click to move.",
        "Attack again the instant your hero can — never let the full backswing play.",
        "Practice on ranged heroes first; melee backswings are easier to miss.",
        "Same trick applies to spells — cancel cast animations to fake out a fight.",
      ],
      proTip: "Watch Yatoro's right-click heroes — he attacks, moves one step, attacks again; the extra repositioning is why his manfights always look effortless.",
    },
    {
      name: "Efficient farm patterning",
      category: "Farm",
      difficulty: 3,
      summary:
        "Farm isn't random — it's a circuit between lane creeps and jungle camps that keeps you within 5 seconds of the next resource at all times.",
      steps: [
        "Push the wave in your lane, then immediately cut into the nearest jungle camp.",
        "Farm the camp, return to the wave when it pushes back to you.",
        "Carry a TP at all times so you can snap to the farm nobody else is taking.",
        "Never sit in one camp for more than one clear — idle seconds are lost gold.",
      ],
      proTip: "Amira's carry runs are map-circuit demos — she's never more than a TP away from three simultaneous farm sources, and she finishes heroes with a 200+ CS lead, not kills.",
    },
    {
      name: "Power rune and bounty control",
      category: "Macro",
      difficulty: 2,
      summary:
        "Runes every 2 minutes are free gold, mana, and bottle charges — the team that owns rune timers owns the mid game.",
      steps: [
        "Mid leaves lane 15 seconds early for the 2/4/6-minute rune spawns.",
        "A support walks with them — 2v1 rune fights are free, solo rune fights are coin flips.",
        "Take the rune even if it's a bad one — the enemy gets nothing.",
        "Off the top of your head: bounty runes at :00/:03, power runes at :06/:08, wisdom at :07+.",
      ],
      proTip: "Team Falcons builds entire early games around rune control — two heroes converge on every power rune while the carry eats the lane alone.",
    },
    {
      name: "Smoke gank execution",
      category: "Macro",
      difficulty: 4,
      summary:
        "Smoke of Deceit hides you from every ward except the sentry you walk through — it's how pros turn a farming lead into a won fight.",
      steps: [
        "Call the smoke 20 seconds early so two teammates stage, not one.",
        "Smoke up AWAY from the enemy's farm pattern — don't walk into their warded triangle.",
        "Target their primary farmer, not a random support — the pickoff must hurt.",
        "Back off the instant the wave they're farming is cleared — don't stay for the counter-smoke.",
      ],
      proTip: "Puppey's teams smoke twice per game, not once — the first smoke reads their farm pattern, the second one kills it.",
    },
    {
      name: "Defensive TP reactions",
      category: "Teamfight",
      difficulty: 3,
      summary:
        "A 100g TP scroll is the highest-impact item in the game — the instant a teammate gets dove, you teleport and turn the fight.",
      steps: [
        "Keep TP off cooldown after minute 10, especially as a support or offlaner.",
        "When a dive starts, TP to the tower NOT to the dying ally — arrive where you fight, not where they die.",
        "Turn on the divers under your tower: they took tower shots, you get free kills.",
        "After the turn, immediately push the lane they came from — punish their rotation.",
      ],
      proTip: "Team Liquid's comebacks are built on this: every dive gets answered by 3 TPs in 2 seconds, and suddenly their 'free pick' cost them the game.",
    },
    {
      name: "Buyback discipline",
      category: "Economy",
      difficulty: 3,
      summary:
        "Buying back after a won fight wins games; buying back after a lost one throws them — the rule is the situation, not the feeling.",
      steps: [
        "Keep buyback status visible — hold enough gold to cover it before big fights.",
        "Never BB for a Tier 1 or to 'help' a lost fight — that's just dying twice.",
        "BB when your presence converts a won fight into towers, Roshan, or the game.",
        "If you're dead and BB is needed, spend down to keep it ready — losing the item is cheaper than losing the base.",
      ],
      proTip: "Nisha holds buyback so religiously his gold lead looks smaller than it is — then he buys back once and the enemy's 'winning fight' turns into a throne push.",
    },
    {
      name: "High-ground siege patience",
      category: "Macro",
      difficulty: 4,
      summary:
        "Sieging the enemy high ground is where most games are thrown — you don't win by forcing it, you win by making them come down to you.",
      steps: [
        "Take the outer towers first — deny their safe farm lanes before approaching high ground.",
        "Park a sieging hero on the high ground with aegis or a save behind them.",
        "Force ONE reaction: a buyback, a desperate dive, a cooldown blown on the tank.",
        "Back off the moment they commit — their clock now runs out faster than yours.",
      ],
      proTip: "Team Spirit's 2023 TI run was a masterclass in this — they'd poke high ground until the enemy felt forced, then vanish and farm while the enemy chased ghosts.",
    },
  ],
  pvp: {
    intro:
      "Dota PvP is a drafting and discipline game disguised as a mechanics contest. Below Ancient, most losses come from laning and poor fight selection; above it, they come from bad macro — refusing good fights and taking terrible ones. The dominant ranked pattern is dying on the same overcommit twice; the dominant counter is refusing the fight, farming the pattern, and trading objectives.",
    modes: [
      {
        mode: "Ranked solo queue",
        advice: [
          "Queue your best role and keep a 3-hero pool — ranked rewards comfort, not creativity.",
          "Dodge obvious draft griefing in hero select: 5 carries or 4 greedy picks loses before creeps spawn.",
          "Mute tilted teammates instantly — comms only matter for missing calls, rune timers, and smoke calls.",
          "Play around your strongest laner: if mid is winning, TP and fight with them, not on your own island.",
          "Keep a TP scroll from minute 5 — the ranked-killer isn't the dive, it's the teammate who couldn't react.",
        ],
      },
      {
        mode: "Party / 5-stack & Battle Cup",
        advice: [
          "Draft first-pick comfort and counter last-picks — don't build a comp around a hero someone 'can play'.",
          "Designate ONE shotcaller and one objective caller; contested calls lose more games than bad aim.",
          "Rehearse one timing push — e.g., 10-minute power rune into a tower — instead of freestyling every game.",
          "Review one replay between games as a team: what vision beat you, who carried their lane, where to smoke next.",
        ],
      },
      {
        mode: "Turbo / unranked warm-up",
        advice: [
          "Turbo is for mechanics reps: new heroes, animation cancels, combo practice — not strategy.",
          "Unranked is for new heroes and role swaps: a carry learning support should practice pulls, not ranked.",
          "Demo mode and lobby games beat both for pure fundamentals: last-hit, deny, and stack timers before queueing.",
        ],
      },
    ],
    counterPlay: [
      "Against split pushers (Nature's Prophet, Tinker): TP one defender home and push the other lanes as 4 — you trade faster than they do.",
      "Against pickoff drafts (Spirit Breaker, Slardar, Bounty Hunter): ward your OWN farm pattern, bunch up on the first missing call, and make the pick cost them a teamfight.",
      "Against zoo/illusion lineups (Beastmaster, Lycan): cut the wave and turtle — clear the creeps, not the heroes, and force them onto high ground without a wave.",
      "Against an early deathball: dodge their timing, farm your safe triangle, and trade side towers until their window closes.",
      "Against a snowballing mid: rotate a support for the 6-minute rune and smoke into them before their first big item completes.",
    ],
  },
  drills: [
    {
      name: "Last-hit and deny reps",
      duration: "10 min",
      how: "Demo mode or a custom mid lobby vs an Unfair bot: get 60+ CS at 10 minutes with no items while denying every creep you can't take.",
      goal: "Consistent 70+ last-hit score and a deny count that forces the bot to play from behind.",
    },
    {
      name: "Stack and pull circuit",
      duration: "8 min",
      how: "In a lobby as pos 4/5: pull the small camp at :54, stack the nearby camp twice by minute 4, then pull again. Repeat on both lanes.",
      goal: "3+ stacked camps and a stable equilibrium by minute 6 without dying.",
    },
    {
      name: "Animation cancel practice",
      duration: "5 min",
      how: "Demo mode on a ranged hero: attack a practice target and cancel every backswing with a move command — 50 clean reps without a full swing.",
      goal: "Stutter-stepping feels automatic — your hero never stands still between attacks.",
    },
    {
      name: "TP reaction reps",
      duration: "10 min",
      how: "Custom lobby with friends: one side dives a tower, the other TPs in. Practice the tower TP, the turn, and the immediate counter-push.",
      goal: "Your TP arrives before the dive finishes — every single attempt.",
    },
    {
      name: "Death replay audit",
      duration: "10 min",
      how: "Watch your own ranked replay and only your deaths. Tag each as: bad lane position, bad fight selection, or bad map read.",
      goal: "Find which single mistake type killed you most — that becomes this week's drill.",
    },
  ],
  proSettings: [
    {
      player: "Yatoro",
      team: "Team Spirit",
      notes: "Two-time TI-winning carry — copy his farm-to-fight conversion, fearless itemization, and habit of arriving at the fight already ahead. Watch his replays, not just his KDA.",
    },
    {
      player: "Malr1ne",
      team: "Team Falcons",
      notes: "The dominant young mid — copy his lane-first approach, his rune control, and how he converts a won lane into a won map by minute 10.",
    },
    {
      player: "Nisha",
      team: "Team Liquid",
      notes: "The most mechanically clean mid alive — copy his creep equilibrium, his deny pressure, and his obsessive buyback discipline in every mid-game.",
    },
    {
      player: "Boxi",
      team: "Team Liquid",
      notes: "The best pos-4 aggressor in the world — copy his lane harassment patterns, his roam timing off the first power rune, and his sacrificial teamfight entries.",
    },
    {
      player: "Puppey",
      team: "Team Secret",
      notes: "The greatest captain and drafter in Dota history — copy his draft thinking (comfort first, counter last) and how he structures every smoke and objective call.",
    },
  ],
  commonMistakes: [
    "No TP scroll after minute 5 — a 100g scroll turns a losing dive into a won fight or saves you 250 gold of dead time.",
    "Chasing kills across the river instead of taking the tower the fight just opened.",
    "Picking comfort heroes into hard counters — a counter-picked mid loses the game before the first creep dies.",
    "Farming the same pattern three camps in a row — you are broadcasting your route to every missing enemy.",
    "Buying back to save a Tier 1 — BB is for high ground and Roshan, not for feelings.",
    "Fighting with ultimates on cooldown — walking into the next engagement without Ravage or Black Hole is a donated fight.",
  ],
  metaNote:
    "The current era rewards early teamfight and deathball timing — tanky offlaners, aura items, and tempo mids group right after the first Roshan instead of farming a second. Games run shorter and pure split-pushing only works once a team already controls the map's two safe lanes.",
};

export default content;
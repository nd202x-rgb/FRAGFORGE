import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "apex-legends",
  overview:
    "Apex Legends is a 60-player battle royale where god-tier movement meets a long time-to-kill — winning a fight is about sustained tracking, positioning, and tempo, not landing one lucky bullet. Its competitive scene, from ranked Predator grinds to ALGS LAN, is defined by third-party chaos: the squad that finishes fights fast and loots faster wins. Ranked is decided less by mechanics than by how often you take a fight you had no business taking.",
  skillPillars: [
    "Movement tech",
    "Tracking aim",
    "Armor and tempo management",
    "Third-party timing",
    "Zone rotation",
    "Legend ability synergy",
  ],
  techniques: [
    {
      name: "Slide-jump momentum chain",
      category: "Movement",
      difficulty: 2,
      summary:
        "Sprint, slide, and jump at the slide's peak to keep 20%+ extra speed — the base rhythm every Apex player moves on.",
      steps: [
        "Reach full sprint for at least one second — the slide only chains off full speed.",
        "Press crouch to slide, then jump within the first half of the slide, before it decays.",
        "Repeat on every downhill and flat stretch; uphill, weave slides between cover.",
        "In fights, slide-jump INTO cover, then counter-slide out to break their tracking.",
      ],
      proTip: "Pros never run flat — watch any Predator lobby and every entry angle is opened with a slide-jump. If you're standing still, you're a target.",
    },
    {
      name: "Wall bounce",
      category: "Movement",
      difficulty: 4,
      summary:
        "Jump at a wall mid-air, drop all inputs at contact, and jump off it — a full redirect that enemies cannot track.",
      steps: [
        "Sprint at the wall at a shallow angle, not head-on.",
        "Slide-jump into it so you reach the wall still moving upward.",
        "Release W and all movement keys the instant you touch it — touching W kills the bounce.",
        "Tap jump on contact and air-strafe away; you launch horizontally off the wall.",
      ],
      proTip: "Pathfinder and Horizon players bounce mid-grapple or mid-lift — a wall bounce off a box turns a losing door fight into a free reset.",
    },
    {
      name: "Superglide",
      category: "Movement",
      difficulty: 5,
      summary:
        "Climb a ledge and hit jump + crouch on the exact frame the mantle ends — a massive speed boost off any chest-high object.",
      steps: [
        "Sprint at a chest-high ledge or box and hold climb until your hands grab.",
        "The frame your viewpoint settles on top, hit jump and crouch together (bind both to one key or scroll wheel).",
        "Add W only after the boost fires; pressing it early eats the glide.",
        "Chain it off ziplines and doors — anywhere a mantle exists, a superglide exists.",
      ],
      proTip: "Faide and other movement demons superglide out of every doorway mid-fight — it's the one tech worth practicing frame-by-frame in the Range for a week.",
    },
    {
      name: "Tracking over flicking",
      category: "Aim",
      difficulty: 2,
      summary:
        "Apex's long TTK means you win by riding the strafe with a full magazine — smooth tracking beats highlight-reel flicks.",
      steps: [
        "Lower your sens until you can micro-adjust on a strafing dummy for a full R-99 mag.",
        "Aim center-mass, not head — missing headshots costs more DPS than body damage loses.",
        "Match their strafe direction with your own strafe: moving opposite makes you twice as hard to hit.",
        "Only flick on the first bullet — after that it's all tracking discipline.",
      ],
      proTip: "Genburten's controller beams look like aimbot because he never overcorrects — practice holding your crosshair glued to center while THEY move, not chasing them.",
    },
    {
      name: "Recoil smoothing with movement",
      category: "Aim",
      difficulty: 3,
      summary:
        "Apex recoil is pattern-based, and strafing while spraying smooths the horizontal kick — beam SMGs at full speed instead of standing still.",
      steps: [
        "Spray a wall standing still to learn each gun's pattern (R-99 climbs, Flatline kicks right).",
        "Now strafe slowly left-to-right while spraying — the horizontal recoil visibly tightens.",
        "In fights, pair the strafe with their movement; you smooth your recoil AND dodge theirs.",
        "ADS only when the fight starts — hipfire-SMG the first 5 meters instead of zooming.",
      ],
      proTip: "Controller players dominate ALGS partly because aim assist rewards this exact technique: wide smooth strafes plus a tracking reticle. Copy the mechanic even on MnK.",
    },
    {
      name: "Deathbox armor swap",
      category: "Survival",
      difficulty: 2,
      summary:
        "Grab a fresh shield off a deathbox mid-fight instead of battery-ing — one menu press beats a 5-second heal.",
      steps: [
        "The instant you crack a shield and kill the owner, open their box — full shields are at the top.",
        "Click the body shield first, ALWAYS; it's the only item that wins the next second.",
        "Only grab ammo/meds after you're safe — looting in the open mid-fight is a death sentence.",
        "After the swap, immediately re-position; the third party heard the whole fight.",
      ],
      proTip: "Pros swap armor before the kill feed even finishes rendering. A white box swap in a 1v3 is worth more than any gold item on the ground.",
    },
    {
      name: "Ape off the knock",
      category: "Macro",
      difficulty: 3,
      summary:
        "A knock is a 20-second timer on a free 3v2 — the discipline is pushing the INSTANT it lands, not after you finish looting.",
      steps: [
        "Call the knock the moment it happens — the downed player's team is now trading 2 guns for 3.",
        "Push as a unit within 3 seconds; every second of hesitation lets them rez or reset shields.",
        "Slide past the knockdown shield — shoot around it or burn it with one shot only if it blocks the path.",
        "If the push stalls more than ~10 seconds, disengage to a headglitch before their third party arrives.",
      ],
      proTip: "Hal's TSM made a career of this: knock lands, all three fly in before the shield battery sound. Tempo kills more squads than aim does.",
    },
    {
      name: "High-ground headglitch",
      category: "Positioning",
      difficulty: 2,
      summary:
        "Hold positions where only your head and gun clear the edge — the enemy sees 10% of your hitbox while you see all of theirs.",
      steps: [
        "Before every fight, ask which piece of terrain or rooftop is the highest playable spot in the ring.",
        "Crouch or sit just below the edge so you peek by standing up — never by walking out.",
        "Shoot, drop back down to reload/heal, pop up on a different spot of the same edge.",
        "On low ground, use abilities (Valk jets, Horizon lift, Path grapple) to take height instead of fighting up it.",
      ],
      proTip: "Wattson and Catalyst hold headglitches for entire endgames — pros will lose a 3v1 rather than push up into a held headglitch, and so should you.",
    },
    {
      name: "Third-party timing",
      category: "Macro",
      difficulty: 4,
      summary:
        "Gunshots are a dinner bell — the winning squad arrives when both teams are one knock from dead, not when the first shot fires.",
      steps: [
        "Hear a fight? Stop looting and rotate toward it along COVER, not the open.",
        "Arrive in 15-30 seconds — early enough that shields are cracked, late enough that they're committed.",
        "Kill the weakest squad first (the one already knocked), then clean up the survivors.",
        "Spend no more than ~20 seconds fighting; a fourth party is already sprinting at you.",
      ],
      proTip: "ALGS edge teams farm placement AND kills this way. The amateur version is apeing the first shots you hear; the pro version is arriving exactly when the fight is decided.",
    },
    {
      name: "Zone-vs-edge rotation",
      category: "Macro",
      difficulty: 4,
      summary:
        "Decide each match whether you play zone (rotate early, hold god spot) or edge (late rotate, farm fights) — mixing them randomly gets you pinched.",
      steps: [
        "Read your drop's ring position: far drops with a recon legend favor early zone rotation via ring console or Evac Tower.",
        "Zone play: land, craft, and rotate to a power position before ring 2 closes — then gatekeep everyone rotating in.",
        "Edge play: loot deep, walk in with the ring at your back, and third-party the fights the zone forces.",
        "Never edge-rotate without mobility (Valk, Path, Evac Tower) — a dead zone catch ends the game.",
      ],
      proTip: "Sweet's NRG zone teams and Hal's edge teams both won lobbies — the difference between pro and ranked Andy is committing to ONE plan per match.",
    },
    {
      name: "Dome and door fighting",
      category: "Utility",
      difficulty: 3,
      summary:
        "Gibraltar bubbles, Catalyst doors, and plain doorways are reset buttons — weave in and out of them to turn a lost 1v1 into a reload race you control.",
      steps: [
        "When cracked, break line of sight first — a door, a dome edge, or a corner, in that order.",
        "In a Gibby dome, strafe across the bubble edge so you can shoot them but they can't hit you at the rim.",
        "On doors, hold the block, bait the enemy into the doorway, then punch/kick it open into their face — or stick an arc star through the crack.",
        "Use the covered 3 seconds to pop a cell or swap armor, never to peek early.",
      ],
      proTip: "Gibby players win 1v2s with nothing but a bubble and patience. The counter is the same skill: whoever owns the doorway owns the fight.",
    },
  ],
  pvp: {
    intro:
      "Apex PvP is a tempo game: every fight is a race between the knock and the next squad arriving. Low ranks lose fights they already won by looting mid-combat; high ranks win fights they should've lost because they arrived at the right second. The dominant ranked pattern is aping into a third party with no escape; the dominant counter is fast, disciplined disengages into headglitch cover.",
    modes: [
      {
        mode: "Ranked Battle Royale",
        advice: [
          "Landing split is death: pick one POI and land within one slide of your squad, even if it's contested.",
          "Play for KP early, placement late — two quick squad wipes in rings 1-2, then rotate for zone.",
          "Never fight in the open past ring 3; every poke trade rings the dinner bell for two squads.",
          "When your random teammates ape a bad fight, let them die and craft their banners — a 2-man top 5 beats a squad wipe at 14th.",
          "Ban the tilting comms, keep positional comms: 'one knocked on blue' wins rounds, your teammate's opinions don't.",
        ],
      },
      {
        mode: "Mixtape warm-ups (TDM / Control / Gun Run)",
        advice: [
          "Use Mixtape for mechanics only: tracking reps, movement lines, and slide-jump gunfights.",
          "In Control, practice retaking a held flag the way you'd retake a building — utility first, then the swing.",
          "Mirror your ranked legend pool: 20 reps on the character you queue is worth 100 on one you never play.",
          "Leave the moment Mixtape stops being reps — TDM kill-chasing builds ape habits that lose ranked games.",
        ],
      },
      {
        mode: "Scrims / tournaments",
        advice: [
          "Call ONE designated IGL and one fragger — three players calling rotates loses every endgame.",
          "Scout POI spawns before queueing: uncontested edge drop with a ring console beats a contested god drop.",
          "Play zone in finals-style lobbies: early rotate, Watson/Catalyst hold-down comps, placement over KP.",
          "Between games, review only two things: which fights you took without advantage, and which rotates got you pinched.",
        ],
      },
    ],
    counterPlay: [
      "Against an ape push: crack one shield, break line of sight through a door or dome, and let them walk into your team's crossfire.",
      "Against hold-down comps (Watson/Catalyst/Gibby): nade the anchor spot, shoot the fences and spikes out, then collapse through two angles at once — never funnel through one door.",
      "Against a third party mid-loot: leave the box, take the headglitch, and let the two fresh squads fight each other first.",
      "Against movement demons sliding at you: don't chase the slide — hold your angle, punch them once when they over-commit, and finish the strafe they can't cancel.",
      "Against edge teams gatekeeping your rotate: burn an Evac Tower or Valk ult to skip their lane entirely — fighting through a held rotate is a coin flip.",
    ],
  },
  drills: [
    {
      name: "Firing Range tracking reps",
      duration: "10 min",
      how: "In the Firing Range, set dummies to strafe and spray a full R-99/Flatline mag at each one, tracking center-mass only. No stopping to reset — continuous mags.",
      goal: "One-mag every strafing dummy at 15m before you queue — the long TTK punishes anyone who can't hold a beam.",
    },
    {
      name: "Movement line laps",
      duration: "10 min",
      how: "Run a lap of the Firing Range hitting one movement tech per object: slide-jump the flat, wall bounce off the tower, superglide the supply bins, mantle the boxes. Repeat the loop clean.",
      goal: "Five clean laps with zero failed tech — if you can't do it in the Range, you won't do it in a 1v2.",
    },
    {
      name: "Deathbox swap speedrun",
      duration: "5 min",
      how: "Drop loot on the ground, open the 'box', and practice grabbing ONLY the shield slot as fast as possible, then closing it and slide-jumping away. Repeat until it's one motion.",
      goal: "Sub-1.5-second shield grabs — muscle memory that wins the third-party.",
    },
    {
      name: "Knock-or-nothing discipline",
      duration: "20 min",
      how: "Queue pubs with a hard rule: you may only full-push a fight when you land a knock first. Every poke-trade ends with YOU disengaging to cover.",
      goal: "Unlearn dry-ape habits — if you never push without advantage, your win rate climbs before your aim does.",
    },
    {
      name: "Death review — your own feeds",
      duration: "10 min",
      how: "Record a ranked session and watch only your deaths. For each one ask: bad timing (third partied), bad position (no cover), or bad fight (no knock, no advantage)?",
      goal: "Name the single category that kills you most — that's the only thing to drill next week.",
    },
  ],
  proSettings: [
    {
      player: "ImperialHal",
      team: "TSM",
      notes: "The CEO of Apex IGL-ing — copy his tempo calling: instant ape off every knock, ruthless disengage the second a fight goes long, and 'we don't fight without advantage' discipline.",
    },
    {
      player: "Genburten",
      team: "DarkZero / Falcons",
      notes: "The controller demon — his tracking is the blueprint: glued reticle, wide smooth strafes, zero panic-flicking. Watch his SMG beams in slow motion to fix your overcorrection.",
    },
    {
      player: "Sweetdreams",
      team: "NRG",
      notes: "The zone mastermind — copy his early rotations and god-spot selection. His teams win endgames before the last ring because they chose the spot three rings ago.",
    },
    {
      player: "HisWattson",
      team: "FURIA",
      notes: "Controlled aggression incarnate — copy his push tempo: he apes harder than anyone but only on confirmed cracks and knocks, never on poke damage.",
    },
    {
      player: "Effect",
      team: "Alliance",
      notes: "The roller prodigy who humbled ALGS lobbies — copy his fight IQ in 1v1s: constant micro-peeks, armor swaps mid-fight, and never holding the same angle twice.",
    },
  ],
  commonMistakes: [
    "Looting deathboxes mid-fight — the shield swap is the only legal loot until the squad is wiped.",
    "Pushing without a knock — trading poke damage then aping into full shields is how every ranked loss starts.",
    "Standing still to shoot — if your feet aren't strafing, you're a practice dummy with a name tag.",
    "Chasing kills across open ground — one dead squad is worth less than the third party your gunshots summoned.",
    "Ignoring the ring timer — fighting with 20 seconds to a far rotate means you're already dead, the kill feed just hasn't caught up.",
    "Fighting through a held rotate — walking into a gatekept choke is a donation; burn the Evac Tower and go around.",
  ],
  metaNote:
    "Recent seasons have swung between defensive hold-down comps (Watson/Catalyst/Gibraltar) and full-ape aggression — the constant is that coordinated pushes and early zone rotation beat static camping, while solo-hero movement plays get punished harder every era.",
};

export default content;

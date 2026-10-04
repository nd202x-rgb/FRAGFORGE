import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "warzone",
  overview:
    "Call of Duty: Warzone is a battle royale where roughly 150 players drop onto a massive map and the last squad standing wins. Its skill ceiling is the CoD gunfight — movement, tracking, plate timing — layered on top of BR macro: rotations, zone reads, and third-party timing. Ranked play punishes teams who take every fight; the winners take the right ones.",
  skillPillars: [
    "Movement chains",
    "Tracking & recoil control",
    "Plate timing",
    "Fight selection",
    "Zone & rotation awareness",
    "Team fighting",
  ],
  techniques: [
    {
      name: "Slide cancel",
      category: "Movement",
      difficulty: 3,
      summary:
        "Interrupt the slide mid-animation to stand back up instantly — it resets your tac sprint and makes your hitbox impossible to track.",
      steps: [
        "Sprint at tac speed, hit slide, then tap jump or double-tap crouch to snap back upright.",
        "Chain it: sprint, slide, cancel, sprint — your character never stops moving at speed.",
        "Slide-cancel into doorways and corners so defenders pre-aiming chest height miss you.",
        "Use it mid-fight between shots to throw off enemy aim assist tracking.",
      ],
      proTip: "Every movement player slide-cancels on autopilot — drill it as a reflex, not a thought, before any other tech.",
    },
    {
      name: "Head glitching",
      category: "Positioning",
      difficulty: 2,
      summary:
        "Hold cover so only your head and gun show — you get a clean sightline while the enemy has a skull-sized target.",
      steps: [
        "Find cover that sits exactly at enemy eye-level: rocks, sandbags, stair lips, roof edges.",
        "ADS over the top or around the side where only your head clears.",
        "Crouch-spam or strafe-peek behind it between shots so you're not stationary.",
        "If the first peek loses, reposition — a known headglitch is a dead one.",
      ],
      proTip: "Top players pre-scan for the headglitch before the fight starts — the rock you saw 10 seconds early is the rock that wins the fight.",
    },
    {
      name: "Snaking",
      category: "Movement",
      difficulty: 4,
      summary:
        "Rapidly spam crouch and prone behind cover so your head pops up and down — the enemy can see you but can't hold aim on you.",
      steps: [
        "Get behind a low wall or rock that covers you while prone.",
        "Alternate crouch → prone → crouch at a steady rhythm while keeping your reticle on the angle.",
        "ADS and fire only on the 'up' beats — never hold a standing peek.",
        "Combine with slide-canceling into the position so the enemy never sees your entry.",
      ],
      proTip: "It looks absurd and wins ranked games — Ranked-play grinders snake every wall, because aim assist simply cannot follow it.",
    },
    {
      name: "Drop shot",
      category: "Aim",
      difficulty: 2,
      summary:
        "Dive or drop to prone mid-gunfight so the enemy's crosshair sails over you while you keep tracking upward.",
      steps: [
        "Engage the fight ADS'd — never drop before first bullets land.",
        "After 2-3 shots connect, go prone or dolphin-dive while holding fire.",
        "Track upward as you drop; the enemy is now shooting at where you used to be.",
        "Treat it as a mixup — if you drop every fight, good players start pre-aiming the floor.",
      ],
      proTip: "Use the drop shot as your third bullet, not your first — it only works when the enemy is already committed to your chest height.",
    },
    {
      name: "Plate timing & the armor-crack call",
      category: "Utility",
      difficulty: 2,
      summary:
        "Armor plating takes seconds you don't have mid-fight — plate behind hard cover or not at all, and listen for the crack.",
      steps: [
        "Only plate with a wall, floor, or smoke between you and the enemy — plating in the open is a free kill.",
        "Break the animation by sprinting or jumping if you get pushed mid-plate; a live 2-plate beats a dead 3-plate.",
        "Listen for the armor-crack sound on your hits — a cracked enemy is one push away from a knock.",
        "After winning a fight, re-plate BEFORE looting — the third party is already rotating.",
      ],
      proTip: "Pros count enemy plates out loud — 'cracked him, cracked him, he's one' — the crack audio is a call to push, not to keep peeking.",
    },
    {
      name: "Pre-aim and pre-fire common angles",
      category: "Aim",
      difficulty: 2,
      summary:
        "Warzone's TTK is fast enough that the first bullet wins — start shooting the doorway or stairwell before the enemy fully shows.",
      steps: [
        "Hold crosshair at upper-chest height on the doorframe, not the center of the room.",
        "Pre-fire as you round stairs and corners — with footsteps audio you know they're there.",
        "Fire in controlled 4-6 bullet bursts so you stay accurate if they swing back.",
        "Snap to the second angle the moment your first target drops — teammates follow body-first.",
      ],
      proTip: "In a fast-TTK game, pre-firing isn't waste — it's how the entry player guarantees first blood instead of trading.",
    },
    {
      name: "Third-party discipline",
      category: "Macro",
      difficulty: 4,
      summary:
        "Every gunfight you hear is two teams about to be hurt — arrive on the knock feed, clean up the wounded, leave with their loot.",
      steps: [
        "Hear a fight? Hold 60-100m out and let it develop — shooting early pulls both teams onto you.",
        "Watch the kill feed for knocks; the first knock is your cue to close distance.",
        "Push from the direction the loser will flee, not the winner's angle.",
        "Kill the wounded first — a rezzing teammate revives faster than you think.",
      ],
      proTip: "Ranked players farm SR off third parties — the team that shoots second, wins. Patience is a kill you haven't taken yet.",
    },
    {
      name: "Edge-of-zone rotation",
      category: "Macro",
      difficulty: 4,
      summary:
        "Rotating early through the dead side of the zone beats sprinting late through the middle — gatekeep the teams who didn't.",
      steps: [
        "Read the zone the moment it pulls — decide your rotation before the timer starts.",
        "Move along the edge, hugging cover and buildings, not across the open middle.",
        "Arrive early at a power position and hold the teams forced through your lane.",
        "Late-zone, never cross an open field — circle the edge or smoke the crossing.",
      ],
      proTip: "Pro teams rotate on the FIRST pull — the free kills are the teams stuck rotating late through your sights.",
    },
    {
      name: "Tac sprint management",
      category: "Movement",
      difficulty: 1,
      summary:
        "Tac sprint is a resource with a cooldown — enter every fight with it full, because the faster mover wins the trade.",
      steps: [
        "Don't burn tac sprint jogging empty ground — walk or regular sprint when safe.",
        "Slide-cancel to refresh tac sprint during long rotations.",
        "Save the last burst for the engagement itself: closing a gap or escaping a losing fight.",
        "If you must disengage, tac sprint behind cover, not across open ground.",
      ],
      proTip: "Movement players never fight on an empty tac bar — they reset it mid-rotation so the burst is always there for the swing.",
    },
    {
      name: "Loadout and buy discipline",
      category: "Economy",
      difficulty: 3,
      summary:
        "Your custom loadout is the single biggest power spike in the game — the team that gets it first controls the lobby.",
      steps: [
        "Prioritize cash toward loadout over chasing early kills — a full build beats early RNG loot.",
        "Grab munitions and a self-res before killstreaks; ammo starvation loses mid-zone fights.",
        "Buy under cover — smoke the buy station or land a redeploy balloon on it under pressure.",
        "After late-zone buys, reposition instantly — the buy marker gives your position to everyone.",
      ],
      proTip: "Pros buy a second loadout for perks they actually need — ghost in late zones, not just the first grab.",
    },
    {
      name: "Intel layering",
      category: "Utility",
      difficulty: 3,
      summary:
        "UAVs, heartbeat sensors, and recon drones are how top squads fight with wallhack-adjacent info — layer them, don't spend them once.",
      steps: [
        "Pop UAV on rotation into a new zone, not after you're already committed.",
        "Heartbeat-sweep buildings before pushing — one sweep per floor, never assume empty.",
        "Stack multiple squad UAVs for the advanced UAV effect when it matters (late zone).",
        "Recon-ping downed enemies' teammates so knocks convert to wipes.",
      ],
      proTip: "The biggest ranked gap is intel: the squad with UAV up plays like they see through walls — because they basically do.",
    },
    {
      name: "Power position control",
      category: "Positioning",
      difficulty: 3,
      summary:
        "Rooftops, ridgelines, and headglitch rocks decide fights before they start — get there first or don't fight there at all.",
      steps: [
        "Learn each POI's power position: the roof, the tower, the cliff edge that watches everything.",
        "Rotate early to claim it — holding it for free beats taking it contested.",
        "Force enemies to cross your sightlines; let them walk into the bad ground.",
        "If a stronger team holds it, rotate away — fighting uphill is SR charity.",
      ],
      proTip: "Watch any WSOW lobby: half the kills come from the team who claimed the power position two zones ago. Geography is a weapon.",
    },
  ],
  pvp: {
    intro:
      "Warzone PvP is two games stapled together: the fast CoD gunfight, and BR macro that decides which gunfights you're even offered. Ranked is won by fight selection and damage efficiency, not raw aggression — the best players win fights because they chose them. The dominant ranked mistake is over-aggression feeding third parties; the dominant counter is disciplined repositioning after every engagement.",
    modes: [
      {
        mode: "Ranked Play",
        advice: [
          "Placement and confirmed kills are the SR math — a knock that doesn't convert is wasted damage.",
          "Don't take a fight you can't finish: if the first trade goes against you, disengage and reset.",
          "Rotate early every zone — late rotations through open ground are where ranked runs die.",
          "Insta-reposition after winning a fight; the third party lands inside your loot window.",
          "Play for top-5 minimum every game — consistent placement beats kill-chasing variance.",
        ],
      },
      {
        mode: "Resurgence / casual Quads",
        advice: [
          "Respawn modes are rep fuel: take every fight to build gunfight volume and movement reps.",
          "Land hot on purpose — you can't learn close-quarters fighting looting empty buildings.",
          "Practice your ranked loadout weapons here, not fun guns — reps only count on your real build.",
          "Use free respawns to learn drop timing, redeploy balloons, and re-plating under pressure.",
        ],
      },
      {
        mode: "Scrims / tournament customs",
        advice: [
          "Zones pull harder and lobbies are stacked — every fight costs more than it's worth early.",
          "Play for late zone with minimal engagements; winning scrims is a 20-kill endgame, not mid-lobby heroics.",
          "Communicate pings over voice chatter — concrete callouts win scrims, vibes don't.",
          "Anchor a power position by zone 3 and defend it — scrim lobbies are won on geography, not aim.",
        ],
      },
    ],
    counterPlay: [
      "Against headglitch holders: don't re-peek the same angle — stun or nade over the cover, reposition to their flank, or just leave the fight.",
      "Against aggressive pushers: plate behind cover, hold the doorway, and let them come through one at a time — pushers always overextend.",
      "Against rooftop snipers: rotate early to claim the spot before them, or smoke the crossing and push while they're scoped elsewhere.",
      "Against a third party: the moment your fight ends, move — never loot in place, because the second squad is already landing.",
      "Against zone-edge rats: watch the kill feed, pre-aim the funnel lanes into zone, and heartbeat-sweep every building on rotate.",
    ],
  },
  drills: [
    {
      name: "Firing range recoil walls",
      duration: "10 min",
      how: "In the Firing Range, dump full mags into a wall at 30m, 60m, and 100m with your ranked weapons — learn to pull down and left/right against the pattern.",
      goal: "Group your spray inside a torso-sized circle at 60m without thinking about it.",
    },
    {
      name: "Movement laps",
      duration: "10 min",
      how: "In a private match or pre-game, slide-cancel, jump-shot, and snake your way around a POI in continuous laps — no stopping between moves.",
      goal: "Move across the entire POI without losing tac sprint or losing your crosshair's target.",
    },
    {
      name: "Resurgence fight reps",
      duration: "30 min",
      how: "Play 3-4 Resurgence matches taking every fight you're offered — volume reps for tracking, plating under pressure, and re-engaging after a knock.",
      goal: "Get 15+ fights of reps per hour that a normal BR lobby can't give you.",
    },
    {
      name: "Tracking trainer",
      duration: "15 min",
      how: "Run a smooth-tracking scenario in Aim Labs or Kovaak's — follow a strafing target at mid-range, focus on keeping the reticle glued, not flicking.",
      goal: "Stick to a strafing target for a full mag without overshooting — that's controller aim discipline.",
    },
    {
      name: "VOD review — your lost fights",
      duration: "10 min",
      how: "Record a ranked session and watch only your deaths: bad engage, bad rotate, or bad plate timing?",
      goal: "Name the single mistake type that killed you most — that's next week's drill.",
    },
  ],
  proSettings: [
    {
      player: "Swagg",
      team: "FaZe Clan",
      notes: "The standard for ranked Warzone play — copy his loadout/meta discipline and pacing: he fights hard but only when the fight is already won on positioning.",
    },
    {
      player: "JoeWo",
      team: "NRG",
      notes: "The movement king — his slide-cancel chains, bunny-hop entries, and unpredictability are the gold standard. Study how he moves before you copy what he shoots.",
    },
    {
      player: "Aydan",
      team: "New York Subliners",
      notes: "Controller aggression perfected — he takes the first fight, wins it with movement, and re-plates instantly. Copy his confidence in close quarters and his plate discipline.",
    },
    {
      player: "Tommey",
      team: "New York Subliners",
      notes: "WSOW champion IGL — copy his zone reads and rotation calls, the way he moves a squad through a lobby taking only fights that matter.",
    },
    {
      player: "DiazBiffle",
      team: "FaZe Clan",
      notes: "Aim-first aggression with elite tracking — watch how he snaps between targets mid-teamfight and commits fully to kills he knows are free.",
    },
  ],
  commonMistakes: [
    "Fighting every gunfight — half the fights in Warzone are just free third-party invitations.",
    "Looting after a won fight — the second squad lands inside your loot window every single time.",
    "Re-peeking a headglitch you already lost — a held angle only needs one free kill to tilt you.",
    "Plating in the open or pushing with empty plates — armor is a wall between you and the lobby.",
    "Rotating late through the open — an early rotate is free SR, a late one is a funeral march.",
    "Chasing kills over placement in ranked — unconfirmed knocks don't move the SR bar.",
  ],
  metaNote:
    "The current era rewards mobility and aggression: slide-cancel and dive chains plus a fast TTK mean the squad that arrives first, plated, wins the fight before it starts. Loadouts lean on a strong SMG plus a mid-range beam AR and heavy smoke/stun utility — copy a pro's build instead of theorycrafting your own.",
};

export default content;

import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "destiny-2",
  overview:
    "Destiny 2 is a looter-shooter MMO where gunplay, ability builds, and team coordination decide everything — from Crucible duels to raid DPS phases. The competitive scene lives in Trials of Osiris and the day-one raid race, and both punish the same sins: bad radar reads, wasted ammo, and hero plays. Rank doesn't come from a cracked primary alone; it comes from managing special ammo, supers, and spacing better than the other team.",
  skillPillars: [
    "Radar awareness",
    "Special ammo economy",
    "Disengage timing",
    "Ability-empowered duels",
    "Team-shot focus fire",
    "Damage-phase rotation",
  ],
  techniques: [
    {
      name: "Radar discipline",
      category: "Macro",
      difficulty: 2,
      summary:
        "Your radar is the strongest information tool in the game — read the sector pings to pre-aim flanks, and crouch or slide to vanish from theirs.",
      steps: [
        "Scan the radar before every corner — a red ping tells you the angle to pre-aim.",
        "When your own ping glows, an enemy knows your sector — reposition or bait the push.",
        "Crouch (hold crouch, don't flicker) to drop off radar entirely before holding a lane.",
        "Slide into a fight to shrink your radar signature at the moment of contact.",
      ],
      proTip: "Trials sweats treat radar as wall-hacks — SirD wins 1v1s by appearing where the enemy's ping says he shouldn't be, not by out-flicking.",
    },
    {
      name: "Disengage before TTK",
      category: "Positioning",
      difficulty: 1,
      summary:
        "Know when your duel is lost and slide behind cover before the enemy's time-to-kill finishes — a reset duel favors the survivor.",
      steps: [
        "Learn your weapon's optimal TTK and how it feels to lose — if you take two clean hits first, you're already behind.",
        "Pre-plan one slide-out or jump-out route on every lane you hold.",
        "Break the fight at first warning: half health or a missed opening shot.",
        "Reset behind cover, let shields tick, then re-challenge on YOUR timing — never re-peek the same angle.",
      ],
      proTip: "Good players survive duels they've already lost — a clean disengage turns a death into a radar bait for your teammate's flank.",
    },
    {
      name: "Slide shooting",
      category: "Movement",
      difficulty: 3,
      summary:
        "Slide into range while firing — you keep full accuracy, shrink your hitbox profile, and arrive at shot speed, not walk speed.",
      steps: [
        "Sprint one second minimum, then slide — sliding too early just makes you a slower target.",
        "Fire THROUGH the slide, not after it — the muzzle flash starts before you're stationary.",
        "Chain slide into a wide jump to break enemy tracking on entry.",
        "On shotgun apes: slide to close the gap, shoot on the slide, then reposition instantly.",
      ],
      proTip: "The ape only wins if the slide is committed — half-sliding into mid-range and losing range on the shot is what separates a 0.8 K/D ape from SirDimetrious.",
    },
    {
      name: "Special ammo starvation",
      category: "Economy",
      difficulty: 3,
      summary:
        "Green ammo is the real objective in Crucible — control the bricks, deny enemy shotgun/fusion uptime, and watch their offense collapse.",
      steps: [
        "Memorize ammo box spawn points and timers on every Trials map.",
        "Grab bricks off kills — dead enemies drop their special, which is yours now.",
        "When low, play passively and bait THEIR ammo waste — a missed fusion shot is a win.",
        "Call ammo timers to your team — a synced ammo grab wins the round before the fight.",
      ],
      proTip: "In Trials, ammo rounds are scripted by the sweat teams — they starve your shotty user for three rounds, then ape when you're all primary.",
    },
    {
      name: "Wombo-combo initiation",
      category: "Utility",
      difficulty: 3,
      summary:
        "Open with ability damage, then clean up with your primary — a grenade-chipped enemy dies before your weapon's TTK runs out.",
      steps: [
        "Throw the grenade where the enemy WILL be, not where they are — funnel, doorway, cap point.",
        "Time the damage chip: lightning/trip/arc need ~0.3s to land — lead the peek.",
        "Push the instant the ability connects — their health gate is already open.",
        "Swap immediately if the chip whiffs — never chase a failed wombo-combo.",
      ],
      proTip: "Titans and Hunters run wombo-combo by default: suppressor or tripmine into a hand cannon peek is a guaranteed free kill in solo queue.",
    },
    {
      name: "Super shutdown banking",
      category: "Utility",
      difficulty: 3,
      summary:
        "Roaming supers win rounds — but a held shutdown super (Thundercrash, Golden Gun, Nova Bomb) wins the round that decides the match.",
      steps: [
        "Bank your shutdown super when the enemy team is pushing an important zone or revive.",
        "Listen for roaming supers (Fists of Havoc, Daybreak) — that's your cue, not the duel.",
        "Hold until their super is mid-animation: panic-casting early lets them bait you.",
        "After the shutdown, rotate immediately — you're now the primary target.",
      ],
      proTip: "Never trade your Well of Radiance for a clean-up super — the WELL is the shutdown: it collapses a whole push, not one enemy.",
    },
    {
      name: "Team-shot focus fire",
      category: "Macro",
      difficulty: 2,
      summary:
        "Two 180-hand-cannon shots beat one — staggered damage kills before TTK and denies any chance to trade.",
      steps: [
        "Spread 2-1 or 1-2 on defense so every angle is covered by two guns, not one.",
        "Ping the target, count 'one-two-three', and both peek — never peek alone.",
        "Focus the LOWEST health enemy first — finishing kills matters more than trading damage.",
        "After the team kill, both reposition — the enemy's radar now points at where you were.",
      ],
      proTip: "Trials is won in the first 30 seconds: the team that first focuses a 1v2 onto a slow peeler wins 2v1 retakes almost every round.",
    },
    {
      name: "Champion stun timing",
      category: "Utility",
      difficulty: 2,
      summary:
        "Barrier, Unstoppable, and Overload champions break runs if you don't stun them — run the right artifact mods and hit the stun on their wind-up, not after.",
      steps: [
        "Check the artifact each season — the three stun mod slots change and you'll ruin a GM run with the wrong kit.",
        "Barrier: hip-fire Anti-Barrier into the shield the moment it forms — before the bubble is up it's immune.",
        "Unstoppable: wait for the hand-cannon glow, then fire the Unstoppable shot — firing early wastes it.",
        "Overload: body-shot with an Overload weapon until they stagger — panic-firing wastes the stun window.",
      ],
      proTip: "GM grinders keep one champion mod per energy type on a saved loadout — swapping kits mid-run is faster than watching a Barrier heal to full.",
    },
    {
      name: "Raid DPS phase rotation",
      category: "Macro",
      difficulty: 4,
      summary:
        "Damage phases are a script: mark with Divinity or Tractor, stack buffs (Well, Ward, Tether), then dump heavy and special in order — improvisation loses millions of damage.",
      steps: [
        "Before the phase: max out special and heavy via finishers, ammo finders, and your weapons' reserves.",
        "Mark the boss first — Divinity bubble or Tractor Cannon debuff — this multiplies ALL damage.",
        "Stack ONE buff type (Well of Radiance, Ward of Dawn, or Void Anchor) — they don't multiply each other.",
        "Dump in order: heavy (rockets, linear fusion) → special (shotgun/fusion) → primary — never the reverse.",
      ],
      proTip: "Gladd's raid teams rehearse the weapon-swap order on Shuro Chi before pulling the boss — one bad swap costs a phase and a wipe.",
    },
    {
      name: "Add-priority target order",
      category: "Macro",
      difficulty: 2,
      summary:
        "In high-tier PvE, kill order decides survivability — snipers, wire riflemen, and unstoppable adds die before the orange bars do.",
      steps: [
        "Scan the wave and identify threats by silhouette: snipers (line of sight killers), explosers, wire riflemen, champions.",
        "Delete snipers first — they erase your Well position and force rebuilds.",
        "Then clear utility threats: exploders, wire rifles, Hobgoblin suppression.",
        "Save the orange/yellow bar for last — it has the health but deals the least burst.",
      ],
      proTip: "Esoterickk's solo flawless runs look slow until you realize every wave is deleted in the same order — he just never lets the order break.",
    },
    {
      name: "Momentum tech",
      category: "Movement",
      difficulty: 4,
      summary:
        "Bungie's physics let you carry speed through slides, jumps, and shoulder charges — shaving seconds off every rotate and making you untrackable in duels.",
      steps: [
        "Slide mid-air after a jump to carry velocity further — a sprint-jump-slide chains farther than sprinting alone.",
        "Warlocks: tap jump-glide rhythm ('burst glide') for the fastest sustained speed in the game.",
        "Titans: shoulder charge while sprinting downhill for a free speed burst on the next rotate.",
        "In PvP, enter lanes mid-momentum: a shoulder-charge or slide arrival is nearly unshootable.",
      ],
      proTip: "Movement is a mechanic, not a stat — watch any speedrunner's Neomuna patrol and you'll see patrol done 30% faster on the same subclass.",
    },
    {
      name: "Lane suppression pre-fire",
      category: "Aim",
      difficulty: 2,
      summary:
        "Start firing a millisecond before the enemy's head appears — pre-firing the common peek spots wins duels your reflexes never could.",
      steps: [
        "Learn the 2-3 most common angles per map (long lanes, door pushes, high grounds).",
        "Walk your crosshair to head height at those angles — never mid-wall, never the floor.",
        "Pre-fire a controlled burst the moment your radar shows red in that sector.",
        "Disengage after the burst — pre-firing commits you, and a whiff is a free re-peek for them.",
      ],
      proTip: "CammyCakes' hand-cannon kills look like reaction time — it's actually crosshair placement so tight the enemy walks into the shot.",
    },
  ],
  pvp: {
    intro:
      "Destiny PvP is a resource war disguised as a gunfight — special ammo, supers, and radar information decide more rounds than pure aim. Crucible ranks separate on disengage discipline and team-shot focus, not flick speed. The dominant ranked pattern is dry-ape aggression; the dominant counter is radar-starved spacing and a banked shutdown super.",
    modes: [
      {
        mode: "Trials of Osiris (3v3 elimination)",
        advice: [
          "Flawless runs live on card management — a Mercy card forgives one loss, so play the early rounds like you have two lives.",
          "Bank your shutdown super for their roaming-super round, not for a duel — one Thundercrash ends a push, not a person.",
          "Deny special ammo first: 3v3 is decided by who controls the green bricks for three rounds straight.",
          "Play 2-1 spread and collapse on the solo — Trials is won by making it a 2v1 within 20 seconds.",
          "After a round loss, call ONE adjustment — 'their ape is mid' or 'they're stacking left' — and change nothing else.",
        ],
      },
      {
        mode: "Competitive Crucible / Survival",
        advice: [
          "Lives are the scoreboard — play for the revive, never the hero play. A 1v2 trade that burns their last respawn wins more than a solo triple.",
          "Rotations beat kills: hold the zone, let them push you into unfavorable angles.",
          "Track enemy supers by class — a Dawnblade should never catch you standing still in the open.",
          "When you're up on lives, stop pushing — ranked punishes aggression with a timer.",
        ],
      },
      {
        mode: "Iron Banner / Control 6v6",
        advice: [
          "Control is a zone game, not a kill game — three capped zones bleed tickets faster than any ace.",
          "Anchor your spawn-side zone and NEVER abandon it for a mid-lane 1v1 — losing spawn loses the game.",
          "Supers win 6v6 on multi-kills only — save Well, Stormtrance, or GG for zone pushes, never duels.",
          "Play the objective off-kill: clear a zone, then defend the capture point from range — don't stand on it.",
        ],
      },
    ],
    counterPlay: [
      "Against a shotgun ape: keep mid-range lanes open, run a fusion or sidearm, and check radar before every corner — the ape dies to spacing, not aim.",
      "Against a sniper camped on a lane: wide-flank or shoulder-peek once to bait the shot, then rotate — never re-challenge the same angle.",
      "Against a roaming super (Fists, Daybreak, Stormtrance): spread out, bait the activation, then collapse with a banked shutdown super — never challenge it head-on.",
      "Against an invisible Hunter: their radar ping still fires on slide-shots — track the flicker and team-shot the uncloak instead of chasing alone.",
      "Against a team sitting on a Well or Ward: don't push in — flank the sides, force them to peek you out of the buff, then punish the exit.",
    ],
  },
  drills: [
    {
      name: "Onslaught aim warm-up",
      duration: "15 min",
      how: "Run the Onslaught horde mode on the hardest tier you clear — focus ONLY on headshots with your ranked loadout, no ability spam.",
      goal: "Consistent 20%+ headshot rate on the boss waves before queueing Trials.",
    },
    {
      name: "Shuro Chi DPS test",
      duration: "10 min",
      how: "Use the wish-wall checkpoint to spawn Shuro Chi, then run your raid damage rotation (mark → buff → heavy → special) three times and compare numbers.",
      goal: "Same damage output three runs in a row — if it varies, your rotation has a loose link.",
    },
    {
      name: "Private Trials 1v1 scrim",
      duration: "20 min",
      how: "Private match, Trials map, one friend — alternate offensive/defensive spawns and review every death: bad radar read, bad timing, or bad positioning?",
      goal: "Find the ONE reason you die most — that's your week's fix.",
    },
    {
      name: "Legend Lost Sector flawless solo",
      duration: "15 min",
      how: "Run a Legend lost sector solo without dying — forces add-priority discipline, stun timing, and ammo economy under pressure.",
      goal: "A clean clear under 8 minutes with zero deaths — that discipline translates to everything.",
    },
    {
      name: "Movement lap — Neomuna patrol",
      duration: "5 min",
      how: "Sprint a fixed patrol route on Neomuna using only momentum tech (slide-jumps, burst glide, shoulder charge) — time yourself.",
      goal: "Beat your time every week — mobility is the invisible stat in every duel and raid mech.",
    },
    {
      name: "Radar-only DM",
      duration: "10 min",
      how: "Play a Crucible private match with a rule: you can only engage AFTER seeing a radar ping — no blind peeks, no sound plays.",
      goal: "20 kills without a single un-reconned push — retrain the radar-first habit.",
    },
  ],
  proSettings: [
    {
      player: "SirDimetrious",
      team: "Content creator / Trials demon",
      notes: "The gold standard for Crucible fundamentals — low sens, perfect radar reads, and a disengage discipline that turns losses into resets. Watch his Trials 1v1s for spacing, not just shots.",
    },
    {
      player: "CammyCakes",
      team: "Content creator",
      notes: "Aggressive hand-cannon playstyle built on crosshair placement so tight the enemy walks into the shot — copy his pre-aim, not his push speed.",
    },
    {
      player: "Gladd",
      team: "World-first raid king",
      notes: "The most successful raid leader alive — day-one clears are won in the prep: rehearsed DPS rotations, ammo economies, and zero improvisation under pressure.",
    },
    {
      player: "Esoterickk",
      team: "Solo PvE legend",
      notes: "The best solo flawless player in the community — watch how he deletes every wave in the same kill order, never panic-firing. Discipline over speed, every time.",
    },
    {
      player: "Datto",
      team: "Build and meta authority",
      notes: "Destiny's buildcraft librarian — copy his method: test every exotic and mod on a real boss, never trust a tooltip. His DPS test videos are the template for Shuro Chi reps.",
    },
  ],
  commonMistakes: [
    "Chasing a shotgun ape into the same lane — one disengage and their special ammo runs dry.",
    "Wasting a roaming super on a 1v1 — banking it for their push wins the round, not the clip.",
    "Standing still in a Well or Ward — buffs don't stop headshots; rotate out before the collapse.",
    "Hoarding special ammo — use it or lose it: a full brick does nothing if you die holding it.",
    "Running GM nightfalls without champion mods — one Barrier champ wipes a 20-minute run.",
    "Playing Control like Team Deathmatch — zones lose games, kills win fights.",
  ],
  metaNote:
    "The current era rewards special-ammo discipline and team-shot focus fire — solo hero plays get traded instantly at every rank. On the PvE side, damage-phase buff stacking (mark, Well, heavy dump) still dictates raid meta, with prismatic kits shifting the exact loadout but not the rotation.",
};

export default content;

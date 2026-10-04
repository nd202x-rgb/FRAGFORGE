import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "elden-ring",
  overview:
    "Elden Ring is an open-world Soulslike ARPG where every boss is a pattern exam and every death is graded homework. The competitive scene lives in speedrun leaderboards, no-hit challenge runs, and a sweaty invasion/Colosseum PvP community — but the core skill is the same everywhere: patience, spacing, and refusing to panic-roll. Rank climbs (in NG+ cycles and PvP alike) come from removing panic habits, not adding damage.",
  skillPillars: [
    "Roll timing (i-frames)",
    "Spacing and whiff punishment",
    "Stance/posture damage",
    "Flask and resource discipline",
    "Buildcraft (stats, ashes, status)",
    "Boss pattern memory",
  ],
  techniques: [
    {
      name: "Roll through the swing, not away from it",
      category: "Defence",
      difficulty: 2,
      summary:
        "Dodge rolls have invincibility frames — rolling INTO an attack carries you through the hitbox and lands you in punish range instead of at the tip of the sword.",
      steps: [
        "Watch the weapon, not the boss's body — the hitbox lives on the blade.",
        "Roll toward or through the swing as it starts, never on the wind-up.",
        "End the roll already attacking: the punish window opens the frame their swing whiffs.",
        "If you're at max range and unsure, walk back — don't burn a panic roll.",
      ],
      proTip: "No-hit runners like GinoMachino barely sprint — they roll late and close, because every roll that ends in melee range is a free R1.",
    },
    {
      name: "Patient rolling vs delayed attacks",
      category: "Mental",
      difficulty: 3,
      summary:
        "Modern bosses bait panic rolls with held wind-ups — roll on the actual swing release, not the animation that scared you.",
      steps: [
        "Identify the boss's 'held' moves (Margit's cane slam, Godfrey's axe, Malenia's flurry setup).",
        "Stand still through the wind-up — count a beat before the blade actually moves.",
        "Roll only when the weapon commits to a direction.",
        "If you got clipped by the follow-up, you rolled early: fix the timing, not the direction.",
      ],
      proTip: "Waterfowl Dance is the ultimate panic-roll check: the kill string only hits rollers who flinch early — pros walk under the first flurry instead of mashing.",
    },
    {
      name: "Guard counter",
      category: "Defence",
      difficulty: 3,
      summary:
        "Block a hit with a shield, then immediately heavy-attack — the counter deals massive stance damage and is safe against most single swings.",
      steps: [
        "Hold a 100% physical-block shield (Brass Shield is the classic) and block one attack.",
        "The instant the hit lands on your shield, press R2 — don't wait for the combo to end.",
        "Use it against single slow swings; never guard counter into a multi-hit string.",
        "Two or three guard counters on most enemies breaks their stance — swap to the riposte.",
      ],
      proTip: "Guard counters on telegraphed single hits let shield builds stance-break like colossal-weapon players — it's the turtler's punish, not a passive tool.",
    },
    {
      name: "Stance breaking (posture damage)",
      category: "Combat",
      difficulty: 4,
      summary:
        "Every enemy has a hidden posture bar — charged R2s, jump attacks, colossal weapons and guard counters fill it until they crumple for a critical.",
      steps: [
        "Prioritize charged R2s and jumping R2s — they deal the highest posture damage per hit.",
        "Learn each boss's posture breakpoint: most field bosses stagger in 2–3 charged heavies.",
        "When they stagger, don't spam R1 — walk to the glowing spot and take the riposte.",
        "Posture regenerates if you back off — keep light pressure between big hits.",
      ],
      proTip: "Speedrunners skip entire boss phases by front-loading posture damage — Distortion2's routes chain staggers so bosses die mid-animation.",
    },
    {
      name: "Jump attack pressure",
      category: "Combat",
      difficulty: 2,
      summary:
        "Jumping R2s dodge low swings, deal heavy posture damage, and can't be easily interrupted — the single most efficient opener in the game.",
      steps: [
        "Approach a boss's whiffed attack and jump-R2 as they recover.",
        "On horseback, jump attacks get even safer — Torrent's double jump repositions you mid-swing.",
        "Pair a jump attack with a follow-up R1 only if the posture bar didn't break.",
        "Against shields, jump attacks chip through where normal swings bounce.",
      ],
      proTip: "The whole Shadow of the Erdtree speedrun meta is jump-R2 spam with heavy weapons — it's boring because it works.",
    },
    {
      name: "Flask discipline",
      category: "Economy",
      difficulty: 2,
      summary:
        "Healing is a resource trade — heal during punish windows only, and enter fights with the right flask split and Physick mix already set.",
      steps: [
        "Split flasks at the grace: melee builds go heavy on Crimson, casters split toward Cerulean.",
        "Heal only after a confirmed whiff or knockdown — never mid-combo, that's how you eat the punish.",
        "Drink your Flask of Wondrous Physick BEFORE the fog gate, not after the boss tags you.",
        "Track your charges: if you're below 2 heals at 50% boss HP, start trading for kills, not safety.",
      ],
      proTip: "No-hit runners plan every sip — a heal taken at the wrong time is just a second hit taken later.",
    },
    {
      name: "Spirit Ash timing",
      category: "Utility",
      difficulty: 2,
      summary:
        "Summons are strongest when deployed in safe windows and matched to the boss — Mimic Tear for brawls, Tiche for percent-HP shred, tanky ashes for aggro splits.",
      steps: [
        "Summon in the opening 3 seconds or after a scripted lull — mid-combo summons get you killed casting.",
        "Match the ash to the fight: Black Knife Tiche shreds HP bars, Mimic Tear doubles your build.",
        "Let the summon hold aggro, then hit the boss's blind side — never fight the same face.",
        "If the ash dies fast, your aggro control is the problem — respec the tankier option.",
      ],
      proTip: "Let Me Solo Her's whole legend is the inverse — no summons, pure spacing — but for clears, pros pick ashes that exploit the boss's specific weakness, not the famous one.",
    },
    {
      name: "Buff stacking before the fog gate",
      category: "Utility",
      difficulty: 3,
      summary:
        "Golden Vow, Flame Grant Me Strength, weapon grease and the Physick flask multiply each other — a 15-second pre-fight routine can double your damage.",
      steps: [
        "Pop Flask of Wondrous Physick first (longest duration).",
        "Cast Golden Vow or use the Ash of War version for the aura buff.",
        "Apply weapon grease or incantation matching the boss's weakness (blood grease vs bleed-able bosses).",
        "Re-buff at natural lulls mid-fight — most buffs outlast two punish windows.",
      ],
      proTip: "Every WR speedrun is a buff-sequencing exam — runners pre-route exactly which greases and physick tears cover each boss in the order they cast them.",
    },
    {
      name: "Poise trading with heavy armor",
      category: "Defence",
      difficulty: 4,
      summary:
        "Poise lets your swing finish through an enemy's hit — heavy armor plus colossal hyperarmor turns chip trades into free posture breaks.",
      steps: [
        "Hit the poise breakpoint for the content (PvE soft cap ~51, PvP duelists often run 61+ or Bull-Goat).",
        "Time your colossal swing so their hit lands during your hyperarmor frames — the damage trade favors you.",
        "Stack stance damage on the trade: your uninterrupted charged R2 vs their one poke wins every exchange.",
        "Don't trade into multi-hit strings — poise buys you one hit, not a combo.",
      ],
      proTip: "Bull-Goat PvP mains don't out-aim anyone — they just refuse to be interrupted, and every interrupted enemy attack becomes their stagger.",
    },
    {
      name: "Torrent hit-and-run",
      category: "Movement",
      difficulty: 2,
      summary:
        "Field bosses and dragons are free once you fight from horseback — ride in for one hit, ride out before the counter, repeat until it dies.",
      steps: [
        "Stay mounted and circle the boss outside its front arc.",
        "Dash in for a single heavy or jump attack the moment it commits to a move.",
        "Double-jump out of ground slams — Torrent's second jump clears most AoE rings.",
        "Dismount only when the fight is over — remounting mid-fight invites a free hit.",
      ],
      proTip: "Tree Sentinel stops being a wall the second you treat him as a cavalry duel — the game's first 'impossible' boss is a tutorial for this exact technique.",
    },
    {
      name: "Status stacking (bleed and frostbite)",
      category: "Build",
      difficulty: 4,
      summary:
        "Bleed takes a percentage chunk of max HP on proc and frostbite applies a defense shred — building to trigger them repeatedly out-damages raw attack at every level.",
      steps: [
        "Pick a fast weapon with inherent bleed (katanas, twinblades) or add Blood affinity via Ash of War.",
        "Stack Arcane for proc speed — Seppuku or blood grease accelerates the buildup bar.",
        "Weave status hits between posture hits: proc, punish, back off while buildup resets.",
        "Frostbite first, then bleed — the 20% defense shred makes every follow-up chunk harder.",
      ],
      proTip: "Rivers of Blood got nerfed twice and bleed still owns leaderboards — the meta moved to RoB's successors (Eleonora's Poleblade, Mohgwyn's Spear), not away from status.",
    },
    {
      name: "Ash of War mastery",
      category: "Utility",
      difficulty: 3,
      summary:
        "Your weapon's skill is a second moveset — the right Ash of War covers your build's blind spot (ranged poke, gap closer, stance breaker, or i-frame dodge).",
      steps: [
        "Read the Ash's scaling and cost before committing — a 30-FP skill on a 10-mind build is a dead button.",
        "Slot a utility Ash (Bloodhound's Step for dodges, Lion's Claw for posture) over raw-damage skills.",
        "Time offensive Ashes like spells: during punish windows, not neutral.",
        "Keep a second weapon with a defensive Ash for fights that punish your main plan.",
      ],
      proTip: "Top PvPers treat weapon arts as punctuation, not sentences — the threat of Lion's Claw hyperarmor wins spacing even when it never fires.",
    },
  ],
  pvp: {
    intro:
      "Elden Ring PvP splits into open-world invasions (3v1 chaos where the host holds every advantage) and Colosseum duels (honest 1v1 builds). What separates ranks isn't combo knowledge — it's spacing, roll discipline, and knowing which trades your poise wins. The dominant ranked pattern is bleed/poise trading; the dominant counter is staying at spear-range and punishing the approach.",
    modes: [
      {
        mode: "Colosseum duels (1v1)",
        advice: [
          "Build for the duel, not the game: PvP poise breakpoints and PvE stagger math are different — check current breakpoints before queueing.",
          "Level to the community's duel bracket (125 or 150) so your stat spread stays honest.",
          "Fight from max range for the first 30 seconds — read their panic-roll direction before committing.",
          "Expect bleed and status; carry Stalwart/cleansing counterplay or dodge the katana's running R1 range.",
          "Don't heal-button mash after a bad trade — a lost exchange plus a punished sip is two mistakes, not one.",
        ],
      },
      {
        mode: "Open-world invasions",
        advice: [
          "You're usually outnumbered: play around mobs and chokepoints so the world fights for you.",
          "Kill the phantom with the greedy build first — the host turtling behind them wins fights for free.",
          "Use verticality and elevator ambushes; hosts chasing an invader downhill is where comebacks live.",
          "Respect the 3-stack but pressure it — most groups fold when you refuse to fight their formation head-on.",
        ],
      },
      {
        mode: "Colosseum group fights (United Combat & Combat Ordeal)",
        advice: [
          "United Combat is team deathmatch with respawns — stay grouped; a solo hero feeds the enemy's score faster than they can carry.",
          "Spirit ashes are enabled in group modes — summon early; one Mimic Tear is a body the enemy has to answer.",
          "In Combat Ordeal free-for-all, third-party everything: let two players trade, then clean up both at low HP.",
          "Hold the center consumables and high ground — point races are won on map control, not kill totals.",
          "Focus-fire the lowest-poise target; a staggered player can't roll out of a gang-up.",
        ],
      },
    ],
    counterPlay: [
      "Against bleed katana spammers: stay outside running-R1 range and punish the whiff — they're all gas and no guard.",
      "Against Moonveil/spell spammers: close diagonally, not in a straight line — their tracking is strong forward and weak across the arc.",
      "Against shield turtles: guard counter bait then jump attack or kick — their own deflect timing becomes your stance break.",
      "Against backstab fishers: never roll predictably backward — dead-angle your rolls and walk away when they whiff the attempt.",
      "Against Bull-Goat poise traders: don't trade at all — chip with fast pokes, force their slow whiffs, and punish the recovery frames.",
    ],
  },
  drills: [
    {
      name: "Gatefront parry practice",
      duration: "10 min",
      how: "Fight the Godrick Soldiers at Gatefront Ruins with a small shield — parry only, no blocking, no dodging. Reset at the grace every attempt.",
      goal: "Land 10 clean parries in a row before taking damage — the soldier's halberd swing is the game's metronome.",
    },
    {
      name: "Margit roll-timing reps",
      duration: "15 min",
      how: "Fight Margit with no weapon equipped — roll-dodge only, learn to stand still through the held wind-ups and roll the committed swing.",
      goal: "Survive 60 seconds dealing zero damage — if you panic-rolled early, start the count over.",
    },
    {
      name: "Mimic Tear mirror check",
      duration: "10 min",
      how: "Summon the Mimic Tear with your normal build equipped — it copies your weapons, armor, and ashes — then fight your own mirror. Optionally strip YOUR gear after the summon for a naked-vs-clone skill test.",
      goal: "Kill your clone cleanly — whatever it punishes (panic rolls, predictable combos) is exactly what other players will punish in you.",
    },
    {
      name: "Stance-break reps on the Erdtree Avatar",
      duration: "10 min",
      how: "Fight a minor Erdtree Avatar (e.g., Limgrave/Weeping Peninsula) using only charged R2s and jump attacks — count hits to stagger.",
      goal: "Break its stance in 3 posture hits or fewer, then land the riposte — that's the opener you'll use on every field boss.",
    },
    {
      name: "No-flask camp clear",
      duration: "15 min",
      how: "Clear Gatefront camp or a small catacomb without drinking a single flask — every hit taken is a failed roll or a greed swing.",
      goal: "Full clear untouched; if you can't, the mistake type that hits you most is your drill for next session.",
    },
    {
      name: "Colosseum volume reps",
      duration: "20 min",
      how: "Queue 10 consecutive 1v1 duels with one rule: win or lose, write down what killed you — bleed proc, punished heal, or spacing error.",
      goal: "Identify the one mistake that appears in 3+ losses and drill only that tomorrow.",
    },
  ],
  proSettings: [
    {
      player: "Distortion2",
      team: "Speedrun leaderboard (independent)",
      notes: "Holds top Elden Ring any% times — copy his routing discipline and buff-sequencing: every second saved is a planned posture break or a skipped phase, not faster reactions.",
    },
    {
      player: "Let Me Solo Her",
      team: "Community legend",
      notes: "The Malenia co-op icon who beat the hardest boss for thousands of strangers naked with a jar helm — copy his spacing patience: he wins by never being where the sword lands, not by out-damaging her.",
    },
    {
      player: "GinoMachino",
      team: "Challenge runner (independent)",
      notes: "Completed legendary no-hit runs across the Souls catalog including all-bosses Elden Ring — copy his punish-window discipline: he memorizes every recovery frame and only swings inside them.",
    },
    {
      player: "Skumnut",
      team: "Challenge runner (independent)",
      notes: "Level-1 and hitless run specialist — copy his roll economy: he survives RL1 by making every single roll earn a punish, never a wasted dodge.",
    },
    {
      player: "Oroboro",
      team: "PvP content creator",
      notes: "The most-watched Souls PvP educator — copy his spacing reads and dead-angle roll theory; his invasion breakdowns teach positioning fundamentals, not gimmick builds.",
    },
  ],
  commonMistakes: [
    "Panic-rolling on the wind-up — delayed attacks exist specifically to kill players who flinch early.",
    "Healing the moment you get tagged — the punish catches the sip animation and doubles your mistake.",
    "Hoarding greases, runes, and physick for 'later' — buffs sitting in inventory win zero fights.",
    "Ignoring Vigor past level 20 — every no-hit guide starts with 'stop dying in two hits' for a reason.",
    "Trading greed swings after the combo ends — bosses recover while you're still mid-animation.",
    "Fighting mobs in a pack instead of pulling one at a time — three soldiers kill faster than one boss.",
  ],
  metaNote:
    "In the Shadow of the Erdtree era, stance damage and jump-attack pressure still anchor speedrun and PvE play, while PvP duels center on bleed pressure versus poise-trading heavies — disciplined spacing beats both.",
};

export default content;

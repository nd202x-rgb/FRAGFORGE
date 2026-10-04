import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "marvel-rivals",
  overview:
    "Marvel Rivals is a 6v6 third-person hero shooter where Vanguards, Duelists and Strategists brawl over domination points and convoy payloads. There's no role queue and ammo is never scarce — fights are decided by cooldown trades, ultimate sequencing and who staggers their deaths first. The ranked ladder and the Ignite circuit reward flexible comps and disciplined regroups far more than cracked aim.",
  skillPillars: [
    "Cooldown management",
    "Ultimate tracking",
    "Positioning & LOS",
    "Focus-fire discipline",
    "Regroup timing",
    "Hero flexibility",
  ],
  techniques: [
    {
      name: "Third-person corner info-peeking",
      category: "Positioning",
      difficulty: 2,
      summary:
        "The camera sits behind your shoulder — you can watch a lane around a corner while your model stays fully behind cover. Free info first, then the fight.",
      steps: [
        "Hug a corner and rotate the camera until you can see the lane without your shoulder clearing the edge.",
        "Note who's holding the angle, which heroes are with them, and whether their key cooldown is already spinning.",
        "Pre-aim the spot, THEN step out already firing — you turn their held angle into your pre-fire.",
      ],
      proTip: "Top Vanguards live on this: Magneto players watch entire pushes on camera before ever showing a hitbox, then walk out knowing exactly who to bubble.",
    },
    {
      name: "Projectile lead vs hitscan discipline",
      category: "Aim",
      difficulty: 3,
      summary:
        "Hela, Punisher and Black Widow hit where you point; Doctor Strange, Hawkeye and Winter Soldier fire projectiles you must lead. Know which model your hero uses before you blame your aim.",
      steps: [
        "Check your hero's damage model — a projectile needs a body-width of lead at mid range, more at distance.",
        "Against flyers (Iron Man, Storm, Human Torch), aim at their flight path, not their model — they can't strafe in air.",
        "Keep tracking through your own movement — third-person peek strafes desync your reticle if you panic-flick.",
      ],
      proTip: "Hela and Hawkeye mains two-tap by tracking, not flicking — smooth aim through the strafe beats any highlight flick.",
    },
    {
      name: "Cooldown cycling",
      category: "Macro",
      difficulty: 4,
      summary:
        "Every fight is a trade of cooldowns. Bait the enemy's defensive tools — Strange shield, Magneto bubble, Loki runes, Invisible Woman vortex — then commit during the gap.",
      steps: [
        "Poke to force the first defensive cooldown out early — show pressure without committing your engage.",
        "Count the recharge window — most defensive cooldowns are long enough to swing a fight if you push the gap.",
        "Call the opening ('no runes', 'shield down') and send the engage THEN — not before, not after it's back.",
        "Never blow your dive or ult into a fresh stack of defensive cooldowns; that's how feeds happen.",
      ],
      proTip: "Pro engagements start on a called cooldown window — watch Ignite VODs and the dive lands the second the enemy's peel tool drops.",
    },
    {
      name: "Ultimate economy and tracking",
      category: "Macro",
      difficulty: 4,
      summary:
        "Track which ults both teams have live. Strategist ults — Luna Snow, Cloak & Dagger, Mantis — are fight resets, so you force them early or answer after they end.",
      steps: [
        "After every fight, list which ults were spent on both sides — assume support ults come back every couple of fights.",
        "Never stack your two biggest ults into one fight; winning by four ults means losing the next two on economy.",
        "When the enemy burns a defensive ult, disengage and re-engage when it expires — damage into Luna's ult is a donation.",
        "Plan fights around ult advantage: call 'we have 3 to their 1' and make THEM fight into it.",
      ],
      proTip: "High-rank teams plan two fights ahead — they burn ults to win THIS fight only when the next fight's ult math still favors them.",
    },
    {
      name: "Focus-fire target calling",
      category: "Macro",
      difficulty: 3,
      summary:
        "Six players spraying damage heals off through sustain. Six players on ONE target kills through it — pick the killable hero and commit together.",
      steps: [
        "Identify the killable target before the fight: a Strategist, an overextended Duelist, or the tank with cooldowns down.",
        "Call it — one name — and everyone hits that hero together; split damage just feeds enemy support ults.",
        "Don't switch targets mid-burst; a half-dead tank plus a half-dead healer is zero kills.",
      ],
      proTip: "Coordinated stacks pick the target before contact — even a full-health Magneto melts to six guns when the call lands together.",
    },
    {
      name: "Peeling for your Strategists",
      category: "Positioning",
      difficulty: 3,
      summary:
        "Dive heroes — Spider-Man, Psylocke, Iron Fist, Venom — exist to delete your backline. Peeling means turning around before the healer dies, not after.",
      steps: [
        "Position between the enemy's dive angles and your Strategists — or play a natural peeler like Namor, Bucky or Mister Fantastic.",
        "The moment the dive lands, collapse on the diver — overkilling them is fine, it deters the next engage.",
        "After the diver retreats or dies, re-frontline instantly — a peeled dive buys you a free fight while their cooldowns reset.",
      ],
      proTip: "Anti-dive metas exist for a reason: Namor squids plus Peni webs turn your backline into a killzone, and divers start inting on purpose.",
    },
    {
      name: "Anti-stagger regrouping",
      category: "Macro",
      difficulty: 2,
      summary:
        "Dying late is worse than dying: you respawn into a 5v6, then arrive alone into a 1v6. Trickling turns one lost fight into three.",
      steps: [
        "If the fight is lost, escape or die fast — the worst outcome is a late death that resets your respawn behind your team's.",
        "Wait at spawn or a safe corner until you're at least five before re-engaging — a 6v6 is winnable, a staggered 4v6 is not.",
        "Only stall the objective if it's literally about to flip — touching to die still staggers your spawn.",
      ],
      proTip: "Watch any Celestial lobby: the moment a fight looks lost, the call is 'reset' — pros would rather concede a point than hand over spawn staggers.",
    },
    {
      name: "Dive timing and escape pathing",
      category: "Movement",
      difficulty: 4,
      summary:
        "A dive is about WHEN you go in and HOW you get out — the pick is just the middle. Engage on enemy cooldowns, leave on yours.",
      steps: [
        "Wait for the window: enemy peel cooldown spent, support attention on the frontline, or your tank already pressuring.",
        "Map the exit before you enter — a swing anchor, a dash charge, a mobility cooldown held in reserve.",
        "Execute your combo on one target, then LEAVE — overstaying one second turns a pick into a trade, and dive trades lose.",
      ],
      proTip: "Necros-style Spider-Man never enters without an escape swing already queued — the route out is decided before the route in.",
    },
    {
      name: "Team-up anchor drafting",
      category: "Draft",
      difficulty: 2,
      summary:
        "Team-ups are free power: Rocket feeding Punisher, Hulk juicing Strange and Iron Man, Hela reviving Thor and Loki. Draft the pair, not two disconnected comfort picks.",
      steps: [
        "Check which heroes on your roster anchor a team-up and what stat bonus the anchor gets for it.",
        "Draft the pair together — a coordinated duo pick beats two mains who share no synergy.",
        "If your team-up partner gets countered hard, weigh swapping as a pair so you don't lose the bonus for nothing.",
      ],
      proTip: "Premades draft the team-up FIRST and build the other four picks around it — free stats and a shared gameplan before the round even starts.",
    },
    {
      name: "LOS-to-healer positioning",
      category: "Positioning",
      difficulty: 2,
      summary:
        "Strategists heal what they can see. The moment you round a corner past your support's camera, you're off-heal — play inside their sightline or budget the HP.",
      steps: [
        "Before you push, glance at where your Strategists are standing — fight in lanes their position can reach.",
        "Retreat TOWARD your healers, not away — backing around corners is how 'no heals' deaths happen.",
        "If you're diving or flanking, accept you're off-heal and play your HP pool like a resource, not a guarantee.",
      ],
      proTip: "Watch a pro Luna Snow: the whole team plays inside her sightline like a leash radius — half of ranked 'no heals' complaints are self-inflicted LOS breaks.",
    },
    {
      name: "Contest and stall rotation",
      category: "Utility",
      difficulty: 3,
      summary:
        "Overtime is won by rotating survivability cooldowns, not heroics — touch, dump one tool, get out, re-touch. Each touch buys your team its respawn.",
      steps: [
        "Mobile heroes touch first to force the clock, tanks soak second — designate the order before the fight ends.",
        "Cycle ONE cooldown per touch: a shield, a fade, a mobility loop — never dump everything in the first second.",
        "Touch, disengage, recover, re-touch — three clean stalls undo a lost teamfight.",
      ],
      proTip: "Pro stalls are metronomes: every touch buys two or three seconds, and a disciplined rotation has flipped entire domination maps on overtime alone.",
    },
    {
      name: "Counter-swap flexibility",
      category: "Mental",
      difficulty: 3,
      summary:
        "Refusing to swap is a donation. Namor and Peni delete dive, flyers break brawl comps, Wolverine and Punisher shred tank stacks — keep a counter-pick warm in every role.",
      steps: [
        "Read the enemy's win condition within the first minute — what comp are they running and what beats it?",
        "Swap on respawn, never mid-fight — dead time is free, and the ult charge you lose costs less than the matchup you gain.",
        "Keep one warmed counter per role: an anti-dive pick, an anti-air pick, and a tank-shredder cover most lobbies.",
      ],
      proTip: "One Above All players treat hero picks as fluid — the instant a counter hits the field, they swap without ego and the lobby adjusts or loses.",
    },
  ],
  pvp: {
    intro:
      "Marvel Rivals PvP is a cooldown trade disguised as a superhero brawl. Fights are won by the team that forces defensive cooldowns first, sequences ults instead of stacking them, and refuses to stagger deaths. Metal ranks lose on positioning and LOS; high ranks lose on ult economy — fix whichever mistake is yours.",
    modes: [
      {
        mode: "Ranked solo queue",
        advice: [
          "Keep one counter-pick warm per role — the player who can swap Namor into dive wins games aim can't.",
          "Don't be the third Duelist. Locking the second Vanguard wins more games than a fifth damage main.",
          "Comms need exactly two calls: the focus target and the enemy's support-ult status. Everything else is noise.",
          "Regroup discipline wins more solo games than mechanics — say 'reset' out loud and mean it.",
          "Play your comfort hero into even matchups; only swap when the enemy comp is a hard counter to your kit.",
        ],
      },
      {
        mode: "Premade / Ignite-style competitive",
        advice: [
          "Assign a shot-caller and an ult tracker before queue — two voices, everyone else plays.",
          "Draft team-up pairs first, then fill the remaining four slots around them.",
          "Treat convoy and domination differently: brawl comps own points, poke comps own long lanes — build per map.",
          "Use the ban phase to remove YOUR comp's counter, not the lobby's flavor of the week.",
          "Scrim executes and retakes with set ult pairings — a Groot lockdown into a damage ult is rehearsed, not improvised.",
        ],
      },
      {
        mode: "Quick Match / arcade warm-up",
        advice: [
          "Use these for mechanics only: new hero combos, movement routes, projectile leading.",
          "Queue Conquest free-for-all for aim reps — constant fights, zero stakes.",
          "Practice the hero you'll be FORCED onto — your second Strategist matters more than your fifth Duelist.",
        ],
      },
    ],
    counterPlay: [
      "Against dive comps: group tight, run Namor, Peni, Bucky or Mister Fantastic, and punish the diver the second their escape cooldown is spent.",
      "Against flyer comps (Iron Man, Storm, Human Torch): hitscan pressure forces them low, Namor squids tag the skybox — contest them early or they farm the lobby.",
      "Against triple-Strategist sustain: you don't out-damage it, you out-cycle it — force two support ults in one fight, then win the next on ult advantage.",
      "Against Groot wall comps: burn the walls, they're HP pools — split his attention across angles or go airborne and ignore them entirely.",
      "Against support-ult chaining: hard-disengage through the invulnerable window and re-engage on expiry — never mirror-ult inside their Luna or C&D window.",
    ],
  },
  drills: [
    {
      name: "Practice Range combo reps",
      duration: "10 min",
      how: "Run your main's kill combo — Spider-Man's pull-uppercut string, Psylocke's dash burst, Bucky's hook-punch, Magik's demon combo — until the whole sequence fires as one motion.",
      goal: "Twenty clean reps with zero whiffed inputs before you queue.",
    },
    {
      name: "Conquest deathmatch reps",
      duration: "15 min",
      how: "Play the free-for-all Conquest mode with a rule: only take fights you chose — chase weak targets, disengage anything even. Count how many deaths came from fights forced on you.",
      goal: "Finish top 3 twice, with nearly all kills on terms you picked.",
    },
    {
      name: "Aerial tracking warmup",
      duration: "10 min",
      how: "In the Practice Range or a custom lobby, track moving and aerial targets with a hitscan hero — lead the moving ones, follow the flyers through their flight path.",
      goal: "Sustained hit rate on moving targets before you touch a ranked queue.",
    },
    {
      name: "Ult-tracking VOD review",
      duration: "10 min",
      how: "Watch one of your ranked matches. Before each teamfight, pause and write down which ults are spent and which are live on both sides.",
      goal: "Predict enemy support-ult availability to within one fight of accuracy by the end of the review.",
    },
    {
      name: "Regroup discipline reps",
      duration: "10 min",
      how: "Custom lobby or stacked quick play: call 'reset' the instant your team drops two before an objective fight, and don't re-engage until you're five or six.",
      goal: "Zero staggered deaths for a full session — every death happens inside a real fight.",
    },
  ],
  proSettings: [
    {
      player: "supertf",
      team: "Independent (ex-San Francisco Shock)",
      notes: "Ex-OWL champion tank turned Rivals Vanguard — copy his cooldown discipline on Magneto and Strange: barrier between incoming bursts, never held into poke, and always watching the dive angle before committing.",
    },
    {
      player: "ZexRow",
      team: "Independent",
      notes: "Fortnite champion turned Rivals Duelist — study his target selection: constant pressure on the most isolated backline hero and instant target swaps the moment a pick stops being free.",
    },
    {
      player: "Aramori",
      team: "Sentinels",
      notes: "Top Strategist with an Overwatch pedigree — copy her max-range heal positioning, pre-planned escape routes, and support ults timed to answer the enemy's commit rather than thrown on cooldown.",
    },
    {
      player: "Necros",
      team: "Schmungus",
      notes: "The benchmark Spider-Man — his whole game is engage discipline: routes mapped before entering, never diving without an escape cooldown, leaving right after the pick instead of fighting for the clip.",
    },
  ],
  commonMistakes: [
    "Instalocking a third Duelist — two Vanguards and two Strategists win more ranked games than five damage mains ever will.",
    "Breaking your Strategist's line of sight, then pinging for healing — heals don't curve around walls.",
    "Trickling onto point one at a time — a staggered death costs you two fights, not one.",
    "Farming damage on tanks while enemy Strategists bank ult charge — you 'won' the damage board and lost the fight.",
    "Stacking three ults into one fight — winning by that margin means losing the next two on economy.",
    "Ulting into an enemy support ult — your damage window evaporates inside Luna Snow's and the fight resets against you.",
  ],
  metaNote:
    "The current meta swings between coordinated dive and front-to-back brawl — high-ground pressure and backline picks define most lobbies, while triple-Strategist sustain keeps resurfacing as the answer. Role flexibility and instant counter-swaps are worth more than any single hero's power level.",
};

export default content;

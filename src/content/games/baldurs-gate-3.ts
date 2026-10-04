import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "baldurs-gate-3",
  overview:
    "Baldur's Gate 3 is a turn-based CRPG where fights are won before initiative is rolled — positioning, buffs, and ambushes decide more than dice luck. Its 'competitive scene' lives in Tactician and Honour mode clears, challenge runs, and a serious speedrun leaderboard, and all of them reward the same thing: refusing to take a fair fight.",
  skillPillars: [
    "Action economy",
    "Pre-combat setup",
    "Positioning and high ground",
    "Resource pacing",
    "Crowd control timing",
    "Party composition",
  ],
  techniques: [
    {
      name: "Surprise round ambushes",
      category: "Stealth",
      difficulty: 3,
      summary:
        "Starting combat while enemies are unaware grants your whole party a free round of actions — the single biggest legal advantage in the game.",
      steps: [
        "Scout the encounter first with a stealth character, familiar, or an invisibility spell.",
        "Ungroup the party and sneak everyone into their opening positions before aggroing.",
        "Open with your highest-impact action: an AoE on the clumped pack or a focus-fire opener on the boss.",
        "If someone is detected early, break line of sight and re-approach — Surprise only triggers on your terms.",
      ],
      proTip: "Honour mode runners treat Surprise as mandatory for bosses — a free round of hasted, pre-buffed attacks deletes half of most encounters before the enemy acts.",
    },
    {
      name: "High-ground positioning",
      category: "Positioning",
      difficulty: 1,
      summary:
        "Attacking from above grants a flat accuracy bonus and forces enemies to burn movement climbing — free hit chance and free tempo.",
      steps: [
        "When scouting, note every ladder, cliff, and rooftop before the fight starts.",
        "Move ranged attackers and casters up; keep melee within jump distance of the ground fight.",
        "Force enemies to climb to you — then Shove or Thunderwave them right back down.",
        "Casters hold mid-ground where sightlines cover both the climb and the field.",
      ],
      proTip: "Veterans carry crates in the inventory — stacking two boxes anywhere converts a flat arena into a sniper's nest.",
    },
    {
      name: "Bonus action discipline",
      category: "Action Economy",
      difficulty: 2,
      summary:
        "Every character gets a bonus action each turn and most players waste it — winning hard fights is largely a bonus-action economy exercise.",
      steps: [
        "Audit each character's bonus actions before the fight: Jump, Shove, off-hand attacks, potions, weapon swaps.",
        "Assign defaults: melee = Shove or off-hand strike, casters = Misty Step or Spiritual Weapon, everyone = potion when hurt.",
        "Spend the bonus action on tempo — reposition to shove range, jump to high ground, or drink before you're one hit from death.",
        "Never end a turn with an obviously useful bonus action sitting unused.",
      ],
      proTip: "Speedrunners build entire routes around bonus-action abuse — Jump alone trivializes half the game's traversal and most arena layouts.",
    },
    {
      name: "Pre-buffing before initiation",
      category: "Action Economy",
      difficulty: 3,
      summary:
        "Buffs cast before combat still tick down once it starts — walk into every hard fight already layered in Bless, Aid, and Mirror Image.",
      steps: [
        "Read the room first — dialogue flags, red enemies on the minimap, and corpse-strewn boss arenas all telegraph a fight.",
        "Cast long-duration buffs first (Aid, Longstrider, Darkvision, Protection from Energy), short ones last (Bless, Mirror Image, Blade Ward).",
        "Drink elixirs before the door — Bloodlust and Hill Giant Strength last until long rest, so sipping mid-fight is a wasted action.",
        "Leave one party member outside the trigger zone to start the fight exactly when you're ready.",
      ],
      proTip: "Top Honour runners keep a strict buff order — longest duration first, 10-turn buffs last — because Bless expiring mid-boss is how runs die.",
    },
    {
      name: "Shove and environmental kills",
      category: "Positioning",
      difficulty: 2,
      summary:
        "Shove costs a bonus action and outright deletes enemies near chasms, lava, and high drops — often the best 'damage' in the game.",
      steps: [
        "When scouting, mark every instant-kill hazard: chasm edges, lava, web drops, rooftop ledges.",
        "Spend your turn repositioning into shove range instead of taking a low-value attack.",
        "Shove, Thunderwave, or Eldritch Blast with Repelling Blast — anything that moves bodies toward the edge works.",
        "Respect the counter: never end your own turn standing beside a ledge you could be thrown off.",
      ],
      proTip: "The community calls it 'gravity damage' — an 8-Strength wizard with Enhance Leap can still play golf with boss minions.",
    },
    {
      name: "Elemental surface combos",
      category: "Damage",
      difficulty: 3,
      summary:
        "Fire on grease, lightning on wet, frost into ice slicks — Larian surfaces stack status and double-dip damage for almost no cost.",
      steps: [
        "Lay the surface before the enemy moves: Create Water, Grease, or a thrown water bottle.",
        "Detonate with the matching element — Firebolt into grease, Witch Bolt into wet enemies, Ray of Frost to freeze a water surface.",
        "Wet enemies take double lightning and cold damage — your '2-gold water bottle' just outscaled a spell slot.",
        "Lock them in place with prone or difficult terrain so they eat the combo for another round.",
      ],
      proTip: "Honour players carry stacks of water bottles — Wet is the cheapest vulnerability in the game and it never misses.",
    },
    {
      name: "Concentration protection",
      category: "Defence",
      difficulty: 3,
      summary:
        "Most fight-winning spells are concentration — one hit can drop them, so the whole turn plan exists to keep your caster's spell alive.",
      steps: [
        "Decide before the fight which spell the plan hinges on: Hypnotic Pattern, Haste, Spirit Guardians, or Hold Monster.",
        "Park the concentrator on high ground or behind cover — every avoided hit is a concentration save you never roll.",
        "Stack protection on them: Shield of Faith, Mirror Image, and half-cover from party positioning.",
        "If concentration drops, reassess the fight before recasting — throwing the same spell into the same threat is how bosses snowball.",
      ],
      proTip: "Serious Honour builds take Resilient (CON) or War Caster specifically for this — advantage on saves plus cover makes Hypnotic Pattern nearly permanent.",
    },
    {
      name: "Focus-fire priority targeting",
      category: "Damage",
      difficulty: 2,
      summary:
        "Ten half-dead enemies all get full turns; dead ones don't — finish targets completely before spreading damage.",
      steps: [
        "Read the turn order and threat profile: enemy casters and archers first, slow melee bruisers last.",
        "Pile all four party members' actions into one target until it drops — never chip four enemies at once.",
        "If a target survives on single digits, finish it with a bonus action or cantrip, not next turn's big hit.",
        "Re-prioritize the moment the board changes — adds, phases, and broken concentration all reshuffle the list.",
      ],
      proTip: "Speedrunners count effective enemy actions, not HP — an enemy at 1 HP still casts Hold Person, so the last point of damage is the most valuable.",
    },
    {
      name: "Command: Drop disarms",
      category: "Utility",
      difficulty: 2,
      summary:
        "Command: Drop makes enemies throw their weapons on the ground — pick it up mid-fight and their damage collapses.",
      steps: [
        "Identify enemies defined by their weapon — named magic blades, big two-handers, unique bows.",
        "Cast Command (Drop); it costs one action and no concentration, so your cleric stays flexible.",
        "Move the nearest party member onto the dropped weapon and take it — it's yours now.",
        "Upcast it against add waves to disarm several enemies at once.",
      ],
      proTip: "It's how everyone steals the Everburn Blade on the nautiloid — literally the first trick every Honour runner learns.",
    },
    {
      name: "Pre-combat turn-based mode",
      category: "Setup",
      difficulty: 4,
      summary:
        "Entering turn-based mode while enemies are idle lets you walk the whole party into position — and sometimes land free hits — before initiative ever rolls.",
      steps: [
        "Scout the room, note vision cones, then hit turn-based mode while enemies are still neutral.",
        "Walk party members into flanks, onto high ground, or beside unsuspecting targets during free movement.",
        "Line up your opener — sneak attack, smite, or an AoE — and commit on your tempo.",
        "Stay out of sight until the strike: any NPC who spots you joins the round early and spoils the setup.",
      ],
      proTip: "Most Honour-mode Cazador and House of Hope clears quietly assume this trick — it's the difference between a scripted wipe and a farming run.",
    },
    {
      name: "Camp resource pacing",
      category: "Economy",
      difficulty: 3,
      summary:
        "Spell slots, scrolls, and camp supplies are the real health bar — blowing everything on trash mobs means the boss gets you at half a tank.",
      steps: [
        "Budget the adventuring day: cantrips and weapon attacks for trash, leveled slots for elites and bosses.",
        "Short rest to recover before touching camp supplies — it's free healing and free Bardic/Superiority dice.",
        "Long rest before every scripted boss — walking into a set-piece fight dry is how Honour runs end.",
        "Hoard smart, not forever: arriving at the finale with forty unused elixirs means you left power on the shelf.",
      ],
      proTip: "The community rule: long rests are cheap and dead runs are expensive — serious runners burn supplies freely rather than ration themselves into a wipe.",
    },
  ],
  pvp: {
    intro:
      "Baldur's Gate 3 has no literal PvP, but Tactician and Honour mode are where the community measures skill — same fights, hard execution checks. Honour mode adds legendary boss actions, strips the dice manipulation, and deletes the save on a party wipe. What separates a Balanced player from an Honour finisher is never luck: it's pre-buffing, surprise rounds, and refusing every fair fight.",
    modes: [
      {
        mode: "Tactician difficulty",
        advice: [
          "Enemies hit harder, have more HP, and gain extra abilities — treat every Act 1 fight as lethal from turn one.",
          "Take Surprise on every encounter; on Tactician the free round is the difference between a stomp and a war of attrition.",
          "Build for initiative — Alert and high DEX mean your control spells land before the enemy's do.",
          "Stop hoarding: Tactician is tuned assuming you actually use your scrolls, arrows, and elixirs.",
        ],
      },
      {
        mode: "Honour Mode",
        advice: [
          "One save, no reloads, legendary actions on bosses — every fight needs a plan AND a bailout plan.",
          "Never enter a boss fight without pre-buffs, Surprise, and an escape line (invisibility, Misty Step, a summoned blocker).",
          "Camp supplies stop mattering — long rest whenever the party is even slightly depleted.",
          "Have one dedicated controller with Counterspell, Silence, or Hold Person; legendary bosses lose to losing their turn.",
          "Disengage beats pride: if the fight turns, run — Honour is a marathon of un-lost runs, not won fights.",
        ],
      },
      {
        mode: "Solo / challenge runs",
        advice: [
          "Solo Honour runs live on stealth, summons, and scroll-cheese — pick a self-sufficient chassis (Swords Bard, Gloom Stalker, Tavern Brawler thrower).",
          "Summons are your party: Elementals and dead-thralls take the hits a lone character can't.",
          "Ruleset challenges (no consumables, single-class, permadeath) teach resource purity — strip one crutch at a time, not all at once.",
          "Rehearse boss fights in a normal save first; challenge runs punish surprises, not weak builds.",
        ],
      },
    ],
    counterPlay: [
      "Enemy casters locking you down: Counterspell, Silence their zone, or break their concentration with multi-hit sources like Magic Missile.",
      "Enemies who shove (githyanki, duergar, goblins on ledges): never end a turn beside a drop, keep Feather Fall readied, and hug walls over edges.",
      "Bosses with legendary reactions: bait the reaction with a cheap action first, then spend your real combo once it's burned.",
      "Invisible and ambushing enemies: See Invisibility, Faerie Fire, or just AoE the square they vanished from.",
      "Ranged enemies farming you from high ground: Fog Cloud or Darkness kills their sightlines — then climb and take their perch.",
    ],
  },
  drills: [
    {
      name: "Nautiloid speed-clear",
      duration: "10 min",
      how: "Replay the tutorial start to the helm on Tactician — Command: Drop the cambion's Everburn Blade, skip optional fights, reach the transponder fast. It's every speedrunner's opening rep.",
      goal: "Consistently clear it under 10 minutes with the sword stolen and no party deaths.",
    },
    {
      name: "Grym gauntlet",
      duration: "15 min",
      how: "Repeat the Adamantine Forge fight: superheat Grym on the lava vents, then slam him with the forge hammer on cooldown while the party only ever fights where the hammer swings.",
      goal: "Beat him taking zero melee hits — pure lure-and-slam positioning practice.",
    },
    {
      name: "Iron Throne rescue run",
      duration: "10 min",
      how: "Run the underwater prison timer: pre-position fast party members, pop Dash and Misty Step scrolls, and route who frees which cells before the turn limit ends.",
      goal: "Rescue every prisoner — the drill is turn-order and movement routing under a hard clock.",
    },
    {
      name: "House of Hope rehearsal",
      duration: "15 min",
      how: "Practice the full gauntlet: stealth the archives, pre-buff outside Raphael's door, surprise the fight, and focus him through his adds. The community's unofficial Honour final exam.",
      goal: "Kill Raphael with no deaths and a repeatable pre-buff order you can recite cold.",
    },
    {
      name: "Goblin camp stealth sweep",
      duration: "15 min",
      how: "Clear the entire Shattered Sanctum using stealth kills and chokepoint pulls — raise zero alarms, take zero fair fights.",
      goal: "The whole camp dead without a single 'everyone hostile' trigger.",
    },
  ],
  proSettings: [
    {
      player: "Mae",
      team: "Speedrun.com BG3 leaderboards",
      notes: "Held multiple BG3 world records across categories — copy the route discipline: runs are won in menus, dialogue skips, and movement, not combat rolls.",
    },
    {
      player: "Luality",
      team: "Twitch",
      notes: "Famous for beating BG3 on a dance pad and other self-imposed challenge runs — copy her one-rule-at-a-time discipline and zero-panic boss execution.",
    },
    {
      player: "Mortismal Gaming",
      team: "YouTube",
      notes: "CRPG analyst who 100%-completes every game he reviews, including Honour mode clears — copy his systematic, documented build math instead of vibes.",
    },
    {
      player: "Morgana Evelyn",
      team: "YouTube",
      notes: "The go-to Honour mode guide creator — copy her turn-by-turn boss breakdowns (Myrkul, Orin, Raphael) and her pre-fight checklists.",
    },
    {
      player: "WolfHeartFPS",
      team: "YouTube",
      notes: "Build and combat guide specialist — copy the way he tests every interaction on live encounters before recommending it; theory only counts if it's repeatable.",
    },
  ],
  commonMistakes: [
    "Ending turns beside ledges and chasms — every veteran has fed a character to a 4-damage Shove.",
    "Taking the fair fight — opening combat from the front instead of with Surprise donates a free round to the enemy.",
    "Hoarding consumables forever — an uncast scroll is a wasted spell slot; Honour runs end with inventories of unused power.",
    "Splitting the party into a scripted fight — one character trapped in dialogue while three idle outside is how camps wipe you.",
    "Blowing every spell slot on trash mobs, then facing the boss on cantrips — pace the day around the fight that matters.",
    "Skipping Examine — right-clicking an enemy shows its resistances; casting fire into a fire-immune target is a thrown-away slot.",
  ],
  metaNote:
    "The mature community meta is burst-first Honour play: Tavern Brawler throwers, Swords Bard archery, and Gloom Stalker openers dominate tier lists, and every serious runner treats pre-buffing and surprise rounds as the baseline rather than tricks.",
};

export default content;

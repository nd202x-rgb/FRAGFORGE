import type { GameContent } from "@/lib/content";

const content: GameContent = {
  slug: "street-fighter-6",
  overview:
    "Street Fighter 6 is a one-on-one fighter where rounds are won in the neutral — the footsies game of whiff punishes, drive rushes and throw reads — more than in the lab. The Drive system puts a resource bar on offense itself, so every exchange is also a bet about who runs out of gas first. Ranked climbs come from removing autopilot habits: jumping too much, mashing on minus frames, and waking up with reversals you can't afford to lose.",
  skillPillars: [
    "Anti-airing",
    "Whiff punishing",
    "Drive Rush offense",
    "Throw-tech defense",
    "Hit confirming",
    "Drive gauge management",
  ],
  techniques: [
    {
      name: "Whiff punishing",
      category: "Neutral",
      difficulty: 3,
      summary:
        "Stand just outside your opponent's poke range and punish the recovery of their whiffed button — the single skill that defines real footsies.",
      steps: [
        "Stand at the tip of their longest normal — close enough to bait it, far enough to miss.",
        "Hold down-back and wait; the whiffed button has recovery frames you can't mash through.",
        "Punish with your own furthest-reaching button into a knockdown or drive rush cancel.",
        "Move back in and repeat — the threat of the whiff punish is what makes them scared to press.",
      ],
      proTip: "Watch Punk neutral: he doesn't run at you, he lets your button whiff by one pixel and punishes every single time. Space, don't chase.",
    },
    {
      name: "Anti-air consistency",
      category: "Defense",
      difficulty: 2,
      summary:
        "Meet every jump-in with a dedicated anti-air — if jumps are free for the opponent, your ground game is worthless.",
      steps: [
        "Drill your character's real anti-air button — DP for shotos, crouching HP/2HK-style buttons for others.",
        "Anti-air EARLY on reaction to the jump arc, not late when they're already descending.",
        "After the anti-air, take the knockdown and run your gameplan — don't dash back to neutral.",
        "If you get crossed up, block it and note the pattern instead of forcing the DP.",
      ],
      proTip: "Pros anti-air so reliably that ranked opponents stop jumping — that's the point. One consistent anti-air rewires their entire approach.",
    },
    {
      name: "Drive Rush cancel pressure",
      category: "Offense",
      difficulty: 3,
      summary:
        "Cancel a cancelable normal into Drive Rush to turn one hit into a full strike-throw sequence — SF6's core damage engine.",
      steps: [
        "Learn which of your normals cancel (usually medium punches/kicks).",
        "On hit OR block, buffer the Drive Rush cancel and dash in behind it.",
        "Once in, run strike-throw: jab pressure, then either a button frame trap or a throw.",
        "Spend the 3 Drive bars only when you can convert — canceling into nothing is how you burn out.",
      ],
      proTip: "MenaRD's pressure looks unstoppable because the DR cancel is hidden inside an already-scary normal — the normal hits, the rush is free.",
    },
    {
      name: "Delay tech",
      category: "Defense",
      difficulty: 4,
      summary:
        "Block the strike, then tech the throw a beat later — the defensive timing that beats both shimmy and throw loops.",
      steps: [
        "When the opponent walks in after a blocked button, keep blocking — don't panic-tech instantly.",
        "Tech a fraction AFTER the strike timing: you block the jab, then cover the throw that follows.",
        "Mix it with a backdash occasionally so they can't just delay their own strike.",
        "If they start shimmying (walking back), stop teching and let the throw whiff — then punish.",
      ],
      proTip: "Delay tech is what separates Diamond from Master — pros lose one interaction learning your timing, then you get predictable; cycle your answers.",
    },
    {
      name: "Shimmy",
      category: "Offense",
      difficulty: 3,
      summary:
        "Walk in like you're going to throw, then walk back out so their tech whiffs — whiff-punish their throw attempt for a full combo.",
      steps: [
        "Condition them first: land 2-3 real throws in a row so they start teching on defense.",
        "On the next oki, walk forward into throw range, then instantly walk back or backdash.",
        "Their tech input whiffs — punish the recovery with your biggest punish combo.",
        "Shimmy only works after real throws land; an unshimmied opponent who doesn't tech just blocks it.",
      ],
      proTip: "The shimmy is why 'just tech' isn't a strategy — Tokido has built entire tournament sets on making techs whiff at the exact same oki timing.",
    },
    {
      name: "Hit confirm into Drive Rush",
      category: "Offense",
      difficulty: 4,
      summary:
        "See the hit land before spending the cancel — on block you stop, on hit you DR cancel into a real combo.",
      steps: [
        "Use a two-hit confirm: a light into a medium you can cancel, or a single reactable button.",
        "Practice in training mode with the dummy on random block until the cancel is a reaction, not a guess.",
        "On hit: DR cancel into your bread-and-butter combo. On block: stop, stay safe, keep pressure honest.",
        "If you can't confirm yet, use safer lights — a dropped confirm costs 3 bars AND your turn.",
      ],
      proTip: "Pros hit-confirm a single crouching light into Drive Rush — it looks like reads, but it's trained reaction to the hitspark. Drill it random-block until it's reflex.",
    },
    {
      name: "Drive Impact counter-play",
      category: "Defense",
      difficulty: 3,
      summary:
        "Raw DI loses to your own DI — react to the screen flash, DI back, and take the crumple punish they tried to steal.",
      steps: [
        "Watch for the startup flash and sound cue — DI is 26+ frames, reactable if you're looking for it.",
        "DI back immediately on reaction; armor absorbs their hit and your DI wins the exchange.",
        "Against DI spammers, use normals that recover fast enough to DI on reaction — don't autopilot strings.",
        "In burnout you can't DI back — keep your gauge healthy so the answer always exists.",
      ],
      proTip: "Ranked DI spammers fold the moment you counter-DI twice in a row — it's a check on autopilot, not a real strategy. Punish it and watch them stop.",
    },
    {
      name: "Burnout pressure",
      category: "Offense",
      difficulty: 4,
      summary:
        "Once the opponent's Drive gauge is empty, every blocked hit still chips and they can't cancel or reversal — that's when pressure becomes free.",
      steps: [
        "Track their bar like your own: two bad DR cancels or heavy parry use usually burns them out.",
        "When they enter burnout, press your advantage — chip them down with specials and long strings.",
        "Force them to corner: burnout + corner means every block loses health and drive reversal is their only out.",
        "Respect drive reversal — don't autopilot a gap in the string they can blow through.",
      ],
      proTip: "Kakeru's JP play is a burnout machine — the whole gameplan is making you spend bar on defense before he ever has to spend his on offense.",
    },
    {
      name: "Safe jump oki",
      category: "Offense",
      difficulty: 4,
      summary:
        "Jump in with a timed aerial that beats both blocking and wake-up reversals — your oki without the 50/50 risk.",
      steps: [
        "After a knockdown, jump in with the specific timing your character's safe jump needs (drill it in training).",
        "If they block, your attack lands and you convert into a combo or throw.",
        "If they reversal (DP, level 3), you land and block it — full punish for free.",
        "Set it up off your most common ender; every character has one knockdown that times it.",
      ],
      proTip: "The safe jump is how pros run oki against reversal-happy opponents without ever gambling — AngryBird cycles safe jumps until you stop mashing DP.",
    },
    {
      name: "Drive gauge discipline",
      category: "Macro",
      difficulty: 2,
      summary:
        "Spend the Drive bar like a budget — parry and cancel when it wins the round, never when it just feels good.",
      steps: [
        "Open rounds by building: a couple of safe poke cancels and drive parries fill the bar fast.",
        "Drive Impact only when the punish is guaranteed or the round is already going bad.",
        "Refuse to DR cancel on pure pressure alone — save the cancel for confirmed hits.",
        "At low bar, stop spending entirely and play neutral until the round resets your options.",
      ],
      proTip: "The best players treat Drive like health: every bar spent is a bet, and they only bet when the odds favor them. Burnout is how leads get thrown.",
    },
    {
      name: "Frame trap pressure",
      category: "Offense",
      difficulty: 3,
      summary:
        "Chain normals with just enough gap that their mash loses to your next button — the punish for everyone who can't stop pressing.",
      steps: [
        "After a blocked button, follow with a button that catches them if they press (jab into medium, etc.).",
        "Frame data decides the gap — a true frame trap has them pressing into your active frames.",
        "Mix the frame trap with a real throw so they can't just block forever.",
        "When they respect it and stop mashing, walk in and start the throw game.",
      ],
      proTip: "Pros frame-trap so cleanly that mashers lose the whole round in 10 seconds — the pressure doesn't stop until they learn to hold the block.",
    },
    {
      name: "Perfect Parry on read",
      category: "Defense",
      difficulty: 5,
      summary:
        "Parry on the exact frame their attack lands for a perfect parry — time-slow, free punish, and the hardest defensive flex in the game.",
      steps: [
        "Hold parry during their obvious button timings — fireballs, approach normals, predictable pressure hits.",
        "Perfect parry the FIRST hit of a string, then punish the slow-motion recovery with a full combo.",
        "Use it on fireball approach reads and slow overheads — the patterns where timing is learnable.",
        "Don't autopilot parry in neutral — the startup leaves you standing still and throwable.",
      ],
      proTip: "Perfect parry is a read, not a reaction — pros parry the first hit of DI-blockstrings and fireballs they've scouted, not random neutral buttons.",
    },
  ],
  pvp: {
    intro:
      "SF6 PvP is a resource war disguised as a reflex test. Every rank gate — Bronze to Diamond, Diamond to Master — falls when one habit dies: jumping too much, mashing on minus, or spending Drive like it's infinite. Ranked is decided by who wins the neutral three times in a row, not who lands the coolest combo.",
    modes: [
      {
        mode: "Ranked ladder",
        advice: [
          "Master the anti-air before you queue — one clean AA is worth more than any new combo.",
          "Don't rematch tilted opponents on ranked — the one who just lost is already scouting your habits.",
          "Play for the knockdown, not the stylish route — consistent oki beats flashy damage.",
          "If they're DI-spamming, just hold block and counter-DI — let them outplay themselves.",
          "Stop at two losses in a row to a bad matchup; that round is a lab problem, not a grind.",
        ],
      },
      {
        mode: "Battle Hub / casuals",
        advice: [
          "Cabinet play is where you test real matchups — find the players on the character you lose to.",
          "Use these sets to drill new tech live: a perfect parry, a shimmy, a safe jump timing.",
          "Watch the strongest players' replays in the Hub — their habits are the lab.",
          "Long sets beat single games: learn their adaptation, not just the first-round surprise.",
        ],
      },
      {
        mode: "Scrims / tournaments",
        advice: [
          "Run first-to-3 or first-to-5 sets against dedicated practice partners — adaptation is the real skill.",
          "Keep a log of what beats you per character — the same loss twice is a training-mode problem.",
          "Use training mode between matches to lab the specific punish you just missed.",
          "Warm up in ranked for 15 min before the set — cold reads lose the first game every time.",
        ],
      },
    ],
    counterPlay: [
      "Against jump-heavy players: stand still, anti-air everything, and they'll beat themselves before round two.",
      "Against Drive Impact spammers: keep your distance, use fast-recovery normals, and DI back on reaction.",
      "Against throw-loop pressure: delay tech once to stuff the throw, then shimmy-bait them into whiffing it.",
      "Against fireball zoners: walk and parry — every blocked fireball gains you space, and parry builds your bar.",
      "Against wake-up reversals: run a safe jump or empty-jump low — their DP whiffs and you take the round.",
    ],
  },
  drills: [
    {
      name: "Anti-air gauntlet",
      duration: "10 min",
      how: "Training mode: record the dummy jumping at you from every range, then anti-air every single jump until 20 in a row are clean.",
      goal: "Unconscious AA — you anti-air before you consciously see the jump arc.",
    },
    {
      name: "Whiff punish lab",
      duration: "15 min",
      how: "Record the dummy walking forward and throwing out its longest poke on random timing, then whiff-punish every recovery on reaction.",
      goal: "Punish 8/10 whiffed buttons consistently before you run ranked.",
    },
    {
      name: "Hit-confirm grind",
      duration: "10 min",
      how: "Dummy on random block: confirm your single-hit DR cancel into a combo every time it hits, and block every time it's blocked.",
      goal: "The cancel becomes a reaction — never guess the DR into a blocked string.",
    },
    {
      name: "Delay tech vs shimmy mix",
      duration: "10 min",
      how: "Record the dummy running block-then-throw AND block-then-walk-back mixups, then cycle delay tech and no-tech answers.",
      goal: "Stop getting shimmy-killed — your tech timing adapts in the set, not after it.",
    },
    {
      name: "Burnout pressure rep",
      duration: "10 min",
      how: "Force the dummy to burnout, then run your corner pressure strings and drive-reversal-safe blocks until the sequence is muscle memory.",
      goal: "A burnout round should feel free — same pressure, same respect for their reversal.",
    },
    {
      name: "VOD the dropped punishes",
      duration: "10 min",
      how: "Replay a ranked loss; clip every whiff punish and every unsafe jump-in you missed — count them.",
      goal: "Your biggest ranked loss is a catalog of missed punishes, not bad luck.",
    },
  ],
  proSettings: [
    {
      player: "MenaRD",
      team: "Team Liquid",
      notes: "CPT champion and the pressure king — copy his DR-cancel inside scary normals and how he grinds opponents out with relentless strike-throw, not flashy combos.",
    },
    {
      player: "Punk",
      team: "FlyQuest",
      notes: "EVO 2024 champion on Cammy — the cleanest neutral in the world: near-pixel-perfect whiff punishes and punishing patience. Study how he wins rounds in neutral before he ever presses a mixup.",
    },
    {
      player: "Tokido",
      team: "REJECT",
      notes: "The methodical demon — copy his delay-tech cycles, shimmy reads, and how he turns one defensive win into a guaranteed punish. SF6's most disciplined footsies player.",
    },
    {
      player: "Kakeru",
      team: "ZETA DIVISION",
      notes: "Capcom Cup 11 champion on JP — study how he bleeds the opponent's Drive bar with fireball pressure and burnout punish, winning the round before the last hit.",
    },
    {
      player: "AngryBird",
      team: "Nigma Galaxy",
      notes: "EVO 2023 champion on Ken — copy his safe-jump oki loops and patient corner conversions; his rounds look boring until you realize he never gave you a free one.",
    },
  ],
  commonMistakes: [
    "Jumping in without a knockdown setup — a jump that isn't a safe jump is just a free anti-air for the opponent.",
    "Mashing on minus frames — every blocked string you disrespect is a counter-hit waiting to happen.",
    "DR-canceling on pure pressure and burning out — three bars spent on a blocked string is how leads get thrown.",
    "Wake-up reversal on every knockdown — it wins once, then a good player baits it and takes the round.",
    "Teching on every single throw approach — delay tech and let the shimmy whiff, or you'll get styled on.",
    "Spending the last Drive bar on a desperation cancel — burnout removes every defensive option at once.",
  ],
  metaNote:
    "The current meta rewards the fundamentals: a tight neutral, clean DR-cancel confirms and burnout pressure win more rounds than risky perfect-parry reads or heavy gimmick characters. Modern controls are fully legit — the ranked difference is spacing and adaptation, not the control scheme.",
};

export default content;

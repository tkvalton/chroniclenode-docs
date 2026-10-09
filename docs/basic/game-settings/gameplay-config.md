# Gameplay Config

<Shot name="gameplay-config-editor" caption="The Gameplay Config editor (Game Settings > Gameplay Config)." />

The **Gameplay Config** holds the rules of your game that are not about one thing in the database: how combat is resolved, what death costs, how the party works, what is saved. Every field has a tooltip. This page describes the **Party Management** and **Combat** categories in full, because the other chapters point to them, and lists the others.

## Categories

| Category | Groups |
|---|---|
| **General** | Items & Inventory, [Quests](/basic/events-and-quests/quests), Fog of War, Save/Load Rules |
| **Visuals** | Rig Markers, Outline Materials, Targeting Visuals, Tactical View Visuals, Target Textures |
| **Party Management** | Party and companions, New Game Rules, Leveling, **Kill Experience**, **NPC Level Scaling**, Controller Logic, Input |
| **Combat** | Death & Revival, Threat, Damage Results, Pools, **Hit Rules** |
| **NPC LOD System** | LOD distance thresholds, update intervals, batch processing |

## Party Management

The rules for the party of player characters. See [Playable Character](/basic/entities/playable-character#companions) for how the companions behave.

### Party

| Field | What it does | Default |
|---|---|---|
| **Max party size** | How many characters are in the active party | `4` |
| **Max reserve companions** | How many recruited companions can wait out of the world, besides the active party. `0` = no reserve: a recruit with a full party is turned down | `6` |
| **Reserve experience enabled** | Companions in the reserve gain experience too | on |
| **Reserve experience percentage** | The share of every experience grant the reserve gets (`0.5` = half) | `0.5` |
| **Allow character switching** | The player may take over any living party member. Off: the player only ever controls the first member, and the others are companions (when that member falls, control still passes to a living one) | on |
| **Allow switching in combat** | The player may switch characters while the party is fighting | on |
| **Has main character** | On: the first member of the party is the **main character**. It cannot wait in the reserve, and its death ends the game under *Game over* and *Permadeath*. Off: there is **no main character**: any member, the first included, can be put in the reserve and swapped out, and the game ends only when the **whole party** is down. Needs *Allow character switching*: when the player cannot take over the others, the first member is the only one the player controls, so it is always the main character (the switch is greyed out in the editor) | on |

With **Has main character** on, the first member of the party is the **main character**: it cannot be put in the reserve, and its death ends the game when the death behavior is *Game over* or *Permadeath* (a companion that falls does not end it). With it off, nobody is special: the party can rotate its first member into the reserve, and only a party wipe ends the game. Use it for a game of a band of equals, where the player picks a squad from a roster.

### Companions

| Field | What it does | Default |
|---|---|---|
| **Companion follow distance** | How far (in metres) a companion stays behind the character the player controls. Each companion further down the line stands a little farther back | `3` |
| **Companion assist range** | How far from a fighting party member a companion joins the fight | `25` |
| **Companions use abilities** | Off: a companion only uses its basic attack | on |

### New game rules

| Field | What it does | Default |
|---|---|---|
| **Use character creation UI** | The player chooses or makes a character at the start of a new game | on |
| **Starting party composition** | The [characters](/basic/entities/playable-character) of the starting party | none |
| **Starting map** | The id of the [world](/basic/world/worlds) a new game starts in | |

### Leveling

| Field | What it does | Default |
|---|---|---|
| **Max level** | The highest level a player can reach. Entities, including NPCs, are never above it | `50` |
| **Experience per level** | The experience each level needs, as a table you edit. Levels you leave out use the default: `100 x (level - 1)` experience to go from the level before | table empty |

### Kill experience

How much experience the party gets when it defeats an NPC. It depends on the **level of the NPC**, so a level 30 wolf is worth more than a level 3 one, and you can shape the whole curve from here. The result is then multiplied (see below).

| Field | What it does | Default |
|---|---|---|
| **Kill experience mode** | **Fixed**, **Table** or **Formula**, below. Its own fields appear under it | Fixed |

| Mode | The amount before the multipliers | Fields |
|---|---|---|
| **Fixed** | The **Experience worth** of the NPC itself, whatever its level. This is how earlier versions worked | none |
| **Table** | A row for each level you choose: *from level N the NPC gives X experience*. A level uses the row with the largest level that is not above it, so a row for level 10 covers level 10 up to the next row. An NPC under the first row gives nothing from the table | The rows (*Add a row*) |
| **Formula** | A [formula](/basic/shared-systems/formulas) that gets the **level of the NPC** and returns the experience. A *Linear* formula of `10` gives 10 experience at level 1 and 100 at level 10. A *Hyperbolic* or soft-capped one makes the late levels worth less and less extra, which is the curve most games want | A formula (any formula; its own fields appear under it) |

A **table** is a curve you draw by hand; a **formula** is a curve you describe. They give the same kind of result, so choose whichever is easier to tune: a table when you want exact numbers for a few key levels, a formula when you want a smooth curve over all of them. The editor shows a small table of the result for the levels 1, 5, 10, 20, 30 and 50, so you can see the curve without playing.

**The level that counts is the level the NPC really has**, after [scaling](#npc-level-scaling): if a level 4 NPC was raised to level 17 to meet a level 20 player, it gives the experience of level 17.

**Multipliers.** The amount is multiplied by all of these (1 = no change, 0 = no experience):

| Multiplier | Where |
|---|---|
| **Experience multiplier** of the NPC | The [NPC definition](/basic/entities/npcs#experience) |
| **Experience multiplier** of the placed NPC | The [placed NPC](/basic/world/uniques), on top of its definition: a rare version of a common creature is `3` |
| **Experience multiplier** of each entity type of the NPC | The [entity type](/basic/types-and-groups/entity-types#npc-level-and-experience): an Elite gives 3 times as much |

**A worth on the NPC itself.** In *Table* and *Formula* mode, an NPC whose **Experience worth** is above 0 gives that instead of the amount of its level (the multipliers still apply). Use it for a quest boss whose [reward](/basic/shared-systems/rewards) you want to set by hand.

Examples:

| Level of the NPC | Mode | Calculation | Experience |
|---|---|---|---|
| 12 | Formula, Linear `10` | `10 x 12` | 120 |
| 12, an Elite (x3), a rare placed version (x2) | Formula, Linear `10` | `120 x 3 x 2` | 720 |
| 12 | Table with rows 1: 10, 10: 100, 20: 400 | the row for level 10 | 100 |
| 12, worth 500 on the NPC | Table | `500` (its own worth) | 500 |

#### Experience falloff

An NPC far below the party is not much of a fight, so it can give less experience. Turn **Experience falls off for NPCs under the party** on and draw the curve.

| Field | What it does | Default |
|---|---|---|
| **Free levels** | The levels under the party that cost nothing. `3`: an NPC up to 3 levels under still gives everything | `0` |
| **Curve** | A [formula](/basic/shared-systems/formulas) that gets the number of levels the NPC is under the party (after the free ones) and returns the **percent of the experience that is lost**, from 0 (all kept) to 100 (nothing). A *Linear* formula of `10` loses ten percent for every level and gives nothing from 10 levels down. A *Hyperbolic* one loses a lot at first and then flattens | none (no falloff) |

"Under the party" means under the **Scaling reference** (the party average, the highest member or the character in control), whether or not level scaling is on. An NPC at or above the reference never loses anything. The falloff multiplies with the other multipliers. The editor shows the share kept for 1, 3, 5, 8, 10 and 15 levels under.

| You want | Settings |
|---|---|
| **Grey enemies give nothing** | Free levels `5`, Curve: Linear `20` (nothing from 5 levels past the free ones) |
| **A soft fade** | Free levels `2`, Curve: Hyperbolic, max `90` |
| **No falloff** | Off (default) |

### NPC level scaling

By default an NPC has the level you gave it: a level 4 wolf is a level 4 wolf, however strong the player is. **Level scaling** moves the level of an NPC towards the level of the party when it is made, so the world stays a challenge (or a hand-made level curve stays safe). It is a decision of your game, so it is a set of choices, and **Off** keeps things as they were.

| Field | What it does | Default |
|---|---|---|
| **NPC level scaling** | **Off**: NPCs keep their level. **Scale up**: NPCs weaker than the player are raised. **Scale down**: NPCs stronger than the player are lowered. **Both** | Off |
| **Scaling reference** | Whose level NPCs follow: the **party average** (rounded), the **highest** level in the party, or the **character the player controls** | Party average |
| **Scale up within levels** | A weak NPC is raised until it is this many levels **under** the reference. `0` raises it to the reference | `3` |
| **Scale down within levels** | A strong NPC is lowered until it is this many levels **over** the reference. `0` lowers it to the reference | `3` |
| **Rescale NPCs on respawn** | An NPC that respawns takes the level the party needs **now**, not the one it was made with | on |
| **Rescale NPCs on party change** | Living NPCs take the new level when the party levels up, a member joins or leaves, or the player switches character (when the reference is the character in control). An NPC in a fight keeps its level and takes the new one when the fight ends | on |
| **Default NPC growth profile** | The [growth profile](/basic/entity-stats/growth-profiles) every NPC starts with: how its stats and pools grow with its level. The toolkit makes one called *Default* (empty); pick another, or `None` | Default |

An NPC that is already inside the band is not touched. With the reference at 13 and both distances at 3, the band is levels 10 to 16:

| NPC level | Result | Why |
|---|---|---|
| 4 | 10 | 9 levels under: raised by 6, to 3 levels under |
| 7 | 10 | 6 levels under: raised by 3, to 3 levels under |
| 12 | 12 | inside the band, unchanged |
| 16 | 16 | inside the band, unchanged |
| 22 | 16 | 9 levels over: lowered by 6, to 3 levels over |

**When it happens.**

| Moment | What happens |
|---|---|
| **The NPC is made** (the world loads it, an event or an encounter spawns it) | It takes the scaled level. If the party does not exist yet, it keeps its own level |
| **The NPC respawns** | With *Rescale NPCs on respawn* on, it takes the level the party needs now |
| **The party changes** (a member levels up, joins or leaves, or the player switches to a character of another level) | With *Rescale NPCs on party change* on, every living NPC is given its level again, from the level of its definition. The world does this once for the whole world, and only if the level the NPCs scale to really changed |
| **An NPC is in a fight** | It waits: it keeps its level for the fight and takes the new one when it ends |
| **A game is loaded** | A saved NPC keeps the level it was saved with; the next party change adjusts it |

A rescaled NPC keeps its share of health, **whatever the Level up capacity rule below says** (that rule is for the player's characters). An NPC at 65 % health that is raised from level 4 to level 10 has a bigger maximum and is still at 65 %; one that is lowered is still at 65 %. The level always stays between 1 and **Max level**. Turn both rescale options off for a game where an NPC keeps the level it was made with.

**The stats follow.** An NPC's [stats and pools grow with its level](/basic/entity-stats/growth-profiles), so a raised NPC is really stronger, not just labelled differently. *How much* each stat grows is the job of the [growth profile](/basic/entity-stats/growth-profiles): one for every kind of NPC (heavy, caster, minion), with the project's default profile behind them all.

#### Ranks: elite, rare, boss

Some NPCs should not follow the rules: a boss that is always dangerous, a rare that is always worth a trip. Those are **ranks**, and a rank is an [Entity Type](/basic/types-and-groups/entity-types): make the types *Elite*, *Rare* and *Boss* and give them to the NPCs. Each type has its own scaling choice:

| Level scaling of the type | What it does |
|---|---|
| **Follow game** | Like every NPC |
| **Never scales** | The NPC keeps the level of its definition, whatever the player's level. A level 60 dragon in a starting zone |
| **Fixed offset** | The NPC is always a number of levels above (or, negative, under) the **reference**: `3` is a boss that is always 3 levels above you |

If an NPC has several types, *Fixed offset* wins over *Never scales*, and the first Fixed offset type in its list is used.

**A rank only changes levels when scaling is on.** With **NPC level scaling** Off, a rank is just a label: the NPC keeps the level of its definition, and the rank is there for your interface (a gold border on elites) and for [conditions](/basic/shared-systems/conditions) ("+20 % damage against Bosses"). The type's **experience multiplier** works either way.

#### Recipes

| You want | Settings |
|---|---|
| **A hand-made world, no scaling** | Scaling Off. Set the level of every NPC yourself. Make the types Elite, Boss and Rare for the interface only |
| **An open world where nothing is ever trivial or hopeless** | Scale **Both**, within `3`, reference *Party average*. Bosses: *Fixed offset* `+3` |
| **Zones with a level range, but low level enemies catch up** | Scale **Up** only, within `0`: nothing is below the player |
| **Players who out-level a zone get an easy time, but not a deadly one** | Scale **Down** only: strong NPCs are lowered to near the player, weak ones keep their level |
| **Boss rush** | Everything *Fixed offset* `+5` |
| **A dragon in the starting zone** | *Never scales* on its type, or scaling Off |

### Controller logic and input

**Camera logic** and **Player controller logic** are the resources that decide how the camera and the movement work (see [Controller & Camera](/basic/game-settings/controller-and-camera)). **Look drag threshold** is how far the mouse moves with a button held before a drag begins; **Log input routing** prints where each click went, for finding interface problems.

## Combat

| Field | What it does | Default |
|---|---|---|
| **Combat style** | Real-time or turn-based (turn-based is not built yet) | Real-time |

### Death & Revival

| Field | What it does | Default |
|---|---|---|
| **Death behavior** | Game over, respawn at a checkpoint, or permadeath | Respawn at checkpoint |
| **Death gold penalty** | The share of gold lost on death (0 to 1) | `0.1` |
| **Death experience penalty** | The share of experience lost on death (0 to 1) | `0` |
| **Drop items on death** | The player drops the items of the inventory | off |

### Threat

| Field | What it does | Default |
|---|---|---|
| **Use threat system** | On: enemies attack whoever has made the most [threat](/basic/keywords#threat). Off: they attack the nearest of the entities fighting them (a Taunt still forces a target). Turn it off for a game with no tank and healer roles | on |
| **Heal threat multiplier** | Healing makes threat on the enemies fighting the healed entity: this share of the healing done | `0.5` |
| **Damage threat multiplier** | A multiplier on the threat a hit makes (damage effects have their own on top) | `1` |

### Damage Results

| Field | What it does | Default |
|---|---|---|
| **Threat basis** | Which number of a hit makes threat: the raw number, after the attacker's modifiers, after the defender's modifiers (shields included), or only what reached health | After the defender's modifiers |
| **Leech basis**, **Reflect basis** | The same choice for life leech and for damage reflection | Health only |
| **Max reflect chain** | How many reactions deep a hit may be and still be reflected. `1`: a reflection is never reflected again | `1` |
| **Zero damage counts as a hit** | A hit that armor or block reduced to 0 still triggers on-hit effects and shows "0" | on |
| **Minimum damage** | The smallest damage a landed hit can end with. `0` = armor can reduce a hit to nothing | `0` |
| **Round damage** | Round the final damage to whole numbers | off |

### Pools

| Field | What it does | Default |
|---|---|---|
| **Capacity change rule** | What happens to the current value of a [pool](/basic/entity-stats/pool) when its maximum changes from equipment, buffs or stats: keep the percentage, add the gain, keep the current value, or fill it | Keep the percentage |
| **Level up capacity rule** | The same, for a maximum that grows on a level-up of a **player character**. An NPC that changes level always keeps its percentage | Add the gain |

### Hit Rules

These rules decide whether an attack can **miss**. This section is long on purpose: the hit roll has a few moving parts, and your game probably wants some of them and not others.

#### The idea in one minute

When an ability that can miss reaches an enemy, the game makes **one hit roll** for that ability and that enemy. The roll has three possible results:

| Result | What happens |
|---|---|
| **Hit** | The ability applies as usual. |
| **Glancing hit** | The ability applies, but its damage and healing are weaker. Only if you turn [glancing hits](#glancing-hits) on. |
| **Miss** | Nothing of the ability reaches that enemy. The attacker sees "Miss". |

The chance to hit is one number you can read at any time:

```text
chance to hit = base chance (melee or ranged)
              + accuracy of the attacker
              - evasion of the target
              + the change of the level gap

and then kept between the minimum and the maximum
```

Everything in that line is a setting you choose, or a [stat](/basic/entity-stats/stats) you build. You can use all of it, some of it, or none of it:

- No misses in your game? Leave **Use hit system** off. Nothing in this section does anything.
- A flat 5 % miss for everybody? Turn it on, leave the rest as it is (the default base chance is 95 %).
- Miss chances that grow with stats (accuracy, evasion) and with the difference in level? Turn it on and build the stats, and choose a level gap mode.
- Only some abilities can miss? Leave it off and set **Hit rule** to *Can miss* on those abilities.

::: tip The roll belongs to the ability, not to the damage
Earlier versions of the toolkit worked out a miss inside the damage calculation. Now an ability **rolls to hit once, before any of its effects apply**. A miss therefore also stops the debuffs, statuses and everything else of that ability on that enemy, and a composite effect or an ability with three damage effects does not roll three times: all its parts hit or all miss.
:::

#### When the roll is made

1. An ability is used and one of its effects reaches an enemy: the damage effect of a sword swing, the first tick of a poison, the explosion of a projectile when it lands.
2. If the ability **can miss** (see [Hit rule](#per-ability-hit-rule-and-attack-style)), the game rolls once for that ability use and that enemy, and remembers the result.
3. Every other effect of the same use that reaches the same enemy uses the **same result**. A fireball that hits five enemies makes five rolls, one for each.
4. On a **hit** or **glancing hit** the effects apply, and then the normal damage calculation runs: the target can still **dodge**, **parry** or **block**. Those are not misses; they are rolled by the target's stats in [Damage Taken](/basic/entity-stats/calculations).
5. On a **miss** the effects are rejected with the reason "Missed" and the attacker sees "Miss".

What is **never** rolled:

| Case | Why |
|---|---|
| Effects an ability applies to **itself** (a buff on the caster, a self heal) | Nothing is aimed at an enemy |
| Anything aimed at a **friend** (a heal on an ally, a shield on the tank) | You do not miss your friends |
| Effects aimed at **the user** | The user is not an enemy of itself |
| The **parts of a composite effect** | The composite only passes its parts on. The parts share one roll |
| The **ticks** of a damage-over-time effect | The effect rolls once when it is applied. A poison that hit does not miss on tick 3 |
| Abilities set to **Always hits**, or with the hit system off and **Hit rule** on *Project default* | They never miss |

Neutral entities (wolves that have not noticed you) can be missed. Hostile ones can. Friendly ones cannot.

#### Settings

Every field has a tooltip in the editor. These are the fields of **Hit Rules**:

| Field | What it does | Default |
|---|---|---|
| **Use hit system** | The master switch. Off: no attack ever misses, whatever the abilities and stats say, except abilities whose *Hit rule* is *Can miss*. On: every ability rolls to hit, except those that *Always hit* | off |
| **Melee range** | An ability whose **Attack style** is *Automatic* counts as melee when its range is at most this many metres, and as ranged beyond. An ability with no range limit counts as melee | `5` |
| **Base melee hit chance** | The chance to hit (percent) of a melee attack before stats, the level gap and the limits. `95` is a flat 5 % chance to miss | `95` |
| **Base ranged hit chance** | The same for ranged attacks. Give ranged attacks a different base if you want ranged and melee to feel different | `95` |
| **Minimum hit chance** | The chance never goes below this, so a target is never untouchable. `0` means an enemy can be impossible to hit | `5` |
| **Maximum hit chance** | The chance never goes above this. `95` means even the best attacker misses one time in twenty. `100` means no limit | `100` |
| **Level gap mode** | How the levels of attacker and target change the chance: [not at all, points per level, a table, or a formula](#level-gap). Its own fields appear under it | None |
| **Glancing hits enabled** | A failed roll can still land, weaker. See [Glancing hits](#glancing-hits) | off |
| **Glancing chance** | The share of the failed rolls that become glancing hits instead of misses | `30` |
| **Glancing reduction** | How much weaker a glancing hit is: the percent taken off its damage and healing | `40` |
| **Glancing other effects apply** | Do the statuses, buffs and debuffs of a glancing hit still apply? Off: only damage and healing happen | on |

If **Minimum hit chance** is higher than **Maximum**, the lower of the two is used as the minimum.

#### Melee and ranged

Hit chance has **two bases** because games disagree on whether bows should miss as often as swords. An ability counts as one or the other by its **Attack style**:

| Attack style | Counts as |
|---|---|
| **Automatic** (default) | Melee if its range is at most **Melee range**, otherwise ranged |
| **Melee** | Melee, whatever its range (a spear, a whip) |
| **Ranged** | Ranged, whatever its range (a thrown dagger, a spell with a short range) |

The style also decides which [accuracy and evasion](#accuracy-and-evasion) effects count: you can build "+5 % accuracy with ranged attacks" with the *Melee or ranged* [hit filter](/basic/entity-stats/stats#hit-filters). There is no distance between the two entities involved: it is melee or ranged because the ability is, not because of how far apart they happen to stand.

#### Level gap

The level gap is **a decision of your game**, so the toolkit does not force one. The *gap* is **the level of the target minus the level of the attacker**: `+3` is an enemy three levels above you, `-2` is an enemy two levels below.

| Mode | What it does | Its fields |
|---|---|---|
| **None** | The levels never matter | none |
| **Points per level** | Every level the target is above the attacker takes points off the chance. Optionally, every level it is below adds points back | **Penalty per level**, **Bonus per level**, **Limit** (the most the gap can change the chance, up or down; `0` = no limit) |
| **Table** | You write the number for each gap yourself | A list of rows: *a gap of N levels or more changes the chance by X points* |
| **Formula** | Your own calculation. The formula gets the gap and returns the change | A [formula](/basic/shared-systems/formulas) |

**Points per level**, with a penalty of `2`, a bonus of `0` and no limit, against a base chance of 95:

| Target level against yours | Gap | Change | Chance to hit |
|---|---|---|---|
| Equal | `0` | `0` | 95 % |
| 3 levels above | `+3` | `-6` | 89 % |
| 5 levels above | `+5` | `-10` | 85 % |
| 10 levels above | `+10` | `-20` | 75 % |
| 5 levels below | `-5` | `0` | 95 % |

With a **Bonus per level** of `1` the last row becomes `+5` (100 %), and a **Limit** of `6` stops the table at `-6` and `+6`.

**Table.** A gap uses the row with the **largest gap that is not above it**. A gap below every row changes nothing. A table like the one World of Warcraft used to have looks like this:

| Row: gap of | Change | So a gap of ... uses it |
|---|---|---|
| `-5` | `+10` | `-5` to `-1` |
| `0` | `0` | `0` to `2` |
| `3` | `-5` | `3` and `4` |
| `5` | `-20` | `5` and up |
| (no row) | `0` | `-6` and lower |

**Formula.** The formula receives the gap as its number and returns the change in points. A *Linear* formula of `-3` per point is "3 points off per level above, 3 points *on* per level below". Formulas can use [level scaling](/basic/shared-systems/formulas), so you can make a gap hurt more at high levels, or add [diminishing returns](/basic/shared-systems/formulas) so the first levels count most.

The editor shows a small table of the change for a few gaps, so you can check your choice without playing.

#### Accuracy and evasion

Stats change the chance with the **Hit Chance Effect**, one of the [stat effects](/basic/entity-stats/stats#the-effect-types):

| Field | What it does |
|---|---|
| **Side** | *Accuracy* raises the chance of the attacks of whoever has the stat. *Evasion* lowers the chance of the attacks aimed at whoever has the stat |
| **Value** | A number of **points of hit chance**. A [Linear formula](/basic/shared-systems/formulas) of `0.1` per point of the stat is a tenth of a percent per point |
| **Hit filters** | Limit it to melee or ranged attacks, a school, some abilities, direct hits or ticks |
| **Conditions** | Like any stat effect: "only against Undead", "only while in combat" |

An *Accuracy* of 20 points on the attacker and an *Evasion* of 10 points on the target, against a base of 50, give `50 + 20 - 10 = 60 %`. The two sides read their own stats: the target's accuracy and the attacker's evasion do not count in this attack.

The demo has two: **Defense** carries an Evasion effect, and the proficiency **One-Handed Weapons** carries an Accuracy effect that only works while a one-handed weapon is held. Recipes are on [Stat recipes](/basic/entity-stats/stat-recipes#hit-chance).

#### Glancing hits

A game with misses sometimes finds them frustrating: a whole ability, wasted. A **glancing hit** is the softer failure. When the roll fails, a share of the failures become glancing hits: the attack lands, but weaker.

```text
roll to hit ..... succeeds ........................... Hit
       |
       fails ... roll again against Glancing chance
                  succeeds ........................... Glancing hit
                  fails .............................. Miss
```

With a base chance of 80 %, a glancing chance of 30 % and a reduction of 40 %:

| Result | How often | What happens |
|---|---|---|
| Hit | 80 % | Full damage and healing |
| Glancing hit | `20 % x 30 %` = 6 % | 60 % of the damage and 60 % of the healing |
| Miss | `20 % x 70 %` = 14 % | Nothing |

- The glancing chance applies **only to failed rolls**, so turning it up never lowers the chance to hit.
- **Glancing reduction** `100` makes a glancing hit do nothing (but its other effects still apply, if you let them). `0` makes it the same as a hit.
- **Glancing other effects apply** decides what happens to the rest of the ability. On (default): a glancing hit still stuns, slows or poisons in full, and only the damage and the healing are weaker. Off: **only damage and healing happen**, so the debuffs are lost.
- Dodges, blocks and critical strikes still work on a glancing hit.
- The floating text reads "42 (glancing)" and the combat log says the attack "glancingly hit".

#### Per ability: Hit rule and Attack style

The **Abilities** editor has a **Hit roll** box with two fields:

| Field | Options |
|---|---|
| **Hit rule** | **Project default**: it can miss when *Use hit system* is on. **Always hits**: it never misses, whatever the project says (a spell that cannot be dodged, a trap, an execution). **Can miss**: it rolls even when *Use hit system* is off |
| **Attack style** | **Automatic**, **Melee**, **Ranged**, as [above](#melee-and-ranged) |

| Hit rule | Hit system **off** | Hit system **on** |
|---|---|---|
| Project default | never misses | can miss |
| Always hits | never misses | never misses |
| Can miss | can miss | can miss |

The editor tells you what the ability does with the current settings. *Can miss* with the hit system off is how you make a game where only a few abilities (a sniper shot, a dangerous gamble) can miss.

The same hit rule is what ends the old question "should the hit chance be a calculation?": there is no hit chance in the damage calculation any more, the ability decides.

#### What the player sees

| Result | Floating text | Combat log |
|---|---|---|
| Hit | the damage | "X hit Y for N" |
| Glancing hit | "N (glancing)" | "X glancingly hit Y for N" |
| Miss | "Miss" | "X's Ability missed Y" |

#### Recipes

| You want | Settings |
|---|---|
| **No misses at all** | **Use hit system** off, and no ability with *Can miss* |
| **A flat 5 % miss chance for everyone** | **Use hit system** on, base chances `95`, **Minimum** `5`, no stats |
| **Spells that never miss, weapons that can** | **Use hit system** on, and **Hit rule** *Always hits* on the spells |
| **Only a sniper shot can miss** | **Use hit system** off, **Hit rule** *Can miss* on that ability, base ranged chance as you like |
| **Bows miss more than swords** | **Base melee** `95`, **Base ranged** `85` |
| **Higher level enemies are harder to hit, old-school** | **Level gap mode** *Table* or *Points per level* with a penalty |
| **Gear and skills raise your chance to hit** | Build an **Accuracy** [stat](/basic/entity-stats/stat-recipes#hit-chance). A [proficiency](/basic/entity-stats/proficiencies) can carry one |
| **Enemies you can never be sure to hit** | **Maximum hit chance** `95` |
| **A target nobody can hit** | **Minimum** `0` and an Evasion above the base chance |
| **Misses that sting less** | **Glancing hits** on |

#### For programmers

The chance is one function, so a tooltip or an AI can ask for it without rolling:

```gdscript
var chance: float = HitRules.get_chance(attacker, target, ranged)        # 0 to 100
var outcome: HitRules.Outcome = HitRules.roll(attacker, target, ranged)   # HIT, GLANCING or MISS
```

An ability instance answers `can_miss()` and `is_ranged_attack()`. See [Advanced > Entity Stats > the hit and heal pipeline](/advanced/entity-stats/pipeline).

## See also

- [Stat recipes](/basic/entity-stats/stat-recipes), [Calculations](/basic/entity-stats/calculations)
- [Game Settings](/basic/game-settings/)

# Leveling and experience

Part of the [Gameplay Config](/basic/game-settings/gameplay-config) (Party Management). How characters level, what a kill gives, and how the level of an NPC is worked out.

## Leveling

| Field | What it does | Default |
|---|---|---|
| **Max level** | The highest level a player can reach. Entities, including NPCs, are never above it | `50` |
| **Experience per level** | The experience each level needs, as a table you edit. Levels you leave out use the default: `100 x (level - 1)` experience to go from the level before | table empty |

## Kill experience

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
| **Experience multiplier** of each entity type of the NPC | The [entity type](/basic/types-and-groups/entity-types): an Elite gives 3 times as much |

**A worth on the NPC itself.** In *Table* and *Formula* mode, an NPC whose **Experience worth** is above 0 gives that instead of the amount of its level (the multipliers still apply). Use it for a quest boss whose [reward](/basic/shared-systems/rewards) you want to set by hand.

Examples:

| Level of the NPC | Mode | Calculation | Experience |
|---|---|---|---|
| 12 | Formula, Linear `10` | `10 x 12` | 120 |
| 12, an Elite (x3), a rare placed version (x2) | Formula, Linear `10` | `120 x 3 x 2` | 720 |
| 12 | Table with rows 1: 10, 10: 100, 20: 400 | the row for level 10 | 100 |
| 12, worth 500 on the NPC | Table | `500` (its own worth) | 500 |

### Experience falloff

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

## NPC level scaling

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

### Ranks: elite, rare, boss

Some NPCs should not follow the rules: a boss that is always dangerous, a rare that is always worth a trip. Those are **ranks**, and a rank is an [Entity Type](/basic/types-and-groups/entity-types): make the types *Elite*, *Rare* and *Boss* and give them to the NPCs. Each type has its own scaling choice:

| Level scaling of the type | What it does |
|---|---|
| **Follow game** | Like every NPC |
| **Never scales** | The NPC keeps the level of its definition, whatever the player's level. A level 60 dragon in a starting zone |
| **Fixed offset** | The NPC is always a number of levels above (or, negative, under) the **reference**: `3` is a boss that is always 3 levels above you |

If an NPC has several types, *Fixed offset* wins over *Never scales*, and the first Fixed offset type in its list is used.

**A rank only changes levels when scaling is on.** With **NPC level scaling** Off, a rank is just a label: the NPC keeps the level of its definition, and the rank is there for your interface (a gold border on elites) and for [conditions](/basic/shared-systems/conditions) ("+20 % damage against Bosses"). The type's **experience multiplier** works either way.

### Recipes

| You want | Settings |
|---|---|
| **A hand-made world, no scaling** | Scaling Off. Set the level of every NPC yourself. Make the types Elite, Boss and Rare for the interface only |
| **An open world where nothing is ever trivial or hopeless** | Scale **Both**, within `3`, reference *Party average*. Bosses: *Fixed offset* `+3` |
| **Zones with a level range, but low level enemies catch up** | Scale **Up** only, within `0`: nothing is below the player |
| **Players who out-level a zone get an easy time, but not a deadly one** | Scale **Down** only: strong NPCs are lowered to near the player, weak ones keep their level |
| **Boss rush** | Everything *Fixed offset* `+5` |
| **A dragon in the starting zone** | *Never scales* on its type, or scaling Off |

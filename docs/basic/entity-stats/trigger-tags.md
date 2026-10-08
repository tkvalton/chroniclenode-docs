# Trigger Tags

<Shot name="trigger-tags-editor" caption="The Trigger Tags editor (Entity Stats > Trigger Tags)." />

A **trigger tag** names something that *happened* during a hit or a heal: a dodge, a block, a critical strike, a multistrike, an armor penetration. A stat rolls the tag (a [Calculation Trigger Effect](/basic/entity-stats/stats#the-effect-types)), the tag is kept for the rest of the calculation, and anything that cares can react to it: a modifier ("block lowers damage by 30 %"), a [proc](/basic/abilities-and-effects/effect-types) ("when you crit, heal"), or an effect that forces it ("this attack always crits").

The toolkit ships five: **Dodge**, **Block**, **Critical Strike**, **Multistrike** and **Armor Penetration**. A miss is not a trigger tag: it is the result of the [hit roll](/basic/game-settings/gameplay-config#hit-rules) of the ability.

## Tag

| Field | What it does |
|---|---|
| **Tag** | The word modifiers and procs match on. Empty = the display name in lower case |
| **Kind** | What the tag does by itself. **None**: it only marks the hit. **Avoid**: the hit is avoided completely: a dodge or parry in Damage Taken. **Mitigate**: the hit is reduced by modifiers that require the tag (block). **Boost**: the hit is increased (critical strike) |

## Magnitude

| Field | What it does |
|---|---|
| **Base magnitude** | The number the tag carries when it fires. For a critical strike it is the size of the bonus: `100` = +100 %. For a multistrike it is the number of extra hits. For an armor penetration it is the share of armor ignored. Rules and stats add to it |

## Applies to the hit

| Field | What it does |
|---|---|
| **Application** | What the tag does to the number by itself, with its magnitude. **None**: nothing (a modifier elsewhere reads the tag). **Percent Increase**: raise by the magnitude in percent. **Percent Decrease**, **Add** and **Minus** work the same way |
| **Application priority** | Where in the [order of the calculation](/basic/entity-stats/calculations#priority) it happens. `25` puts a percentage after flat bonuses (priority `100`) |

A critical strike is *Percent Increase* with magnitude `100`: the tag alone does the work. This also works on an entity that has no crit stat and was only *forced* to crit by a rule.

## Presentation

| Field | What it does |
|---|---|
| **Animation** | The animation played when it fires: Hit, Dodge or Block |
| **Message** | Floating text ("CRIT!") |
| **Log phrase** | The combat log line. Placeholders: `{attacker}` `{target}` `{ability}` `{damage}`. Empty = the default for the kind |

## Forcing

| Field | What it does |
|---|---|
| **Calculations** | The [calculations](/basic/entity-stats/calculations) the tag fires in when a rule forces it. Empty = by kind: avoid and mitigate in Damage Taken, boost and none in Damage Done and Healing Done |

## How tags are used

| You want | How |
|---|---|
| **Critical strikes** | A stat *Critical Strike Rating* with a Calculation Trigger Effect for the tag *Critical Strike*. The tag adds +100 % |
| **Expertise, defense** | A **Trigger Rule Effect** that changes the rolls of the opponent. Choose *every tag of kind* Avoid or Boost, or one tag. See [Stat recipes](/basic/entity-stats/stat-recipes) |
| **Crit damage as its own stat** | A stat with a **Trigger Rule Effect** on the tag, *Magnitude bonus* |
| **Luck** | A Trigger Rule Effect with no tag and *Chance bonus*: it adds to every roll |
| **An attack that always crits** | A trigger rule on the effect: **Always** *Critical Strike* |
| **A hit that cannot be dodged** | A rule on the effect: **Never** *Dodge* |
| **Damage reduced when blocked** | A modifier in Damage Taken that requires the tag *block* |
| **Heal when you crit** | A [proc effect](/basic/abilities-and-effects/effect-types) filtered on the tag *Critical Strike* |

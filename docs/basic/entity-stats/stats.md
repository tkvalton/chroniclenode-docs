# Stats

<Shot name="stats-editor" caption="The Stats editor (Entity Stats > Stats)." />

A **stat** is a number every entity has: Strength, Armor, Critical Strike Rating, Movement Speed. A stat is a resource in the [database](/basic/database): the list on the left shows every stat, the fields on the right are the one you selected. What makes a stat interesting is its **stat effects**, the things it does with its points.

## Basic properties

| Field | What it does |
|---|---|
| **Display name** | The name shown on the character sheet and in tooltips |
| **Description** | What the stat does, for players and developers |
| **Color** | The color that stands for the stat in the interface |
| **Icon** | The picture shown next to the stat |

## Value settings

| Field | What it does | Default |
|---|---|---|
| **Value type** | **Integer** (whole numbers) or **Float** (decimals) | Float |
| **Default value** | The base value of the stat when an entity is created | `0` |
| **Min value** | The value cannot go below this | `0` |
| **Max value** | The value cannot go above this. `-1` means no limit | `-1` |
| **Decimal places** | How many decimals are shown (0 to 3), for Float only. The value itself keeps more | `1` |
| **Display suffix** | Text after the value: `%`, `sec`, `pts` | none |
| **Allow negative values** | Lets the value go below zero, for debuffs and penalties | off |

## Stat groups

Tick the [stat groups](/basic/tags-and-groups/stat-groups) the stat is in (Primary, Offensive, Defensive ...). A group sections the character sheet and tooltips, and one effect (a **Stat Modifier**) can change a whole group at once. A stat in several groups is listed once, under its first group. A stat in no group is listed last, under "Other".

## Level growth

A stat can grow as the entity levels up. **Growth formula** turns the *levels gained* (level - 1) into a value, so level 1 has none: a Linear formula of `2` is "+2 per level". Add **Diminishing returns** to make growth slow down (after level 40, say), and **Max growth** to cap the total. Without a formula the stat does not grow. See [Formulas](/basic/shared-systems/formulas).

The value of the stat is `(base + growth + bonus) x multiplier`, so growth comes on top of the base. A single class or NPC can replace the growth of a stat for itself (a warrior's Strength grows faster than a mage's) with *level growth overrides* in its stats data.

## Stat effects

The list at the bottom holds the stat's **stat effects**. Click **Add Stat Effect** and choose a type. Each effect has a switch to turn it off without deleting it, a collapse button, and a delete button.

Most effects share these parts:

| Part | What it does |
|---|---|
| **Active Trigger** | When the effect works: **Permanent**, only **In combat**, or only **Out of combat** |
| **Conditions** | Questions that must all be true for the effect to apply: "the opponent has the tag Undead", "my health is below 30 %". See [Conditions](/basic/shared-systems/conditions). The target kind **Argument Entity** is the owner of the stat and **Opponent** is the other side of the hit being calculated |
| **Value** | How the points of the stat turn into the value of the effect: the **Formula** (always), optional **Diminishing Returns**, and a **Max Result** that caps the final value (0 = none). A graph and a table preview the curve. See [Formulas](/basic/shared-systems/formulas) |

### The effect types

| Type | What it does | Main fields |
|---|---|---|
| [**Multiplier Effect**](/advanced/entity-stats/stat-effects/multiplier-stat-effect) | Changes another stat from the points of this one: "+2 Attack Power per point of Strength" | **Target Stat**, **Calculation Type** |
| [**Pool Modifier Effect**](/advanced/entity-stats/stat-effects/pool-modifier-stat-effect) | Changes a pool: maximum health per point of Stamina, the regeneration rate | **Target Pool**, **Pool Property** (max value, generation rate, generation value), **Calculation Type** |
| [**Ability Modifier Effect**](/advanced/entity-stats/stat-effects/ability-modifier-stat-effect) | Changes abilities: shorter [cooldowns](/basic/keywords#cooldown), cheaper costs, more resource gained | **Filter Type** (all abilities, specific ones, a school, all but some), **Abilities**, **School**, **Ability Property** (cooldown, cost, gain), **Calculation Type** |
| [**Calculation Modifier Effect**](/advanced/entity-stats/stat-effects/calculation-modifier-stat-effect) | Changes the damage or healing number in a [calculation](/basic/entity-stats/calculations): armor, attack power, a damage bonus | **Target Calculations**, **Calculation Type**, **Value Source**, **Required Trigger Tag**, **Damage Type**, **Points Ignored By Tag** |
| [**Calculation Trigger Effect**](/advanced/entity-stats/stat-effects/calculation-trigger-stat-effect) | Rolls a chance each time a calculation runs and, when it hits, fires a **trigger tag**: a dodge, a block, a critical strike | **Target Calculations**, **Tag Definition**, **Trigger Kind**, **Special Animation**, **Special Message**, **Log Phrase**, **Damage Type** |
| [**Pool Restoration Effect**](/advanced/entity-stats/stat-effects/pool-restoration-stat-effect) | Restores a pool when something happens: life steal, mana on hit, health on a kill | **Trigger Type** (damage dealt, damage taken, kill), **Target Pool**, **Scaling Type** (flat, percent of damage, percent of the pool maximum), **Damage Basis**, **Damage Type** |
| [**Reactive Damage Effect**](/advanced/entity-stats/stat-effects/reactive-damage-stat-effect) | Damages the attacker back: damage reflection, retaliation | **Trigger Type** (damage taken, block, being hit), **Damage Scaling**, **Percent of Damage**, **Damage Basis**, **Damage Type**, **Can Be Avoided** |
| [**Trigger Rule Effect**](/advanced/entity-stats/stat-effects/trigger-rule-stat-effect) | Changes a trigger tag from the points of the stat: more critical strike damage, a chance bonus for every roll ("luck"), always or never | **Tag** (empty = every tag), **What It Does**: chance bonus, magnitude bonus, magnitude more (a percentage), always, never |
| [**Gain Modifier Effect**](/advanced/entity-stats/stat-effects/gain-modifier-stat-effect) | Changes what the entity gains: experience, currency, loot quantity, loot rarity, [threat](/basic/keywords#threat), resources, status duration | **Channel**, **Calculation Type** |

#### Calculation types

Several effects choose how their value changes a number:

| Calculation type | What it does |
|---|---|
| **Add**, **Minus** | Adds or subtracts the value. Minus never goes below 0 |
| **Multiply** | Multiplies by the value |
| **Percentage Increase**, **Percentage Decrease** | Raises or lowers the number by a percentage |
| **Set Value** | Replaces the number |
| **Percentage Of Max**, **Percentage Of Base** | The value is a percentage of the maximum or of the base value |

## Examples

| You want | Stat effects |
|---|---|
| **Armor** that stops a share of physical damage and never reaches 100 % | A Calculation Modifier Effect on **Damage Taken**, Percentage Decrease, [Damage Type](/basic/tags-and-groups/damage-types) *Physical*, with a **Hyperbolic** formula (max `100`, K `100`) |
| **Strength** that adds attack power | A Multiplier Effect with Target Stat *Attack Power*, Add, **Linear** `2` per point |
| **Stamina** that adds health | A Pool Modifier Effect on *Health*, property max value, Add, **Linear** `1` per point |
| **Dodge** | A Calculation Trigger Effect on **Damage Taken** with Trigger Kind **Avoid**, a **Hyperbolic** formula for the chance (max `75`, K `300`) |
| **Critical Strike Rating** | A Calculation Trigger Effect with a *Critical Strike* tag, a **Linear** chance of `0.05` per point behind a **Soft cap** of `400` points |
| **Life steal** | A Pool Restoration Effect on *Health*, trigger **damage dealt**, scaling **percent of damage** |
| **Damage against Undead** | A Calculation Modifier Effect with the Condition *opponent has the [entity tag](/basic/tags-and-groups/entity-tags) Undead* |

## See also

- [Pool](/basic/entity-stats/pool), [Calculations](/basic/entity-stats/calculations)
- [Trigger Tags](/basic/tags-and-groups/trigger-tags), [Stat Groups](/basic/tags-and-groups/stat-groups)
- [Stat effects: how they work](/advanced/entity-stats/stat-effects) (Advanced)

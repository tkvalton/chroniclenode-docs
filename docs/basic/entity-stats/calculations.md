# Calculations

<Shot name="calculations-editor" caption="The Calculations editor (Entity Stats > Calculations)." />

A **calculation** is one of the four moments where a damage or healing number is worked out. Every [stat effect](/basic/entity-stats/stats#stat-effects) that changes such a number belongs to one of them, and the **Calculations** editor is where you see them in the order they run and change that order.

## The four calculations

| Calculation | Whose stats | What goes in |
|---|---|---|
| **Damage Done** | The attacker | The damage of the ability or weapon, with the attacker's stats: attack power, critical strike |
| **Damage Taken** | The target | What is left after the damage done: armor, block, dodge, damage-taken bonuses |
| **Healing Done** | The healer | The healing of the ability, with the healer's stats: healing power, critical heals |
| **Healing Taken** | The target | The heal as the target receives it: healing received bonuses, reductions |

Every damaging effect runs *Damage Done* for the attacker and then *Damage Taken* for the target. Every healing effect runs *Healing Done* and *Healing Taken*. Only the stats an entity has points in take part.

## What happens in a calculation

Each calculation has two phases:

1. **Triggers.** Stats with a [Calculation Trigger Effect](/basic/entity-stats/stats#the-effect-types) roll their chance. **Avoid** triggers go first: in **Damage Taken** an avoid trigger is a dodge or a parry. When one fires, the number becomes 0 and the calculation ends. Other triggers (critical strike, block) set a [trigger tag](/basic/entity-stats/trigger-tags) and carry on.
2. **Modifiers.** Every Calculation Modifier Effect changes the number, one at a time, in the order of the list below. After the modifiers, the **damage done** and **healing done** calculations apply the [Ability Boost](/basic/abilities-and-effects/effect-amount#boosting-some-abilities) effects of the doer, as steps of their own. A modifier that **requires a trigger tag** only runs when that tag fired: "block lowers the damage by 30 %" needs the *block* tag.

A **miss** is not part of a calculation. Whether an attack reaches its target is decided before, by the [hit roll](/basic/game-settings/gameplay-config#hit-rules) of the ability; the calculations only run for an attack that landed.

A trigger tag can also change the number by itself: a *critical strike* adds +100 % when it fires, without any modifier.

The number cannot go below 0.

## Rules from the other side

The chance of a trigger is changed by [trigger rules](/basic/entity-stats/trigger-tags). Besides the rules of the entity itself, a calculation also takes the rules of its **opponent**, when the stat says so:

| In the calculation of | The rules that apply | Example |
|---|---|---|
| The attacker (Damage Done, Healing Done) | Its own, and those of the target that change the rolls of *whoever acts on it* | The target's Defense lowers your crit chance |
| The target (Damage Taken, Healing Taken) | Its own, and those of the attacker that change the rolls of *whoever defends against it* | Your Expertise lowers the target's chance to dodge |

## The editor

The editor has a tab for each calculation. A tab lists the modifiers in the order they will run:

| Part | What it does |
|---|---|
| **Tab** | Damage Done, Damage Taken, Healing Done, Healing Taken |
| **List** | Every modifier that affects this calculation: the stat, the calculation type (Addition, Subtraction, Multiplication, Percentage Increase, Percentage Decrease, Set Value), its priority and its place in the order. **Double-click** an entry to open its stat |
| **Info panel** | Click an entry to see its **Execution Order** and a priority field. **Apply Priority** saves the new priority on the effect |
| **Refresh All** | Reloads the lists from the stats |
| **Priority Guide** | A short explanation of the priority ranges |

A modifier that targets no calculation in particular affects **all four**.

## Priority

**Higher priority runs first.** The order matters: 10 flat damage and +50 % give different results depending on which comes first.

| Priority | Use |
|---|---|
| `1000+` | Critical: must apply first |
| `500` to `999` | Very high: early calculations |
| `100` to `499` | High: flat additions go here |
| `1` to `99` | Normal: multiplications and percentages |
| `0` | Default: the order is not important |

The usual rules: **flat additions before multiplications**, leave gaps (10, 20, 30) so you can add one in between later. A typical setup is:

1. *Attack Power* (Addition), priority `100`
2. *Damage Done Increase* (Percentage Increase), priority `25`
3. *Block* (Percentage Decrease, only when the block tag fired), priority `25`

Effects with the **same priority** are fine. They run by stat id, then in the order they are listed on the stat. It only matters when a flat and a percentage effect have the same priority.

## Examples

| Goal | How |
|---|---|
| **Flat armor** | Damage Taken, Subtraction, priority `100`. Armor removes points before any percentages run |
| **Percentage armor** | Damage Taken, Percentage Decrease, [Damage Type](/basic/types-and-groups/damage-types) *Physical*, a **Hyperbolic** [formula](/basic/shared-systems/formulas) so it never reaches 100 % |
| **Critical hits** | A Calculation Trigger Effect with the tag *Critical Strike* (kind **Boost**) in Damage Done. The tag adds its magnitude |
| **Dodge** | A Calculation Trigger Effect with kind **Avoid** in Damage Taken. A dodged hit does 0 |
| **Block** | A trigger with kind **Mitigate** and a modifier in Damage Taken that requires the *block* tag |
| **Armor penetration** | A Calculation Modifier Effect where **Points Ignored By Tag** is the penetration tag: that share of the target's armor is not counted |

## See also

- [Stats](/basic/entity-stats/stats), [Trigger Tags](/basic/entity-stats/trigger-tags)
- [The hit and heal pipeline](/advanced/entity-stats/pipeline) (Advanced)

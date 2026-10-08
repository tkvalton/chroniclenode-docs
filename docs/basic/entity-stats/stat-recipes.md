# Stat recipes

Most of the stats an RPG has are a few [stat effects](/basic/entity-stats/stats#stat-effects) on a stat. This page shows how to build the usual ones. The demo has several of them (Defense, Expertise, Resilience, Bonus Damage, Healing Power and the proficiencies, which carry the accuracy of weapon skill) so you can open them in the Stats editor.

## What a stat can change

| Target | Effect type | Examples |
|---|---|---|
| Another stat | Multiplier | Strength gives Attack Power |
| A pool | Pool Modifier | Stamina gives health; regeneration |
| An ability | Ability Modifier | [Cooldown](/basic/keywords#cooldown) reduction, cost reduction, resource gain, **cast time**, **range** |
| A damage or healing number | Calculation Modifier | Armor, attack power, bonus damage, healing power, resilience to damage over time |
| A chance of something happening | Calculation Trigger | Critical strike, dodge, block |
| The chance to hit | Hit Chance | **Accuracy**, **evasion** |
| The rules of a chance | Trigger Rule | Crit damage, luck, **expertise**, **defense** |
| A pool, after a hit | Pool Restoration | Life steal, mana on hit |
| The attacker, after a hit | Reactive Damage | Damage reflection |
| What the entity is given | Gain Modifier | Experience, gold, loot, [threat](/basic/keywords#threat), resource, tenacity, **effect duration**, **shield strength**, **drain resistance** |

Every effect has [conditions](/basic/shared-systems/conditions) (against Undead, below 30 % health), an [active trigger](/basic/entity-stats/stats#stat-effects) (in combat only) and a [formula](/basic/shared-systems/formulas). The effects that work on a hit also have **Hit filters**: the schools of the ability, the abilities and effects it comes from, melee or ranged attacks, and direct hits or ticks over time.

## Hit chance

Whether attacks can miss at all is a rule of your game: **Gameplay Config > Combat > [Hit Rules](/basic/game-settings/gameplay-config#hit-rules)** has the switch, the base chances for melee and ranged attacks, the limits, the level gap and glancing hits. This page is about the **stats** that change that chance. A game with no misses switches the system off and builds none of them.

The chance to hit is the base chance, **plus the accuracy of the attacker, minus the evasion of the target**, plus the level gap, kept between the minimum and the maximum. Accuracy and evasion are one stat effect, the **Hit Chance Effect**, with a **Side**:

| Stat | Effect |
|---|---|
| **Accuracy** | A **Hit Chance Effect**, Side *Accuracy*, Linear `0.1` per point: every point is a tenth of a percent more chance to hit |
| **Evasion** | A **Hit Chance Effect**, Side *Evasion*, Linear `0.1` per point: every point is a tenth of a percent less chance for attackers to hit you |
| **Defense** (the demo) | Dodge and block chances, an *Evasion* effect and a lower chance to be critically hit, all in one stat |

The value is a number of **points of hit chance**, so the formulas are the same as everywhere else: a Linear formula, a soft cap with [diminishing returns](/basic/shared-systems/formulas), a maximum.

| Variation | How |
|---|---|
| **Different accuracy for melee and ranged** | Two stats (or two effects on one stat), each with the **Hit filters** field *Melee or ranged*. *Melee accuracy*: only melee attacks. *Ranged accuracy*: only ranged attacks |
| **Spell hit rating** | An Accuracy effect with **Hit filters: Only these schools** set to your spell schools |
| **Accuracy against bosses only** | An Accuracy effect with a [condition](/basic/shared-systems/conditions) on the opponent |
| **Weapon skill raises the chance to hit** | An Accuracy effect on a [proficiency](/basic/entity-stats/proficiencies). The level of the skill is its points, and it only works while the weapon is held |
| **The levels decide, as in World of Warcraft** | Not a stat: the **Level gap mode** of the Hit Rules |
| **A flat 5 % miss for everyone** | Not a stat: the base chances are `95` |
| **An attack that never misses** | **Hit rule: Always hits** on the [ability](/basic/abilities-and-effects/abilities#hit-roll) |

An accuracy above what the chance needs does nothing: the chance never goes above the **maximum hit chance** of the Hit Rules.

## A mastery

A mastery makes some abilities stronger, and gets better with a stat. Give a stat a **Calculation Modifier Effect** on Damage Done (or Healing Done), percentage increase, and choose the abilities in **Only these abilities** (or the effects in **Only these effects**) with the **Add...** button, which opens the catalog. For a flat talent that does not grow with a stat, use the [Ability Boost](/basic/abilities-and-effects/effect-amount#boosting-some-abilities) effect in a passive ability.

## Expertise

Expertise lowers the chance of the target to *avoid* your attacks (dodge, parry, block).

A **Trigger Rule Effect** on the stat:

| Field | Value |
|---|---|
| Tag | none |
| Tags of kind | **Avoid** (or pick one **Tag**, such as *Dodge*, and nothing else is changed) |
| Works in | **Damage Taken** (so your own miss chance is left alone) |
| Changes the rolls of | **Whoever defends against the owner** |
| What it does | **Chance bonus (%)** |
| Formula | Linear, `-0.25` per point |

Each point takes a quarter of a percent off every avoid chance of whoever you hit. Choose the tag to decide what expertise ignores: *Dodge* only, or all avoidance. To make an attack ignore a share of the target's **stat points** instead, use the *Points ignored by tag* of a [Calculation Modifier Effect](/basic/entity-stats/stats#the-effect-types) (armor penetration).

## Defense

Defense makes you harder to hit and to hurt: more dodge and block, a lower chance for attackers to hit you, and a lower chance to be critically hit.

| Effect | Settings |
|---|---|
| A **Calculation Trigger Effect** | Target Calculations *Damage Taken*, Tag *Dodge*, Linear `0.1` per point |
| A **Calculation Trigger Effect** | Target Calculations *Damage Taken*, Tag *Block*, Linear `0.1` per point |
| A **Hit Chance Effect** | Side *Evasion*, Linear `0.1`: attackers hit you less often (only when the [hit system](/basic/game-settings/gameplay-config#hit-rules) is on) |
| A **Trigger Rule Effect** | Tags of kind *Boost*, Changes the rolls of **Whoever acts on the owner**, Chance bonus, Linear `-0.1`: attackers crit you less |

A *Trigger Rule Effect* that changes the rolls of the **owner** is for your own rolls (your crit chance). One that changes the rolls of **whoever acts on the owner** is for the attackers and healers that target you. One that changes the rolls of **whoever defends against the owner** is for the targets of your attacks (expertise).

## Resilience

| Effect | Settings |
|---|---|
| A **Calculation Modifier Effect** | Target Calculations *Damage Taken*, **Hit filters: Direct or periodic = Only ticks over time**, Percentage decrease, Linear `0.2`: less damage from bleeds, burns and poisons |
| A **Trigger Rule Effect** | Tags of kind *Boost*, **Whoever acts on the owner**, Chance bonus, Linear `-0.1`: a lower chance to be critically hit |
| A **Gain Modifier Effect** | Channel **Resource drain taken**, Percentage decrease, Linear `0.3`: less mana burned |

## Bonus damage and healing power

| Stat | Effect |
|---|---|
| **Bonus Damage** | A Calculation Modifier Effect on *Damage Done*, **Add**, Linear `1`, priority `100` (flat additions come before percentages) |
| **Fire Damage** | The same, with the **Damage Type** *Fire*: only fire hits get the bonus |
| **Healing Power** | A Calculation Modifier Effect on *Healing Done*, **Add**, Linear `1` |

## Skills from proficiencies

A [proficiency](/basic/entity-stats/proficiencies) has stat effects of its own, and its level is their points: *One-Handed Weapons* has a Calculation Modifier Effect on Damage Done, percentage increase, `0.5` per level, and a Hit Chance Effect (accuracy) that raises the chance to hit. Add [diminishing returns](/basic/shared-systems/formulas) such as a soft cap to make the first levels count more. They only work while the gear of the skill is used.

## Other common stats

| Stat | Effect |
|---|---|
| **Armor** | Calculation Modifier on Damage Taken, Percentage decrease, [Damage Type](/basic/types-and-groups/damage-types) *Physical*, **Hyperbolic** formula |
| **Life steal** | Pool Restoration Effect on Health, trigger *damage dealt*, scaling *percent of damage* |
| **Cooldown reduction** | Ability Modifier Effect, property *Cooldown*, Percentage decrease |
| **Haste** | The core stats *Attack Speed* and *Cast Speed*, or an Ability Modifier Effect on *Cast time* |
| **Reach** | Ability Modifier Effect, property *Range*, Add |
| **Buff and debuff duration** | Gain Modifier Effect, channel *Effect duration* (the timed effects you apply) |
| **Tenacity** | Gain Modifier Effect, channel *Status duration* (percentage decrease; the stuns put on you) |
| **Shield power** | Gain Modifier Effect, channel *Shield strength* (the size of the shields you put up) |
| **Experience and gold find** | Gain Modifier Effect, channels *Experience* and *Currency* |
| **Magic find** | Gain Modifier Effect, channel *Loot rarity* |
| **Threat** | Gain Modifier Effect, channel *Threat* |

## What a stat cannot change yet

The cast time and range of an ability can be changed by a stat, but not its other numbers (radius, charges). Those are changed by [effects](/basic/abilities-and-effects/effect-types) while they last. A stat cannot add a new ability either: use a [reward](/basic/shared-systems/rewards) or a passive ability.

## See also

- [Stats](/basic/entity-stats/stats), [Calculations](/basic/entity-stats/calculations), [Trigger tags](/basic/entity-stats/trigger-tags)
- [Proficiencies](/basic/entity-stats/proficiencies)

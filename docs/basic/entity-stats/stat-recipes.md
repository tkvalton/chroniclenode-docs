# Stat recipes

Most of the stats an RPG has are a few [stat effects](/basic/entity-stats/stats#stat-effects) on a stat. This page shows how to build the usual ones. The demo has several of them (Hit Chance, Expertise, Defense, Resilience, Bonus Damage, Healing Power, Weapon Skill, Armor Skill) so you can open them in the Stats editor.

## What a stat can change

| Target | Effect type | Examples |
|---|---|---|
| Another stat | Multiplier | Strength gives Attack Power |
| A pool | Pool Modifier | Stamina gives health; regeneration |
| An ability | Ability Modifier | [Cooldown](/basic/keywords#cooldown) reduction, cost reduction, resource gain, **cast time**, **range** |
| A damage or healing number | Calculation Modifier | Armor, attack power, bonus damage, healing power, resilience to damage over time |
| A chance of something happening | Calculation Trigger | Critical strike, dodge, block, **hit chance** |
| The rules of a chance | Trigger Rule | Crit damage, luck, **expertise**, **defense** |
| A pool, after a hit | Pool Restoration | Life steal, mana on hit |
| The attacker, after a hit | Reactive Damage | Damage reflection |
| What the entity is given | Gain Modifier | Experience, gold, loot, [threat](/basic/keywords#threat), resource, tenacity, **effect duration**, **shield strength**, **drain resistance** |

Every effect has [conditions](/basic/shared-systems/conditions) (against Undead, below 30 % health), an [active trigger](/basic/entity-stats/stats#stat-effects) (in combat only) and a [formula](/basic/shared-systems/formulas). The effects that work on a hit also have **Hit filters**: the schools of the ability, a minimum and maximum distance between the two (melee and ranged), and direct hits or ticks over time.

## Hit chance

Whether attacks can miss at all is a rule of your game: **Gameplay Config > Combat > [Hit Rules](/basic/game-settings/gameplay-config#hit-rules)** has **Misses enabled**, a **Base miss chance** for everyone and a **Guaranteed hit chance**. A game with no misses switches it off and builds none of the stats below.

A hit chance is the chance that an attack *reaches* its target. Every hit that does not is a **miss**: the target is not touched and the attacker sees "Miss".

1. Make a [trigger tag](/basic/tags-and-groups/trigger-tags) *Miss* with kind **Avoid** and **Calculations** set to *Damage Done*. The demo has it.
2. Make a stat *Hit Chance* with the **default value 100**.
3. Add a **Calculation Trigger Effect**: *Target Calculations* = Damage Done, *Tag Definition* = Miss, **Inverted** on, a **Linear** formula of `1` per point.

**Inverted** means the value is the chance that the tag does *not* happen. 100 points is a 0 % chance to miss, 95 points is 5 %, 0 points is a certain miss. Points above 100 do nothing: the chance never goes below 0, and the rules of the target (Defense) are added after it.

| Variation | How |
|---|---|
| **Different chances for melee, ranged and spells** | One stat for each, with **Hit filters**. *Melee Hit*: maximum distance 4 m. *Ranged Hit*: minimum distance 4 m. *Spell Hit*: only the schools of your spells. Only the stat that matches the attack rolls |
| **The levels decide, as in World of Warcraft** | Give the formula **Level scaling** so the chance depends on the levels of the attacker and the target (see [Formulas](/basic/shared-systems/formulas)) |
| **A flat 5 % miss for everyone** | Do not use a stat: give every class a *Hit Chance* of 95 |
| **An attack that never misses** | A [trigger rule](/basic/tags-and-groups/trigger-tags) on the effect: **Never** *Miss*. Or tick *Can be avoided* off on the Damage effect |

A hit that cannot be avoided cannot be missed.

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

Defense makes you harder to hit and to hurt: more dodge and block, and attackers miss you and crit you less.

| Effect | Settings |
|---|---|
| A **Calculation Trigger Effect** | Target Calculations *Damage Taken*, Tag *Dodge*, Linear `0.1` per point |
| A **Calculation Trigger Effect** | Target Calculations *Damage Taken*, Tag *Block*, Linear `0.1` per point |
| A **Trigger Rule Effect** | Tags of kind *Avoid*, Changes the rolls of **Whoever acts on the owner**, Chance bonus, Linear `0.1`: attackers miss you more |
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

A [proficiency](/basic/entity-stats/proficiencies) has stat effects of its own, and its level is their points: *One-Handed Weapons* has a Calculation Modifier Effect on Damage Done, percentage increase, `0.5` per level, and a Trigger Rule Effect that lowers the chance to miss. Add [diminishing returns](/basic/shared-systems/formulas) such as a soft cap to make the first levels count more. They only work while the gear of the skill is used.

## Other common stats

| Stat | Effect |
|---|---|
| **Armor** | Calculation Modifier on Damage Taken, Percentage decrease, [Damage Type](/basic/tags-and-groups/damage-types) *Physical*, **Hyperbolic** formula |
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

- [Stats](/basic/entity-stats/stats), [Calculations](/basic/entity-stats/calculations), [Trigger tags](/basic/tags-and-groups/trigger-tags)
- [Proficiencies](/basic/entity-stats/proficiencies)

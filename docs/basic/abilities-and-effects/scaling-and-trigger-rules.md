# Scaling and trigger rules

Two kinds of rules change how much an effect does and how a hit or heal turns out:

- **Scaling rules** (on **Damage**, **Heal** and **Stat Modifier** effects) make the number depend on the situation: a target low on health, a target with a shield, a target with many [stacks](/basic/keywords#stacks) of something.
- **Trigger rules** (on **Damage** and **Heal** effects) change how special outcomes behave for this effect: a critical strike, a dodge, a multistrike.

Both are lists on the effect. Only the effect types that have a number to scale carry the scaling rules, and only the ones that cause a hit or a heal carry the trigger rules: the other effect types do not show them. In the code the scaling rules come from `ScalingEffect` (damage, heal and stat modifiers) and the trigger rules from `CombatResultEffect` (damage and heal), so a new effect of that kind can have them too. You find them in the [Effects editor](/basic/abilities-and-effects/effects#settings-of-the-damage-and-heal-effects), under **Specific Properties**.

## Scaling rules

<Shot name="effects-scaling-rules" caption="A scaling rule on a damage effect." />

A scaling rule measures something and gives a bonus in percent. The bonuses of all the rules on an effect add up into one multiplier: `1 + (the bonuses) / 100`. So one rule of +100 % doubles the damage, and two rules of +50 % each also double it.

Scaling rules apply to **Damage** and **Heal** effects (what they deal or heal) and to **Stat Modifier** effects (the value they apply, measured at the moment the effect is applied: a buff that is stronger the lower the user's health was when it was cast).

| Field | What it does | Default |
|---|---|---|
| **Source** | What is measured (see the table below) | Target health % |
| **Pool**, **Effect**, **Tag** | The pool, effect or [entity tag](/basic/tags-and-groups/entity-tags) the source needs, for the sources that use one | none |
| **Only own stacks** | For the stacks source: count only the stacks the caster put there | on |
| **Applies when** | **Always**, only **Below** the threshold, or only **Above** it | Always |
| **Threshold** | The value the measured number is compared with (`20` for "below 20 % health") | `0` |
| **Bonus percent** | The bonus when the rule applies. `+100` doubles the damage | `100` |
| **Per unit** | Multiply the bonus by the measured value, instead of giving it once | off |

### Sources

| Source | What is measured |
|---|---|
| **Target health %** | The target's health, 0 to 100 |
| **Target missing health %** | 100 minus that |
| **Target pool value** | The current value of one of the target's pools |
| **Target pool %** | How full one of the target's pools is, as a percentage |
| **Target has a shield** | 1 when a shield with something left protects the target, otherwise 0 |
| **Target effect stacks** | The stacks of an effect on the target: combo points as a stacking effect |
| **Target has tag** | 1 when the target has an entity tag (Undead, Beast), otherwise 0 |
| **Originator health %** | The caster's own health |
| **Originator pool %** | How full one of the caster's pools is |

### Examples

| You want | Rule |
|---|---|
| An **execute**: double damage below 20 % health | Source *Target health %*, **Applies when** *Below*, **Threshold** `20`, **Bonus** `100` |
| **+2 % damage for every 1 % of missing health** | Source *Target missing health %*, **Per unit** on, **Bonus** `2` |
| **+300 % against a shielded target** | Source *Target has a shield*, **Bonus** `300` |
| **Combo points**: +25 % per stack | Source *Target effect stacks*, choose the combo-point effect, **Per unit** on, **Bonus** `25`. The finishing move can consume the stacks with a *Consume* effect |
| **Extra damage to undead** | Source *Target has tag*, choose the entity tag |

### Damage to shields

A **Damage** effect also has **Protective pool multiplier** (default `1`). A shield loses that many times more points for the damage it absorbs. An anti-shield strike with `4` empties a shield four times faster and lets the rest through.

## Trigger rules

<Shot name="effects-trigger-rules" caption="A trigger rule on an effect." />

Some outcomes of a hit are decided by chance and by stats: a critical strike, a dodge, a block, a multistrike. In ChronicleNode each is a **trigger tag**, which you define in **Tags & Groups > Trigger Tags**. A stat on the entity usually rolls the tag.

A **trigger rule** on an effect overrides that for hits and heals *caused by this effect*, whatever the stats say.

| Field | What it does | Default |
|---|---|---|
| **Tag** | The [trigger tag](/basic/tags-and-groups/trigger-tags) the rule is about. Empty means every tag (a "luck" bonus to all chances) | none |
| **Force** | **Normal**: roll as usual, only the bonuses apply. **Always**: the tag always fires, with no roll, even for an entity with no stat that rolls it. **Never**: the tag never fires. *Never* beats *Always* | Normal |
| **Chance bonus** | Added to the chance, in percentage points (`30` is 30 more percent) | `0` |
| **Magnitude bonus** | Added to the tag's magnitude. A critical strike with `+50` is a +150 % crit instead of +100 % | `0` |
| **Magnitude multiplier** | The magnitude is multiplied by this after the bonuses ("more": `1.25` is 25 % more) | `1` |

### Examples

| You want | Rule |
|---|---|
| An attack that **always crits** | Tag *Critical Strike*, **Force** Always |
| An attack that **cannot be dodged** | Tag *Dodge*, **Force** Never |
| **+30 % crit chance** for this ability | Tag *Critical Strike*, **Chance bonus** `30` |
| **+50 % crit damage** | Tag *Critical Strike*, **Magnitude bonus** `50` |
| **Luck**: a bonus to every chance | No tag, **Chance bonus** `5` (not allowed together with Force Always) |

The rules on an effect and the rules of the stats on the entity are all collected when the hit is worked out.

## See also

- [Effects](/basic/abilities-and-effects/effects)
- [Effect types](/basic/abilities-and-effects/effect-types)

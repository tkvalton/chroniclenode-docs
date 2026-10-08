<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatResultEffect

**Inherits:** [ScalingEffect](/advanced/abilities-and-effects/effects-base/scaling-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [DamageEffect](/advanced/abilities-and-effects/effects-damage-and-healing/damage-effect), [HealEffect](/advanced/abilities-and-effects/effects-damage-and-healing/heal-effect)

The base of the effects whose outcome is a combat result: damage and healing.

## Description

Such an effect goes through the calculation phases, where the tags of a hit (critical strike, dodge, block, multistrike ...) are rolled. **Trigger rules** on the effect change how those tags behave whenever this effect causes the hit or the heal, whatever the stats of the user say. Effects that are not a hit or a heal (a buff, a status, a movement) have nothing to roll, so they do not carry the list.

## Properties

| | | |
|---|---|---|
| `Array[TriggerRule]` | [trigger_rules](#prop-trigger-rules) | `[]` |

## Property descriptions

*Trigger Rules*

### Array[TriggerRule] trigger_rules = [] {#prop-trigger-rules}

Rules that change how trigger tags (critical strike, dodge, multistrike ...) behave whenever this effect is used: always, never, a chance bonus, a magnitude bonus. They apply to the hit or heal this effect causes, whatever the stats say


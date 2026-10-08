# Stat effects: how they work

A **stat effect** is a `Resource` in the `stat_effects` array of a [`StatDefinition`](/advanced/entity-stats/stats-and-pools/stat-definition). The entity's `StatInstance` for the stat keeps the effects, and the system that consumes each type asks it for the effects of that type (`get_effects_by_type`). A stat only takes part when the entity has points in it (`get_total() != 0`) and the stat is active.

The [basic page](/basic/entity-stats/stats#stat-effects) lists the nine types and their fields. This page is about how they are read.

## The base class

[`StatEffect`](/advanced/entity-stats/stat-effects/stat-effect) holds what every type shares:

| Member | What it is |
|---|---|
| `effect_enabled` | A switch: a disabled effect stays on the stat but is skipped |
| `active_trigger_type` | `PERMANENT`, `IN_COMBAT`, `OUT_OF_COMBAT`, checked against `context.in_combat` |
| `conditions` | `Array[Condition]`: entity conditions that must all be true. Evaluated with the owner and the **opponent** in the context |
| `formula`, `returns`, `max_result` | The **value**: the [formula](/advanced/shared-systems/formulas) that turns points into a number, optional [diminishing returns](/basic/keywords#diminishing-returns), a cap |
| `evaluate_points(points, formula_context)` | The value of the effect for the points: formula, then returns, then the cap |
| `is_active(context)` | Enabled, the trigger type fits the combat state, the conditions are met |
| `validate()` | The problems the editor shows (a missing target, an empty list) |

`get_effect_type()` returns the `EffectType` the consumers look for:

```
MULTIPLIER, POOL_MODIFIER, ABILITY_MODIFIER, CALCULATION_MODIFIER, CALCULATION_TRIGGER,
POOL_RESTORATION, REACTIVE_DAMAGE, CUSTOM, TRIGGER_RULE, GAIN_MODIFIER
```

New types were appended after `CUSTOM`, so the saved numbers of the older ones never change. `CUSTOM` is reserved and nothing reads it.

The fields `value_per_point`, `use_scaling`, `scaling_mode`, `scaling_threshold`, `scaling_curve` and `curve_max_value` are kept only so that old saved effects load; a legacy effect gets its formula built from them (`ensure_formula`).

## Who reads each type

| Type | Consumed by | When |
|---|---|---|
| [`MultiplierStatEffect`](/advanced/entity-stats/stat-effects/multiplier-stat-effect) | `StatsComponent._apply_multiplier_effects` | When a stat changes. A cascade guard stops after 10 passes. Results are cached as bonuses and re-applied when a condition flips |
| [`PoolModifierStatEffect`](/advanced/entity-stats/stat-effects/pool-modifier-stat-effect) | `StatsComponent._update_pool_effects` | When a stat changes and at the start and end of combat. Starts from the pool's own base each time, so it never compounds |
| [`AbilityModifierStatEffect`](/advanced/entity-stats/stat-effects/ability-modifier-stat-effect) | `StatsComponent.get_ability_modifier_entries`, asked by the ability for its cooldown, cost or resource gain | Every time the ability property is read; nothing is stored, so nothing goes stale |
| [`CalculationModifierStatEffect`](/advanced/entity-stats/stat-effects/calculation-modifier-stat-effect) | `CalculationBase._run_modifiers` | Phase 2 of a [calculation](/advanced/entity-stats/pipeline) |
| [`CalculationTriggerStatEffect`](/advanced/entity-stats/stat-effects/calculation-trigger-stat-effect) | `CalculationBase._roll_triggers` | Phase 1 of a calculation |
| [`TriggerRuleStatEffect`](/advanced/entity-stats/stat-effects/trigger-rule-stat-effect) | `CalculationBase._collect_rules` | Before the triggers roll |
| [`PoolRestorationStatEffect`](/advanced/entity-stats/stat-effects/pool-restoration-stat-effect) | `StatsComponent` hit and kill handlers | After a resolved hit (leech, mana on hit, health on kill) |
| [`ReactiveDamageStatEffect`](/advanced/entity-stats/stat-effects/reactive-damage-stat-effect) | `StatsComponent` through `CombatReactions` | After a resolved hit taken (damage reflection) |
| [`GainModifierStatEffect`](/advanced/entity-stats/stat-effects/gain-modifier-stat-effect) | `StatsComponent.modify_gain(channel, amount)` | When the game gives the entity experience, gold, loot, threat or a resource |

## Conditions, the opponent and the context

A condition on a stat effect is an [`EntityCondition`](/advanced/shared-systems/conditions). It gets the effect's **context** dictionary:

| Key | Value |
|---|---|
| `owner` | The entity that has the stat |
| `opponent` | The other side of the hit being calculated, or `null` outside a hit |
| `in_combat` | The combat state |
| `damage_type`, `calculation_target`, `is_damage_calculation`, `can_be_avoided` | Added by the calculations |
| the tag of a fired trigger, and `"magnitude:<tag>"` | Added when a trigger fires, so later modifiers can require it |

The target kind of an entity condition picks who it asks: **Argument Entity** is the owner and **Opponent** the opponent. This is how "+30 % damage against Undead" works: the condition `EntityHasTagCondition` is asked about the opponent.

Effects that are cached as bonuses (multiplier, pool modifier) cannot ask the opponent. `StatsComponent` remembers whether each conditional effect was active at the last check (`_condition_snapshot`) and re-applies them only when one flipped: at the start and end of combat and when the master pool changes.

## Writing a new type

1. Extend `StatEffect` in a script and return your own `EffectType` (add it after the last value) from `get_effect_type()`.
2. Add it to the **Add Stat Effect** dialog: the type list and the `match` in `StatEditor._create_new_stat_effect` (addon code, so this one is a change to the addon). `StatEffectPropertyEditor` draws the fields of each type, so give a new type its own section there.
3. Write the consumer: the place in your game that calls `stat_instance.get_effects_by_type(...)` and applies them.

For a new **formula**, **diminishing returns** or **condition** nothing needs registering. Put the script in the project folder (`res://src/stat_formulas/`, `res://src/stat_diminishing_returns/`, `res://src/stat_conditions/`) and the editor finds it with `StatClassScanner`. The addon folder is overwritten by updates, so keep your own classes in the project.

## Class pages

The classes are in the list for this section: [`StatEffect`](/advanced/entity-stats/stat-effects/stat-effect) and its nine children.

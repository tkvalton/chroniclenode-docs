<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DamageDoneCalculation

**Inherits:** [CalculationBase](/advanced/entity-stats/calculations/calculation-base) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Damage done: the attacker's triggers (critical strike ...) and modifiers (attack power, damage-done bonuses) applied to the effect's raw number.

## Methods

| | |
|---|---|
| `void` | [apply_to](#method-apply-to)( `stats_component: StatsComponent, result: DamageResult, preview_mode: bool = false` ) |

## Method descriptions

### void apply_to( stats_component: StatsComponent, result: DamageResult, preview_mode: bool = false ) {#method-apply-to}

Runs the attacker's phase on `result`: reads `raw`, writes `done`, sets `taken` to the same number (the starting value of the defender's phase) and records the triggers and steps


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DamageTakenCalculation

**Inherits:** [CalculationBase](/advanced/entity-stats/calculations/calculation-base) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Damage taken: the defender's triggers (dodge, block) and modifiers (armor, damage-taken bonuses) applied to the hit. A fired avoid trigger ends the phase with the outcome AVOIDED.

## Methods

| | |
|---|---|
| `void` | [apply_to](#method-apply-to)( `stats_component: StatsComponent, result: DamageResult` ) |

## Method descriptions

### void apply_to( stats_component: StatsComponent, result: DamageResult ) {#method-apply-to}

Runs the defender's phase on `result`. The working value is `result.taken`: the caller sets it to what is left after redirection (the attacker's phase leaves it at `done`). Writes `taken`, records the triggers and steps, and marks the result AVOIDED when an avoid trigger fired (unless the hit cannot be avoided)


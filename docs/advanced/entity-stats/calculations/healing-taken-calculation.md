<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HealingTakenCalculation

**Inherits:** [CalculationBase](/advanced/entity-stats/calculations/calculation-base) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Healing taken: the target's triggers and modifiers (healing received bonuses, anti-heal) applied to the heal. Heals cannot be avoided, so avoid triggers are ignored here.

## Methods

| | |
|---|---|
| `void` | [apply_to](#method-apply-to)( `stats_component: StatsComponent, result: HealingResult, preview_mode: bool = false` ) |

## Method descriptions

### void apply_to( stats_component: StatsComponent, result: HealingResult, preview_mode: bool = false ) {#method-apply-to}

Runs the target's phase on `result`. The working value is `result.taken` (the healer's phase leaves it at `done`). Writes `taken` and records the triggers and steps


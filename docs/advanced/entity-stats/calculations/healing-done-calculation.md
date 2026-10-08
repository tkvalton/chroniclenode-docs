<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HealingDoneCalculation

**Inherits:** [CalculationBase](/advanced/entity-stats/calculations/calculation-base) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Healing done: the healer's triggers (critical heals ...) and modifiers (healing power) applied to the effect's raw number.

## Methods

| | |
|---|---|
| `void` | [apply_to](#method-apply-to)( `stats_component: StatsComponent, result: HealingResult, preview_mode: bool = false` ) |

## Method descriptions

### void apply_to( stats_component: StatsComponent, result: HealingResult, preview_mode: bool = false ) {#method-apply-to}

Runs the healer's phase on `result`: reads `raw`, writes `done`, sets `taken` to the same number (the starting value of the target's phase) and records the triggers and steps


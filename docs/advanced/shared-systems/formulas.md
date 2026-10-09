# Formulas: how they are built

A formula is a `Resource` that maps a number to a number. Two small families do all the shaping of stat values: **CalculationFormula** (what the points are worth) and **DiminishingReturns** (what the points count for before that). Both are stored inside the stat effect, stat or pool that uses them. The [Basic guide](/basic/shared-systems/formulas) shows what they do.

## The pipeline

[FormulaPipeline](/advanced/shared-systems/formula-support/formula-pipeline) is the one place where points become a value, so every effect type does it the same way:

```
points  ->  DiminishingReturns.apply  ->  CalculationFormula.evaluate  ->  cap at max_result
```

| Function | What it does |
|---|---|
| `calculate(points, formula, returns = null, context = null, max_result = 0.0)` | The value for `points`. A `null` formula gives `0`. `max_result` above 0 caps the magnitude of the result (the sign is kept) |
| `growth_at(level, formula, returns, context, max_growth)` | Level growth: the same two slots with **levels gained** (`level - 1`) as the input. A null formula means no growth; `max_growth` above 0 caps it |
| `sample(formula, returns, context, max_result, from, to, steps)` | `Vector2` samples (points, value) for the graph and table of the editor |
| `preview_range(formula, returns)` | The x range of the graph: the formula's range widened to the curve's |
| `validate(formula, returns)` | Configuration problems from both slots, as readable messages |
| `clamp_percentage_decrease(value)` | Limits a "decrease by" percentage to 0 to 100, so damage never goes below zero |

## CalculationFormula

[CalculationFormula](/advanced/shared-systems/formulas/calculation-formula) is the base. It extends `Resource`; its `evaluate(points, context)` is the identity, so a bare one is harmless.

| Member | Purpose |
|---|---|
| `evaluate(points: float, context: FormulaContext = null) -> float` | Points in, value out. The function a formula overrides |
| `level_scaling: LevelScaling` | Optional level dependence; `null` = level is ignored |
| `get_label()` | The short name in the editor's picker |
| `get_description()` | One line with the current numbers |
| `get_preview_range() -> Vector2` | The x range of the preview graph (default 0 to 1000) |
| `validate() -> Array[String]` | Messages for settings that make the formula useless |
| `get_level_factor(context)` | The level factor of the scaling for the context (never below `MIN_LEVEL_FACTOR`, so nothing divides by zero) |

The shipped formulas:

| Class | `evaluate(points)` | Level scaling |
|---|---|---|
| [LinearCalculationFormula](/advanced/shared-systems/formulas/linear-calculation-formula) | `points × value_per_point / level_factor` | Divides the value per point |
| [HyperbolicCalculationFormula](/advanced/shared-systems/formulas/hyperbolic-calculation-formula) | `sign(points) × max_value × abs(points) / (abs(points) + k × level_factor)`; negative points give 0 unless `allow_negative_points` | Multiplies `k` |
| [FlatCalculationFormula](/advanced/shared-systems/formulas/flat-calculation-formula) | `value` | None |

## DiminishingReturns

[DiminishingReturns](/advanced/shared-systems/diminishing-returns/diminishing-returns) is the base of slot 1. `apply(points, context)` returns the *effective points*; the base returns them unchanged. It has the same `level_scaling`, `get_label`, `get_description`, `get_preview_range` and `validate`.

| Class | `apply(points)` | Level scaling |
|---|---|---|
| [SoftCapDiminishingReturns](/advanced/shared-systems/diminishing-returns/soft-cap-diminishing-returns) | `points` up to `threshold × level_factor`, then `limit + (points − limit) × rate` | Multiplies the threshold |
| [DrawnCurveDiminishingReturns](/advanced/shared-systems/diminishing-returns/drawn-curve-diminishing-returns) | `points × curve(points / limit)` up to `limit = max_input × level_factor`; beyond it the end efficiency is kept and each extra point counts `beyond_rate` of it | Multiplies `max_input` |

## LevelScaling and FormulaContext

[LevelScaling](/advanced/shared-systems/formula-support/level-scaling) turns a level into a factor. By default it rises in a line from `start_factor` (default 0.25) at level 1 to 1.0 at `reference_level` (default 60) and continues above it:
`factor = start_factor + (1 − start_factor) × (level − 1) / (reference_level − 1)`. A `curve` (x = level / `curve_max_level`) replaces the line. `source` chooses whose level is read.

[FormulaContext](/advanced/shared-systems/formula-support/formula-context) is what a formula can see: the `owner` of the stat and its level, and in a hit the `attacker` and `defender` with their levels, the `damage_type`, the `incoming_amount` and the [`DamageResult`](/advanced/entity-stats/combat/damage-result) being built.
Outside combat (pool capacity from a stat, stat-to-stat effects, level growth) only the owner part is filled. `LevelSource` is `OWNER`, `ATTACKER` or `DEFENDER`. Build one with `FormulaContext.for_owner(entity)` or `for_hit(entity, result, incoming)`.

## Where they are used

| Owner | Properties |
|---|---|
| Every stat effect that turns points into a value ([`StatEffect`](/advanced/entity-stats/stat-effects/stat-effect) and its types) | `formula`, `returns`, `max_result` |
| [`StatDefinition`](/advanced/entity-stats/stats-and-pools/stat-definition) | `growth_formula`, `growth_returns`, `growth_max`: growth per level |
| [`PoolDefinition`](/advanced/entity-stats/stats-and-pools/pool-definition) | the same three, for the growth of a pool |
| [`GrowthOverride`](/advanced/entity-stats/stats-and-pools/growth-override) (in [`StatsData.growth_overrides`](/advanced/entity-stats/stats-and-pools/stats-data)) | the same three, for one kind of entity: a warrior's Strength grows faster than a mage's |

## Writing your own formula

A formula is a pure function of its inputs: no state, no scene access.

1. Make a script in `res://src/stat_formulas/` that extends `CalculationFormula`, with `@tool` (so the editor can draw the preview) and a `class_name`. For diminishing returns use `res://src/stat_diminishing_returns/` and extend `DiminishingReturns`.
2. Add `@export` properties for its settings.
3. Override `evaluate` (or `apply`), and if you like `get_label`, `get_description`, `get_preview_range` and `validate`.

```gdscript
@tool
class_name SquareRootFormula extends CalculationFormula

@export var scale: float = 10.0

func evaluate(points: float, context: FormulaContext = null) -> float:
    return sqrt(maxf(points, 0.0)) * scale

func get_label() -> String:
    return "Square root"
```

The editor lists every script of those folders that extends the base class ([`StatClassScanner`](/advanced/editor/stats/stat-class-scanner)), together with the shipped ones. They live in the project, so updating the addon never overwrites them.

## The classes

### Formulas

<!-- classes:shared-systems/formulas -->
| Class | What it is |
|---|---|
| [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula) | Slot 2 of every per-point stat effect: turns (effective) stat points into the value the effect applies. |
| [FlatCalculationFormula](/advanced/shared-systems/formulas/flat-calculation-formula) | A fixed value that does not depend on the stat points (the effect applies as soon as the entity has any of the stat). |
| [HyperbolicCalculationFormula](/advanced/shared-systems/formulas/hyperbolic-calculation-formula) | value = max_value x points / (points + k): the armor formula of League of Legends, WoW's avoidance and most modern ARPGs. |
| [LinearCalculationFormula](/advanced/shared-systems/formulas/linear-calculation-formula) | value = points x value_per_point. |
<!-- /classes -->

### Pipeline, context and level scaling

<!-- classes:shared-systems/formula-support -->
| Class | What it is |
|---|---|
| [FormulaContext](/advanced/shared-systems/formula-support/formula-context) | What a CalculationFormula / DiminishingReturns can see when it is evaluated: who owns the stat, who is attacking and defending, their levels, the damage type, the size of the incoming hit and the DamageResult being built. |
| [FormulaPipeline](/advanced/shared-systems/formula-support/formula-pipeline) | The one place that turns stat points into an effect value, so every effect type does it identically: |
| [LevelScaling](/advanced/shared-systems/formula-support/level-scaling) | Optional level dependence for a CalculationFormula or a DiminishingReturns. |
<!-- /classes -->

### Diminishing returns

<!-- classes:shared-systems/diminishing-returns -->
| Class | What it is |
|---|---|
| [DiminishingReturns](/advanced/shared-systems/diminishing-returns/diminishing-returns) | Slot 1 of a per-point stat effect (optional, off by default): reshapes the stat points BEFORE the formula, so points above a threshold are worth less. |
| [DrawnCurveDiminishingReturns](/advanced/shared-systems/diminishing-returns/drawn-curve-diminishing-returns) | A hand-drawn efficiency curve (the Dark Souls style table). |
| [SoftCapDiminishingReturns](/advanced/shared-systems/diminishing-returns/soft-cap-diminishing-returns) | Full value up to a threshold; above it each point only counts as a share (rate) of a point. |
<!-- /classes -->

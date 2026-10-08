<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CalculationFormula

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [FlatCalculationFormula](/advanced/shared-systems/formulas/flat-calculation-formula), [HyperbolicCalculationFormula](/advanced/shared-systems/formulas/hyperbolic-calculation-formula), [LinearCalculationFormula](/advanced/shared-systems/formulas/linear-calculation-formula)

Slot 2 of every per-point stat effect: turns (effective) stat points into the value the effect applies.

## Description

Slot 2 of every per-point stat effect: turns (effective) stat points into the value the effect applies.

Armor is a Hyperbolic formula, a flat damage bonus is a Linear one, a fixed crit bonus is a Flat one. To add your own, create a child class in your project folder (see docs/systems/entity-stats.md, section 18.2):

@tool class_name MyArmorFormula extends CalculationFormula @export var k: float = 120.0 func evaluate(points: float, context: FormulaContext = null) -&gt; float: return 100.0 * points / (points + k)

Rules for your own formulas: `@tool` (so the editor can draw the preview), a pure function of the inputs (no state, no scene access), and a `class_name`. Override `evaluate` and, if you like, `get_label`, `get_description`, `get_preview_range` and `validate`.

## Properties

| | | |
|---|---|---|
| `LevelScaling` | [level_scaling](#prop-level-scaling) |  |

## Methods

| | |
|---|---|
| `float` | [evaluate](#method-evaluate)( `points: float, context: FormulaContext = null` ) |
| `String` | [get_label](#method-get-label)() |
| `String` | [get_description](#method-get-description)() |
| `Vector2` | [get_preview_range](#method-get-preview-range)() |
| `Array[String]` | [validate](#method-validate)() |
| `float` | [get_level_factor](#method-get-level-factor)( `context: FormulaContext` ) |

## Constants

- `float` **MIN_LEVEL_FACTOR** = `0.0001` - Below this a level factor is treated as this value, so a formula never divides by zero

## Property descriptions

### LevelScaling level_scaling {#prop-level-scaling}

Optional level dependence. Null (default): level is ignored

## Method descriptions

### float evaluate( points: float, context: FormulaContext = null ) {#method-evaluate}

Points in, value out. The base class is the identity so a bare CalculationFormula is harmless

### String get_label() {#method-get-label}

Short name shown in the editor's formula picker

### String get_description() {#method-get-description}

One-line description with the current numbers (tooltips, editor)

### Vector2 get_preview_range() {#method-get-preview-range}

The points range the editor graph and table draw (x from, x to)

### Array[String] validate() {#method-validate}

Configuration problems, as readable messages (empty = fine). Shown in the editor

### float get_level_factor( context: FormulaContext ) {#method-get-level-factor}

The level factor of this formula's LevelScaling for the context (1.0 when level scaling is off)


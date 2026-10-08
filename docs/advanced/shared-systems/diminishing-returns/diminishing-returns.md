<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DiminishingReturns

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [DrawnCurveDiminishingReturns](/advanced/shared-systems/diminishing-returns/drawn-curve-diminishing-returns), [SoftCapDiminishingReturns](/advanced/shared-systems/diminishing-returns/soft-cap-diminishing-returns)

Slot 1 of a per-point stat effect (optional, off by default): reshapes the stat points BEFORE the formula, so

## Description

Slot 1 of a per-point stat effect (optional, off by default): reshapes the stat points BEFORE the formula, so points above a threshold are worth less. Crit rating is a Linear formula (0.05 % per point) behind a SoftCap (points above 400 count half). The result is "effective points", which the CalculationFormula then converts.

To add your own, create a child class in your project folder (see docs/systems/entity-stats.md, section 18.2):

@tool class_name MyDiminishingReturns extends DiminishingReturns func apply(points: float, context: FormulaContext = null) -&gt; float: return sqrt(points) * 10.0

Rules: `@tool`, a pure function of the inputs (no state, no scene access), and a `class_name`.

## Properties

| | | |
|---|---|---|
| `LevelScaling` | [level_scaling](#prop-level-scaling) |  |

## Methods

| | |
|---|---|
| `float` | [apply](#method-apply)( `points: float, context: FormulaContext = null` ) |
| `String` | [get_label](#method-get-label)() |
| `String` | [get_description](#method-get-description)() |
| `Vector2` | [get_preview_range](#method-get-preview-range)() |
| `Array[String]` | [validate](#method-validate)() |
| `float` | [get_level_factor](#method-get-level-factor)( `context: FormulaContext` ) |

## Constants

- `float` **MIN_LEVEL_FACTOR** = `0.0001` - Below this a level factor is treated as this value, so a curve never divides by zero

## Property descriptions

### LevelScaling level_scaling {#prop-level-scaling}

Optional level dependence. Null (default): level is ignored

## Method descriptions

### float apply( points: float, context: FormulaContext = null ) {#method-apply}

Points in, effective points out. The base class changes nothing

### String get_label() {#method-get-label}

*No description yet.*

### String get_description() {#method-get-description}

One-line description with the current numbers

### Vector2 get_preview_range() {#method-get-preview-range}

The points range the editor graph and table draw (x from, x to)

### Array[String] validate() {#method-validate}

Configuration problems, as readable messages (empty = fine)

### float get_level_factor( context: FormulaContext ) {#method-get-level-factor}

*No description yet.*


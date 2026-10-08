<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LevelScaling

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Optional level dependence for a CalculationFormula or a DiminishingReturns.

## Description

Produces a factor from a level. The formula uses it to change how many points are needed: a Hyperbolic formula multiplies its K by the factor, a SoftCap multiplies its threshold, a Linear formula divides its value per point. So the same points are worth less at a higher level. A formula or curve with no LevelScaling ignores level.

Default factor: start_factor at level 1, rising linearly to 1.0 at reference_level and continuing above it. (A plain level / reference_level would make the constants tiny at low levels.) Supply a Curve to override it. See docs/systems/entity-stats.md, section 18.2.

## Properties

| | | |
|---|---|---|
| `FormulaContext.LevelSource` | [source](#prop-source) | `FormulaContext.LevelSource.OWNER` |
| `int` | [reference_level](#prop-reference-level) | `60` |
| `float` | [start_factor](#prop-start-factor) | `0.25` |
| `Curve` | [curve](#prop-curve) |  |
| `int` | [curve_max_level](#prop-curve-max-level) | `100` |

## Methods

| | |
|---|---|
| `float` | [factor](#method-factor)( `context: FormulaContext` ) |
| `float` | [factor_of](#method-factor-of)( `scaling: LevelScaling, context: FormulaContext` ) *static* |
| `String` | [describe](#method-describe)() |

## Property descriptions

### FormulaContext.LevelSource source = FormulaContext.LevelSource.OWNER {#prop-source}

Whose level is read

### int reference_level = 60 {#prop-reference-level}

The level at which the factor is exactly 1.0 (default behaviour only)

### float start_factor = 0.25 {#prop-start-factor}

The factor at level 1 (default behaviour only)

*Custom Curve*

### Curve curve {#prop-curve}

Optional: replaces the default. X is level / curve_max_level (0 to 1), Y is the factor

### int curve_max_level = 100 {#prop-curve-max-level}

For a custom curve: the level at the end of the curve (x = 1)

## Method descriptions

### float factor( context: FormulaContext ) {#method-factor}

The factor for the level the context reports (1.0 without a context)

### float factor_of( scaling: LevelScaling, context: FormulaContext ) {#method-factor-of}

Null-safe: a missing LevelScaling means "level does not matter"

### String describe() {#method-describe}

*No description yet.*


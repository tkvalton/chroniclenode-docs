<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FormulaPipeline

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The one place that turns stat points into an effect value, so every effect type does it identically:

## Description

points -&gt; [DiminishingReturns] (optional) -&gt; CalculationFormula -&gt; optional max result

Also draws the sample points the editor graph and table use. See docs/systems/entity-stats.md, section 18.2.

## Methods

| | |
|---|---|
| `float` | [calculate](#method-calculate)( `points: float, formula: CalculationFormula, returns: DiminishingReturns = null, context: FormulaContext = null, max_result: float = 0.0` ) *static* |
| `float` | [clamp_percentage_decrease](#method-clamp-percentage-decrease)( `percentage: float` ) *static* |
| `PackedVector2Array` | [sample](#method-sample)( `formula: CalculationFormula, returns: DiminishingReturns = null, context: FormulaContext = null, max_result: float = 0.0, from_points: float = 0.0, to_points: float = 1000.0, steps: int = 100` ) *static* |
| `Vector2` | [preview_range](#method-preview-range)( `formula: CalculationFormula, returns: DiminishingReturns = null` ) *static* |
| `Array[String]` | [validate](#method-validate)( `formula: CalculationFormula, returns: DiminishingReturns = null` ) *static* |
| `float` | [growth_at](#method-growth-at)( `level: int, formula: CalculationFormula, returns: DiminishingReturns = null, context: FormulaContext = null, max_growth: float = 0.0` ) *static* |

## Method descriptions

### float calculate( points: float, formula: CalculationFormula, returns: DiminishingReturns = null, context: FormulaContext = null, max_result: float = 0.0 ) {#method-calculate}

The effect value for `points`. A null formula gives 0. `max_result` &gt; 0 caps the magnitude of the value ("dodge never above 75 %"); 0 means no cap. It is separate from the stat's own max_value, which caps the points.

### float clamp_percentage_decrease( percentage: float ) {#method-clamp-percentage-decrease}

A percentage decrease must never push a number below 0: limits a "decrease by" percentage to 0..100

### PackedVector2Array sample( formula: CalculationFormula, returns: DiminishingReturns = null, context: FormulaContext = null, max_result: float = 0.0, from_points: float = 0.0, to_points: float = 1000.0, steps: int = 100 ) {#method-sample}

Points (x) and effect values (y) for the editor graph and table

### Vector2 preview_range( formula: CalculationFormula, returns: DiminishingReturns = null ) {#method-preview-range}

The x range the graph should draw: the formula's preferred range widened to the curve's, if any

### Array[String] validate( formula: CalculationFormula, returns: DiminishingReturns = null ) {#method-validate}

Configuration problems of the whole setup, from both slots

### float growth_at( level: int, formula: CalculationFormula, returns: DiminishingReturns = null, context: FormulaContext = null, max_growth: float = 0.0 ) {#method-growth-at}

Level growth of a stat or pool: the same two slots as an effect, with the LEVELS GAINED (level - 1) as the input, so level 1 has no growth ("+2 per level" is a Linear formula of 2). A null formula means no growth. `max_growth` &gt; 0 caps the total growth. See docs/systems/entity-stats.md, section 18.6


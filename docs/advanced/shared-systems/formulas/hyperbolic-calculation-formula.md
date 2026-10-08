<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HyperbolicCalculationFormula

**Inherits:** [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

value = max_value x points / (points + k): the armor formula of League of Legends, WoW's avoidance and most

## Description

value = max_value x points / (points + k): the armor formula of League of Legends, WoW's avoidance and most modern ARPGs. Never reaches max_value, so it needs no hard cap, and every point of armor adds the same amount of effective health. k is the number of points that gives half of max_value (k 100: 100 points = 50 %, 300 = 75 %).

With level scaling k is multiplied by the level factor (the same armor protects less against a higher-level attacker).

## Properties

| | | |
|---|---|---|
| `float` | [max_value](#prop-max-value) | `100.0` |
| `float` | [k](#prop-k) | `100.0` |
| `bool` | [allow_negative_points](#prop-allow-negative-points) | `false` |

## Methods

| | |
|---|---|
| `float` | [evaluate](#method-evaluate)( `points: float, context: FormulaContext = null` ) |
| `String` | [get_label](#method-get-label)() |
| `String` | [get_description](#method-get-description)() |
| `Vector2` | [get_preview_range](#method-get-preview-range)() |
| `Array[String]` | [validate](#method-validate)() |

## Property descriptions

### float max_value = 100.0 {#prop-max-value}

What the formula approaches as points grow (100 for a percentage that tends to 100 %)

### float k = 100.0 {#prop-k}

Points that give half of max_value

### bool allow_negative_points = false {#prop-allow-negative-points}

When true, negative points mirror the curve (negative armor increases damage taken); when false they give 0

## Method descriptions

### float evaluate( points: float, context: FormulaContext = null ) {#method-evaluate}

Points in, value out. The base class is the identity so a bare CalculationFormula is harmless *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*

### String get_label() {#method-get-label}

Short name shown in the editor's formula picker *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*

### String get_description() {#method-get-description}

One-line description with the current numbers (tooltips, editor) *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*

### Vector2 get_preview_range() {#method-get-preview-range}

The points range the editor graph and table draw (x from, x to) *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*

### Array[String] validate() {#method-validate}

Configuration problems, as readable messages (empty = fine). Shown in the editor *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*


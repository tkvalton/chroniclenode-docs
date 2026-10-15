<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HyperbolicCalculationFormula

**Inherits:** [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

value = max_value x points / (points + k): the armor formula of League of Legends, WoW's avoidance and most modern ARPGs. Never reaches max_value, so it needs no hard cap, and every point of armor adds the same amount of effective health. k is the number of points that gives half of max_value (k 100: 100 points = 50 %, 300 = 75 %).

## Description

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

The value the formula gives for a number of stat points.

### String get_label() {#method-get-label}

The name of the formula in the editor.

### String get_description() {#method-get-description}

A sentence about the formula and its values.

### Vector2 get_preview_range() {#method-get-preview-range}

The range of points the editor graph shows.

### Array[String] validate() {#method-validate}

Checks the settings of the formula. Gives the warnings (empty when it is fine).


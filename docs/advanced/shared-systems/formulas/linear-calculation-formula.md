<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LinearCalculationFormula

**Inherits:** [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

value = points x value_per_point. The default formula, and what every effect did before formulas existed (+2 attack power per Strength, 0.05 % crit chance per rating point).

## Description

With level scaling the points needed per unit of value grow with level: value = points x value_per_point / factor.

## Properties

| | | |
|---|---|---|
| `float` | [value_per_point](#prop-value-per-point) | `1.0` |

## Methods

| | |
|---|---|
| `float` | [evaluate](#method-evaluate)( `points: float, context: FormulaContext = null` ) |
| `String` | [get_label](#method-get-label)() |
| `String` | [get_description](#method-get-description)() |
| `Array[String]` | [validate](#method-validate)() |

## Property descriptions

### float value_per_point = 1.0 {#prop-value-per-point}

The value of each stat point

## Method descriptions

### float evaluate( points: float, context: FormulaContext = null ) {#method-evaluate}

The value the formula gives for a number of stat points.

### String get_label() {#method-get-label}

The name of the formula in the editor.

### String get_description() {#method-get-description}

A sentence about the formula and its values.

### Array[String] validate() {#method-validate}

Checks the settings of the formula. Gives the warnings (empty when it is fine).


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LinearCalculationFormula

**Inherits:** [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

value = points x value_per_point. The default formula, and what every effect did before formulas existed

## Description

value = points x value_per_point. The default formula, and what every effect did before formulas existed (+2 attack power per Strength, 0.05 % crit chance per rating point).

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

Points in, value out. The base class is the identity so a bare CalculationFormula is harmless *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*

### String get_label() {#method-get-label}

Short name shown in the editor's formula picker *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*

### String get_description() {#method-get-description}

One-line description with the current numbers (tooltips, editor) *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*

### Array[String] validate() {#method-validate}

Configuration problems, as readable messages (empty = fine). Shown in the editor *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*


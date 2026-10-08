<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FlatCalculationFormula

**Inherits:** [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A fixed value that does not depend on the stat points (the effect applies as soon as the entity has any of the stat). Used for a crit damage bonus of +100 % or "when blocking, take 30 % less". Replaces the old "scales with stat = off". Level scaling does not apply.

## Properties

| | | |
|---|---|---|
| `float` | [value](#prop-value) | `1.0` |

## Methods

| | |
|---|---|
| `float` | [evaluate](#method-evaluate)( `_points: float, _context: FormulaContext = null` ) |
| `String` | [get_label](#method-get-label)() |
| `String` | [get_description](#method-get-description)() |
| `Array[String]` | [validate](#method-validate)() |

## Property descriptions

### float value = 1.0 {#prop-value}

The value the formula always returns, whatever the points

## Method descriptions

### float evaluate( _points: float, _context: FormulaContext = null ) {#method-evaluate}

Points in, value out. The base class is the identity so a bare CalculationFormula is harmless *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*

### String get_label() {#method-get-label}

Short name shown in the editor's formula picker *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*

### String get_description() {#method-get-description}

One-line description with the current numbers (tooltips, editor) *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*

### Array[String] validate() {#method-validate}

Configuration problems, as readable messages (empty = fine). Shown in the editor *(from [CalculationFormula](/advanced/shared-systems/formulas/calculation-formula))*


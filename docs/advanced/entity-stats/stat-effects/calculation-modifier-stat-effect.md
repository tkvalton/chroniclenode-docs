<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CalculationModifierStatEffect

**Inherits:** [StatEffect](/advanced/entity-stats/stat-effects/stat-effect) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Effect that modifies calculation pipeline values (damage done, damage taken, healing, etc.) Can optionally require a trigger tag to be present in context

## Properties

| | | |
|---|---|---|
| `Array[CalculationBase.CalculationType]` | [target_calculations](#prop-target-calculations) | `[]` |
| `CalculationType` | [calculation_type](#prop-calculation-type) | `CalculationType.ADD` |
| `ValueSource` | [value_source](#prop-value-source) | `ValueSource.FORMULA` |
| `String` | [required_trigger_tag](#prop-required-trigger-tag) | `""` |
| `int` | [affects_damage_type](#prop-affects-damage-type) | `0` |
| `TriggerTagDefinition` | [points_ignored_by_tag](#prop-points-ignored-by-tag) |  |
| `int` | [processing_priority](#prop-processing-priority) | `0` |

## Methods

| | |
|---|---|
| `EffectType` | [get_effect_type](#method-get-effect-type)() |
| `String` | [get_effect_category](#method-get-effect-category)() |
| `bool` | [applies_to_context](#method-applies-to-context)( `context: Dictionary` ) |
| `bool` | [affects_calculation](#method-affects-calculation)( `calc_type: CalculationBase.CalculationType` ) |
| `float` | [calculate_effect_value](#method-calculate-effect-value)( `stat_points: float, formula_context: FormulaContext = null` ) |
| `Dictionary` | [apply_to_calculation](#method-apply-to-calculation)( `current_value: float, stat_points: float, context: Dictionary = {}, formula_context: FormulaContext = null` ) |
| `Dictionary` | [get_preview_info](#method-get-preview-info)( `stat_points: float` ) |
| `String` | [get_short_description](#method-get-short-description)() |
| `String` | [get_tooltip_text](#method-get-tooltip-text)( `stat_points: float` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum ValueSource {#enum-valuesource}

The options of value source: formula, tag magnitude.

- **FORMULA** = `0` - The value comes from the formula slots below (the stat points)
- **TAG_MAGNITUDE** = `1` - The value is the magnitude of the required trigger tag on this hit (crit damage, penetration ...)

## Property descriptions

*Calculation Settings*

### Array[CalculationBase.CalculationType] target_calculations = [] {#prop-target-calculations}

Which calculations this affects

### CalculationType calculation_type = CalculationType.ADD {#prop-calculation-type}

How the value changes the number: add, subtract, multiply, increase or decrease by a percentage, set

*Value Source*

### ValueSource value_source = ValueSource.FORMULA {#prop-value-source}

FORMULA: the usual per-point value. TAG_MAGNITUDE: the value is the magnitude the required tag carries on this hit, so everything that changes that magnitude (stats, rules, the tag's base) changes this modifier. Needs a required tag

*Trigger Requirement*

### String required_trigger_tag = "" {#prop-required-trigger-tag}

Optional - only apply if this tag is in context (e.g., "critical_strike_triggered")

*Damage Type Restrictions*

### int affects_damage_type = 0 {#prop-affects-damage-type}

0 = affects all damage types, otherwise specific damage type ID

*Penetration*

### TriggerTagDefinition points_ignored_by_tag {#prop-points-ignored-by-tag}

A share of THIS stat's points is ignored, equal to the magnitude (percent) this tag carries on the hit: armor penetration. The tag is fired by the attacker (a stat, or a rule on its effect); useful on damage taken modifiers

*Processing Order*

### int processing_priority = 0 {#prop-processing-priority}

Higher = processed first in calculation pipeline (0 = default order)

## Method descriptions

### EffectType get_effect_type() {#method-get-effect-type}

========== EFFECT IDENTIFICATION ==========

### String get_effect_category() {#method-get-effect-category}

The group of the effect in the editor.

### bool applies_to_context( context: Dictionary ) {#method-applies-to-context}

========== CONTEXT VALIDATION ==========

### bool affects_calculation( calc_type: CalculationBase.CalculationType ) {#method-affects-calculation}

========== TARGET VALIDATION ==========

### float calculate_effect_value( stat_points: float, formula_context: FormulaContext = null ) {#method-calculate-effect-value}

========== EFFECT VALUE CALCULATION ==========

### Dictionary apply_to_calculation( current_value: float, stat_points: float, context: Dictionary = &#123;&#125;, formula_context: FormulaContext = null ) {#method-apply-to-calculation}

========== EFFECT APPLICATION ==========

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

========== DISPLAY ==========

### String get_short_description() {#method-get-short-description}

A one line text about what the effect does.

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

The tooltip text of the effect for a number of stat points.

### Array[Dictionary] validate() {#method-validate}

========== VALIDATION ==========


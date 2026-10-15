<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MultiplierStatEffect

**Inherits:** [StatEffect](/advanced/entity-stats/stat-effects/stat-effect) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Effect that applies bonuses to other stats (regular or core stats)

## Properties

| | | |
|---|---|---|
| `int` | [target_stat_id](#prop-target-stat-id) | `0` |
| `CalculationType` | [calculation_type](#prop-calculation-type) | `CalculationType.ADD` |

## Methods

| | |
|---|---|
| `EffectType` | [get_effect_type](#method-get-effect-type)() |
| `String` | [get_effect_category](#method-get-effect-category)() |
| `float` | [calculate_effect_value](#method-calculate-effect-value)( `stat_points: float, formula_context: FormulaContext = null` ) |
| `float` | [calculate_bonus](#method-calculate-bonus)( `current_target_value: float, stat_points: float, formula_context: FormulaContext = null` ) |
| `Dictionary` | [apply_effect](#method-apply-effect)( `stats_component: StatsComponent, stat_points: float, context: Dictionary = {}` ) |
| `Dictionary` | [get_preview_info](#method-get-preview-info)( `stat_points: float` ) |
| `String` | [get_short_description](#method-get-short-description)() |
| `String` | [get_tooltip_text](#method-get-tooltip-text)( `stat_points: float` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

*Multiplier Settings*

### int target_stat_id = 0 {#prop-target-stat-id}

The stat to modify (can be regular stat or core stat)

### CalculationType calculation_type = CalculationType.ADD {#prop-calculation-type}

How the value changes the target stat: add, subtract, multiply, increase or decrease by a percentage, set

## Method descriptions

### EffectType get_effect_type() {#method-get-effect-type}

========== EFFECT IDENTIFICATION ==========

### String get_effect_category() {#method-get-effect-category}

The group of the effect in the editor.

### float calculate_effect_value( stat_points: float, formula_context: FormulaContext = null ) {#method-calculate-effect-value}

========== EFFECT VALUE CALCULATION ==========

### float calculate_bonus( current_target_value: float, stat_points: float, formula_context: FormulaContext = null ) {#method-calculate-bonus}

The bonus to add to the target stat for a number of stat points.

### Dictionary apply_effect( stats_component: StatsComponent, stat_points: float, context: Dictionary = &#123;&#125; ) {#method-apply-effect}

========== EFFECT APPLICATION ==========

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

========== DISPLAY ==========

### String get_short_description() {#method-get-short-description}

A one line text about what the effect does.

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

The tooltip text of the effect for a number of stat points.

### Array[Dictionary] validate() {#method-validate}

========== VALIDATION ==========


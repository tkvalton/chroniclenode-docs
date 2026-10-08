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

Override in child classes to return effect type name *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_effect_category() {#method-get-effect-category}

Override in child classes to return category *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### float calculate_effect_value( stat_points: float, formula_context: FormulaContext = null ) {#method-calculate-effect-value}

*No description yet.*

### float calculate_bonus( current_target_value: float, stat_points: float, formula_context: FormulaContext = null ) {#method-calculate-bonus}

*No description yet.*

### Dictionary apply_effect( stats_component: StatsComponent, stat_points: float, context: Dictionary = {} ) {#method-apply-effect}

Main method to apply this effect - OVERRIDE IN CHILD CLASSES Returns dictionary with effect results *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

*No description yet.*

### String get_short_description() {#method-get-short-description}

Override in child classes for a one-line summary of what this effect does *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validate this effect's configuration - override in child classes *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PoolModifierStatEffect

**Inherits:** [StatEffect](/advanced/entity-stats/stat-effects/stat-effect) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Effect that modifies pool properties (max value, overfill, generation, etc.) Each effect modifies ONE property - add multiple effects to modify multiple properties

## Properties

| | | |
|---|---|---|
| `int` | [target_pool_id](#prop-target-pool-id) | `0` |
| `PoolProperty` | [pool_property](#prop-pool-property) | `PoolProperty.MAX_VALUE` |
| `CalculationType` | [calculation_type](#prop-calculation-type) | `CalculationType.ADD` |

## Methods

| | |
|---|---|
| `EffectType` | [get_effect_type](#method-get-effect-type)() |
| `String` | [get_effect_category](#method-get-effect-category)() |
| `bool` | [affects_pool](#method-affects-pool)( `pool_id: int` ) |
| `String` | [get_property_name](#method-get-property-name)() |
| `bool` | [is_capacity_property](#method-is-capacity-property)() |
| `bool` | [is_generation_property](#method-is-generation-property)() |
| `bool` | [is_overfill_property](#method-is-overfill-property)() |
| `float` | [calculate_effect_value](#method-calculate-effect-value)( `stat_points: float, formula_context: FormulaContext = null` ) |
| `float` | [modify](#method-modify)( `base_value: float, stat_points: float, formula_context: FormulaContext = null` ) |
| `bool` | [is_supported_property](#method-is-supported-property)() |
| `Dictionary` | [get_preview_info](#method-get-preview-info)( `stat_points: float` ) |
| `String` | [get_short_description](#method-get-short-description)() |
| `String` | [get_tooltip_text](#method-get-tooltip-text)( `stat_points: float` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum PoolProperty {#enum-poolproperty}

The options of pool property: max value, overfill max, negative max, overfill decay rate, gen rate, gen value.

- **MAX_VALUE** = `0`
- **OVERFILL_MAX** = `1`
- **NEGATIVE_MAX** = `2`
- **OVERFILL_DECAY_RATE** = `3`
- **GEN_RATE** = `4`

## Property descriptions

*Pool Target*

### int target_pool_id = 0 {#prop-target-pool-id}

Which pool to modify

### PoolProperty pool_property = PoolProperty.MAX_VALUE {#prop-pool-property}

Which property to modify

*Modification Settings*

### CalculationType calculation_type = CalculationType.ADD {#prop-calculation-type}

How the value changes the property: add, subtract, multiply, increase or decrease by a percentage, set

## Method descriptions

### EffectType get_effect_type() {#method-get-effect-type}

========== EFFECT IDENTIFICATION ==========

### String get_effect_category() {#method-get-effect-category}

The group of the effect in the editor.

### bool affects_pool( pool_id: int ) {#method-affects-pool}

========== TARGET VALIDATION ==========

### String get_property_name() {#method-get-property-name}

========== PROPERTY HELPERS ==========

### bool is_capacity_property() {#method-is-capacity-property}

Does the effect change the capacity of the pool (it is worked out again when the equipment changes)?

### bool is_generation_property() {#method-is-generation-property}

Does the effect change how the pool fills by itself?

### bool is_overfill_property() {#method-is-overfill-property}

Does the effect change the overfill of the pool?

### float calculate_effect_value( stat_points: float, formula_context: FormulaContext = null ) {#method-calculate-effect-value}

========== EFFECT VALUE CALCULATION ==========

### float modify( base_value: float, stat_points: float, formula_context: FormulaContext = null ) {#method-modify}

The property's new value for `stat_points`, starting from `base_value` (the pool's base max, or the generation rate / value the pool definition declares). The calculation type decides how: Add 10, Increase by 10 %, ... StatsComponent adds the results of all effects up (see _update_pool_effects)

### bool is_supported_property() {#method-is-supported-property}

True for the properties the stats component applies to a pool instance. The three overfill / negative limits live on the shared PoolDefinition, so a stat cannot change them for one entity

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

========== DISPLAY ==========

### String get_short_description() {#method-get-short-description}

A one line text about what the effect does.

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

The tooltip text of the effect for a number of stat points.

### Array[Dictionary] validate() {#method-validate}

========== VALIDATION ==========


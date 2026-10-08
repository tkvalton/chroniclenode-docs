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

Override in child classes to return effect type name *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_effect_category() {#method-get-effect-category}

Override in child classes to return category *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### bool affects_pool( pool_id: int ) {#method-affects-pool}

*No description yet.*

### String get_property_name() {#method-get-property-name}

*No description yet.*

### bool is_capacity_property() {#method-is-capacity-property}

*No description yet.*

### bool is_generation_property() {#method-is-generation-property}

*No description yet.*

### bool is_overfill_property() {#method-is-overfill-property}

*No description yet.*

### float calculate_effect_value( stat_points: float, formula_context: FormulaContext = null ) {#method-calculate-effect-value}

*No description yet.*

### float modify( base_value: float, stat_points: float, formula_context: FormulaContext = null ) {#method-modify}

The property's new value for `stat_points`, starting from `base_value` (the pool's base max, or the generation rate / value the pool definition declares). The calculation type decides how: Add 10, Increase by 10 %, ... StatsComponent adds the results of all effects up (see _update_pool_effects)

### bool is_supported_property() {#method-is-supported-property}

True for the properties the stats component applies to a pool instance. The three overfill / negative limits live on the shared PoolDefinition, so a stat cannot change them for one entity

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

*No description yet.*

### String get_short_description() {#method-get-short-description}

Override in child classes for a one-line summary of what this effect does *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validate this effect's configuration - override in child classes *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*


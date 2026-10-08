<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityModifierStatEffect

**Inherits:** [StatEffect](/advanced/entity-stats/stat-effects/stat-effect) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Effect that modifies ability properties (cooldown, cost, gain) Each effect modifies ONE property - add multiple effects to modify multiple properties

## Properties

| | | |
|---|---|---|
| `AbilityFilterType` | [filter_type](#prop-filter-type) | `AbilityFilterType.ALL_ABILITIES` |
| `int` | [filter_value](#prop-filter-value) | `0` |
| `Array[int]` | [ability_ids](#prop-ability-ids) | `[]` |
| `AbilityProperty` | [ability_property](#prop-ability-property) | `AbilityProperty.COOLDOWN_DURATION` |
| `CalculationType` | [calculation_type](#prop-calculation-type) | `CalculationType.PERCENTAGE_DECREASE` |

## Methods

| | |
|---|---|
| `EffectType` | [get_effect_type](#method-get-effect-type)() |
| `String` | [get_effect_category](#method-get-effect-category)() |
| `bool` | [affects_ability](#method-affects-ability)( `ability_def: AbilityDefinition` ) |
| `String` | [get_property_name](#method-get-property-name)() |
| `bool` | [is_cooldown_property](#method-is-cooldown-property)() |
| `bool` | [is_cost_property](#method-is-cost-property)() |
| `bool` | [is_gain_property](#method-is-gain-property)() |
| `float` | [calculate_effect_value](#method-calculate-effect-value)( `stat_points: float` ) |
| `Dictionary` | [apply_to_ability](#method-apply-to-ability)( `ability_def: AbilityDefinition, stat_points: float` ) |
| `Dictionary` | [get_preview_info](#method-get-preview-info)( `stat_points: float` ) |
| `String` | [get_short_description](#method-get-short-description)() |
| `String` | [get_tooltip_text](#method-get-tooltip-text)( `stat_points: float` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_property_key](#method-get-property-key)() |

## Enumerations

### enum AbilityProperty {#enum-abilityproperty}

- **COOLDOWN_DURATION** = `0`
- **COST_AMOUNT** = `1`

### enum AbilityFilterType {#enum-abilityfiltertype}

- **ALL_ABILITIES** = `0`
- **SPECIFIC_ABILITIES** = `1`
- **ABILITY_SCHOOL** = `2`
- **ALL_EXCEPT_BLACKLIST** = `3`

## Property descriptions

*Ability Target*

### AbilityFilterType filter_type = AbilityFilterType.ALL_ABILITIES {#prop-filter-type}

Which abilities are changed: all, specific ones, one school, or all but some

### int filter_value = 0 {#prop-filter-value}

ID for ABILITY_SCHOOL

### Array[int] ability_ids = [] {#prop-ability-ids}

Ability IDs for SPECIFIC_ABILITIES or ALL_EXCEPT_BLACKLIST

*Property Modification*

### AbilityProperty ability_property = AbilityProperty.COOLDOWN_DURATION {#prop-ability-property}

What is changed: the cooldown, the cost or the resource gain

### CalculationType calculation_type = CalculationType.PERCENTAGE_DECREASE {#prop-calculation-type}

How the value is applied to the property (a percentage decrease shortens a cooldown)

## Method descriptions

### EffectType get_effect_type() {#method-get-effect-type}

Override in child classes to return effect type name *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_effect_category() {#method-get-effect-category}

Override in child classes to return category *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### bool affects_ability( ability_def: AbilityDefinition ) {#method-affects-ability}

*No description yet.*

### String get_property_name() {#method-get-property-name}

*No description yet.*

### bool is_cooldown_property() {#method-is-cooldown-property}

*No description yet.*

### bool is_cost_property() {#method-is-cost-property}

*No description yet.*

### bool is_gain_property() {#method-is-gain-property}

*No description yet.*

### float calculate_effect_value( stat_points: float ) {#method-calculate-effect-value}

*No description yet.*

### Dictionary apply_to_ability( ability_def: AbilityDefinition, stat_points: float ) {#method-apply-to-ability}

*No description yet.*

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

*No description yet.*

### String get_short_description() {#method-get-short-description}

Override in child classes for a one-line summary of what this effect does *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validate this effect's configuration - override in child classes *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_property_key() {#method-get-property-key}

The key of the changed property in an ability's modifier set


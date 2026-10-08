<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ReactiveDamageStatEffect

**Inherits:** [StatEffect](/advanced/entity-stats/stat-effects/stat-effect) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Reactive damage effect - deals damage back to the attacker of a hit the owner received Examples: Damage reflection, Spiked Armor, Retaliation, Reflect Damage

## Description

The stat points go through the formula slots (StatEffect). For FLAT the formula value is the damage; for PERCENT_OF_DAMAGE it is a percentage of the hit; HYBRID is the formula's flat damage plus a fixed percentage of the hit (`percent_of_damage`). The reflection goes through the real damage pipeline (CombatReactions.reflect) as the owner's own attack, so the owner's damage-done modifiers and critical strikes apply, and it is one reaction deeper than the hit it answers (see `max_reflect_chain`).

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_type](#prop-trigger-type) | `TriggerType.ON_DAMAGE_TAKEN` |
| `String` | [required_trigger_tag](#prop-required-trigger-tag) | `""` |
| `DamageScaling` | [damage_scaling](#prop-damage-scaling) | `DamageScaling.HYBRID` |
| `float` | [percent_of_damage](#prop-percent-of-damage) | `10.0` |
| `CombatOptions.BasisChoice` | [basis](#prop-basis) | `CombatOptions.BasisChoice.PROJECT_DEFAULT` |
| `int` | [damage_type](#prop-damage-type) | `0` |
| `bool` | [can_be_avoided](#prop-can-be-avoided) | `false` |
| `float` | [maximum_per_hit](#prop-maximum-per-hit) | `0.0` |
| `int` | [max_reflect_chain](#prop-max-reflect-chain) | `-1` |

## Methods

| | |
|---|---|
| `EffectType` | [get_effect_type](#method-get-effect-type)() |
| `String` | [get_effect_category](#method-get-effect-category)() |
| `bool` | [matches_hit](#method-matches-hit)( `result: DamageResult` ) |
| `float` | [calculate_damage_amount](#method-calculate-damage-amount)( `stat_points: float, result: DamageResult, formula_context: FormulaContext = null` ) |
| `int` | [get_chain_limit](#method-get-chain-limit)() |
| `String` | [get_trigger_description](#method-get-trigger-description)() |
| `String` | [get_scaling_description](#method-get-scaling-description)() |
| `String` | [get_short_description](#method-get-short-description)() |
| `String` | [get_detailed_description](#method-get-detailed-description)( `stat_points: float` ) |
| `Dictionary` | [get_preview_info](#method-get-preview-info)( `stat_points: float` ) |
| `String` | [get_tooltip_text](#method-get-tooltip-text)( `stat_points: float` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum TriggerType {#enum-triggertype}

- **ON_DAMAGE_TAKEN** = `0`
- **ON_BLOCK** = `1`

### enum DamageScaling {#enum-damagescaling}

- **FLAT** = `0`
- **PERCENT_OF_DAMAGE** = `1`

## Property descriptions

*Trigger Settings*

### TriggerType trigger_type = TriggerType.ON_DAMAGE_TAKEN {#prop-trigger-type}

When the damage is dealt back: when the entity takes damage, blocks, or is hit

### String required_trigger_tag = "" {#prop-required-trigger-tag}

ON_BLOCK only: the tag of the mitigate trigger that counts as a block (empty = any mitigate trigger)

*Damage Settings*

### DamageScaling damage_scaling = DamageScaling.HYBRID {#prop-damage-scaling}

What the value means: the damage itself, a percentage of the hit, or the value plus a fixed percentage of the hit

### float percent_of_damage = 10.0 {#prop-percent-of-damage}

HYBRID only: the fixed percentage of the hit added to the formula's flat damage

### CombatOptions.BasisChoice basis = CombatOptions.BasisChoice.PROJECT_DEFAULT {#prop-basis}

Which number of the hit the percentage is taken from. Project default: GameplayConfig, Damage Results

*Damage Properties*

### int damage_type = 0 {#prop-damage-type}

The type of damage to deal (0 = the type of the hit being reflected)

### bool can_be_avoided = false {#prop-can-be-avoided}

Whether the reflection can be dodged or blocked by the attacker

### float maximum_per_hit = 0.0 {#prop-maximum-per-hit}

Most one reflection can deal (0 = no limit)

### int max_reflect_chain = -1 {#prop-max-reflect-chain}

How many reactions deep a hit may be and still be reflected. 1: a normal hit is reflected, a reflection is never reflected again. -1 = the project default (GameplayConfig, Damage Results)

## Method descriptions

### EffectType get_effect_type() {#method-get-effect-type}

Override in child classes to return effect type name *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_effect_category() {#method-get-effect-category}

Override in child classes to return category *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### bool matches_hit( result: DamageResult ) {#method-matches-hit}

Does the resolved hit (received by the owner) trigger this effect?

### float calculate_damage_amount( stat_points: float, result: DamageResult, formula_context: FormulaContext = null ) {#method-calculate-damage-amount}

How much damage to deal back for `result` (the hit received) with the owner's stat points

### int get_chain_limit() {#method-get-chain-limit}

*No description yet.*

### String get_trigger_description() {#method-get-trigger-description}

*No description yet.*

### String get_scaling_description() {#method-get-scaling-description}

*No description yet.*

### String get_short_description() {#method-get-short-description}

Override in child classes for a one-line summary of what this effect does *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_detailed_description( stat_points: float ) {#method-get-detailed-description}

*No description yet.*

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

*No description yet.*

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validate this effect's configuration - override in child classes *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*


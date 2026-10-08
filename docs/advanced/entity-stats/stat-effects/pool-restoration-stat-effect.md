<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PoolRestorationStatEffect

**Inherits:** [StatEffect](/advanced/entity-stats/stat-effects/stat-effect) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Reactive pool restoration effect - reacts to the owner's resolved hits and kills Examples: Life Steal, Mana on Hit, Health on Kill

## Description

The stat points go through the formula slots (StatEffect) and the value they give is read according to `scaling_type`: a flat amount, a percentage of the hit, or a percentage of the pool's maximum. Reactions go through the real pipelines (CombatReactions.leech), so healing modifiers, the combat log and the result signals apply.

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_type](#prop-trigger-type) | `TriggerType.ON_DAMAGE_DEALT` |
| `int` | [target_pool_id](#prop-target-pool-id) | `0` |
| `ScalingType` | [scaling_type](#prop-scaling-type) | `ScalingType.FLAT` |
| `CombatOptions.BasisChoice` | [basis](#prop-basis) | `CombatOptions.BasisChoice.PROJECT_DEFAULT` |
| `float` | [maximum_per_trigger](#prop-maximum-per-trigger) | `0.0` |
| `int` | [damage_type_filter](#prop-damage-type-filter) | `0` |

## Methods

| | |
|---|---|
| `EffectType` | [get_effect_type](#method-get-effect-type)() |
| `String` | [get_effect_category](#method-get-effect-category)() |
| `bool` | [matches_trigger](#method-matches-trigger)( `event_type: String` ) |
| `bool` | [accepts_hit](#method-accepts-hit)( `result: DamageResult` ) |
| `float` | [calculate_restoration_amount](#method-calculate-restoration-amount)( `stat_points: float, result: DamageResult = null, pool_max: float = 0.0, formula_context: FormulaContext = null` ) |
| `String` | [get_trigger_description](#method-get-trigger-description)() |
| `String` | [get_scaling_description](#method-get-scaling-description)() |
| `String` | [get_short_description](#method-get-short-description)() |
| `Dictionary` | [get_preview_info](#method-get-preview-info)( `stat_points: float` ) |
| `String` | [get_tooltip_text](#method-get-tooltip-text)( `stat_points: float` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum TriggerType {#enum-triggertype}

- **ON_DAMAGE_DEALT** = `0`
- **ON_DAMAGE_TAKEN** = `1`

### enum ScalingType {#enum-scalingtype}

- **FLAT** = `0`
- **PERCENT_OF_DAMAGE** = `1`

## Property descriptions

*Trigger Settings*

### TriggerType trigger_type = TriggerType.ON_DAMAGE_DEALT {#prop-trigger-type}

When the pool is restored: when the entity deals damage, takes damage or kills

### int target_pool_id = 0 {#prop-target-pool-id}

Which pool to restore (Health, Mana, etc.)

*Restoration Settings*

### ScalingType scaling_type = ScalingType.FLAT {#prop-scaling-type}

What the value means: an amount, a percentage of the hit (leech) or a percentage of the pool maximum

### CombatOptions.BasisChoice basis = CombatOptions.BasisChoice.PROJECT_DEFAULT {#prop-basis}

Which number of the hit a percentage of damage is taken from. Project default: GameplayConfig, Damage Results

### float maximum_per_trigger = 0.0 {#prop-maximum-per-trigger}

Most one trigger can restore (0 = no limit)

*Restrictions*

### int damage_type_filter = 0 {#prop-damage-type-filter}

Only react to hits of this damage type (0 = any)

## Method descriptions

### EffectType get_effect_type() {#method-get-effect-type}

Override in child classes to return effect type name *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### String get_effect_category() {#method-get-effect-category}

Override in child classes to return category *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### bool matches_trigger( event_type: String ) {#method-matches-trigger}

*No description yet.*

### bool accepts_hit( result: DamageResult ) {#method-accepts-hit}

Does the hit pass this effect's restrictions?

### float calculate_restoration_amount( stat_points: float, result: DamageResult = null, pool_max: float = 0.0, formula_context: FormulaContext = null ) {#method-calculate-restoration-amount}

How much to restore. `result` is the hit reacted to (null for a kill), `pool_max` the target pool's maximum

### String get_trigger_description() {#method-get-trigger-description}

*No description yet.*

### String get_scaling_description() {#method-get-scaling-description}

*No description yet.*

### String get_short_description() {#method-get-short-description}

Override in child classes for a one-line summary of what this effect does *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*

### Dictionary get_preview_info( stat_points: float ) {#method-get-preview-info}

*No description yet.*

### String get_tooltip_text( stat_points: float ) {#method-get-tooltip-text}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validate this effect's configuration - override in child classes *(from [StatEffect](/advanced/entity-stats/stat-effects/stat-effect))*


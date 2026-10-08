<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DamageReflectEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

DamageReflectEffect reflects a portion of damage taken back to the attacker.

## Properties

| | | |
|---|---|---|
| `float` | [percentage_of_damage](#prop-percentage-of-damage) | `50.0` |
| `int` | [maximum_damage_per_reflect](#prop-maximum-damage-per-reflect) | `0` |
| `int` | [total_damage_to_reflect](#prop-total-damage-to-reflect) | `0` |
| `int` | [reflect_damage_type](#prop-reflect-damage-type) | `0` |
| `bool` | [can_reflect_be_avoided](#prop-can-reflect-be-avoided) | `true` |
| `CombatOptions.BasisChoice` | [reflect_basis](#prop-reflect-basis) | `CombatOptions.BasisChoice.PROJECT_DEFAULT` |
| `int` | [max_reflect_chain](#prop-max-reflect-chain) | `-1` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `float` | [get_damage_reflected](#method-get-damage-reflected)( `effect_instance: EffectInstance` ) |
| `int` | [get_remaining_reflect_capacity](#method-get-remaining-reflect-capacity)( `effect_instance: EffectInstance` ) |
| `float` | [get_reflection_preview](#method-get-reflection-preview)( `base_damage: float` ) |
| `bool` | [is_reflect_active](#method-is-reflect-active)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

### float percentage_of_damage = 50.0 {#prop-percentage-of-damage}

The percent of damage to reflect back

### int maximum_damage_per_reflect = 0 {#prop-maximum-damage-per-reflect}

The maximum amount of damage that can be reflected per hit (0 = no limit)

### int total_damage_to_reflect = 0 {#prop-total-damage-to-reflect}

The total amount of damage that can be reflected from effect (0 = no limit)

### int reflect_damage_type = 0 {#prop-reflect-damage-type}

Damage type for reflected damage (empty = use original type)

### bool can_reflect_be_avoided = true {#prop-can-reflect-be-avoided}

Whether reflected damage can be avoided by the attacker

### CombatOptions.BasisChoice reflect_basis = CombatOptions.BasisChoice.PROJECT_DEFAULT {#prop-reflect-basis}

Which number of the hit the reflection is taken from. HEALTH_ONLY reflects only what reached health (not what shields absorbed); AFTER_TAKEN also counts the shield-absorbed part. Project default: GameplayConfig, Damage Results

### int max_reflect_chain = -1 {#prop-max-reflect-chain}

How many reactions deep a hit may be and still be reflected. 1: a normal hit is reflected, a reflection is never reflected again. Higher values let reflections ping-pong between two damage reflection users that many times. -1 = the project default (GameplayConfig, Damage Results)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect, setting up damage reflection

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, cleaning up tracking data

### float get_damage_reflected( effect_instance: EffectInstance ) {#method-get-damage-reflected}

Gets the current amount of damage reflected for a specific effect instance

### int get_remaining_reflect_capacity( effect_instance: EffectInstance ) {#method-get-remaining-reflect-capacity}

Gets the remaining damage that can be reflected for a specific effect instance

### float get_reflection_preview( base_damage: float ) {#method-get-reflection-preview}

Calculate potential reflection amount for preview/tooltip purposes

### bool is_reflect_active( effect_instance: EffectInstance ) {#method-is-reflect-active}

Check if damage reflection effect is still active and has capacity

### String get_effect_description() {#method-get-effect-description}

Generates effect description for tooltips

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*


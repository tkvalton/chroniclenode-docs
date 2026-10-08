<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EqualizeDamageAreaEffect

**Inherits:** [EqualizeAreaEffect](/advanced/abilities-and-effects/effects-area/equalize-area-effect) < [MinimumApplicationAreaEffect](/advanced/abilities-and-effects/effects-area/minimum-application-area-effect) < [AreaEffect](/advanced/abilities-and-effects/effects-area/area-effect) < [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

EqualizeDamageAreaEffect distributes damage among all targets in area.

## Properties

| | | |
|---|---|---|
| `int` | [damage_type](#prop-damage-type) | `0` |
| `float` | [base_damage](#prop-base-damage) | `1.0` |
| `float` | [weapon_damage_percentage](#prop-weapon-damage-percentage) | `0.0` |
| `bool` | [can_be_avoided](#prop-can-be-avoided) | `true` |

## Methods

| | |
|---|---|
| `void` | [apply_equalization_to_targets](#method-apply-equalization-to-targets)( `effect_instance: EffectInstance, targets: Array[Variant]` ) |
| `Dictionary` | [get_damage_distribution_preview](#method-get-damage-distribution-preview)( `effect_instance: EffectInstance` ) |
| `Dictionary` | [get_detailed_damage_preview](#method-get-detailed-damage-preview)( `effect_instance: EffectInstance` ) |
| `bool` | [has_meaningful_damage_targets](#method-has-meaningful-damage-targets)( `effect_instance: EffectInstance, min_damage: float = 1.0` ) |
| `Array[Variant]` | [get_targets_that_would_take_damage](#method-get-targets-that-would-take-damage)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_mode_description](#method-get-mode-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Damage Settings*

### int damage_type = 0 {#prop-damage-type}

Damage Type for the effect

### float base_damage = 1.0 {#prop-base-damage}

The base damage that should be dealt

### float weapon_damage_percentage = 0.0 {#prop-weapon-damage-percentage}

Percentage of weapon damage that should be added to damage done

### bool can_be_avoided = true {#prop-can-be-avoided}

If the effect can be avoided

## Method descriptions

### void apply_equalization_to_targets( effect_instance: EffectInstance, targets: Array[Variant] ) {#method-apply-equalization-to-targets}

Implement the specific damage distribution logic using CombatSystem

### Dictionary get_damage_distribution_preview( effect_instance: EffectInstance ) {#method-get-damage-distribution-preview}

Get damage distribution preview for UI/tooltips

### Dictionary get_detailed_damage_preview( effect_instance: EffectInstance ) {#method-get-detailed-damage-preview}

Get detailed damage breakdown for each target

### bool has_meaningful_damage_targets( effect_instance: EffectInstance, min_damage: float = 1.0 ) {#method-has-meaningful-damage-targets}

Check if any targets would actually take meaningful damage

### Array[Variant] get_targets_that_would_take_damage( effect_instance: EffectInstance ) {#method-get-targets-that-would-take-damage}

Get only targets that would take damage (useful for EQUALIZE_CURRENT mode)

### String get_effect_description() {#method-get-effect-description}

*Overrides this function of [EqualizeAreaEffect](/advanced/abilities-and-effects/effects-area/equalize-area-effect).*

### String get_mode_description() {#method-get-mode-description}

Get mode-specific description

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [EqualizeAreaEffect](/advanced/abilities-and-effects/effects-area/equalize-area-effect).*


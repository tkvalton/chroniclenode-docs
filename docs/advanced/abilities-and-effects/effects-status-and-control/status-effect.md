<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatusEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

StatusEffect applies a status condition (stun, root, silence, disarm, cripple ...) to the target entity. The condition itself is a StatusEffectDefinition (database "status_effect"): its type decides what the entity cannot do, its diminishing returns shorten repeated applications, its immunity settings can end them for a while, and it can break when a hit is big enough. While this effect is active the target's EffectsComponent counts the status type, which is what Entity.is_incapacitated() / is_silenced() / is_rooted() ... answer from, so ability checks, movement and the entity states work from the same source.

## Properties

| | | |
|---|---|---|
| `int` | [status_effect_id](#prop-status-effect-id) | `0` |
| `float` | [movement_speed_reduction](#prop-movement-speed-reduction) | `0.0` |
| `AnimationSelectionStatusEffect` | [status_animation](#prop-status-animation) |  |
| `bool` | [play_animations](#prop-play-animations) | `true` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [restore_after_load](#method-restore-after-load)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `bool` | [is_animation_active](#method-is-animation-active)( `effect_instance: EffectInstance` ) |
| `String` | [get_animation_phase](#method-get-animation-phase)( `effect_instance: EffectInstance` ) |
| `Dictionary` | [validate_animation_exists](#method-validate-animation-exists)( `entity_type: String` ) |
| `bool` | [is_status_active](#method-is-status-active)( `effect_instance: EffectInstance` ) |
| `float` | [get_status_remaining_duration](#method-get-status-remaining-duration)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Constants

- `Array[String]` **INTERRUPTING_TYPES** = `["Incapacitate", "Silence", "Flee", "Disorient"]` - Status types that end the cast the target is making when they land

## Property descriptions

*Status Effect Settings*

### int status_effect_id = 0 {#prop-status-effect-id}

The status effect (database "status_effect") to apply

### float movement_speed_reduction = 0.0 {#prop-movement-speed-reduction}

Movement speed reduction amount (for effects like Cripple), 0.3 = 30 % slower

*Animation Settings*

### AnimationSelectionStatusEffect status_animation {#prop-status-animation}

Animation selection for three-phase system

### bool play_animations = true {#prop-play-animations}

Whether to play status effect animations

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the status: immunity and diminishing returns decide whether it lands and for how long

### void restore_after_load( effect_instance: EffectInstance ) {#method-restore-after-load}

A loaded status comes back with what was left of it: no new application (the diminishing returns counters are saved on their own)

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, removing the status effect

### bool is_animation_active( effect_instance: EffectInstance ) {#method-is-animation-active}

Check if animations are currently playing for this status effect

### String get_animation_phase( effect_instance: EffectInstance ) {#method-get-animation-phase}

Get current animation phase

### Dictionary validate_animation_exists( entity_type: String ) {#method-validate-animation-exists}

Validate that the status effect animation exists for the target entity

### bool is_status_active( effect_instance: EffectInstance ) {#method-is-status-active}

Check if the status effect is currently active on the target

### float get_status_remaining_duration( effect_instance: EffectInstance ) {#method-get-status-remaining-duration}

Get the remaining duration of the status effect

### String get_effect_description() {#method-get-effect-description}

Get the effect description for tooltips

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GravityEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modifies the gravity applied to the target entity

## Properties

| | | |
|---|---|---|
| `float` | [gravity_value](#prop-gravity-value) | `9.8 ## The gravity value to apply (default: 9.8, 0 = floa...` |
| `bool` | [use_preset](#prop-use-preset) | `false ## Use a preset instead of custom value` |
| `GravityPreset` | [gravity_preset](#prop-gravity-preset) | `2` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum GravityPreset {#enum-gravitypreset}

- **ZeroGravity** = `0`
- **LowGravity** = `1`
- **NormalGravity** = `2`
- **HighGravity** = `3`
- **AntiGravity** = `4`

## Property descriptions

### float gravity_value = 9.8 ## The gravity value to apply (default: 9.8, 0 = floatin {#prop-gravity-value}

*No description yet.*

*Presets*

### bool use_preset = false ## Use a preset instead of custom value {#prop-use-preset}

*No description yet.*

### GravityPreset gravity_preset = 2 {#prop-gravity-preset}

*No description yet.*

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Apply gravity modification to the target

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

When effect is removed, restore original gravity

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validation


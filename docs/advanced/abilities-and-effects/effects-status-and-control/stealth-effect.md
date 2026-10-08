<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StealthEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

StealthEffect grants stealth/invisibility to target

## Properties

| | | |
|---|---|---|
| `bool` | [break_on_action](#prop-break-on-action) | `true` |
| `bool` | [break_on_damage](#prop-break-on-damage) | `true` |
| `float` | [movement_speed_modifier](#prop-movement-speed-modifier) | `0.0` |
| `float` | [break_delay_duration](#prop-break-delay-duration) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Stealth Settings*

### bool break_on_action = true {#prop-break-on-action}

Break stealth on offensive actions

### bool break_on_damage = true {#prop-break-on-damage}

Break stealth when taking damage

### float movement_speed_modifier = 0.0 {#prop-movement-speed-modifier}

Speed change while stealthed (can be positive or negative)

### float break_delay_duration = 0.0 {#prop-break-delay-duration}

Delay before stealth actually breaks (seconds)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect, granting stealth

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, removing stealth

### String get_effect_description() {#method-get-effect-description}

Get the effect description for tooltips

### String get_editor_description() {#method-get-editor-description}

*No description yet.*


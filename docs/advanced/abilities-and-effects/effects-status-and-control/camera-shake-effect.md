<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CameraShakeEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

CameraShakeEffect shakes the camera of the player: a hit that rocks the screen, the blast of a spell, the stomp of a giant, the rumble of a quake that lasts, turbulence while flying. The shake dies away by itself (it is a "trauma": several shakes add up, the picture moves by the square of it). The player's Camera shake setting scales it, 0 turns it off. See docs: World &gt; Camera effects.

## Description

Where it shakes: with no **Radius** the camera shakes when the TARGET is the character the player controls (a hit on you). With a radius it shakes for the player's camera whoever the target is, weaker the farther the target is from the camera and not at all beyond the radius (an explosion on an NPC, a giant walking by). A periodic effect shakes at each tick.

## Properties

| | | |
|---|---|---|
| `ShakeMode` | [shake_mode](#prop-shake-mode) | `ShakeMode.ONCE` |
| `float` | [amount](#prop-amount) | `0.5` |
| `float` | [shake_duration](#prop-shake-duration) | `0.5` |
| `float` | [radius](#prop-radius) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum ShakeMode {#enum-shakemode}

- **ONCE** = `0`
- **WHILE_IT_LASTS** = `1`

## Property descriptions

*Shake Settings*

### ShakeMode shake_mode = ShakeMode.ONCE {#prop-shake-mode}

One shake, or one that lasts as long as the effect

### float amount = 0.5 {#prop-amount}

How hard the shake is: 0.2 a bump, 0.5 a hit, 1 an explosion

### float shake_duration = 0.5 {#prop-shake-duration}

Seconds a shake takes to die away

### float radius = 0.0 {#prop-radius}

Metres from the target at which the shake is gone (weaker the farther the camera is). 0 = only when the target is the player's character

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Shakes the camera

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### bool is_one_off_application() {#method-is-one-off-application}

A single shake is not repeated when a save is loaded (a shake that lasts comes back)

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

### Array[Dictionary] validate() {#method-validate}

Validation


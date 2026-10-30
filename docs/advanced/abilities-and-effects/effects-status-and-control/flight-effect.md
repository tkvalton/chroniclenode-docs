<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FlightEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

FlightEffect lets its target fly: it floats in the air and moves in 3D the way a swimmer moves in the water (jump goes up, crouch goes down, the camera pitch steers; an NPC goes straight at its goal). A spell, a potion, an aura, a mount-less set of wings, or a trait of a flying creature: give the effect a duration, or make it persistent and put it on an entity that always flies (a passive ability, a template). A Land effect brings the target down again; when the flight ends the entity falls and lands as it does after any fall.

## Description

How the entity flies is its **Flight logic** (see FlightLogic): the default one floats. Make a logic of your own for a momentum flight, a glide or a wobble. What it looks like: the entity uses its flying animations (the fly set of its animation map: each falls back to the swimming one when empty), or the **Animation override** names one animation that plays the whole time the effect lasts (a floating pose), whichever way the entity moves.

A mount that flies and a flight effect can be on at once: the mount decides while it is ridden, and the flight is back when the rider gets off.

## Properties

| | | |
|---|---|---|
| `FlightLogic` | [flight_logic](#prop-flight-logic) |  |
| `float` | [speed_multiplier](#prop-speed-multiplier) | `1.0` |
| `float` | [vertical_speed](#prop-vertical-speed) | `5.0` |
| `bool` | [follows_camera_pitch](#prop-follows-camera-pitch) | `true` |
| `bool` | [hover_when_idle](#prop-hover-when-idle) | `true` |
| `int` | [priority](#prop-priority) | `5` |
| `bool` | [use_flying_animations](#prop-use-flying-animations) | `true` |
| `String` | [animation_override](#prop-animation-override) | `""` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

*Flight Settings*

### FlightLogic flight_logic {#prop-flight-logic}

How the entity flies (see FlightLogic). Empty = it floats

### float speed_multiplier = 1.0 {#prop-speed-multiplier}

How fast it moves compared with how fast it moves on the ground (1 = as fast as it runs)

### float vertical_speed = 5.0 {#prop-vertical-speed}

How fast it goes up and down, in metres per second

### bool follows_camera_pitch = true {#prop-follows-camera-pitch}

Does it go up when the camera looks up and it moves forward (and down when the camera looks down)? Off = only jump and crouch steer up and down

### bool hover_when_idle = true {#prop-hover-when-idle}

What it does when it gives no up or down input: on = it hangs where it is, off = it sinks slowly

### int priority = 5 {#prop-priority}

Which flight wins over another that is on at the same time (a flight effect is 5, a mount 10, a volume 0)

*Animation*

### bool use_flying_animations = true {#prop-use-flying-animations}

Play the flying animations of the entity (the fly set of its animation map: each one that is empty is the swimming one). Off = it uses the swimming ones

### String animation_override = "" {#prop-animation-override}

The name of one animation (in the animation folders of the entity) that plays instead of all the movement ones while the effect lasts, for a floating pose. Empty = none

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Takes the target into the air (once per instance, so two of these on one target end independently)

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Called when the effect ends: the entity comes down

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

### Array[Dictionary] validate() {#method-validate}

Validation


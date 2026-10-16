<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioProfileStack

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The audio profile that is on now. Audio zones and movement volumes tell it when the camera enters and leaves them; with several around the camera (a flooded cellar in a house) the one entered last decides, and when it is left the one before it comes back. The sound changes with a fade.

## Description

The profile is made of effects the stack puts on the buses (a low-pass filter, an amplifier for the volume offset, a reverb), so the volumes the player chose in the settings are never touched. The effects are taken off again when the profile is neutral for a bus.

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)( `source: Object, profile: AudioProfile` ) *static* |
| `void` | [leave](#method-leave)( `source: Object` ) *static* |
| `AudioProfile` | [get_active_profile](#method-get-active-profile)() *static* |
| `Dictionary` | [get_applied](#method-get-applied)( `bus: String` ) *static* |
| `bool` | [has_effects_on](#method-has-effects-on)( `bus: String` ) *static* |
| `void` | [reset](#method-reset)() *static* |

## Method descriptions

### void enter( source: Object, profile: AudioProfile ) {#method-enter}

The camera went inside a place with this profile (the source is the zone or volume)

### void leave( source: Object ) {#method-leave}

The camera left a place

### AudioProfile get_active_profile() {#method-get-active-profile}

The profile that decides now (the one entered last), or null

### Dictionary get_applied( bus: String ) {#method-get-applied}

What is applied to a bus right now (it moves during a fade): low_pass, volume_db and reverb

### bool has_effects_on( bus: String ) {#method-has-effects-on}

Is the sound of this bus changed now (an effect of the stack is on it)?

### void reset() {#method-reset}

Forgets every place and puts the sound back at once (a scene that is left)


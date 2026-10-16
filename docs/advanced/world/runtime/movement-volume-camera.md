<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementVolumeCamera

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The look the screen gets while the camera is inside a movement volume (underwater: a tint over the screen and fog; the sound is the business of AudioProfileStack). Volumes tell it when the camera enters and leaves; with several volumes around the camera (a pool inside a cave pool) the one entered last decides, and when it is left the one before it comes back. What the effect changed (fog, the sound) is put back when the last volume is left.

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)( `volume: MovementVolume` ) *static* |
| `void` | [leave](#method-leave)( `volume: MovementVolume` ) *static* |
| `MovementVolume` | [get_active_volume](#method-get-active-volume)() *static* |
| `bool` | [is_effect_on](#method-is-effect-on)() *static* |
| `Color` | [get_overlay_color](#method-get-overlay-color)() *static* |
| `void` | [reset](#method-reset)() *static* |

## Constants

- `int` **OVERLAY_LAYER** = `90`

## Method descriptions

### void enter( volume: MovementVolume ) {#method-enter}

The camera went inside a volume

### void leave( volume: MovementVolume ) {#method-leave}

The camera left a volume

### MovementVolume get_active_volume() {#method-get-active-volume}

The volume that decides the look now (the one the camera entered last), or null when the camera is not in any

### bool is_effect_on() {#method-is-effect-on}

Is the underwater look on?

### Color get_overlay_color() {#method-get-overlay-color}

The tint on the screen now (transparent when there is none)

### void reset() {#method-reset}

Puts everything back as it was and forgets every volume (a scene that is left)


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionOneShot

**Inherits:** [VFXSelection](/advanced/assets/selections-vfx/vfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

OneShot VFX selection - fire-and-forget effects like explosions, impacts

## Properties

| | | |
|---|---|---|
| `VFXSelection.VfxLocation` | [location](#prop-location) | `VFXSelection.VfxLocation.BASE` |
| `float` | [delay_start](#prop-delay-start) | `0.0` |
| `bool` | [follow_target_on_death](#prop-follow-target-on-death) | `false` |

## Methods

| | |
|---|---|
| `Variant` | [prepare_target_for_vfx_type](#method-prepare-target-for-vfx-type)( `target: Variant, originator: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_vfx_type](#method-get-vfx-type)() |
| `String` | [get_vfx_name](#method-get-vfx-name)() |

## Property descriptions

### VFXSelection.VfxLocation location = VFXSelection.VfxLocation.BASE {#prop-location}

Where on the target the effect is placed.

### float delay_start = 0.0 {#prop-delay-start}

How many seconds to wait before the effect starts.

### bool follow_target_on_death = false {#prop-follow-target-on-death}

Continue following even if target dies

## Method descriptions

### Variant prepare_target_for_vfx_type( target: Variant, originator: Variant = null ) {#method-prepare-target-for-vfx-type}

OneShot VFX uses target as-is (no special preparation needed)

### String get_description() {#method-get-description}

A short text about the visual effect, for the editor.

### String get_vfx_type() {#method-get-vfx-type}

The kind of visual effect (beam, loop, one shot ...).

### String get_vfx_name() {#method-get-vfx-name}

The name of the visual effect that is picked.


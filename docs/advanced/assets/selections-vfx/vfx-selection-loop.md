<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionLoop

**Inherits:** [VFXSelection](/advanced/assets/selections-vfx/vfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Loop VFX selection - continuous effects like auras, channeling

## Properties

| | | |
|---|---|---|
| `VFXSelection.VfxLocation` | [location](#prop-location) | `VFXSelection.VfxLocation.BASE` |
| `bool` | [auto_stop_on_entity_death](#prop-auto-stop-on-entity-death) | `true` |

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

### bool auto_stop_on_entity_death = true {#prop-auto-stop-on-entity-death}

Stop loop VFX when attached entity dies

## Method descriptions

### Variant prepare_target_for_vfx_type( target: Variant, originator: Variant = null ) {#method-prepare-target-for-vfx-type}

Loop VFX uses target as-is (no special preparation needed)

### String get_description() {#method-get-description}

A short text about the visual effect, for the editor.

### String get_vfx_type() {#method-get-vfx-type}

The kind of visual effect (beam, loop, one shot ...).

### String get_vfx_name() {#method-get-vfx-name}

The name of the visual effect that is picked.


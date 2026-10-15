<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionTelegraph

**Inherits:** [VFXSelection](/advanced/assets/selections-vfx/vfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Telegraph VFX selection - warning/indicator effects for abilities

## Properties

| | | |
|---|---|---|
| `VFXTelegraph.TelegraphShape` | [telegraph_shape](#prop-telegraph-shape) | `VFXTelegraph.TelegraphShape.CIRCLE` |
| `Vector2` | [telegraph_size](#prop-telegraph-size) | `Vector2(5.0, 5.0)` |
| `Color` | [telegraph_color](#prop-telegraph-color) | `Color.RED` |
| `VFXTelegraph.TelegraphAttachment` | [attachment_type](#prop-attachment-type) | `VFXTelegraph.TelegraphAttachment.POINT` |
| `float` | [orientation_offset](#prop-orientation-offset) | `0.0` |

## Methods

| | |
|---|---|
| `Variant` | [prepare_target_for_vfx_type](#method-prepare-target-for-vfx-type)( `target: Variant, originator: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_vfx_type](#method-get-vfx-type)() |
| `String` | [get_vfx_name](#method-get-vfx-name)() |
| `Dictionary` | [get_telegraph_config](#method-get-telegraph-config)() |

## Property descriptions

### VFXTelegraph.TelegraphShape telegraph_shape = VFXTelegraph.TelegraphShape.CIRCLE {#prop-telegraph-shape}

The shape of the warning (a circle, a cone, a line ...).

### Vector2 telegraph_size = Vector2(5.0, 5.0) {#prop-telegraph-size}

X,Z for decal

### Color telegraph_color = Color.RED {#prop-telegraph-color}

The color of the warning.

### VFXTelegraph.TelegraphAttachment attachment_type = VFXTelegraph.TelegraphAttachment.POINT {#prop-attachment-type}

What the warning is attached to (a point, the user ...).

### float orientation_offset = 0.0 {#prop-orientation-offset}

Y rotation in degrees

## Method descriptions

### Variant prepare_target_for_vfx_type( target: Variant, originator: Variant = null ) {#method-prepare-target-for-vfx-type}

Telegraph VFX uses target as-is (no special preparation needed)

### String get_description() {#method-get-description}

A short text about the visual effect, for the editor.

### String get_vfx_type() {#method-get-vfx-type}

The kind of visual effect (beam, loop, one shot ...).

### String get_vfx_name() {#method-get-vfx-name}

The name of the visual effect that is picked.

### Dictionary get_telegraph_config() {#method-get-telegraph-config}

Get telegraph configuration for VFXTelegraph


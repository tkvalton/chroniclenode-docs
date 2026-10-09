<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionBeam

**Inherits:** [VFXSelection](/advanced/assets/selections-vfx/vfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Beam VFX selection - direct beam/chain effects between targets Used for lightning chains, laser beams, tethers, energy links

## Properties

| | | |
|---|---|---|
| `float` | [beam_width](#prop-beam-width) | `1.0` |
| `float` | [curve_intensity](#prop-curve-intensity) | `0.0` |
| `bool` | [follow_target_movement](#prop-follow-target-movement) | `true` |
| `VFXSelection.VfxLocation` | [start_attachment](#prop-start-attachment) | `VFXSelection.VfxLocation.BASE` |
| `VFXSelection.VfxLocation` | [end_attachment](#prop-end-attachment) | `VFXSelection.VfxLocation.BASE` |
| `bool` | [use_custom_offsets](#prop-use-custom-offsets) | `false` |
| `Vector3` | [start_offset](#prop-start-offset) | `Vector3.ZERO` |
| `Vector3` | [end_offset](#prop-end-offset) | `Vector3.ZERO` |
| `bool` | [supports_chaining](#prop-supports-chaining) | `false` |
| `int` | [max_chain_targets](#prop-max-chain-targets) | `3` |
| `float` | [chain_range](#prop-chain-range) | `5.0` |
| `bool` | [persist_on_target_death](#prop-persist-on-target-death) | `false` |

## Methods

| | |
|---|---|
| `Variant` | [prepare_target_for_vfx_type](#method-prepare-target-for-vfx-type)( `target: Variant, originator: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_vfx_type](#method-get-vfx-type)() |
| `String` | [get_vfx_name](#method-get-vfx-name)() |
| `Dictionary` | [get_beam_config](#method-get-beam-config)() |
| `Dictionary` | [get_chain_config](#method-get-chain-config)() |
| `Dictionary` | [get_attachment_config](#method-get-attachment-config)() |

## Property descriptions

### float beam_width = 1.0 {#prop-beam-width}

Width/thickness of the beam

### float curve_intensity = 0.0 {#prop-curve-intensity}

How much the beam curves (0 = straight line)

### bool follow_target_movement = true {#prop-follow-target-movement}

Update beam when targets move

### VFXSelection.VfxLocation start_attachment = VFXSelection.VfxLocation.BASE {#prop-start-attachment}

Where beam starts on originator

### VFXSelection.VfxLocation end_attachment = VFXSelection.VfxLocation.BASE {#prop-end-attachment}

Where beam ends on target

### bool use_custom_offsets = false {#prop-use-custom-offsets}

Use custom Vector3 offsets instead of attachment points

### Vector3 start_offset = Vector3.ZERO {#prop-start-offset}

Custom offset from start entity

### Vector3 end_offset = Vector3.ZERO {#prop-end-offset}

Custom offset from end entity

### bool supports_chaining = false {#prop-supports-chaining}

Can chain between multiple targets

### int max_chain_targets = 3 {#prop-max-chain-targets}

Maximum number of targets to chain to

### float chain_range = 5.0 {#prop-chain-range}

Maximum range for chaining to next target

### bool persist_on_target_death = false {#prop-persist-on-target-death}

Continue beam even if target dies

## Method descriptions

### Variant prepare_target_for_vfx_type( target: Variant, originator: Variant = null ) {#method-prepare-target-for-vfx-type}

Override to handle beam-specific target preparation

### String get_description() {#method-get-description}

Get a description of this VFX selection for UI *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### String get_vfx_type() {#method-get-vfx-type}

Get the VFX type for database queries *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### String get_vfx_name() {#method-get-vfx-name}

Get the VFX name for database queries *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### Dictionary get_beam_config() {#method-get-beam-config}

Get beam configuration for VFXPointToPointBeam

### Dictionary get_chain_config() {#method-get-chain-config}

Get chain configuration for VFXPointToPointBeam

### Dictionary get_attachment_config() {#method-get-attachment-config}

Get attachment configuration for VFXPointToPointBeam


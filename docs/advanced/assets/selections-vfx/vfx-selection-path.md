<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionPath

**Inherits:** [VFXSelection](/advanced/assets/selections-vfx/vfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Path VFX selection - spawns multiple VFX along a path between points Used for fire walls, ice barriers, poison gas lines, spike rows

## Properties

| | | |
|---|---|---|
| `float` | [section_size](#prop-section-size) | `2.0` |
| `float` | [section_overlap](#prop-section-overlap) | `0.0` |
| `int` | [max_sections](#prop-max-sections) | `50` |
| `bool` | [spawn_progressively](#prop-spawn-progressively) | `false` |
| `float` | [spawn_delay](#prop-spawn-delay) | `0.1` |
| `bool` | [spawn_from_start](#prop-spawn-from-start) | `true` |
| `bool` | [follow_terrain](#prop-follow-terrain) | `false` |
| `float` | [terrain_offset](#prop-terrain-offset) | `0.1` |
| `float` | [max_slope_angle](#prop-max-slope-angle) | `45.0` |
| `float` | [path_curve_strength](#prop-path-curve-strength) | `0.0` |

## Methods

| | |
|---|---|
| `Variant` | [prepare_target_for_vfx_type](#method-prepare-target-for-vfx-type)( `target: Variant, originator: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_vfx_type](#method-get-vfx-type)() |
| `String` | [get_vfx_name](#method-get-vfx-name)() |

## Property descriptions

### float section_size = 2.0 {#prop-section-size}

Size of each VFX section

### float section_overlap = 0.0 {#prop-section-overlap}

How much sections overlap (-1 to 1)

### int max_sections = 50 {#prop-max-sections}

Maximum number of sections to prevent performance issues

*Spawning*

### bool spawn_progressively = false {#prop-spawn-progressively}

Spawn sections over time

### float spawn_delay = 0.1 {#prop-spawn-delay}

Delay between spawning each section

### bool spawn_from_start = true {#prop-spawn-from-start}

Spawn from start to end (vs random)

*Terrain*

### bool follow_terrain = false {#prop-follow-terrain}

Adjust Y position to ground

### float terrain_offset = 0.1 {#prop-terrain-offset}

Height offset above terrain

### float max_slope_angle = 45.0 {#prop-max-slope-angle}

Skip surfaces steeper than this (degrees)

*Path Shape*

### float path_curve_strength = 0.0 {#prop-path-curve-strength}

Bezier curve strength (0 = straight lines)

## Method descriptions

### Variant prepare_target_for_vfx_type( target: Variant, originator: Variant = null ) {#method-prepare-target-for-vfx-type}

Override to handle path-specific target preparation

### String get_description() {#method-get-description}

Get a description of this VFX selection for UI *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### String get_vfx_type() {#method-get-vfx-type}

Get the VFX type for database queries *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### String get_vfx_name() {#method-get-vfx-name}

Get the VFX name for database queries *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*


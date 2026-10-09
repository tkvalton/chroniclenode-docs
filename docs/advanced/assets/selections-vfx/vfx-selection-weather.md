<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionWeather

**Inherits:** [VFXSelection](/advanced/assets/selections-vfx/vfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Weather VFX selection - stores weather configuration including wind properties

## Properties

| | | |
|---|---|---|
| `String` | [weather_vfx_name](#prop-weather-vfx-name) | `""` |
| `Vector3` | [wind_direction](#prop-wind-direction) | `Vector3(1.0, 0.0, 0.0):` |
| `float` | [wind_intensity](#prop-wind-intensity) | `0.5:` |

## Methods

| | |
|---|---|
| `String` | [get_vfx_type](#method-get-vfx-type)() |
| `String` | [get_vfx_name](#method-get-vfx-name)() |
| `String` | [get_description](#method-get-description)() |
| `Variant` | [prepare_target_for_vfx_type](#method-prepare-target-for-vfx-type)( `target: Variant, originator: Variant = null` ) |

## Property descriptions

*Weather Properties*

### String weather_vfx_name = "" {#prop-weather-vfx-name}

The specific weather VFX name from the database

*Wind Settings*

### Vector3 wind_direction = Vector3(1.0, 0.0, 0.0): {#prop-wind-direction}

Wind direction (normalized direction vector)

### float wind_intensity = 0.5: {#prop-wind-intensity}

Wind intensity (0.0 to 1.0)

## Method descriptions

### String get_vfx_type() {#method-get-vfx-type}

Get VFX type override

### String get_vfx_name() {#method-get-vfx-name}

Get VFX name override

### String get_description() {#method-get-description}

Get description for UI

### Variant prepare_target_for_vfx_type( target: Variant, originator: Variant = null ) {#method-prepare-target-for-vfx-type}

Prepare target for weather VFX - weather is typically camera-attached


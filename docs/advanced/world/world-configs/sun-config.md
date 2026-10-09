<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SunConfig

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Configuration for the directional sun light

## Description

Controls the appearance, behavior, and timing of the sun (DirectionalLight3D). Set day_night_cycle to false to use static sun position/color/intensity.

## Properties

| | | |
|---|---|---|
| `bool` | [day_night_cycle](#prop-day-night-cycle) | `true` |
| `float` | [static_rotation](#prop-static-rotation) | `-45.0` |
| `float` | [static_light_energy](#prop-static-light-energy) | `2.0` |
| `Color` | [static_light_color](#prop-static-light-color) | `Color("fffff2ff")` |
| `float` | [sun_rise_hour](#prop-sun-rise-hour) | `6.0` |
| `float` | [sun_set_hour](#prop-sun-set-hour) | `20.5` |
| `float` | [x_axis_rotation_day](#prop-x-axis-rotation-day) | `-45.0` |
| `float` | [x_axis_rotation_night](#prop-x-axis-rotation-night) | `45.0` |
| `float` | [max_light_energy](#prop-max-light-energy) | `1.0` |
| `float` | [min_light_energy](#prop-min-light-energy) | `0.5` |
| `float` | [dawn_dusk_light_energy](#prop-dawn-dusk-light-energy) | `1.0` |
| `Color` | [day_light_color](#prop-day-light-color) | `Color("fffff2ff")` |
| `Color` | [dawn_light_color](#prop-dawn-light-color) | `Color("ffcc99ff")` |
| `Color` | [dusk_light_color](#prop-dusk-light-color) | `Color("ffb380ff")` |
| `Color` | [night_light_color](#prop-night-light-color) | `Color("6f7080")` |
| `DirectionalLight3D.SkyMode` | [sky_mode](#prop-sky-mode) | `DirectionalLight3D.SKY_MODE_LIGHT_AND_SKY` |
| `float` | [angular_distance](#prop-angular-distance) | `0.5` |
| `float` | [light_indirect_energy](#prop-light-indirect-energy) | `1.0` |
| `float` | [light_volumetric_fog_energy](#prop-light-volumetric-fog-energy) | `1.0` |

## Property descriptions

### bool day_night_cycle = true {#prop-day-night-cycle}

Enable day/night cycle (false = static sun configuration)

*Static Sun*

### float static_rotation = -45.0 {#prop-static-rotation}

Static sun rotation (X-axis degrees, when day_night_cycle = false)

### float static_light_energy = 2.0 {#prop-static-light-energy}

Static light intensity (when day_night_cycle = false)

### Color static_light_color = Color("fffff2ff") {#prop-static-light-color}

Static light color (when day_night_cycle = false)

*Day Night Timing*

### float sun_rise_hour = 6.0 {#prop-sun-rise-hour}

Hour when sun rises (0-24)

### float sun_set_hour = 20.5 {#prop-sun-set-hour}

Hour when sun sets (0-24)

*Rotation*

### float x_axis_rotation_day = -45.0 {#prop-x-axis-rotation-day}

Sun X-axis rotation at noon (degrees)

### float x_axis_rotation_night = 45.0 {#prop-x-axis-rotation-night}

Sun X-axis rotation at midnight (degrees)

*Light Intensity*

### float max_light_energy = 1.0 {#prop-max-light-energy}

Maximum light energy (at noon)

### float min_light_energy = 0.5 {#prop-min-light-energy}

Minimum light energy (at night)

### float dawn_dusk_light_energy = 1.0 {#prop-dawn-dusk-light-energy}

Light energy during dawn/dusk

*Light Colors*

### Color day_light_color = Color("fffff2ff") {#prop-day-light-color}

Daylight color (noon)

### Color dawn_light_color = Color("ffcc99ff") {#prop-dawn-light-color}

Dawn/sunrise color

### Color dusk_light_color = Color("ffb380ff") {#prop-dusk-light-color}

Dusk/sunset color

### Color night_light_color = Color("6f7080") {#prop-night-light-color}

Night light color

*DirectionalLight3D Settings*

### DirectionalLight3D.SkyMode sky_mode = DirectionalLight3D.SKY_MODE_LIGHT_AND_SKY {#prop-sky-mode}

How the light affects sky rendering

### float angular_distance = 0.5 {#prop-angular-distance}

Angular size of sun (affects shadow softness)

### float light_indirect_energy = 1.0 {#prop-light-indirect-energy}

How much light contributes to global illumination

### float light_volumetric_fog_energy = 1.0 {#prop-light-volumetric-fog-energy}

How much light affects volumetric fog (god rays)


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldSun

**Inherits:** `DirectionalLight3D`

Currently active sun configuration

## Variables

| | | |
|---|---|---|
| `SunConfig` | [current_sun_config](#var-current-sun-config) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `bool` | [day_night_cycle](#var-day-night-cycle) | `true` |
| `float` | [sun_rise_hour](#var-sun-rise-hour) | `6.0` |
| `float` | [sun_set_hour](#var-sun-set-hour) | `20.5` |
| `float` | [max_light_energy](#var-max-light-energy) | `2.0` |
| `float` | [min_light_energy](#var-min-light-energy) | `0.5` |
| `float` | [dawn_dusk_light](#var-dawn-dusk-light) | `1.0` |
| `Color` | [day_light_color](#var-day-light-color) | `Color("fffff2ff")` |
| `Color` | [dawn_light_color](#var-dawn-light-color) | `Color("ffcc99ff")` |
| `Color` | [dusk_light_color](#var-dusk-light-color) | `Color("ffb380ff")` |
| `Color` | [night_light_color](#var-night-light-color) | `Color("333380ff")` |

## Methods

| | |
|---|---|
| `void` | [update_sun_position](#method-update-sun-position)( `current_time: float` ) |
| `void` | [update_light_energy](#method-update-light-energy)( `current_time: float` ) |
| `void` | [update_light_color](#method-update-light-color)( `current_time: float` ) |
| `void` | [apply_sun_config](#method-apply-sun-config)( `config: SunConfig` ) |

## Variable descriptions

### SunConfig current_sun_config {#var-current-sun-config}

Currently active sun configuration

### ChronoManager chrono_manager {#var-chrono-manager}

Chronomanager ref

### bool day_night_cycle = true {#var-day-night-cycle}

Fallback/default values (used if no config is applied)

### float sun_rise_hour = 6.0 {#var-sun-rise-hour}

The hour of the day the sun rises.

### float sun_set_hour = 20.5 {#var-sun-set-hour}

The hour of the day the sun sets.

### float max_light_energy = 2.0 {#var-max-light-energy}

The light energy at noon.

### float min_light_energy = 0.5 {#var-min-light-energy}

The light energy at night.

### float dawn_dusk_light = 1.0 {#var-dawn-dusk-light}

The light energy at dawn and dusk.

### Color day_light_color = Color("fffff2ff") {#var-day-light-color}

The color of the light by day.

### Color dawn_light_color = Color("ffcc99ff") {#var-dawn-light-color}

The color of the light at dawn.

### Color dusk_light_color = Color("ffb380ff") {#var-dusk-light-color}

The color of the light at dusk.

### Color night_light_color = Color("333380ff") {#var-night-light-color}

The color of the light at night.

## Method descriptions

### void update_sun_position( current_time: float ) {#method-update-sun-position}

Update the sun's position (and brightness and colour) based on the current game time

### void update_light_energy( current_time: float ) {#method-update-light-energy}

Update the light energy (brightness) based on time of day

### void update_light_color( current_time: float ) {#method-update-light-color}

Update the light color based on time of day

### void apply_sun_config( config: SunConfig ) {#method-apply-sun-config}

Apply a SunConfig to reconfigure the sun


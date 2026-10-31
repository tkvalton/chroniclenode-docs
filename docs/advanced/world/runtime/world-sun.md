<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldSun

**Inherits:** `DirectionalLight3D`

The sun of the game: a DirectionalLight3D that follows the game clock. Its PATH is a SunConfig (one per world), its LIGHT (brightness and colour by the hour, shadow softness, indirect and volumetric light) comes from the Sun Light groups of the EnvironmentConfig that is on now, so a zone or an event that changes the environment dims or warms the sun without moving it. See SunLook.

## Variables

| | | |
|---|---|---|
| `SunConfig` | [current_sun_config](#var-current-sun-config) |  |
| `EnvironmentConfig` | [current_lighting](#var-current-lighting) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `bool` | [day_night_cycle](#var-day-night-cycle) | `true` |
| `float` | [weather_dim](#var-weather-dim) | `1.0` |

## Methods

| | |
|---|---|
| `void` | [update_sun_position](#method-update-sun-position)( `current_time: float` ) |
| `void` | [update_light_energy](#method-update-light-energy)( `current_time: float` ) |
| `void` | [update_light_color](#method-update-light-color)( `current_time: float` ) |
| `void` | [apply_sun_config](#method-apply-sun-config)( `config: SunConfig` ) |
| `void` | [apply_lighting](#method-apply-lighting)( `config: EnvironmentConfig` ) |
| `void` | [set_weather_dim](#method-set-weather-dim)( `brightness: float` ) |

## Variable descriptions

### SunConfig current_sun_config {#var-current-sun-config}

The path of the sun that is applied now

### EnvironmentConfig current_lighting {#var-current-lighting}

The environment whose Sun Light groups the sun shines by now

### ChronoManager chrono_manager {#var-chrono-manager}

Chronomanager ref

### bool day_night_cycle = true {#var-day-night-cycle}

Does the sun follow the clock? (false = a sun that stays where it is)

### float weather_dim = 1.0 {#var-weather-dim}

How much of its light the sun gives while a weather dims it (1 = all of it, 0 = none: an overcast storm)

## Method descriptions

### void update_sun_position( current_time: float ) {#method-update-sun-position}

Update the sun's position (and brightness and colour) based on the current game time

### void update_light_energy( current_time: float ) {#method-update-light-energy}

Update the light energy (brightness) based on time of day

### void update_light_color( current_time: float ) {#method-update-light-color}

Update the light color based on time of day

### void apply_sun_config( config: SunConfig ) {#method-apply-sun-config}

Apply a SunConfig: the path of the sun

### void apply_lighting( config: EnvironmentConfig ) {#method-apply-lighting}

Apply the Sun Light groups of an EnvironmentConfig: how bright and what colour the sun is, and its light properties

### void set_weather_dim( brightness: float ) {#method-set-weather-dim}

A weather dims the sun (or lets it shine again): 1 = the light the look says


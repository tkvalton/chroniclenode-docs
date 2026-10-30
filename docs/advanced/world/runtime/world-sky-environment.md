<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldSkyEnvironment

**Inherits:** `WorldEnvironment`

Preloaded stylized sky shader

## Variables

| | | |
|---|---|---|
| `SkyConfig` | [current_sky_config](#var-current-sky-config) |  |
| `EnvironmentConfig` | [current_environment_config](#var-current-environment-config) |  |
| `ShaderMaterial` | [sky_material](#var-sky-material) |  |
| `bool` | [day_night_cycle](#var-day-night-cycle) | `true` |
| `float` | [transition_duration](#var-transition-duration) | `3.0` |
| `Dictionary` | [current_params](#var-current-params) | `{}` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |

## Methods

| | |
|---|---|
| `void` | [set_day_night_cycle](#method-set-day-night-cycle)( `enabled: bool` ) |
| `void` | [apply_sky_config](#method-apply-sky-config)( `config: SkyConfig, blend_seconds: float = 0.0` ) |
| `void` | [update_sky_environment](#method-update-sky-environment)( `current_time: float` ) |
| `Dictionary` | [calculate_sky_parameters](#method-calculate-sky-parameters)( `current_time: float` ) |
| `void` | [apply_params](#method-apply-params)( `params: Dictionary` ) |
| `void` | [apply_environment_config](#method-apply-environment-config)( `config: EnvironmentConfig, blend_seconds: float = 0.0` ) |
| `bool` | [is_blending](#method-is-blending)() |

## Signals

### environment_applied( config: EnvironmentConfig ) {#signal-environment-applied}

Sent every time the environment is shown, and at every step of a blend: the sun shines by the Sun Light of the environment that is shown

## Constants

- `const` **SKY** = `SkyLook.SKY_SHADER` - Preloaded stylized sky shader

## Variable descriptions

### SkyConfig current_sky_config {#var-current-sky-config}

The sky that is shown now (while one sky blends into another: the blend)

### EnvironmentConfig current_environment_config {#var-current-environment-config}

The environment (sky, light, fog) that is shown now (while one environment blends into another: the blend).

### ShaderMaterial sky_material {#var-sky-material}

The material of the sky.

### bool day_night_cycle = true {#var-day-night-cycle}

Day/night cycle control (set by SkyConfig)

### float transition_duration = 3.0 {#var-transition-duration}

Parameters for smooth interpolation

### Dictionary current_params =  {#var-current-params}

The sky settings that are applied now.

### ChronoManager chrono_manager {#var-chrono-manager}

The manager of time and timers.

## Method descriptions

### void set_day_night_cycle( enabled: bool ) {#method-set-day-night-cycle}

Enable or disable day/night cycle (typically called from external system)

### void apply_sky_config( config: SkyConfig, blend_seconds: float = 0.0 ) {#method-apply-sky-config}

Apply a SkyConfig to reconfigure the sky

### void update_sky_environment( current_time: float ) {#method-update-sky-environment}

Initial setup - directly updates sky without interpolation

### Dictionary calculate_sky_parameters( current_time: float ) {#method-calculate-sky-parameters}

Calculate sky parameters based on time of day

### void apply_params( params: Dictionary ) {#method-apply-params}

Apply parameters from a parameter dictionary to the shader

### void apply_environment_config( config: EnvironmentConfig, blend_seconds: float = 0.0 ) {#method-apply-environment-config}

Apply an EnvironmentConfig to reconfigure environment settings. With `blend_seconds` above 0 the environment changes into it over that time (fog, light, sun, colour grade, camera, wind), starting from the look shown now, even if it is in the middle of another change

### bool is_blending() {#method-is-blending}

Is a look changing into another now?


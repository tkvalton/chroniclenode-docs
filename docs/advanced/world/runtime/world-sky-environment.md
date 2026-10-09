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
| `void` | [apply_sky_config](#method-apply-sky-config)( `config: SkyConfig` ) |
| `void` | [update_sky_environment](#method-update-sky-environment)( `current_time: float` ) |
| `Dictionary` | [calculate_sky_parameters](#method-calculate-sky-parameters)( `current_time: float` ) |
| `void` | [apply_params](#method-apply-params)( `params: Dictionary` ) |
| `void` | [apply_environment_config](#method-apply-environment-config)( `config: EnvironmentConfig` ) |

## Constants

- `const` **SKY** = `preload("uid://dq3m1udsejtb0")` - Preloaded stylized sky shader

## Variable descriptions

### SkyConfig current_sky_config {#var-current-sky-config}

Currently active sky and environment configurations

### EnvironmentConfig current_environment_config {#var-current-environment-config}

*No description yet.*

### ShaderMaterial sky_material {#var-sky-material}

*No description yet.*

### bool day_night_cycle = true {#var-day-night-cycle}

*No description yet.*

### float transition_duration = 3.0 {#var-transition-duration}

*No description yet.*

### Dictionary current_params =  {#var-current-params}

*No description yet.*

### ChronoManager chrono_manager {#var-chrono-manager}

*No description yet.*

## Method descriptions

### void set_day_night_cycle( enabled: bool ) {#method-set-day-night-cycle}

Enable or disable day/night cycle (typically called from external system)

### void apply_sky_config( config: SkyConfig ) {#method-apply-sky-config}

Apply a SkyConfig to reconfigure the sky

### void update_sky_environment( current_time: float ) {#method-update-sky-environment}

Initial setup - directly updates sky without interpolation

### Dictionary calculate_sky_parameters( current_time: float ) {#method-calculate-sky-parameters}

Calculate sky parameters based on time of day

### void apply_params( params: Dictionary ) {#method-apply-params}

Apply parameters from a parameter dictionary to the shader

### void apply_environment_config( config: EnvironmentConfig ) {#method-apply-environment-config}

Apply an EnvironmentConfig to reconfigure environment settings


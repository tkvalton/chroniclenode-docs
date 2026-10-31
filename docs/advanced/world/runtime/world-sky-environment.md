<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldSkyEnvironment

**Inherits:** `WorldEnvironment`

Preloaded stylized sky shader

## Variables

| | | |
|---|---|---|
| `SkyConfig` | [current_sky_config](#var-current-sky-config) |  |
| `EnvironmentConfig` | [current_environment_config](#var-current-environment-config) |  |
| `WeatherLook` | [weather_look](#var-weather-look) | `WeatherLook.new()` |
| `SunConfig` | [sun_path](#var-sun-path) |  |
| `ShaderMaterial` | [sky_material](#var-sky-material) |  |
| `bool` | [day_night_cycle](#var-day-night-cycle) | `true` |
| `float` | [transition_duration](#var-transition-duration) | `3.0` |
| `Dictionary` | [current_params](#var-current-params) | `{}` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |

## Methods

| | |
|---|---|
| `void` | [set_day_night_cycle](#method-set-day-night-cycle)( `enabled: bool` ) |
| `void` | [set_sun_path](#method-set-sun-path)( `path: SunConfig` ) |
| `void` | [apply_sky_config](#method-apply-sky-config)( `config: SkyConfig, blend_seconds: float = 0.0` ) |
| `void` | [update_sky_environment](#method-update-sky-environment)( `current_time: float` ) |
| `Dictionary` | [calculate_sky_parameters](#method-calculate-sky-parameters)( `current_time: float` ) |
| `void` | [apply_params](#method-apply-params)( `params: Dictionary` ) |
| `void` | [apply_environment_config](#method-apply-environment-config)( `config: EnvironmentConfig, blend_seconds: float = 0.0` ) |
| `void` | [set_weather_look](#method-set-weather-look)( `config: WeatherConfig, seconds: float` ) |
| `bool` | [is_weather_blending](#method-is-weather-blending)() |
| `bool` | [is_blending](#method-is-blending)() |

## Signals

### environment_applied( config: EnvironmentConfig ) {#signal-environment-applied}

Sent every time the environment is shown, and at every step of a blend: the sun shines by the Sun Light of the environment that is shown

### sun_dimmed( brightness: float ) {#signal-sun-dimmed}

Sent when the weather changes how bright the sun is (1 = as the look says): the sun of the game follows

## Constants

- `const` **SKY** = `SkyLook.SKY_SHADER` - Preloaded stylized sky shader

## Variable descriptions

### SkyConfig current_sky_config {#var-current-sky-config}

The sky that is shown now (while one sky blends into another: the blend)

### EnvironmentConfig current_environment_config {#var-current-environment-config}

The environment (sky, light, fog) that is shown now (while one environment blends into another: the blend).

### WeatherLook weather_look = WeatherLook.new() {#var-weather-look}

The weather laid on the look (see WeatherLook): what is shown now, and the blend it is in. Neutral = the look as it is

### SunConfig sun_path {#var-sun-path}

The sun of the world (when it rises and sets): the sky changes at those hours. Set by the game host

### ShaderMaterial sky_material {#var-sky-material}

The material of the sky when it is a shader (null for a sky of another kind, a procedural sky for example).

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

### void set_sun_path( path: SunConfig ) {#method-set-sun-path}

The sun of the world is another one (or a new world): the sky follows its hours from now on

### void apply_sky_config( config: SkyConfig, blend_seconds: float = 0.0 ) {#method-apply-sky-config}

Apply a SkyConfig to reconfigure the sky

### void update_sky_environment( current_time: float ) {#method-update-sky-environment}

Initial setup - directly updates sky without interpolation

### Dictionary calculate_sky_parameters( current_time: float ) {#method-calculate-sky-parameters}

Calculate sky parameters based on time of day (the colours, the clouds and the stars of the stylized sky, by the sun's hours)

### void apply_params( params: Dictionary ) {#method-apply-params}

Sets the parameters of the sky from a dictionary: parameter name -&gt; value, as the driver of the sky makes them (hour_params)

### void apply_environment_config( config: EnvironmentConfig, blend_seconds: float = 0.0 ) {#method-apply-environment-config}

Apply an EnvironmentConfig to reconfigure environment settings. With `blend_seconds` above 0 the environment changes into it over that time (fog, light, sun, colour grade, camera, wind), starting from the look shown now, even if it is in the middle of another change

### void set_weather_look( config: WeatherConfig, seconds: float ) {#method-set-weather-look}

The weather changes (null = clear): the sky, the fog, the sun and the ambient light move to its modifiers over `seconds`, starting from what is shown now, even in the middle of another change. 0 = at once

### bool is_weather_blending() {#method-is-weather-blending}

Is a weather fading in or out?

### bool is_blending() {#method-is-blending}

Is a look changing into another now?


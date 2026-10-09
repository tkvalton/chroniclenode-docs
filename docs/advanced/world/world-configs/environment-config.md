<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EnvironmentConfig

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Configuration for Environment visual settings

## Description

Controls fog, volumetric fog, tonemap, ambient lighting, and wind. These are artistic/atmospheric settings, not performance settings. Performance settings (SSAO, SSIL, SSR, SDFGI, Glow) belong in settings.gd.

## Properties

| | | |
|---|---|---|
| `Environment.ToneMapper` | [tonemap_mode](#prop-tonemap-mode) | `Environment.TONE_MAPPER_FILMIC` |
| `float` | [tonemap_exposure](#prop-tonemap-exposure) | `1.0` |
| `Vector3` | [wind_direction](#prop-wind-direction) | `Vector3(1.0, 0.0, 0.0)` |
| `float` | [wind_intensity](#prop-wind-intensity) | `0.0` |
| `bool` | [fog_enabled](#prop-fog-enabled) | `true` |
| `Environment.FogMode` | [fog_mode](#prop-fog-mode) | `Environment.FOG_MODE_EXPONENTIAL` |
| `Color` | [fog_light_color](#prop-fog-light-color) | `Color(0.518, 0.553, 0.608, 1)` |
| `float` | [fog_density](#prop-fog-density) | `0.01` |
| `float` | [fog_aerial_perspective](#prop-fog-aerial-perspective) | `0.0` |
| `float` | [fog_sky_affect](#prop-fog-sky-affect) | `1.0` |
| `float` | [fog_sun_scatter](#prop-fog-sun-scatter) | `0.0` |
| `bool` | [volumetric_fog_enabled](#prop-volumetric-fog-enabled) | `false` |
| `float` | [volumetric_fog_density](#prop-volumetric-fog-density) | `0.0095` |
| `Color` | [volumetric_fog_albedo](#prop-volumetric-fog-albedo) | `Color(1, 1, 1, 1)` |
| `Color` | [volumetric_fog_emission](#prop-volumetric-fog-emission) | `Color(0, 0, 0, 1)` |
| `float` | [volumetric_fog_emission_energy](#prop-volumetric-fog-emission-energy) | `1.0` |
| `float` | [volumetric_fog_anisotropy](#prop-volumetric-fog-anisotropy) | `0.2` |
| `float` | [volumetric_fog_length](#prop-volumetric-fog-length) | `64.0` |
| `float` | [volumetric_fog_sky_affect](#prop-volumetric-fog-sky-affect) | `1.0` |
| `float` | [volumetric_fog_gi_inject](#prop-volumetric-fog-gi-inject) | `1.0` |
| `float` | [volumetric_fog_ambient_inject](#prop-volumetric-fog-ambient-inject) | `0.0` |
| `Environment.AmbientSource` | [ambient_light_source](#prop-ambient-light-source) | `Environment.AMBIENT_SOURCE_SKY` |
| `Color` | [ambient_light_color](#prop-ambient-light-color) | `Color(1, 1, 1, 1)` |
| `float` | [ambient_light_energy](#prop-ambient-light-energy) | `1.0` |
| `float` | [ambient_light_sky_contribution](#prop-ambient-light-sky-contribution) | `1.0` |

## Property descriptions

*Tonemap*

### Environment.ToneMapper tonemap_mode = Environment.TONE_MAPPER_FILMIC {#prop-tonemap-mode}

Tonemapping algorithm

### float tonemap_exposure = 1.0 {#prop-tonemap-exposure}

Overall brightness adjustment

*Wind*

### Vector3 wind_direction = Vector3(1.0, 0.0, 0.0) {#prop-wind-direction}

Wind direction (3D vector, typically horizontal)

### float wind_intensity = 0.0 {#prop-wind-intensity}

Wind intensity/strength

*Fog Settings*

### bool fog_enabled = true {#prop-fog-enabled}

Enable fog

### Environment.FogMode fog_mode = Environment.FOG_MODE_EXPONENTIAL {#prop-fog-mode}

Fog calculation mode

### Color fog_light_color = Color(0.518, 0.553, 0.608, 1) {#prop-fog-light-color}

Fog color

### float fog_density = 0.01 {#prop-fog-density}

Fog density (higher = thicker fog)

### float fog_aerial_perspective = 0.0 {#prop-fog-aerial-perspective}

Blend between fog color and sky color (0 = fog color, 1 = sky color)

### float fog_sky_affect = 1.0 {#prop-fog-sky-affect}

How much fog affects sky rendering (0 = no effect, 1 = full effect)

### float fog_sun_scatter = 0.0 {#prop-fog-sun-scatter}

Sun scatter intensity in fog (god rays effect)

*Volumetric Fog Settings*

### bool volumetric_fog_enabled = false {#prop-volumetric-fog-enabled}

Enable volumetric fog (more realistic, performance cost)

### float volumetric_fog_density = 0.0095 {#prop-volumetric-fog-density}

Volumetric fog density

### Color volumetric_fog_albedo = Color(1, 1, 1, 1) {#prop-volumetric-fog-albedo}

Volumetric fog color

### Color volumetric_fog_emission = Color(0, 0, 0, 1) {#prop-volumetric-fog-emission}

Volumetric fog emission color (self-illumination)

### float volumetric_fog_emission_energy = 1.0 {#prop-volumetric-fog-emission-energy}

Volumetric fog emission brightness

### float volumetric_fog_anisotropy = 0.2 {#prop-volumetric-fog-anisotropy}

Light scattering direction (-1 = backward, 0 = equal, 1 = forward)

### float volumetric_fog_length = 64.0 {#prop-volumetric-fog-length}

Maximum distance for volumetric fog

### float volumetric_fog_sky_affect = 1.0 {#prop-volumetric-fog-sky-affect}

How much volumetric fog affects sky (0 = no effect, 1 = full effect)

### float volumetric_fog_gi_inject = 1.0 {#prop-volumetric-fog-gi-inject}

How much global illumination affects fog

### float volumetric_fog_ambient_inject = 0.0 {#prop-volumetric-fog-ambient-inject}

How much ambient light affects fog

*Ambient Light*

### Environment.AmbientSource ambient_light_source = Environment.AMBIENT_SOURCE_SKY {#prop-ambient-light-source}

Where ambient light comes from

### Color ambient_light_color = Color(1, 1, 1, 1) {#prop-ambient-light-color}

Ambient light color (when using AMBIENT_SOURCE_COLOR)

### float ambient_light_energy = 1.0 {#prop-ambient-light-energy}

Ambient light brightness

### float ambient_light_sky_contribution = 1.0 {#prop-ambient-light-sky-contribution}

How much sky contributes to ambient light (0 = none, 1 = full)


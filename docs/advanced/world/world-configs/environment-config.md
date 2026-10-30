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
| `float` | [tonemap_white](#prop-tonemap-white) | `1.0` |
| `float` | [sky_rotation_degrees](#prop-sky-rotation-degrees) | `0.0` |
| `Vector3` | [wind_direction](#prop-wind-direction) | `Vector3(1.0, 0.0, 0.0)` |
| `float` | [wind_intensity](#prop-wind-intensity) | `0.35` |
| `bool` | [fog_enabled](#prop-fog-enabled) | `true` |
| `Environment.FogMode` | [fog_mode](#prop-fog-mode) | `Environment.FOG_MODE_EXPONENTIAL` |
| `Color` | [fog_light_color](#prop-fog-light-color) | `Color(0.518, 0.553, 0.608, 1)` |
| `float` | [fog_density](#prop-fog-density) | `0.01` |
| `float` | [fog_aerial_perspective](#prop-fog-aerial-perspective) | `0.0` |
| `float` | [fog_sky_affect](#prop-fog-sky-affect) | `0.2` |
| `float` | [fog_height](#prop-fog-height) | `10.0` |
| `float` | [fog_height_density](#prop-fog-height-density) | `0.0` |
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
| `bool` | [sun_enabled](#prop-sun-enabled) | `true` |
| `float` | [sun_max_energy](#prop-sun-max-energy) | `1.0` |
| `float` | [sun_min_energy](#prop-sun-min-energy) | `0.5` |
| `float` | [sun_dawn_dusk_energy](#prop-sun-dawn-dusk-energy) | `1.0` |
| `Color` | [sun_day_color](#prop-sun-day-color) | `Color("fffff2ff")` |
| `Color` | [sun_dawn_color](#prop-sun-dawn-color) | `Color("ffcc99ff")` |
| `Color` | [sun_dusk_color](#prop-sun-dusk-color) | `Color("ffb380ff")` |
| `Color` | [sun_night_color](#prop-sun-night-color) | `Color("6f7080")` |
| `DirectionalLight3D.SkyMode` | [sun_sky_mode](#prop-sun-sky-mode) | `DirectionalLight3D.SKY_MODE_LIGHT_AND_SKY` |
| `float` | [sun_angular_distance](#prop-sun-angular-distance) | `0.5` |
| `float` | [sun_indirect_energy](#prop-sun-indirect-energy) | `1.0` |
| `float` | [sun_volumetric_fog_energy](#prop-sun-volumetric-fog-energy) | `1.0` |
| `float` | [sun_static_energy](#prop-sun-static-energy) | `2.0` |
| `Color` | [sun_static_color](#prop-sun-static-color) | `Color("fffff2ff")` |
| `float` | [glow_amount](#prop-glow-amount) | `1.0` |
| `float` | [ssao_amount](#prop-ssao-amount) | `1.0` |
| `float` | [exposure](#prop-exposure) | `1.0` |
| `bool` | [auto_exposure_enabled](#prop-auto-exposure-enabled) | `false` |
| `float` | [auto_exposure_speed](#prop-auto-exposure-speed) | `0.5` |
| `float` | [auto_exposure_scale](#prop-auto-exposure-scale) | `0.4` |
| `bool` | [dof_far_enabled](#prop-dof-far-enabled) | `false` |
| `float` | [dof_far_distance](#prop-dof-far-distance) | `20.0` |
| `float` | [dof_far_transition](#prop-dof-far-transition) | `10.0` |
| `bool` | [dof_near_enabled](#prop-dof-near-enabled) | `false` |
| `float` | [dof_near_distance](#prop-dof-near-distance) | `2.0` |
| `float` | [dof_near_transition](#prop-dof-near-transition) | `1.0` |
| `float` | [dof_amount](#prop-dof-amount) | `0.1` |
| `Texture2D` | [grade_lut](#prop-grade-lut) |  |
| `float` | [grade_lut_strength](#prop-grade-lut-strength) | `1.0` |
| `float` | [grade_brightness](#prop-grade-brightness) | `1.0` |
| `float` | [grade_contrast](#prop-grade-contrast) | `1.0` |
| `float` | [grade_saturation](#prop-grade-saturation) | `1.0` |
| `Color` | [grade_tint](#prop-grade-tint) | `Color.WHITE` |
| `float` | [grade_tint_amount](#prop-grade-tint-amount) | `0.0` |

## Property descriptions

*Tonemap*

### Environment.ToneMapper tonemap_mode = Environment.TONE_MAPPER_FILMIC {#prop-tonemap-mode}

Tonemapping algorithm

### float tonemap_exposure = 1.0 {#prop-tonemap-exposure}

Overall brightness adjustment

### float tonemap_white = 1.0 {#prop-tonemap-white}

The brightness that is shown as pure white (higher = a flatter, less burnt picture). Filmic, ACES and AgX tonemappers use it

*Sky*

### float sky_rotation_degrees = 0.0 {#prop-sky-rotation-degrees}

Turns the whole sky (clouds, stars, the colours) around the vertical axis, in degrees. The sun is not moved: its direction is in the Sun config

*Wind*

### Vector3 wind_direction = Vector3(1.0, 0.0, 0.0) {#prop-wind-direction}

The direction the wind blows towards on the ground (x and z of the vector; up and down are ignored)

### float wind_intensity = 0.35 {#prop-wind-intensity}

How strong the wind is: 0 still, 1 a breeze, 2 a storm (plants sway with it; your own shaders read the global world_wind)

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

### float fog_sky_affect = 0.2 {#prop-fog-sky-affect}

How much fog affects sky rendering (0 = no effect, 1 = full effect). Low keeps the sky clear and the fog down on the ground

### float fog_height = 10.0 {#prop-fog-height}

Height (in metres, world Y) under which the fog gets thicker the lower things are: a mist that lies in the valleys and on the ground. Needs Height Density above 0

### float fog_height_density = 0.0 {#prop-fog-height-density}

How quickly the fog thickens below Height (0 = no height fog). It works on what is under Height at any distance: 0.02 is a light haze, 0.1 is thick (something 10 m under Height is 63 % fogged)

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

*Sun Light*

### bool sun_enabled = true {#prop-sun-enabled}

Is there a sun here? Off: no sunlight and no sun shadows at all, for an inside, a cave or a dungeon lit only by its own lights (the light nodes and the ambient light of this config). The sky shader, if there is one, loses its sun too: use a flat background colour in the Sky config

### float sun_max_energy = 1.0 {#prop-sun-max-energy}

How bright the sun is at noon

### float sun_min_energy = 0.5 {#prop-sun-min-energy}

How bright it is at night (the moon: the same light on the same path)

### float sun_dawn_dusk_energy = 1.0 {#prop-sun-dawn-dusk-energy}

How bright it is at dawn and dusk

*Sun Light Colors*

### Color sun_day_color = Color("fffff2ff") {#prop-sun-day-color}

The colour of the light at noon

### Color sun_dawn_color = Color("ffcc99ff") {#prop-sun-dawn-color}

The colour at sunrise

### Color sun_dusk_color = Color("ffb380ff") {#prop-sun-dusk-color}

The colour at sunset

### Color sun_night_color = Color("6f7080") {#prop-sun-night-color}

The colour at night

*Sun Light Properties*

### DirectionalLight3D.SkyMode sun_sky_mode = DirectionalLight3D.SKY_MODE_LIGHT_AND_SKY {#prop-sun-sky-mode}

How the light affects the sky: light only (the sky shader does not see it), sky only, or both

### float sun_angular_distance = 0.5 {#prop-sun-angular-distance}

Angular size of the sun (the bigger, the softer its shadows)

### float sun_indirect_energy = 1.0 {#prop-sun-indirect-energy}

How much the sun contributes to global illumination

### float sun_volumetric_fog_energy = 1.0 {#prop-sun-volumetric-fog-energy}

How much the sun lights volumetric fog (god rays)

*Static Sun Light*

### float sun_static_energy = 2.0 {#prop-sun-static-energy}

How bright a sun that stays where it is (a Sun config with the day-night cycle off) is

### Color sun_static_color = Color("fffff2ff") {#prop-sun-static-color}

Its colour

*Glow and Occlusion*

### float glow_amount = 1.0 {#prop-glow-amount}

How strongly bright things glow in this world: 0 = no glow even if the player turned Glow on, 1 = normal, up to 4. The player's Glow setting still switches it on or off

### float ssao_amount = 1.0 {#prop-ssao-amount}

How dark corners and contact shadows are in this world (screen space ambient occlusion): 0 = none even if the player turned it on, 1 = normal, up to 4

*Camera*

### float exposure = 1.0 {#prop-exposure}

How bright the picture is as the camera sees it (1 = as it is). Not the same as the player's Brightness setting

### bool auto_exposure_enabled = false {#prop-auto-exposure-enabled}

The camera adapts to dark and bright places, as an eye does (Forward+ renderer only)

### float auto_exposure_speed = 0.5 {#prop-auto-exposure-speed}

How fast the exposure adapts (higher = faster)

### float auto_exposure_scale = 0.4 {#prop-auto-exposure-scale}

How strongly the auto exposure works: 0 = not at all, higher = brighter darks

### bool dof_far_enabled = false {#prop-dof-far-enabled}

Blur what is far from the camera (Forward+ and Mobile renderers). Off by default: it changes the whole feel of a game

### float dof_far_distance = 20.0 {#prop-dof-far-distance}

From this distance (metres) things start to blur

### float dof_far_transition = 10.0 {#prop-dof-far-transition}

Over how many metres the blur grows to its full amount

### bool dof_near_enabled = false {#prop-dof-near-enabled}

Blur what is very close to the camera

### float dof_near_distance = 2.0 {#prop-dof-near-distance}

Things closer than this (metres) are blurred

### float dof_near_transition = 1.0 {#prop-dof-near-transition}

Over how many metres the blur fades out

### float dof_amount = 0.1 {#prop-dof-amount}

How strong the blur is at its most

*Colour Grade*

### Texture2D grade_lut {#prop-grade-lut}

A colour lookup table (LUT): a picture of a strip of N squares of N by N (16 squares of 16 by 16 = 256 x 16), graded in any image editor. Start from addons/chroniclenode/assets/color_grading/neutral_lut_16.png. Empty = none

### float grade_lut_strength = 1.0 {#prop-grade-lut-strength}

How much of the LUT is used (0 = none, 1 = all of it)

### float grade_brightness = 1.0 {#prop-grade-brightness}

Brightness of the colours (1 = as they are)

### float grade_contrast = 1.0 {#prop-grade-contrast}

How far apart darks and lights are (1 = as they are)

### float grade_saturation = 1.0 {#prop-grade-saturation}

How strong the colours are (1 = as they are, 0 = black and white)

### Color grade_tint = Color.WHITE {#prop-grade-tint}

A colour the picture is tinted with (a cold blue for a cave, a warm orange for a desert)

### float grade_tint_amount = 0.0 {#prop-grade-tint-amount}

How much of the tint is used (0 = none)


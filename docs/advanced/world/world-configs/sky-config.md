<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkyConfig

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Configuration for the sky shader appearance

## Description

Controls all visual aspects of the sky including colors, clouds, stars, and atmospheric effects. Works in conjunction with the stylized sky shader.

## Properties

| | | |
|---|---|---|
| `Environment.BGMode` | [background_mode](#prop-background-mode) | `Environment.BG_SKY` |
| `Color` | [background_color](#prop-background-color) | `Color(0, 0, 0, 1)` |
| `float` | [background_energy_multiplier](#prop-background-energy-multiplier) | `1.0` |
| `float` | [sun_rise_hour](#prop-sun-rise-hour) | `5.5` |
| `float` | [sun_set_hour](#prop-sun-set-hour) | `20.5` |
| `float` | [transition_duration](#prop-transition-duration) | `3.0` |
| `Color` | [day_top_color](#prop-day-top-color) | `Color("6699ffff")` |
| `Color` | [day_bottom_color](#prop-day-bottom-color) | `Color("99ccffff")` |
| `Color` | [day_sun_scatter](#prop-day-sun-scatter) | `Color("ffe6b3ff")` |
| `Color` | [night_top_color](#prop-night-top-color) | `Color("05050dff")` |
| `Color` | [night_bottom_color](#prop-night-bottom-color) | `Color("0d121aff")` |
| `Color` | [night_sun_scatter](#prop-night-sun-scatter) | `Color("000000ff")` |
| `Color` | [dusk_top_color](#prop-dusk-top-color) | `Color("804d33ff")` |
| `Color` | [dusk_bottom_color](#prop-dusk-bottom-color) | `Color("cc9966ff")` |
| `Color` | [dusk_sun_scatter](#prop-dusk-sun-scatter) | `Color("ffb366ff")` |
| `Color` | [day_cloud_color](#prop-day-cloud-color) | `Color("ffffffff")` |
| `Color` | [night_cloud_color](#prop-night-cloud-color) | `Color("333366ff")` |
| `Color` | [dusk_cloud_color](#prop-dusk-cloud-color) | `Color("ffb380ff")` |
| `float` | [day_cloud_density](#prop-day-cloud-density) | `0.5` |
| `float` | [night_cloud_density](#prop-night-cloud-density) | `0.3` |
| `float` | [dusk_cloud_density](#prop-dusk-cloud-density) | `0.4` |
| `int` | [clouds_samples](#prop-clouds-samples) | `16` |
| `int` | [shadow_sample](#prop-shadow-sample) | `4` |
| `float` | [clouds_scale](#prop-clouds-scale) | `1.0` |
| `float` | [clouds_smoothness](#prop-clouds-smoothness) | `0.035` |
| `float` | [clouds_shadow_intensity](#prop-clouds-shadow-intensity) | `1.0` |
| `float` | [high_clouds_density](#prop-high-clouds-density) | `0.0` |
| `Color` | [astro_tint](#prop-astro-tint) | `Color(1.0, 1.0, 1.0, 1.0)` |
| `float` | [astro_scale](#prop-astro-scale) | `1.0` |
| `float` | [astro_intensity](#prop-astro-intensity) | `1.0` |
| `float` | [day_star_intensity](#prop-day-star-intensity) | `0.0` |
| `float` | [night_star_intensity](#prop-night-star-intensity) | `3.0` |
| `float` | [twilight_star_intensity](#prop-twilight-star-intensity) | `1.0` |
| `float` | [day_shooting_star_intensity](#prop-day-shooting-star-intensity) | `0.0` |
| `float` | [night_shooting_star_intensity](#prop-night-shooting-star-intensity) | `0.0` |
| `Color` | [night_shooting_star_tint](#prop-night-shooting-star-tint) | `Color(0.8, 0.9, 1.0, 1.0)` |

## Property descriptions

*Background*

### Environment.BGMode background_mode = Environment.BG_SKY {#prop-background-mode}

Background rendering mode

### Color background_color = Color(0, 0, 0, 1) {#prop-background-color}

Background color (when using BG_COLOR mode)

### float background_energy_multiplier = 1.0 {#prop-background-energy-multiplier}

Background brightness multiplier

*Time of Day*

### float sun_rise_hour = 5.5 {#prop-sun-rise-hour}

Hour when sunrise begins (slightly before sun_rise_hour)

### float sun_set_hour = 20.5 {#prop-sun-set-hour}

Hour when sunset begins (slightly before sun_set_hour)

### float transition_duration = 3.0 {#prop-transition-duration}

Duration of smooth transitions between time periods (seconds)

*Sky Colors - Day*

### Color day_top_color = Color("6699ffff") {#prop-day-top-color}

Day sky top color

### Color day_bottom_color = Color("99ccffff") {#prop-day-bottom-color}

Day sky horizon color

### Color day_sun_scatter = Color("ffe6b3ff") {#prop-day-sun-scatter}

Day sun scatter color

*Sky Colors - Night*

### Color night_top_color = Color("05050dff") {#prop-night-top-color}

Night sky top color

### Color night_bottom_color = Color("0d121aff") {#prop-night-bottom-color}

Night sky horizon color

### Color night_sun_scatter = Color("000000ff") {#prop-night-sun-scatter}

Night sun scatter color (usually dark)

*Sky Colors - Dusk*

### Color dusk_top_color = Color("804d33ff") {#prop-dusk-top-color}

Dawn/dusk sky top color

### Color dusk_bottom_color = Color("cc9966ff") {#prop-dusk-bottom-color}

Dawn/dusk horizon color

### Color dusk_sun_scatter = Color("ffb366ff") {#prop-dusk-sun-scatter}

Dawn/dusk sun scatter color

*Cloud Settings*

### Color day_cloud_color = Color("ffffffff") {#prop-day-cloud-color}

Day cloud color

### Color night_cloud_color = Color("333366ff") {#prop-night-cloud-color}

Night cloud color

### Color dusk_cloud_color = Color("ffb380ff") {#prop-dusk-cloud-color}

Dawn/dusk cloud color

### float day_cloud_density = 0.5 {#prop-day-cloud-density}

Day cloud density

### float night_cloud_density = 0.3 {#prop-night-cloud-density}

Night cloud density

### float dusk_cloud_density = 0.4 {#prop-dusk-cloud-density}

Dawn/dusk cloud density

### int clouds_samples = 16 {#prop-clouds-samples}

Cloud samples for ray marching (8-32, impacts performance)

### int shadow_sample = 4 {#prop-shadow-sample}

Shadow samples per cloud sample (1-4, impacts performance)

### float clouds_scale = 1.0 {#prop-clouds-scale}

Cloud scale multiplier

### float clouds_smoothness = 0.035 {#prop-clouds-smoothness}

Cloud edge smoothness

### float clouds_shadow_intensity = 1.0 {#prop-clouds-shadow-intensity}

Cloud shadow intensity

*High Clouds*

### float high_clouds_density = 0.0 {#prop-high-clouds-density}

High cloud density (0 = disabled)

*Astro*

### Color astro_tint = Color(1.0, 1.0, 1.0, 1.0) {#prop-astro-tint}

Tint color for sun/moon texture

### float astro_scale = 1.0 {#prop-astro-scale}

Scale of sun/moon disk

### float astro_intensity = 1.0 {#prop-astro-intensity}

Brightness multiplier for sun/moon

*Star Settings*

### float day_star_intensity = 0.0 {#prop-day-star-intensity}

Star intensity during day (usually 0)

### float night_star_intensity = 3.0 {#prop-night-star-intensity}

Star intensity during night

### float twilight_star_intensity = 1.0 {#prop-twilight-star-intensity}

Star intensity during twilight (dawn/dusk)

*Shooting Star Settings*

### float day_shooting_star_intensity = 0.0 {#prop-day-shooting-star-intensity}

Shooting star intensity during day (usually 0)

### float night_shooting_star_intensity = 0.0 {#prop-night-shooting-star-intensity}

Shooting star intensity during night

### Color night_shooting_star_tint = Color(0.8, 0.9, 1.0, 1.0) {#prop-night-shooting-star-tint}

Color tint for shooting stars


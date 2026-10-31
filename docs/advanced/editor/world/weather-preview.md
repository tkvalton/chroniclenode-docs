<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherPreview

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The preview of the Weather tab: a small world in its own viewport (a ground with a hut with a roof, trees, rocks and a pole to see the weather against) with the default sky, sun and environment of the project, and the weather laid on it: its particles at the intensity of the slider, the sky, fog and light it changes (WeatherLook), the wind it blows, and a ground that gets wet and covered. Move the time of day, move the intensity, or press Fade in to see the weather arrive over its fade seconds. Nothing here is saved.

## Variables

| | | |
|---|---|---|
| `WeatherConfig` | [config](#var-config) |  |
| `float` | [intensity](#var-intensity) | `1.0` |
| `float` | [shown_intensity](#var-shown-intensity) | `1.0` |
| `float` | [hour](#var-hour) | `12.0` |

## Methods

| | |
|---|---|
| `void` | [show_weather](#method-show-weather)( `p_config: WeatherConfig` ) |
| `void` | [play_fade](#method-play-fade)() |
| `void` | [set_active](#method-set-active)( `active: bool` ) |
| `void` | [stop](#method-stop)() |

## Constants

- `Vector3` **CAMERA_POSITION** = `Vector3(0.0, 1.8, 6.0)`
- `Color` **GROUND_COLOR** = `Color(0.25, 0.33, 0.2)`

## Variable descriptions

### WeatherConfig config {#var-config}

The weather shown (null = none)

### float intensity = 1.0 {#var-intensity}

The intensity the weather comes to (the slider)

### float shown_intensity = 1.0 {#var-shown-intensity}

The intensity shown now (it follows the slider, and climbs from 0 during a fade in)

### float hour = 12.0 {#var-hour}

The hour of the day shown

## Method descriptions

### void show_weather( p_config: WeatherConfig ) {#method-show-weather}

Shows a weather (null = clear): its effect, look, ground and wind, at the intensity of the slider

### void play_fade() {#method-play-fade}

Starts from a clear sky and brings the weather in over its fade seconds

### void set_active( active: bool ) {#method-set-active}

The tab is shown (true) or hidden (false): a hidden preview gives the wind back to the world

### void stop() {#method-stop}

The preview stops: the wind of the weather is given back to the world


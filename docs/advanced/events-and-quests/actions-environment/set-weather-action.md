<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetWeatherAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to change the current map's weather at runtime

## Properties

| | | |
|---|---|---|
| `WeatherConfig` | [weather_config](#prop-weather-config) |  |
| `VFXSelectionWeather` | [weather_selection](#prop-weather-selection) |  |
| `float` | [transition_duration](#prop-transition-duration) | `5.0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### WeatherConfig weather_config {#prop-weather-config}

The weather to bring (a Weather config of the project). Empty = clear weather

### VFXSelectionWeather weather_selection {#prop-weather-selection}

The old weather selection (used only when no Weather config is set)

### float transition_duration = 5.0 {#prop-transition-duration}

Duration of transition in seconds (0 = instant)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


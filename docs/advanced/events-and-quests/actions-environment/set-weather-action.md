<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetWeatherAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to change the current map's weather at runtime

## Properties

| | | |
|---|---|---|
| `VFXSelectionWeather` | [weather_selection](#prop-weather-selection) |  |
| `float` | [transition_duration](#prop-transition-duration) | `5.0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### VFXSelectionWeather weather_selection {#prop-weather-selection}

Weather selection to apply (VFXSelectionWeather resource)

### float transition_duration = 5.0 {#prop-transition-duration}

Duration of transition in seconds (0 = instant)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


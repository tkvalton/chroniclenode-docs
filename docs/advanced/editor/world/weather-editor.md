<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherEditor

**Inherits:** `MarginContainer`

The Weather tab of the World group: the weathers of the project (WeatherConfig). On the left the list of them (New, Duplicate, Delete); in the middle the name and the containers of the settings (Look, Wind, Ground Wetness, Ground Cover, Sky and Light, Fog) with the effect picked from the VFX library, and the list of exposed effects; on the right a live preview (the weather in a small world, with a slider for the intensity and one for the time of day) and the warnings of the weather. See docs: World &gt; Weather.

## Methods

| | |
|---|---|
| `void` | [set_resource_manager](#method-set-resource-manager)( `manager: ResourceManager` ) |
| `Array[WeatherConfig]` | [get_weathers](#method-get-weathers)() |
| `void` | [reload_list](#method-reload-list)( `select_id: int = 0` ) |
| `PackedStringArray` | [get_warning_texts](#method-get-warning-texts)() |

## Signals

### config_changed( config_type: String, config: Resource ) {#signal-config-changed}

## Method descriptions

### void set_resource_manager( manager: ResourceManager ) {#method-set-resource-manager}

*No description yet.*

### Array[WeatherConfig] get_weathers() {#method-get-weathers}

All the weathers of the project, the built-in Clear first and the rest by name

### void reload_list( select_id: int = 0 ) {#method-reload-list}

Fills the list again and keeps (or picks) the selection. `select_id` is the weather to show (0 = the one that was open, or the first)

### PackedStringArray get_warning_texts() {#method-get-warning-texts}

The warnings now: what is in the container (for the tests)


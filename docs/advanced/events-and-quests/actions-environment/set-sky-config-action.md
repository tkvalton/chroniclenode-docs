<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetSkyConfigAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to change the sky configuration at runtime Applies through system_hub.apply_environment_configs() and world_environment

## Properties

| | | |
|---|---|---|
| `SkyConfig` | [sky_config](#prop-sky-config) |  |
| `float` | [blend_seconds](#prop-blend-seconds) | `0.0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### SkyConfig sky_config {#prop-sky-config}

Sky configuration to apply

### float blend_seconds = 0.0 {#prop-blend-seconds}

Seconds the sky takes to change into it (0 = at once). Colours, clouds and stars slide from one sky to the other

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


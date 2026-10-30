<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetEnvironmentConfigAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to change the environment configuration at runtime Applies through system_hub.apply_environment_configs() and world_environment

## Properties

| | | |
|---|---|---|
| `EnvironmentConfig` | [environment_config](#prop-environment-config) |  |
| `float` | [blend_seconds](#prop-blend-seconds) | `0.0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### EnvironmentConfig environment_config {#prop-environment-config}

Environment configuration to apply

### float blend_seconds = 0.0 {#prop-blend-seconds}

Seconds the environment takes to change into it (0 = at once). Fog, ambient light, the sun's light, the colour grade, the camera and the wind slide from one environment to the other; switches change at the halfway point

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


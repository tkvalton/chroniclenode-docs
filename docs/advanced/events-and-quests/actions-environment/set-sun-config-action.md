<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetSunConfigAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to change the sun configuration at runtime Applies through system_hub.apply_environment_configs() and world_sun

## Properties

| | | |
|---|---|---|
| `SunConfig` | [sun_config](#prop-sun-config) |  |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### SunConfig sun_config {#prop-sun-config}

Sun configuration to apply

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


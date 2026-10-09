<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlaySFXGlobalAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to play a sound effect globally (2D audio) Uses SFXSelection for complete audio configuration

## Properties

| | | |
|---|---|---|
| `SFXSelection` | [sfx_selection](#prop-sfx-selection) |  |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### SFXSelection sfx_selection {#prop-sfx-selection}

The SFX to play (includes category, type, volume, pitch)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


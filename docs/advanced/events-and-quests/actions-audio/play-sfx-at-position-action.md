<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlaySFXAtPositionAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to play a sound effect at a 3D position Uses SFXSelection for complete audio configuration

## Properties

| | | |
|---|---|---|
| `SFXSelection` | [sfx_selection](#prop-sfx-selection) |  |
| `Vector3` | [position](#prop-position) | `Vector3.ZERO` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### SFXSelection sfx_selection {#prop-sfx-selection}

The SFX to play (includes category, type, volume, pitch, and 3D settings)

### Vector3 position = Vector3.ZERO {#prop-position}

Position to play the sound at

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


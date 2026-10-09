<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CreateVFXAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to spawn a VFX at a specific position or on a target Uses VFXManager to play VFX from a VFXSelection

## Properties

| | | |
|---|---|---|
| `VFXSelection` | [vfx_selection](#prop-vfx-selection) |  |
| `Vector3` | [spawn_position](#prop-spawn-position) | `Vector3.ZERO` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### VFXSelection vfx_selection {#prop-vfx-selection}

VFX selection to spawn (any VFXSelection type: oneshot, loop, beam, etc.)

### Vector3 spawn_position = Vector3.ZERO {#prop-spawn-position}

Position to spawn the VFX at

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


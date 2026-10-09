<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnWorldEffectAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to spawn a world effect at a specific position World effects are environment-based and don't have a specific caster

## Properties

| | | |
|---|---|---|
| `int` | [effect_id](#prop-effect-id) | `0` |
| `Vector3` | [spawn_position](#prop-spawn-position) | `Vector3.ZERO` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int effect_id = 0 {#prop-effect-id}

Effect ID to spawn

### Vector3 spawn_position = Vector3.ZERO {#prop-spawn-position}

Position to spawn the effect at

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


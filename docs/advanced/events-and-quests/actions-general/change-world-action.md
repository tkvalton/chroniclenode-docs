<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChangeWorldAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action for changing the current map while preserving game session state. Uses GameHost's new map transition system for seamless transitions.

## Properties

| | | |
|---|---|---|
| `int` | [world_id](#prop-world-id) | `0` |
| `SpawnType` | [spawn_type](#prop-spawn-type) | `SpawnType.DEFAULT` |
| `int` | [rabbit_hole_id](#prop-rabbit-hole-id) | `0` |
| `Vector3` | [spawn_position](#prop-spawn-position) | `Vector3.ZERO` |
| `Vector3` | [spawn_rotation](#prop-spawn-rotation) | `Vector3.ZERO` |
| `bool` | [wait_for_completion](#prop-wait-for-completion) | `true` |

## Variables

| | | |
|---|---|---|
| `bool` | [transition_started](#var-transition-started) | `false` |
| `bool` | [transition_completed](#var-transition-completed) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [get_spawn_type_options](#method-get-spawn-type-options)() |
| `void` | [cleanup](#method-cleanup)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum SpawnType {#enum-spawntype}

- **DEFAULT** = `0` - Use map's default spawn point
- **RABBIT_HOLE** = `1` - Spawn at specific rabbit hole
- **EXACT_POSITION** = `2` - Spawn at exact coordinates

## Property descriptions

### int world_id = 0 {#prop-world-id}

ID of the target map to transition to

### SpawnType spawn_type = SpawnType.DEFAULT {#prop-spawn-type}

How the party should be positioned in the new map

### int rabbit_hole_id = 0 {#prop-rabbit-hole-id}

ID of rabbit hole to spawn at (for RABBIT_HOLE spawn type)

### Vector3 spawn_position = Vector3.ZERO {#prop-spawn-position}

Exact position to spawn at (for EXACT_POSITION spawn type)

### Vector3 spawn_rotation = Vector3.ZERO {#prop-spawn-rotation}

Rotation for exact position spawning

### bool wait_for_completion = true {#prop-wait-for-completion}

Whether to wait for transition completion before completing action

## Variable descriptions

### bool transition_started = false {#var-transition-started}

*No description yet.*

### bool transition_completed = false {#var-transition-completed}

*No description yet.*

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary get_spawn_type_options() {#method-get-spawn-type-options}

Helper function to get spawn type options

### void cleanup() {#method-cleanup}

Clean up resources

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


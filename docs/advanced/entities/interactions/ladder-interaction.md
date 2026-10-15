<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LadderInteraction

**Inherits:** [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Ladder interaction - climbing system using Path3D Discovers scene structure by name: "LadderPath", "StartMarker", "EndMarker"

## Properties

| | | |
|---|---|---|
| `float` | [climb_speed](#prop-climb-speed) | `3.0` |
| `bool` | [allow_multiple_climbers](#prop-allow-multiple-climbers) | `false` |
| `bool` | [lock_entity_controls](#prop-lock-entity-controls) | `true` |

## Variables

| | | |
|---|---|---|
| `Path3D` | [ladder_path](#var-ladder-path) |  |
| `Marker3D` | [start_marker](#var-start-marker) |  |
| `Marker3D` | [end_marker](#var-end-marker) |  |
| `LadderState` | [current_state](#var-current-state) | `LadderState.IDLE` |
| `Array[Dictionary]` | [active_climbers](#var-active-climbers) | `[]` |
| `float` | [ladder_length](#var-ladder-length) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `interactable: InteractableObject` ) |
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `String` | [get_interaction_prompt](#method-get-interaction-prompt)() |
| `void` | [start_climbing](#method-start-climbing)( `entity: Entity, direction: ClimbDirection` ) |
| `void` | [interrupt_climbing](#method-interrupt-climbing)( `entity: Entity` ) |
| `void` | [set_ladder_state](#method-set-ladder-state)( `new_state: LadderState` ) |
| `bool` | [is_entity_climbing](#method-is-entity-climbing)( `entity: Entity` ) |
| `float` | [get_climb_progress](#method-get-climb-progress)( `entity: Entity` ) |
| `Dictionary` | [save_state](#method-save-state)() |
| `void` | [load_state](#method-load-state)( `state: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### climb_started( entity: Entity, direction: ClimbDirection ) {#signal-climb-started}

Emitted when an entity starts to climb: the entity and the direction.

### climb_finished( entity: Entity, direction: ClimbDirection ) {#signal-climb-finished}

Emitted when an entity reaches the end of the ladder.

### climb_interrupted( entity: Entity ) {#signal-climb-interrupted}

Emitted when a climb is interrupted before the end.

## Enumerations

### enum ClimbDirection {#enum-climbdirection}

Which way an entity climbs: up (start to end of the path) or down.

- **UP** = `0` - Climbing from start to end of path
- **DOWN** = `1` - Climbing from end to start of path

### enum LadderState {#enum-ladderstate}

The states of a ladder: idle (nobody climbs), in use or broken.

- **IDLE** = `0` - No one is climbing
- **IN_USE** = `1` - Someone is currently climbing
- **BROKEN** = `2` - Ladder is broken/unusable

## Property descriptions

*Ladder Setup*

### float climb_speed = 3.0 {#prop-climb-speed}

Speed at which entities climb (units per second)

### bool allow_multiple_climbers = false {#prop-allow-multiple-climbers}

Whether ladder can be used simultaneously by multiple entities

### bool lock_entity_controls = true {#prop-lock-entity-controls}

(kept for older scenes: the controls of a climbing entity are always locked, the controller ignores input while `is_climbing` is set)

## Variable descriptions

### Path3D ladder_path {#var-ladder-path}

Path3D defining the ladder route (found by name "LadderPath")

### Marker3D start_marker {#var-start-marker}

Start point marker (found by name "StartMarker")

### Marker3D end_marker {#var-end-marker}

End point marker (found by name "EndMarker")

### LadderState current_state = LadderState.IDLE {#var-current-state}

The state of the ladder now.

### Array[Dictionary] active_climbers = [] {#var-active-climbers}

&#123;entity: Entity, direction: ClimbDirection, progress: float, tween: Tween&#125;

### float ladder_length = 0.0 {#var-ladder-length}

The length of the path of the ladder.

## Method descriptions

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

Sets the ladder up on its object: finds the nodes it needs and applies its starting state.

### bool can_interact( player: Player ) {#method-can-interact}

Can the player use the ladder now (in range, the object is not broken, the requirements are met)?

### void start_interaction( player: Player ) {#method-start-interaction}

The player uses the ladder.

### void end_interaction() {#method-end-interaction}

Does nothing: the climb goes on after the interaction ends.

### String get_interaction_prompt() {#method-get-interaction-prompt}

The text of the prompt above the object for its state now ("Open", "Climb" ...).

### void start_climbing( entity: Entity, direction: ClimbDirection ) {#method-start-climbing}

Makes an entity climb the ladder in a direction. Does nothing when it already climbs it.

### void interrupt_climbing( entity: Entity ) {#method-interrupt-climbing}

Stops the climb of an entity.

### void set_ladder_state( new_state: LadderState ) {#method-set-ladder-state}

Sets the state of the ladder.

### bool is_entity_climbing( entity: Entity ) {#method-is-entity-climbing}

Is the entity climbing this ladder?

### float get_climb_progress( entity: Entity ) {#method-get-climb-progress}

How far along the ladder the entity is (0 to 1).

### Dictionary save_state() {#method-save-state}

The state of the ladder for a save.

### void load_state( state: Dictionary ) {#method-load-state}

Restores the state of the ladder from a save.

### void cleanup() {#method-cleanup}

Gives its timers back and clears what it holds (the object is going away).


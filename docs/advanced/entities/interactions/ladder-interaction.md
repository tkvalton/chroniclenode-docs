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
| `Array[Dictionary]` | [active_climbers](#var-active-climbers) | `[]  # {entity: Entity, direction: ClimbDirection, progres...` |
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

### climb_finished( entity: Entity, direction: ClimbDirection ) {#signal-climb-finished}

### climb_interrupted( entity: Entity ) {#signal-climb-interrupted}

## Enumerations

### enum ClimbDirection {#enum-climbdirection}

- **UP** = `0` - Climbing from start to end of path
- **DOWN** = `1` - Climbing from end to start of path

### enum LadderState {#enum-ladderstate}

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

*No description yet.*

### Array[Dictionary] active_climbers = []  # entity: Entity, direction: ClimbDirection, progress: f {#var-active-climbers}

*No description yet.*

### float ladder_length = 0.0 {#var-ladder-length}

*No description yet.*

## Method descriptions

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

*Overrides this function of [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction).*

### bool can_interact( player: Player ) {#method-can-interact}

*Overrides this function of [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction).*

### void start_interaction( player: Player ) {#method-start-interaction}

Start the interaction with the given player *(from [Interaction](/advanced/entities/interactions/interaction))*

### void end_interaction() {#method-end-interaction}

End the current interaction *(from [Interaction](/advanced/entities/interactions/interaction))*

### String get_interaction_prompt() {#method-get-interaction-prompt}

*No description yet.*

### void start_climbing( entity: Entity, direction: ClimbDirection ) {#method-start-climbing}

*No description yet.*

### void interrupt_climbing( entity: Entity ) {#method-interrupt-climbing}

*No description yet.*

### void set_ladder_state( new_state: LadderState ) {#method-set-ladder-state}

*No description yet.*

### bool is_entity_climbing( entity: Entity ) {#method-is-entity-climbing}

*No description yet.*

### float get_climb_progress( entity: Entity ) {#method-get-climb-progress}

*No description yet.*

### Dictionary save_state() {#method-save-state}

*No description yet.*

### void load_state( state: Dictionary ) {#method-load-state}

*No description yet.*

### void cleanup() {#method-cleanup}

*No description yet.*


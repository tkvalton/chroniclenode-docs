<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RabbitHoleInteraction

**Inherits:** [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Rabbit hole teleportation system - supports both local and inter-map teleportation Used by players: local teleportation (same map) and inter-map teleportation (NPCs and pets using a rabbit hole is a future option, through the behaviour tasks)

## Properties

| | | |
|---|---|---|
| `int` | [destination_rabbit_hole_id](#prop-destination-rabbit-hole-id) | `-1` |
| `Vector3` | [arrival_position](#prop-arrival-position) | `Vector3.ZERO` |
| `Vector3` | [arrival_rotation](#prop-arrival-rotation) | `Vector3.ZERO` |
| `String` | [idle_animation](#prop-idle-animation) | `"idle"` |
| `String` | [disabled_animation](#prop-disabled-animation) | `"disabled"` |
| `String` | [broken_animation](#prop-broken-animation) | `"broken"` |

## Variables

| | | |
|---|---|---|
| `RabbitHoleState` | [current_state](#var-current-state) | `RabbitHoleState.ACTIVE` |

## Methods

| | |
|---|---|
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `interactable: InteractableObject` ) |
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `String` | [get_interaction_prompt](#method-get-interaction-prompt)() |
| `Vector3` | [get_spawn_position](#method-get-spawn-position)() |
| `Vector3` | [get_spawn_rotation](#method-get-spawn-rotation)() |
| `void` | [set_rabbit_hole_state](#method-set-rabbit-hole-state)( `new_state: RabbitHoleState` ) |
| `void` | [set_destination_rabbit_hole](#method-set-destination-rabbit-hole)( `rabbit_hole_id: int` ) |
| `int` | [get_destination_rabbit_hole_id](#method-get-destination-rabbit-hole-id)() |
| `bool` | [can_teleport](#method-can-teleport)() |
| `bool` | [is_destination_reachable](#method-is-destination-reachable)() |
| `bool` | [can_entity_teleport](#method-can-entity-teleport)( `entity: Entity` ) |
| `void` | [set_enabled](#method-set-enabled)( `enabled: bool` ) |
| `void` | [set_broken](#method-set-broken)( `broken: bool` ) |
| `bool` | [force_teleport_entity](#method-force-teleport-entity)( `entity: Entity` ) |
| `Dictionary` | [save_state](#method-save-state)() |
| `void` | [load_state](#method-load-state)( `state: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### rabbit_hole_entered( entity: Entity, teleportation_type: String ) {#signal-rabbit-hole-entered}

Emitted when an entity goes in: the entity and the kind of travel.

### rabbit_hole_exited( entity: Entity ) {#signal-rabbit-hole-exited}

Emitted when an entity comes out of this rabbit hole.

### teleportation_failed( entity: Entity, reason: String ) {#signal-teleportation-failed}

Emitted when the travel fails: the entity and why.

## Enumerations

### enum RabbitHoleState {#enum-rabbitholestate}

The states of a rabbit hole: active, disabled for now, or broken for good.

- **ACTIVE** = `0` - Ready for use
- **DISABLED** = `1` - Temporarily disabled
- **BROKEN** = `2` - Permanently broken

## Property descriptions

*Rabbit Hole Setup*

### int destination_rabbit_hole_id = -1 {#prop-destination-rabbit-hole-id}

The unique ID of the destination rabbit hole to teleport to

### Vector3 arrival_position = Vector3.ZERO {#prop-arrival-position}

Arrival position offset (relative to this rabbit hole's position)

### Vector3 arrival_rotation = Vector3.ZERO {#prop-arrival-rotation}

Arrival rotation (euler angles)

*Animations*

### String idle_animation = "idle" {#prop-idle-animation}

The animation of an active rabbit hole.

### String disabled_animation = "disabled" {#prop-disabled-animation}

The animation of a disabled rabbit hole.

### String broken_animation = "broken" {#prop-broken-animation}

The animation of a broken rabbit hole.

## Variable descriptions

### RabbitHoleState current_state = RabbitHoleState.ACTIVE {#var-current-state}

The state of the rabbit hole now.

## Method descriptions

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

Sets the rabbit hole up on its object: finds the nodes it needs and applies its starting state.

### bool can_interact( player: Player ) {#method-can-interact}

Can the player use the rabbit hole now (in range, the object is not broken, the requirements are met)?

### void start_interaction( player: Player ) {#method-start-interaction}

The player uses the rabbit hole.

### void end_interaction() {#method-end-interaction}

Does nothing: a rabbit hole has no end of interaction.

### String get_interaction_prompt() {#method-get-interaction-prompt}

The text of the prompt above the object for its state now ("Open", "Climb" ...).

### Vector3 get_spawn_position() {#method-get-spawn-position}

Where an entity appears when it comes out of this rabbit hole.

### Vector3 get_spawn_rotation() {#method-get-spawn-rotation}

The rotation of an entity that comes out of this rabbit hole.

### void set_rabbit_hole_state( new_state: RabbitHoleState ) {#method-set-rabbit-hole-state}

Sets the state of the rabbit hole and plays its animation.

### void set_destination_rabbit_hole( rabbit_hole_id: int ) {#method-set-destination-rabbit-hole}

Set the destination rabbit hole by unique ID

### int get_destination_rabbit_hole_id() {#method-get-destination-rabbit-hole-id}

Get the destination rabbit hole ID

### bool can_teleport() {#method-can-teleport}

Check if this rabbit hole can currently be used

### bool is_destination_reachable() {#method-is-destination-reachable}

Check if destination is reachable (local or inter-map)

### bool can_entity_teleport( entity: Entity ) {#method-can-entity-teleport}

Check if an entity can use this rabbit hole

### void set_enabled( enabled: bool ) {#method-set-enabled}

Force enable/disable the rabbit hole

### void set_broken( broken: bool ) {#method-set-broken}

Mark rabbit hole as broken

### bool force_teleport_entity( entity: Entity ) {#method-force-teleport-entity}

Force teleport an entity (bypasses normal restrictions)

### Dictionary save_state() {#method-save-state}

The state of the rabbit hole for a save.

### void load_state( state: Dictionary ) {#method-load-state}

Restores the state of the rabbit hole from a save.

### void cleanup() {#method-cleanup}

Gives its timers back and clears what it holds (the object is going away).


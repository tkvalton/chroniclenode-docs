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

### rabbit_hole_exited( entity: Entity ) {#signal-rabbit-hole-exited}

### teleportation_failed( entity: Entity, reason: String ) {#signal-teleportation-failed}

## Enumerations

### enum RabbitHoleState {#enum-rabbitholestate}

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

*No description yet.*

### String disabled_animation = "disabled" {#prop-disabled-animation}

*No description yet.*

### String broken_animation = "broken" {#prop-broken-animation}

*No description yet.*

## Variable descriptions

### RabbitHoleState current_state = RabbitHoleState.ACTIVE {#var-current-state}

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

### Vector3 get_spawn_position() {#method-get-spawn-position}

*No description yet.*

### Vector3 get_spawn_rotation() {#method-get-spawn-rotation}

*No description yet.*

### void set_rabbit_hole_state( new_state: RabbitHoleState ) {#method-set-rabbit-hole-state}

*No description yet.*

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

*No description yet.*

### void load_state( state: Dictionary ) {#method-load-state}

*No description yet.*

### void cleanup() {#method-cleanup}

*No description yet.*


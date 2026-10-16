<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountSession

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

One rider on one seat. There are three kinds, and the session does all of them:

## Description

- **A mount that is a model** (the Mount effect): the model of the mount is added to the rider, the rider sits on its seat and keeps moving by itself, faster or swimming or flying

as the mount says. There is no creature to hurt or steer: this is the mount of a game that wants "mounts" as a speed buff with a look.

- **A mount that is an entity** (a Mount interaction, or `start_mount` with a mount): a creature or a vehicle of the world with seats. The rider is carried on its seat. The rider of a

seat that steers (a Driver seat) gives the keys to the drive logic; the others are carried. The mount keeps its health and stats. Its own behavior waits while it is ridden.

- **A crew** (`begin_crew`): nobody sits, but the seat has an AI that runs when the seat is empty (a tank crewed by AI). It has no rider.

Who acts for a seat is decided every frame: the character the player controls, when it sits here, gives the keys; any other rider (a companion, an NPC) and the empty seat of a crew are acted for by the AI of the seat (a SeatAI), if it has one; otherwise nothing acts.

Start one with `Entity.start_mount(definition)` (a model) or `Entity.start_mount(definition, mount_entity)`. `dismount()` ends it. The session belongs to the rider and is freed with it.

## Variables

| | | |
|---|---|---|
| `Entity` | [rider](#var-rider) |  |
| `Entity` | [mount](#var-mount) |  |
| `MountDefinition` | [definition](#var-definition) |  |
| `Seat` | [seat](#var-seat) |  |
| `int` | [seat_index](#var-seat-index) | `0` |
| `DriveLogic` | [drive_logic](#var-drive-logic) |  |
| `Node3D` | [model](#var-model) |  |
| `bool` | [restoring](#var-restoring) | `false` |

## Methods

| | |
|---|---|
| `MountSession` | [begin](#method-begin)( `p_rider: Entity, p_definition: MountDefinition, p_mount: Entity = null, p_drive_logic: DriveLogic = null, p_seat_index: int = -1, p_force: bool = false, p_seat_state: Dictionary = {}, p_restoring: bool = false` ) *static* |
| `bool` | [is_blocked_by_hostility](#method-is-blocked-by-hostility)( `vehicle: Entity, rider: Entity` ) *static* |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `MountSession` | [begin_restored](#method-begin-restored)( `p_rider: Entity, p_definition: MountDefinition, p_mount: Entity, p_seat_index: int, p_seat_state: Dictionary` ) *static* |
| `MountSession` | [begin_crew](#method-begin-crew)( `p_mount: Entity, p_definition: MountDefinition, p_seat_index: int` ) *static* |
| `bool` | [dismount](#method-dismount)( `_reason: String = ""` ) |
| `Transform3D` | [get_seat_transform](#method-get-seat-transform)() |
| `bool` | [is_controlled_by_player](#method-is-controlled-by-player)() |
| `Acting` | [get_control](#method-get-control)() |
| `NavigationController` | [get_navigation](#method-get-navigation)() |
| `NavigationController` | [get_brain_navigation](#method-get-brain-navigation)() |
| `Variant` | [get_ai_target](#method-get-ai-target)() |
| `Entity` | [get_caster](#method-get-caster)() |
| `void` | [set_move](#method-set-move)( `input: Vector2, speed: float, forward: Vector3` ) |
| `float` | [get_top_speed](#method-get-top-speed)() |
| `bool` | [is_body_free_moving](#method-is-body-free-moving)() |
| `Vector3` | [get_camera_direction](#method-get-camera-direction)( `input: Vector2, use_pitch: bool` ) |
| `float` | [find_water_surface](#method-find-water-surface)( `point: Vector3, tree: SceneTree` ) *static* |

## Signals

### dismounted( rider: Entity, mount: Entity ) {#signal-dismounted}

Emitted when the rider gets off (or the crew stops: the rider is null)

## Enumerations

### enum Acting {#enum-acting}

Who acts for a seat

- **NONE** = `0`
- **PLAYER** = `1`
- **AI** = `2`

## Constants

- `float` **DISMOUNT_DISTANCE** = `1.6` - How far from the mount the rider lands when it gets off

## Variable descriptions

### Entity rider {#var-rider}

The entity that rides (null for a crew)

### Entity mount {#var-mount}

The creature or vehicle that carries the rider (null for a mount that is only a model)

### MountDefinition definition {#var-definition}

What the mount is

### Seat seat {#var-seat}

The seat of the rider (a copy of the one of the definition: it can keep a state)

### int seat_index = 0 {#var-seat-index}

Which seat of the mount this is (0 is the first)

### DriveLogic drive_logic {#var-drive-logic}

The logic that steers the mount (only a seat that steers has one)

### Node3D model {#var-model}

The model of the mount (a mount that is only a model)

### bool restoring = false {#var-restoring}

True while a loaded game puts the ride back: nothing is announced or changed, the rider just sits as it did

## Method descriptions

### MountSession begin( p_rider: Entity, p_definition: MountDefinition, p_mount: Entity = null, p_drive_logic: DriveLogic = null, p_seat_index: int = -1, p_force: bool = false, p_seat_state: Dictionary = &#123;&#125;, p_restoring: bool = false ) {#method-begin}

Puts a rider on a mount. `seat_index` -1 takes the first seat that is free. A drive logic of your own steers instead of the one of the definition. Returns the session, or null when it cannot be done (the rider is dead or already on a mount, the mount is dead or full, the seat refuses the rider)

### bool is_blocked_by_hostility( vehicle: Entity, rider: Entity ) {#method-is-blocked-by-hostility}

Is this vehicle hostile to the rider and not hijackable? Then the rider cannot board it

### Dictionary to_save_data() {#method-to-save-data}

What a save needs to put this ride back after everything is loaded: which mount and seat (a mount without an id of the world, a spawned NPC, cannot be found again)

### MountSession begin_restored( p_rider: Entity, p_definition: MountDefinition, p_mount: Entity, p_seat_index: int, p_seat_state: Dictionary ) {#method-begin-restored}

Puts a rider on a mount as a loaded game had it: no checks, no changes of faction, nothing announced

### MountSession begin_crew( p_mount: Entity, p_definition: MountDefinition, p_seat_index: int ) {#method-begin-crew}

Puts a crew on a seat of a mount that nobody sits in: the AI of the seat acts, with nobody to carry. Returns null when the seat has no AI or is not free

### bool dismount( _reason: String = "" ) {#method-dismount}

Gets off (or stops the crew). `reason` is for the signal and the log. Returns false when the ride was over already

### Transform3D get_seat_transform() {#method-get-seat-transform}

Where the rider sits now: the node of the seat in the model of the mount, or the seat offset from its body

### bool is_controlled_by_player() {#method-is-controlled-by-player}

Is the player steering this rider (the character in control)?

### Acting get_control() {#method-get-control}

Who acts for the seat now

### NavigationController get_navigation() {#method-get-navigation}

The navigation controller of the mount (null for a mount that is only a model)

### NavigationController get_brain_navigation() {#method-get-brain-navigation}

The navigation of whoever decides where the mount goes: the rider (a companion that follows its leader, an NPC that was sent somewhere), or the mount when there is no rider

### Variant get_ai_target() {#method-get-ai-target}

What an AI of the seat shoots at: the target of the rider, or the one of the mount when there is no rider or the rider has none

### Entity get_caster() {#method-get-caster}

Who casts the abilities of the seat for an AI: the rider, or the mount when nobody sits

### void set_move( input: Vector2, speed: float, forward: Vector3 ) {#method-set-move}

Sends the movement to the body of the mount: the keys (x right, y forward), the speed and the direction that is forward

### float get_top_speed() {#method-get-top-speed}

The speed of the mount at full throttle: its movement speed stat times the speed of the mount

### bool is_body_free_moving() {#method-is-body-free-moving}

Is the body of the mount swimming or flying?

### Vector3 get_camera_direction( input: Vector2, use_pitch: bool ) {#method-get-camera-direction}

The direction the keys ask for, relative to the camera (flat on the ground, along the pitch of the camera when the mount swims or flies). An AI acts for the seat relative to the mount itself: (0, 1) is straight ahead of it

### float find_water_surface( point: Vector3, tree: SceneTree ) {#method-find-water-surface}

The height of the water surface (the top of a movement volume with a surface) at a point, or INF when there is no water under it


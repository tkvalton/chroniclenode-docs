<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountSession

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

One rider on one seat. There are two kinds, and the session does both:

## Description

- **A mount that is a model** (the Mount effect): the model of the mount is added to the rider, the rider sits on its seat and keeps moving by itself, faster or swimming or flying

as the mount says. There is no creature to hurt or steer: this is the mount of a game that wants "mounts" as a speed buff with a look.

- **A mount that is an entity** (a Mount interaction, or `start_mount` with a mount): a creature or a vehicle of the world with seats. The rider is carried on its seat. The rider of a

seat that steers (a Driver seat) gives the keys to the drive logic; the others are carried. The mount keeps its health and stats. Its own behavior waits while it is ridden.

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

## Methods

| | |
|---|---|
| `MountSession` | [begin](#method-begin)( `p_rider: Entity, p_definition: MountDefinition, p_mount: Entity = null, p_drive_logic: DriveLogic = null, p_seat_index: int = -1` ) *static* |
| `bool` | [dismount](#method-dismount)( `_reason: String = ""` ) |
| `Transform3D` | [get_seat_transform](#method-get-seat-transform)() |
| `bool` | [is_controlled_by_player](#method-is-controlled-by-player)() |
| `void` | [set_move](#method-set-move)( `input: Vector2, speed: float, forward: Vector3` ) |
| `float` | [get_top_speed](#method-get-top-speed)() |
| `bool` | [is_body_free_moving](#method-is-body-free-moving)() |
| `Vector3` | [get_camera_direction](#method-get-camera-direction)( `input: Vector2, use_pitch: bool` ) |
| `float` | [find_water_surface](#method-find-water-surface)( `point: Vector3, tree: SceneTree` ) *static* |

## Signals

### dismounted( rider: Entity, mount: Entity ) {#signal-dismounted}

Emitted when the rider gets off

## Constants

- `float` **DISMOUNT_DISTANCE** = `1.6` - How far from the mount the rider lands when it gets off

## Variable descriptions

### Entity rider {#var-rider}

The entity that rides

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

## Method descriptions

### MountSession begin( p_rider: Entity, p_definition: MountDefinition, p_mount: Entity = null, p_drive_logic: DriveLogic = null, p_seat_index: int = -1 ) {#method-begin}

Puts a rider on a mount. `seat_index` -1 takes the first seat that is free. A drive logic of your own steers instead of the one of the definition. Returns the session, or null when it cannot be done (the rider is dead or already on a mount, the mount is dead or full, the seat refuses the rider)

### bool dismount( _reason: String = "" ) {#method-dismount}

Gets off. `reason` is for the signal and the log. Returns false when the ride was over already

### Transform3D get_seat_transform() {#method-get-seat-transform}

Where the rider sits now: the node of the seat in the model of the mount, or the seat offset from its body

### bool is_controlled_by_player() {#method-is-controlled-by-player}

Is the player steering this rider (the character in control)?

### void set_move( input: Vector2, speed: float, forward: Vector3 ) {#method-set-move}

Sends the movement to the body of the mount: the keys (x right, y forward), the speed and the direction that is forward

### float get_top_speed() {#method-get-top-speed}

The speed of the mount at full throttle: its movement speed stat times the speed of the mount

### bool is_body_free_moving() {#method-is-body-free-moving}

Is the body of the mount swimming or flying?

### Vector3 get_camera_direction( input: Vector2, use_pitch: bool ) {#method-get-camera-direction}

The direction the keys ask for, relative to the camera (flat on the ground, along the pitch of the camera when the mount swims or flies)

### float find_water_surface( point: Vector3, tree: SceneTree ) {#method-find-water-surface}

The height of the water surface (the top of a movement volume with a surface) at a point, or INF when there is no water under it


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Seat

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [DriverSeat](/advanced/entities/mounts/driver-seat), [PassengerSeat](/advanced/entities/mounts/passenger-seat), [TurretSeat](/advanced/entities/mounts/turret-seat)

A place on a mount or a vehicle where one rider sits: where it is, how the rider sits, what it may do from there, and which abilities the action bar shows while it sits. This is the base: use DriverSeat (steers the mount) and PassengerSeat (only rides), or make your own by extending this class (a TurretSeat that aims a gun). A script that extends Seat in the folder data_classes/mount/seats/ is found by the Mounts editor and can be chosen there; its exported variables appear in the editor.

## Description

Override `on_enter`, `on_exit` and `process` for what your seat does. The seat belongs to one ride (a copy is made when a rider sits), so it can keep a state.

## Properties

| | | |
|---|---|---|
| `String` | [display_name](#prop-display-name) | `"Seat"` |
| `String` | [marker_name](#prop-marker-name) | `""` |
| `Vector3` | [seat_offset](#prop-seat-offset) | `Vector3(0.0, 1.0, 0.0)` |
| `String` | [pose_name](#prop-pose-name) | `""` |
| `bool` | [controls_movement](#prop-controls-movement) | `false` |
| `SeatAI` | [ai](#prop-ai) | `null` |
| `bool` | [ai_runs_when_empty](#prop-ai-runs-when-empty) | `false` |
| `Array[SeatAbilitySlot]` | [ability_slots](#prop-ability-slots) | `[]` |
| `bool` | [clears_other_slots](#prop-clears-other-slots) | `false` |

## Variables

| | | |
|---|---|---|
| `MountSession` | [session](#var-session) |  |

## Methods

| | |
|---|---|
| `Dictionary` | [get_field_descriptions](#method-get-field-descriptions)() |
| `String` | [get_seat_type_name](#method-get-seat-type-name)() |
| `String` | [get_seat_type_description](#method-get-seat-type-description)() |
| `bool` | [can_enter](#method-can-enter)( `_rider: Entity` ) |
| `void` | [on_enter](#method-on-enter)( `p_session: MountSession` ) |
| `void` | [on_exit](#method-on-exit)() |
| `void` | [process](#method-process)( `_input: Vector2, _delta: float` ) |
| `Array[String]` | [validate](#method-validate)() |

## Property descriptions

### String display_name = "Seat" {#prop-display-name}

What the seat is called in the editor

### String marker_name = "" {#prop-marker-name}

The node of the mount model where the rider sits (a Marker3D or any Node3D, found by its name under the model). Empty: the first seat uses the mount seat of the skeleton and the others the Seat offset

### Vector3 seat_offset = Vector3(0.0, 1.0, 0.0) {#prop-seat-offset}

Where the rider sits compared with the mount when the model has no marker for this seat (in the space of the mount)

### String pose_name = "" {#prop-pose-name}

The pose of the rider: the name of a status animation folder (its _loop animation plays while the rider sits). Empty = none

### bool controls_movement = false {#prop-controls-movement}

The rider of this seat steers the mount (the keys go to the drive logic). Only one seat at a time should

*AI*

### SeatAI ai = null {#prop-ai}

What acts for this seat when the rider is not the player (a companion, an NPC) or when nobody sits: a SeatAI (a DriverSeatAI follows where the mount is sent, a TurretSeatAI aims and fires). The seat is player controlled when the character in control sits in it. Empty = nothing acts

### bool ai_runs_when_empty = false {#prop-ai-runs-when-empty}

The AI acts when nobody sits in the seat (a tank crewed by AI). Only for a mount that is an NPC with a Mount interaction, and only while no player rides it

*Action bar*

### Array[SeatAbilitySlot] ability_slots = [] {#prop-ability-slots}

The slots of the action bar that this seat takes over while the rider sits

### bool clears_other_slots = false {#prop-clears-other-slots}

All the other slots are emptied while the rider sits (the seat has the whole bar), instead of staying as the player has them

## Variable descriptions

### MountSession session {#var-session}

The ride this seat is in (set when a rider sits, empty otherwise)

## Method descriptions

### Dictionary get_field_descriptions() {#method-get-field-descriptions}

The sentences the editor shows as tooltips: &#123;name of an exported variable: text&#125;. A seat of your own adds its variables (call super and merge)

### String get_seat_type_name() {#method-get-seat-type-name}

What this kind of seat is called in the editor list

### String get_seat_type_description() {#method-get-seat-type-description}

A sentence about what this kind of seat does, for the editor

### bool can_enter( _rider: Entity ) {#method-can-enter}

Can this entity sit here? Override to refuse (a seat only for a class, for someone with a key)

### void on_enter( p_session: MountSession ) {#method-on-enter}

A rider sat down. Override for your own setup and call super

### void on_exit() {#method-on-exit}

The rider got up. Override for your own cleanup and call super

### void process( _input: Vector2, _delta: float ) {#method-process}

Every physics frame while the rider sits. `input` is the move keys (x right, y forward) of the player that controls the rider, zero when it does not. Override for a turret that follows the camera, a seat that drains a resource, and so on

### Array[String] validate() {#method-validate}

Problems with the settings of the seat (empty when it is fine), for the editor


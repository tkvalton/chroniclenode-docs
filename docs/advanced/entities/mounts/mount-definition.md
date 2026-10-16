<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A mount or a vehicle: how it moves, how it is steered, and the seats where riders sit. One definition is used by many: a Mount interaction on an NPC (a creature or a vehicle that the player gets on) and the Mount effect (a mount that is only a model and a speed) point at one. Make them in the Mounts editor (Entities &gt; Mounts).

## Description

The steering is a DriveLogic and each seat is a Seat; both are classes that you can extend (see them), and the editor lists what it finds in their folders.

## Properties

| | | |
|---|---|---|
| `int` | [model_entity_id](#prop-model-entity-id) | `0` |
| `Movement` | [movement](#prop-movement) | `Movement.GROUND` |
| `float` | [speed_multiplier](#prop-speed-multiplier) | `1.5` |
| `float` | [vertical_speed](#prop-vertical-speed) | `4.0` |
| `DriveLogic` | [drive_logic](#prop-drive-logic) | `null` |
| `Array[Seat]` | [seats](#prop-seats) | `[]` |
| `bool` | [dismount_on_damage](#prop-dismount-on-damage) | `false` |
| `bool` | [hijackable](#prop-hijackable) | `false` |
| `String` | [mount_idle_animation](#prop-mount-idle-animation) | `"idle"` |
| `String` | [mount_move_animation](#prop-mount-move-animation) | `"run"` |

## Methods

| | |
|---|---|
| `Array[Seat]` | [get_seats](#method-get-seats)() |
| `DriveLogic` | [make_drive_logic](#method-make-drive-logic)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Movement {#enum-movement}

The way the mount moves

- **GROUND** = `0`
- **SWIM** = `1`
- **FLY** = `2`
- **BOAT** = `3`

## Property descriptions

### int model_entity_id = 0 {#prop-model-entity-id}

The creature whose model is the mount, for the Mount effect (an NPC of the Database). Its stats, abilities and AI are not used. A mount that is an NPC of the world has its own model

### Movement movement = Movement.GROUND {#prop-movement}

How the mount moves

### float speed_multiplier = 1.5 {#prop-speed-multiplier}

The speed compared with normal: the speed of the rider (Mount effect) or of the mount (a creature or a vehicle) times this

### float vertical_speed = 4.0 {#prop-vertical-speed}

How fast the mount goes up and down when it swims or flies (units per second)

### DriveLogic drive_logic = null {#prop-drive-logic}

How the mount is steered by the rider of a seat that steers. Empty = Walk

### Array[Seat] seats = [] {#prop-seats}

The places for riders. Empty = one Driver seat

### bool dismount_on_damage = false {#prop-dismount-on-damage}

A rider gets off when it takes damage

### bool hijackable = false {#prop-hijackable}

A vehicle that is hostile to a character can be taken by it (sit in it and make it yours). Off: a hostile vehicle cannot be boarded. This is the value a vehicle starts with; an event, an effect or a script changes it for one vehicle (Entity.mount_hijackable)

### String mount_idle_animation = "idle" {#prop-mount-idle-animation}

Mount model with an AnimationPlayer: the animation played when the mount stands still

### String mount_move_animation = "run" {#prop-mount-move-animation}

Mount model with an AnimationPlayer: the animation played when the mount moves

## Method descriptions

### Array[Seat] get_seats() {#method-get-seats}

The seats of the mount: its own, or one Driver seat when it has none

### DriveLogic make_drive_logic() {#method-make-drive-logic}

A copy of the drive logic for one ride (it keeps a state), or a Walk logic when the mount has none

### Array[Dictionary] validate() {#method-validate}

Checks the settings. Gives the problems found (empty when it is fine).


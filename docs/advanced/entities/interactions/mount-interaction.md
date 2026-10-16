<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountInteraction

**Inherits:** [EntityInteraction](/advanced/entities/interactions/entity-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [VehicleInteraction](/advanced/entities/interactions/vehicle-interaction)

Lets the player get on this creature: a horse, a wolf, a griffin, a boat. The creature is a normal NPC (or pet) with its health and stats; while it is ridden the player steers it with the keys and its own behavior waits. The model of the creature should have a mount seat (the skeleton has "Has mount seat" and a MountSeatRemote); without one the rider sits at the Seat offset. The rider gets off with the dismount key, when it or the mount dies, or (if you ask) when it is hurt.

## Description

The fields are the ones of the Mount effect (see MountConfig); the entity id is not used here: the mount is this creature.

## Properties

| | | |
|---|---|---|
| `MountConfig.Movement` | [movement](#prop-movement) | `MountConfig.Movement.GROUND` |
| `float` | [speed_multiplier](#prop-speed-multiplier) | `1.0` |
| `float` | [vertical_speed](#prop-vertical-speed) | `4.0` |
| `MountConfig.Drive` | [drive](#prop-drive) | `MountConfig.Drive.WALK` |
| `float` | [acceleration](#prop-acceleration) | `6.0` |
| `float` | [braking](#prop-braking) | `10.0` |
| `float` | [turn_rate_degrees](#prop-turn-rate-degrees) | `90.0` |
| `float` | [reverse_speed_share](#prop-reverse-speed-share) | `0.4` |
| `String` | [custom_drive_logic_path](#prop-custom-drive-logic-path) | `""` |
| `Vector3` | [seat_offset](#prop-seat-offset) | `Vector3(0.0, 1.0, 0.0)` |
| `String` | [pose_name](#prop-pose-name) | `""` |
| `bool` | [dismount_on_damage](#prop-dismount-on-damage) | `false` |

## Methods

| | |
|---|---|
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `String` | [get_block_reason](#method-get-block-reason)( `_entity: Entity` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |

## Property descriptions

### MountConfig.Movement movement = MountConfig.Movement.GROUND {#prop-movement}

How the mount moves: on the ground, swimming, flying, or as a boat on the water

### float speed_multiplier = 1.0 {#prop-speed-multiplier}

The speed of the creature times this while it is ridden

### float vertical_speed = 4.0 {#prop-vertical-speed}

How fast the mount goes up and down when it swims or flies (units per second)

*Steering*

### MountConfig.Drive drive = MountConfig.Drive.WALK {#prop-drive}

How the player steers the mount: Walk (relative to the camera, like a horse) or Vehicle (throttle and steering)

### float acceleration = 6.0 {#prop-acceleration}

Vehicle: how fast it speeds up (units per second, each second)

### float braking = 10.0 {#prop-braking}

Vehicle: how fast it slows down (units per second, each second)

### float turn_rate_degrees = 90.0 {#prop-turn-rate-degrees}

Vehicle: how fast it turns at full speed (degrees per second)

### float reverse_speed_share = 0.4 {#prop-reverse-speed-share}

Vehicle: how fast it can reverse, as a share of its top speed

### String custom_drive_logic_path = "" {#prop-custom-drive-logic-path}

A script of your own that steers the mount (a res:// path of a script that extends DriveLogic). Empty = the Steering above

*The rider*

### Vector3 seat_offset = Vector3(0.0, 1.0, 0.0) {#prop-seat-offset}

Where the rider sits compared with the mount when its model has no seat

### String pose_name = "" {#prop-pose-name}

The pose of the rider: the name of a status animation folder (its _loop animation plays while the rider is on). Empty = none

### bool dismount_on_damage = false {#prop-dismount-on-damage}

The rider gets off when it takes damage

## Method descriptions

### bool can_interact( player: Player ) {#method-can-interact}

Only a creature that nobody rides and that is alive can be ridden, and only by a player that is not riding

### String get_block_reason( _entity: Entity ) {#method-get-block-reason}

Why the interaction cannot start now ("" = it can, or it says nothing): the user is told when `can_interact` is false *(from [Interaction](/advanced/entities/interactions/interaction))*

### void start_interaction( player: Player ) {#method-start-interaction}

The player gets on


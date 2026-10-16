<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MountConfig

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

What a mount is: how it moves, how it is ridden, how the rider sits. One class for the three ways to ride: the Mount effect (a mount that is only a model and a speed), the Mount interaction (a creature the player gets on) and the Vehicle interaction (a tank, a cart, a boat). They all have the same fields and make a MountConfig from them, so a mount is described the same way wherever it comes from.

## Properties

| | | |
|---|---|---|
| `int` | [entity_id](#prop-entity-id) | `0` |
| `Movement` | [movement](#prop-movement) | `Movement.GROUND` |
| `float` | [speed_multiplier](#prop-speed-multiplier) | `1.5` |
| `float` | [vertical_speed](#prop-vertical-speed) | `4.0` |
| `Drive` | [drive](#prop-drive) | `Drive.WALK` |
| `float` | [acceleration](#prop-acceleration) | `6.0` |
| `float` | [braking](#prop-braking) | `10.0` |
| `float` | [turn_rate_degrees](#prop-turn-rate-degrees) | `90.0` |
| `float` | [reverse_speed_share](#prop-reverse-speed-share) | `0.4` |
| `String` | [custom_drive_logic_path](#prop-custom-drive-logic-path) | `""` |
| `Vector3` | [seat_offset](#prop-seat-offset) | `Vector3(0.0, 1.0, 0.0)` |
| `String` | [pose_name](#prop-pose-name) | `""` |
| `bool` | [dismount_on_damage](#prop-dismount-on-damage) | `false` |
| `String` | [mount_idle_animation](#prop-mount-idle-animation) | `"idle"` |
| `String` | [mount_move_animation](#prop-mount-move-animation) | `"run"` |

## Methods

| | |
|---|---|
| `MountConfig` | [from_object](#method-from-object)( `source: Object` ) *static* |

## Enumerations

### enum Movement {#enum-movement}

The way the mount movement works

- **GROUND** = `0`
- **SWIM** = `1`
- **FLY** = `2`
- **BOAT** = `3`

### enum Drive {#enum-drive}

How a mount that the player steers is steered

- **WALK** = `0`
- **VEHICLE** = `1`

## Property descriptions

### int entity_id = 0 {#prop-entity-id}

The creature whose model is the mount (an NPC of the Database). For the Mount effect: the model that is added to the rider. Its stats, abilities and AI are not used

### Movement movement = Movement.GROUND {#prop-movement}

How the mount moves

### float speed_multiplier = 1.5 {#prop-speed-multiplier}

The speed compared with normal: the speed of the rider (Mount effect) or of the mount (a creature or a vehicle) times this

### float vertical_speed = 4.0 {#prop-vertical-speed}

How fast the mount goes up and down when it swims or flies (units per second)

*Steering (a creature or a vehicle)*

### Drive drive = Drive.WALK {#prop-drive}

How the player steers the mount

### float acceleration = 6.0 {#prop-acceleration}

Vehicle: how fast it speeds up (units per second, each second)

### float braking = 10.0 {#prop-braking}

Vehicle: how fast it slows down when no key is pressed or the brake is (units per second, each second)

### float turn_rate_degrees = 90.0 {#prop-turn-rate-degrees}

Vehicle: how fast it turns at full speed (degrees per second)

### float reverse_speed_share = 0.4 {#prop-reverse-speed-share}

Vehicle: how fast it can reverse, as a share of its top speed

### String custom_drive_logic_path = "" {#prop-custom-drive-logic-path}

A script of your own that steers the mount (a res:// path of a script that extends DriveLogic). Empty = the Drive above

*The rider*

### Vector3 seat_offset = Vector3(0.0, 1.0, 0.0) {#prop-seat-offset}

Where the rider sits compared with the mount when its model has no seat (a model with a seat uses the seat). In the space of the mount

### String pose_name = "" {#prop-pose-name}

The pose of the rider: the name of a status animation folder (its _loop animation plays while the rider is on the mount). Empty = none

### bool dismount_on_damage = false {#prop-dismount-on-damage}

The rider gets off when it takes damage

### String mount_idle_animation = "idle" {#prop-mount-idle-animation}

Mount model with an AnimationPlayer: the animation played when the mount stands still

### String mount_move_animation = "run" {#prop-mount-move-animation}

Mount model with an AnimationPlayer: the animation played when the mount moves

## Method descriptions

### MountConfig from_object( source: Object ) {#method-from-object}

A config with the values of an object that has the same fields (the Mount effect, the Mount interaction): each field is copied by its name


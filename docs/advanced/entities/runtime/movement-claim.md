<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementClaim

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What something asks of the movement of an entity: a movement volume that is around it (water, a weightless room), an effect that lets it fly. An entity can have several claims at once: the one with the highest mode decides (flying over swimming over walking; of two equal ones the later wins). A claim that only changes the speed (wading through shallow water) has the mode Ground.

## Description

Add one with `Entity.add_movement_claim` and take it away with `Entity.remove_movement_claim(source)`.

## Variables

| | | |
|---|---|---|
| `Object` | [source](#var-source) | `null` |
| `Mode` | [mode](#var-mode) | `Mode.GROUND` |
| `float` | [speed_multiplier](#var-speed-multiplier) | `1.0` |
| `float` | [vertical_speed](#var-vertical-speed) | `3.0` |
| `IdleBuoyancy` | [idle_buoyancy](#var-idle-buoyancy) | `IdleBuoyancy.HOVER` |
| `float` | [surface_y](#var-surface-y) | `INF` |
| `float` | [float_depth](#var-float-depth) | `1.0` |
| `float` | [surface_stop_depth](#var-surface-stop-depth) | `0.6` |
| `bool` | [allows_surface_leap](#var-allows-surface-leap) | `false` |
| `bool` | [follows_camera_pitch](#var-follows-camera-pitch) | `true` |
| `bool` | [vertical_control](#var-vertical-control) | `true` |
| `Vector3` | [flow_velocity](#var-flow-velocity) | `Vector3.ZERO` |
| `String` | [footstep_surface](#var-footstep-surface) | `""` |
| `String` | [footstep_swim](#var-footstep-swim) | `""` |
| `int` | [priority](#var-priority) | `0` |

## Enumerations

### enum Mode {#enum-mode}

How an entity moves: on the ground (gravity, walking), swimming (free 3D movement, the swim animations) or flying (free 3D movement, nothing pulls it down).

- **GROUND** = `0`
- **SWIM** = `1`
- **FLY** = `2`

### enum IdleBuoyancy {#enum-idlebuoyancy}

What an entity that gives no vertical input does in a free movement mode: stay where it is, rise to the surface, or sink.

- **HOVER** = `0`
- **FLOAT_UP** = `1`
- **SINK** = `2`

## Variable descriptions

### Object source = null {#var-source}

Who made the claim (taken away with it). Anything: a volume, an effect

### Mode mode = Mode.GROUND {#var-mode}

The movement mode the claim asks for

### float speed_multiplier = 1.0 {#var-speed-multiplier}

What the claim does to the speed on the ground and in the water (1 = nothing, 0.5 = half)

### float vertical_speed = 3.0 {#var-vertical-speed}

How fast the entity moves up and down in a free mode (units per second)

### IdleBuoyancy idle_buoyancy = IdleBuoyancy.HOVER {#var-idle-buoyancy}

What an entity does when it gives no vertical input

### float surface_y = INF {#var-surface-y}

The height of the surface (world y) that FLOAT_UP rises to and that the entity cannot rise through. INF = no surface (the air, a weightless room)

### float float_depth = 1.0 {#var-float-depth}

How far below the surface the feet of a floating entity are (so the head is out of the water)

### float surface_stop_depth = 0.6 {#var-surface-stop-depth}

How far below the surface an entity swimming up is stopped (it can leap out of the water from there)

### bool allows_surface_leap = false {#var-allows-surface-leap}

Can an entity that swims up to the surface leap out of the water (jump)?

### bool follows_camera_pitch = true {#var-follows-camera-pitch}

Does an entity moving through this follow the camera up and down (look up and move forward to rise)?

### bool vertical_control = true {#var-vertical-control}

Can the entity steer up and down (jump, crouch and the camera pitch)? A boat cannot: it floats on the surface

### Vector3 flow_velocity = Vector3.ZERO {#var-flow-velocity}

How fast the water or the wind carries the entity (a river, a current), in the world, metres per second. It is added to how the entity moves, and the claims add up

### String footstep_surface = "" {#var-footstep-surface}

What the ground sounds like to the entity while it is in this (the kind of ground of its footsteps: "water", "mud", the words of the folders of your footstep sounds). Empty = no say: the ground under it decides

### String footstep_swim = "" {#var-footstep-swim}

What the ground sounds like to an entity that SWIMS in this ("water_deep"): the sounds of its strokes, and of jumping into and out of the water. Empty = the footstep surface above, else "water"

### int priority = 0 {#var-priority}

Of two claims with the same mode the one with the higher priority wins (of two equal ones, the later). A mount is 10, a volume 0


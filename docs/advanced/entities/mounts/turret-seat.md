<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TurretSeat

**Inherits:** [Seat](/advanced/entities/mounts/seat) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The seat of a gunner: a turret on the model that follows where the rider aims. A player aims with the camera; an AI (a TurretSeatAI) aims at its target. The turret is a node of the model of the mount (found by its name) that turns on its vertical axis, and an optional barrel node that tilts. The abilities of the seat (its action bar slots) are the guns.

## Description

Make your own seat by extending this one, or Seat (see Advanced).

## Properties

| | | |
|---|---|---|
| `String` | [turret_node_name](#prop-turret-node-name) | `"Turret"` |
| `String` | [barrel_node_name](#prop-barrel-node-name) | `""` |
| `float` | [yaw_limit_degrees](#prop-yaw-limit-degrees) | `180.0` |
| `float` | [pitch_min_degrees](#prop-pitch-min-degrees) | `-10.0` |
| `float` | [pitch_max_degrees](#prop-pitch-max-degrees) | `45.0` |
| `float` | [turn_speed_degrees](#prop-turn-speed-degrees) | `120.0` |
| `bool` | [aim_with_camera](#prop-aim-with-camera) | `true` |

## Variables

| | | |
|---|---|---|
| `float` | [current_yaw](#var-current-yaw) | `0.0` |
| `float` | [current_pitch](#var-current-pitch) | `0.0` |

## Methods

| | |
|---|---|
| `String` | [get_seat_type_name](#method-get-seat-type-name)() |
| `String` | [get_seat_type_description](#method-get-seat-type-description)() |
| `Dictionary` | [get_field_descriptions](#method-get-field-descriptions)() |
| `void` | [on_enter](#method-on-enter)( `p_session: MountSession` ) |
| `void` | [aim_at](#method-aim-at)( `world_point: Vector3` ) |
| `void` | [aim_in_direction](#method-aim-in-direction)( `direction: Vector3` ) |
| `bool` | [is_aimed](#method-is-aimed)( `tolerance: float` ) |
| `Vector3` | [get_aim_direction](#method-get-aim-direction)() |
| `void` | [process](#method-process)( `_input: Vector2, delta: float` ) |

## Property descriptions

### String turret_node_name = "Turret" {#prop-turret-node-name}

The node of the mount model that turns left and right (found by its name under the mount). Empty or missing: nothing turns, but the seat still knows where it aims

### String barrel_node_name = "" {#prop-barrel-node-name}

The node that tilts up and down (the barrel). Empty: none

### float yaw_limit_degrees = 180.0 {#prop-yaw-limit-degrees}

How far the turret can turn to each side of the front of the mount (degrees). 180 = all the way round

### float pitch_min_degrees = -10.0 {#prop-pitch-min-degrees}

How far the barrel can tilt down and up (degrees)

### float pitch_max_degrees = 45.0 {#prop-pitch-max-degrees}

*No description yet.*

### float turn_speed_degrees = 120.0 {#prop-turn-speed-degrees}

How fast the turret turns (degrees per second)

### bool aim_with_camera = true {#prop-aim-with-camera}

A player aims where the camera looks

## Variable descriptions

### float current_yaw = 0.0 {#var-current-yaw}

The yaw (relative to the front of the mount) and pitch the turret has now, in radians

### float current_pitch = 0.0 {#var-current-pitch}

*No description yet.*

## Method descriptions

### String get_seat_type_name() {#method-get-seat-type-name}

What this kind of seat is called in the editor list *(from [Seat](/advanced/entities/mounts/seat))*

### String get_seat_type_description() {#method-get-seat-type-description}

A sentence about what this kind of seat does, for the editor *(from [Seat](/advanced/entities/mounts/seat))*

### Dictionary get_field_descriptions() {#method-get-field-descriptions}

The sentences the editor shows as tooltips: &#123;name of an exported variable: text&#125;. A seat of your own adds its variables (call super and merge) *(from [Seat](/advanced/entities/mounts/seat))*

### void on_enter( p_session: MountSession ) {#method-on-enter}

A rider sat down. Override for your own setup and call super *(from [Seat](/advanced/entities/mounts/seat))*

### void aim_at( world_point: Vector3 ) {#method-aim-at}

Aims at a point of the world (what an AI does). The turret turns towards it on the next frames

### void aim_in_direction( direction: Vector3 ) {#method-aim-in-direction}

Aims in a direction of the world

### bool is_aimed( tolerance: float ) {#method-is-aimed}

Does the turret point at what it aims at, within this angle (radians)?

### Vector3 get_aim_direction() {#method-get-aim-direction}

The direction the turret points in, in the world

### void process( _input: Vector2, delta: float ) {#method-process}

Every physics frame while the rider sits. `input` is the move keys (x right, y forward) of the player that controls the rider, zero when it does not. Override for a turret that follows the camera, a seat that drains a resource, and so on *(from [Seat](/advanced/entities/mounts/seat))*


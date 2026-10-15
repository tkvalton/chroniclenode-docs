<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DynamicFollowerSystem

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

DynamicFollowerSystem manages a group of followers in a dynamic formation around a leader. It calculates and updates follower positions based on the leader's movement and predefined formation parameters. Key features:

## Description

- Maintains a dynamic formation of followers around a leader
- Allows for customizable formation parameters (distance, angle spread, etc.)
- Uses noise to add slight randomness to follower positions for natural movement
- Ensures followers stay within defined distance limits from the leader
- Provides methods to add/remove followers and update the formation
- Emits signals when the formation is updated for external systems to react
- Uses the ChronoManager for efficient timer management

## Variables

| | | |
|---|---|---|
| `Node3D` | [leader](#var-leader) |  |
| `float` | [follow_distance](#var-follow-distance) | `3.0` |
| `float` | [min_distance](#var-min-distance) | `1.5` |
| `float` | [max_distance](#var-max-distance) | `5.0` |
| `float` | [angle_spread](#var-angle-spread) | `PI / 2` |
| `float` | [update_interval](#var-update-interval) | `0.1` |
| `float` | [movement_threshold](#var-movement-threshold) | `0.1` |
| `Array[Entity]` | [followers](#var-followers) | `[]` |
| `Dictionary` | [target_positions](#var-target-positions) | `{}` |
| `FastNoiseLite` | [noise](#var-noise) |  |
| `Vector3` | [last_leader_position](#var-last-leader-position) |  |
| `Timer` | [update_timer](#var-update-timer) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |

## Methods

| | |
|---|---|
| `void` | [cleanup](#method-cleanup)() |
| `void` | [add_follower](#method-add-follower)( `follower: Entity` ) |
| `void` | [remove_follower](#method-remove-follower)( `follower: Entity` ) |
| `void` | [update_formation](#method-update-formation)() |
| `Vector3` | [get_target_position](#method-get-target-position)( `follower: Entity` ) |
| `void` | [set_leader](#method-set-leader)( `new_leader: Node3D` ) |

## Signals

### formation_updated() {#signal-formation-updated}

Signal emitted when the formation is updated

## Variable descriptions

### Node3D leader {#var-leader}

The entity that the followers will follow

### float follow_distance = 3.0 {#var-follow-distance}

The ideal distance followers should maintain from the leader

### float min_distance = 1.5 {#var-min-distance}

The minimum allowed distance between a follower and the leader

### float max_distance = 5.0 {#var-max-distance}

The maximum allowed distance between a follower and the leader

### float angle_spread = PI / 2 {#var-angle-spread}

The spread angle of the formation in radians (PI/2 is 90 degrees)

### float update_interval = 0.1 {#var-update-interval}

How often to check for leader movement (in seconds)

### float movement_threshold = 0.1 {#var-movement-threshold}

Minimum distance the leader must move to trigger an update

### Array[Entity] followers = [] {#var-followers}

Array of follower entities

### Dictionary target_positions =  {#var-target-positions}

Dictionary to store target positions for each follower

### FastNoiseLite noise {#var-noise}

Noise generator for adding randomness to follower positions

### Vector3 last_leader_position {#var-last-leader-position}

Last recorded position of the leader

### Timer update_timer {#var-update-timer}

Reference to the timer from ChronoManager

### ChronoManager chrono_manager {#var-chrono-manager}

ChronoManager ref

## Method descriptions

### void cleanup() {#method-cleanup}

Gives the timer back (the owner is going away)

### void add_follower( follower: Entity ) {#method-add-follower}

Adds a new follower to the formation

### void remove_follower( follower: Entity ) {#method-remove-follower}

Removes a follower from the formation

### void update_formation() {#method-update-formation}

Updates the formation, calculating new positions for all followers

### Vector3 get_target_position( follower: Entity ) {#method-get-target-position}

Returns the target position for a specific follower

### void set_leader( new_leader: Node3D ) {#method-set-leader}

Sets a new leader for the formation


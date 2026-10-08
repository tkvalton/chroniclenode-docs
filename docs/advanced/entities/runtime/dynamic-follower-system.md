<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DynamicFollowerSystem

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Variables

| | | |
|---|---|---|
| `Node3D # The entity that the followers will follow` | [leader](#var-leader) |  |
| `float` | [follow_distance](#var-follow-distance) | `3.0 # The ideal distance followers should maintain from t...` |
| `float` | [min_distance](#var-min-distance) | `1.5 # The minimum allowed distance between a follower and...` |
| `float` | [max_distance](#var-max-distance) | `5.0 # The maximum allowed distance between a follower and...` |
| `float` | [angle_spread](#var-angle-spread) | `PI / 2 # The spread angle of the formation in radians (PI...` |
| `float` | [update_interval](#var-update-interval) | `0.1 # How often to check for leader movement (in seconds)` |
| `float` | [movement_threshold](#var-movement-threshold) | `0.1 # Minimum distance the leader must move to trigger an...` |
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

## Variable descriptions

### Node3D # The entity that the followers will follow leader {#var-leader}

*No description yet.*

### float follow_distance = 3.0 # The ideal distance followers should maintain from the  {#var-follow-distance}

*No description yet.*

### float min_distance = 1.5 # The minimum allowed distance between a follower and th {#var-min-distance}

*No description yet.*

### float max_distance = 5.0 # The maximum allowed distance between a follower and th {#var-max-distance}

*No description yet.*

### float angle_spread = PI / 2 # The spread angle of the formation in radians (PI/2  {#var-angle-spread}

*No description yet.*

### float update_interval = 0.1 # How often to check for leader movement (in seconds) {#var-update-interval}

*No description yet.*

### float movement_threshold = 0.1 # Minimum distance the leader must move to trigger an up {#var-movement-threshold}

*No description yet.*

### Array[Entity] followers = [] {#var-followers}

*No description yet.*

### Dictionary target_positions =  {#var-target-positions}

*No description yet.*

### FastNoiseLite noise {#var-noise}

*No description yet.*

### Vector3 last_leader_position {#var-last-leader-position}

*No description yet.*

### Timer update_timer {#var-update-timer}

*No description yet.*

### ChronoManager chrono_manager {#var-chrono-manager}

ChronoManager ref

## Method descriptions

### void cleanup() {#method-cleanup}

Gives the timer back (the owner is going away)

### void add_follower( follower: Entity ) {#method-add-follower}

*No description yet.*

### void remove_follower( follower: Entity ) {#method-remove-follower}

*No description yet.*

### void update_formation() {#method-update-formation}

*No description yet.*

### Vector3 get_target_position( follower: Entity ) {#method-get-target-position}

*No description yet.*

### void set_leader( new_leader: Node3D ) {#method-set-leader}

*No description yet.*


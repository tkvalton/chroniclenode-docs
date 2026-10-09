<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXPointToPointPath

**Inherits:** [VFX](/advanced/assets/vfx/vfx) < [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

Point-to-Point Path VFX - Spawns multiple VFX along a path between points Perfect for fire walls, ice barriers, poison gas lines, spike rows, etc.

## Properties

| | | |
|---|---|---|
| `Node3D  # The node whose children will be duplicated along the path` | [vfx_source_node](#prop-vfx-source-node) |  |
| `float` | [section_size](#prop-section-size) | `2.0  # Size of each VFX section` |
| `float` | [section_overlap](#prop-section-overlap) | `0.0  # How much sections overlap (-1 to 1)` |
| `float` | [path_curve_strength](#prop-path-curve-strength) | `0.0  # Bezier curve strength (0 = straight lines)` |
| `bool` | [follow_terrain](#prop-follow-terrain) | `false  # Adjust Y position to ground` |
| `float` | [terrain_offset](#prop-terrain-offset) | `0.1  # Height offset above terrain` |
| `float` | [max_slope_angle](#prop-max-slope-angle) | `45.0  # Skip surfaces steeper than this (degrees)` |
| `bool` | [spawn_progressively](#prop-spawn-progressively) | `false  # Spawn sections over time` |
| `float` | [spawn_delay](#prop-spawn-delay) | `0.1  # Delay between spawning each section` |
| `bool` | [spawn_from_start](#prop-spawn-from-start) | `true  # Spawn from start to end (vs random)` |
| `int` | [max_sections](#prop-max-sections) | `50  # Maximum number of sections to prevent performance i...` |
| `bool` | [despawn_distant_sections](#prop-despawn-distant-sections) | `false  # Remove sections far from camera/player` |
| `float` | [despawn_distance](#prop-despawn-distance) | `100.0  # Distance threshold for despawning` |

## Variables

| | | |
|---|---|---|
| `Array[Vector3]` | [path_points](#var-path-points) | `[]  # The path points to follow` |
| `Array[Node3D]` | [spawned_sections](#var-spawned-sections) | `[]  # Currently active VFX sections` |
| `Array[Vector3]` | [section_positions](#var-section-positions) | `[]  # Calculated positions for each section` |
| `float` | [total_path_length](#var-total-path-length) | `0.0` |
| `Timer` | [spawn_timer](#var-spawn-timer) |  |
| `int` | [current_spawn_index](#var-current-spawn-index) | `0` |
| `bool` | [is_spawning](#var-is-spawning) | `false` |

## Methods

| | |
|---|---|
| `void` | [set_path_points](#method-set-path-points)( `points: Array[Vector3]` ) |
| `void` | [deactivate_vfx](#method-deactivate-vfx)() |
| `void` | [add_path_point](#method-add-path-point)( `point: Vector3` ) |
| `void` | [cull_distant_sections](#method-cull-distant-sections)( `reference_position: Vector3` ) |
| `VFXPointToPointPath` | [create_fire_wall](#method-create-fire-wall)( `start_pos: Vector3, end_pos: Vector3, source_node: Node3D` ) *static* |
| `VFXPointToPointPath` | [create_curved_barrier](#method-create-curved-barrier)( `points: Array[Vector3], source_node: Node3D` ) *static* |

## Property descriptions

*Path Settings*

### Node3D  # The node whose children will be duplicated along the path vfx_source_node {#prop-vfx-source-node}

*No description yet.*

### float section_size = 2.0  # Size of each VFX section {#prop-section-size}

*No description yet.*

### float section_overlap = 0.0  # How much sections overlap (-1 to 1) {#prop-section-overlap}

*No description yet.*

### float path_curve_strength = 0.0  # Bezier curve strength (0 = straight lines) {#prop-path-curve-strength}

*No description yet.*

*Terrain Following*

### bool follow_terrain = false  # Adjust Y position to ground {#prop-follow-terrain}

*No description yet.*

### float terrain_offset = 0.1  # Height offset above terrain {#prop-terrain-offset}

*No description yet.*

### float max_slope_angle = 45.0  # Skip surfaces steeper than this (degrees) {#prop-max-slope-angle}

*No description yet.*

*Dynamic Spawning*

### bool spawn_progressively = false  # Spawn sections over time {#prop-spawn-progressively}

*No description yet.*

### float spawn_delay = 0.1  # Delay between spawning each section {#prop-spawn-delay}

*No description yet.*

### bool spawn_from_start = true  # Spawn from start to end (vs random) {#prop-spawn-from-start}

*No description yet.*

*Section Management*

### int max_sections = 50  # Maximum number of sections to prevent performance issu {#prop-max-sections}

*No description yet.*

### bool despawn_distant_sections = false  # Remove sections far from camera/player {#prop-despawn-distant-sections}

*No description yet.*

### float despawn_distance = 100.0  # Distance threshold for despawning {#prop-despawn-distance}

*No description yet.*

## Variable descriptions

### Array[Vector3] path_points = []  # The path points to follow {#var-path-points}

*No description yet.*

### Array[Node3D] spawned_sections = []  # Currently active VFX sections {#var-spawned-sections}

*No description yet.*

### Array[Vector3] section_positions = []  # Calculated positions for each section {#var-section-positions}

*No description yet.*

### float total_path_length = 0.0 {#var-total-path-length}

*No description yet.*

### Timer spawn_timer {#var-spawn-timer}

*No description yet.*

### int current_spawn_index = 0 {#var-current-spawn-index}

*No description yet.*

### bool is_spawning = false {#var-is-spawning}

*No description yet.*

## Method descriptions

### void set_path_points( points: Array[Vector3] ) {#method-set-path-points}

Set the path points for VFX spawning

### void deactivate_vfx() {#method-deactivate-vfx}

Override cleanup to handle spawned sections

### void add_path_point( point: Vector3 ) {#method-add-path-point}

Add point to existing path (useful for dynamic path building)

### void cull_distant_sections( reference_position: Vector3 ) {#method-cull-distant-sections}

Remove sections beyond a certain distance (for performance)

### VFXPointToPointPath create_fire_wall( start_pos: Vector3, end_pos: Vector3, source_node: Node3D ) {#method-create-fire-wall}

Quick factory method for fire walls

### VFXPointToPointPath create_curved_barrier( points: Array[Vector3], source_node: Node3D ) {#method-create-curved-barrier}

Quick factory method for curved barriers


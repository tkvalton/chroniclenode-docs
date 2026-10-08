<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# NavigationController

**Inherits:** `NavigationAgent3D`

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) | `null` |
| `EntityStateComponent` | [entity_states_component](#var-entity-states-component) | `null` |
| `NavigationMode` | [current_navigation_mode](#var-current-navigation-mode) | `NavigationMode.STOPPED` |
| `float` | [desired_distance](#var-desired-distance) | `0.5` |
| `bool` | [force_walking](#var-force-walking) | `false` |
| `bool` | [follow_mode](#var-follow-mode) | `false` |
| `Node3D` | [follow_target](#var-follow-target) | `null` |
| `float` | [follow_distance](#var-follow-distance) | `2.0` |
| `MovementStyle` | [current_movement_style](#var-current-movement-style) | `MovementStyle.NORMAL` |
| `float` | [gravity](#var-gravity) | `ProjectSettings.get_setting("physics/3d/default_gravity")` |
| `float` | [falling_tolerance](#var-falling-tolerance) | `0.5` |
| `float` | [velocity_smoothing](#var-velocity-smoothing) | `3.0  # Lower = wider/smoother turns` |
| `float` | [rotation_smoothing](#var-rotation-smoothing) | `5.0  # Speed of rotation when following movement` |
| `float` | [approach_slowdown_distance](#var-approach-slowdown-distance) | `3.0` |
| `float` | [stopping_tolerance](#var-stopping-tolerance) | `0.1` |
| `float` | [path_timeout_duration](#var-path-timeout-duration) | `10.0` |
| `float` | [path_timeout_extension_per_waypoint](#var-path-timeout-extension-per-waypoint) | `2.0` |
| `bool` | [handling_waypoint](#var-handling-waypoint) | `false` |
| `bool` | [direct_input_mode](#var-direct-input-mode) | `false` |
| `Vector3` | [direct_input_velocity](#var-direct-input-velocity) | `Vector3.ZERO` |
| `float` | [direct_input_speed](#var-direct-input-speed) | `5.0` |
| `Vector3` | [previous_position](#var-previous-position) | `Vector3.ZERO` |
| `bool` | [was_on_floor](#var-was-on-floor) | `true` |
| `bool` | [direction_needs_update](#var-direction-needs-update) | `false` |
| `Vector3` | [original_target_position](#var-original-target-position) | `Vector3.ZERO` |
| `float` | [current_speed](#var-current-speed) | `5.0` |
| `Vector3` | [movement_target](#var-movement-target) | `Vector3.ZERO` |
| `bool` | [is_moving](#var-is-moving) | `false` |
| `Timer` | [stall_check_timer](#var-stall-check-timer) |  |
| `Timer` | [follow_update_timer](#var-follow-update-timer) |  |
| `Timer` | [path_update_timer](#var-path-update-timer) |  |
| `Timer` | [path_timeout_timer](#var-path-timeout-timer) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_navigation_controller](#method-initialize-navigation-controller)( `entity_ref: Entity` ) |
| `void` | [set_direct_input_mode](#method-set-direct-input-mode)( `enabled: bool` ) |
| `void` | [set_direct_movement_input](#method-set-direct-movement-input)( `input_vector: Vector2, movement_speed: float, entity_forward: Vector3` ) |
| `bool` | [is_using_direct_input](#method-is-using-direct-input)() |
| `Vector3` | [get_direct_input_velocity](#method-get-direct-input-velocity)() |
| `void` | [process_physics](#method-process-physics)( `delta: float` ) |
| `bool` | [should_ignore_desired_distance_for_los](#method-should-ignore-desired-distance-for-los)() |
| `bool` | [command_move_to](#method-command-move-to)( `target_pos: Vector3, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_move_keep_facing](#method-command-move-keep-facing)( `target_pos: Vector3, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_backpedal_to](#method-command-backpedal-to)( `target_pos: Vector3, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_strafe_to](#method-command-strafe-to)( `target_pos: Vector3, strafe_direction: int, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_follow](#method-command-follow)( `target: Node3D, min_distance: float = 2.0, should_walk: bool = false` ) |
| `void` | [command_stop](#method-command-stop)() |
| `void` | [command_look_at](#method-command-look-at)( `look_at_direction: Vector3, speed: int = Entity.FaceTargetSpeed.INSTANT` ) |
| `void` | [set_approach_distance](#method-set-approach-distance)( `distance: float` ) |
| `void` | [set_custom_gravity](#method-set-custom-gravity)( `new_gravity: float` ) |
| `void` | [reset_custom_gravity](#method-reset-custom-gravity)() |
| `void` | [cleanup_timers](#method-cleanup-timers)() |

## Signals

### path_failed() {#signal-path-failed}

### following_started( target: Node3D ) {#signal-following-started}

### following_stopped() {#signal-following-stopped}

### destination_reached( position: Vector3 ) {#signal-destination-reached}

## Enumerations

### enum MovementStyle {#enum-movementstyle}

- **NORMAL** = `0`
- **KEEP_FACING** = `1`
- **BACKPEDAL** = `2`
- **STRAFE_LEFT** = `3`

### enum NavigationMode {#enum-navigationmode}

- **STOPPED** = `0`
- **MOVING_TO_POSITION** = `1`
- **FOLLOWING_TARGET** = `2`
- **PATHFINDING** = `3`

## Variable descriptions

### Entity entity = null {#var-entity}

*No description yet.*

### EntityStateComponent entity_states_component = null {#var-entity-states-component}

*No description yet.*

### NavigationMode current_navigation_mode = NavigationMode.STOPPED {#var-current-navigation-mode}

*No description yet.*

### float desired_distance = 0.5 {#var-desired-distance}

*No description yet.*

### bool force_walking = false {#var-force-walking}

*No description yet.*

### bool follow_mode = false {#var-follow-mode}

*No description yet.*

### Node3D follow_target = null {#var-follow-target}

*No description yet.*

### float follow_distance = 2.0 {#var-follow-distance}

*No description yet.*

### MovementStyle current_movement_style = MovementStyle.NORMAL {#var-current-movement-style}

*No description yet.*

### float gravity = ProjectSettings.get_setting("physics/3d/default_gravity") {#var-gravity}

*No description yet.*

### float falling_tolerance = 0.5 {#var-falling-tolerance}

*No description yet.*

### float velocity_smoothing = 3.0  # Lower = wider/smoother turns {#var-velocity-smoothing}

*No description yet.*

### float rotation_smoothing = 5.0  # Speed of rotation when following movement {#var-rotation-smoothing}

*No description yet.*

### float approach_slowdown_distance = 3.0 {#var-approach-slowdown-distance}

*No description yet.*

### float stopping_tolerance = 0.1 {#var-stopping-tolerance}

*No description yet.*

### float path_timeout_duration = 10.0 {#var-path-timeout-duration}

*No description yet.*

### float path_timeout_extension_per_waypoint = 2.0 {#var-path-timeout-extension-per-waypoint}

*No description yet.*

### bool handling_waypoint = false {#var-handling-waypoint}

*No description yet.*

### bool direct_input_mode = false {#var-direct-input-mode}

*No description yet.*

### Vector3 direct_input_velocity = Vector3.ZERO {#var-direct-input-velocity}

*No description yet.*

### float direct_input_speed = 5.0 {#var-direct-input-speed}

*No description yet.*

### Vector3 previous_position = Vector3.ZERO {#var-previous-position}

*No description yet.*

### bool was_on_floor = true {#var-was-on-floor}

*No description yet.*

### bool direction_needs_update = false {#var-direction-needs-update}

*No description yet.*

### Vector3 original_target_position = Vector3.ZERO {#var-original-target-position}

*No description yet.*

### float current_speed = 5.0 {#var-current-speed}

*No description yet.*

### Vector3 movement_target = Vector3.ZERO {#var-movement-target}

*No description yet.*

### bool is_moving = false {#var-is-moving}

*No description yet.*

### Timer stall_check_timer {#var-stall-check-timer}

*No description yet.*

### Timer follow_update_timer {#var-follow-update-timer}

*No description yet.*

### Timer path_update_timer {#var-path-update-timer}

*No description yet.*

### Timer path_timeout_timer {#var-path-timeout-timer}

*No description yet.*

## Method descriptions

### void initialize_navigation_controller( entity_ref: Entity ) {#method-initialize-navigation-controller}

*No description yet.*

### void set_direct_input_mode( enabled: bool ) {#method-set-direct-input-mode}

*No description yet.*

### void set_direct_movement_input( input_vector: Vector2, movement_speed: float, entity_forward: Vector3 ) {#method-set-direct-movement-input}

*No description yet.*

### bool is_using_direct_input() {#method-is-using-direct-input}

*No description yet.*

### Vector3 get_direct_input_velocity() {#method-get-direct-input-velocity}

*No description yet.*

### void process_physics( delta: float ) {#method-process-physics}

*No description yet.*

### bool should_ignore_desired_distance_for_los() {#method-should-ignore-desired-distance-for-los}

Check if we should ignore desired distance due to LOS requirements

### bool command_move_to( target_pos: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-move-to}

*No description yet.*

### bool command_move_keep_facing( target_pos: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-move-keep-facing}

*No description yet.*

### bool command_backpedal_to( target_pos: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-backpedal-to}

*No description yet.*

### bool command_strafe_to( target_pos: Vector3, strafe_direction: int, walk: bool = false, min_distance: float = -1.0 ) {#method-command-strafe-to}

*No description yet.*

### bool command_follow( target: Node3D, min_distance: float = 2.0, should_walk: bool = false ) {#method-command-follow}

*No description yet.*

### void command_stop() {#method-command-stop}

*No description yet.*

### void command_look_at( look_at_direction: Vector3, speed: int = Entity.FaceTargetSpeed.INSTANT ) {#method-command-look-at}

*No description yet.*

### void set_approach_distance( distance: float ) {#method-set-approach-distance}

*No description yet.*

### void set_custom_gravity( new_gravity: float ) {#method-set-custom-gravity}

Set custom gravity value

### void reset_custom_gravity() {#method-reset-custom-gravity}

Reset gravity to default project setting

### void cleanup_timers() {#method-cleanup-timers}

*No description yet.*


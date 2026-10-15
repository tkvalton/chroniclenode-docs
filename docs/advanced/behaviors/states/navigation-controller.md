<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# NavigationController

**Inherits:** `NavigationAgent3D`

The path-finding and movement of an NPC: a navigation agent that moves the entity to a position, follows a target, or takes direct movement input. It moves in one of five styles (normal, keep facing, backpedal, strafe left, strafe right) and emits `path_failed`, `following_started`, `following_stopped` and `destination_reached`.

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
| `float` | [rotation_smoothing](#var-rotation-smoothing) | `5.0` |
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

Emitted when there is no path to the target, or the entity could not get there in time.

### following_started( target: Node3D ) {#signal-following-started}

Emitted when the entity starts following a node.

### following_stopped() {#signal-following-stopped}

Emitted when the entity stops following.

### destination_reached( position: Vector3 ) {#signal-destination-reached}

Emitted when the entity reaches the position it was sent to.

## Enumerations

### enum MovementStyle {#enum-movementstyle}

How the entity faces while it moves: normal (it faces where it goes), keep facing, backpedal, or strafe left or right.

- **NORMAL** = `0`
- **KEEP_FACING** = `1`
- **BACKPEDAL** = `2`
- **STRAFE_LEFT** = `3`

### enum NavigationMode {#enum-navigationmode}

What the controller is doing: stopped, moving to a position, following a target or pathfinding.

- **STOPPED** = `0`
- **MOVING_TO_POSITION** = `1`
- **FOLLOWING_TARGET** = `2`
- **PATHFINDING** = `3`

## Variable descriptions

### Entity entity = null {#var-entity}

The entity this controller moves.

### EntityStateComponent entity_states_component = null {#var-entity-states-component}

The states component of the entity (movement states).

### NavigationMode current_navigation_mode = NavigationMode.STOPPED {#var-current-navigation-mode}

What the controller is doing now.

### float desired_distance = 0.5 {#var-desired-distance}

How close to the target the entity gets before it counts as arrived.

### bool force_walking = false {#var-force-walking}

True when the entity walks and does not run.

### bool follow_mode = false {#var-follow-mode}

True while the entity follows a node.

### Node3D follow_target = null {#var-follow-target}

The node the entity follows.

### float follow_distance = 2.0 {#var-follow-distance}

How far from the followed node the entity stops.

### MovementStyle current_movement_style = MovementStyle.NORMAL {#var-current-movement-style}

The movement style of the current move.

### float gravity = ProjectSettings.get_setting("physics/3d/default_gravity") {#var-gravity}

The gravity applied to the entity (the project's by default).

### float falling_tolerance = 0.5 {#var-falling-tolerance}

How far the entity can drop before it counts as falling.

### float velocity_smoothing = 3.0  # Lower = wider/smoother turns {#var-velocity-smoothing}

How smooth the turns are: lower is wider and smoother.

### float rotation_smoothing = 5.0 {#var-rotation-smoothing}

Speed of rotation when following movement

### float approach_slowdown_distance = 3.0 {#var-approach-slowdown-distance}

The distance from the target where the entity starts to slow down.

### float stopping_tolerance = 0.1 {#var-stopping-tolerance}

The distance from the target where the entity stops.

### float path_timeout_duration = 10.0 {#var-path-timeout-duration}

The seconds the entity gets to reach the target before the path fails.

### float path_timeout_extension_per_waypoint = 2.0 {#var-path-timeout-extension-per-waypoint}

The seconds added to the timeout for each waypoint of the path.

### bool handling_waypoint = false {#var-handling-waypoint}

True while the entity handles a waypoint of its path.

### bool direct_input_mode = false {#var-direct-input-mode}

True while the entity is moved by direct input (a player) and not by a path.

### Vector3 direct_input_velocity = Vector3.ZERO {#var-direct-input-velocity}

The velocity the direct input asks for.

### float direct_input_speed = 5.0 {#var-direct-input-speed}

The speed of the direct input.

### Vector3 previous_position = Vector3.ZERO {#var-previous-position}

Where the entity was on the last step (to see if it is stuck).

### bool was_on_floor = true {#var-was-on-floor}

True when the entity was on the floor on the last step.

### bool direction_needs_update = false {#var-direction-needs-update}

True when the direction of the path must be worked out again.

### Vector3 original_target_position = Vector3.ZERO {#var-original-target-position}

The position the entity was first sent to.

### float current_speed = 5.0 {#var-current-speed}

The speed of the entity now.

### Vector3 movement_target = Vector3.ZERO {#var-movement-target}

The position the entity is moving to now.

### bool is_moving = false {#var-is-moving}

True while the entity is moving.

### Timer stall_check_timer {#var-stall-check-timer}

The timer that checks whether the entity is stuck.

### Timer follow_update_timer {#var-follow-update-timer}

The timer that updates the path to a followed node.

### Timer path_update_timer {#var-path-update-timer}

The timer that updates the path.

### Timer path_timeout_timer {#var-path-timeout-timer}

The timer that fails the path when the entity takes too long.

## Method descriptions

### void initialize_navigation_controller( entity_ref: Entity ) {#method-initialize-navigation-controller}

Sets the controller up for an entity.

### void set_direct_input_mode( enabled: bool ) {#method-set-direct-input-mode}

Turns direct input on (a player moves it) or off (a path moves it).

### void set_direct_movement_input( input_vector: Vector2, movement_speed: float, entity_forward: Vector3 ) {#method-set-direct-movement-input}

Gives the direct input: the stick or key vector, the speed and the forward direction of the entity.

### bool is_using_direct_input() {#method-is-using-direct-input}

Is the entity moved by direct input?

### Vector3 get_direct_input_velocity() {#method-get-direct-input-velocity}

The velocity the direct input asks for.

### void process_physics( delta: float ) {#method-process-physics}

Moves the entity one physics step (the path, the follow or the direct input).

### bool should_ignore_desired_distance_for_los() {#method-should-ignore-desired-distance-for-los}

Check if we should ignore desired distance due to LOS requirements

### bool command_move_to( target_pos: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-move-to}

Sends the entity to a position (it faces where it goes). A minimum distance stops it short. False when there is no path.

### bool command_move_keep_facing( target_pos: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-move-keep-facing}

Sends the entity to a position without turning to the direction of the movement.

### bool command_backpedal_to( target_pos: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-backpedal-to}

Sends the entity to a position walking backward.

### bool command_strafe_to( target_pos: Vector3, strafe_direction: int, walk: bool = false, min_distance: float = -1.0 ) {#method-command-strafe-to}

Sends the entity to a position sideways (a negative direction is left).

### bool command_follow( target: Node3D, min_distance: float = 2.0, should_walk: bool = false ) {#method-command-follow}

Makes the entity follow a node at a distance.

### void command_stop() {#method-command-stop}

Stops the entity.

### void command_look_at( look_at_direction: Vector3, speed: int = Entity.FaceTargetSpeed.INSTANT ) {#method-command-look-at}

Turns the entity to a direction, at a speed (instantly by default).

### void set_approach_distance( distance: float ) {#method-set-approach-distance}

Sets how close the entity gets to its target before it stops.

### void set_custom_gravity( new_gravity: float ) {#method-set-custom-gravity}

Set custom gravity value

### void reset_custom_gravity() {#method-reset-custom-gravity}

Reset gravity to default project setting

### void cleanup_timers() {#method-cleanup-timers}

Frees the timers of the controller.


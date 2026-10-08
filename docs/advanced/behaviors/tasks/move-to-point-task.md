<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MoveToPointTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Complete MoveToPointTask with all Phase 1-3 enhancements. Features robust navigation integration, enhanced path failure handling, auto-updating progress, and comprehensive error recovery.

## Properties

| | | |
|---|---|---|
| `Vector3` | [target_position](#prop-target-position) | `Vector3.ZERO` |
| `float` | [min_distance](#prop-min-distance) | `-1.0` |
| `bool` | [force_walking](#prop-force-walking) | `true` |
| `float` | [position_threshold](#prop-position-threshold) | `0.1` |
| `int` | [max_pathfinding_attempts](#prop-max-pathfinding-attempts) | `3` |
| `float` | [wait_time](#prop-wait-time) | `0.0` |
| `bool` | [face_direction_on_arrival](#prop-face-direction-on-arrival) | `false` |
| `Vector3` | [arrival_face_direction](#prop-arrival-face-direction) | `Vector3.ZERO` |
| `MovementStyle` | [movement_style](#prop-movement-style) | `MovementStyle.NORMAL` |
| `bool` | [fail_on_path_failure](#prop-fail-on-path-failure) | `false` |
| `bool` | [try_alternative_positions](#prop-try-alternative-positions) | `true` |
| `float` | [alternative_search_radius](#prop-alternative-search-radius) | `3.0` |

## Variables

| | | |
|---|---|---|
| `int` | [current_pathfinding_attempt](#var-current-pathfinding-attempt) | `0` |
| `Timer` | [wait_timer](#var-wait-timer) | `null` |
| `Vector3` | [original_target_position](#var-original-target-position) | `Vector3.ZERO` |
| `bool` | [waiting_at_destination](#var-waiting-at-destination) | `false` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `void` | [set_target_position](#method-set-target-position)( `new_position: Vector3` ) |
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `bool` | [is_movement_complete](#method-is-movement-complete)() |
| `void` | [set_simplified_mode](#method-set-simplified-mode)( `enable: bool` ) |
| `void` | [cleanup_timers](#method-cleanup-timers)() |

## Enumerations

### enum MovementStyle {#enum-movementstyle}

- **NORMAL** = `0` - Regular movement with turning
- **KEEP_FACING** = `1` - Move without changing facing direction
- **BACKPEDAL** = `2` - Move backwards while keeping current facing

## Property descriptions

*Movement*

### Vector3 target_position = Vector3.ZERO {#prop-target-position}

Target position to move to

### float min_distance = -1.0 {#prop-min-distance}

Minimum distance to maintain from target (-1 = use navigation default)

### bool force_walking = true {#prop-force-walking}

Whether to walk instead of run

### float position_threshold = 0.1 {#prop-position-threshold}

Position threshold for considering destination reached

### int max_pathfinding_attempts = 3 {#prop-max-pathfinding-attempts}

Maximum attempts to find a path before giving up

*Destination Behavior*

### float wait_time = 0.0 {#prop-wait-time}

Time to wait at destination before completing (0 = complete immediately)

### bool face_direction_on_arrival = false {#prop-face-direction-on-arrival}

Whether to face a specific direction after reaching destination

### Vector3 arrival_face_direction = Vector3.ZERO {#prop-arrival-face-direction}

Direction to face after arrival (if face_direction_on_arrival is true)

*Movement Type*

### MovementStyle movement_style = MovementStyle.NORMAL {#prop-movement-style}

Type of movement to use

*Error Handling*

### bool fail_on_path_failure = false {#prop-fail-on-path-failure}

Whether to fail task if path cannot be found

### bool try_alternative_positions = true {#prop-try-alternative-positions}

Whether to try alternative nearby positions if exact position fails

### float alternative_search_radius = 3.0 {#prop-alternative-search-radius}

Distance to search for alternative positions

## Variable descriptions

### int current_pathfinding_attempt = 0 {#var-current-pathfinding-attempt}

Current pathfinding attempt

### Timer wait_timer = null {#var-wait-timer}

Timer for waiting at destination

### Vector3 original_target_position = Vector3.ZERO {#var-original-target-position}

Original target position (before any adjustments)

### bool waiting_at_destination = false {#var-waiting-at-destination}

Whether we're currently waiting at the destination

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Override this in subclasses to implement specific task behavior *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_complete() {#method-execute-task-complete}

Override this in subclasses for task completion logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_interrupt() {#method-execute-task-interrupt}

Override this in subclasses for task interruption logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_fail() {#method-execute-task-fail}

Override this in subclasses for task failure logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void set_target_position( new_position: Vector3 ) {#method-set-target-position}

*No description yet.*

### float get_distance_to_target() {#method-get-distance-to-target}

*No description yet.*

### bool is_movement_complete() {#method-is-movement-complete}

*No description yet.*

### void set_simplified_mode( enable: bool ) {#method-set-simplified-mode}

Check if we can modify this task for simplified behavior (LOD system support)

### void cleanup_timers() {#method-cleanup-timers}

Clean up all timers and resources *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*


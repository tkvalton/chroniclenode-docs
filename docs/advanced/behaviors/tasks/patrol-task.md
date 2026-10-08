<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PatrolTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modern PatrolTask for entities that follow patrol routes. Supports multiple waypoints, different patrol patterns, and dynamic adjustments.

## Description

FIXES APPLIED:

- Removed async/await movement calls
- Fixed navigation signal timing (setup BEFORE movement)
- Eliminated duplicate state tracking (single source of truth)
- Centralized signal management with automatic cleanup
- Unique timer naming to prevent conflicts
- Proper resource cleanup in all exit paths

## Properties

| | | |
|---|---|---|
| `Array[Vector3]` | [waypoints](#prop-waypoints) | `[]` |
| `PatrolPattern` | [patrol_pattern](#prop-patrol-pattern) | `PatrolPattern.LOOP` |
| `bool` | [force_walking](#prop-force-walking) | `true` |
| `float` | [wait_time_at_waypoint](#prop-wait-time-at-waypoint) | `2.0` |

## Variables

| | | |
|---|---|---|
| `int` | [current_waypoint_index](#var-current-waypoint-index) | `0` |
| `bool` | [moving_forward](#var-moving-forward) | `true` |
| `Timer` | [waypoint_wait_timer](#var-waypoint-wait-timer) | `null` |
| `bool` | [waiting_at_waypoint](#var-waiting-at-waypoint) | `false` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `void` | [handle_path_failure](#method-handle-path-failure)() |
| `Vector3` | [get_current_waypoint](#method-get-current-waypoint)() |
| `Vector3` | [get_next_waypoint](#method-get-next-waypoint)() |
| `void` | [add_waypoint](#method-add-waypoint)( `position: Vector3` ) |
| `void` | [insert_waypoint](#method-insert-waypoint)( `index: int, position: Vector3` ) |
| `void` | [remove_waypoint](#method-remove-waypoint)( `index: int` ) |
| `void` | [clear_waypoints](#method-clear-waypoints)() |

## Enumerations

### enum PatrolPattern {#enum-patrolpattern}

- **LOOP** = `0` - Start -&gt; End -&gt; Start -&gt; End...
- **PING_PONG** = `1` - Start -&gt; End -&gt; End-1 -&gt; ... -&gt; Start -&gt; ...
- **RANDOM** = `2` - Random waypoint selection
- **ONCE** = `3` - Start -&gt; End, then complete

## Property descriptions

*Patrol Route*

### Array[Vector3] waypoints = [] {#prop-waypoints}

List of world positions to patrol between

### PatrolPattern patrol_pattern = PatrolPattern.LOOP {#prop-patrol-pattern}

How to move through the waypoints

### bool force_walking = true {#prop-force-walking}

Whether to always walk instead of run

### float wait_time_at_waypoint = 2.0 {#prop-wait-time-at-waypoint}

Time to wait at each waypoint before moving to next

## Variable descriptions

### int current_waypoint_index = 0 {#var-current-waypoint-index}

Current index in the waypoints array

### bool moving_forward = true {#var-moving-forward}

Whether moving forward through waypoints (used for PING_PONG pattern)

### Timer waypoint_wait_timer = null {#var-waypoint-wait-timer}

Timer for waiting at waypoints

### bool waiting_at_waypoint = false {#var-waiting-at-waypoint}

Whether we're currently waiting at a waypoint

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Override this in subclasses to implement specific task behavior *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_complete() {#method-execute-task-complete}

Override this in subclasses for task completion logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_interrupt() {#method-execute-task-interrupt}

Override this in subclasses for task interruption logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_fail() {#method-execute-task-fail}

Override this in subclasses for task failure logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void handle_path_failure() {#method-handle-path-failure}

Handle path failure with recovery strategies *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### Vector3 get_current_waypoint() {#method-get-current-waypoint}

*No description yet.*

### Vector3 get_next_waypoint() {#method-get-next-waypoint}

*No description yet.*

### void add_waypoint( position: Vector3 ) {#method-add-waypoint}

*No description yet.*

### void insert_waypoint( index: int, position: Vector3 ) {#method-insert-waypoint}

*No description yet.*

### void remove_waypoint( index: int ) {#method-remove-waypoint}

*No description yet.*

### void clear_waypoints() {#method-clear-waypoints}

*No description yet.*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WanderTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

WanderTask provides simple wandering behavior around a central point. Entity will randomly move to nearby positions within a specified radius. Perfect for background NPCs that need basic ambient movement.

## Properties

| | | |
|---|---|---|
| `float` | [wander_radius](#prop-wander-radius) | `5.0` |
| `Vector3` | [wander_center](#prop-wander-center) | `Vector3.ZERO` |
| `float` | [min_wander_distance](#prop-min-wander-distance) | `2.0` |
| `float` | [max_wander_distance](#prop-max-wander-distance) | `5.0` |
| `bool` | [use_walk_speed](#prop-use-walk-speed) | `true` |
| `float` | [min_idle_time](#prop-min-idle-time) | `3.0` |
| `float` | [max_idle_time](#prop-max-idle-time) | `8.0` |
| `float` | [max_wander_time](#prop-max-wander-time) | `0.0` |

## Variables

| | | |
|---|---|---|
| `Vector3` | [current_target](#var-current-target) | `Vector3.ZERO` |
| `Timer` | [idle_timer](#var-idle-timer) | `null` |
| `Timer` | [wander_duration_timer](#var-wander-duration-timer) | `null` |
| `bool` | [is_idling](#var-is-idling) | `false` |
| `float` | [wander_start_time](#var-wander-start-time) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `void` | [handle_path_failure](#method-handle-path-failure)() |
| `void` | [cleanup_timers](#method-cleanup-timers)() |
| `bool` | [is_within_wander_bounds](#method-is-within-wander-bounds)() |
| `void` | [set_wander_center](#method-set-wander-center)( `new_center: Vector3` ) |
| `Vector3` | [get_wander_center](#method-get-wander-center)() |
| `float` | [get_wander_radius](#method-get-wander-radius)() |

## Property descriptions

*Wander Settings*

### float wander_radius = 5.0 {#prop-wander-radius}

Radius around the center point to wander within

### Vector3 wander_center = Vector3.ZERO {#prop-wander-center}

Center point for wandering (Vector3.ZERO = use entity's start position)

### float min_wander_distance = 2.0 {#prop-min-wander-distance}

Minimum distance to move on each wander step

### float max_wander_distance = 5.0 {#prop-max-wander-distance}

Maximum distance to move on each wander step

### bool use_walk_speed = true {#prop-use-walk-speed}

Whether to use walking speed instead of running

*Timing*

### float min_idle_time = 3.0 {#prop-min-idle-time}

Minimum time to wait at each location before moving again

### float max_idle_time = 8.0 {#prop-max-idle-time}

Maximum time to wait at each location before moving again

### float max_wander_time = 0.0 {#prop-max-wander-time}

Maximum time to spend wandering (0 = infinite)

## Variable descriptions

### Vector3 current_target = Vector3.ZERO {#var-current-target}

Current target position for this wander step

### Timer idle_timer = null {#var-idle-timer}

Timer for idle periods between movements

### Timer wander_duration_timer = null {#var-wander-duration-timer}

Timer for maximum wander duration

### bool is_idling = false {#var-is-idling}

Whether we're currently in an idle phase

### float wander_start_time = 0.0 {#var-wander-start-time}

Starting time for this wander session

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

### void cleanup_timers() {#method-cleanup-timers}

Clean up all timers and resources *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### bool is_within_wander_bounds() {#method-is-within-wander-bounds}

Check if entity is currently within the wander bounds

### void set_wander_center( new_center: Vector3 ) {#method-set-wander-center}

Set a new wander center (useful for dynamic repositioning)

### Vector3 get_wander_center() {#method-get-wander-center}

Get current wander center

### float get_wander_radius() {#method-get-wander-radius}

Get current wander radius


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UseLadderTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Climb a ladder (any entity can use) Enhanced with proper signal-based movement handling

## Properties

| | | |
|---|---|---|
| `int` | [ladder_id](#prop-ladder-id) | `0` |
| `ClimbDirection` | [climb_direction](#prop-climb-direction) | `ClimbDirection.AUTO_DETECT` |
| `bool` | [move_to_ladder](#prop-move-to-ladder) | `true` |
| `float` | [interaction_distance](#prop-interaction-distance) | `3.0` |
| `float` | [climb_timeout](#prop-climb-timeout) | `30.0` |
| `bool` | [interrupt_if_occupied](#prop-interrupt-if-occupied) | `false` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_ladder](#var-target-ladder) | `null` |
| `Timer` | [climb_timer](#var-climb-timer) | `null` |
| `bool` | [is_climbing](#var-is-climbing) | `false` |
| `bool` | [climb_started](#var-climb-started) | `false` |
| `Vector3` | [ladder_position](#var-ladder-position) | `Vector3.ZERO` |
| `float` | [interaction_range](#var-interaction-range) | `3.0` |
| `bool` | [movement_completed](#var-movement-completed) | `false` |
| `bool` | [ladder_interaction_completed](#var-ladder-interaction-completed) | `false` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `float` | [get_climb_progress](#method-get-climb-progress)() |
| `bool` | [is_ladder_accessible](#method-is-ladder-accessible)() |
| `float` | [get_distance_to_ladder](#method-get-distance-to-ladder)() |
| `bool` | [is_in_ladder_interaction_range](#method-is-in-ladder-interaction-range)() |
| `void` | [set_ladder_id](#method-set-ladder-id)( `new_id: int` ) |
| `void` | [set_climb_direction](#method-set-climb-direction)( `direction: int` ) |
| `void` | [set_interaction_distance](#method-set-interaction-distance)( `distance: float` ) |
| `void` | [cleanup_timers](#method-cleanup-timers)() |

## Enumerations

### enum ClimbDirection {#enum-climbdirection}

The options of climb direction: auto detect, up, down.

- **AUTO_DETECT** = `0`
- **UP** = `1`
- **DOWN** = `2`

## Property descriptions

*Target*

### int ladder_id = 0 {#prop-ladder-id}

The unique ID of the ladder to climb

### ClimbDirection climb_direction = ClimbDirection.AUTO_DETECT {#prop-climb-direction}

Climb direction (0 = auto-detect, 1 = up, -1 = down)

### bool move_to_ladder = true {#prop-move-to-ladder}

Whether to move to ladder before climbing

### float interaction_distance = 3.0 {#prop-interaction-distance}

Interaction distance from ladder

*Behavior*

### float climb_timeout = 30.0 {#prop-climb-timeout}

Maximum time to wait for climb completion (seconds)

### bool interrupt_if_occupied = false {#prop-interrupt-if-occupied}

Whether to interrupt if ladder becomes occupied (for single-climber ladders)

## Variable descriptions

### InteractableObject target_ladder = null {#var-target-ladder}

The ladder the entity climbs.

### Timer climb_timer = null {#var-climb-timer}

The timer of the climb.

### bool is_climbing = false {#var-is-climbing}

True while the entity climbs.

### bool climb_started = false {#var-climb-started}

True once the climb has started.

### Vector3 ladder_position = Vector3.ZERO {#var-ladder-position}

The position of the ladder.

### float interaction_range = 3.0 {#var-interaction-range}

How close the entity must be to use the ladder.

### bool movement_completed = false {#var-movement-completed}

True once the entity arrived.

### bool ladder_interaction_completed = false {#var-ladder-interaction-completed}

True once the climb is done.

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Starts the task.

### void execute_task_complete() {#method-execute-task-complete}

Called when the task finishes well.

### void execute_task_interrupt() {#method-execute-task-interrupt}

Called when something interrupts the task.

### void execute_task_fail() {#method-execute-task-fail}

Called when the task fails.

### float get_climb_progress() {#method-get-climb-progress}

How far along the ladder the entity is (0 to 1).

### bool is_ladder_accessible() {#method-is-ladder-accessible}

Can the ladder be used now (it is not broken)?

### float get_distance_to_ladder() {#method-get-distance-to-ladder}

The distance to the ladder (-1 when there is none).

### bool is_in_ladder_interaction_range() {#method-is-in-ladder-interaction-range}

Is the entity close enough to use the ladder?

### void set_ladder_id( new_id: int ) {#method-set-ladder-id}

Set the target ladder ID dynamically

### void set_climb_direction( direction: int ) {#method-set-climb-direction}

Set the climb direction dynamically

### void set_interaction_distance( distance: float ) {#method-set-interaction-distance}

Set interaction distance dynamically

### void cleanup_timers() {#method-cleanup-timers}

Frees the timers of the task.


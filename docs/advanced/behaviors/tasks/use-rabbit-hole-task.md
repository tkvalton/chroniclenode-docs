<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UseRabbitHoleTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Use rabbit hole for teleportation Enhanced with proper signal-based movement handling

## Properties

| | | |
|---|---|---|
| `int` | [rabbit_hole_id](#prop-rabbit-hole-id) | `0` |
| `bool` | [local_teleport_only](#prop-local-teleport-only) | `true` |
| `bool` | [move_to_rabbit_hole](#prop-move-to-rabbit-hole) | `true` |
| `float` | [interaction_distance](#prop-interaction-distance) | `2.0` |
| `float` | [teleport_timeout](#prop-teleport-timeout) | `10.0` |
| `bool` | [fail_on_cross_map_for_non_player](#prop-fail-on-cross-map-for-non-player) | `true` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_rabbit_hole](#var-target-rabbit-hole) | `null` |
| `Timer` | [teleport_timer](#var-teleport-timer) | `null` |
| `bool` | [teleportation_started](#var-teleportation-started) | `false` |
| `bool` | [teleportation_completed](#var-teleportation-completed) | `false` |
| `Vector3` | [rabbit_hole_position](#var-rabbit-hole-position) | `Vector3.ZERO` |
| `float` | [interaction_range](#var-interaction-range) | `2.0` |
| `bool` | [movement_completed](#var-movement-completed) | `false` |
| `bool` | [rabbit_hole_interaction_completed](#var-rabbit-hole-interaction-completed) | `false` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `InteractableObject` | [get_target_rabbit_hole](#method-get-target-rabbit-hole)() |
| `bool` | [is_teleportation_in_progress](#method-is-teleportation-in-progress)() |
| `bool` | [is_rabbit_hole_accessible](#method-is-rabbit-hole-accessible)() |
| `float` | [get_distance_to_rabbit_hole](#method-get-distance-to-rabbit-hole)() |
| `bool` | [is_in_rabbit_hole_interaction_range](#method-is-in-rabbit-hole-interaction-range)() |
| `void` | [set_rabbit_hole_id](#method-set-rabbit-hole-id)( `new_id: int` ) |
| `void` | [set_local_teleport_only](#method-set-local-teleport-only)( `local_only: bool` ) |
| `void` | [set_interaction_distance](#method-set-interaction-distance)( `distance: float` ) |
| `void` | [cleanup_timers](#method-cleanup-timers)() |

## Property descriptions

*Target*

### int rabbit_hole_id = 0 {#prop-rabbit-hole-id}

The unique ID of the rabbit hole to use

### bool local_teleport_only = true {#prop-local-teleport-only}

Whether to only allow local teleportation (NPCs should set this true)

### bool move_to_rabbit_hole = true {#prop-move-to-rabbit-hole}

Whether to move to rabbit hole before using

### float interaction_distance = 2.0 {#prop-interaction-distance}

Interaction distance from rabbit hole

*Behavior*

### float teleport_timeout = 10.0 {#prop-teleport-timeout}

Maximum time to wait for teleportation to complete

### bool fail_on_cross_map_for_non_player = true {#prop-fail-on-cross-map-for-non-player}

Whether to fail if rabbit hole leads to different map and entity is not player

## Variable descriptions

### InteractableObject target_rabbit_hole = null {#var-target-rabbit-hole}

*No description yet.*

### Timer teleport_timer = null {#var-teleport-timer}

*No description yet.*

### bool teleportation_started = false {#var-teleportation-started}

*No description yet.*

### bool teleportation_completed = false {#var-teleportation-completed}

*No description yet.*

### Vector3 rabbit_hole_position = Vector3.ZERO {#var-rabbit-hole-position}

*No description yet.*

### float interaction_range = 2.0 {#var-interaction-range}

*No description yet.*

### bool movement_completed = false {#var-movement-completed}

*No description yet.*

### bool rabbit_hole_interaction_completed = false {#var-rabbit-hole-interaction-completed}

*No description yet.*

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Override this in subclasses to implement specific task behavior *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_complete() {#method-execute-task-complete}

Override this in subclasses for task completion logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_interrupt() {#method-execute-task-interrupt}

Override this in subclasses for task interruption logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_fail() {#method-execute-task-fail}

Override this in subclasses for task failure logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### InteractableObject get_target_rabbit_hole() {#method-get-target-rabbit-hole}

*No description yet.*

### bool is_teleportation_in_progress() {#method-is-teleportation-in-progress}

*No description yet.*

### bool is_rabbit_hole_accessible() {#method-is-rabbit-hole-accessible}

*No description yet.*

### float get_distance_to_rabbit_hole() {#method-get-distance-to-rabbit-hole}

*No description yet.*

### bool is_in_rabbit_hole_interaction_range() {#method-is-in-rabbit-hole-interaction-range}

*No description yet.*

### void set_rabbit_hole_id( new_id: int ) {#method-set-rabbit-hole-id}

Set the target rabbit hole ID dynamically

### void set_local_teleport_only( local_only: bool ) {#method-set-local-teleport-only}

Set local teleport only flag dynamically

### void set_interaction_distance( distance: float ) {#method-set-interaction-distance}

Set interaction distance dynamically

### void cleanup_timers() {#method-cleanup-timers}

Clean up all timers and resources *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*


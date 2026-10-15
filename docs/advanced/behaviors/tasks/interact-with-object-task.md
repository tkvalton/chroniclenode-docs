<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractWithObjectTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Make entity interact with a specific interactable object by unique ID Enhanced with proper signal-based movement handling

## Properties

| | | |
|---|---|---|
| `int` | [target_interactable_id](#prop-target-interactable-id) | `0` |
| `bool` | [move_to_object](#prop-move-to-object) | `true` |
| `bool` | [force_walking](#prop-force-walking) | `false` |
| `float` | [max_interaction_distance](#prop-max-interaction-distance) | `2.0` |
| `bool` | [face_object](#prop-face-object) | `true` |
| `float` | [wait_time](#prop-wait-time) | `0.0` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_interactable](#var-target-interactable) | `null` |
| `Vector3` | [object_position](#var-object-position) | `Vector3.ZERO` |
| `float` | [interaction_range](#var-interaction-range) | `2.0` |
| `bool` | [movement_completed](#var-movement-completed) | `false` |
| `bool` | [facing_completed](#var-facing-completed) | `false` |
| `bool` | [object_interaction_completed](#var-object-interaction-completed) | `false` |
| `Timer` | [wait_timer](#var-wait-timer) | `null` |
| `bool` | [waiting_after_interaction](#var-waiting-after-interaction) | `false` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `InteractableObject` | [get_target_interactable](#method-get-target-interactable)() |
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `bool` | [is_in_interaction_range](#method-is-in-interaction-range)() |
| `void` | [set_target_interactable_id](#method-set-target-interactable-id)( `new_id: int` ) |
| `bool` | [is_target_accessible](#method-is-target-accessible)() |
| `void` | [set_max_interaction_distance](#method-set-max-interaction-distance)( `distance: float` ) |
| `void` | [cleanup_timers](#method-cleanup-timers)() |

## Property descriptions

*Target*

### int target_interactable_id = 0 {#prop-target-interactable-id}

The unique ID of the interactable to interact with

### bool move_to_object = true {#prop-move-to-object}

Whether to move to the object before interacting

### bool force_walking = false {#prop-force-walking}

Whether to force walking instead of running

### float max_interaction_distance = 2.0 {#prop-max-interaction-distance}

Maximum distance to attempt interaction from

### bool face_object = true {#prop-face-object}

Whether to face the object before interacting

*Post-Interaction*

### float wait_time = 0.0 {#prop-wait-time}

Time to wait after interaction before completing (0 = complete immediately)

## Variable descriptions

### InteractableObject target_interactable = null {#var-target-interactable}

The object the entity interacts with.

### Vector3 object_position = Vector3.ZERO {#var-object-position}

The position of the object.

### float interaction_range = 2.0 {#var-interaction-range}

How close the entity must be to use the object.

### bool movement_completed = false {#var-movement-completed}

True once the entity arrived.

### bool facing_completed = false {#var-facing-completed}

True once the entity faces the object.

### bool object_interaction_completed = false {#var-object-interaction-completed}

True once the interaction is done.

### Timer wait_timer = null {#var-wait-timer}

Timer for waiting after interaction

### bool waiting_after_interaction = false {#var-waiting-after-interaction}

Whether we're currently waiting after interaction

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Starts the task.

### void execute_task_complete() {#method-execute-task-complete}

Called when the task finishes well.

### void execute_task_interrupt() {#method-execute-task-interrupt}

Called when something interrupts the task.

### void execute_task_fail() {#method-execute-task-fail}

Called when the task fails.

### InteractableObject get_target_interactable() {#method-get-target-interactable}

The object the entity interacts with.

### float get_distance_to_target() {#method-get-distance-to-target}

The distance to the object (-1 when there is none).

### bool is_in_interaction_range() {#method-is-in-interaction-range}

Is the entity close enough to use the object?

### void set_target_interactable_id( new_id: int ) {#method-set-target-interactable-id}

Set the target interactable ID dynamically

### bool is_target_accessible() {#method-is-target-accessible}

Check if target is currently accessible

### void set_max_interaction_distance( distance: float ) {#method-set-max-interaction-distance}

Set interaction distance dynamically

### void cleanup_timers() {#method-cleanup-timers}

Frees the timers of the task.


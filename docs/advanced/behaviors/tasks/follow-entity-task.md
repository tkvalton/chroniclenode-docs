<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FollowEntityTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Follow an entity by unique ID with proper validation and error handling. Uses ObjectRegistry to find the target entity and fails gracefully if not found.

## Properties

| | | |
|---|---|---|
| `int` | [target_entity_id](#prop-target-entity-id) | `0` |
| `float` | [follow_distance](#prop-follow-distance) | `3.0` |
| `float` | [max_follow_distance](#prop-max-follow-distance) | `10.0` |
| `bool` | [use_formation_position](#prop-use-formation-position) | `false` |
| `bool` | [force_walking](#prop-force-walking) | `false` |
| `float` | [catch_up_threshold](#prop-catch-up-threshold) | `15.0` |
| `float` | [stop_following_distance](#prop-stop-following-distance) | `1.5` |
| `float` | [update_interval](#prop-update-interval) | `0.5` |

## Variables

| | | |
|---|---|---|
| `Timer` | [follow_timer](#var-follow-timer) | `null` |
| `Entity` | [target_entity](#var-target-entity) | `null` |
| `Vector3` | [last_target_position](#var-last-target-position) | `Vector3.ZERO` |
| `bool` | [is_following](#var-is-following) | `false` |
| `float` | [last_validation_check](#var-last-validation-check) | `0.0` |
| `float` | [validation_interval](#var-validation-interval) | `5.0  # Check target validity every 5 seconds` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `Entity` | [get_target_entity](#method-get-target-entity)() |
| `void` | [set_target_entity_id](#method-set-target-entity-id)( `new_id: int` ) |
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `void` | [cleanup_timers](#method-cleanup-timers)() |

## Property descriptions

*Follow Settings*

### int target_entity_id = 0 {#prop-target-entity-id}

Unique entity ID of the target to follow

### float follow_distance = 3.0 {#prop-follow-distance}

Distance to maintain from target

### float max_follow_distance = 10.0 {#prop-max-follow-distance}

Maximum distance before moving closer

### bool use_formation_position = false {#prop-use-formation-position}

Whether to use formation positioning (for pets)

### bool force_walking = false {#prop-force-walking}

Force walking even when far from target

*Behavior*

### float catch_up_threshold = 15.0 {#prop-catch-up-threshold}

Distance at which to teleport to target (catch-up)

### float stop_following_distance = 1.5 {#prop-stop-following-distance}

Distance at which to stop moving closer

### float update_interval = 0.5 {#prop-update-interval}

How often to update follow position (seconds)

## Variable descriptions

### Timer follow_timer = null {#var-follow-timer}

*No description yet.*

### Entity target_entity = null {#var-target-entity}

*No description yet.*

### Vector3 last_target_position = Vector3.ZERO {#var-last-target-position}

*No description yet.*

### bool is_following = false {#var-is-following}

*No description yet.*

### float last_validation_check = 0.0 {#var-last-validation-check}

*No description yet.*

### float validation_interval = 5.0  # Check target validity every 5 seconds {#var-validation-interval}

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

### Entity get_target_entity() {#method-get-target-entity}

Get the current target entity (for external access)

### void set_target_entity_id( new_id: int ) {#method-set-target-entity-id}

Change the target entity ID (will re-validate on next update)

### float get_distance_to_target() {#method-get-distance-to-target}

Get current distance to target

### void cleanup_timers() {#method-cleanup-timers}

Clean up all timers and resources *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*


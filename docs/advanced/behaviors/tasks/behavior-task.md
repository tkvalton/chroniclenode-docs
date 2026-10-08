<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorTask

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ConsumeItemTask](/advanced/behaviors/tasks/consume-item-task), [CreateItemTask](/advanced/behaviors/tasks/create-item-task), [EquipItemTask](/advanced/behaviors/tasks/equip-item-task), [FollowEntityTask](/advanced/behaviors/tasks/follow-entity-task), [IdleTask](/advanced/behaviors/tasks/idle-task), [InteractWithObjectTask](/advanced/behaviors/tasks/interact-with-object-task), [MoveToPointTask](/advanced/behaviors/tasks/move-to-point-task), [OpenContainerTask](/advanced/behaviors/tasks/open-container-task), [PatrolTask](/advanced/behaviors/tasks/patrol-task), [PerformAnimationTask](/advanced/behaviors/tasks/perform-animation-task), [SetMetadataTask](/advanced/behaviors/tasks/set-metadata-task), [UseAbilityAtPointTask](/advanced/behaviors/tasks/use-ability-at-point-task), [UseAbilityTask](/advanced/behaviors/tasks/use-ability-task), [UseLadderTask](/advanced/behaviors/tasks/use-ladder-task), [UseRabbitHoleTask](/advanced/behaviors/tasks/use-rabbit-hole-task), [WanderTask](/advanced/behaviors/tasks/wander-task)

Enhanced BehaviorTask base class with comprehensive features and robust integration. Includes centralized signal management, enhanced path failure handling, progress tracking, and LOD system support for production-ready NPC behavior.

## Description

CORRECTED: Restored proper movement functionality and signal handling

## Properties

| | | |
|---|---|---|
| `bool` | [interruptible](#prop-interruptible) | `true` |
| `int` | [priority](#prop-priority) | `0` |
| `CompletionCriteria` | [completion_criteria](#prop-completion-criteria) | `CompletionCriteria.ON_TASK_COMPLETE` |
| `float` | [task_duration](#prop-task-duration) | `0.0` |
| `float` | [cooldown_time](#prop-cooldown-time) | `0.0` |
| `float` | [minimum_runtime](#prop-minimum-runtime) | `0.0` |
| `PathFailureStrategy` | [path_failure_strategy](#prop-path-failure-strategy) | `PathFailureStrategy.FIND_NEARBY` |
| `int` | [max_recovery_attempts](#prop-max-recovery-attempts) | `3` |
| `float` | [recovery_attempt_delay](#prop-recovery-attempt-delay) | `1.0` |
| `float` | [nearby_search_radius](#prop-nearby-search-radius) | `5.0` |
| `bool` | [allow_teleport_recovery](#prop-allow-teleport-recovery) | `false` |
| `Array[EntityCondition]` | [execution_conditions](#prop-execution-conditions) | `[]` |
| `float` | [max_distance_from_start](#prop-max-distance-from-start) | `-1.0` |
| `int` | [max_retry_attempts](#prop-max-retry-attempts) | `0` |
| `float` | [retry_delay](#prop-retry-delay) | `1.0` |

## Variables

| | | |
|---|---|---|
| `String` | [display_name](#var-display-name) | `""` |
| `String` | [description](#var-description) | `""` |
| `TaskState` | [state](#var-state) | `TaskState.INACTIVE` |
| `MovementType` | [movement_type](#var-movement-type) | `MovementType.NONE` |
| `Entity` | [entity](#var-entity) |  |
| `float` | [last_completion_time](#var-last-completion-time) | `-INF` |
| `float` | [task_start_time](#var-task-start-time) | `0.0` |
| `Vector3` | [task_start_position](#var-task-start-position) | `Vector3.ZERO` |
| `bool` | [task_actions_completed](#var-task-actions-completed) | `false` |
| `int` | [current_retry_attempt](#var-current-retry-attempt) | `0` |
| `float` | [current_progress](#var-current-progress) | `0.0` |
| `int` | [current_recovery_attempts](#var-current-recovery-attempts) | `0` |
| `Vector3` | [last_failed_position](#var-last-failed-position) | `Vector3.ZERO` |
| `Array[Vector3]` | [alternative_positions](#var-alternative-positions) | `[]` |
| `Timer` | [duration_timer](#var-duration-timer) | `null` |
| `Timer` | [minimum_runtime_timer](#var-minimum-runtime-timer) | `null` |
| `Timer` | [retry_delay_timer](#var-retry-delay-timer) | `null` |
| `Timer` | [recovery_timer](#var-recovery-timer) | `null` |
| `Timer` | [progress_update_timer](#var-progress-update-timer) | `null` |
| `bool` | [minimum_runtime_satisfied](#var-minimum-runtime-satisfied) | `false` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [set_system_hub](#method-set-system-hub)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [task_start](#method-task-start)() |
| `void` | [task_complete](#method-task-complete)() |
| `void` | [task_fail](#method-task-fail)( `reason: String` ) |
| `void` | [task_interrupt](#method-task-interrupt)( `reason: String` ) |
| `void` | [notify_task_complete](#method-notify-task-complete)() |
| `void` | [update_progress](#method-update-progress)( `progress: float` ) |
| `float` | [calculate_task_progress](#method-calculate-task-progress)() |
| `bool` | [request_movement](#method-request-movement)( `params: Dictionary` ) |
| `bool` | [is_at_destination](#method-is-at-destination)() |
| `void` | [stop_movement](#method-stop-movement)() |
| `void` | [handle_path_failure](#method-handle-path-failure)() |
| `bool` | [is_active](#method-is-active)() |
| `bool` | [is_finished](#method-is-finished)() |
| `bool` | [can_execute](#method-can-execute)() |
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `void` | [cleanup_timers](#method-cleanup-timers)() |

## Signals

### task_state_changed( old_state: TaskState, new_state: TaskState ) {#signal-task-state-changed}

### task_progress_updated( progress: float ) {#signal-task-progress-updated}

## Enumerations

### enum TaskState {#enum-taskstate}

Task execution states

- **INACTIVE** = `0` - Task is not running
- **STARTING** = `1` - Task is initializing
- **RUNNING** = `2` - Task is actively executing
- **COMPLETING** = `3` - Task is finishing up
- **COMPLETED** = `4` - Task finished successfully
- **INTERRUPTED** = `5` - Task was stopped before completion
- **FAILED** = `6` - Task failed due to error

### enum CompletionCriteria {#enum-completioncriteria}

Completion criteria options

- **ON_TASK_COMPLETE** = `0` - Complete when task actions finish
- **ON_DURATION_END** = `1` - Complete when duration timer expires
- **ON_EITHER** = `2` - Complete on whichever happens first

### enum MovementType {#enum-movementtype}

Movement types for behavior tasks

- **NONE** = `0` - No movement
- **MOVE_TO_POINT** = `1` - Move to specific location
- **FOLLOW_ENTITY** = `2` - Follow another entity
- **CUSTOM** = `3` - Custom movement handling

### enum PathFailureStrategy {#enum-pathfailurestrategy}

Path failure recovery strategies

- **RETRY_ORIGINAL** = `0` - Try same position again after delay
- **FIND_NEARBY** = `1` - Find nearby accessible position
- **TELEPORT_CLOSE** = `2` - Teleport closer and try again (last resort)
- **SKIP_GRACEFULLY** = `3` - Skip with meaningful fallback behavior
- **WAIT_AND_RETRY** = `4` - Wait for obstacle to clear

## Property descriptions

### bool interruptible = true {#prop-interruptible}

Whether the task can be interrupted by external events

### int priority = 0 {#prop-priority}

Priority of this task (higher = more important)

*Timing*

### CompletionCriteria completion_criteria = CompletionCriteria.ON_TASK_COMPLETE {#prop-completion-criteria}

When to mark the task as complete

### float task_duration = 0.0 {#prop-task-duration}

Duration after which the task automatically completes (0 = no limit)

### float cooldown_time = 0.0 {#prop-cooldown-time}

Cooldown after task completion before it can run again

### float minimum_runtime = 0.0 {#prop-minimum-runtime}

Minimum time this task should run (prevents instant completion)

*Movement*

### PathFailureStrategy path_failure_strategy = PathFailureStrategy.FIND_NEARBY {#prop-path-failure-strategy}

Strategy for handling path failures

### int max_recovery_attempts = 3 {#prop-max-recovery-attempts}

Maximum recovery attempts for path failures

### float recovery_attempt_delay = 1.0 {#prop-recovery-attempt-delay}

Delay between recovery attempts

### float nearby_search_radius = 5.0 {#prop-nearby-search-radius}

Search radius for nearby positions during recovery

### bool allow_teleport_recovery = false {#prop-allow-teleport-recovery}

Whether to allow teleportation as last resort

*Conditions*

### Array[EntityCondition] execution_conditions = [] {#prop-execution-conditions}

Conditions that must be met for this task to start

### float max_distance_from_start = -1.0 {#prop-max-distance-from-start}

Maximum distance from start position (-1 = unlimited)

*Error Handling*

### int max_retry_attempts = 0 {#prop-max-retry-attempts}

How many times to retry if task fails

### float retry_delay = 1.0 {#prop-retry-delay}

Delay between retry attempts

## Variable descriptions

### String display_name = "" {#var-display-name}

Editor only properties

### String description = "" {#var-description}

*No description yet.*

### TaskState state = TaskState.INACTIVE {#var-state}

Current task state

### MovementType movement_type = MovementType.NONE {#var-movement-type}

Type of movement this task uses

### Entity entity {#var-entity}

Reference to the entity executing this task

### float last_completion_time = -INF {#var-last-completion-time}

When the task was last completed

### float task_start_time = 0.0 {#var-task-start-time}

When the task started

### Vector3 task_start_position = Vector3.ZERO {#var-task-start-position}

Start position of the entity when task began

### bool task_actions_completed = false {#var-task-actions-completed}

Whether the task's main actions have completed

### int current_retry_attempt = 0 {#var-current-retry-attempt}

Current retry attempt number

### float current_progress = 0.0 {#var-current-progress}

Current progress of the task (0.0 to 1.0)

### int current_recovery_attempts = 0 {#var-current-recovery-attempts}

Current path failure recovery attempts

### Vector3 last_failed_position = Vector3.ZERO {#var-last-failed-position}

Last failed position for analysis

### Array[Vector3] alternative_positions = [] {#var-alternative-positions}

Alternative positions found during recovery

### Timer duration_timer = null {#var-duration-timer}

Timer for duration-based completion

### Timer minimum_runtime_timer = null {#var-minimum-runtime-timer}

Timer for minimum runtime enforcement

### Timer retry_delay_timer = null {#var-retry-delay-timer}

Timer for retry delays

### Timer recovery_timer = null {#var-recovery-timer}

Timer for recovery attempts

### Timer progress_update_timer = null {#var-progress-update-timer}

Timer for automatic progress updates

### bool minimum_runtime_satisfied = false {#var-minimum-runtime-satisfied}

Whether minimum runtime has been satisfied

### GameHost.SystemHub system_hub {#var-system-hub}

SystemRefs

## Method descriptions

### void set_system_hub( p_system_hub: GameHost.SystemHub ) {#method-set-system-hub}

*No description yet.*

### void task_start() {#method-task-start}

Called when the task is started

### void task_complete() {#method-task-complete}

Called when the task is completed successfully

### void task_fail( reason: String ) {#method-task-fail}

Called when the task fails

### void task_interrupt( reason: String ) {#method-task-interrupt}

Called when the task is interrupted

### void notify_task_complete() {#method-notify-task-complete}

Call this from your task implementation when work is done This replaces the complex _complete_task() method

### void update_progress( progress: float ) {#method-update-progress}

Update task progress (0.0 to 1.0)

### float calculate_task_progress() {#method-calculate-task-progress}

Calculate overall task progress based on completion criteria

### bool request_movement( params: Dictionary ) {#method-request-movement}

Request movement to a position (returns immediately) Request movement through the entity with proper movement type handling

### bool is_at_destination() {#method-is-at-destination}

Check if entity is at destination

### void stop_movement() {#method-stop-movement}

Stop current movement

### void handle_path_failure() {#method-handle-path-failure}

Handle path failure with recovery strategies

### bool is_active() {#method-is-active}

Check if the task is currently active

### bool is_finished() {#method-is-finished}

Check if the task has completed (successfully or failed)

### bool can_execute() {#method-can-execute}

Check if task can be executed (conditions and cooldown)

### void execute_task_start() {#method-execute-task-start}

Override this in subclasses to implement specific task behavior

### void execute_task_complete() {#method-execute-task-complete}

Override this in subclasses for task completion logic

### void execute_task_interrupt() {#method-execute-task-interrupt}

Override this in subclasses for task interruption logic

### void execute_task_fail() {#method-execute-task-fail}

Override this in subclasses for task failure logic

### void cleanup_timers() {#method-cleanup-timers}

Clean up all timers and resources


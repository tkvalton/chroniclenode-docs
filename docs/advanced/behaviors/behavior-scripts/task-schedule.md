<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TaskSchedule

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [OrderedSchedule](/advanced/behaviors/behavior-scripts/ordered-schedule), [PrioritySchedule](/advanced/behaviors/behavior-scripts/priority-schedule)

Enhanced TaskSchedule with comprehensive signal-based task management. Clean signal architecture for better decoupling and easier debugging.

## Properties

| | | |
|---|---|---|
| `String` | [schedule_name](#prop-schedule-name) | `"Default Schedule"` |
| `Array[BehaviorTask]` | [task_sequence](#prop-task-sequence) | `[]` |
| `bool` | [loop_sequence](#prop-loop-sequence) | `true` |
| `float` | [cooldown_time](#prop-cooldown-time) | `0.0` |
| `Array[EntityCondition]` | [activation_conditions](#prop-activation-conditions) | `[]` |
| `bool` | [require_all_conditions](#prop-require-all-conditions) | `true` |
| `FailureHandling` | [failure_handling](#prop-failure-handling) | `FailureHandling.SKIP_TO_NEXT` |
| `bool` | [randomize_order](#prop-randomize-order) | `false` |

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `float` | [last_activation_time](#var-last-activation-time) | `-INF` |
| `int` | [execution_count](#var-execution-count) | `0` |
| `BehaviorTask` | [current_executing_task](#var-current-executing-task) | `null` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |

## Methods

| | |
|---|---|
| `void` | [setup_schedule](#method-setup-schedule)( `system_hub: GameHost.SystemHub, entity_ref: Entity` ) |
| `void` | [on_activated](#method-on-activated)() |
| `void` | [on_deactivated](#method-on-deactivated)() |
| `void` | [start_schedule](#method-start-schedule)() |
| `void` | [on_task_completed](#method-on-task-completed)( `completed_task: BehaviorTask` ) |
| `void` | [on_task_failed](#method-on-task-failed)( `failed_task: BehaviorTask, reason: String` ) |
| `void` | [on_task_interrupted](#method-on-task-interrupted)( `interrupted_task: BehaviorTask, reason: String` ) |
| `bool` | [can_activate](#method-can-activate)( `entity: Entity` ) |
| `void` | [add_task](#method-add-task)( `task: BehaviorTask` ) |
| `void` | [insert_task](#method-insert-task)( `index: int, task: BehaviorTask` ) |
| `void` | [remove_task](#method-remove-task)( `index: int` ) |
| `BehaviorTask` | [get_effective_task](#method-get-effective-task)( `index: int` ) |
| `int` | [get_effective_size](#method-get-effective-size)() |
| `BehaviorTask` | [get_current_task](#method-get-current-task)() |
| `void` | [reset_schedule](#method-reset-schedule)() |
| `String` | [get_debug_status](#method-get-debug-status)() |

## Signals

### schedule_task_started( task: BehaviorTask ) {#signal-schedule-task-started}

Emitted when the schedule starts a new task

### schedule_task_completed( task: BehaviorTask ) {#signal-schedule-task-completed}

Emitted when the schedule completes a task

### schedule_task_failed( task: BehaviorTask, reason: String ) {#signal-schedule-task-failed}

Emitted when the schedule fails a task

### schedule_task_interrupted( task: BehaviorTask, reason: String ) {#signal-schedule-task-interrupted}

Emitted when a task is interrupted

### schedule_completed() {#signal-schedule-completed}

Emitted when the entire schedule completes

### schedule_aborted( reason: String ) {#signal-schedule-aborted}

Emitted when the schedule is aborted

### schedule_looped() {#signal-schedule-looped}

Emitted when the schedule loops back to start

## Enumerations

### enum FailureHandling {#enum-failurehandling}

- **SKIP_TO_NEXT** = `0` - Skip failed task and continue to next
- **RETRY_TASK** = `1` - Retry the failed task
- **RESTART_SCHEDULE** = `2` - Restart from beginning of schedule
- **ABORT_SCHEDULE** = `3` - Stop schedule execution

## Property descriptions

### String schedule_name = "Default Schedule" {#prop-schedule-name}

Display name for this schedule (used for identification and debugging)

### Array[BehaviorTask] task_sequence = [] {#prop-task-sequence}

The sequence of tasks to execute in order

### bool loop_sequence = true {#prop-loop-sequence}

Whether to loop through tasks when reaching the end

### float cooldown_time = 0.0 {#prop-cooldown-time}

Minimum time between schedule activations (seconds)

*Execution Conditions*

### Array[EntityCondition] activation_conditions = [] {#prop-activation-conditions}

Conditions that must be met for this schedule to be selectable

### bool require_all_conditions = true {#prop-require-all-conditions}

Whether ALL conditions must be met (true) or ANY condition (false)

*Behavior Settings*

### FailureHandling failure_handling = FailureHandling.SKIP_TO_NEXT {#prop-failure-handling}

How to handle task failures in this schedule

### bool randomize_order = false {#prop-randomize-order}

Whether to randomize task order within the sequence

## Variable descriptions

### Entity entity {#var-entity}

Reference to the entity using this schedule

### float last_activation_time = -INF {#var-last-activation-time}

When this schedule was last activated

### int execution_count = 0 {#var-execution-count}

Number of times this schedule has been executed

### BehaviorTask current_executing_task = null {#var-current-executing-task}

Currently executing task

### ChronoManager chrono_manager {#var-chrono-manager}

ChronoManager ref

## Method descriptions

### void setup_schedule( system_hub: GameHost.SystemHub, entity_ref: Entity ) {#method-setup-schedule}

Setup the schedule with entity reference

### void on_activated() {#method-on-activated}

Called when this schedule becomes active

### void on_deactivated() {#method-on-deactivated}

Called when this schedule is deactivated

### void start_schedule() {#method-start-schedule}

Start this schedule - should be overridden by derived classes

### void on_task_completed( completed_task: BehaviorTask ) {#method-on-task-completed}

Called when current task completes - should be overridden by derived classes

### void on_task_failed( failed_task: BehaviorTask, reason: String ) {#method-on-task-failed}

Called when current task fails - handled by _handle_task_failure first

### void on_task_interrupted( interrupted_task: BehaviorTask, reason: String ) {#method-on-task-interrupted}

Called when current task is interrupted

### bool can_activate( entity: Entity ) {#method-can-activate}

Check if this schedule can be activated based on all conditions

### void add_task( task: BehaviorTask ) {#method-add-task}

Add a task to the end of the sequence

### void insert_task( index: int, task: BehaviorTask ) {#method-insert-task}

Insert a task at a specific index

### void remove_task( index: int ) {#method-remove-task}

Remove a task at a specific index

### BehaviorTask get_effective_task( index: int ) {#method-get-effective-task}

Get the effective task at the given index (considering randomization)

### int get_effective_size() {#method-get-effective-size}

Get the effective size of the task sequence

### BehaviorTask get_current_task() {#method-get-current-task}

Get the current task being executed

### void reset_schedule() {#method-reset-schedule}

Reset the schedule to its initial state

### String get_debug_status() {#method-get-debug-status}

Get a status string for debugging


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PrioritySchedule

**Inherits:** [TaskSchedule](/advanced/behaviors/behavior-scripts/task-schedule) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

PrioritySchedule executes tasks based on priority and conditions using clean signal-based communication. Tasks are evaluated each time and the highest priority valid task is selected. This is ideal for reactive behavior where conditions frequently change.

## Properties

| | | |
|---|---|---|
| `ExecutionType` | [execution_type](#prop-execution-type) | `ExecutionType.PRIORITY` |
| `float` | [priority_evaluation_interval](#prop-priority-evaluation-interval) | `1.0` |
| `bool` | [allow_task_interruption](#prop-allow-task-interruption) | `true` |
| `int` | [interruption_priority_threshold](#prop-interruption-priority-threshold) | `10` |

## Variables

| | | |
|---|---|---|
| `Timer` | [priority_timer](#var-priority-timer) | `null` |
| `float` | [last_priority_check](#var-last-priority-check) | `0.0` |
| `Array[Dictionary]` | [last_evaluation_results](#var-last-evaluation-results) | `[]` |

## Methods

| | |
|---|---|
| `void` | [start_schedule](#method-start-schedule)() |
| `void` | [on_task_completed](#method-on-task-completed)( `completed_task: BehaviorTask` ) |
| `void` | [on_task_failed](#method-on-task-failed)( `failed_task: BehaviorTask, reason: String` ) |
| `void` | [on_task_interrupted](#method-on-task-interrupted)( `interrupted_task: BehaviorTask, reason: String` ) |
| `void` | [on_deactivated](#method-on-deactivated)() |
| `void` | [reset_schedule](#method-reset-schedule)() |
| `void` | [force_priority_evaluation](#method-force-priority-evaluation)() |
| `void` | [set_interruption_threshold](#method-set-interruption-threshold)( `threshold: int` ) |
| `void` | [add_task_with_evaluation](#method-add-task-with-evaluation)( `task: BehaviorTask, evaluate_immediately: bool = true` ) |
| `void` | [remove_task_with_replacement](#method-remove-task-with-replacement)( `index: int` ) |
| `BehaviorTask` | [get_current_task](#method-get-current-task)() |
| `bool` | [has_available_tasks](#method-has-available-tasks)() |
| `Array[BehaviorTask]` | [get_available_tasks_by_priority](#method-get-available-tasks-by-priority)() |
| `Array[Dictionary]` | [get_last_evaluation_results](#method-get-last-evaluation-results)() |
| `String` | [get_debug_status](#method-get-debug-status)() |
| `Dictionary` | [get_evaluation_stats](#method-get-evaluation-stats)() |

## Signals

### priority_evaluated( selected_task: BehaviorTask, available_tasks: Array[BehaviorTask] ) {#signal-priority-evaluated}

Emitted when priority evaluation occurs

### task_interrupted_for_priority( old_task: BehaviorTask, new_task: BehaviorTask ) {#signal-task-interrupted-for-priority}

Emitted when a task is interrupted for higher priority

### no_valid_tasks_available() {#signal-no-valid-tasks-available}

Emitted when no valid tasks are available

## Enumerations

### enum ExecutionType {#enum-executiontype}

The execution strategy for this schedule

## Property descriptions

### ExecutionType execution_type = ExecutionType.PRIORITY {#prop-execution-type}

*No description yet.*

*Priority Settings*

### float priority_evaluation_interval = 1.0 {#prop-priority-evaluation-interval}

How often to re-evaluate task priorities (seconds)

### bool allow_task_interruption = true {#prop-allow-task-interruption}

Whether to interrupt current task if higher priority task becomes available

### int interruption_priority_threshold = 10 {#prop-interruption-priority-threshold}

Minimum priority difference required to interrupt current task

## Variable descriptions

### Timer priority_timer = null {#var-priority-timer}

Timer for priority re-evaluation

### float last_priority_check = 0.0 {#var-last-priority-check}

Last time priorities were evaluated

### Array[Dictionary] last_evaluation_results = [] {#var-last-evaluation-results}

Cache of last evaluation results

## Method descriptions

### void start_schedule() {#method-start-schedule}

Start this schedule - find and start highest priority task

### void on_task_completed( completed_task: BehaviorTask ) {#method-on-task-completed}

Called when current task completes - find next best task

### void on_task_failed( failed_task: BehaviorTask, reason: String ) {#method-on-task-failed}

Called when current task fails

### void on_task_interrupted( interrupted_task: BehaviorTask, reason: String ) {#method-on-task-interrupted}

Called when current task is interrupted

### void on_deactivated() {#method-on-deactivated}

Called when this schedule is deactivated *(from [TaskSchedule](/advanced/behaviors/behavior-scripts/task-schedule))*

### void reset_schedule() {#method-reset-schedule}

Reset the schedule

### void force_priority_evaluation() {#method-force-priority-evaluation}

Force immediate priority re-evaluation

### void set_interruption_threshold( threshold: int ) {#method-set-interruption-threshold}

Set minimum priority difference for interruption

### void add_task_with_evaluation( task: BehaviorTask, evaluate_immediately: bool = true ) {#method-add-task-with-evaluation}

Add a task and optionally trigger immediate evaluation

### void remove_task_with_replacement( index: int ) {#method-remove-task-with-replacement}

Remove a task and find replacement if it was current

### BehaviorTask get_current_task() {#method-get-current-task}

Get current task (compatibility method)

### bool has_available_tasks() {#method-has-available-tasks}

Check if schedule has tasks available

### Array[BehaviorTask] get_available_tasks_by_priority() {#method-get-available-tasks-by-priority}

Get all available tasks sorted by priority

### Array[Dictionary] get_last_evaluation_results() {#method-get-last-evaluation-results}

Get task evaluation results for debugging

### String get_debug_status() {#method-get-debug-status}

Get detailed status for debugging

### Dictionary get_evaluation_stats() {#method-get-evaluation-stats}

Get priority evaluation statistics


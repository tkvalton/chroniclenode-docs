<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# OrderedSchedule

**Inherits:** [TaskSchedule](/advanced/behaviors/behavior-scripts/task-schedule) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [WanderSchedule](/advanced/behaviors/behavior-scripts/wander-schedule)

OrderedSchedule executes tasks in a defined sequence using clean signal-based communication. Tasks are run one after another: Task 1 → Task 2 → Task 3 → repeat (if looping).

## Properties

| | | |
|---|---|---|
| `ExecutionType` | [execution_type](#prop-execution-type) | `ExecutionType.ORDERED` |

## Variables

| | | |
|---|---|---|
| `int` | [current_task_index](#var-current-task-index) | `0` |
| `bool` | [has_completed_cycle](#var-has-completed-cycle) | `false` |

## Methods

| | |
|---|---|
| `void` | [start_schedule](#method-start-schedule)() |
| `void` | [on_task_completed](#method-on-task-completed)( `completed_task: BehaviorTask` ) |
| `void` | [on_task_interrupted](#method-on-task-interrupted)( `interrupted_task: BehaviorTask, reason: String` ) |
| `bool` | [has_next_task](#method-has-next-task)() |
| `float` | [get_schedule_progress](#method-get-schedule-progress)() |
| `int` | [get_completed_cycles](#method-get-completed-cycles)() |
| `void` | [reset_schedule](#method-reset-schedule)() |
| `void` | [restart_schedule](#method-restart-schedule)() |
| `bool` | [jump_to_task](#method-jump-to-task)( `index: int` ) |
| `BehaviorTask` | [get_next_task](#method-get-next-task)() |
| `bool` | [advance_to_next_task](#method-advance-to-next-task)() |
| `BehaviorTask` | [get_current_task](#method-get-current-task)() |
| `BehaviorTask` | [get_current_task_by_index](#method-get-current-task-by-index)() |
| `int` | [get_current_task_index](#method-get-current-task-index)() |
| `bool` | [skip_current_task](#method-skip-current-task)() |
| `bool` | [insert_task_at_current](#method-insert-task-at-current)( `task: BehaviorTask` ) |
| `bool` | [remove_current_task](#method-remove-current-task)() |

## Enumerations

### enum ExecutionType {#enum-executiontype}

The execution strategy for this schedule

## Property descriptions

### ExecutionType execution_type = ExecutionType.ORDERED {#prop-execution-type}

*No description yet.*

## Variable descriptions

### int current_task_index = 0 {#var-current-task-index}

Current task index in the sequence

### bool has_completed_cycle = false {#var-has-completed-cycle}

Whether we've completed at least one full cycle

## Method descriptions

### void start_schedule() {#method-start-schedule}

Start this schedule - begin with first task

### void on_task_completed( completed_task: BehaviorTask ) {#method-on-task-completed}

Called when current task completes - advance to next task

### void on_task_interrupted( interrupted_task: BehaviorTask, reason: String ) {#method-on-task-interrupted}

Called when current task is interrupted

### bool has_next_task() {#method-has-next-task}

Check if the schedule has more tasks

### float get_schedule_progress() {#method-get-schedule-progress}

Get progress through the current schedule cycle (0.0 to 1.0)

### int get_completed_cycles() {#method-get-completed-cycles}

Get total number of completed cycles

### void reset_schedule() {#method-reset-schedule}

Reset the schedule to the beginning

### void restart_schedule() {#method-restart-schedule}

Restart the schedule from the beginning

### bool jump_to_task( index: int ) {#method-jump-to-task}

Jump to a specific task index

### BehaviorTask get_next_task() {#method-get-next-task}

Get the next task to execute based on ordered sequence

### bool advance_to_next_task() {#method-advance-to-next-task}

Advance to the next task in sequence (compatibility method)

### BehaviorTask get_current_task() {#method-get-current-task}

Get the current task being executed (compatibility override)

### BehaviorTask get_current_task_by_index() {#method-get-current-task-by-index}

Get the task at the current index

### int get_current_task_index() {#method-get-current-task-index}

Get the current task index

### bool skip_current_task() {#method-skip-current-task}

Skip the current task and advance to next

### bool insert_task_at_current( task: BehaviorTask ) {#method-insert-task-at-current}

Insert a task at the current position (will be executed next)

### bool remove_current_task() {#method-remove-current-task}

Remove the current task and advance


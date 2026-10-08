<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PerformAnimationTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Simple PerformAnimationTask using AnimationSelection resources

## Properties

| | | |
|---|---|---|
| `AnimationSelectionSocial` | [animation_selection](#prop-animation-selection) |  |
| `int` | [loop_count](#prop-loop-count) | `0` |
| `Vector3` | [facing_direction](#prop-facing-direction) | `Vector3.ZERO` |
| `Vector3` | [animation_position](#prop-animation-position) | `Vector3.ZERO` |

## Variables

| | | |
|---|---|---|
| `int` | [loops_completed](#var-loops-completed) | `0` |
| `bool` | [positioned_for_animation](#var-positioned-for-animation) | `false` |
| `bool` | [facing_complete](#var-facing-complete) | `false` |
| `bool` | [animation_started](#var-animation-started) | `false` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |

## Property descriptions

*Animation*

### AnimationSelectionSocial animation_selection {#prop-animation-selection}

The animation selection to play

### int loop_count = 0 {#prop-loop-count}

Whether to loop the animation (0 = play once, &gt;0 = loop count)

*Positioning*

### Vector3 facing_direction = Vector3.ZERO {#prop-facing-direction}

Direction to face before starting animation (Vector3.ZERO = no change)

### Vector3 animation_position = Vector3.ZERO {#prop-animation-position}

Position to move to before starting (Vector3.ZERO = current position)

## Variable descriptions

### int loops_completed = 0 {#var-loops-completed}

*No description yet.*

### bool positioned_for_animation = false {#var-positioned-for-animation}

*No description yet.*

### bool facing_complete = false {#var-facing-complete}

*No description yet.*

### bool animation_started = false {#var-animation-started}

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


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UseAbilityTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

UseAbilityTask uses a specific ability on the current target. This is a common behavior task for combat and utility abilities.

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) | `0` |
| `bool` | [face_target](#prop-face-target) | `true` |
| `bool` | [move_into_range](#prop-move-into-range) | `true` |
| `float` | [min_distance](#prop-min-distance) | `0.5` |

## Variables

| | | |
|---|---|---|
| `AbilityInstance` | [ability_instance](#var-ability-instance) | `null` |
| `bool` | [positioned_for_ability](#var-positioned-for-ability) | `false` |
| `bool` | [facing_complete](#var-facing-complete) | `false` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `AbilityInstance` | [get_ability_instance](#method-get-ability-instance)() |
| `float` | [get_target_distance](#method-get-target-distance)() |

## Property descriptions

*Ability*

### int ability_id = 0 {#prop-ability-id}

The ID of the ability to use

### bool face_target = true {#prop-face-target}

Whether to face the target before using ability

*Range Check*

### bool move_into_range = true {#prop-move-into-range}

Whether to move into range if target is too far

### float min_distance = 0.5 {#prop-min-distance}

Minimum distance to maintain from target

## Variable descriptions

### AbilityInstance ability_instance = null {#var-ability-instance}

*No description yet.*

### bool positioned_for_ability = false {#var-positioned-for-ability}

*No description yet.*

### bool facing_complete = false {#var-facing-complete}

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

### AbilityInstance get_ability_instance() {#method-get-ability-instance}

*No description yet.*

### float get_target_distance() {#method-get-target-distance}

*No description yet.*


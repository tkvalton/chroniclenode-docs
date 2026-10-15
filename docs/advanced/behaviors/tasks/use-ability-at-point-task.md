<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UseAbilityAtPointTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

UseAbilityAtPointTask uses a specific ability at a target point. Useful for ground-targeted abilities, teleports, summons, etc.

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) | `0` |
| `Vector3` | [target_point](#prop-target-point) | `Vector3.ZERO` |
| `bool` | [face_target_point](#prop-face-target-point) | `true` |
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
| `float` | [get_point_distance](#method-get-point-distance)() |
| `void` | [set_target_point](#method-set-target-point)( `point: Vector3` ) |

## Property descriptions

*Ability*

### int ability_id = 0 {#prop-ability-id}

The ID of the ability to use

### Vector3 target_point = Vector3.ZERO {#prop-target-point}

The world position to target with the ability

### bool face_target_point = true {#prop-face-target-point}

Whether to face the target point before using ability

*Range Check*

### bool move_into_range = true {#prop-move-into-range}

Whether to move into range if point is too far

### float min_distance = 0.5 {#prop-min-distance}

Minimum distance to maintain from target point

## Variable descriptions

### AbilityInstance ability_instance = null {#var-ability-instance}

The ability the entity uses.

### bool positioned_for_ability = false {#var-positioned-for-ability}

True once the entity is in place to use the ability.

### bool facing_complete = false {#var-facing-complete}

True once the entity faces the point.

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Starts the task.

### void execute_task_complete() {#method-execute-task-complete}

Called when the task finishes well.

### void execute_task_interrupt() {#method-execute-task-interrupt}

Called when something interrupts the task.

### void execute_task_fail() {#method-execute-task-fail}

Called when the task fails.

### AbilityInstance get_ability_instance() {#method-get-ability-instance}

The ability the entity uses.

### float get_point_distance() {#method-get-point-distance}

The distance to the point (-1 when there is no entity).

### void set_target_point( point: Vector3 ) {#method-set-target-point}

Set the target point dynamically


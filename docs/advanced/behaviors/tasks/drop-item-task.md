<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DropItemTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The entity puts an item on the ground where it stands: a farmer who leaves a crate, a thief who drops loot. The item comes from the bag of the entity (it must have it) or is made out of nothing, as the setting says. Fails when dropped items are switched off.

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [quantity](#prop-quantity) | `1` |
| `bool` | [from_inventory](#prop-from-inventory) | `true` |
| `int` | [item_level](#prop-item-level) | `0` |
| `bool` | [launch](#prop-launch) | `false` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |

## Property descriptions

*Item*

### int item_id = 0 {#prop-item-id}

The item to drop

### int quantity = 1 {#prop-quantity}

How many of the item

### bool from_inventory = true {#prop-from-inventory}

True takes the item out of the bag of the entity (the task fails when it has none); false makes new ones

### int item_level = 0 {#prop-item-level}

The item level a generated item is made at when it is made new (0 = the level of its definition)

### bool launch = false {#prop-launch}

True throws the item up so it falls and bounces (if the Gameplay Config uses physics), false puts it down

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Puts the item on the ground

### void execute_task_complete() {#method-execute-task-complete}

Nothing to do when the task is done

### void execute_task_interrupt() {#method-execute-task-interrupt}

Nothing to interrupt

### void execute_task_fail() {#method-execute-task-fail}

Nothing to clean up


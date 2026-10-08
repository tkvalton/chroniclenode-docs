<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EquipItemTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Equip or unequip equipment items from the entity's inventory

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `EquipType` | [equip_option](#prop-equip-option) | `EquipType.EQUIP` |
| `bool` | [fail_if_item_not_found](#prop-fail-if-item-not-found) | `true` |
| `bool` | [fail_on_action_error](#prop-fail-on-action-error) | `true` |

## Variables

| | | |
|---|---|---|
| `ItemDefinitionEquipment` | [target_item](#var-target-item) | `null` |
| `bool` | [action_completed](#var-action-completed) | `false` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `void` | [set_item_id](#method-set-item-id)( `new_item_id: int` ) |
| `void` | [set_equip_action](#method-set-equip-action)( `action: EquipType` ) |
| `bool` | [is_item_equipped](#method-is-item-equipped)( `check_item_id: int` ) |
| `bool` | [is_item_in_inventory](#method-is-item-in-inventory)( `check_item_id: int` ) |
| `bool` | [was_action_completed](#method-was-action-completed)() |

## Enumerations

### enum EquipType {#enum-equiptype}

- **EQUIP** = `0`
- **UNEQUIP** = `1`

## Property descriptions

*Target*

### int item_id = 0 {#prop-item-id}

The item ID to equip/unequip

### EquipType equip_option = EquipType.EQUIP {#prop-equip-option}

What action to perform with the item

*Behavior*

### bool fail_if_item_not_found = true {#prop-fail-if-item-not-found}

Whether to fail if the item is not found in inventory (for equip) or not equipped (for unequip)

### bool fail_on_action_error = true {#prop-fail-on-action-error}

Whether to fail if the action cannot be completed

## Variable descriptions

### ItemDefinitionEquipment target_item = null {#var-target-item}

*No description yet.*

### bool action_completed = false {#var-action-completed}

*No description yet.*

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Execute the task - equip or unequip the specified item

### void execute_task_complete() {#method-execute-task-complete}

Task completed successfully

### void execute_task_interrupt() {#method-execute-task-interrupt}

Nothing to interrupt for equipment actions

### void execute_task_fail() {#method-execute-task-fail}

Nothing to clean up for equipment actions

### void set_item_id( new_item_id: int ) {#method-set-item-id}

Set the item ID to equip/unequip dynamically

### void set_equip_action( action: EquipType ) {#method-set-equip-action}

Set the equip action dynamically

### bool is_item_equipped( check_item_id: int ) {#method-is-item-equipped}

Check if the specified item is currently equipped

### bool is_item_in_inventory( check_item_id: int ) {#method-is-item-in-inventory}

Check if the specified item is in inventory

### bool was_action_completed() {#method-was-action-completed}

Get whether the last action was completed successfully


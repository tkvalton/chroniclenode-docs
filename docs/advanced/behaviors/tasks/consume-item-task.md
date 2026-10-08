<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConsumeItemTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Consume consumable items from the entity's inventory

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [quantity](#prop-quantity) | `1` |
| `bool` | [fail_if_item_not_found](#prop-fail-if-item-not-found) | `true` |
| `bool` | [fail_if_insufficient_quantity](#prop-fail-if-insufficient-quantity) | `true` |
| `bool` | [fail_if_not_consumable](#prop-fail-if-not-consumable) | `true` |

## Variables

| | | |
|---|---|---|
| `ItemDefinitionConsumable` | [target_item](#var-target-item) | `null` |
| `int` | [items_consumed](#var-items-consumed) | `0` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `void` | [set_item_id](#method-set-item-id)( `new_item_id: int` ) |
| `void` | [set_quantity](#method-set-quantity)( `new_quantity: int` ) |
| `void` | [set_item_and_quantity](#method-set-item-and-quantity)( `new_item_id: int, new_quantity: int` ) |
| `bool` | [is_item_consumable](#method-is-item-consumable)( `check_item_id: int` ) |
| `bool` | [has_sufficient_quantity](#method-has-sufficient-quantity)( `check_item_id: int, required_quantity: int = 1` ) |
| `int` | [get_available_quantity](#method-get-available-quantity)( `check_item_id: int` ) |
| `int` | [get_items_consumed](#method-get-items-consumed)() |

## Property descriptions

*Target*

### int item_id = 0 {#prop-item-id}

The item ID to consume

### int quantity = 1 {#prop-quantity}

How many of the item to consume

*Behavior*

### bool fail_if_item_not_found = true {#prop-fail-if-item-not-found}

Whether to fail if the item is not found in inventory

### bool fail_if_insufficient_quantity = true {#prop-fail-if-insufficient-quantity}

Whether to fail if there isn't enough quantity in inventory

### bool fail_if_not_consumable = true {#prop-fail-if-not-consumable}

Whether to fail if the item cannot be consumed (not consumable)

## Variable descriptions

### ItemDefinitionConsumable target_item = null {#var-target-item}

*No description yet.*

### int items_consumed = 0 {#var-items-consumed}

*No description yet.*

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Execute the task - consume the specified item

### void execute_task_complete() {#method-execute-task-complete}

Task completed successfully

### void execute_task_interrupt() {#method-execute-task-interrupt}

Nothing to interrupt for consumption

### void execute_task_fail() {#method-execute-task-fail}

Nothing to clean up for consumption

### void set_item_id( new_item_id: int ) {#method-set-item-id}

Set the item ID to consume dynamically

### void set_quantity( new_quantity: int ) {#method-set-quantity}

Set the quantity to consume dynamically

### void set_item_and_quantity( new_item_id: int, new_quantity: int ) {#method-set-item-and-quantity}

Set both item ID and quantity

### bool is_item_consumable( check_item_id: int ) {#method-is-item-consumable}

Check if the specified item is consumable

### bool has_sufficient_quantity( check_item_id: int, required_quantity: int = 1 ) {#method-has-sufficient-quantity}

Check if entity has enough of the specified item

### int get_available_quantity( check_item_id: int ) {#method-get-available-quantity}

Get how many of the item are available in inventory

### int get_items_consumed() {#method-get-items-consumed}

Get how many items were actually consumed in the last execution


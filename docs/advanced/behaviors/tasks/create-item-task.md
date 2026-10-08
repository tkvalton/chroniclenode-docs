<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CreateItemTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Emit signals for item creation instead of directly creating items Allows external systems to handle item creation logic (inventory, drops, rewards, etc.) Focuses on single item creation with configurable quantity

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [quantity](#prop-quantity) | `1` |
| `bool` | [target_self](#prop-target-self) | `true` |
| `bool` | [validate_item_exists](#prop-validate-item-exists) | `true` |
| `bool` | [fail_on_invalid_item](#prop-fail-on-invalid-item) | `true` |

## Variables

| | | |
|---|---|---|
| `bool` | [signal_emitted](#var-signal-emitted) | `false` |
| `bool` | [item_validated](#var-item-validated) | `false` |
| `String` | [validation_error](#var-validation-error) | `""` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `void` | [set_item](#method-set-item)( `new_item_id: int, new_quantity: int = 1` ) |
| `bool` | [is_item_valid](#method-is-item-valid)() |
| `String` | [get_item_name](#method-get-item-name)() |
| `String` | [get_task_description](#method-get-task-description)() |
| `bool` | [was_signal_emitted](#method-was-signal-emitted)() |
| `bool` | [was_item_validated](#method-was-item-validated)() |
| `String` | [get_validation_error](#method-get-validation-error)() |
| `Dictionary` | [get_configuration](#method-get-configuration)() |

## Property descriptions

*Item Configuration*

### int item_id = 0 {#prop-item-id}

Item ID to create (0 = no item)

### int quantity = 1 {#prop-quantity}

Quantity to create (must be positive)

*Target*

### bool target_self = true {#prop-target-self}

Whether to target the executing entity (true) or emit signal with null entity (false)

*Validation*

### bool validate_item_exists = true {#prop-validate-item-exists}

Whether to validate that the item ID exists in the database before emitting signal

### bool fail_on_invalid_item = true {#prop-fail-on-invalid-item}

Whether to fail the task if item validation fails

## Variable descriptions

### bool signal_emitted = false {#var-signal-emitted}

*No description yet.*

### bool item_validated = false {#var-item-validated}

*No description yet.*

### String validation_error = "" {#var-validation-error}

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

### void set_item( new_item_id: int, new_quantity: int = 1 ) {#method-set-item}

Set the item and quantity to request

### bool is_item_valid() {#method-is-item-valid}

Check if the configured item ID exists in the database

### String get_item_name() {#method-get-item-name}

Get the item name for display purposes

### String get_task_description() {#method-get-task-description}

Get a description of what this task will do

### bool was_signal_emitted() {#method-was-signal-emitted}

Check if signal was emitted in last execution

### bool was_item_validated() {#method-was-item-validated}

Check if item was validated in last execution

### String get_validation_error() {#method-get-validation-error}

Get validation error from last execution

### Dictionary get_configuration() {#method-get-configuration}

Get the current configuration as a dictionary


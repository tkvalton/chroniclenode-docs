<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# OpenContainerTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Open a specific container and optionally take/deposit items Enhanced with proper signal-based movement handling

## Properties

| | | |
|---|---|---|
| `int` | [container_id](#prop-container-id) | `0` |
| `bool` | [desired_open_state](#prop-desired-open-state) | `true` |
| `bool` | [move_to_container](#prop-move-to-container) | `true` |
| `float` | [interaction_distance](#prop-interaction-distance) | `2.0` |
| `int` | [take_item_id](#prop-take-item-id) | `0` |
| `int` | [take_quantity](#prop-take-quantity) | `1` |
| `int` | [deposit_item_id](#prop-deposit-item-id) | `0` |
| `int` | [deposit_quantity](#prop-deposit-quantity) | `1` |
| `bool` | [create_new_items](#prop-create-new-items) | `false` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_container](#var-target-container) | `null` |
| `bool` | [initial_container_state](#var-initial-container-state) | `false` |
| `bool` | [container_was_opened_by_us](#var-container-was-opened-by-us) | `false` |
| `bool` | [items_processed](#var-items-processed) | `false` |
| `Vector3` | [container_position](#var-container-position) | `Vector3.ZERO` |
| `float` | [interaction_range](#var-interaction-range) | `2.0` |
| `bool` | [movement_completed](#var-movement-completed) | `false` |
| `bool` | [container_interaction_completed](#var-container-interaction-completed) | `false` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `InteractableObject` | [get_target_container](#method-get-target-container)() |
| `bool` | [is_container_accessible](#method-is-container-accessible)() |
| `float` | [get_distance_to_container](#method-get-distance-to-container)() |
| `bool` | [is_in_container_interaction_range](#method-is-in-container-interaction-range)() |
| `void` | [set_container_id](#method-set-container-id)( `new_id: int` ) |
| `void` | [set_create_new_items](#method-set-create-new-items)( `create_new: bool` ) |
| `void` | [set_deposit_item](#method-set-deposit-item)( `item_id: int, quantity: int = 1` ) |
| `void` | [clear_deposit_item](#method-clear-deposit-item)() |
| `void` | [set_take_item](#method-set-take-item)( `item_id: int, quantity: int = 1` ) |
| `void` | [clear_take_item](#method-clear-take-item)() |
| `void` | [set_interaction_distance](#method-set-interaction-distance)( `distance: float` ) |

## Property descriptions

*Target*

### int container_id = 0 {#prop-container-id}

The unique ID of the container to interact with

### bool desired_open_state = true {#prop-desired-open-state}

Desired container state (true = open, false = close)

### bool move_to_container = true {#prop-move-to-container}

Whether to move to container before interacting

### float interaction_distance = 2.0 {#prop-interaction-distance}

Interaction distance from container

*Items*

### int take_item_id = 0 {#prop-take-item-id}

Item ID to take from container (0 = don't take anything)

### int take_quantity = 1 {#prop-take-quantity}

Quantity to take (defaults to 1)

### int deposit_item_id = 0 {#prop-deposit-item-id}

Item ID to deposit into container (0 = don't deposit anything)

### int deposit_quantity = 1 {#prop-deposit-quantity}

Quantity to deposit (defaults to 1)

### bool create_new_items = false {#prop-create-new-items}

If true, creates new items instead of taking from entity inventory

## Variable descriptions

### InteractableObject target_container = null {#var-target-container}

The container the entity opens.

### bool initial_container_state = false {#var-initial-container-state}

Whether the container was open when the task began.

### bool container_was_opened_by_us = false {#var-container-was-opened-by-us}

True when the task opened it (so it closes it again).

### bool items_processed = false {#var-items-processed}

True once the items were taken or put.

### Vector3 container_position = Vector3.ZERO {#var-container-position}

The position of the container.

### float interaction_range = 2.0 {#var-interaction-range}

How close the entity must be to open the container.

### bool movement_completed = false {#var-movement-completed}

True once the entity arrived.

### bool container_interaction_completed = false {#var-container-interaction-completed}

True once the container was used.

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Starts the task.

### void execute_task_interrupt() {#method-execute-task-interrupt}

Called when something interrupts the task.

### void execute_task_fail() {#method-execute-task-fail}

Called when the task fails.

### InteractableObject get_target_container() {#method-get-target-container}

The container the entity opens.

### bool is_container_accessible() {#method-is-container-accessible}

Can the container be opened now?

### float get_distance_to_container() {#method-get-distance-to-container}

The distance to the container (-1 when there is none).

### bool is_in_container_interaction_range() {#method-is-in-container-interaction-range}

Is the entity close enough to open the container?

### void set_container_id( new_id: int ) {#method-set-container-id}

Set the target container ID dynamically

### void set_create_new_items( create_new: bool ) {#method-set-create-new-items}

Set whether to create new items instead of transferring from inventory

### void set_deposit_item( item_id: int, quantity: int = 1 ) {#method-set-deposit-item}

Set the item to deposit with quantity dynamically

### void clear_deposit_item() {#method-clear-deposit-item}

Clear deposit item

### void set_take_item( item_id: int, quantity: int = 1 ) {#method-set-take-item}

Set the item to take with quantity dynamically

### void clear_take_item() {#method-clear-take-item}

Clear take item

### void set_interaction_distance( distance: float ) {#method-set-interaction-distance}

Set interaction distance dynamically


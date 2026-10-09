<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RemoveItemsFromContainerAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to remove items from a container's inventory

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [quantity](#prop-quantity) | `1` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_container](#var-target-container) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `InteractableObject` | [find_target_container](#method-find-target-container)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

ID of the container to remove items from

### int item_id = 0 {#prop-item-id}

Item ID to remove

### int quantity = 1 {#prop-quantity}

Quantity to remove (-1 for all)

## Variable descriptions

### InteractableObject target_container = null {#var-target-container}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### InteractableObject find_target_container() {#method-find-target-container}

Find the target container by ID

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


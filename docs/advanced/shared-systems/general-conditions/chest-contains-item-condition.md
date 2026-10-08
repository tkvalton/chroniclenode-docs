<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChestContainsItemCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Check if a container contains specific items Evaluates whether a chest/container has the required items and quantities

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [required_quantity](#prop-required-quantity) | `1` |
| `bool` | [at_least_quantity](#prop-at-least-quantity) | `true` |
| `bool` | [must_be_accessible](#prop-must-be-accessible) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

*Target*

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

The unique ID of the container to check

*Item Checks*

### int item_id = 0 {#prop-item-id}

Item ID to check for in the container

### int required_quantity = 1 {#prop-required-quantity}

Required quantity of the item (minimum)

### bool at_least_quantity = true {#prop-at-least-quantity}

Whether the container must have at least the required quantity (true) or exactly the quantity (false)

*Container Checks*

### bool must_be_accessible = true {#prop-must-be-accessible}

Whether the container must be accessible (not destroyed, interactable)

## Method descriptions

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Evaluate this condition with an optional argument Override this in subclasses to implement specific logic @param argument: Optional data needed for evaluation (Entity, Encounter, etc.) @return: true if condition is met, false otherwise *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_description() {#method-get-description}

Get a human-readable description of this condition (for editor/debugging) Override in subclasses to provide meaningful descriptions *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_function_description() {#method-get-function-description}

Get function description with placeholders for EventTypeSelectionDialog inline editing Override in subclasses to provide template with {parameter_name} placeholders Falls back to get_description() if not overridden *(from [Condition](/advanced/shared-systems/condition-bases/condition))*


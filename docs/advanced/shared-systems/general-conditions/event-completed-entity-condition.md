<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EventCompletedEntityCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if a specific event has been completed

## Properties

| | | |
|---|---|---|
| `int` | [event_id](#prop-event-id) | `0` |
| `bool` | [invert_check](#prop-invert-check) | `false` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### int event_id = 0 {#prop-event-id}

The event ID to check

### bool invert_check = false {#prop-invert-check}

Check if event is NOT completed

## Method descriptions

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Is the condition met?

### String get_description() {#method-get-description}

A short text about what the condition checks.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.


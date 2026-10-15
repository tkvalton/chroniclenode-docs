<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DoorStateCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Check door state and accessibility Evaluates door-specific conditions like open/closed state and lock status

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `bool` | [must_be_open](#prop-must-be-open) | `true` |
| `bool` | [state_must_match](#prop-state-must-match) | `true` |
| `bool` | [check_if_locked](#prop-check-if-locked) | `false` |
| `bool` | [should_be_unlocked](#prop-should-be-unlocked) | `true` |
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

The unique ID of the door to check

*State Checks*

### bool must_be_open = true {#prop-must-be-open}

Whether the door must be open (true) or closed (false)

### bool state_must_match = true {#prop-state-must-match}

Whether the open/closed state must match exactly

### bool check_if_locked = false {#prop-check-if-locked}

Whether to check if the door is locked

### bool should_be_unlocked = true {#prop-should-be-unlocked}

If checking lock status, whether door should be unlocked (true) or locked (false)

### bool must_be_accessible = true {#prop-must-be-accessible}

Whether the door must be accessible (not destroyed)

## Method descriptions

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Is the condition met?

### String get_description() {#method-get-description}

A short text about what the condition checks.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.


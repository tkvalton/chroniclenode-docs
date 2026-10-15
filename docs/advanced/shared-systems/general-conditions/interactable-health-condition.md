<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractableHealthCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if a destructible interactable's health meets certain criteria. Uses ObjectRegistry to find the target interactable by unique ID.

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `Condition.CheckLogic` | [health_check_logic](#prop-health-check-logic) | `Condition.CheckLogic.GREATER` |
| `int` | [target_health](#prop-target-health) | `0` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |

## Property descriptions

*Target Interactable*

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

The unique ID of the destructible interactable to check

*Health Check*

### Condition.CheckLogic health_check_logic = Condition.CheckLogic.GREATER {#prop-health-check-logic}

Logic for comparing the health

### int target_health = 0 {#prop-target-health}

Target health value to compare against

## Method descriptions

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Is the condition met?

### String get_description() {#method-get-description}

A short text about what the condition checks.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool is_valid() {#method-is-valid}

Are the settings of the condition complete?

### String get_expected_argument_type() {#method-get-expected-argument-type}

The kind of thing the condition is checked against (an entity, an encounter ...).


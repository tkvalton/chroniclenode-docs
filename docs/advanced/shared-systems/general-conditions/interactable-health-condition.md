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

Evaluate this condition with an optional argument Override this in subclasses to implement specific logic @param argument: Optional data needed for evaluation (Entity, Encounter, etc.) @return: true if condition is met, false otherwise *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_description() {#method-get-description}

Get a human-readable description of this condition (for editor/debugging) Override in subclasses to provide meaningful descriptions *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_function_description() {#method-get-function-description}

Get function description with placeholders for EventTypeSelectionDialog inline editing Override in subclasses to provide template with &#123;parameter_name&#125; placeholders Falls back to get_description() if not overridden *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### bool is_valid() {#method-is-valid}

Validate that this condition is properly configured Override in subclasses to check required fields *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_expected_argument_type() {#method-get-expected-argument-type}

Get the expected argument type for this condition (for editor hints) Override in subclasses to specify what argument type is expected *(from [Condition](/advanced/shared-systems/condition-bases/condition))*


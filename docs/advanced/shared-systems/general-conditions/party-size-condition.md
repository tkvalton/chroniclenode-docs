<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PartySizeCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the party size meets certain criteria.

## Properties

| | | |
|---|---|---|
| `Condition.CheckLogic` | [size_check_logic](#prop-size-check-logic) | `Condition.CheckLogic.GREATER_EQUAL` |
| `int` | [target_size](#prop-target-size) | `1` |
| `bool` | [count_only_alive](#prop-count-only-alive) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |

## Property descriptions

*Size Check*

### Condition.CheckLogic size_check_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-size-check-logic}

Logic for comparing the party size

### int target_size = 1 {#prop-target-size}

Target party size to compare against

### bool count_only_alive = true {#prop-count-only-alive}

Whether to count only alive members (true) or all members (false)

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


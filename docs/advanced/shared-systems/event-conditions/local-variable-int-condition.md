<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalVariableIntCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if a local integer variable in an event meets certain criteria

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `Condition.CheckLogic` | [check_logic](#prop-check-logic) | `Condition.CheckLogic.EQUAL` |
| `int` | [compare_value](#prop-compare-value) | `0` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

*Variable Check*

### String variable_key = "" {#prop-variable-key}

The key of the variable

### Condition.CheckLogic check_logic = Condition.CheckLogic.EQUAL {#prop-check-logic}

How the variable is compared with the value

### int compare_value = 0 {#prop-compare-value}

The value to compare with

## Method descriptions

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Evaluate this condition with an optional argument Override this in subclasses to implement specific logic @param argument: Optional data needed for evaluation (Entity, Encounter, etc.) @return: true if condition is met, false otherwise *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_description() {#method-get-description}

Get a human-readable description of this condition (for editor/debugging) Override in subclasses to provide meaningful descriptions *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_function_description() {#method-get-function-description}

Get function description with placeholders for EventTypeSelectionDialog inline editing Override in subclasses to provide template with &#123;parameter_name&#125; placeholders Falls back to get_description() if not overridden *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_expected_argument_type() {#method-get-expected-argument-type}

Get the expected argument type for this condition (for editor hints) Override in subclasses to specify what argument type is expected *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### bool is_valid() {#method-is-valid}

Validate that this condition is properly configured Override in subclasses to check required fields *(from [Condition](/advanced/shared-systems/condition-bases/condition))*


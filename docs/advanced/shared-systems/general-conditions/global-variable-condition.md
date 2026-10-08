<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GlobalVariableCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Universal condition for checking global variables of any type

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `Condition.CheckLogic` | [check_logic](#prop-check-logic) | `Condition.CheckLogic.EQUAL` |
| `int` | [compare_int](#prop-compare-int) | `0` |
| `float` | [compare_float](#prop-compare-float) | `0.0` |
| `bool` | [compare_bool](#prop-compare-bool) | `false` |
| `String` | [compare_string](#prop-compare-string) | `""` |

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

*Compare Values*

### int compare_int = 0 {#prop-compare-int}

The value to compare with, for a whole-number variable

### float compare_float = 0.0 {#prop-compare-float}

The value to compare with, for a decimal variable

### bool compare_bool = false {#prop-compare-bool}

The value to compare with, for a true-or-false variable

### String compare_string = "" {#prop-compare-string}

The value to compare with, for a text variable

## Method descriptions

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Evaluate this condition with an optional argument Override this in subclasses to implement specific logic @param argument: Optional data needed for evaluation (Entity, Encounter, etc.) @return: true if condition is met, false otherwise *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_description() {#method-get-description}

Get a human-readable description of this condition (for editor/debugging) Override in subclasses to provide meaningful descriptions *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_function_description() {#method-get-function-description}

Get function description with placeholders for EventTypeSelectionDialog inline editing Override in subclasses to provide template with {parameter_name} placeholders Falls back to get_description() if not overridden *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_expected_argument_type() {#method-get-expected-argument-type}

Get the expected argument type for this condition (for editor hints) Override in subclasses to specify what argument type is expected *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### bool is_valid() {#method-is-valid}

Validate that this condition is properly configured Override in subclasses to check required fields *(from [Condition](/advanced/shared-systems/condition-bases/condition))*


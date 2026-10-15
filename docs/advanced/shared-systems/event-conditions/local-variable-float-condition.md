<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalVariableFloatCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if a local float variable in an event meets certain criteria

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `Condition.CheckLogic` | [check_logic](#prop-check-logic) | `Condition.CheckLogic.EQUAL` |
| `float` | [compare_value](#prop-compare-value) | `0.0` |
| `float` | [epsilon](#prop-epsilon) | `0.0001  # For float equality comparison` |

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

### float compare_value = 0.0 {#prop-compare-value}

The value to compare with

### float epsilon = 0.0001  # For float equality comparison {#prop-epsilon}

How close two numbers must be to count as equal (for the equal and not-equal checks)

## Method descriptions

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Is the condition met?

### String get_description() {#method-get-description}

A short text about what the condition checks.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### String get_expected_argument_type() {#method-get-expected-argument-type}

The kind of thing the condition is checked against (an entity, an encounter ...).

### bool is_valid() {#method-is-valid}

Are the settings of the condition complete?


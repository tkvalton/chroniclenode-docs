<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalVariableStringCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if a local string variable in an event meets certain criteria

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `StringComparison` | [comparison](#prop-comparison) | `StringComparison.EQUALS` |
| `String` | [compare_value](#prop-compare-value) | `""` |
| `bool` | [case_sensitive](#prop-case-sensitive) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |
| `bool` | [is_valid](#method-is-valid)() |

## Enumerations

### enum StringComparison {#enum-stringcomparison}

- **EQUALS** = `0`
- **NOT_EQUALS** = `1`
- **CONTAINS** = `2`
- **NOT_CONTAINS** = `3`
- **STARTS_WITH** = `4`
- **ENDS_WITH** = `5`
- **IS_EMPTY** = `6`
- **IS_NOT_EMPTY** = `7`

## Property descriptions

*Variable Check*

### String variable_key = "" {#prop-variable-key}

The key of the variable

### StringComparison comparison = StringComparison.EQUALS {#prop-comparison}

How the text is compared: equals, contains, starts or ends with, is empty ...

### String compare_value = "" {#prop-compare-value}

The text to compare with

### bool case_sensitive = true {#prop-case-sensitive}

Capital letters must match

## Method descriptions

### String get_function_description() {#method-get-function-description}

Get function description with placeholders for EventTypeSelectionDialog inline editing Override in subclasses to provide template with {parameter_name} placeholders Falls back to get_description() if not overridden *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Evaluate this condition with an optional argument Override this in subclasses to implement specific logic @param argument: Optional data needed for evaluation (Entity, Encounter, etc.) @return: true if condition is met, false otherwise *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_description() {#method-get-description}

Get a human-readable description of this condition (for editor/debugging) Override in subclasses to provide meaningful descriptions *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_expected_argument_type() {#method-get-expected-argument-type}

Get the expected argument type for this condition (for editor hints) Override in subclasses to specify what argument type is expected *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### bool is_valid() {#method-is-valid}

Validate that this condition is properly configured Override in subclasses to check required fields *(from [Condition](/advanced/shared-systems/condition-bases/condition))*


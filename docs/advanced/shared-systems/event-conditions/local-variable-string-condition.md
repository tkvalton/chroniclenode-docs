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

The options of string comparison: equals, not equals, contains, not contains, starts with, ends with, is empty, is not empty.

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

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Is the condition met?

### String get_description() {#method-get-description}

A short text about what the condition checks.

### String get_expected_argument_type() {#method-get-expected-argument-type}

The kind of thing the condition is checked against (an entity, an encounter ...).

### bool is_valid() {#method-is-valid}

Are the settings of the condition complete?


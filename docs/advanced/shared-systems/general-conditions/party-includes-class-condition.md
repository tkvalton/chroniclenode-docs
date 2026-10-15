<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PartyIncludesClassCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the party includes a specific character class. Simplified to check for a single class ID instead of an array.

## Properties

| | | |
|---|---|---|
| `int` | [required_class_id](#prop-required-class-id) | `0` |
| `int` | [minimum_count](#prop-minimum-count) | `1` |
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

*Class Check*

### int required_class_id = 0 {#prop-required-class-id}

The class ID to look for in the party

### int minimum_count = 1 {#prop-minimum-count}

Minimum number of players with this class required

### bool count_only_alive = true {#prop-count-only-alive}

Whether to count only alive members (true) or all members (false)

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


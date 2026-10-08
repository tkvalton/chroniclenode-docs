<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# OrCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A composite condition that passes if a specified number of its child conditions pass. This allows for flexible "N out of M" condition checking, including traditional OR logic.

## Description

For example, with 3 conditions and min_required = 1, this behaves like a standard OR. With 3 conditions and min_required = 3, this behaves like a standard AND. With 3 conditions and min_required = 2, this passes if at least 2 conditions pass.

## Properties

| | | |
|---|---|---|
| `Array[Condition]` | [conditions](#prop-conditions) | `[]` |
| `int` | [min_required](#prop-min-required) | `1` |

## Methods

| | |
|---|---|
| `void` | [set_system_hub](#method-set-system-hub)( `p_system_hub: GameHost.SystemHub` ) |
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |

## Property descriptions

*Composite Logic*

### Array[Condition] conditions = [] {#prop-conditions}

Array of child conditions to check

### int min_required = 1 {#prop-min-required}

Minimum number of conditions that must be met for this condition to pass

## Method descriptions

### void set_system_hub( p_system_hub: GameHost.SystemHub ) {#method-set-system-hub}

*Overrides this function of [Condition](/advanced/shared-systems/condition-bases/condition).*

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Checks if the required number of child conditions are met

### String get_description() {#method-get-description}

Get a human-readable description of this condition (for editor/debugging) Override in subclasses to provide meaningful descriptions *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_function_description() {#method-get-function-description}

Get function description with placeholders for EventTypeSelectionDialog inline editing Override in subclasses to provide template with {parameter_name} placeholders Falls back to get_description() if not overridden *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### bool is_valid() {#method-is-valid}

Validate that this condition is properly configured Override in subclasses to check required fields *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_expected_argument_type() {#method-get-expected-argument-type}

Get the expected argument type for this condition (for editor hints) Override in subclasses to specify what argument type is expected *(from [Condition](/advanced/shared-systems/condition-bases/condition))*


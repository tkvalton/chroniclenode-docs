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

Gives the condition and its child conditions the hub of the game systems.

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Checks if the required number of child conditions are met

### String get_description() {#method-get-description}

A short text about what the condition checks.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool is_valid() {#method-is-valid}

Are the settings of the condition complete?

### String get_expected_argument_type() {#method-get-expected-argument-type}

The kind of thing the condition is checked against (an entity, an encounter ...).


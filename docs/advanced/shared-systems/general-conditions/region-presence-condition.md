<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RegionPresenceCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if entities are present in a specific region

## Properties

| | | |
|---|---|---|
| `int` | [region_id](#prop-region-id) | `0` |
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [required_faction](#prop-required-faction) | `0` |
| `bool` | [require_presence](#prop-require-presence) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

*Trigger Area Check*

### int region_id = 0 {#prop-region-id}

The region ID to check

### int entity_unique_id = 0 {#prop-entity-unique-id}

The specific entity unique ID to look for (0 = any entity)

### int required_faction = 0 {#prop-required-faction}

Required faction (empty = any faction)

### bool require_presence = true {#prop-require-presence}

Whether entity should be present (true) or absent (false)

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


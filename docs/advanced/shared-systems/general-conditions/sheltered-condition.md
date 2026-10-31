<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ShelteredCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks whether the party's view is inside a shelter (a ShelterVolume): "the party is under a roof" lets a camp be made, "the party is in the open" starts a storm quest. The shelter is the one at the camera, the same one that weakens the weather on the screen. See docs: World &gt; Shelter.

## Properties

| | | |
|---|---|---|
| `bool` | [sheltered](#prop-sheltered) | `true` |
| `float` | [at_least](#prop-at-least) | `0.5` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `_argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

### bool sheltered = true {#prop-sheltered}

Is the condition met inside a shelter (true) or in the open (false)?

### float at_least = 0.5 {#prop-at-least}

How much of the weather the shelter has to keep off to count (0 to 1): a tent of 0.6 does not count at 0.8

## Method descriptions

### bool evaluate( _argument: Variant = null ) {#method-evaluate}

Is the condition met?

### String get_description() {#method-get-description}

A short text about what the condition checks.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### String get_expected_argument_type() {#method-get-expected-argument-type}

The kind of thing the condition is checked against (an entity, an encounter ...).

### bool is_valid() {#method-is-valid}

Are the settings of the condition complete?


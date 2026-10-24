<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerTriggerAreaPresenceCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if players are present in a specific trigger area

## Properties

| | | |
|---|---|---|
| `int` | [trigger_area_id](#prop-trigger-area-id) | `0` |
| `PlayerEventAction.PlayerTarget` | [player_slot](#prop-player-slot) | `PlayerEventAction.PlayerTarget.ALL_PLAYERS` |
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

### int trigger_area_id = 0 {#prop-trigger-area-id}

The trigger area ID to check

### PlayerEventAction.PlayerTarget player_slot = PlayerEventAction.PlayerTarget.ALL_PLAYERS {#prop-player-slot}

Which player slot to check for

### bool require_presence = true {#prop-require-presence}

Whether player should be present (true) or absent (false)

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


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GameTimeCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the current game time meets specified criteria. Works with ChronoManager's 24-hour game time system.

## Properties

| | | |
|---|---|---|
| `TimeComparison` | [comparison_type](#prop-comparison-type) | `TimeComparison.AFTER` |
| `int` | [target_hour](#prop-target-hour) | `12` |
| `int` | [target_minute](#prop-target-minute) | `0` |
| `int` | [end_hour](#prop-end-hour) | `18` |
| `int` | [end_minute](#prop-end-minute) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |

## Enumerations

### enum TimeComparison {#enum-timecomparison}

- **BEFORE** = `0` - Check if current time is before specified time
- **AFTER** = `1` - Check if current time is after specified time
- **BETWEEN** = `2` - Check if current time is between two times
- **EXACT_HOUR** = `3` - Check if current hour matches exactly
- **EXACT_MINUTE** = `4` - Check if current time matches exactly (hour and minute)

## Property descriptions

### TimeComparison comparison_type = TimeComparison.AFTER {#prop-comparison-type}

How to compare the time

### int target_hour = 12 {#prop-target-hour}

Target hour (0-23)

### int target_minute = 0 {#prop-target-minute}

Target minute (0-59)

*Between Time Range (only for BETWEEN comparison)*

### int end_hour = 18 {#prop-end-hour}

End hour for BETWEEN comparison (0-23)

### int end_minute = 0 {#prop-end-minute}

End minute for BETWEEN comparison (0-59)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Get function description with placeholders for EventTypeSelectionDialog inline editing Override in subclasses to provide template with {parameter_name} placeholders Falls back to get_description() if not overridden *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Evaluate this condition with an optional argument Override this in subclasses to implement specific logic @param argument: Optional data needed for evaluation (Entity, Encounter, etc.) @return: true if condition is met, false otherwise *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### String get_description() {#method-get-description}

Get a human-readable description of this condition (for editor/debugging) Override in subclasses to provide meaningful descriptions *(from [Condition](/advanced/shared-systems/condition-bases/condition))*


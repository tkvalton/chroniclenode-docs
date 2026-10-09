<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GameTimeTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific game time is reached

## Properties

| | | |
|---|---|---|
| `float` | [target_time](#prop-target-time) | `12.0` |
| `float` | [time_precision](#prop-time-precision) | `1.0` |
| `TimeEventType` | [trigger_type](#prop-trigger-type) | `TimeEventType.MINUTE_PASSED` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [meets_time_condition](#method-meets-time-condition)( `current_time: float` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Enumerations

### enum TimeEventType {#enum-timeeventtype}

- **MINUTE_PASSED** = `0`
- **HOUR_PASSED** = `1`

## Property descriptions

### float target_time = 12.0 {#prop-target-time}

Time to trigger (in hours, 0.0 to 24.0)

### float time_precision = 1.0 {#prop-time-precision}

Precision for time comparison (in minutes)

### TimeEventType trigger_type = TimeEventType.MINUTE_PASSED {#prop-trigger-type}

Whether to trigger on minute or hour passed

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger

### void cleanup() {#method-cleanup}

Clean up any listeners or connections

### bool meets_time_condition( current_time: float ) {#method-meets-time-condition}

Check if the current time matches the target time

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


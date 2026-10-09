<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GlobalVariableTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Universal trigger for global variable changes Can trigger on any change, reaching a value, leaving a value, or crossing a threshold

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `TriggerMode` | [trigger_mode](#prop-trigger-mode) | `TriggerMode.ANY_CHANGE` |
| `int` | [target_int](#prop-target-int) | `0` |
| `float` | [target_float](#prop-target-float) | `0.0` |
| `bool` | [target_bool](#prop-target-bool) | `false` |
| `String` | [target_string](#prop-target-string) | `""` |
| `float` | [threshold_value](#prop-threshold-value) | `0.0` |
| `bool` | [trigger_on_increase](#prop-trigger-on-increase) | `true  # True = trigger when crossing upward, False = down...` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |

## Enumerations

### enum TriggerMode {#enum-triggermode}

- **ANY_CHANGE** = `0`
- **REACH_VALUE** = `1`
- **LEAVE_VALUE** = `2`

## Property descriptions

### String variable_key = "" {#prop-variable-key}

The variable key/name to watch

### TriggerMode trigger_mode = TriggerMode.ANY_CHANGE {#prop-trigger-mode}

How this trigger should activate

*Target Values*

### int target_int = 0 {#prop-target-int}

Target value for REACH_VALUE, LEAVE_VALUE modes

### float target_float = 0.0 {#prop-target-float}

*No description yet.*

### bool target_bool = false {#prop-target-bool}

*No description yet.*

### String target_string = "" {#prop-target-string}

*No description yet.*

*Threshold (for CROSS_THRESHOLD)*

### float threshold_value = 0.0 {#prop-threshold-value}

*No description yet.*

### bool trigger_on_increase = true  # True = trigger when crossing upward, False = downwar {#prop-trigger-on-increase}

*No description yet.*

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger

### void cleanup() {#method-cleanup}

Clean up any listeners or connections

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active


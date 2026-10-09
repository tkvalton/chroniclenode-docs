<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalVariableReachTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a local variable reaches or leaves a specific value

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `Variant` | [target_value](#prop-target-value) | `null` |
| `bool` | [trigger_on_reach](#prop-trigger-on-reach) | `true` |

## Variables

| | | |
|---|---|---|
| `Event` | [parent_event](#var-parent-event) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |

## Property descriptions

### String variable_key = "" {#prop-variable-key}

The variable key/name to watch

### Variant target_value = null {#prop-target-value}

The specific value to watch for

### bool trigger_on_reach = true {#prop-trigger-on-reach}

Whether to trigger when reaching the value (true) or when leaving it (false)

## Variable descriptions

### Event parent_event = null {#var-parent-event}

Reference to the parent event

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


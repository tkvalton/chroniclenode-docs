<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GameStartTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when the game starts

## Properties

| | | |
|---|---|---|
| `float` | [delay_after_start](#prop-delay-after-start) | `0.0` |

## Variables

| | | |
|---|---|---|
| `Timer` | [timer](#var-timer) |  |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [is_triggered](#method-is-triggered)( `_event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### float delay_after_start = 0.0 {#prop-delay-after-start}

How many seconds after the game starts the trigger fires.

## Variable descriptions

### Timer timer {#var-timer}

The timer of the delay.

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Starts listening: connects the signals the trigger waits for.

### void cleanup() {#method-cleanup}

Stops listening: disconnects the signals of the trigger.

### bool is_triggered( _event_data: Dictionary ) {#method-is-triggered}

Does this event data satisfy the trigger? Called when the signal the trigger listens to fires.

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


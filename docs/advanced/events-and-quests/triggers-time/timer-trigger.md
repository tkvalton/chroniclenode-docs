<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TimerTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers after a specific time has elapsed

## Properties

| | | |
|---|---|---|
| `float` | [timer_duration](#prop-timer-duration) | `5.0` |
| `bool` | [repeating](#prop-repeating) | `false` |

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
| `void` | [start_timer](#method-start-timer)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### float timer_duration = 5.0 {#prop-timer-duration}

*No description yet.*

### bool repeating = false {#prop-repeating}

*No description yet.*

## Variable descriptions

### Timer timer {#var-timer}

*No description yet.*

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Setup the timer when the trigger is activated

### void start_timer() {#method-start-timer}

Start or restart the timer

### void cleanup() {#method-cleanup}

Clean up the timer

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger caused an event

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


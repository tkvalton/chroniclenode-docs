<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AwaitAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A simple action that introduces a delay in the action execution sequence. Useful for timing events, creating pauses in cutscenes, or delaying effects.

## Properties

| | | |
|---|---|---|
| `float` | [duration](#prop-duration) | `1.0` |

## Variables

| | | |
|---|---|---|
| `Timer` | [await_timer](#var-await-timer) | `null` |
| `float` | [actual_duration](#var-actual-duration) | `0.0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [cleanup](#method-cleanup)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### float duration = 1.0 {#prop-duration}

Duration to wait in seconds

## Variable descriptions

### Timer await_timer = null {#var-await-timer}

Timer from ChronoManager

### float actual_duration = 0.0 {#var-actual-duration}

Actual duration being used (after randomization)

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### void cleanup() {#method-cleanup}

Override cleanup to handle timer

### Dictionary save() {#method-save}

Override save to store timer state

### void load_data( data: Dictionary ) {#method-load-data}

Override load_data to restore timer state


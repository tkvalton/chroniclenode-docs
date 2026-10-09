<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetTimeOfDayAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to set the game time of day using ChronoManager with formatted string

## Properties

| | | |
|---|---|---|
| `String` | [time_string](#prop-time-string) | `"12:00"` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### String time_string = "12:00" {#prop-time-string}

Formatted time string (HH:MM)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


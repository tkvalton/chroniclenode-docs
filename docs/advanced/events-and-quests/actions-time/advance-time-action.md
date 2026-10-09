<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AdvanceTimeAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to advance the game time by a specified number of minutes using ChronoManager

## Properties

| | | |
|---|---|---|
| `int` | [minutes_to_advance](#prop-minutes-to-advance) | `60` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int minutes_to_advance = 60 {#prop-minutes-to-advance}

Minutes to advance the game time by

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


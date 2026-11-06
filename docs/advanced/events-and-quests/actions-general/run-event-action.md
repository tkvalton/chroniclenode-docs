<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RunEventAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Runs another event (an event of the database, a "global" one). The main link between a local event and the story: the trap goes off (local) and the ambush event starts (global) and the quest moves on. It uses the conditions of that event unless told not to. It goes on at once, or waits until the event it started is over.

## Properties

| | | |
|---|---|---|
| `int` | [event_id](#prop-event-id) | `0` |
| `bool` | [check_conditions](#prop-check-conditions) | `true` |
| `bool` | [wait_until_done](#prop-wait-until-done) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### int event_id = 0 {#prop-event-id}

The event to run (Database &gt; Events)

### bool check_conditions = true {#prop-check-conditions}

Run the event only if its own conditions hold (off: it runs whatever they say)

### bool wait_until_done = false {#prop-wait-until-done}

Wait until the event is over before the next action starts (off: go on at once)

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### void cleanup() {#method-cleanup}

Clean up resources *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


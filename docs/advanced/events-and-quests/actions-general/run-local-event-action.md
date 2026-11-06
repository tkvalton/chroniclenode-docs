<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RunLocalEventAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Works on a local event of the world the party is in: runs it, switches it on or off, or puts it back as it was. A global event can use it to start the small rules of a place ("reset the puzzle room"), and a local event can chain to another ("the lever sets off the alarm rule"). See docs: Events &gt; Local events.

## Properties

| | | |
|---|---|---|
| `int` | [local_event_id](#prop-local-event-id) | `0` |
| `Operation` | [operation](#prop-operation) | `Operation.RUN` |
| `bool` | [check_conditions](#prop-check-conditions) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Enumerations

### enum Operation {#enum-operation}

What the action does to the local event

- **RUN** = `0`
- **ENABLE** = `1`
- **DISABLE** = `2`
- **RESET** = `3`

## Property descriptions

### int local_event_id = 0 {#prop-local-event-id}

The number of the local event (the Local Events tab shows it)

### Operation operation = Operation.RUN {#prop-operation}

Run it, switch it on, switch it off, or put it back as it was at the start

### bool check_conditions = true {#prop-check-conditions}

For Run: run it only if its own conditions hold

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActivateQuestLineAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Starts a quest line (its first step). Fails when the line is unknown, already running, or finished

## Properties

| | | |
|---|---|---|
| `int` | [quest_line_id](#prop-quest-line-id) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### int quest_line_id = 0 {#prop-quest-line-id}

The quest line to start

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


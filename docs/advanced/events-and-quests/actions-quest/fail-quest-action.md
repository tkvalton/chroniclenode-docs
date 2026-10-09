<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FailQuestAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Fails a running quest (the deadline passed, the one to protect died). Fails itself when the quest is not running

## Properties

| | | |
|---|---|---|
| `int` | [quest_id](#prop-quest-id) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### int quest_id = 0 {#prop-quest-id}

The quest to fail

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


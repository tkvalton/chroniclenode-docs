<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CompleteQuestAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Completes a running quest at once, whatever its objectives (and gives its rewards). Fails when the quest is not running or its rewards do not fit the bags

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

The quest to complete

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbandonQuestAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Takes a quest off the player as if they had given it up (the quest goes back to the start and can be taken again; it is not a failure). Fails when the quest is not running or cannot be given up. A quest that says it cannot be given up is also refused here: only the quest's own setting decides

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

The quest

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


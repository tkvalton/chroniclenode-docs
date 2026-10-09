<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FailQuestObjectiveAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Fails one objective of a running quest. A required objective that fails fails the quest, an optional one does not. Fails itself when the quest is not running or has no such open objective

## Properties

| | | |
|---|---|---|
| `int` | [quest_id](#prop-quest-id) | `0` |
| `int` | [objective_number](#prop-objective-number) | `1` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### int quest_id = 0 {#prop-quest-id}

The quest

### int objective_number = 1 {#prop-objective-number}

The number of the objective in the quest (1 is the first)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


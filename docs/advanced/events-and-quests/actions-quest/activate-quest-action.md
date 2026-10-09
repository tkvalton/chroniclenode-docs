<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActivateQuestAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Starts a quest (as when an NPC offers it and the player accepts). Fails when the quest cannot start: unknown, already running, done and not repeatable, on a cooldown, or the player does not meet its requirements

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

The quest to start

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


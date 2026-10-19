<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActivateQuestAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Starts a quest. **The event decides**: the quest starts even when the player does not meet its requirements, it is on a cooldown, was done and is not repeatable, or failed for good (it starts again from the beginning); the limit of quests does not stop it either. If a quest should not start under some conditions, put those conditions on the event. A quest that is already running is left as it is. Fails (with a warning) only when the quest does not exist or, in a quest line, is not in the current step

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

The sentence the editor shows for the action, with &#123;placeholders&#125; for its values.


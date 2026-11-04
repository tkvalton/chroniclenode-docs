<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayStingerAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Plays a stinger of a Dynamic Music over the music: a short sound that marks a moment (the boss appears, a quest is done). The music is lowered while it plays, as the stinger says. See docs: Audio &gt; Dynamic Music.

## Properties

| | | |
|---|---|---|
| `String` | [stinger_name](#prop-stinger-name) | `""` |
| `int` | [dynamic_id](#prop-dynamic-id) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### String stinger_name = "" {#prop-stinger-name}

The name of the stinger (a stinger of the Dynamic Music)

### int dynamic_id = 0 {#prop-dynamic-id}

The Dynamic Music (Audio &gt; Dynamic Music). 0 = the one that plays now

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetMusicStateAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Changes the state of a Dynamic Music: the scene gets tense, the boss is enraged, the quest is done. The music that plays changes by its transition rule for the change (when, where the new part starts, the fade). Choose a Dynamic Music to start it in that state when another music plays. See docs: Audio &gt; Dynamic Music.

## Properties

| | | |
|---|---|---|
| `String` | [state_name](#prop-state-name) | `""` |
| `int` | [dynamic_id](#prop-dynamic-id) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### String state_name = "" {#prop-state-name}

The name of the state to go to (a state of the Dynamic Music)

### int dynamic_id = 0 {#prop-dynamic-id}

The Dynamic Music (Audio &gt; Dynamic Music). 0 = the one that plays now. A music that is not the one that plays is started in the state, as the music of the event

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayVoiceLineAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Speaks a voice line: a character of the voice lines and a file (empty = a random line of the character). With a speaker the line is heard from that entity; without one it is heard from nowhere (a narrator, a voice over). It plays on the Voice bus, in the voice language of the player (the file of the same name in the language folder), and shows its subtitle while the player has subtitles on. Use it to speak a line with an event (open a popup with a voice, a cutscene).

## Properties

| | | |
|---|---|---|
| `SFXSelection` | [voice_line](#prop-voice-line) |  |
| `int` | [speaker_entity_unique_id](#prop-speaker-entity-unique-id) | `0` |
| `bool` | [wait_until_finished](#prop-wait-until-finished) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### SFXSelection voice_line {#prop-voice-line}

The voice line to speak (a VoicelineSFXSelection: the character and the file)

### int speaker_entity_unique_id = 0 {#prop-speaker-entity-unique-id}

The unique id of the entity that speaks (0 = the line is heard from nowhere)

### bool wait_until_finished = false {#prop-wait-until-finished}

The action completes when the line is over (the next action of the event waits for it)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


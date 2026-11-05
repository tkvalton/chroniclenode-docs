<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayVoiceLineAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Speaks a voice line: a character of the voice lines and a file (empty = a random line of the character). It plays on the Voice bus, in the voice language of the player (the file of the same name in the language folder), and shows its subtitle while the player has subtitles on. Where it is heard from: the NARRATOR (a voice over, heard from nowhere, 2D: a cutscene, a popup), an ENTITY (the line comes from that entity and follows it), or a POSITION (a point of the world, 3D). Use it to speak a line with an event.

## Properties

| | | |
|---|---|---|
| `SFXSelection` | [voice_line](#prop-voice-line) |  |
| `Place` | [place](#prop-place) | `Place.NARRATOR` |
| `int` | [speaker_entity_unique_id](#prop-speaker-entity-unique-id) | `0` |
| `Vector3` | [position](#prop-position) | `Vector3.ZERO` |
| `bool` | [wait_until_finished](#prop-wait-until-finished) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum Place {#enum-place}

Where the line is heard from

- **NARRATOR** = `0`
- **ENTITY** = `1`
- **POSITION** = `2`

## Property descriptions

### SFXSelection voice_line {#prop-voice-line}

The voice line to speak (a VoicelineSFXSelection: the character and the file)

### Place place = Place.NARRATOR {#prop-place}

Where it is heard from: the Narrator (from nowhere, 2D), an Entity (by its unique id) or a Position of the world (3D)

### int speaker_entity_unique_id = 0 {#prop-speaker-entity-unique-id}

The unique id of the entity that speaks (Entity). If the entity is not in the world the line is heard as the Narrator

### Vector3 position = Vector3.ZERO {#prop-position}

The point of the world the line is heard from (Position)

### bool wait_until_finished = false {#prop-wait-until-finished}

The action completes when the line is over (the next action of the event waits for it)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


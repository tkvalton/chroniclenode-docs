<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpeechLine

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A **line**: something an entity says, or something that is described. Say and emote are one thing with a kind: a line has a text, an optional animation and sound, and an audience (who receives it). NPC behavior tasks, combat actions, event actions and interactions each hold one and hand it to SpeechDelivery. See docs: Chat &gt; Lines.

## Properties

| | | |
|---|---|---|
| `Kind` | [kind](#prop-kind) | `Kind.SAY` |
| `String` | [text](#prop-text) | `"":` |
| `int` | [emote_id](#prop-emote-id) | `0` |
| `AnimationSelectionSocial` | [animation](#prop-animation) |  |
| `SFXSelection` | [sound](#prop-sound) |  |
| `int` | [language_id](#prop-language-id) | `0` |
| `Audience` | [audience](#prop-audience) | `Audience.NEAR` |
| `float` | [range_override](#prop-range-override) | `0.0` |
| `int` | [trigger_area_id](#prop-trigger-area-id) | `0` |
| `float` | [bubble_seconds](#prop-bubble-seconds) | `5.0` |

## Methods

| | |
|---|---|
| `String` | [get_channel_id](#method-get-channel-id)() |

## Enumerations

### enum Kind {#enum-kind}

The kind of line: it decides the channel the line is written in

- **SAY** = `0` - Something said (the Say channel: "Guard says: Halt!")
- **YELL** = `1` - Something shouted (the Yell channel, heard farther)
- **EMOTE** = `2` - Something described (the Emote channel: "The guard yawns.")

### enum Audience {#enum-audience}

Who receives the line

- **NEAR** = `0` - The players within the range of the channel of the line, from the one who says it (or from the point)
- **EVERYONE** = `1` - Every player
- **TRIGGER_AREA** = `2` - The players who are in a trigger area
- **TRIGGERER** = `3` - The player who used the switch or talked to the NPC

## Property descriptions

### Kind kind = Kind.SAY {#prop-kind}

Say, yell or emote

### String text = "": {#prop-text}

The text of the line. Words in angle brackets are filled in: &lt;user&gt; (who says it), &lt;target name&gt;, &lt;player name&gt;. Empty with an emote picked: the text of the emote

### int emote_id = 0 {#prop-emote-id}

An emote of the library (the id of an Emote): the line takes its texts, animation and sound from it, unless this line has its own. 0 = a line of its own

### AnimationSelectionSocial animation {#prop-animation}

The animation the speaker plays (optional; an emote has its own)

### SFXSelection sound {#prop-sound}

The sound: a voice line (played on the Voice channel, with its subtitle) or a sound effect (optional; an emote has its own)

### int language_id = 0 {#prop-language-id}

The language the line is in (the id of a proficiency that is a language). 0 = the language the speaker speaks. A listener who does not understand it fully reads it garbled. Emotes have no language

### Audience audience = Audience.NEAR {#prop-audience}

Who receives the line

### float range_override = 0.0 {#prop-range-override}

For *Near*: how far the line is heard, in metres. 0 = the range of the channel (or of the emote)

### int trigger_area_id = 0 {#prop-trigger-area-id}

For *Trigger area*: the trigger area the players have to be in

### float bubble_seconds = 5.0 {#prop-bubble-seconds}

How long the speech bubble over the head of the speaker stays, in seconds. 0 = no bubble

## Method descriptions

### String get_channel_id() {#method-get-channel-id}

The id of the channel the line is written in


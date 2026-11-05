<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpeechAudio

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The one way to speak a sound: a voice line of a conversation, a Speak interaction, a quest, a Say line, the Play Voice Line event action. A voice line (VoicelineSFXSelection) plays on the Voice bus with its subtitle; any other kind of sound plays as a sound effect. Where it comes from:

## Description

- a speaker (an Entity or an InteractableObject): from the speaker, the voice line follows it and a new line of the same speaker replaces the one that plays,
- a position: from that point of the world (3D),
- nobody (a narrator, a voice over): from nowhere (2D), one line at a time.

## Methods

| | |
|---|---|
| `bool` | [play](#method-play)( `hub: GameHost.SystemHub, selection: SFXSelection, speaker: Variant = null, position: Variant = null` ) *static* |
| `void` | [stop](#method-stop)( `hub: GameHost.SystemHub, speaker: Variant = null` ) *static* |
| `float` | [length_of](#method-length-of)( `selection: SFXSelection` ) *static* |
| `String` | [name_of](#method-name-of)( `speaker: Variant` ) *static* |

## Method descriptions

### bool play( hub: GameHost.SystemHub, selection: SFXSelection, speaker: Variant = null, position: Variant = null ) {#method-play}

Plays the sound. `speaker` is an Entity, an InteractableObject or null; `position` is a Vector3 or null (used when there is no speaker). Returns true when something played

### void stop( hub: GameHost.SystemHub, speaker: Variant = null ) {#method-stop}

Stops the voice line that a speaker speaks (a sound effect plays out). With no speaker: the line of the narrator

### float length_of( selection: SFXSelection ) {#method-length-of}

How long the sound is, in seconds (0 when it has no file)

### String name_of( speaker: Variant ) {#method-name-of}

The name shown over the subtitle: the display name of the speaker ("" = the name of the voice line character)


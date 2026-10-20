<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpeechDelivery

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Delivers a line (SpeechLine) or an emote of the library (EmoteDefinition): the speaker plays the animation and the sound, and the players who are in the audience read the line in the chat. NPC behavior tasks, combat actions, event actions, interactions and the commands a player types all use it. The line is written in the language of the player at that moment.

## Methods

| | |
|---|---|
| `ChatMessage` | [deliver](#method-deliver)( `hub: GameHost.SystemHub, line: SpeechLine, speaker: Variant = null, target: Variant = null, triggerer: Variant = null, origin: Vector3 = Vector3.ZERO` ) *static* |
| `ChatMessage` | [deliver_emote](#method-deliver-emote)( `hub: GameHost.SystemHub, emote: EmoteDefinition, speaker: Variant, target: Variant = null` ) *static* |
| `float` | [range_of](#method-range-of)( `line: SpeechLine, emote: EmoteDefinition, channel: ChatChannel` ) *static* |

## Method descriptions

### ChatMessage deliver( hub: GameHost.SystemHub, line: SpeechLine, speaker: Variant = null, target: Variant = null, triggerer: Variant = null, origin: Vector3 = Vector3.ZERO ) {#method-deliver}

Delivers a line. `speaker` is an Entity, an object or null (a line with no speaker: "The ground rumbles."); `target` is whom an emote is done to; `triggerer` is the player who started it (for the audience *the player who triggered it*); `origin` is where the line starts when there is no speaker. Returns the message written in the chat (null when nobody of the party heard it)

### ChatMessage deliver_emote( hub: GameHost.SystemHub, emote: EmoteDefinition, speaker: Variant, target: Variant = null ) {#method-deliver-emote}

Delivers an emote of the library (what a typed /wave does): a line of the Emote channel from the emote

### float range_of( line: SpeechLine, emote: EmoteDefinition, channel: ChatChannel ) {#method-range-of}

How far the line is heard: the line's own range, else the emote's, else the one of the channel (0 = no limit)


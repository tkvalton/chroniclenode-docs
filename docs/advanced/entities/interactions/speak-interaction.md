<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpeakInteraction

**Inherits:** [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Simple interaction that displays text and optionally plays a voice line

## Properties

| | | |
|---|---|---|
| `String` | [text](#prop-text) | `"":` |
| `Font` | [font](#prop-font) |  |
| `float` | [text_size](#prop-text-size) | `40.0` |
| `float` | [text_outline_size](#prop-text-outline-size) | `14.0` |
| `Color` | [text_color](#prop-text-color) | `Color(1.0, 1.0, 1.0, 1.0)` |
| `float` | [text_visual_duration](#prop-text-visual-duration) | `5.0` |
| `SFXSelection` | [voice_line_sfx](#prop-voice-line-sfx) |  |
| `AnimationSelectionSocial` | [animation](#prop-animation) |  |
| `SpeechLine.Kind` | [kind](#prop-kind) | `SpeechLine.Kind.SAY` |
| `int` | [emote_id](#prop-emote-id) | `0` |
| `SpeechLine.Audience` | [audience](#prop-audience) | `SpeechLine.Audience.TRIGGERER` |
| `float` | [range_override](#prop-range-override) | `0.0` |
| `int` | [region_id](#prop-region-id) | `0` |

## Variables

| | | |
|---|---|---|
| `Label3D` | [display_text](#var-display-text) |  |
| `Timer` | [duration_timer](#var-duration-timer) |  |

## Methods

| | |
|---|---|
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |

## Property descriptions

### String text = "": {#prop-text}

Text to display on Label3D, it text is empty no label will be used

### Font font {#prop-font}

Text settings

### float text_size = 40.0 {#prop-text-size}

The size of the text above the NPC.

### float text_outline_size = 14.0 {#prop-text-outline-size}

The size of the outline of the text.

### Color text_color = Color(1.0, 1.0, 1.0, 1.0) {#prop-text-color}

The color of the text.

### float text_visual_duration = 5.0 {#prop-text-visual-duration}

Lifetime duration of floating text (If audio is longer it will override)

### SFXSelection voice_line_sfx {#prop-voice-line-sfx}

SFX selection for interaction audio

### AnimationSelectionSocial animation {#prop-animation}

Animation to play on interact

*Chat*

### SpeechLine.Kind kind = SpeechLine.Kind.SAY {#prop-kind}

Say, yell or emote: the channel the text is also written in (the chat box keeps it)

### int emote_id = 0 {#prop-emote-id}

An emote of the library (the id of an Emote) instead of a text of its own. 0 = the text above

### SpeechLine.Audience audience = SpeechLine.Audience.TRIGGERER {#prop-audience}

Who reads the line in the chat: by default the player who talked to it

### float range_override = 0.0 {#prop-range-override}

For *Near*: how far it is heard, in metres. 0 = the range of the channel

### int region_id = 0 {#prop-region-id}

For *Region*: the region the players have to be in

## Variable descriptions

### Label3D display_text {#var-display-text}

Label3D for text to display in game

### Timer duration_timer {#var-duration-timer}

Timer for the interactions duration

## Method descriptions

### bool can_interact( player: Player ) {#method-can-interact}

Override to check if speak interaction is available

### void start_interaction( player: Player ) {#method-start-interaction}

Start the speak interaction

### void end_interaction() {#method-end-interaction}

End the speak interaction


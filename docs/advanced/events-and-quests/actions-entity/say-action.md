<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SayAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Says a line or describes something: an NPC speaks, an emote of the library is done, or "The ground rumbles." is written with no speaker. The players in the audience of the line read it in the chat (and the speaker plays the animation and the sound). See docs: Chat &gt; Lines.

## Properties

| | | |
|---|---|---|
| `int` | [speaker_unique_id](#prop-speaker-unique-id) | `0` |
| `int` | [target_unique_id](#prop-target-unique-id) | `0` |
| `Vector3` | [origin](#prop-origin) | `Vector3.ZERO` |
| `SpeechLine` | [line](#prop-line) |  |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### int speaker_unique_id = 0 {#prop-speaker-unique-id}

The unique id of the NPC who says it. 0 = nobody (a line that describes something)

### int target_unique_id = 0 {#prop-target-unique-id}

For an emote with a target: the unique id of whom it is done to. 0 = no target (the player when the emote needs one and the line has none: no)

### Vector3 origin = Vector3.ZERO {#prop-origin}

Where a line with no speaker starts from (for the range of the audience)

### SpeechLine line {#prop-line}

The line: the kind, the text (or an emote of the library), the animation, the sound and the audience

## Method descriptions

### String get_display_name() {#method-get-display-name}

The name of the action in the editor

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the action, with &#123;placeholders&#125; for its values.


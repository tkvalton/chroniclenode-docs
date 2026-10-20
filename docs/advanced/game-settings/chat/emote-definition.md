<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EmoteDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

An **emote**: a command the player types (/wave) and a library that the lines of NPCs, events and objects can pick from. It has an animation, a sound and one text for each way the line is read. The texts use the tokens &lt;user&gt; (who does it) and &lt;target name&gt; (the other): "&lt;user&gt; waves to &lt;target name&gt;." See docs: Chat.

## Properties

| | | |
|---|---|---|
| `String` | [command](#prop-command) | `""` |
| `PackedStringArray` | [aliases](#prop-aliases) | `PackedStringArray()` |
| `AnimationSelectionSocial` | [animation](#prop-animation) |  |
| `SFXSelection` | [sound](#prop-sound) |  |
| `TargetMode` | [target_mode](#prop-target-mode) | `TargetMode.NONE` |
| `float` | [target_range](#prop-target-range) | `10.0` |
| `float` | [audience_range](#prop-audience-range) | `0.0` |
| `String` | [text_others](#prop-text-others) | `"":` |
| `String` | [text_self](#prop-text-self) | `"":` |
| `String` | [text_others_target](#prop-text-others-target) | `"":` |
| `String` | [text_self_target](#prop-text-self-target) | `"":` |
| `String` | [text_target](#prop-text-target) | `"":` |

## Methods

| | |
|---|---|
| `PackedStringArray` | [get_commands](#method-get-commands)() |
| `bool` | [matches](#method-matches)( `word: String` ) |
| `String` | [pick_text](#method-pick-text)( `is_actor: bool, is_target: bool, has_target: bool` ) |

## Enumerations

### enum TargetMode {#enum-targetmode}

Whether the emote uses a target

- **NONE** = `0` - The emote never uses a target
- **OPTIONAL** = `1` - The target texts are used when there is a target, else the others
- **REQUIRED** = `2` - With no target the player gets "You need a target"

## Property descriptions

### String command = "" {#prop-command}

The word the player types after the slash: "wave" for /wave

### PackedStringArray aliases = PackedStringArray() {#prop-aliases}

Other words for the same emote (a translated game adds its own: "saluer")

### AnimationSelectionSocial animation {#prop-animation}

The animation the character plays (optional)

### SFXSelection sound {#prop-sound}

The sound (optional): played at the one who does the emote

### TargetMode target_mode = TargetMode.NONE {#prop-target-mode}

Whether the emote uses a target

### float target_range = 10.0 {#prop-target-range}

How far the target can be, in metres

### float audience_range = 0.0 {#prop-audience-range}

How far the line is heard, in metres. 0 = the range of the Emote channel

### String text_others = "": {#prop-text-others}

What everyone else reads when there is no target: "&lt;user&gt; waves."

### String text_self = "": {#prop-text-self}

What the one who does it reads when there is no target: "You wave."

### String text_others_target = "": {#prop-text-others-target}

What everyone else reads when there is a target: "&lt;user&gt; waves to &lt;target name&gt;."

### String text_self_target = "": {#prop-text-self-target}

What the one who does it reads when there is a target: "You wave to &lt;target name&gt;."

### String text_target = "": {#prop-text-target}

What the target reads: "&lt;user&gt; waves to you." Empty = the text of everyone else

## Method descriptions

### PackedStringArray get_commands() {#method-get-commands}

The words that run the emote: the command and the aliases, lower case

### bool matches( word: String ) {#method-matches}

Is this word one of the emote's?

### String pick_text( is_actor: bool, is_target: bool, has_target: bool ) {#method-pick-text}

The text for one reader. `is_actor`: the one who does it. `is_target`: the one it is done to. `has_target`: the emote has a target. The first-person text falls back to the third-person one


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MusicTransition

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

How the music changes from one state to another: when the old part leaves, where the new part starts, how they fade, and an optional bridge part between them. A rule names the states it is for (empty = any); the most specific rule wins, and the **default transition** of the music is used when none fits. See docs: Audio &gt; Dynamic Music.

## Properties

| | | |
|---|---|---|
| `String` | [from_state](#prop-from-state) | `""` |
| `String` | [to_state](#prop-to-state) | `""` |
| `When` | [when](#prop-when) | `When.NEXT_BAR` |
| `Resume` | [resume](#prop-resume) | `Resume.FROM_START` |
| `Fade` | [fade](#prop-fade) | `Fade.CROSS` |
| `float` | [fade_beats](#prop-fade-beats) | `2.0` |
| `String` | [bridge_part](#prop-bridge-part) | `""` |

## Methods

| | |
|---|---|
| `int` | [fit](#method-fit)( `from: String, to: String` ) |
| `String` | [describe](#method-describe)() |
| `int` | [godot_from_time](#method-godot-from-time)() |
| `int` | [godot_to_time](#method-godot-to-time)() |
| `int` | [godot_fade_mode](#method-godot-fade-mode)() |

## Enumerations

### enum When {#enum-when}

When the old part leaves

- **IMMEDIATE** = `0` - At once
- **NEXT_BEAT** = `1` - At the next beat of the old part
- **NEXT_BAR** = `2` - At the next bar line of the old part
- **END_OF_PART** = `3` - When the old part has played to its end

### enum Resume {#enum-resume}

Where the new part starts

- **FROM_START** = `0` - From its beginning (always right for parts of different tempo)
- **SAME_POSITION** = `1` - At the position the old part had (for parts of the same length and tempo)

### enum Fade {#enum-fade}

How the two fade

- **NONE** = `0` - No fade: a cut
- **CROSS** = `1` - The old fades out while the new fades in
- **FADE_OUT** = `2` - The old fades out, then the new starts
- **FADE_IN** = `3` - The old goes on while the new fades in

## Property descriptions

### String from_state = "" {#prop-from-state}

The state this rule is for when the music leaves it (empty = any state)

### String to_state = "" {#prop-to-state}

The state this rule is for when the music goes to it (empty = any state)

### When when = When.NEXT_BAR {#prop-when}

When the old part leaves

### Resume resume = Resume.FROM_START {#prop-resume}

Where the new part starts

### Fade fade = Fade.CROSS {#prop-fade}

How the two parts fade

### float fade_beats = 2.0 {#prop-fade-beats}

The length of the fade, in beats of the old part

### String bridge_part = "" {#prop-bridge-part}

A part that plays between the two (a drum fill, a riser). Empty = none

## Method descriptions

### int fit( from: String, to: String ) {#method-fit}

How well this rule fits a change of state: -1 when it is for other states, else higher is more specific

### String describe() {#method-describe}

The title of the rule in the editor

### int godot_from_time() {#method-godot-from-time}

The value of AudioStreamInteractive.TransitionFromTime for this rule

### int godot_to_time() {#method-godot-to-time}

The value of AudioStreamInteractive.TransitionToTime

### int godot_fade_mode() {#method-godot-fade-mode}

The value of AudioStreamInteractive.FadeMode


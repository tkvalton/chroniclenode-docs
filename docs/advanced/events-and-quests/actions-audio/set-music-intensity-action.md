<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetMusicIntensityAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Sets the intensity (0 to 1) of the Dynamic Music that plays: the layers whose "from intensity" is at most this fade in, the others fade out (drums that come in as a fight gets worse). See docs: Audio &gt; Dynamic Music.

## Properties

| | | |
|---|---|---|
| `float` | [intensity](#prop-intensity) | `0.5` |
| `bool` | [instant](#prop-instant) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### float intensity = 0.5 {#prop-intensity}

The intensity, 0 (quiet) to 1 (full)

### bool instant = false {#prop-instant}

The layers jump to it at once instead of fading over the music's fade seconds

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


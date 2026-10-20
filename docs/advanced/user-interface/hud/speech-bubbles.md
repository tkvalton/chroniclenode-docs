<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpeechBubbles

**Inherits:** [ChatViewer](/advanced/user-interface/hud/chat-viewer) < [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Shows what is said and described over the head of the one who says it: a text in the world that stays for a few seconds. It is a viewer of the Say, Yell and Emote channels; a line that has a speaker and a bubble time (SpeechLine.bubble_seconds) gets a bubble. Put it anywhere in the HUD (it has nothing to draw itself). Style it with the exports.

## Properties

| | | |
|---|---|---|
| `float` | [height](#prop-height) | `2.8` |
| `int` | [text_size](#prop-text-size) | `36` |
| `int` | [outline_size](#prop-outline-size) | `12` |

## Methods

| | |
|---|---|
| `Label3D` | [show_bubble](#method-show-bubble)( `speaker: Node3D, text: String, color: Color, seconds: float` ) |

## Property descriptions

### float height = 2.8 {#prop-height}

Height of the bubble over the origin of the speaker, in metres

### int text_size = 36 {#prop-text-size}

The size of the text

### int outline_size = 12 {#prop-outline-size}

The size of the outline of the text

## Method descriptions

### Label3D show_bubble( speaker: Node3D, text: String, color: Color, seconds: float ) {#method-show-bubble}

Puts a bubble over a node for some seconds


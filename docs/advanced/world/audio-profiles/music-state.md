<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MusicState

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A state of a Dynamic Music: a name the game can ask for ("Explore", "Combat", "Boss enraged") and the part that plays in it. Several states can play the same part (with a different intensity). The game changes the state from an encounter, a boss phase, an event or the combat state of the party. See docs: Audio &gt; Dynamic Music.

## Properties

| | | |
|---|---|---|
| `String` | [name](#prop-name) | `""` |
| `String` | [part](#prop-part) | `""` |
| `float` | [intensity](#prop-intensity) | `-1.0` |

## Methods

| | |
|---|---|
| `String` | [describe](#method-describe)() |

## Property descriptions

### String name = "" {#prop-name}

The name of the state. A state called Combat is chosen by itself while the party fights

### String part = "" {#prop-part}

The part that plays in this state (a part of the music, by name)

### float intensity = -1.0 {#prop-intensity}

The intensity (0 to 1) the music goes to when this state starts, which fades the layers in and out. -1 = leave it as it is

## Method descriptions

### String describe() {#method-describe}

The title of the state in the editor


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MusicStinger

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A stinger of a Dynamic Music: a short sound that plays over the music to mark a moment (the boss appears, a quest is done), and can lower the music while it plays. An event or a combat action plays it by name. See docs: Audio &gt; Dynamic Music.

## Properties

| | | |
|---|---|---|
| `String` | [name](#prop-name) | `""` |
| `String` | [path](#prop-path) | `""` |
| `float` | [volume_db](#prop-volume-db) | `0.0` |
| `float` | [duck_db](#prop-duck-db) | `6.0` |

## Methods

| | |
|---|---|
| `String` | [describe](#method-describe)() |
| `PackedStringArray` | [validate](#method-validate)() |

## Property descriptions

### String name = "" {#prop-name}

The name of the stinger ("Boss appears"); the actions refer to it

### String path = "" {#prop-path}

The sound (an audio file of the library)

### float volume_db = 0.0 {#prop-volume-db}

How loud it is (dB)

### float duck_db = 6.0 {#prop-duck-db}

How much the music is lowered while the stinger plays (dB; 0 = not lowered)

## Method descriptions

### String describe() {#method-describe}

The title of the stinger in the editor

### PackedStringArray validate() {#method-validate}

The warnings of this stinger


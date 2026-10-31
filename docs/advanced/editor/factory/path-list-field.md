<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PathListField

**Inherits:** [ConfigField](/advanced/editor/factory/config-field) < [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

A list of file paths (an Array[String] property): the tracks of a zone or a weather. The paths are typed in one line, separated by semicolons, or added one by one with the plus button; the cross empties the list. Set the **Filters** in the inspector (`*.ogg, *.wav, *.mp3 ; Audio`).

## Properties

| | | |
|---|---|---|
| `PackedStringArray` | [filters](#prop-filters) | `PackedStringArray(["*.ogg, *.wav, *.mp3 ; Audio"])` |

## Methods

| | |
|---|---|
| `Array[String]` | [get_paths](#method-get-paths)() |

## Constants

- `String` **SEPARATOR** = `";"`

## Property descriptions

### PackedStringArray filters = PackedStringArray(["*.ogg, *.wav, *.mp3 ; Audio"]) {#prop-filters}

The file types the browse window offers, as the file dialog takes them

## Method descriptions

### Array[String] get_paths() {#method-get-paths}

The paths in the line, without the empty ones


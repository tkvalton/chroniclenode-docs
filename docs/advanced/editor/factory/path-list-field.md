<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PathListField

**Inherits:** [ConfigField](/advanced/editor/factory/config-field) < [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

A list of tracks (an Array[String] property): the music or the ambient sound of a zone or a weather. The plus button opens the track dialog of the audio library (the same as the albums and the events use) and adds the tracks chosen; the paths can also be typed in the line, separated by semicolons (a file outside the library); the cross empties the list. Set **Track kind** in the inspector.

## Properties

| | | |
|---|---|---|
| `TrackSelectionDialog.Kind` | [track_kind](#prop-track-kind) | `TrackSelectionDialog.Kind.ANY` |

## Methods

| | |
|---|---|
| `Array[String]` | [get_paths](#method-get-paths)() |

## Constants

- `String` **SEPARATOR** = `";"`

## Property descriptions

### TrackSelectionDialog.Kind track_kind = TrackSelectionDialog.Kind.ANY {#prop-track-kind}

Which tracks of the library the dialog shows: any, music only or ambient sound only

## Method descriptions

### Array[String] get_paths() {#method-get-paths}

The paths in the line, without the empty ones


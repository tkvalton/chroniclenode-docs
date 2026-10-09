<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetAmbientTrackAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to control ambient track playback Uses TrackSelectionDialog to pick specific tracks NOTE: For best performance, only use tracks from the current map's AudioAlbum as those are pre-loaded. Other tracks will need to load at runtime.

## Properties

| | | |
|---|---|---|
| `AmbientAction` | [action](#prop-action) | `AmbientAction.PLAY_TRACK` |
| `String` | [track_path](#prop-track-path) | `""` |
| `bool` | [loop_track](#prop-loop-track) | `true` |
| `float` | [volume_db](#prop-volume-db) | `0.0` |
| `float` | [fade_duration](#prop-fade-duration) | `3.0` |
| `bool` | [use_crossfade](#prop-use-crossfade) | `true` |
| `bool` | [return_to_map_album](#prop-return-to-map-album) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum AmbientAction {#enum-ambientaction}

- **PLAY_TRACK** = `0` - Play a specific ambient track
- **STOP** = `1` - Stop ambient immediately
- **FADE_STOP** = `2` - Fade out and stop ambient

## Property descriptions

### AmbientAction action = AmbientAction.PLAY_TRACK {#prop-action}

What to do with the ambient sound

### String track_path = "" {#prop-track-path}

The ambient track file path to play (only used for PLAY_TRACK action) Selected via TrackSelectionDialog - should be from current map's album for best performance

### bool loop_track = true {#prop-loop-track}

Whether to loop the track (only used for PLAY_TRACK action)

### float volume_db = 0.0 {#prop-volume-db}

Volume in decibels (only used for PLAY_TRACK action)

### float fade_duration = 3.0 {#prop-fade-duration}

Crossfade duration in seconds (only used for PLAY_TRACK action)

### bool use_crossfade = true {#prop-use-crossfade}

Whether to use crossfade when playing (only used for PLAY_TRACK action)

### bool return_to_map_album = false {#prop-return-to-map-album}

After track finishes, return to map album instead of looping

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


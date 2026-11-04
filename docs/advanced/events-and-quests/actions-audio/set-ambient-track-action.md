<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetAmbientTrackAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to control ambient track playback Uses TrackSelectionDialog to pick specific tracks NOTE: For best performance, only use tracks from the current map's AudioAlbum as those are pre-loaded. Other tracks will need to load at runtime.

## Properties

| | | |
|---|---|---|
| `AmbientAction` | [action](#prop-action) | `AmbientAction.PLAY_TRACK` |
| `SoundSource` | [source](#prop-source) |  |
| `float` | [fade_duration](#prop-fade-duration) | `3.0` |
| `bool` | [use_crossfade](#prop-use-crossfade) | `true` |
| `bool` | [return_to_map_album](#prop-return-to-map-album) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `SoundSource` | [get_source](#method-get-source)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum AmbientAction {#enum-ambientaction}

The options of ambient action: play track, stop, fade stop.

- **PLAY_TRACK** = `0` - Play a specific ambient track
- **STOP** = `1` - Stop ambient immediately
- **FADE_STOP** = `2` - Fade out and stop ambient
- **CLEAR** = `3` - Take the track of an event off: the ambience of the zone, the weather, the shelter or the world comes back

## Property descriptions

### AmbientAction action = AmbientAction.PLAY_TRACK {#prop-action}

What to do with the ambient sound

### SoundSource source {#prop-source}

What to play (only for PLAY_TRACK): a track with its options (loop or one shot, the pause between plays, volume, fade). It wins over the zone, the weather and the shelter until it ends or a Clear action takes it off

### float fade_duration = 3.0 {#prop-fade-duration}

Crossfade duration in seconds (for PLAY_TRACK and the fades of the other actions; the source may have its own fade)

### bool use_crossfade = true {#prop-use-crossfade}

Whether to use crossfade when playing (only used for PLAY_TRACK action)

### bool return_to_map_album = false {#prop-return-to-map-album}

After track finishes, return to map album instead of looping

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### SoundSource get_source() {#method-get-source}

The source this action plays: the one chosen, else a track made from the old settings of the action

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


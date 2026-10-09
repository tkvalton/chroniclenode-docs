<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CinematicAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to play or stop a video cinematic Uses UIContainer.cinematic_player (VideoStreamPlayer) Pauses all game audio during playback

## Properties

| | | |
|---|---|---|
| `CinematicCommand` | [command](#prop-command) | `CinematicCommand.PLAY` |
| `VideoStream` | [video_stream](#prop-video-stream) |  |
| `bool` | [wait_for_completion](#prop-wait-for-completion) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum CinematicCommand {#enum-cinematiccommand}

- **PLAY** = `0`
- **STOP** = `1`

## Property descriptions

### CinematicCommand command = CinematicCommand.PLAY {#prop-command}

Command to execute (play or stop)

### VideoStream video_stream {#prop-video-stream}

Video stream to play (only used when command is PLAY)

### bool wait_for_completion = true {#prop-wait-for-completion}

Whether to wait for the video to finish before completing action (only used when command is PLAY)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


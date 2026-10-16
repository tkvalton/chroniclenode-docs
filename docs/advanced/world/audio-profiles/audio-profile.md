<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioProfile

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

How the sound of the game changes in a place: for each audio channel (music, sound effects, voices, ambiance, interface sounds) a low-pass filter that muffles it, a volume offset and a reverb. An AudioZone (a cave, a house) and a MovementVolume (water) hold one and apply it while the camera is inside. The settings of the player are never touched: the changes are effects on the buses, on top of the volumes the player chose.

## Description

Make your own with Create New Resource &gt; AudioProfile, or start from one of the three that the toolkit makes: `make_underwater()`, `make_cave()` and `make_indoors()`.

## Properties

| | | |
|---|---|---|
| `String` | [display_name](#prop-display-name) | `""` |
| `float` | [fade_time](#prop-fade-time) | `0.3` |
| `float` | [reverb_room_size](#prop-reverb-room-size) | `0.5` |
| `float` | [music_low_pass_hz](#prop-music-low-pass-hz) | `NO_FILTER` |
| `float` | [music_volume_db](#prop-music-volume-db) | `0.0` |
| `float` | [music_reverb](#prop-music-reverb) | `0.0` |
| `float` | [sfx_low_pass_hz](#prop-sfx-low-pass-hz) | `NO_FILTER` |
| `float` | [sfx_volume_db](#prop-sfx-volume-db) | `0.0` |
| `float` | [sfx_reverb](#prop-sfx-reverb) | `0.0` |
| `float` | [voice_low_pass_hz](#prop-voice-low-pass-hz) | `NO_FILTER` |
| `float` | [voice_volume_db](#prop-voice-volume-db) | `0.0` |
| `float` | [voice_reverb](#prop-voice-reverb) | `0.0` |
| `float` | [ambiance_low_pass_hz](#prop-ambiance-low-pass-hz) | `NO_FILTER` |
| `float` | [ambiance_volume_db](#prop-ambiance-volume-db) | `0.0` |
| `float` | [ambiance_reverb](#prop-ambiance-reverb) | `0.0` |
| `float` | [ui_low_pass_hz](#prop-ui-low-pass-hz) | `NO_FILTER` |
| `float` | [ui_volume_db](#prop-ui-volume-db) | `0.0` |
| `float` | [ui_reverb](#prop-ui-reverb) | `0.0` |

## Methods

| | |
|---|---|
| `float` | [get_low_pass](#method-get-low-pass)( `bus: String` ) |
| `float` | [get_volume_db](#method-get-volume-db)( `bus: String` ) |
| `float` | [get_reverb](#method-get-reverb)( `bus: String` ) |
| `bool` | [is_neutral_for](#method-is-neutral-for)( `bus: String` ) |
| `AudioProfile` | [make_underwater](#method-make-underwater)() *static* |
| `AudioProfile` | [make_cave](#method-make-cave)() *static* |
| `AudioProfile` | [make_indoors](#method-make-indoors)() *static* |

## Constants

- `float` **NO_FILTER** = `20500.0` - The cutoff of a low-pass filter that lets everything through
- `Array[String]` **BUSES** = `["Music", "SFX", "Voice", "Ambiance", "UI"]` - The audio channels a profile has settings for, as the names of the buses

## Property descriptions

### String display_name = "" {#prop-display-name}

A name for the profile (shown nowhere in the game: for you)

### float fade_time = 0.3 {#prop-fade-time}

How long (seconds) the sound takes to change when the camera enters or leaves, so there is no click

### float reverb_room_size = 0.5 {#prop-reverb-room-size}

How big the room of the reverb is (small = a closet, large = a cavern). Only used by the channels with a reverb

*Music*

### float music_low_pass_hz = NO_FILTER {#prop-music-low-pass-hz}

Frequencies above this are cut (lower = more muffled). The top value cuts nothing

### float music_volume_db = 0.0 {#prop-music-volume-db}

Added to the volume of the channel (dB; negative = quieter)

### float music_reverb = 0.0 {#prop-music-reverb}

How much reverb the channel gets (0 = none)

*Sound effects*

### float sfx_low_pass_hz = NO_FILTER {#prop-sfx-low-pass-hz}

Frequencies above this are cut (lower = more muffled). The top value cuts nothing

### float sfx_volume_db = 0.0 {#prop-sfx-volume-db}

Added to the volume of the channel (dB; negative = quieter)

### float sfx_reverb = 0.0 {#prop-sfx-reverb}

How much reverb the channel gets (0 = none)

*Voice*

### float voice_low_pass_hz = NO_FILTER {#prop-voice-low-pass-hz}

Frequencies above this are cut (lower = more muffled). The top value cuts nothing

### float voice_volume_db = 0.0 {#prop-voice-volume-db}

Added to the volume of the channel (dB; negative = quieter)

### float voice_reverb = 0.0 {#prop-voice-reverb}

How much reverb the channel gets (0 = none)

*Ambiance*

### float ambiance_low_pass_hz = NO_FILTER {#prop-ambiance-low-pass-hz}

Frequencies above this are cut (lower = more muffled). The top value cuts nothing

### float ambiance_volume_db = 0.0 {#prop-ambiance-volume-db}

Added to the volume of the channel (dB; negative = quieter)

### float ambiance_reverb = 0.0 {#prop-ambiance-reverb}

How much reverb the channel gets (0 = none)

*Interface*

### float ui_low_pass_hz = NO_FILTER {#prop-ui-low-pass-hz}

Frequencies above this are cut (lower = more muffled). The top value cuts nothing

### float ui_volume_db = 0.0 {#prop-ui-volume-db}

Added to the volume of the channel (dB; negative = quieter)

### float ui_reverb = 0.0 {#prop-ui-reverb}

How much reverb the channel gets (0 = none)

## Method descriptions

### float get_low_pass( bus: String ) {#method-get-low-pass}

The low-pass cutoff the profile gives a channel (the name of its bus: Music, SFX, Voice, Ambiance, UI)

### float get_volume_db( bus: String ) {#method-get-volume-db}

The volume offset (dB) the profile gives a channel

### float get_reverb( bus: String ) {#method-get-reverb}

The reverb the profile gives a channel (0 = none)

### bool is_neutral_for( bus: String ) {#method-is-neutral-for}

Does the profile leave this channel as it is?

### AudioProfile make_underwater() {#method-make-underwater}

Under water: everything the world makes is muffled, the interface is not

### AudioProfile make_cave() {#method-make-cave}

In a cave: echo on the sounds of the world, a little less of the music and the high end of the ambiance

### AudioProfile make_indoors() {#method-make-indoors}

Indoors: the ambiance of the outside is muffled and quieter, a short reverb on the sounds of the room


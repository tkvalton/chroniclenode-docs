<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioAlbum

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The music of a world (a map album): three lists of tracks (exploration music, combat music and ambient loops), which track starts first in each list, whether each list is shuffled or looped, the volumes, the crossfade and the fades. A world names an album and the audio manager plays from it. Made in Assets &gt; Albums.

## Properties

| | | |
|---|---|---|
| `String` | [album_name](#prop-album-name) | `""` |
| `String` | [description](#prop-description) | `""` |
| `Array[String]` | [music_tracks](#prop-music-tracks) | `[]` |
| `Array[String]` | [combat_tracks](#prop-combat-tracks) | `[]` |
| `Array[String]` | [ambient_tracks](#prop-ambient-tracks) | `[]` |
| `int` | [default_music_index](#prop-default-music-index) | `0` |
| `int` | [default_combat_index](#prop-default-combat-index) | `0` |
| `int` | [default_ambient_index](#prop-default-ambient-index) | `0` |
| `bool` | [shuffle_music](#prop-shuffle-music) | `false` |
| `bool` | [shuffle_combat](#prop-shuffle-combat) | `false` |
| `bool` | [shuffle_ambient](#prop-shuffle-ambient) | `false` |
| `bool` | [loop_music](#prop-loop-music) | `true` |
| `bool` | [loop_combat](#prop-loop-combat) | `true` |
| `bool` | [loop_ambient](#prop-loop-ambient) | `true` |
| `float` | [crossfade_duration](#prop-crossfade-duration) | `2.0` |
| `float` | [music_volume_db](#prop-music-volume-db) | `0.0` |
| `float` | [combat_volume_db](#prop-combat-volume-db) | `0.0` |
| `float` | [ambient_volume_db](#prop-ambient-volume-db) | `0.0` |
| `float` | [pitch_scale](#prop-pitch-scale) | `1.0` |
| `float` | [fade_in_duration](#prop-fade-in-duration) | `1.0` |
| `float` | [fade_out_duration](#prop-fade-out-duration) | `1.0` |
| `float` | [silence_between_tracks](#prop-silence-between-tracks) | `0.0` |
| `Array[String]` | [validation_warnings](#prop-validation-warnings) | `[]` |

## Methods

| | |
|---|---|
| `Dictionary` | [get_all_tracks_to_load](#method-get-all-tracks-to-load)() |
| `Array[String]` | [get_tracks_by_type](#method-get-tracks-by-type)( `track_type: String` ) |
| `int` | [get_track_count](#method-get-track-count)( `track_type: String` ) |
| `bool` | [has_tracks](#method-has-tracks)( `track_type: String` ) |
| `int` | [get_total_track_count](#method-get-total-track-count)() |
| `String` | [get_default_track](#method-get-default-track)( `track_type: String` ) |
| `String` | [get_next_track](#method-get-next-track)( `track_type: String, current_track_path: String = ""` ) |
| `String` | [get_random_track](#method-get-random-track)( `track_type: String` ) |
| `String` | [get_track_by_name](#method-get-track-by-name)( `track_type: String, track_name: String` ) |
| `Array[String]` | [validate](#method-validate)() |
| `String` | [get_summary](#method-get-summary)() |
| `Dictionary` | [get_playback_info](#method-get-playback-info)() |
| `AudioAlbum` | [create_new](#method-create-new)( `name: String` ) *static* |
| `AudioAlbum` | [create_music_only_album](#method-create-music-only-album)( `name: String, music_tracks: Array[String]` ) *static* |
| `AudioAlbum` | [create_combat_only_album](#method-create-combat-only-album)( `name: String, combat_tracks: Array[String]` ) *static* |
| `AudioAlbum` | [create_ambient_only_album](#method-create-ambient-only-album)( `name: String, ambient_tracks: Array[String]` ) *static* |
| `AudioAlbum` | [create_full_album](#method-create-full-album)( `name: String, music_tracks: Array[String], combat_tracks: Array[String], ambient_tracks: Array[String]` ) *static* |
| `Array[String]` | [get_available_music_tracks](#method-get-available-music-tracks)() *static* |
| `Array[String]` | [get_available_ambient_tracks](#method-get-available-ambient-tracks)() *static* |

## Property descriptions

### String album_name = "" {#prop-album-name}

The name of the album.

### String description = "" {#prop-description}

A note about the album (not shown to the player).

*Track Arrays*

### Array[String] music_tracks = [] {#prop-music-tracks}

Background/exploration music

### Array[String] combat_tracks = [] {#prop-combat-tracks}

Battle music

### Array[String] ambient_tracks = [] {#prop-ambient-tracks}

Environmental loops (wind, water, etc.)

*Playback Behavior*

### int default_music_index = 0 {#prop-default-music-index}

Which music track plays first (-1 = random)

### int default_combat_index = 0 {#prop-default-combat-index}

Which combat track plays first (-1 = random)

### int default_ambient_index = 0 {#prop-default-ambient-index}

Which ambient track plays first (-1 = random)

### bool shuffle_music = false {#prop-shuffle-music}

True when the music tracks play in a random order.

### bool shuffle_combat = false {#prop-shuffle-combat}

True when the combat tracks play in a random order.

### bool shuffle_ambient = false {#prop-shuffle-ambient}

True when the ambient tracks play in a random order.

### bool loop_music = true {#prop-loop-music}

True when the music starts again when the tracks end.

### bool loop_combat = true {#prop-loop-combat}

True when the combat music starts again when the tracks end.

### bool loop_ambient = true {#prop-loop-ambient}

True when the ambient sounds start again when the tracks end.

### float crossfade_duration = 2.0 {#prop-crossfade-duration}

How many seconds a track takes to fade into the next.

*Audio Settings*

### float music_volume_db = 0.0 {#prop-music-volume-db}

The volume of the music, in decibels.

### float combat_volume_db = 0.0 {#prop-combat-volume-db}

The volume of the combat music, in decibels.

### float ambient_volume_db = 0.0 {#prop-ambient-volume-db}

The volume of the ambient sounds, in decibels.

### float pitch_scale = 1.0 {#prop-pitch-scale}

The pitch of the whole album (1 = normal).

*Advanced*

### float fade_in_duration = 1.0 {#prop-fade-in-duration}

How many seconds a track takes to fade in.

### float fade_out_duration = 1.0 {#prop-fade-out-duration}

How many seconds a track takes to fade out.

### float silence_between_tracks = 0.0 {#prop-silence-between-tracks}

How many seconds of silence between two tracks.

*Validation*

### Array[String] validation_warnings = [] {#prop-validation-warnings}

The problems validate found (a missing track ...).

## Method descriptions

### Dictionary get_all_tracks_to_load() {#method-get-all-tracks-to-load}

Get all tracks that need to be loaded for this album

### Array[String] get_tracks_by_type( track_type: String ) {#method-get-tracks-by-type}

Get tracks for a specific type

### int get_track_count( track_type: String ) {#method-get-track-count}

Get track count for a specific type

### bool has_tracks( track_type: String ) {#method-has-tracks}

Check if album has tracks of a specific type

### int get_total_track_count() {#method-get-total-track-count}

Get total track count across all types

### String get_default_track( track_type: String ) {#method-get-default-track}

Get default track for a specific type

### String get_next_track( track_type: String, current_track_path: String = "" ) {#method-get-next-track}

Get next track for a specific type

### String get_random_track( track_type: String ) {#method-get-random-track}

Get random track for a specific type

### String get_track_by_name( track_type: String, track_name: String ) {#method-get-track-by-name}

Get track by name for a specific type

### Array[String] validate() {#method-validate}

Checks the album and gives the warnings (a missing file, an empty list).

### String get_summary() {#method-get-summary}

A short text about the album: how many tracks of each kind.

### Dictionary get_playback_info() {#method-get-playback-info}

The playback settings of the album (shuffle, loop, volumes) as a dictionary.

### AudioAlbum create_new( name: String ) {#method-create-new}

Makes an empty album with a name.

### AudioAlbum create_music_only_album( name: String, music_tracks: Array[String] ) {#method-create-music-only-album}

Makes an album with music tracks only.

### AudioAlbum create_combat_only_album( name: String, combat_tracks: Array[String] ) {#method-create-combat-only-album}

Makes an album with combat tracks only.

### AudioAlbum create_ambient_only_album( name: String, ambient_tracks: Array[String] ) {#method-create-ambient-only-album}

Makes an album with ambient tracks only.

### AudioAlbum create_full_album( name: String, music_tracks: Array[String], combat_tracks: Array[String], ambient_tracks: Array[String] ) {#method-create-full-album}

Makes an album with music, combat and ambient tracks.

### Array[String] get_available_music_tracks() {#method-get-available-music-tracks}

Get available tracks from DatabaseAudio for dropdown menus

### Array[String] get_available_ambient_tracks() {#method-get-available-ambient-tracks}

The ambient files the project has (the looping and the non looping ones).


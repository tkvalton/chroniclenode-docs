<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioAlbum

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Properties

| | | |
|---|---|---|
| `String` | [album_name](#prop-album-name) | `""` |
| `String` | [description](#prop-description) | `""` |
| `Array[String]` | [music_tracks](#prop-music-tracks) | `[]      # Background/exploration music` |
| `Array[String]` | [combat_tracks](#prop-combat-tracks) | `[]     # Battle music` |
| `Array[String]` | [ambient_tracks](#prop-ambient-tracks) | `[]    # Environmental loops (wind, water, etc.)` |
| `int` | [default_music_index](#prop-default-music-index) | `0         # Which music track plays first (-1 = random)` |
| `int` | [default_combat_index](#prop-default-combat-index) | `0        # Which combat track plays first (-1 = random)` |
| `int` | [default_ambient_index](#prop-default-ambient-index) | `0       # Which ambient track plays first (-1 = random)` |
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

*No description yet.*

### String description = "" {#prop-description}

*No description yet.*

*Track Arrays*

### Array[String] music_tracks = []      # Background/exploration music {#prop-music-tracks}

*No description yet.*

### Array[String] combat_tracks = []     # Battle music {#prop-combat-tracks}

*No description yet.*

### Array[String] ambient_tracks = []    # Environmental loops (wind, water, etc.) {#prop-ambient-tracks}

*No description yet.*

*Playback Behavior*

### int default_music_index = 0         # Which music track plays first (-1 = random) {#prop-default-music-index}

*No description yet.*

### int default_combat_index = 0        # Which combat track plays first (-1 = random) {#prop-default-combat-index}

*No description yet.*

### int default_ambient_index = 0       # Which ambient track plays first (-1 = random) {#prop-default-ambient-index}

*No description yet.*

### bool shuffle_music = false {#prop-shuffle-music}

*No description yet.*

### bool shuffle_combat = false {#prop-shuffle-combat}

*No description yet.*

### bool shuffle_ambient = false {#prop-shuffle-ambient}

*No description yet.*

### bool loop_music = true {#prop-loop-music}

*No description yet.*

### bool loop_combat = true {#prop-loop-combat}

*No description yet.*

### bool loop_ambient = true {#prop-loop-ambient}

*No description yet.*

### float crossfade_duration = 2.0 {#prop-crossfade-duration}

*No description yet.*

*Audio Settings*

### float music_volume_db = 0.0 {#prop-music-volume-db}

*No description yet.*

### float combat_volume_db = 0.0 {#prop-combat-volume-db}

*No description yet.*

### float ambient_volume_db = 0.0 {#prop-ambient-volume-db}

*No description yet.*

### float pitch_scale = 1.0 {#prop-pitch-scale}

*No description yet.*

*Advanced*

### float fade_in_duration = 1.0 {#prop-fade-in-duration}

*No description yet.*

### float fade_out_duration = 1.0 {#prop-fade-out-duration}

*No description yet.*

### float silence_between_tracks = 0.0 {#prop-silence-between-tracks}

*No description yet.*

*Validation*

### Array[String] validation_warnings = [] {#prop-validation-warnings}

*No description yet.*

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

*No description yet.*

### String get_summary() {#method-get-summary}

*No description yet.*

### Dictionary get_playback_info() {#method-get-playback-info}

*No description yet.*

### AudioAlbum create_new( name: String ) {#method-create-new}

*No description yet.*

### AudioAlbum create_music_only_album( name: String, music_tracks: Array[String] ) {#method-create-music-only-album}

*No description yet.*

### AudioAlbum create_combat_only_album( name: String, combat_tracks: Array[String] ) {#method-create-combat-only-album}

*No description yet.*

### AudioAlbum create_ambient_only_album( name: String, ambient_tracks: Array[String] ) {#method-create-ambient-only-album}

*No description yet.*

### AudioAlbum create_full_album( name: String, music_tracks: Array[String], combat_tracks: Array[String], ambient_tracks: Array[String] ) {#method-create-full-album}

*No description yet.*

### Array[String] get_available_music_tracks() {#method-get-available-music-tracks}

Get available tracks from DatabaseAudio for dropdown menus

### Array[String] get_available_ambient_tracks() {#method-get-available-ambient-tracks}

*No description yet.*


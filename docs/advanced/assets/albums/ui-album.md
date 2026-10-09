<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UIAlbum

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Properties

| | | |
|---|---|---|
| `String` | [album_name](#prop-album-name) | `""` |
| `String` | [description](#prop-description) | `""` |
| `Array[String]` | [menu_music_tracks](#prop-menu-music-tracks) | `[]       # Background music for menus` |
| `Array[String]` | [ambient_tracks](#prop-ambient-tracks) | `[]          # Menu ambient sounds` |
| `Array[String]` | [transition_tracks](#prop-transition-tracks) | `[]       # Scene transition sounds` |
| `bool` | [loop_music](#prop-loop-music) | `true` |
| `bool` | [loop_ambient](#prop-loop-ambient) | `true` |
| `bool` | [shuffle_music](#prop-shuffle-music) | `false` |
| `float` | [crossfade_duration](#prop-crossfade-duration) | `2.0` |
| `float` | [music_volume_db](#prop-music-volume-db) | `0.0` |
| `float` | [ambient_volume_db](#prop-ambient-volume-db) | `-10.0` |
| `float` | [transition_volume_db](#prop-transition-volume-db) | `0.0` |
| `float` | [fade_in_duration](#prop-fade-in-duration) | `1.0` |
| `float` | [fade_out_duration](#prop-fade-out-duration) | `1.0` |
| `BuiltInType` | [album_type](#prop-album-type) | `BuiltInType.CUSTOM` |
| `Array[String]` | [validation_warnings](#prop-validation-warnings) | `[]` |

## Methods

| | |
|---|---|
| `Array[String]` | [get_tracks_by_category](#method-get-tracks-by-category)( `category: String` ) |
| `float` | [get_volume_for_category](#method-get-volume-for-category)( `category: String` ) |
| `int` | [get_track_count](#method-get-track-count)( `category: String` ) |
| `bool` | [has_tracks](#method-has-tracks)( `category: String` ) |
| `int` | [get_total_track_count](#method-get-total-track-count)() |
| `String` | [get_default_track](#method-get-default-track)( `category: String` ) |
| `String` | [get_next_track](#method-get-next-track)( `category: String, current_track_path: String = ""` ) |
| `String` | [get_random_track](#method-get-random-track)( `category: String` ) |
| `String` | [get_track_by_name](#method-get-track-by-name)( `category: String, track_name: String` ) |
| `Array[String]` | [validate](#method-validate)() |
| `String` | [get_summary](#method-get-summary)() |
| `Dictionary` | [get_playback_info](#method-get-playback-info)() |
| `UIAlbum` | [create_new](#method-create-new)( `name: String, type: BuiltInType = BuiltInType.CUSTOM` ) *static* |
| `UIAlbum` | [create_main_menu_album](#method-create-main-menu-album)( `name: String = "Main Menu"` ) *static* |
| `UIAlbum` | [create_character_creation_album](#method-create-character-creation-album)( `name: String = "Character Creation"` ) *static* |
| `UIAlbum` | [create_pause_menu_album](#method-create-pause-menu-album)( `name: String = "Pause Menu"` ) *static* |
| `UIAlbum` | [create_loading_screen_album](#method-create-loading-screen-album)( `name: String = "Loading Screen"` ) *static* |
| `Array[String]` | [get_available_menu_music_tracks](#method-get-available-menu-music-tracks)() *static* |
| `Array[String]` | [get_available_ambient_tracks](#method-get-available-ambient-tracks)() *static* |
| `Array[String]` | [get_available_transition_tracks](#method-get-available-transition-tracks)() *static* |
| `Array[String]` | [get_builtin_type_names](#method-get-builtin-type-names)() *static* |
| `bool` | [is_builtin_album](#method-is-builtin-album)() |
| `String` | [get_type_display_name](#method-get-type-display-name)() |

## Enumerations

### enum BuiltInType {#enum-builtintype}

- **MAIN_MENU** = `0`
- **CHARACTER_CREATION** = `1`
- **PAUSE_MENU** = `2`
- **LOADING_SCREEN** = `3`

## Property descriptions

### String album_name = "" {#prop-album-name}

*No description yet.*

### String description = "" {#prop-description}

*No description yet.*

*UI Audio Tracks*

### Array[String] menu_music_tracks = []       # Background music for menus {#prop-menu-music-tracks}

*No description yet.*

### Array[String] ambient_tracks = []          # Menu ambient sounds {#prop-ambient-tracks}

*No description yet.*

### Array[String] transition_tracks = []       # Scene transition sounds {#prop-transition-tracks}

*No description yet.*

*Playback Settings*

### bool loop_music = true {#prop-loop-music}

*No description yet.*

### bool loop_ambient = true {#prop-loop-ambient}

*No description yet.*

### bool shuffle_music = false {#prop-shuffle-music}

*No description yet.*

### float crossfade_duration = 2.0 {#prop-crossfade-duration}

*No description yet.*

*Volume Settings*

### float music_volume_db = 0.0 {#prop-music-volume-db}

*No description yet.*

### float ambient_volume_db = -10.0 {#prop-ambient-volume-db}

*No description yet.*

### float transition_volume_db = 0.0 {#prop-transition-volume-db}

*No description yet.*

*Advanced*

### float fade_in_duration = 1.0 {#prop-fade-in-duration}

*No description yet.*

### float fade_out_duration = 1.0 {#prop-fade-out-duration}

*No description yet.*

### BuiltInType album_type = BuiltInType.CUSTOM {#prop-album-type}

*No description yet.*

*Validation*

### Array[String] validation_warnings = [] {#prop-validation-warnings}

*No description yet.*

## Method descriptions

### Array[String] get_tracks_by_category( category: String ) {#method-get-tracks-by-category}

Get all tracks for a specific category

### float get_volume_for_category( category: String ) {#method-get-volume-for-category}

Get volume for a specific category

### int get_track_count( category: String ) {#method-get-track-count}

Get track count for a specific category

### bool has_tracks( category: String ) {#method-has-tracks}

Check if album has tracks of a specific category

### int get_total_track_count() {#method-get-total-track-count}

Get total track count across all categories

### String get_default_track( category: String ) {#method-get-default-track}

Get default track for a specific category

### String get_next_track( category: String, current_track_path: String = "" ) {#method-get-next-track}

Get next track for a specific category

### String get_random_track( category: String ) {#method-get-random-track}

Get random track for a specific category

### String get_track_by_name( category: String, track_name: String ) {#method-get-track-by-name}

Get track by name for a specific category

### Array[String] validate() {#method-validate}

*No description yet.*

### String get_summary() {#method-get-summary}

*No description yet.*

### Dictionary get_playback_info() {#method-get-playback-info}

*No description yet.*

### UIAlbum create_new( name: String, type: BuiltInType = BuiltInType.CUSTOM ) {#method-create-new}

*No description yet.*

### UIAlbum create_main_menu_album( name: String = "Main Menu" ) {#method-create-main-menu-album}

*No description yet.*

### UIAlbum create_character_creation_album( name: String = "Character Creation" ) {#method-create-character-creation-album}

*No description yet.*

### UIAlbum create_pause_menu_album( name: String = "Pause Menu" ) {#method-create-pause-menu-album}

*No description yet.*

### UIAlbum create_loading_screen_album( name: String = "Loading Screen" ) {#method-create-loading-screen-album}

*No description yet.*

### Array[String] get_available_menu_music_tracks() {#method-get-available-menu-music-tracks}

Get available tracks from DatabaseAudio for dropdown menus

### Array[String] get_available_ambient_tracks() {#method-get-available-ambient-tracks}

*No description yet.*

### Array[String] get_available_transition_tracks() {#method-get-available-transition-tracks}

*No description yet.*

### Array[String] get_builtin_type_names() {#method-get-builtin-type-names}

Get built-in album type names for dropdowns

### bool is_builtin_album() {#method-is-builtin-album}

Check if album type is built-in (mandatory)

### String get_type_display_name() {#method-get-type-display-name}

Get album type display name


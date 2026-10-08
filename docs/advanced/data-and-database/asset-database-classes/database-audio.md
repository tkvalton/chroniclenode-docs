<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseAudio

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The audio library of the project, read from the folders under `res://src/data/audio/`.

## Description

SFX_CATEGORIES lists the categories (music, ambience, UI, voices, voicelines, footsteps, casting, impact, loops, environmental, interactables ...) with their folder, how the folder is organised and the file types. The class also keeps the albums: the built-in UI albums (main menu, character creation, pause menu, loading screen), custom UI albums and the world albums (AudioAlbum) that worlds use. The folders are scanned once on first use.

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)() *static* |
| `void` | [ensure_initialized](#method-ensure-initialized)() *static* |
| `void` | [ensure_directories](#method-ensure-directories)() *static* |
| `Array[AudioAlbum]` | [get_world_albums](#method-get-world-albums)() *static* |
| `AudioAlbum` | [create_world_album](#method-create-world-album)( `name: String` ) *static* |
| `bool` | [save_world_album](#method-save-world-album)( `album: AudioAlbum` ) *static* |
| `bool` | [delete_world_album](#method-delete-world-album)( `album: AudioAlbum` ) *static* |
| `AudioAlbum` | [duplicate_world_album](#method-duplicate-world-album)( `original: AudioAlbum, new_name: String` ) *static* |
| `Dictionary` | [validate_all_world_albums](#method-validate-all-world-albums)() *static* |
| `UIAlbum` | [get_ui_album](#method-get-ui-album)( `album_type: UIAlbum.BuiltInType` ) *static* |
| `Array[UIAlbum]` | [get_all_ui_albums](#method-get-all-ui-albums)() *static* |
| `bool` | [save_ui_album](#method-save-ui-album)( `album: UIAlbum` ) *static* |
| `UIAlbum` | [create_custom_ui_album](#method-create-custom-ui-album)( `name: String` ) *static* |
| `bool` | [delete_custom_ui_album](#method-delete-custom-ui-album)( `album: UIAlbum` ) *static* |
| `Dictionary` | [validate_all_ui_albums](#method-validate-all-ui-albums)() *static* |
| `void` | [ensure_category_directories](#method-ensure-category-directories)() *static* |
| `Array[String]` | [get_sfx_categories](#method-get-sfx-categories)() *static* |
| `Dictionary` | [get_category_info](#method-get-category-info)( `category: String` ) *static* |
| `String` | [get_category_display_name](#method-get-category-display-name)( `category: String` ) *static* |
| `Array[String]` | [get_available_types](#method-get-available-types)( `category: String` ) *static* |
| `Array[String]` | [get_available_files](#method-get-available-files)( `category: String, type: String = ""` ) *static* |
| `AudioStream` | [get_random_sfx_audio](#method-get-random-sfx-audio)( `category: String, type: String` ) *static* |
| `AudioStream` | [get_specific_sfx_audio](#method-get-specific-sfx-audio)( `category: String, type: String, file_name: String` ) *static* |
| `AudioStream` | [get_random_footsteps_audio](#method-get-random-footsteps-audio)( `entity_type: String, surface: String, movement: String` ) *static* |
| `AudioStream` | [get_random_voice_audio](#method-get-random-voice-audio)( `entity_type: String, voice_variant: String, action: String` ) *static* |
| `Array[String]` | [get_available_footstep_entities](#method-get-available-footstep-entities)() *static* |
| `Array[String]` | [get_available_surfaces](#method-get-available-surfaces)( `entity_type: String` ) *static* |
| `Array[String]` | [get_available_movements](#method-get-available-movements)( `entity_type: String, surface: String` ) *static* |
| `Array[String]` | [get_available_voice_entities](#method-get-available-voice-entities)() *static* |
| `Array[String]` | [get_available_voice_variants](#method-get-available-voice-variants)( `entity_type: String` ) *static* |
| `Array[String]` | [get_available_voice_actions](#method-get-available-voice-actions)( `entity_type: String, voice_variant: String` ) *static* |
| `AudioStream` | [get_random_voiceline_audio](#method-get-random-voiceline-audio)( `character_name: String` ) *static* |
| `AudioStream` | [get_voiceline_audio](#method-get-voiceline-audio)( `character_name: String, file_name: String` ) *static* |
| `Array[String]` | [get_available_voiceline_characters](#method-get-available-voiceline-characters)() *static* |
| `Array` | [get_all_voiceline_files_for_character](#method-get-all-voiceline-files-for-character)( `character_name: String` ) *static* |
| `Array` | [get_all_voice_files](#method-get-all-voice-files)( `entity_type: String, voice_variant: String, action: String` ) *static* |
| `Array[String]` | [get_available_file_names](#method-get-available-file-names)( `category: String, type: String` ) *static* |
| `Array[String]` | [get_available_voice_actions_for_ui](#method-get-available-voice-actions-for-ui)( `entity_type: String, voice_variant: String` ) *static* |
| `Array[String]` | [get_all_footstep_files](#method-get-all-footstep-files)( `entity_type: String, surface: String, movement: String` ) *static* |
| `void` | [refresh_database](#method-refresh-database)() *static* |
| `Dictionary` | [get_database_stats](#method-get-database-stats)() *static* |

## Constants

- `String` **AUDIO_RESOURCES_PATH** = `"res://src/data/audio/"`
- `String` **ALBUMS_BASE_PATH** = `"res://src/data/audio/albums/"`
- `String` **UI_ALBUMS_PATH** = `"res://src/data/audio/albums/ui_albums/"`
- `String` **WORLD_ALBUMS_PATH** = `"res://src/data/audio/albums/world_albums/"`
- `Dictionary` **SFX_CATEGORIES** = `{`

## Method descriptions

### void initialize() {#method-initialize}

Initialize the SFX database by scanning all categories

### void ensure_initialized() {#method-ensure-initialized}

Ensure database is initialized before any operation (private)

### void ensure_directories() {#method-ensure-directories}

Ensure UI albums directory structure exists

### Array[AudioAlbum] get_world_albums() {#method-get-world-albums}

Get all world albums

### AudioAlbum create_world_album( name: String ) {#method-create-world-album}

Create a new world album

### bool save_world_album( album: AudioAlbum ) {#method-save-world-album}

Save a world album to disk

### bool delete_world_album( album: AudioAlbum ) {#method-delete-world-album}

Delete a world album

### AudioAlbum duplicate_world_album( original: AudioAlbum, new_name: String ) {#method-duplicate-world-album}

Duplicate an existing world album with a new name

### Dictionary validate_all_world_albums() {#method-validate-all-world-albums}

Validate all world albums

### UIAlbum get_ui_album( album_type: UIAlbum.BuiltInType ) {#method-get-ui-album}

Get a built-in UI album by type

### Array[UIAlbum] get_all_ui_albums() {#method-get-all-ui-albums}

Get all UI albums (built-in + custom)

### bool save_ui_album( album: UIAlbum ) {#method-save-ui-album}

Save a UI album (handles both built-in and custom)

### UIAlbum create_custom_ui_album( name: String ) {#method-create-custom-ui-album}

Create a new custom UI album

### bool delete_custom_ui_album( album: UIAlbum ) {#method-delete-custom-ui-album}

Delete a custom UI album

### Dictionary validate_all_ui_albums() {#method-validate-all-ui-albums}

Validate all UI albums

### void ensure_category_directories() {#method-ensure-category-directories}

Ensure category directories exist

### Array[String] get_sfx_categories() {#method-get-sfx-categories}

Get all available SFX categories

### Dictionary get_category_info( category: String ) {#method-get-category-info}

Get category info

### String get_category_display_name( category: String ) {#method-get-category-display-name}

Get category display name

### Array[String] get_available_types( category: String ) {#method-get-available-types}

Get available types for a category

### Array[String] get_available_files( category: String, type: String = "" ) {#method-get-available-files}

Get available files for a category and type

### AudioStream get_random_sfx_audio( category: String, type: String ) {#method-get-random-sfx-audio}

Get random audio from SFX category

### AudioStream get_specific_sfx_audio( category: String, type: String, file_name: String ) {#method-get-specific-sfx-audio}

Get specific audio file by name from SFX category

### AudioStream get_random_footsteps_audio( entity_type: String, surface: String, movement: String ) {#method-get-random-footsteps-audio}

Get random footsteps audio

### AudioStream get_random_voice_audio( entity_type: String, voice_variant: String, action: String ) {#method-get-random-voice-audio}

Get random voice audio

### Array[String] get_available_footstep_entities() {#method-get-available-footstep-entities}

Get all discovered entity types for footsteps

### Array[String] get_available_surfaces( entity_type: String ) {#method-get-available-surfaces}

Get all available surfaces for a specific entity

### Array[String] get_available_movements( entity_type: String, surface: String ) {#method-get-available-movements}

Get all available movements for an entity and surface

### Array[String] get_available_voice_entities() {#method-get-available-voice-entities}

Get all discovered entity types for voices

### Array[String] get_available_voice_variants( entity_type: String ) {#method-get-available-voice-variants}

Get all available voice variants for a specific entity

### Array[String] get_available_voice_actions( entity_type: String, voice_variant: String ) {#method-get-available-voice-actions}

Get all available actions for an entity and voice variant

### AudioStream get_random_voiceline_audio( character_name: String ) {#method-get-random-voiceline-audio}

Get random voiceline audio for a character

### AudioStream get_voiceline_audio( character_name: String, file_name: String ) {#method-get-voiceline-audio}

Get specific voiceline audio by character and filename

### Array[String] get_available_voiceline_characters() {#method-get-available-voiceline-characters}

Get all discovered characters for voicelines

### Array get_all_voiceline_files_for_character( character_name: String ) {#method-get-all-voiceline-files-for-character}

Get all files for a voiceline character (for editor)

### Array get_all_voice_files( entity_type: String, voice_variant: String, action: String ) {#method-get-all-voice-files}

Get all files for a voice entity/variant/action (for editor)

### Array[String] get_available_file_names( category: String, type: String ) {#method-get-available-file-names}

Get available file names for a specific SFX category and type

### Array[String] get_available_voice_actions_for_ui( entity_type: String, voice_variant: String ) {#method-get-available-voice-actions-for-ui}

Get available voice actions for specific entity_type and voice_variant (for UI dropdowns)

### Array[String] get_all_footstep_files( entity_type: String, surface: String, movement: String ) {#method-get-all-footstep-files}

Get all footstep files for specific parameters

### void refresh_database() {#method-refresh-database}

Refresh database (rescan filesystem)

### Dictionary get_database_stats() {#method-get-database-stats}

Get database statistics


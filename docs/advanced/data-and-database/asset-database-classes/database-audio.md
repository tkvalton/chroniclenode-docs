<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseAudio

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The audio library of the project, read from the folders under `res://src/data/audio/`.

## Description

SFX_CATEGORIES lists the categories (music, ambience, UI, voices, voicelines, footsteps, casting, impact, loops, environmental, interactables ...) with their folder, how the folder is organised and the file types. The folders are scanned once on first use. The albums (collections of tracks) are not here: they are the Music Albums of the project (SoundAlbum, Audio &gt; Music Albums).

## Methods

| | |
|---|---|
| `Array[String]` | [get_ui_sound_names](#method-get-ui-sound-names)() *static* |
| `Array[String]` | [get_missing_ui_sounds](#method-get-missing-ui-sounds)() *static* |
| `Dictionary` | [get_addable_sections](#method-get-addable-sections)() *static* |
| `void` | [initialize](#method-initialize)() *static* |
| `void` | [ensure_initialized](#method-ensure-initialized)() *static* |
| `void` | [ensure_category_directories](#method-ensure-category-directories)() *static* |
| `Array[String]` | [get_sfx_categories](#method-get-sfx-categories)() *static* |
| `Dictionary` | [get_category_info](#method-get-category-info)( `category: String` ) *static* |
| `Dictionary` | [import_files](#method-import-files)( `category: String, type_name: String, file_paths: PackedStringArray` ) *static* |
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
| `AudioStream` | [get_random_voiceline_audio](#method-get-random-voiceline-audio)( `character_name: String, language: String = ""` ) *static* |
| `AudioStream` | [get_voiceline_audio](#method-get-voiceline-audio)( `character_name: String, file_name: String, language: String = ""` ) *static* |
| `String` | [get_voiceline_path](#method-get-voiceline-path)( `character_name: String, file_name: String, language: String = ""` ) *static* |
| `String` | [get_voiceline_language_path](#method-get-voiceline-language-path)( `character_name: String, file_name: String, language: String` ) *static* |
| `Array[String]` | [get_voiceline_language_folders](#method-get-voiceline-language-folders)( `character_name: String` ) *static* |
| `Array[String]` | [get_available_voiceline_characters](#method-get-available-voiceline-characters)() *static* |
| `Array` | [get_all_voiceline_files_for_character](#method-get-all-voiceline-files-for-character)( `character_name: String` ) *static* |
| `Array` | [get_all_voice_files](#method-get-all-voice-files)( `entity_type: String, voice_variant: String, action: String` ) *static* |
| `Array[String]` | [get_available_file_names](#method-get-available-file-names)( `category: String, type: String` ) *static* |
| `Array[String]` | [get_available_voice_actions_for_ui](#method-get-available-voice-actions-for-ui)( `entity_type: String, voice_variant: String` ) *static* |
| `Array[String]` | [get_all_footstep_files](#method-get-all-footstep-files)( `entity_type: String, surface: String, movement: String` ) *static* |
| `void` | [refresh_database](#method-refresh-database)() *static* |
| `Dictionary` | [get_database_stats](#method-get-database-stats)() *static* |

## Constants

- `String` **AUDIO_RESOURCES_PATH** = `"res://src/data/audio/"` - ========== PATHS ==========
- `Dictionary` **SFX_CATEGORIES** = `{` - ========== Audio CATEGORY DEFINITIONS ========== Organized by source/origin: Tracks, UI, Character Audio, Ability Audio, World Audio
- `Dictionary` **FOLDER_HELP** = `{` - What the folder name of each category is for, in plain words (the Audio tab shows it when you add a folder)
- `Dictionary` **SECTIONS** = `{` - The words of the sections of the Audio tab, and which categories belong to each

## Method descriptions

### Array[String] get_ui_sound_names() {#method-get-ui-sound-names}

The names of the interface sounds the game knows: the folders of ui_sfx that it looks for (AudioManager.UISound)

### Array[String] get_missing_ui_sounds() {#method-get-missing-ui-sounds}

The interface sounds the game knows that the library has no folder for yet

### Dictionary get_addable_sections() {#method-get-addable-sections}

The categories you can add a folder to (the ones whose folders are free names), by section: &#123;section: [categories]&#125;

### void initialize() {#method-initialize}

Initialize the SFX database by scanning all categories

### void ensure_initialized() {#method-ensure-initialized}

Ensure database is initialized before any operation (private)

### void ensure_category_directories() {#method-ensure-category-directories}

Ensure category directories exist

### Array[String] get_sfx_categories() {#method-get-sfx-categories}

Get all available SFX categories

### Dictionary get_category_info( category: String ) {#method-get-category-info}

Get category info

### Dictionary import_files( category: String, type_name: String, file_paths: PackedStringArray ) {#method-import-files}

Copies sound files from anywhere on the computer (or from the project) into a folder of the library. Files that are not sound files of the category, and files the folder has already, are not copied. Returns &#123;imported: the paths in the library, skipped: [name and why], error: "" or why nothing was done&#125;

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

### AudioStream get_random_voiceline_audio( character_name: String, language: String = "" ) {#method-get-random-voiceline-audio}

Get random voiceline audio for a character, in the voice language of the player (the file of the same name in the language folder when there is one)

### AudioStream get_voiceline_audio( character_name: String, file_name: String, language: String = "" ) {#method-get-voiceline-audio}

Get specific voiceline audio by character and filename, in the voice language of the player (the file of the same name in the language folder when there is one, else the default file)

### String get_voiceline_path( character_name: String, file_name: String, language: String = "" ) {#method-get-voiceline-path}

The path of a voice line: the file in the language folder of the voice language ("" language = the voice language of the player) when the language is not the source language and the file exists there, else the default file. "" when the line does not exist.

### String get_voiceline_language_path( character_name: String, file_name: String, language: String ) {#method-get-voiceline-language-path}

The path of a voice line in the language folder of a language ("" when that language has no such file).

### Array[String] get_voiceline_language_folders( character_name: String ) {#method-get-voiceline-language-folders}

The names of the language folders a character has (any folder inside its folder; the editor shows the ones that are languages of the game).

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


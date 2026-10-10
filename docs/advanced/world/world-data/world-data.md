<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldData

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Pure data storage for world information Contains only world metadata, spawn points, and references to unique objects

## Properties

| | | |
|---|---|---|
| `String` | [category](#prop-category) | `""` |
| `String` | [scene_path](#prop-scene-path) | `""` |
| `PersistanceLogic` | [persistance_logic](#prop-persistance-logic) | `PersistanceLogic.PERSISTANT` |
| `float` | [reset_duration](#prop-reset-duration) | `3600.0` |
| `bool` | [allow_partial_persistence](#prop-allow-partial-persistence) | `false` |
| `int` | [item_level](#prop-item-level) | `0` |
| `Array[int]` | [unique_entities](#prop-unique-entities) | `[]` |
| `Array[int]` | [unique_interactables](#prop-unique-interactables) | `[]` |
| `Array[int]` | [regions](#prop-regions) | `[]` |
| `Array[int]` | [encounters](#prop-encounters) | `[]` |
| `Texture` | [map_image](#prop-map-image) |  |
| `Texture` | [loading_screen_texture_override](#prop-loading-screen-texture-override) |  |
| `AudioAlbum` | [audio_album](#prop-audio-album) |  |
| `String` | [default_music_track](#prop-default-music-track) | `""` |
| `String` | [default_ambient_track](#prop-default-ambient-track) | `""` |
| `VFXSelectionWeather` | [default_weather](#prop-default-weather) |  |
| `TimeConfig` | [time_override](#prop-time-override) |  |
| `SunConfig` | [sun_override](#prop-sun-override) |  |
| `SkyConfig` | [sky_override](#prop-sky-override) |  |
| `EnvironmentConfig` | [environment_override](#prop-environment-override) |  |
| `int` | [last_validated](#prop-last-validated) | `0` |
| `Array[String]` | [validation_warnings](#prop-validation-warnings) | `[]` |

## Methods

| | |
|---|---|
| `void` | [set_audio_album](#method-set-audio-album)( `album: AudioAlbum` ) |
| `AudioAlbum` | [get_audio_album](#method-get-audio-album)() |
| `bool` | [has_audio_album](#method-has-audio-album)() |
| `void` | [clear_audio_album](#method-clear-audio-album)() |
| `void` | [set_default_weather](#method-set-default-weather)( `weather: VFXSelectionWeather` ) |
| `VFXSelectionWeather` | [get_default_weather](#method-get-default-weather)() |
| `bool` | [has_default_weather](#method-has-default-weather)() |
| `void` | [clear_default_weather](#method-clear-default-weather)() |
| `void` | [add_unique_entity](#method-add-unique-entity)( `entity_id: int` ) |
| `void` | [remove_unique_entity](#method-remove-unique-entity)( `entity_id: int` ) |
| `bool` | [has_unique_entity](#method-has-unique-entity)( `entity_id: int` ) |
| `void` | [add_unique_interactable](#method-add-unique-interactable)( `interactable_id: int` ) |
| `void` | [remove_unique_interactable](#method-remove-unique-interactable)( `interactable_id: int` ) |
| `bool` | [has_unique_interactable](#method-has-unique-interactable)( `interactable_id: int` ) |
| `void` | [add_region](#method-add-region)( `region_id: int` ) |
| `void` | [remove_region](#method-remove-region)( `region_id: int` ) |
| `bool` | [has_region](#method-has-region)( `region_id: int` ) |
| `void` | [add_encounter](#method-add-encounter)( `encounter_id: int` ) |
| `void` | [remove_encounter](#method-remove-encounter)( `encounter_id: int` ) |
| `bool` | [has_encounter](#method-has-encounter)( `encounter_id: int` ) |
| `Array[String]` | [validate](#method-validate)() |
| `bool` | [save_to_disk](#method-save-to-disk)() |
| `String` | [get_folder_path](#method-get-folder-path)() |
| `int` | [get_unique_object_count](#method-get-unique-object-count)() |
| `String` | [get_summary](#method-get-summary)() |
| `Dictionary` | [get_display_info](#method-get-display-info)() |
| `bool` | [is_properly_configured](#method-is-properly-configured)() |

## Enumerations

### enum PersistanceLogic {#enum-persistancelogic}

Defines how the world state is handled when the player leaves or saves

- **PERSISTANT** = `0` - State is saved permanently to the save file
- **INSTANCE** = `1` - State is wiped upon exit; only exists while active
- **TIMED_RESET** = `2` - State persists until a specific duration has passed
- **SESSION_ONLY** = `3` - State persists during gameplay but resets on application restart

## Property descriptions

### String category = "" {#prop-category}

Category/folder for organization

### String scene_path = "" {#prop-scene-path}

Path to the scene file

### PersistanceLogic persistance_logic = PersistanceLogic.PERSISTANT {#prop-persistance-logic}

The logic used to determine if world changes are saved or reset

### float reset_duration = 3600.0 {#prop-reset-duration}

Time in seconds (in-game) before a TIMED_RESET world reverts to default

### bool allow_partial_persistence = false {#prop-allow-partial-persistence}

If true, specific objects like chests remain saved even if enemies/entities reset

### int item_level = 0 {#prop-item-level}

The item level of the loot of this world when a loot rule or table says "World level" (0 = none: the loot falls back to the party level). A starting zone can be level 5, a late dungeon level 40, whatever the level of the player

### Array[int] unique_entities = [] {#prop-unique-entities}

Unique entity IDs present in this world

### Array[int] unique_interactables = [] {#prop-unique-interactables}

Unique interactable IDs present in this world

### Array[int] regions = [] {#prop-regions}

Region IDs in this world

### Array[int] encounters = [] {#prop-encounters}

Encounter IDs in this world

### Texture map_image {#prop-map-image}

Low Quality map image (read-only in editor, for preview)

### Texture loading_screen_texture_override {#prop-loading-screen-texture-override}

Loading screen texture override (null = use default loading screens)

*Audio*

### AudioAlbum audio_album {#prop-audio-album}

Audio album containing all track types for this world

### String default_music_track = "" {#prop-default-music-track}

Default music track if spawn point doesn't specify one

### String default_ambient_track = "" {#prop-default-ambient-track}

Default ambient track if spawn point doesn't specify one

*Weather*

### VFXSelectionWeather default_weather {#prop-default-weather}

Default weather for this world

*Environment Overrides*

### TimeConfig time_override {#prop-time-override}

Override time settings for this world (null = use default)

### SunConfig sun_override {#prop-sun-override}

Override sun settings for this world (null = use default)

### SkyConfig sky_override {#prop-sky-override}

Override sky settings for this world (null = use default)

### EnvironmentConfig environment_override {#prop-environment-override}

Override environment settings for this world (null = use default)

*Validation*

### int last_validated = 0 {#prop-last-validated}

Timestamp of last validation

### Array[String] validation_warnings = [] {#prop-validation-warnings}

Validation warnings from last check

## Method descriptions

### void set_audio_album( album: AudioAlbum ) {#method-set-audio-album}

Set the audio album for this world

### AudioAlbum get_audio_album() {#method-get-audio-album}

Get the audio album for this world

### bool has_audio_album() {#method-has-audio-album}

Check if world has an audio album assigned

### void clear_audio_album() {#method-clear-audio-album}

Clear the audio album

### void set_default_weather( weather: VFXSelectionWeather ) {#method-set-default-weather}

Set the default weather for this world

### VFXSelectionWeather get_default_weather() {#method-get-default-weather}

Get the default weather for this world

### bool has_default_weather() {#method-has-default-weather}

Check if world has default weather assigned

### void clear_default_weather() {#method-clear-default-weather}

Clear the default weather

### void add_unique_entity( entity_id: int ) {#method-add-unique-entity}

Add reference to a unique entity

### void remove_unique_entity( entity_id: int ) {#method-remove-unique-entity}

Remove reference to a unique entity

### bool has_unique_entity( entity_id: int ) {#method-has-unique-entity}

Check if world references a unique entity

### void add_unique_interactable( interactable_id: int ) {#method-add-unique-interactable}

Add reference to a unique interactable

### void remove_unique_interactable( interactable_id: int ) {#method-remove-unique-interactable}

Remove reference to a unique interactable

### bool has_unique_interactable( interactable_id: int ) {#method-has-unique-interactable}

Check if world references a unique interactable

### void add_region( region_id: int ) {#method-add-region}

Add reference to a region

### void remove_region( region_id: int ) {#method-remove-region}

Remove reference to a region

### bool has_region( region_id: int ) {#method-has-region}

Check if world references a region

### void add_encounter( encounter_id: int ) {#method-add-encounter}

Add reference to an encounter

### void remove_encounter( encounter_id: int ) {#method-remove-encounter}

Remove reference to an encounter

### bool has_encounter( encounter_id: int ) {#method-has-encounter}

Check if world references an encounter

### Array[String] validate() {#method-validate}

Validate this world data

### bool save_to_disk() {#method-save-to-disk}

Save this WorldData to disk

### String get_folder_path() {#method-get-folder-path}

Get the folder containing this world

### int get_unique_object_count() {#method-get-unique-object-count}

Get total count of unique objects referenced

### String get_summary() {#method-get-summary}

Get a summary of this world data

### Dictionary get_display_info() {#method-get-display-info}

Get display information as dictionary

### bool is_properly_configured() {#method-is-properly-configured}

Check if this world data appears to be properly configured


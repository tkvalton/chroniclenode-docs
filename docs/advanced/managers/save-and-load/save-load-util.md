<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SaveLoadUtil

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

SaveLoadUtil - Manages saving and loading game state to/from JSON files Coordinates with SystemHub to gather and restore state from all game systems Uses dependency-aware loading order to ensure entities exist before effects/AI states

## Methods

| | |
|---|---|
| `bool` | [save_game](#method-save-game)( `system_hub: GameHost.SystemHub, save_file_name: String` ) *static* |
| `bool` | [load_game](#method-load-game)( `system_hub: GameHost.SystemHub, save_file_name: String` ) *static* |
| `bool` | [create_player_entities_from_save](#method-create-player-entities-from-save)( `system_hub: GameHost.SystemHub, save_file_name: String` ) *static* |
| `bool` | [restore_all_state_from_save](#method-restore-all-state-from-save)( `system_hub: GameHost.SystemHub, save_file_name: String` ) *static* |
| `bool` | [save_file_exists](#method-save-file-exists)( `save_file_name: String` ) *static* |
| `bool` | [delete_save_file](#method-delete-save-file)( `save_file_name: String` ) *static* |
| `Array[String]` | [get_save_file_list](#method-get-save-file-list)() *static* |
| `int` | [get_world_id_from_save](#method-get-world-id-from-save)( `save_file_name: String` ) *static* |

## Constants

- `String` **SAVE_FILE_PATH** = `"user://saves"`
- `String` **SAVE_FILE_EXTENSION** = `".json"`

## Method descriptions

### bool save_game( system_hub: GameHost.SystemHub, save_file_name: String ) {#method-save-game}

Save game state to a JSON file

### bool load_game( system_hub: GameHost.SystemHub, save_file_name: String ) {#method-load-game}

Load game state from a JSON file

### bool create_player_entities_from_save( system_hub: GameHost.SystemHub, save_file_name: String ) {#method-create-player-entities-from-save}

Create player entities from save file WITHOUT loading their state This allows NPCs to reference players when the world loads

### bool restore_all_state_from_save( system_hub: GameHost.SystemHub, save_file_name: String ) {#method-restore-all-state-from-save}

Restore all saved state after world and entities are loaded

### bool save_file_exists( save_file_name: String ) {#method-save-file-exists}

Check if a save file exists

### bool delete_save_file( save_file_name: String ) {#method-delete-save-file}

Delete a save file

### Array[String] get_save_file_list() {#method-get-save-file-list}

Get list of all save files

### int get_world_id_from_save( save_file_name: String ) {#method-get-world-id-from-save}

Read world ID from save file without loading the entire game Returns -1 if file doesn't exist or can't be read


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerClassLevelRewardEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Editor for PlayerClassDefinition level rewards only Experience requirements are now managed in GameplayConfig

## Variables

| | | |
|---|---|---|
| `PlayerClassDefinition` | [current_player_class](#var-current-player-class) |  |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `int` | [max_level](#var-max-level) | `10  # Default to 10, will be overridden from GameplayConfig` |
| `Array[TreeItem]` | [level_items](#var-level-items) | `[]  # Maps level index to TreeItem` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [load_player_class](#method-load-player-class)( `player_class: PlayerClassDefinition` ) |
| `String` | [get_progression_summary](#method-get-progression-summary)() |
| `Array[String]` | [validate_progression](#method-validate-progression)() |

## Signals

### level_rewards_changed( player_class: PlayerClassDefinition ) {#signal-level-rewards-changed}

### show_info_dialog( title: String, message: String ) {#signal-show-info-dialog}

### show_error_dialog( message: String ) {#signal-show-error-dialog}

## Variable descriptions

### PlayerClassDefinition current_player_class {#var-current-player-class}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### int max_level = 10  # Default to 10, will be overridden from GameplayConfig {#var-max-level}

*No description yet.*

### Array[TreeItem] level_items = []  # Maps level index to TreeItem {#var-level-items}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_player_class( player_class: PlayerClassDefinition ) {#method-load-player-class}

*No description yet.*

### String get_progression_summary() {#method-get-progression-summary}

*No description yet.*

### Array[String] validate_progression() {#method-validate-progression}

*No description yet.*


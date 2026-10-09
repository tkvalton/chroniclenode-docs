<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UISettingsConfig

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Configuration resource for UI system settings

## Description

Stores all customizable UI settings including:

- Mouse cursor textures for different states
- Minimap icon textures for various entity types
- Tactical command icons for RTS-style controls
- UI scene paths for main UI components

## Properties

| | | |
|---|---|---|
| `Texture2D` | [cursor_default](#prop-cursor-default) |  |
| `Texture2D` | [cursor_interact](#prop-cursor-interact) |  |
| `Texture2D` | [cursor_chat](#prop-cursor-chat) |  |
| `Texture2D` | [cursor_attack](#prop-cursor-attack) |  |
| `Texture2D` | [cursor_target](#prop-cursor-target) |  |
| `Texture2D` | [minimap_entity_marker](#prop-minimap-entity-marker) |  |
| `Texture2D` | [minimap_current_player_marker](#prop-minimap-current-player-marker) |  |
| `Texture2D` | [minimap_quest_giver](#prop-minimap-quest-giver) |  |
| `Texture2D` | [minimap_quest_npc_enemy](#prop-minimap-quest-npc-enemy) |  |
| `Texture2D` | [minimap_quest_interactable](#prop-minimap-quest-interactable) |  |
| `Texture2D` | [minimap_interactable_resource](#prop-minimap-interactable-resource) |  |
| `Texture2D` | [minimap_treasure](#prop-minimap-treasure) |  |
| `Texture2D` | [minimap_rabbithole](#prop-minimap-rabbithole) |  |
| `Texture2D` | [tactical_movement](#prop-tactical-movement) |  |
| `Texture2D` | [tactical_attack](#prop-tactical-attack) |  |
| `Texture2D` | [tactical_heal](#prop-tactical-heal) |  |
| `Texture2D` | [tactical_interact](#prop-tactical-interact) |  |
| `Texture2D` | [tactical_target](#prop-tactical-target) |  |
| `String` | [ui_scene_main_menu](#prop-ui-scene-main-menu) | `"res://addons/chroniclenode/ui_scenes/menus/main/main_men...` |
| `String` | [ui_scene_character_creation](#prop-ui-scene-character-creation) | `"res://addons/chroniclenode/ui_scenes/menus/character_cre...` |
| `String` | [ui_scene_in_game](#prop-ui-scene-in-game) | `"res://addons/chroniclenode/ui_scenes/in_game/in_game_ui_...` |
| `String` | [ui_scene_loading_screen](#prop-ui-scene-loading-screen) | `"res://addons/chroniclenode/ui_scenes/loading_screen/load...` |
| `String` | [ui_scene_nameplate](#prop-ui-scene-nameplate) | `"res://addons/chroniclenode/ui_scenes/in_game/HUD/compone...` |
| `String` | [item_tooltip](#prop-item-tooltip) | `"res://addons/chroniclenode/ui_scenes/in_game/tooltips/it...` |
| `String` | [ability_tooltip](#prop-ability-tooltip) | `"res://addons/chroniclenode/ui_scenes/in_game/tooltips/ab...` |
| `String` | [effect_tooltip](#prop-effect-tooltip) | `"res://addons/chroniclenode/ui_scenes/in_game/tooltips/to...` |
| `String` | [skill_node_tooltip](#prop-skill-node-tooltip) | `"res://addons/chroniclenode/ui_scenes/in_game/tooltips/to...` |
| `String` | [description_tooltip](#prop-description-tooltip) | `"res://addons/chroniclenode/ui_scenes/in_game/tooltips/to...` |

## Methods

| | |
|---|---|
| `Dictionary` | [validate](#method-validate)() |
| `UISettingsConfig` | [create_default](#method-create-default)() *static* |
| `UISettingsConfig` | [get_config](#method-get-config)() *static* |

## Constants

- `const` **CONFIG_PATH** = `"res://src/data/config_data/ui_settings_config.tres"`

## Property descriptions

*Mouse Cursor Textures*

### Texture2D cursor_default {#prop-cursor-default}

Default mouse cursor texture

### Texture2D cursor_interact {#prop-cursor-interact}

Cursor for hovering over interactive elements

### Texture2D cursor_chat {#prop-cursor-chat}

Cursor for chat/dialogue interactions

### Texture2D cursor_attack {#prop-cursor-attack}

Cursor for attack actions

### Texture2D cursor_target {#prop-cursor-target}

Cursor for targeting abilities/spells

*Minimap Icon Textures*

### Texture2D minimap_entity_marker {#prop-minimap-entity-marker}

Icon for entity markers on minimap

### Texture2D minimap_current_player_marker {#prop-minimap-current-player-marker}

Icon for current player markers on minimap

### Texture2D minimap_quest_giver {#prop-minimap-quest-giver}

Icon for quest giver NPCs on minimap

### Texture2D minimap_quest_npc_enemy {#prop-minimap-quest-npc-enemy}

Icon for enemy NPCs on minimap

### Texture2D minimap_quest_interactable {#prop-minimap-quest-interactable}

Icon for quest interactable objects on minimap

### Texture2D minimap_interactable_resource {#prop-minimap-interactable-resource}

Icon for interactable resource nodes on minimap

### Texture2D minimap_treasure {#prop-minimap-treasure}

Icon for treasure/loot on minimap

### Texture2D minimap_rabbithole {#prop-minimap-rabbithole}

Icon for rabbit holes or similar on minimap

*Tactical Command Icons*

### Texture2D tactical_movement {#prop-tactical-movement}

Icon for movement command

### Texture2D tactical_attack {#prop-tactical-attack}

Icon for attack command

### Texture2D tactical_heal {#prop-tactical-heal}

Icon for heal command

### Texture2D tactical_interact {#prop-tactical-interact}

Icon for interact command

### Texture2D tactical_target {#prop-tactical-target}

Icon for target command

*UI Scene Paths*

### String ui_scene_main_menu = "res://addons/chroniclenode/ui_scenes/menus/main/main_menu_t {#prop-ui-scene-main-menu}

Main menu scene for game start

### String ui_scene_character_creation = "res://addons/chroniclenode/ui_scenes/menus/character_creati {#prop-ui-scene-character-creation}

Character creation menu scene

### String ui_scene_in_game = "res://addons/chroniclenode/ui_scenes/in_game/in_game_ui_tem {#prop-ui-scene-in-game}

In-game UI scene with HUD and panels

### String ui_scene_loading_screen = "res://addons/chroniclenode/ui_scenes/loading_screen/loading {#prop-ui-scene-loading-screen}

Loading screen scene

### String ui_scene_nameplate = "res://addons/chroniclenode/ui_scenes/in_game/HUD/components {#prop-ui-scene-nameplate}

Nameplate scene

*Tactical Command Icons*

### String item_tooltip = "res://addons/chroniclenode/ui_scenes/in_game/tooltips/items {#prop-item-tooltip}

Icon for movement command

### String ability_tooltip = "res://addons/chroniclenode/ui_scenes/in_game/tooltips/abili {#prop-ability-tooltip}

Icon for attack command

### String effect_tooltip = "res://addons/chroniclenode/ui_scenes/in_game/tooltips/toolt {#prop-effect-tooltip}

Icon for heal command

### String skill_node_tooltip = "res://addons/chroniclenode/ui_scenes/in_game/tooltips/toolt {#prop-skill-node-tooltip}

Icon for interact command

### String description_tooltip = "res://addons/chroniclenode/ui_scenes/in_game/tooltips/toolt {#prop-description-tooltip}

Icon for target command

## Method descriptions

### Dictionary validate() {#method-validate}

Validate that all required paths exist

### UISettingsConfig create_default() {#method-create-default}

Create default configuration

### UISettingsConfig get_config() {#method-get-config}

*No description yet.*


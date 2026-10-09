<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GameEditorMainView

**Inherits:** [PanelContainer](https://docs.godotengine.org/en/stable/classes/class_panelcontainer.html)

Main container for the unified game editor system

## Variables

| | | |
|---|---|---|
| `ResourceManager  # For ResourceManager-based editors` | [resource_manager](#var-resource-manager) |  |
| `EditorPlugin` | [plugin](#var-plugin) |  |
| `DockState` | [dock_state](#var-dock-state) | `DockState.DOCKED` |
| `Window` | [floating_window](#var-floating-window) |  |
| `ViewMode` | [current_view_mode](#var-current-view-mode) | `ViewMode.WORLD` |
| `String` | [current_view](#var-current-view) | `"maps"` |
| `Array` | [entity_stats_panels](#var-entity-stats-panels) | `[]` |
| `Array` | [tags_panels](#var-tags-panels) | `[]` |
| `Array` | [items_panels](#var-items-panels) | `[]` |
| `Array` | [equipment_definitions_panels](#var-equipment-definitions-panels) | `[]` |
| `Array` | [entities_panels](#var-entities-panels) | `[]` |
| `Array` | [behaviors_panels](#var-behaviors-panels) | `[]` |
| `Array` | [abilities_effects_panels](#var-abilities-effects-panels) | `[]` |
| `Array` | [events_quests_panels](#var-events-quests-panels) | `[]` |
| `Array` | [world_panels](#var-world-panels) | `[]` |
| `Array` | [assets_panels](#var-assets-panels) | `[]` |
| `Array` | [game_settings_panels](#var-game-settings-panels) | `[]` |

## Methods

| | |
|---|---|
| `void` | [make_floating](#method-make-floating)() |
| `void` | [dock_to_editor](#method-dock-to-editor)() |
| `bool` | [is_floating](#method-is-floating)() |
| `void` | [cleanup_floating_window](#method-cleanup-floating-window)() |
| `void` | [setup_plugin_reference](#method-setup-plugin-reference)( `p_plugin: EditorPlugin` ) |
| `Control` | [get_current_editor](#method-get-current-editor)() |
| `void` | [apply_theme](#method-apply-theme)() |

## Signals

### dock_state_changed( is_floating: bool ) {#signal-dock-state-changed}

## Enumerations

### enum DockState {#enum-dockstate}

- **DOCKED** = `0`
- **FLOATING** = `1`

### enum ViewMode {#enum-viewmode}

- **WORLD** = `0`
- **EVENTS_QUESTS** = `1`
- **ENTITIES** = `2`
- **ABILITIES_EFFECTS** = `3`
- **BEHAVIORS** = `4`
- **ENTITY_STATS** = `5`
- **TAGS** = `6`
- **ITEMS** = `7`
- **EQUIPMENT_DEFINITIONS** = `8`
- **ASSETS** = `9`
- **GAME_SETTINGS** = `10`

## Variable descriptions

### ResourceManager  # For ResourceManager-based editors resource_manager {#var-resource-manager}

*No description yet.*

### EditorPlugin plugin {#var-plugin}

*No description yet.*

### DockState dock_state = DockState.DOCKED {#var-dock-state}

*No description yet.*

### Window floating_window {#var-floating-window}

*No description yet.*

### ViewMode current_view_mode = ViewMode.WORLD {#var-current-view-mode}

*No description yet.*

### String current_view = "maps" {#var-current-view}

*No description yet.*

### Array entity_stats_panels = [] {#var-entity-stats-panels}

*No description yet.*

### Array tags_panels = [] {#var-tags-panels}

*No description yet.*

### Array items_panels = [] {#var-items-panels}

*No description yet.*

### Array equipment_definitions_panels = [] {#var-equipment-definitions-panels}

*No description yet.*

### Array entities_panels = [] {#var-entities-panels}

*No description yet.*

### Array behaviors_panels = [] {#var-behaviors-panels}

*No description yet.*

### Array abilities_effects_panels = [] {#var-abilities-effects-panels}

*No description yet.*

### Array events_quests_panels = [] {#var-events-quests-panels}

*No description yet.*

### Array world_panels = [] {#var-world-panels}

*No description yet.*

### Array assets_panels = [] {#var-assets-panels}

*No description yet.*

### Array game_settings_panels = [] {#var-game-settings-panels}

*No description yet.*

## Method descriptions

### void make_floating() {#method-make-floating}

*No description yet.*

### void dock_to_editor() {#method-dock-to-editor}

*No description yet.*

### bool is_floating() {#method-is-floating}

*No description yet.*

### void cleanup_floating_window() {#method-cleanup-floating-window}

*No description yet.*

### void setup_plugin_reference( p_plugin: EditorPlugin ) {#method-setup-plugin-reference}

*No description yet.*

### Control get_current_editor() {#method-get-current-editor}

*No description yet.*

### void apply_theme() {#method-apply-theme}

*No description yet.*


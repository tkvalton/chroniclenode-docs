<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldDatabaseEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The editor of the Worlds tab (World &gt; Worlds): lists the world scenes with a search bar and a category filter, and edits the properties of the selected world (loading screen, persistence, level, audio, time, sun, sky and weather).

## Variables

| | | |
|---|---|---|
| `WorldZonesSection` | [zones_section](#var-zones-section) |  |
| `WorldGroundSection` | [ground_section](#var-ground-section) |  |
| `Array[WorldData]` | [all_worlds](#var-all-worlds) | `[]` |
| `Array[WorldData]` | [filtered_worlds](#var-filtered-worlds) | `[]` |
| `int` | [selected_world_index](#var-selected-world-index) | `-1` |
| `WorldData` | [current_world_data](#var-current-world-data) | `null` |
| `String` | [current_category_filter](#var-current-category-filter) | `""` |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `OptionButton` | [weather_config_option](#var-weather-config-option) | `null` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [refresh_audio_album_menu](#method-refresh-audio-album-menu)() |

## Variable descriptions

### WorldZonesSection zones_section {#var-zones-section}

The Zones section (made in code)

### WorldGroundSection ground_section {#var-ground-section}

*No description yet.*

### Array[WorldData] all_worlds = [] {#var-all-worlds}

*No description yet.*

### Array[WorldData] filtered_worlds = [] {#var-filtered-worlds}

*No description yet.*

### int selected_world_index = -1 {#var-selected-world-index}

*No description yet.*

### WorldData current_world_data = null {#var-current-world-data}

*No description yet.*

### String current_category_filter = "" {#var-current-category-filter}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### OptionButton weather_config_option = null {#var-weather-config-option}

The list of the default weather of the world: a weather of the project (World Configs &gt; Weather), or clear

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void refresh_audio_album_menu() {#method-refresh-audio-album-menu}

*No description yet.*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatsDataEditor

**Inherits:** `BoxContainer`

Unified editor for StatsData configuration Works for both EntityDefinition and InteractableObject stats

## Variables

| | | |
|---|---|---|
| `StatsData` | [current_stats_data](#var-current-stats-data) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `bool` | [is_entity_mode](#var-is-entity-mode) | `true  # true = entity, false = interactable` |
| `Dictionary` | [section_collapsed_states](#var-section-collapsed-states) | `{ ... }` |

## Methods

| | |
|---|---|
| `void` | [set_entity_mode](#method-set-entity-mode)( `enabled: bool` ) |
| `void` | [load_stats_data](#method-load-stats-data)( `stats_data: StatsData` ) |

## Signals

### stats_configuration_changed() {#signal-stats-configuration-changed}

### show_info_dialog( title: String, message: String ) {#signal-show-info-dialog}

### show_error_dialog( message: String ) {#signal-show-error-dialog}

## Enumerations

### enum ContextMenuId {#enum-contextmenuid}

- **REMOVE_POOL** = `100`
- **CHANGE_STAT_BASE_VALUE** = `0`
- **TOGGLE_STAT_ACTIVE** = `1`
- **REMOVE_IMMUNITY** = `300`
- **EDIT_POOL_VALUES** = `400`

## Variable descriptions

### StatsData current_stats_data {#var-current-stats-data}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### bool is_entity_mode = true  # true = entity, false = interactable {#var-is-entity-mode}

*No description yet.*

### Dictionary section_collapsed_states {#var-section-collapsed-states}

*No description yet.*

## Method descriptions

### void set_entity_mode( enabled: bool ) {#method-set-entity-mode}

Set whether this editor is for entities (true) or interactables (false)

### void load_stats_data( stats_data: StatsData ) {#method-load-stats-data}

Load StatsData for editing


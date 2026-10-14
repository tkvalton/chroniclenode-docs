<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatsDataEditor

**Inherits:** `BoxContainer`

Unified editor for StatsData configuration Works for both EntityDefinition and InteractableObject stats

## Variables

| | | |
|---|---|---|
| `SpinBox` | [carry_capacity_spin](#var-carry-capacity-spin) | `null` |
| `StatsData` | [current_stats_data](#var-current-stats-data) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Resource` | [template_holder](#var-template-holder) |  |
| `bool` | [is_entity_mode](#var-is-entity-mode) | `true  # true = entity, false = interactable` |
| `Dictionary` | [section_collapsed_states](#var-section-collapsed-states) | `{ ... }` |

## Methods

| | |
|---|---|
| `void` | [set_entity_mode](#method-set-entity-mode)( `enabled: bool` ) |
| `void` | [load_stats_data](#method-load-stats-data)( `stats_data: StatsData` ) |
| `void` | [set_template_holder](#method-set-template-holder)( `holder: Resource` ) |

## Signals

### stats_configuration_changed() {#signal-stats-configuration-changed}

### show_info_dialog( title: String, message: String ) {#signal-show-info-dialog}

### show_error_dialog( message: String ) {#signal-show-error-dialog}

## Enumerations

### enum ContextMenuId {#enum-contextmenuid}

- **REMOVE_POOL** = `100`
- **CHANGE_STAT_BASE_VALUE** = `0`
- **TOGGLE_STAT_ACTIVE** = `1`
- **ALWAYS_THIS_VALUE** = `2`
- **RESET_TO_TEMPLATE** = `3`
- **REMOVE_IMMUNITY** = `300`
- **EDIT_POOL_VALUES** = `400`

## Constants

- `int` **FILTER_ALL** = `0`
- `int` **FILTER_NO_GROUP** = `-2`

## Variable descriptions

### SpinBox carry_capacity_spin = null {#var-carry-capacity-spin}

The carry capacity row is built in code (next to the bag slots)

### StatsData current_stats_data {#var-current-stats-data}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Resource template_holder {#var-template-holder}

The NPC or interactable these stats are of, when it can follow a template (the list shows what differs from the template, the growth is the template's)

### bool is_entity_mode = true  # true = entity, false = interactable {#var-is-entity-mode}

*No description yet.*

### Dictionary section_collapsed_states {#var-section-collapsed-states}

*No description yet.*

## Method descriptions

### void set_entity_mode( enabled: bool ) {#method-set-entity-mode}

Set whether this editor is for entities (true) or interactables (false)

### void load_stats_data( stats_data: StatsData ) {#method-load-stats-data}

Load StatsData for editing

### void set_template_holder( holder: Resource ) {#method-set-template-holder}

Tells the editor whose stats these are, so that it can show what differs from the template the entity follows. Call before load_stats_data (null: no template)


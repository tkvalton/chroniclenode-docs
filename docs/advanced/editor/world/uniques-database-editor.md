<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UniquesDatabaseEditor

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

## Variables

| | | |
|---|---|---|
| `UniqueType` | [current_type](#var-current-type) | `UniqueType.ENTITIES` |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `String` | [current_search_text](#var-current-search-text) | `""` |
| `int` | [current_map_filter](#var-current-map-filter) | `-1  # -1 means "All Maps"` |

## Methods

| | |
|---|---|
| `void` | [refresh_list](#method-refresh-list)() |
| `Resource` | [get_selected_unique](#method-get-selected-unique)() |
| `void` | [select_unique_by_id](#method-select-unique-by-id)( `unique_id: int` ) |
| `void` | [filter_by_map](#method-filter-by-map)( `map_id: int` ) |
| `void` | [clear_filter](#method-clear-filter)() |

## Signals

### unique_selected( unique_data: Resource ) {#signal-unique-selected}

### unique_double_clicked( unique_data: Resource ) {#signal-unique-double-clicked}

## Enumerations

### enum UniqueType {#enum-uniquetype}

- **ENTITIES** = `0`
- **INTERACTABLES** = `1`
- **REGIONS** = `2`
- **ENCOUNTERS** = `3`

## Variable descriptions

### UniqueType current_type = UniqueType.ENTITIES {#var-current-type}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### String current_search_text = "" {#var-current-search-text}

*No description yet.*

### int current_map_filter = -1  # -1 means "All Maps" {#var-current-map-filter}

*No description yet.*

## Method descriptions

### void refresh_list() {#method-refresh-list}

*No description yet.*

### Resource get_selected_unique() {#method-get-selected-unique}

*No description yet.*

### void select_unique_by_id( unique_id: int ) {#method-select-unique-by-id}

*No description yet.*

### void filter_by_map( map_id: int ) {#method-filter-by-map}

*No description yet.*

### void clear_filter() {#method-clear-filter}

*No description yet.*


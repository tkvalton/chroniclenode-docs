<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ModelSceneDatabaseEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Variables

| | | |
|---|---|---|
| `Label` | [skeleton_type_label](#var-skeleton-type-label) |  |
| `Label` | [equipment_tag_label](#var-equipment-tag-label) |  |
| `VBoxContainer` | [validation_container](#var-validation-container) |  |
| `Label` | [validation_header](#var-validation-header) |  |
| `ItemList` | [validation_list](#var-validation-list) |  |
| `Array[Dictionary]` | [skeleton_data](#var-skeleton-data) | `[]` |
| `Array[Dictionary]` | [filtered_skeletons](#var-filtered-skeletons) | `[]` |
| `Array[Dictionary]` | [interactable_data](#var-interactable-data) | `[]` |
| `Array[Dictionary]` | [filtered_interactables](#var-filtered-interactables) | `[]` |
| `String` | [selected_file_path](#var-selected-file-path) | `""` |
| `String` | [selected_skeleton_name](#var-selected-skeleton-name) | `""` |
| `String` | [selected_skeleton_path](#var-selected-skeleton-path) | `""` |
| `String` | [selected_interactable_name](#var-selected-interactable-name) | `""` |
| `String` | [selected_interactable_path](#var-selected-interactable-path) | `""` |
| `Node` | [current_skeleton_instance](#var-current-skeleton-instance) | `null` |
| `SelectionType` | [current_selection_type](#var-current-selection-type) | `SelectionType.NONE` |

## Methods

| | |
|---|---|
| `void` | [refresh_database](#method-refresh-database)() |
| `String` | [get_selected_skeleton_name](#method-get-selected-skeleton-name)() |
| `String` | [get_selected_skeleton_path](#method-get-selected-skeleton-path)() |
| `String` | [get_selected_interactable_name](#method-get-selected-interactable-name)() |
| `String` | [get_selected_interactable_path](#method-get-selected-interactable-path)() |
| `Array[Dictionary]` | [validate_models](#method-validate-models)() |

## Enumerations

### enum SelectionType {#enum-selectiontype}

- **NONE** = `0`
- **SKELETON** = `1`
- **INTERACTABLE** = `2`

## Variable descriptions

### Label skeleton_type_label {#var-skeleton-type-label}

*No description yet.*

### Label equipment_tag_label {#var-equipment-tag-label}

*No description yet.*

### VBoxContainer validation_container {#var-validation-container}

*No description yet.*

### Label validation_header {#var-validation-header}

*No description yet.*

### ItemList validation_list {#var-validation-list}

*No description yet.*

### Array[Dictionary] skeleton_data = [] {#var-skeleton-data}

*No description yet.*

### Array[Dictionary] filtered_skeletons = [] {#var-filtered-skeletons}

*No description yet.*

### Array[Dictionary] interactable_data = [] {#var-interactable-data}

*No description yet.*

### Array[Dictionary] filtered_interactables = [] {#var-filtered-interactables}

*No description yet.*

### String selected_file_path = "" {#var-selected-file-path}

*No description yet.*

### String selected_skeleton_name = "" {#var-selected-skeleton-name}

*No description yet.*

### String selected_skeleton_path = "" {#var-selected-skeleton-path}

*No description yet.*

### String selected_interactable_name = "" {#var-selected-interactable-name}

*No description yet.*

### String selected_interactable_path = "" {#var-selected-interactable-path}

*No description yet.*

### Node current_skeleton_instance = null {#var-current-skeleton-instance}

*No description yet.*

### SelectionType current_selection_type = SelectionType.NONE {#var-current-selection-type}

*No description yet.*

## Method descriptions

### void refresh_database() {#method-refresh-database}

*No description yet.*

### String get_selected_skeleton_name() {#method-get-selected-skeleton-name}

*No description yet.*

### String get_selected_skeleton_path() {#method-get-selected-skeleton-path}

*No description yet.*

### String get_selected_interactable_name() {#method-get-selected-interactable-name}

*No description yet.*

### String get_selected_interactable_path() {#method-get-selected-interactable-path}

*No description yet.*

### Array[Dictionary] validate_models() {#method-validate-models}

*No description yet.*


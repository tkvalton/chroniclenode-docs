<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ToggleGroupsResource

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Resource class for managing toggle groups used by abilities Provides centralized storage and management of toggle group names

## Properties

| | | |
|---|---|---|
| `Array[String]` | [toggle_groups](#prop-toggle-groups) | `[]` |

## Methods

| | |
|---|---|
| `Array[String]` | [get_toggle_groups](#method-get-toggle-groups)() |
| `void` | [set_toggle_groups](#method-set-toggle-groups)( `new_groups: Array[String]` ) |
| `bool` | [add_toggle_group](#method-add-toggle-group)( `group_name: String` ) |
| `bool` | [remove_toggle_group](#method-remove-toggle-group)( `group_name: String` ) |
| `bool` | [has_toggle_group](#method-has-toggle-group)( `group_name: String` ) |
| `bool` | [rename_toggle_group](#method-rename-toggle-group)( `old_name: String, new_name: String` ) |
| `int` | [get_toggle_group_count](#method-get-toggle-group-count)() |
| `void` | [clear_toggle_groups](#method-clear-toggle-groups)() |
| `String` | [get_toggle_group_at](#method-get-toggle-group-at)( `index: int` ) |
| `bool` | [is_valid_group_name](#method-is-valid-group-name)( `group_name: String` ) |
| `Array[String]` | [get_display_names](#method-get-display-names)() |

## Property descriptions

### Array[String] toggle_groups = [] {#prop-toggle-groups}

*No description yet.*

## Method descriptions

### Array[String] get_toggle_groups() {#method-get-toggle-groups}

Get all toggle groups

### void set_toggle_groups( new_groups: Array[String] ) {#method-set-toggle-groups}

Set the entire toggle groups array

### bool add_toggle_group( group_name: String ) {#method-add-toggle-group}

Add a new toggle group

### bool remove_toggle_group( group_name: String ) {#method-remove-toggle-group}

Remove a toggle group

### bool has_toggle_group( group_name: String ) {#method-has-toggle-group}

Check if a toggle group exists

### bool rename_toggle_group( old_name: String, new_name: String ) {#method-rename-toggle-group}

Rename a toggle group

### int get_toggle_group_count() {#method-get-toggle-group-count}

Get toggle group count

### void clear_toggle_groups() {#method-clear-toggle-groups}

Clear all toggle groups

### String get_toggle_group_at( index: int ) {#method-get-toggle-group-at}

Get toggle group at index

### bool is_valid_group_name( group_name: String ) {#method-is-valid-group-name}

Validate toggle group name

### Array[String] get_display_names() {#method-get-display-names}

Get display names for UI (could be customized later)


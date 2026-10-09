<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EditorFileList

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Universal file list that works with any resource type via ResourceManager Supports both "browse all files" and "open specific files" patterns

## Variables

| | | |
|---|---|---|
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `bool` | [auto_populate_enabled](#var-auto-populate-enabled) | `false` |
| `String` | [resource_type](#var-resource-type) | `""` |
| `Dictionary` | [open_files](#var-open-files) | `{}  # {path: {resource: Resource, display_name: String}}` |
| `String` | [current_file_path](#var-current-file-path) | `""` |
| `Texture2D` | [file_icon](#var-file-icon) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager` ) |
| `void` | [configure_auto_population](#method-configure-auto-population)( `p_resource_type: String, p_auto_populate: bool` ) |
| `void` | [set_file_icon](#method-set-file-icon)( `icon: Texture2D` ) |
| `void` | [populate_all_files](#method-populate-all-files)() |
| `void` | [refresh_from_manager](#method-refresh-from-manager)() |
| `void` | [add_file](#method-add-file)( `file_path: String, resource: Resource` ) |
| `void` | [remove_file](#method-remove-file)( `file_path: String` ) |
| `void` | [update_file_display_name](#method-update-file-display-name)( `file_path: String, resource: Resource` ) |
| `void` | [select_file](#method-select-file)( `file_path: String` ) |
| `Array[String]` | [get_open_files](#method-get-open-files)() |
| `bool` | [has_file](#method-has-file)( `file_path: String` ) |
| `String` | [get_selected_file](#method-get-selected-file)() |
| `Resource` | [get_selected_resource](#method-get-selected-resource)() |
| `int` | [get_file_count](#method-get-file-count)() |
| `void` | [clear_all_files](#method-clear-all-files)() |
| `void` | [focus_filter](#method-focus-filter)() |
| `Resource` | [get_resource](#method-get-resource)( `file_path: String` ) |
| `void` | [set_filter_placeholder](#method-set-filter-placeholder)( `text: String` ) |
| `bool` | [is_auto_populate_enabled](#method-is-auto-populate-enabled)() |
| `String` | [get_resource_type](#method-get-resource-type)() |

## Signals

### file_selected( file_path: String, resource: Resource ) {#signal-file-selected}

### file_double_clicked( file_path: String, resource: Resource ) {#signal-file-double-clicked}

### file_popup_menu_requested( at_position: Vector2, file_path: String, resource: Resource ) {#signal-file-popup-menu-requested}

## Variable descriptions

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### bool auto_populate_enabled = false {#var-auto-populate-enabled}

*No description yet.*

### String resource_type = "" {#var-resource-type}

*No description yet.*

### Dictionary open_files =   # path: resource: Resource, display_name: String {#var-open-files}

*No description yet.*

### String current_file_path = "" {#var-current-file-path}

*No description yet.*

### Texture2D file_icon {#var-file-icon}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager ) {#method-setup-managers}

*No description yet.*

### void configure_auto_population( p_resource_type: String, p_auto_populate: bool ) {#method-configure-auto-population}

*No description yet.*

### void set_file_icon( icon: Texture2D ) {#method-set-file-icon}

*No description yet.*

### void populate_all_files() {#method-populate-all-files}

Populate the list with all files of the configured resource type

### void refresh_from_manager() {#method-refresh-from-manager}

Refresh from resource manager (useful when files are added/removed externally)

### void add_file( file_path: String, resource: Resource ) {#method-add-file}

Add a file to the open files list

### void remove_file( file_path: String ) {#method-remove-file}

Remove a file from the open files list

### void update_file_display_name( file_path: String, resource: Resource ) {#method-update-file-display-name}

Update display name for a file (when resource properties change)

### void select_file( file_path: String ) {#method-select-file}

Select a specific file

### Array[String] get_open_files() {#method-get-open-files}

Get all open file paths

### bool has_file( file_path: String ) {#method-has-file}

Check if a file is open

### String get_selected_file() {#method-get-selected-file}

Get the currently selected file path

### Resource get_selected_resource() {#method-get-selected-resource}

Get the currently selected resource

### int get_file_count() {#method-get-file-count}

Get file count

### void clear_all_files() {#method-clear-all-files}

Clear all files

### void focus_filter() {#method-focus-filter}

Focus the filter input

### Resource get_resource( file_path: String ) {#method-get-resource}

Get resource for file path

### void set_filter_placeholder( text: String ) {#method-set-filter-placeholder}

Set placeholder text for filter

### bool is_auto_populate_enabled() {#method-is-auto-populate-enabled}

Check if auto-population is enabled

### String get_resource_type() {#method-get-resource-type}

Get configured resource type


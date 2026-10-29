<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FoliageEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The Foliage tab (Assets &gt; Foliage): the files of the two folders of the foliage library as a tree with a picture of each, and the entry of the file you select. The folders: src/data/foliage/ground_scatter/   meshes: grass, weeds, pebbles, small rocks src/data/foliage/foliage/          scenes: trees, bushes, big rocks (Open in Editor opens the scene) An entry is made for every file the tab finds; a variant (Add variant) is another entry for the same file, usually with other materials. See docs: Assets &gt; Foliage.

## Variables

| | | |
|---|---|---|
| `LineEdit` | [search_bar](#var-search-bar) |  |
| `OptionButton` | [filter_option](#var-filter-option) |  |
| `Button` | [refresh_button](#var-refresh-button) |  |
| `MenuButton` | [thumbnails_button](#var-thumbnails-button) |  |
| `Label` | [status_label](#var-status-label) |  |
| `Tree` | [tree](#var-tree) |  |
| `VBoxContainer` | [detail](#var-detail) |  |
| `TextureRect` | [preview_rect](#var-preview-rect) |  |
| `Label` | [title_label](#var-title-label) |  |
| `Label` | [path_label](#var-path-label) |  |
| `Label` | [kind_label](#var-kind-label) |  |
| `LineEdit` | [name_edit](#var-name-edit) |  |
| `Button` | [open_button](#var-open-button) |  |
| `Button` | [show_button](#var-show-button) |  |
| `Button` | [variant_button](#var-variant-button) |  |
| `Button` | [remove_button](#var-remove-button) |  |
| `Label` | [problems_label](#var-problems-label) |  |
| `VBoxContainer` | [materials_box](#var-materials-box) |  |
| `VBoxContainer` | [materials_section](#var-materials-section) |  |
| `ConfirmationDialog` | [variant_dialog](#var-variant-dialog) |  |
| `LineEdit` | [variant_name_edit](#var-variant-name-edit) |  |
| `FoliageDefinition` | [current_entry](#var-current-entry) | `null` |
| `VBoxContainer` | [group_box](#var-group-box) |  |
| `Label` | [member_note](#var-member-note) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `_resource_manager: Variant = null, _dialog_manager: Variant = null` ) |
| `void` | [refresh](#method-refresh)() |
| `FoliageDefinition` | [make_variant](#method-make-variant)( `variant_name: String` ) |
| `void` | [remove_or_reset](#method-remove-or-reset)() |

## Constants

- `float` **PREVIEW_SIZE** = `160.0`
- `Array[String]` **LOOK_PROPERTIES** = `["scale_min", "scale_max", "height_min", "height_max", "rotation_offset:x", "...` - How a scene looks (a member keeps these; a group does not have them) and where and how much it grows (the group has these; a member does not).
- `Array[String]` **GROWTH_PROPERTIES** = `["density", "spacing", "slope_min", "slope_max", "altitude_min", "altitude_ma...`

## Variable descriptions

### LineEdit search_bar {#var-search-bar}

*No description yet.*

### OptionButton filter_option {#var-filter-option}

*No description yet.*

### Button refresh_button {#var-refresh-button}

*No description yet.*

### MenuButton thumbnails_button {#var-thumbnails-button}

*No description yet.*

### Label status_label {#var-status-label}

*No description yet.*

### Tree tree {#var-tree}

*No description yet.*

### VBoxContainer detail {#var-detail}

*No description yet.*

### TextureRect preview_rect {#var-preview-rect}

*No description yet.*

### Label title_label {#var-title-label}

*No description yet.*

### Label path_label {#var-path-label}

*No description yet.*

### Label kind_label {#var-kind-label}

*No description yet.*

### LineEdit name_edit {#var-name-edit}

*No description yet.*

### Button open_button {#var-open-button}

*No description yet.*

### Button show_button {#var-show-button}

*No description yet.*

### Button variant_button {#var-variant-button}

*No description yet.*

### Button remove_button {#var-remove-button}

*No description yet.*

### Label problems_label {#var-problems-label}

*No description yet.*

### VBoxContainer materials_box {#var-materials-box}

*No description yet.*

### VBoxContainer materials_section {#var-materials-section}

*No description yet.*

### ConfirmationDialog variant_dialog {#var-variant-dialog}

*No description yet.*

### LineEdit variant_name_edit {#var-variant-name-edit}

*No description yet.*

### FoliageDefinition current_entry = null {#var-current-entry}

*No description yet.*

### VBoxContainer group_box {#var-group-box}

*No description yet.*

### Label member_note {#var-member-note}

*No description yet.*

## Method descriptions

### void setup_managers( _resource_manager: Variant = null, _dialog_manager: Variant = null ) {#method-setup-managers}

*No description yet.*

### void refresh() {#method-refresh}

Looks for new, moved and missing files (making the entries they need) and shows the tree again.

### FoliageDefinition make_variant( variant_name: String ) {#method-make-variant}

Makes a variant of the selected entry and selects it.

### void remove_or_reset() {#method-remove-or-reset}

Deletes the selected variant or missing entry, or puts the entry of a file back to the numbers of a new one.


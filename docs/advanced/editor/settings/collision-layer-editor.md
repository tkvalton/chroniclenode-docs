<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CollisionLayerEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Collision Layer Configuration Editor Integrated into the Game Settings category

## Variables

| | | |
|---|---|---|
| `ItemList` | [layer_list](#var-layer-list) |  |
| `GridContainer` | [mask_grid](#var-mask-grid) |  |
| `Label` | [layer_info_label](#var-layer-info-label) |  |
| `Button` | [save_button](#var-save-button) |  |
| `Button` | [load_button](#var-load-button) |  |
| `Button` | [reset_button](#var-reset-button) |  |
| `Button` | [reset_all_button](#var-reset-all-button) |  |
| `Label` | [validation_label](#var-validation-label) |  |
| `CollisionLayerConfig` | [config](#var-config) |  |
| `int` | [current_selected_layer](#var-current-selected-layer) | `-1` |
| `Dictionary` | [checkboxes](#var-checkboxes) | `{}  # [layer_id][target_layer_id] = CheckBox` |
| `bool` | [is_dirty](#var-is-dirty) | `false` |
| `Dictionary` | [layer_definitions](#var-layer-definitions) | `{ ... }` |

## Methods

| | |
|---|---|
| `bool` | [has_unsaved_changes](#method-has-unsaved-changes)() |
| `void` | [force_save](#method-force-save)() |
| `CollisionLayerConfig` | [get_config](#method-get-config)() |

## Signals

### config_saved() {#signal-config-saved}

### config_loaded() {#signal-config-loaded}

## Constants

- `String` **CONFIG_PATH** = `"res://src/data/config_data/collision_layer_config.tres"`

## Variable descriptions

### ItemList layer_list {#var-layer-list}

*No description yet.*

### GridContainer mask_grid {#var-mask-grid}

*No description yet.*

### Label layer_info_label {#var-layer-info-label}

*No description yet.*

### Button save_button {#var-save-button}

*No description yet.*

### Button load_button {#var-load-button}

*No description yet.*

### Button reset_button {#var-reset-button}

*No description yet.*

### Button reset_all_button {#var-reset-all-button}

*No description yet.*

### Label validation_label {#var-validation-label}

*No description yet.*

### CollisionLayerConfig config {#var-config}

*No description yet.*

### int current_selected_layer = -1 {#var-current-selected-layer}

*No description yet.*

### Dictionary checkboxes =   # [layer_id][target_layer_id] = CheckBox {#var-checkboxes}

*No description yet.*

### bool is_dirty = false {#var-is-dirty}

*No description yet.*

### Dictionary layer_definitions {#var-layer-definitions}

*No description yet.*

## Method descriptions

### bool has_unsaved_changes() {#method-has-unsaved-changes}

Check if there are unsaved changes

### void force_save() {#method-force-save}

Force save current config

### CollisionLayerConfig get_config() {#method-get-config}

Get current config


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatEffectPropertyEditor

**Inherits:** [PanelContainer](https://docs.godotengine.org/en/stable/classes/class_panelcontainer.html)

Dynamic property editor for StatEffect instances Creates appropriate UI controls based on effect type

## Variables

| | | |
|---|---|---|
| `StatEffect` | [current_effect](#var-current-effect) |  |
| `ResourceEditor` | [parent_editor](#var-parent-editor) |  |
| `HBoxContainer` | [header_container](#var-header-container) |  |
| `VBoxContainer` | [properties_container](#var-properties-container) |  |
| `Label` | [effect_type_label](#var-effect-type-label) |  |
| `CheckBox` | [enabled_checkbox](#var-enabled-checkbox) |  |
| `Button` | [delete_button](#var-delete-button) |  |
| `Button` | [collapse_button](#var-collapse-button) |  |
| `bool` | [is_collapsed](#var-is-collapsed) | `false` |
| `bool` | [is_loading](#var-is-loading) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `effect: StatEffect, editor: ResourceEditor` ) |

## Signals

### effect_changed() {#signal-effect-changed}

### delete_requested() {#signal-delete-requested}

## Variable descriptions

### StatEffect current_effect {#var-current-effect}

*No description yet.*

### ResourceEditor parent_editor {#var-parent-editor}

*No description yet.*

### HBoxContainer header_container {#var-header-container}

*No description yet.*

### VBoxContainer properties_container {#var-properties-container}

*No description yet.*

### Label effect_type_label {#var-effect-type-label}

*No description yet.*

### CheckBox enabled_checkbox {#var-enabled-checkbox}

*No description yet.*

### Button delete_button {#var-delete-button}

*No description yet.*

### Button collapse_button {#var-collapse-button}

*No description yet.*

### bool is_collapsed = false {#var-is-collapsed}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

## Method descriptions

### void setup( effect: StatEffect, editor: ResourceEditor ) {#method-setup}

*No description yet.*


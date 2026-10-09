<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemEquipmentMeshEditor

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Dedicated editor for equipment mesh assignments Handles all mesh, material, and visual customization for equipment items Supports tag-based modular equipment mesh data

## Variables

| | | |
|---|---|---|
| `HBoxContainer` | [tag_selection_container](#var-tag-selection-container) |  |
| `OptionButton` | [tag_option_button](#var-tag-option-button) |  |
| `Label` | [tag_label](#var-tag-label) |  |
| `ItemDefinitionEquipment` | [current_item](#var-current-item) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `String` | [current_tag](#var-current-tag) | `""` |
| `Array[Dictionary]` | [mesh_slot_controls](#var-mesh-slot-controls) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_dialog_manager: DialogManager` ) |
| `void` | [load_equipment_mesh_properties](#method-load-equipment-mesh-properties)( `equipment: ItemDefinitionEquipment` ) |
| `void` | [clear_mesh_properties](#method-clear-mesh-properties)() |
| `void` | [refresh_on_equipment_type_change](#method-refresh-on-equipment-type-change)() |
| `int` | [get_mesh_slot_count](#method-get-mesh-slot-count)() |
| `bool` | [has_mesh_assignments](#method-has-mesh-assignments)() |
| `bool` | [has_mesh_assignments_for_current_tag](#method-has-mesh-assignments-for-current-tag)() |
| `String` | [get_current_tag](#method-get-current-tag)() |
| `Array[Dictionary]` | [validate_mesh_assignments](#method-validate-mesh-assignments)() |
| `void` | [apply_theme](#method-apply-theme)() |

## Signals

### property_changed() {#signal-property-changed}

## Variable descriptions

### HBoxContainer tag_selection_container {#var-tag-selection-container}

*No description yet.*

### OptionButton tag_option_button {#var-tag-option-button}

*No description yet.*

### Label tag_label {#var-tag-label}

*No description yet.*

### ItemDefinitionEquipment current_item {#var-current-item}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### String current_tag = "" {#var-current-tag}

*No description yet.*

### Array[Dictionary] mesh_slot_controls = [] {#var-mesh-slot-controls}

*No description yet.*

## Method descriptions

### void setup_managers( p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_equipment_mesh_properties( equipment: ItemDefinitionEquipment ) {#method-load-equipment-mesh-properties}

*No description yet.*

### void clear_mesh_properties() {#method-clear-mesh-properties}

*No description yet.*

### void refresh_on_equipment_type_change() {#method-refresh-on-equipment-type-change}

*No description yet.*

### int get_mesh_slot_count() {#method-get-mesh-slot-count}

*No description yet.*

### bool has_mesh_assignments() {#method-has-mesh-assignments}

*No description yet.*

### bool has_mesh_assignments_for_current_tag() {#method-has-mesh-assignments-for-current-tag}

*No description yet.*

### String get_current_tag() {#method-get-current-tag}

*No description yet.*

### Array[Dictionary] validate_mesh_assignments() {#method-validate-mesh-assignments}

*No description yet.*

### void apply_theme() {#method-apply-theme}

*No description yet.*


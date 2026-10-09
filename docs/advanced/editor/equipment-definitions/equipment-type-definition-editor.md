<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EquipmentTypeDefinitionEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Equipment Type Definition Editor for managing equipment and weapon type definitions

## Variables

| | | |
|---|---|---|
| `ConfirmationDialog` | [custom_create_dialog](#var-custom-create-dialog) |  |
| `LineEdit` | [create_name_input](#var-create-name-input) |  |
| `OptionButton` | [create_type_option](#var-create-type-option) |  |
| `EquipmentTypeDefinition:` | [current_equipment_type](#var-current-equipment-type) |  |
| `Array[Dictionary]` | [body_part_controls](#var-body-part-controls) | `[]` |
| `Array[Dictionary]` | [attachment_point_controls](#var-attachment-point-controls) | `[]` |
| `Variant` | [equipment_type_options](#var-equipment-type-options) | `["EquipmentTypeDefinition", "WeaponTypeDefinition"]` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [refresh_files_list](#method-refresh-files-list)() |
| `Array[Dictionary]` | [validate_current_equipment_type](#method-validate-current-equipment-type)() |

## Variable descriptions

### ConfirmationDialog custom_create_dialog {#var-custom-create-dialog}

*No description yet.*

### LineEdit create_name_input {#var-create-name-input}

*No description yet.*

### OptionButton create_type_option {#var-create-type-option}

*No description yet.*

### EquipmentTypeDefinition: current_equipment_type {#var-current-equipment-type}

*No description yet.*

### Array[Dictionary] body_part_controls = [] {#var-body-part-controls}

*No description yet.*

### Array[Dictionary] attachment_point_controls = [] {#var-attachment-point-controls}

*No description yet.*

### equipment_type_options = ["EquipmentTypeDefinition", "WeaponTypeDefinition"] {#var-equipment-type-options}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### void refresh_files_list() {#method-refresh-files-list}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### Array[Dictionary] validate_current_equipment_type() {#method-validate-current-equipment-type}

*No description yet.*


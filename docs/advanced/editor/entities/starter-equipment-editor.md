<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StarterEquipmentEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Simple ItemList-based editor for starter equipment Works with both PlayerClassDefinition and CharacterDefinition

## Variables

| | | |
|---|---|---|
| `DatabaseResource  # Can be PlayerClassDefinition or CharacterDefinition` | [current_definition](#var-current-definition) |  |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Array[EquipmentSlotDefinition]` | [all_equipment_slots](#var-all-equipment-slots) | `[]` |
| `bool` | [is_player_class](#var-is-player-class) | `false` |
| `Label` | [header_label](#var-header-label) |  |
| `ItemList` | [equipment_list](#var-equipment-list) |  |
| `PopupMenu` | [equipment_context_menu](#var-equipment-context-menu) |  |
| `Button` | [create_override_button](#var-create-override-button) |  |
| `Button` | [use_class_equipment_button](#var-use-class-equipment-button) |  |
| `int` | [context_menu_target_index](#var-context-menu-target-index) | `-1` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [load_definition](#method-load-definition)( `definition: DatabaseResource` ) |

## Signals

### equipment_changed() {#signal-equipment-changed}

### show_info_dialog( title: String, message: String ) {#signal-show-info-dialog}

### show_error_dialog( message: String ) {#signal-show-error-dialog}

## Constants

- `const` **CONTEXT_SET_ITEM** = `0`
- `const` **CONTEXT_CLEAR_ITEM** = `1`
- `const` **CONTEXT_SHOW_ITEM_INFO** = `2`
- `const` **CONTEXT_SHOW_SLOT_INFO** = `3`

## Variable descriptions

### DatabaseResource  # Can be PlayerClassDefinition or CharacterDefinition current_definition {#var-current-definition}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Array[EquipmentSlotDefinition] all_equipment_slots = [] {#var-all-equipment-slots}

*No description yet.*

### bool is_player_class = false {#var-is-player-class}

*No description yet.*

### Label header_label {#var-header-label}

*No description yet.*

### ItemList equipment_list {#var-equipment-list}

*No description yet.*

### PopupMenu equipment_context_menu {#var-equipment-context-menu}

*No description yet.*

### Button create_override_button {#var-create-override-button}

*No description yet.*

### Button use_class_equipment_button {#var-use-class-equipment-button}

*No description yet.*

### int context_menu_target_index = -1 {#var-context-menu-target-index}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_definition( definition: DatabaseResource ) {#method-load-definition}

*No description yet.*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StarterEquipmentEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The starting equipment of a player class, or the equipment override of a character: one row for each equipment slot, with the item in it, a button to choose another, one to see it and one to take it out. The controls are in the scene (starter_equipment_editor.tscn); only the rows are built in code, there are as many as the slots. Works with both PlayerClassDefinition and CharacterDefinition

## Variables

| | | |
|---|---|---|
| `DatabaseResource  # Can be PlayerClassDefinition or CharacterDefinition` | [current_definition](#var-current-definition) |  |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Array[EquipmentSlotDefinition]` | [all_equipment_slots](#var-all-equipment-slots) | `[]` |
| `bool` | [is_player_class](#var-is-player-class) | `false` |

## Methods

| | |
|---|---|
| `StarterEquipmentEditor` | [create](#method-create)() *static* |
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [load_definition](#method-load-definition)( `definition: DatabaseResource` ) |

## Signals

### equipment_changed() {#signal-equipment-changed}

### show_info_dialog( title: String, message: String ) {#signal-show-info-dialog}

### show_error_dialog( message: String ) {#signal-show-error-dialog}

## Constants

- `String` **SCENE_PATH** = `"res://addons/chroniclenode/editor_components/editors/entities/property_edito...`

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

## Method descriptions

### StarterEquipmentEditor create() {#method-create}

The editor, made from its scene

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_definition( definition: DatabaseResource ) {#method-load-definition}

*No description yet.*


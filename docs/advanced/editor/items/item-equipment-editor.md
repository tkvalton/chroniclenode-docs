<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemEquipmentEditor

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Item Equipment Editor - handles ItemDefinitionEquipment specific properties Enhanced with better socket system integration and improved UI organization

## Variables

| | | |
|---|---|---|
| `ItemDefinitionEquipment` | [current_item](#var-current-item) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Array` | [available_stats](#var-available-stats) | `[]` |
| `Array[Dictionary]` | [stat_bonus_controls](#var-stat-bonus-controls) | `[]` |
| `Array[Dictionary]` | [equipment_effect_controls](#var-equipment-effect-controls) | `[]` |
| `Array[Dictionary]` | [socket_definition_controls](#var-socket-definition-controls) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [load_equipment_properties](#method-load-equipment-properties)( `equipment: ItemDefinitionEquipment` ) |
| `void` | [copy_equipment_properties](#method-copy-equipment-properties)( `original: ItemDefinitionEquipment, duplicate: ItemDefinitionEquipment` ) |
| `Array[Dictionary]` | [validate_equipment_properties](#method-validate-equipment-properties)() |

## Signals

### property_changed() {#signal-property-changed}

## Variable descriptions

### ItemDefinitionEquipment current_item {#var-current-item}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Array available_stats = [] {#var-available-stats}

*No description yet.*

### Array[Dictionary] stat_bonus_controls = [] {#var-stat-bonus-controls}

*No description yet.*

### Array[Dictionary] equipment_effect_controls = [] {#var-equipment-effect-controls}

*No description yet.*

### Array[Dictionary] socket_definition_controls = [] {#var-socket-definition-controls}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_equipment_properties( equipment: ItemDefinitionEquipment ) {#method-load-equipment-properties}

*No description yet.*

### void copy_equipment_properties( original: ItemDefinitionEquipment, duplicate: ItemDefinitionEquipment ) {#method-copy-equipment-properties}

*No description yet.*

### Array[Dictionary] validate_equipment_properties() {#method-validate-equipment-properties}

*No description yet.*


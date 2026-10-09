<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityAbilitiesEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Editor for EntityDefinition ability properties - manages auto-attack and ability lists Now uses ListCatalog for ability selection with proper type filtering

## Variables

| | | |
|---|---|---|
| `Resource` | [current_data](#var-current-data) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `int` | [selected_active_ability_index](#var-selected-active-ability-index) | `-1` |
| `int` | [selected_passive_ability_index](#var-selected-passive-ability-index) | `-1` |
| `String` | [current_catalog_purpose](#var-current-catalog-purpose) | `""  # "auto_attack", "active_ability", "passive_ability"` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [load_entity_data](#method-load-entity-data)( `data: Resource` ) |

## Signals

### ability_configuration_changed() {#signal-ability-configuration-changed}

### show_info_dialog( title: String, message: String ) {#signal-show-info-dialog}

### show_error_dialog( message: String ) {#signal-show-error-dialog}

## Enumerations

### enum ContextMenuId {#enum-contextmenuid}

- **REMOVE_ABILITY** = `102`

## Variable descriptions

### Resource current_data {#var-current-data}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### int selected_active_ability_index = -1 {#var-selected-active-ability-index}

*No description yet.*

### int selected_passive_ability_index = -1 {#var-selected-passive-ability-index}

*No description yet.*

### String current_catalog_purpose = ""  # "auto_attack", "active_ability", "passive_ability" {#var-current-catalog-purpose}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_entity_data( data: Resource ) {#method-load-entity-data}

*No description yet.*


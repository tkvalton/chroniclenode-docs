<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemConsumableEditor

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Item Consumable Editor - handles ItemDefinitionConsumable specific properties Updated for Effect-based system

## Variables

| | | |
|---|---|---|
| `ItemDefinitionConsumable` | [current_item](#var-current-item) |  |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [load_consumable_properties](#method-load-consumable-properties)( `consumable: ItemDefinitionConsumable` ) |
| `void` | [copy_consumable_properties](#method-copy-consumable-properties)( `original: ItemDefinitionConsumable, duplicate: ItemDefinitionConsumable` ) |
| `Array[Dictionary]` | [validate_consumable_properties](#method-validate-consumable-properties)() |
| `ItemDefinitionConsumable` | [get_current_consumable](#method-get-current-consumable)() |
| `void` | [set_consumable](#method-set-consumable)( `consumable: ItemDefinitionConsumable` ) |
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [get_validation_errors](#method-get-validation-errors)() |

## Signals

### property_changed() {#signal-property-changed}

## Variable descriptions

### ItemDefinitionConsumable current_item {#var-current-item}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_consumable_properties( consumable: ItemDefinitionConsumable ) {#method-load-consumable-properties}

*No description yet.*

### void copy_consumable_properties( original: ItemDefinitionConsumable, duplicate: ItemDefinitionConsumable ) {#method-copy-consumable-properties}

*No description yet.*

### Array[Dictionary] validate_consumable_properties() {#method-validate-consumable-properties}

*No description yet.*

### ItemDefinitionConsumable get_current_consumable() {#method-get-current-consumable}

*No description yet.*

### void set_consumable( consumable: ItemDefinitionConsumable ) {#method-set-consumable}

*No description yet.*

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] get_validation_errors() {#method-get-validation-errors}

*No description yet.*


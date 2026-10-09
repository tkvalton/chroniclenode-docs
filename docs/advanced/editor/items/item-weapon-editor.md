<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemWeaponEditor

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Item Weapon Editor - handles ItemDefinitionEquipmentWeapon specific properties Updated with weapon damage type support

## Variables

| | | |
|---|---|---|
| `ItemDefinitionEquipmentWeapon` | [current_weapon](#var-current-weapon) |  |
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `void` | [load_weapon_properties](#method-load-weapon-properties)( `weapon: ItemDefinitionEquipmentWeapon` ) |
| `void` | [copy_weapon_properties](#method-copy-weapon-properties)( `original: ItemDefinitionEquipmentWeapon, duplicate: ItemDefinitionEquipmentWeapon` ) |
| `Array[Dictionary]` | [validate_weapon_properties](#method-validate-weapon-properties)() |
| `ItemDefinitionEquipmentWeapon` | [get_current_weapon](#method-get-current-weapon)() |
| `void` | [set_weapon](#method-set-weapon)( `weapon: ItemDefinitionEquipmentWeapon` ) |
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [get_validation_errors](#method-get-validation-errors)() |

## Signals

### property_changed() {#signal-property-changed}

## Variable descriptions

### ItemDefinitionEquipmentWeapon current_weapon {#var-current-weapon}

*No description yet.*

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void load_weapon_properties( weapon: ItemDefinitionEquipmentWeapon ) {#method-load-weapon-properties}

*No description yet.*

### void copy_weapon_properties( original: ItemDefinitionEquipmentWeapon, duplicate: ItemDefinitionEquipmentWeapon ) {#method-copy-weapon-properties}

*No description yet.*

### Array[Dictionary] validate_weapon_properties() {#method-validate-weapon-properties}

*No description yet.*

### ItemDefinitionEquipmentWeapon get_current_weapon() {#method-get-current-weapon}

*No description yet.*

### void set_weapon( weapon: ItemDefinitionEquipmentWeapon ) {#method-set-weapon}

*No description yet.*

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] get_validation_errors() {#method-get-validation-errors}

*No description yet.*


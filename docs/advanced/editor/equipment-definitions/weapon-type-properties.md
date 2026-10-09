<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeaponTypeProperties

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Conditional component for weapon-specific properties in EquipmentTypeDefinitionEditor

## Variables

| | | |
|---|---|---|
| `ResourceManager` | [item_definitions_resource_manager](#var-item-definitions-resource-manager) |  |
| `WeaponTypeDefinition` | [current_weapon_type](#var-current-weapon-type) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Array[Dictionary]` | [blocked_slot_controls](#var-blocked-slot-controls) | `[]` |
| `Array[Dictionary]` | [required_empty_slot_controls](#var-required-empty-slot-controls) | `[]` |
| `Variant` | [hand_requirement_options](#var-hand-requirement-options) | `[ ... ]` |
| `Variant` | [weapon_mesh_slot_options](#var-weapon-mesh-slot-options) | `[ ... ]` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_item_definitions_resource_manager: ResourceManager` ) |
| `void` | [load_weapon_type](#method-load-weapon-type)( `weapon_type: WeaponTypeDefinition` ) |
| `void` | [apply_to_weapon_type](#method-apply-to-weapon-type)( `weapon_type: WeaponTypeDefinition` ) |
| `bool` | [has_weapon_type](#method-has-weapon-type)() |
| `WeaponTypeDefinition` | [get_current_weapon_type](#method-get-current-weapon-type)() |
| `void` | [clear](#method-clear)() |

## Signals

### weapon_type_modified() {#signal-weapon-type-modified}

## Variable descriptions

### ResourceManager item_definitions_resource_manager {#var-item-definitions-resource-manager}

*No description yet.*

### WeaponTypeDefinition current_weapon_type {#var-current-weapon-type}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Array[Dictionary] blocked_slot_controls = [] {#var-blocked-slot-controls}

*No description yet.*

### Array[Dictionary] required_empty_slot_controls = [] {#var-required-empty-slot-controls}

*No description yet.*

### hand_requirement_options {#var-hand-requirement-options}

*No description yet.*

### weapon_mesh_slot_options {#var-weapon-mesh-slot-options}

*No description yet.*

## Method descriptions

### void setup_managers( p_item_definitions_resource_manager: ResourceManager ) {#method-setup-managers}

*No description yet.*

### void load_weapon_type( weapon_type: WeaponTypeDefinition ) {#method-load-weapon-type}

*No description yet.*

### void apply_to_weapon_type( weapon_type: WeaponTypeDefinition ) {#method-apply-to-weapon-type}

*No description yet.*

### bool has_weapon_type() {#method-has-weapon-type}

*No description yet.*

### WeaponTypeDefinition get_current_weapon_type() {#method-get-current-weapon-type}

*No description yet.*

### void clear() {#method-clear}

*No description yet.*


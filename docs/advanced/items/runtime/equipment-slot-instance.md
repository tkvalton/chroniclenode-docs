<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EquipmentSlotInstance

**Inherits:** [SlotInstance](/advanced/items/runtime/slot-instance) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Equipment slot for single-item equipment storage

## Description

Equipment slots are specialized containers that:

- Hold exactly one piece of equipment (no stacking)
- Validate equipment type compatibility
- Provide equipment-specific metadata
- Handle slot identification and display

Pure data container - effect handling is done by EquipmentInventoryComponent

## Variables

| | | |
|---|---|---|
| `EquipmentSlotDefinition` | [slot_definition](#var-slot-definition) |  |
| `int` | [slot_instance_index](#var-slot-instance-index) | `0` |

## Methods

| | |
|---|---|
| `bool` | [supports_stacking](#method-supports-stacking)() |
| `int` | [get_quantity](#method-get-quantity)() |
| `bool` | [can_accept_item](#method-can-accept-item)( `item: ItemInstance` ) |
| `bool` | [equip_item](#method-equip-item)( `item: ItemInstance` ) |
| `ItemInstance` | [get_equipped_item](#method-get-equipped-item)() |
| `ItemDefinitionEquipment` | [get_equipped_item_definition](#method-get-equipped-item-definition)() |
| `String` | [get_slot_identifier](#method-get-slot-identifier)() |
| `String` | [get_display_name](#method-get-display-name)() |
| `Texture2D` | [get_slot_icon](#method-get-slot-icon)() |
| `bool` | [accepts_equipment_definition](#method-accepts-equipment-definition)( `equipment_def: ItemDefinitionEquipment` ) |
| `bool` | [is_primary_slot](#method-is-primary-slot)() |
| `WeaponClassDefinition` | [get_equipped_weapon_type](#method-get-equipped-weapon-type)() |
| `bool` | [has_weapon_equipped](#method-has-weapon-equipped)() |
| `SetBonusDefinition` | [get_equipped_set_definition](#method-get-equipped-set-definition)() |
| `bool` | [has_set_item_equipped](#method-has-set-item-equipped)() |

## Variable descriptions

### EquipmentSlotDefinition slot_definition {#var-slot-definition}

The definition that describes this slot's type and constraints

### int slot_instance_index = 0 {#var-slot-instance-index}

Index of this slot instance when multiple slots of same type exist (rings, etc.)

## Method descriptions

### bool supports_stacking() {#method-supports-stacking}

Equipment slots never stack - always single item

### int get_quantity() {#method-get-quantity}

Equipment quantity is always 1 or 0

### bool can_accept_item( item: ItemInstance ) {#method-can-accept-item}

Check if this slot can accept a specific item instance

### bool equip_item( item: ItemInstance ) {#method-equip-item}

Equip an item instance to this slot

### ItemInstance get_equipped_item() {#method-get-equipped-item}

Get the equipped item instance (with type safety)

### ItemDefinitionEquipment get_equipped_item_definition() {#method-get-equipped-item-definition}

Get the equipped item definition (with type safety)

### String get_slot_identifier() {#method-get-slot-identifier}

Get unique identifier for this slot

### String get_display_name() {#method-get-display-name}

Get human-readable display name for this slot

### Texture2D get_slot_icon() {#method-get-slot-icon}

Get the slot definition's icon

### bool accepts_equipment_definition( equipment_def: ItemDefinitionEquipment ) {#method-accepts-equipment-definition}

Check if this slot accepts a specific equipment definition

### bool is_primary_slot() {#method-is-primary-slot}

Check if this is a primary slot (index 0) for multi-instance slots

### WeaponClassDefinition get_equipped_weapon_type() {#method-get-equipped-weapon-type}

Get the weapon type if equipped item is a weapon

### bool has_weapon_equipped() {#method-has-weapon-equipped}

Check if equipped item is a weapon

### SetBonusDefinition get_equipped_set_definition() {#method-get-equipped-set-definition}

Get equipment set information if applicable

### bool has_set_item_equipped() {#method-has-set-item-equipped}

Check if equipped item belongs to a set


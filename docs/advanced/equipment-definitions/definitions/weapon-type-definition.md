<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeaponTypeDefinition

**Inherits:** [EquipmentTypeDefinition](/advanced/equipment-definitions/definitions/equipment-type-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

WeaponTypeDefinition extends EquipmentTypeDefinition to define weapon-specific properties. Handles hand requirements, weapon mesh slots, and slot blocking logic.

## Properties

| | | |
|---|---|---|
| `Array[int]` | [blocks_equipment_slots](#prop-blocks-equipment-slots) |  |

## Methods

| | |
|---|---|
| `bool` | [is_weapon_type](#method-is-weapon-type)() |
| `String` | [get_category](#method-get-category)() |
| `Array[EquipmentSlotDefinition]` | [get_blocked_equipment_slots](#method-get-blocked-equipment-slots)() |
| `bool` | [blocks_equipment_slot](#method-blocks-equipment-slot)( `slot: EquipmentSlotDefinition` ) |
| `bool` | [has_slot_conflicts](#method-has-slot-conflicts)() |

## Property descriptions

*Slot Conflicts*

### Array[int] blocks_equipment_slots {#prop-blocks-equipment-slots}

Equipment slots that get blocked when this weapon type is equipped

## Method descriptions

### bool is_weapon_type() {#method-is-weapon-type}

Override to identify this as a weapon type

### String get_category() {#method-get-category}

Override to provide weapon category

### Array[EquipmentSlotDefinition] get_blocked_equipment_slots() {#method-get-blocked-equipment-slots}

Get all equipment slots that are blocked when this weapon type is equipped

### bool blocks_equipment_slot( slot: EquipmentSlotDefinition ) {#method-blocks-equipment-slot}

Check if this weapon type blocks a specific equipment slot

### bool has_slot_conflicts() {#method-has-slot-conflicts}

Check if this weapon type has any slot conflicts


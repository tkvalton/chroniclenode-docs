<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EquipmentSlotDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Properties

| | | |
|---|---|---|
| `SlotCategory` | [slot_category](#prop-slot-category) | `SlotCategory.ARMOR` |
| `int` | [sort_order](#prop-sort-order) | `0` |
| `Array[int]` | [allowed_equipment_types](#prop-allowed-equipment-types) | `[]` |
| `int` | [slot_instances](#prop-slot-instances) | `1` |
| `bool` | [is_weapon_slot](#prop-is-weapon-slot) | `false` |
| `GeneralSkeleton.WeaponSlot` | [mesh_slot](#prop-mesh-slot) | `GeneralSkeleton.WeaponSlot.MAIN_HAND` |

## Methods

| | |
|---|---|
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_category_name](#method-get-category-name)() |
| `bool` | [is_category](#method-is-category)( `category: SlotCategory` ) |
| `bool` | [is_armor_slot](#method-is-armor-slot)() |
| `bool` | [is_weapon_slot_category](#method-is-weapon-slot-category)() |
| `bool` | [is_accessory_slot](#method-is-accessory-slot)() |
| `int` | [get_id](#method-get-id)() |
| `Texture2D` | [get_icon](#method-get-icon)() |
| `bool` | [can_accept_equipment_type](#method-can-accept-equipment-type)( `equipment_type: int` ) |
| `bool` | [can_equip_item](#method-can-equip-item)( `item: ItemDefinitionEquipment` ) |
| `bool` | [has_slot_conflicts](#method-has-slot-conflicts)() |
| `Array` | [get_slot_conflicts](#method-get-slot-conflicts)() |
| `bool` | [affects_body_part](#method-affects-body-part)( `body_part: GeneralSkeleton.BodySlot` ) |
| `bool` | [affects_attachment_point](#method-affects-attachment-point)( `attachment_point: GeneralSkeleton.AttachmentSlot` ) |
| `bool` | [is_multi_slot](#method-is-multi-slot)() |
| `bool` | [blocks_other_slots](#method-blocks-other-slots)() |
| `Array[SlotCategory]` | [get_all_categories](#method-get-all-categories)() *static* |
| `String` | [get_category_display_name](#method-get-category-display-name)( `category: SlotCategory` ) *static* |

## Enumerations

### enum SlotCategory {#enum-slotcategory}

- **ARMOR** = `0` - Protective equipment (helmet, chest, boots, etc.)
- **WEAPON** = `1` - Weapons (main hand, off hand)
- **ACCESSORY** = `2` - Accessories (rings, amulets, trinkets, etc.)

## Property descriptions

*Slot Organization*

### SlotCategory slot_category = SlotCategory.ARMOR {#prop-slot-category}

Category for UI organization

### int sort_order = 0 {#prop-sort-order}

Order within category for UI sorting

*Slot Requirements*

### Array[int] allowed_equipment_types = [] {#prop-allowed-equipment-types}

Which equipment types can be equipped in this slot

### int slot_instances = 1 {#prop-slot-instances}

How many instances of this slot type should exist (e.g., 2 for ring slots)

*Weapon Support*

### bool is_weapon_slot = false {#prop-is-weapon-slot}

Whether this slot is for weapons

### GeneralSkeleton.WeaponSlot mesh_slot = GeneralSkeleton.WeaponSlot.MAIN_HAND {#prop-mesh-slot}

Equipment Type ID -&gt; WeaponSlot mapping for contextual placement (e.g., &#123;12345: MAIN_HAND, 67890: OFF_HAND&#125;)

## Method descriptions

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### String get_category_name() {#method-get-category-name}

Get the slot category as a string

### bool is_category( category: SlotCategory ) {#method-is-category}

Check if this slot is in a specific category

### bool is_armor_slot() {#method-is-armor-slot}

Check if this slot is armor

### bool is_weapon_slot_category() {#method-is-weapon-slot-category}

Check if this slot is weapon

### bool is_accessory_slot() {#method-is-accessory-slot}

Check if this slot is accessory

### int get_id() {#method-get-id}

Get the unique identifier

### Texture2D get_icon() {#method-get-icon}

Get icon for this slot

### bool can_accept_equipment_type( equipment_type: int ) {#method-can-accept-equipment-type}

Check if an equipment type can be equipped to this slot

### bool can_equip_item( item: ItemDefinitionEquipment ) {#method-can-equip-item}

Check if a specific equipment item can be equipped to this slot

### bool has_slot_conflicts() {#method-has-slot-conflicts}

Check if this slot has any complex conflicts defined

### Array get_slot_conflicts() {#method-get-slot-conflicts}

Get all slot conflicts

### bool affects_body_part( body_part: GeneralSkeleton.BodySlot ) {#method-affects-body-part}

*No description yet.*

### bool affects_attachment_point( attachment_point: GeneralSkeleton.AttachmentSlot ) {#method-affects-attachment-point}

*No description yet.*

### bool is_multi_slot() {#method-is-multi-slot}

*No description yet.*

### bool blocks_other_slots() {#method-blocks-other-slots}

*No description yet.*

### Array[SlotCategory] get_all_categories() {#method-get-all-categories}

Get all possible slot categories

### String get_category_display_name( category: SlotCategory ) {#method-get-category-display-name}

Get category name from enum value


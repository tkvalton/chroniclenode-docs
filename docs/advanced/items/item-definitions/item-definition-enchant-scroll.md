<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionEnchantScroll

**Inherits:** [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Enchantment scrolls that can permanently or temporarily enhance equipment items Uses effects system for actual enchantment functionality

## Properties

| | | |
|---|---|---|
| `int` | [enchant_effect_id](#prop-enchant-effect-id) |  |
| `float` | [enchant_duration](#prop-enchant-duration) | `-1.0` |
| `bool` | [override_effect_duration](#prop-override-effect-duration) | `true` |
| `Array[int]` | [allowed_equipment_types](#prop-allowed-equipment-types) | `[]` |
| `bool` | [allows_weapons](#prop-allows-weapons) | `false` |
| `bool` | [allows_any_equipment](#prop-allows-any-equipment) | `false` |
| `String` | [enchant_category](#prop-enchant-category) | `"general"` |
| `bool` | [conflicts_with_category](#prop-conflicts-with-category) | `false` |
| `bool` | [consume_on_use](#prop-consume-on-use) | `true` |

## Methods

| | |
|---|---|
| `bool` | [can_use](#method-can-use)( `user: Entity, item_instance: ItemInstance = null` ) |
| `bool` | [execute_use](#method-execute-use)( `user: Entity, item_instance: ItemInstance` ) |
| `String` | [get_use_action_name](#method-get-use-action-name)( `_item_instance: ItemInstance` ) |
| `bool` | [can_enchant_equipment](#method-can-enchant-equipment)( `equipment_definition: ItemDefinitionEquipment` ) |
| `bool` | [can_enchant_item_instance](#method-can-enchant-item-instance)( `item_instance: ItemInstance` ) |
| `bool` | [apply_enchantment_to_item](#method-apply-enchantment-to-item)( `target_item: ItemInstance, user: Entity = null` ) |
| `String` | [get_enchant_source](#method-get-enchant-source)() |
| `String` | [get_compatible_equipment_types_text](#method-get-compatible-equipment-types-text)() |
| `bool` | [targets_weapons](#method-targets-weapons)() |
| `bool` | [targets_armor](#method-targets-armor)() |
| `Array[Dictionary]` | [validate_enchant_scroll](#method-validate-enchant-scroll)() |
| `bool` | [use_enchant_scroll](#method-use-enchant-scroll)( `scroll_item: ItemInstance, target_equipment: ItemInstance, user: Entity` ) |

## Property descriptions

### int enchant_effect_id {#prop-enchant-effect-id}

The effect applied when this enchantment scroll is used on equipment

### float enchant_duration = -1.0 {#prop-enchant-duration}

Duration override for all effects (-1 = permanent, &gt;0 = temporary in seconds)

### bool override_effect_duration = true {#prop-override-effect-duration}

Whether to override individual effect durations (scroll is king)

*Target Restrictions*

### Array[int] allowed_equipment_types = [] {#prop-allowed-equipment-types}

Array of equipment type IDs this enchantment can be applied to

### bool allows_weapons = false {#prop-allows-weapons}

Whether this enchantment can be applied to weapons specifically

### bool allows_any_equipment = false {#prop-allows-any-equipment}

Whether this enchantment can be applied to any equipment if no specific types are set

*Enchantment Categories*

### String enchant_category = "general" {#prop-enchant-category}

Category of enchantment for organization and conflict resolution

### bool conflicts_with_category = false {#prop-conflicts-with-category}

Whether this enchantment conflicts with others in the same category

*Consumption*

### bool consume_on_use = true {#prop-consume-on-use}

Whether this scroll is consumed when used

## Method descriptions

### bool can_use( user: Entity, item_instance: ItemInstance = null ) {#method-can-use}

Check if the enchant scroll can be used

### bool execute_use( user: Entity, item_instance: ItemInstance ) {#method-execute-use}

Execute enchant scroll usage - this would trigger the enchanting UI/process The actual enchanting logic would be handled by the enchanting system

### String get_use_action_name( _item_instance: ItemInstance ) {#method-get-use-action-name}

Get display name for enchant scroll action

### bool can_enchant_equipment( equipment_definition: ItemDefinitionEquipment ) {#method-can-enchant-equipment}

Check if this enchantment can be applied to a specific equipment item

### bool can_enchant_item_instance( item_instance: ItemInstance ) {#method-can-enchant-item-instance}

Check if this enchantment can be applied to a specific equipment item instance

### bool apply_enchantment_to_item( target_item: ItemInstance, user: Entity = null ) {#method-apply-enchantment-to-item}

Apply this enchantment to a target equipment item instance New single enchant system - replaces existing enchants

### String get_enchant_source() {#method-get-enchant-source}

Get the source identifier for this enchant scroll

### String get_compatible_equipment_types_text() {#method-get-compatible-equipment-types-text}

Get a list of compatible equipment types for display

### bool targets_weapons() {#method-targets-weapons}

Check if this enchantment targets weapons

### bool targets_armor() {#method-targets-armor}

Check if this enchantment targets armor

### Array[Dictionary] validate_enchant_scroll() {#method-validate-enchant-scroll}

Validate the enchantment scroll configuration

### bool use_enchant_scroll( scroll_item: ItemInstance, target_equipment: ItemInstance, user: Entity ) {#method-use-enchant-scroll}

Apply this enchant scroll to target equipment This is the main entry point for the enchanting system


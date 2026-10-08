<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionMaterial

**Inherits:** [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Properties

| | | |
|---|---|---|
| `String` | [material_type](#prop-material-type) | `""` |
| `int` | [crafting_tier](#prop-crafting-tier) | `1` |

## Methods

| | |
|---|---|
| `bool` | [can_use](#method-can-use)( `_user: Entity, _item_instance: ItemInstance = null` ) |

## Property descriptions

### String material_type = "" {#prop-material-type}

Type/category of material for crafting recipe filtering and organization

### int crafting_tier = 1 {#prop-crafting-tier}

Tier level for crafting system progression - higher tiers enable more advanced recipes

## Method descriptions

### bool can_use( _user: Entity, _item_instance: ItemInstance = null ) {#method-can-use}

Check if this item can be used by a specific user Pure validation - no side effects item_instance parameter is optional but needed for quest items *(from [ItemDefinition](/advanced/items/item-definitions/item-definition))*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionMaterial

**Inherits:** [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Material items used for crafting recipes or sold as vendor trash These items have no direct use functionality but serve as components and resources

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

Materials cannot be "used" directly - they serve as crafting components or vendor items


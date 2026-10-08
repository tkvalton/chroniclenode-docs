<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionAmmo

**Inherits:** [ItemDefinitionEquipment](/advanced/items/item-definitions/item-definition-equipment) < [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Ammunition: arrows, bolts, bullets, and anything else an ability spends a piece of per use. It is equipment, so it goes in an ammo slot (a quiver: an equipment slot that accepts the ammunition equipment type) and the ranged abilities of the character use what is equipped there. Which weapon uses which ammo is decided by the groups: the weapon class names an ammo group ("Arrows"), the ammo is in that group. See docs/systems/ability-mechanics-plan.md, section 5.

## Properties

| | | |
|---|---|---|
| `Array[int]` | [ammo_effects](#prop-ammo-effects) | `[]` |

## Methods

| | |
|---|---|
| `Array[Effect]` | [get_ammo_effects](#method-get-ammo-effects)() |

## Property descriptions

*Ammo*

### Array[int] ammo_effects = [] {#prop-ammo-effects}

Effects applied to the target of every use that spends this ammo, on top of the ability's own effects (a poison arrow, an explosive bolt, +damage)

## Method descriptions

### Array[Effect] get_ammo_effects() {#method-get-ammo-effects}

The effects of this ammo, resolved


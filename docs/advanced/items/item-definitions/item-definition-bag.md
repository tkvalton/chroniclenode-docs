<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionBag

**Inherits:** [ItemDefinitionEquipment](/advanced/items/item-definitions/item-definition-equipment) < [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A bag: equipment that gives its wearer more slots while it is worn (a satchel, a quiver, an herb pouch). It goes in an equipment slot of the equipment type the developer made for bags (make slots for four bags, say), like any other equipment, and the slots of the bags worn are added to the slots of the character.

## Description

The slots of all bags are one pooled list; the inventory window shows them grouped by bag. A bag can accept only some groups of items (an herb bag takes only herbs): such items go there first, and nothing else goes in. A bag cannot be taken off if what it holds would not fit in the other slots. Bags give slots in the slots style; in unlimited space they are not needed. See docs/systems/inventory-styles.md, section 6.

## Properties

| | | |
|---|---|---|
| `int` | [bag_slots](#prop-bag-slots) | `6` |
| `Array[int]` | [accepted_groups](#prop-accepted-groups) | `[]` |
| `float` | [weight_multiplier](#prop-weight-multiplier) | `1.0` |

## Methods

| | |
|---|---|
| `bool` | [accepts](#method-accepts)( `definition: ItemDefinition` ) |
| `bool` | [is_special](#method-is-special)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

*Bag*

### int bag_slots = 6 {#prop-bag-slots}

How many slots the bag gives while it is worn

### Array[int] accepted_groups = [] {#prop-accepted-groups}

Only items of these groups go in the bag (empty = anything). The items go in a bag that takes them before they go in the other slots

### float weight_multiplier = 1.0 {#prop-weight-multiplier}

What the items in this bag weigh, as a share of their weight (0.5 = half: a bag that makes things lighter). It matters when the inventory style counts weight

## Method descriptions

### bool accepts( definition: ItemDefinition ) {#method-accepts}

Does the bag take an item of this definition?

### bool is_special() {#method-is-special}

Does the bag take only some items (so such items go there first)?

### Array[Dictionary] validate() {#method-validate}

Checks the settings. Gives the problems found (empty when it is fine).


# Inventories: how they are built

The [Inventories](/basic/shared-systems/inventories) chapter explains the options. This page explains the code.

## The pieces

| Class | What it is |
|---|---|
| [`InventoryComponent`](/advanced/items/runtime/inventory-component) | A bag: a list of [`InventorySlotInstance`](/advanced/items/runtime/inventory-slot-instance), money, the rules (`style`), the owner. Used by characters, NPCs and objects |
| [`InventoryStyle`](/advanced/items/item-definitions/inventory-style), [`EncumbranceTier`](/advanced/items/item-definitions/encumbrance-tier) | The rules of one kind of owner: space, where the capacity comes from, weight, the limit and its steps |
| [`EquipmentInventoryComponent`](/advanced/items/runtime/equipment-inventory-component) | What a character wears: a slot for each [`EquipmentSlotDefinition`](/advanced/equipment-definitions/definitions/equipment-slot-definition) |
| [`VendorInventoryComponent`](/advanced/items/runtime/vendor-inventory-component) | A shop: a stock, not a bag |
| [`ItemInstance`](/advanced/items/runtime/item-instance) | `get_unit_weight()`, `get_total_weight()` |
| [`PartyManager`](/advanced/entities/runtime/party-manager) | The shared party bag and purse |

## How a bag is made

[`Entity.initialize_entity`](/advanced/entities/runtime/entity) calls `components.inventory().configure(InventoryStyle.for_entity(self), self)`. `for_entity` returns the style of the NPC definition, else the Gameplay Config's style for NPCs; a player gets the character style. A container calls `configure(style, null, max_slots)`: its own style, else the container style of the project, with the container's `Max slots` as the number of slots. A component that is never configured (the shared bag, the shared purse) has no style and keeps `max_slots` slots, as before.

`configure` stores the style and the owner, connects the owner's `stat_changed` (Bag Slots resizes the bag, Carry Capacity re-checks encumbrance) and `equipment_changed`, and calls `refresh_capacity()` and `refresh_encumbrance()`.

## Capacity

`get_slot_capacity()`: for slots mode the Bag Slots stat of the owner (or the style's fixed number, or the container's `Max slots`) plus `extra_slots`; for unlimited space the number of slots there are. `refresh_capacity()` makes the list that long, but **never shorter than the last slot that holds an item**: the slots past the capacity stay (`get_overflow_count()`), the window tints them, and a slot change that empties them gives the bag its size back. Unlimited space keeps the slots in use and **one empty slot at the end** (`_normalize_unlimited`); `_find_first_empty_slot` appends a slot on demand, so every add path works unchanged. `slots_resized` tells the window to build its slots again.

`extra_slots` and `extra_capacity` are the bonuses given for good (the Inventory Size reward, the Change Inventory Size event action). They are saved in the bag's save data.

## Bags

[`ItemDefinitionBag`](/advanced/items/item-definitions/item-definition-bag) is equipment (`bag_slots`, `accepted_groups`, `weight_multiplier`; `accepts(definition)`, `is_special()`). Every `InventorySlotInstance` has a `bag_item` (null = a slot of the character's own bag), `accepts_definition(definition)` and `is_special_for(definition)`. `InventoryComponent._sync_layout()` keeps the list in the order *own slots, then the slots of each worn bag in the order of the equipment slots*: it reuses the slot objects that are still wanted (so items keep their place), makes new ones for new bags, and takes away the slots of bags that are gone or that got smaller; the items in those slots go to a free slot that takes them (`_find_first_empty_slot(definition)`: a special bag that takes the item first, then any slot that takes it), and with none free they get a slot of their own at the end of the character's slots, so nothing is destroyed. It runs when the style changes, when a stat of the capacity changes, and on `equipment_changed` for a bag (the order of the equipment [save and load](/advanced/save-and-load) makes the layout the same after a load).

`EquipmentInventoryComponent.unequip_slot` and the displaced-item check of `equip_item_to_slot` ask `InventoryComponent.can_release_bag(bag)` (a free slot outside the bag for each item inside, and one for the bag) and refuse otherwise. `get_worn_bags()` lists the bags worn.

## The grid

[`ItemDefinition.shape_size`](/advanced/items/item-definitions/item-definition) (a `Vector2i`, 1 x 1 by default; `ItemInstance.get_shape()` clamps it to at least 1 x 1). A grid inventory is the **same positional list of slots**, one slot for each cell, row by row (`index = y * grid_width + x`); an item sits in the slot of its **top left cell** and `InventorySlotInstance.covered_by` points from the other cells it covers to that slot (`_rebuild_coverage()`, run on every slot change and after a load). `_find_first_empty_slot(definition)` scans row by row for a free rectangle (`_find_grid_origin`), `count_grid_placements(shape, wanted)` counts how many fit (used by `calculate_addable_quantity` and `has_space_for_item`, so every way of adding works), `can_place_in_grid` and `place_in_grid(item, slot)` move an item or join a stack, and `try_swap_items` uses `place_in_grid`. `InventorySlotInstance.inventory` lets the drag controller ask the grid before it assigns an item to a slot ([`DragController._drop_to_inventory`](/advanced/user-interface/in-game/drag-controller)). The window ([`InventoryUI._populate_grid_canvas`](/advanced/user-interface/panels/inventory-ui)) draws the cells and items on a canvas by hand: an item widget covers its cells, and the window is built again when the grid changes. A grid has no bags, and its size is `grid_width * (grid_height + extra_slots)` cells (an extra slot is a row); a shrink removes only empty cells at its end.

## Weight

`get_total_weight()` adds the slots and, when the style counts worn items, the equipment of the owner. `get_weight_capacity()` is the Carry Capacity stat (or the fixed number) plus `extra_capacity`. The **hard limit** is one function, `_units_allowed_by_weight(unit_weight, quantity)`, used by `add_item` (all of the stack or none), `add_item_definition_partial` (what does not fit comes back as the remaining quantity), `calculate_addable_quantity` and `has_space_for_item`: so loot, rewards, purchases, crafting results and pick-ups all stop at the limit. `last_block_reason` is "Too heavy" after a refusal.

## Encumbrance

`refresh_encumbrance()` runs on every inventory change, on `equipment_changed` and when Carry Capacity changes. It asks the style for the highest `EncumbranceTier` the load percent has reached; if that is not the step that is on, the effect of the old step is removed and the new one is made with `combat_manager.effect_instance_pool.get_effect_instance(effect, owner, owner)` and started with `SourceType.EXTERNAL`, the way equipment effects are (so it is not saved: it is worked out again after a load).

## The core stats

Core stat 6 is [`StatsComponent.CoreStats.BAG_SLOTS`](/advanced/entity-stats/runtime/stats-component) (the stat that was called Carry Weight: its definition in an existing project keeps its id and values, only the name changes), and 10 is `CARRY_CAPACITY`. [`StatsData`](/advanced/entity-stats/stats-and-pools/stats-data) has `carry_weight_base` (the bag slots override) and `carry_capacity_base`.

## Extending

- A new **space mode**: add it to `InventoryStyle.Space`, answer it in `get_slot_capacity`, `_find_first_empty_slot` and `calculate_addable_quantity`.
- A **different limit**: use `is_over_capacity()` and `get_weight_percent()` from your own tracker; or make a custom [`Effect`](/advanced/abilities-and-effects/effects-base/effect) for the encumbrance step.
- A **window of your own**: listen to `inventory_updated` and `slots_resized`; the size of the bag is `slots.size()`.

## Pitfalls

- A step of encumbrance puts its effect on **as long as the step is on**: a temporary effect ends on its own and is not put on again until the step changes. Use a persistent one.
- A shared party bag has no style: weight, the stats and the style do not apply to it.
- Moving an item from the worn equipment to the bag goes through `add_item`, so a hard limit that counts worn items can refuse to take off a piece that is over the limit.

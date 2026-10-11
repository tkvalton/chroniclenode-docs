<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# KeptAsideSlotInstance

**Inherits:** [InventorySlotInstance](/advanced/items/runtime/inventory-slot-instance) < [SlotInstance](/advanced/items/runtime/slot-instance) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

A stack of an item that is kept aside (see ItemDefinition.is_kept_aside): it lives in the list `InventoryComponent.aside_slots`, outside the slots, cells and weight of the bag. Nothing can be dropped into it: the bag puts the items there itself.

## Methods

| | |
|---|---|
| `bool` | [can_accept_item](#method-can-accept-item)( `_item: ItemInstance` ) |

## Method descriptions

### bool can_accept_item( _item: ItemInstance ) {#method-can-accept-item}

Check if this slot can accept a specific item instance *(from [InventorySlotInstance](/advanced/items/runtime/inventory-slot-instance))*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InventorySlotInstance

**Inherits:** [SlotInstance](/advanced/items/runtime/slot-instance) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Inventory slot with full stacking support and item management

## Description

Provides advanced stacking capabilities including:

- Merging compatible item stacks
- Splitting stacks into multiple slots
- Adding/removing specific quantities
- Validation for stackable items

Used by InventoryComponent for general item storage where multiple items of the same type can be stacked together.

## Variables

| | | |
|---|---|---|
| `CombatManager` | [combat_manager](#var-combat-manager) |  |

## Methods

| | |
|---|---|
| `bool` | [supports_stacking](#method-supports-stacking)() |
| `bool` | [can_accept_item](#method-can-accept-item)( `item: ItemInstance` ) |
| `int` | [add_quantity](#method-add-quantity)( `amount: int` ) |
| `int` | [remove_quantity](#method-remove-quantity)( `amount: int` ) |
| `bool` | [can_merge_with](#method-can-merge-with)( `other_slot: InventorySlotInstance` ) |
| `bool` | [can_fully_merge_with](#method-can-fully-merge-with)( `other_slot: InventorySlotInstance` ) |
| `InventorySlotInstance` | [merge_with](#method-merge-with)( `other_slot: InventorySlotInstance` ) |
| `InventorySlotInstance` | [split_stack](#method-split-stack)( `amount_to_split: int` ) |
| `Array[InventorySlotInstance]` | [split_evenly](#method-split-evenly)( `number_of_stacks: int` ) |
| `int` | [transfer_to](#method-transfer-to)( `target_slot: InventorySlotInstance, amount: int = -1` ) |

## Signals

### quantity_removed( item_instance: ItemInstance, amount: int ) {#signal-quantity-removed}

Emitted when the stack of the item in this slot got smaller without the inventory asking for it (an item that was used or consumed)

## Variable descriptions

### CombatManager combat_manager {#var-combat-manager}

The combat system manager

## Method descriptions

### bool supports_stacking() {#method-supports-stacking}

Inventory slots always support stacking

### bool can_accept_item( item: ItemInstance ) {#method-can-accept-item}

Check if this slot can accept a specific item instance

### int add_quantity( amount: int ) {#method-add-quantity}

Add quantity to this slot's stack Returns the amount that couldn't be added (overflow)

### int remove_quantity( amount: int ) {#method-remove-quantity}

Remove quantity from this slot's stack Returns the amount that was actually removed

### bool can_merge_with( other_slot: InventorySlotInstance ) {#method-can-merge-with}

Check if this slot can merge with another slot

### bool can_fully_merge_with( other_slot: InventorySlotInstance ) {#method-can-fully-merge-with}

Check if this slot can fully absorb another slot's contents

### InventorySlotInstance merge_with( other_slot: InventorySlotInstance ) {#method-merge-with}

Merge another slot's contents into this slot Returns null if fully merged, or the other slot with remaining items

### InventorySlotInstance split_stack( amount_to_split: int ) {#method-split-stack}

Split this slot's stack, creating a new slot with the specified amount Returns a new InventorySlotInstance or null if split failed

### Array[InventorySlotInstance] split_evenly( number_of_stacks: int ) {#method-split-evenly}

Split this slot evenly into multiple stacks Returns array of new slots (excluding this one which retains remainder)

### int transfer_to( target_slot: InventorySlotInstance, amount: int = -1 ) {#method-transfer-to}

Try to transfer items to another slot Returns the amount that couldn't be transferred


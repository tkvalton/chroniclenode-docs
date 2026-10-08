<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SlotInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

**Inherited by:** [EquipmentSlotInstance](/advanced/items/runtime/equipment-slot-instance), [InventorySlotInstance](/advanced/items/runtime/inventory-slot-instance)

Base class for all slot types - provides common interface for item storage

## Description

This is the foundation for all slot-based storage including:

- Inventory slots (with stacking support)
- Equipment slots (single item only)
- Any other specialized slot types

Handles basic slot state, locking, and item assignment while allowing child classes to override behavior for their specific needs.

## Variables

| | | |
|---|---|---|
| `ItemInstance:` | [item_instance](#var-item-instance) |  |
| `bool` | [is_locked](#var-is-locked) | `false:` |

## Methods

| | |
|---|---|
| `int` | [get_quantity](#method-get-quantity)() |
| `void` | [set_quantity](#method-set-quantity)( `new_quantity: int` ) |
| `bool` | [supports_stacking](#method-supports-stacking)() |
| `int` | [get_max_stack_size](#method-get-max-stack-size)() |
| `bool` | [can_accept_item](#method-can-accept-item)( `item: ItemInstance` ) |
| `bool` | [is_empty](#method-is-empty)() |
| `bool` | [is_occupied](#method-is-occupied)() |
| `bool` | [is_full](#method-is-full)() |
| `int` | [get_remaining_space](#method-get-remaining-space)() |
| `void` | [set_locked_state](#method-set-locked-state)( `locked: bool` ) |
| `ItemInstance` | [clear](#method-clear)() |
| `bool` | [set_item](#method-set-item)( `new_item_instance: ItemInstance` ) |
| `ItemDefinition` | [get_item_definition](#method-get-item-definition)() |
| `String` | [get_item_display_name](#method-get-item-display-name)() |
| `Texture2D` | [get_item_icon](#method-get-item-icon)() |

## Signals

### slot_data_changed() {#signal-slot-data-changed}

Emitted whenever slot data changes (item added/removed/modified)

### slot_lock_state_changed( is_locked: bool ) {#signal-slot-lock-state-changed}

Emitted when slot lock state changes

## Variable descriptions

### ItemInstance: item_instance {#var-item-instance}

The item instance currently stored in this slot (null if empty)

### bool is_locked = false: {#var-is-locked}

Whether this slot is locked and cannot accept new items

## Method descriptions

### int get_quantity() {#method-get-quantity}

Get the current quantity of items in this slot

### void set_quantity( new_quantity: int ) {#method-set-quantity}

Set the quantity of items in this slot

### bool supports_stacking() {#method-supports-stacking}

Whether this slot type supports stacking multiple items

### int get_max_stack_size() {#method-get-max-stack-size}

Get the maximum stack size for items in this slot

### bool can_accept_item( item: ItemInstance ) {#method-can-accept-item}

Check if this slot can accept a specific item instance

### bool is_empty() {#method-is-empty}

Check if slot is empty (no item or zero quantity)

### bool is_occupied() {#method-is-occupied}

Check if slot has an item (opposite of is_empty)

### bool is_full() {#method-is-full}

Check if slot is at maximum capacity

### int get_remaining_space() {#method-get-remaining-space}

Get remaining space in this slot

### void set_locked_state( locked: bool ) {#method-set-locked-state}

Set lock state of this slot

### ItemInstance clear() {#method-clear}

Clear the slot and return the item that was in it

### bool set_item( new_item_instance: ItemInstance ) {#method-set-item}

Set item instance in this slot

### ItemDefinition get_item_definition() {#method-get-item-definition}

Get the item definition from the current item instance

### String get_item_display_name() {#method-get-item-display-name}

Get display name of the item in this slot

### Texture2D get_item_icon() {#method-get-item-icon}

Get icon of the item in this slot


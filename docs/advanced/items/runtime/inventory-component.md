<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InventoryComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Universal inventory system for storing item instances and currency

## Description

This class provides pure inventory functionality that works universally across:

- Player inventories
- NPC inventories
- Container inventories (chests, bags, etc.)
- Any other item storage system

UI behavior and context are handled by the UI layer, not here. For specialized trading behavior, see VendorInventoryComponent.

## Variables

| | | |
|---|---|---|
| `Dictionary` | [currency](#var-currency) | `{}` |
| `Array[InventorySlotInstance]` | [slots](#var-slots) | `[]` |
| `int` | [max_slots](#var-max-slots) | `20` |
| `CombatManager` | [combat_manager](#var-combat-manager) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_inventory](#method-initialize-inventory)( `slot_count: int = 20` ) |
| `void` | [setup_inventory](#method-setup-inventory)( `inventory: Dictionary` ) |
| `bool` | [add_item](#method-add-item)( `item_instance: ItemInstance` ) |
| `bool` | [try_swap_items](#method-try-swap-items)( `item_instance: ItemInstance, target_slot_index: int` ) |
| `bool` | [add_item_definition](#method-add-item-definition)( `item_def: ItemDefinition, quantity: int = 1` ) |
| `bool` | [has_room_for_definition](#method-has-room-for-definition)( `item_def: ItemDefinition, quantity: int` ) |
| `int` | [add_item_definition_partial](#method-add-item-definition-partial)( `item_def: ItemDefinition, quantity: int` ) |
| `bool` | [remove_item](#method-remove-item)( `item_instance: ItemInstance, quantity: int = -1` ) |
| `bool` | [remove_item_definition](#method-remove-item-definition)( `item_def: ItemDefinition, quantity: int` ) |
| `int` | [remove_item_definition_partial](#method-remove-item-definition-partial)( `item_def: ItemDefinition, quantity: int` ) |
| `void` | [clear_inventory](#method-clear-inventory)() |
| `int` | [get_item_count](#method-get-item-count)( `item_instance: ItemInstance` ) |
| `bool` | [has_item](#method-has-item)( `item_instance: ItemInstance, required_quantity: int = 1` ) |
| `Array[ItemInstance]` | [get_items](#method-get-items)( `item_instance: ItemInstance` ) |
| `bool` | [has_space_for_item](#method-has-space-for-item)( `item_instance: ItemInstance` ) |
| `int` | [get_item_count_definition](#method-get-item-count-definition)( `item_def: ItemDefinition` ) |
| `bool` | [has_item_definition](#method-has-item-definition)( `item_def: ItemDefinition, required_quantity: int = 1` ) |
| `Array[ItemInstance]` | [get_items_definition](#method-get-items-definition)( `item_def: ItemDefinition` ) |
| `Array[ItemInstance]` | [get_all_items](#method-get-all-items)() |
| `ItemInstance` | [get_item_at_index](#method-get-item-at-index)( `index: int` ) |
| `int` | [get_index_of_slot](#method-get-index-of-slot)( `slot_instance: InventorySlotInstance` ) |
| `InventorySlotInstance` | [find_slot_with_item](#method-find-slot-with-item)( `item_instance: ItemInstance` ) |
| `Array[InventorySlotInstance]` | [get_empty_slots](#method-get-empty-slots)() |
| `bool` | [is_full](#method-is-full)() |
| `bool` | [is_empty](#method-is-empty)() |
| `int` | [get_currency_amount](#method-get-currency-amount)( `currency_id: int` ) |
| `int` | [get_currency_limit](#method-get-currency-limit)( `currency_id: int` ) |
| `void` | [set_currency_amount](#method-set-currency-amount)( `currency_id: int, amount: int` ) |
| `int` | [add_currency_clamped](#method-add-currency-clamped)( `currency_id: int, amount: int` ) |
| `bool` | [add_currency](#method-add-currency)( `currency_id: int, amount: int` ) |
| `bool` | [remove_currency](#method-remove-currency)( `currency_id: int, amount: int` ) |
| `bool` | [can_afford_currency](#method-can-afford-currency)( `currency_id: int, amount: int` ) |
| `bool` | [spend_currency](#method-spend-currency)( `currency_id: int, amount: int` ) |
| `bool` | [add_currency_definition](#method-add-currency-definition)( `currency_def: CurrencyDefinition, amount: int` ) |
| `bool` | [remove_currency_definition](#method-remove-currency-definition)( `currency_def: CurrencyDefinition, amount: int` ) |
| `bool` | [can_afford_currency_definition](#method-can-afford-currency-definition)( `currency_def: CurrencyDefinition, amount: int` ) |
| `bool` | [spend_currency_definition](#method-spend-currency-definition)( `currency_def: CurrencyDefinition, amount: int` ) |
| `Dictionary` | [get_all_currencies](#method-get-all-currencies)() |
| `Dictionary` | [get_all_currency_amounts](#method-get-all-currency-amounts)() |
| `void` | [clear_all_currency](#method-clear-all-currency)() |
| `float` | [add_item_with_quantity](#method-add-item-with-quantity)( `item_instance: ItemInstance, quantity: float` ) |
| `Dictionary` | [calculate_addable_quantity](#method-calculate-addable-quantity)( `item_instance: ItemInstance, desired_quantity: float` ) |
| `bool` | [can_discard_item](#method-can-discard-item)( `item_instance: ItemInstance` ) |
| `bool` | [discard_item](#method-discard-item)( `item_instance: ItemInstance, quantity: int = -1` ) |
| `int` | [remove_completed_quest_items](#method-remove-completed-quest-items)() |
| `int` | [remove_quest_items_for_quest](#method-remove-quest-items-for-quest)( `quest_id: int` ) |
| `int` | [remove_quest_items_on_completion](#method-remove-quest-items-on-completion)( `quest_id: int` ) |
| `bool` | [has_quest_items_for_quest](#method-has-quest-items-for-quest)( `quest_id: int` ) |
| `Array[ItemInstance]` | [get_all_quest_items](#method-get-all-quest-items)() |
| `Array[ItemInstance]` | [get_quest_items_for_quest](#method-get-quest-items-for-quest)( `quest_id: int` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |

## Signals

### inventory_updated() {#signal-inventory-updated}

Emitted whenever the inventory contents change

### item_added( item_instance: ItemInstance, slot_index: int ) {#signal-item-added}

Emitted when an item instance is successfully added to inventory

### item_removed( item_instance: ItemInstance, quantity: int ) {#signal-item-removed}

Emitted when an item instance is successfully removed from inventory

### currency_changed( currency_id: int, new_amount: int ) {#signal-currency-changed}

Emitted when currency amounts change

### new_currency_added( currency_id: int, initial_amount: int ) {#signal-new-currency-added}

Emitted when a new currency type is added to the inventory for the first time

## Variable descriptions

### Dictionary currency =  {#var-currency}

Currency storage - currency_id (int) -&gt; amount (int)

### Array[InventorySlotInstance] slots = [] {#var-slots}

Array of inventory slots containing item instances

### int max_slots = 20 {#var-max-slots}

Maximum number of inventory slots available

### CombatManager combat_manager {#var-combat-manager}

The combat system manager

## Method descriptions

### void initialize_inventory( slot_count: int = 20 ) {#method-initialize-inventory}

Initialize the inventory with the specified number of slots

### void setup_inventory( inventory: Dictionary ) {#method-setup-inventory}

Setup inventory from a dictionary

### bool add_item( item_instance: ItemInstance ) {#method-add-item}

Add item instance to inventory, returns true if successful

### bool try_swap_items( item_instance: ItemInstance, target_slot_index: int ) {#method-try-swap-items}

*No description yet.*

### bool add_item_definition( item_def: ItemDefinition, quantity: int = 1 ) {#method-add-item-definition}

Add item by definition: all of it or nothing (a quantity above one stack makes several stacks; with no room for all of it nothing is added)

### bool has_room_for_definition( item_def: ItemDefinition, quantity: int ) {#method-has-room-for-definition}

Is there room for this many of an item (merging into stacks and using empty slots)?

### int add_item_definition_partial( item_def: ItemDefinition, quantity: int ) {#method-add-item-definition-partial}

Add item by definition with partial success (returns remaining quantity that couldn't be added)

### bool remove_item( item_instance: ItemInstance, quantity: int = -1 ) {#method-remove-item}

Remove specific item instance from inventory

### bool remove_item_definition( item_def: ItemDefinition, quantity: int ) {#method-remove-item-definition}

Remove items by definition (removes from any instances of this item type)

### int remove_item_definition_partial( item_def: ItemDefinition, quantity: int ) {#method-remove-item-definition-partial}

Remove items by definition and return how many were actually removed

### void clear_inventory() {#method-clear-inventory}

*No description yet.*

### int get_item_count( item_instance: ItemInstance ) {#method-get-item-count}

Get total count of a specific item instance type

### bool has_item( item_instance: ItemInstance, required_quantity: int = 1 ) {#method-has-item}

Check if inventory contains at least the required quantity of a specific item instance type

### Array[ItemInstance] get_items( item_instance: ItemInstance ) {#method-get-items}

Get all instances of the same type as the provided item instance

### bool has_space_for_item( item_instance: ItemInstance ) {#method-has-space-for-item}

Check if inventory has space for a specific item instance

### int get_item_count_definition( item_def: ItemDefinition ) {#method-get-item-count-definition}

Get total count of item instances by definition

### bool has_item_definition( item_def: ItemDefinition, required_quantity: int = 1 ) {#method-has-item-definition}

Check if inventory contains at least the required quantity of an item definition

### Array[ItemInstance] get_items_definition( item_def: ItemDefinition ) {#method-get-items-definition}

Get all item instances of a specific definition

### Array[ItemInstance] get_all_items() {#method-get-all-items}

Get all item instances in inventory

### ItemInstance get_item_at_index( index: int ) {#method-get-item-at-index}

Get item at specific slot index

### int get_index_of_slot( slot_instance: InventorySlotInstance ) {#method-get-index-of-slot}

Get the index of a specific slot instance

### InventorySlotInstance find_slot_with_item( item_instance: ItemInstance ) {#method-find-slot-with-item}

Find first slot containing an item instance

### Array[InventorySlotInstance] get_empty_slots() {#method-get-empty-slots}

Get all empty slots

### bool is_full() {#method-is-full}

Check if inventory is full

### bool is_empty() {#method-is-empty}

Check if inventory is empty

### int get_currency_amount( currency_id: int ) {#method-get-currency-amount}

Get the amount of a specific currency

### int get_currency_limit( currency_id: int ) {#method-get-currency-limit}

The most of a currency that can be held (0 = no limit): the maximum of its definition

### void set_currency_amount( currency_id: int, amount: int ) {#method-set-currency-amount}

Set the amount of a specific currency (never below 0, never above the maximum of the currency)

### int add_currency_clamped( currency_id: int, amount: int ) {#method-add-currency-clamped}

Add currency and say how much went in (the excess over the maximum of the currency is lost)

### bool add_currency( currency_id: int, amount: int ) {#method-add-currency}

Add currency to inventory (true when something went in)

### bool remove_currency( currency_id: int, amount: int ) {#method-remove-currency}

Remove currency from inventory

### bool can_afford_currency( currency_id: int, amount: int ) {#method-can-afford-currency}

Check if inventory has enough currency

### bool spend_currency( currency_id: int, amount: int ) {#method-spend-currency}

Spend currency if available

### bool add_currency_definition( currency_def: CurrencyDefinition, amount: int ) {#method-add-currency-definition}

Add currency by definition

### bool remove_currency_definition( currency_def: CurrencyDefinition, amount: int ) {#method-remove-currency-definition}

Remove currency by definition

### bool can_afford_currency_definition( currency_def: CurrencyDefinition, amount: int ) {#method-can-afford-currency-definition}

Check if can afford currency by definition

### bool spend_currency_definition( currency_def: CurrencyDefinition, amount: int ) {#method-spend-currency-definition}

Spend currency by definition

### Dictionary get_all_currencies() {#method-get-all-currencies}

Get all currency types in inventory

### Dictionary get_all_currency_amounts() {#method-get-all-currency-amounts}

Get all currency amounts in inventory (alias for compatibility)

### void clear_all_currency() {#method-clear-all-currency}

Clear all currency

### float add_item_with_quantity( item_instance: ItemInstance, quantity: float ) {#method-add-item-with-quantity}

Add item with quantity, returns remaining quantity that couldn't be added

### Dictionary calculate_addable_quantity( item_instance: ItemInstance, desired_quantity: float ) {#method-calculate-addable-quantity}

Calculate how much of an item can be added without actually adding it

### bool can_discard_item( item_instance: ItemInstance ) {#method-can-discard-item}

A key item cannot be discarded (dropped, destroyed or sold)

### bool discard_item( item_instance: ItemInstance, quantity: int = -1 ) {#method-discard-item}

Throw an item away (a stack, or part of it). False for a key item

### int remove_completed_quest_items() {#method-remove-completed-quest-items}

Remove all quest items that should be auto-removed (quest completed) Call this when a quest is completed to clean up associated items Returns the number of item stacks removed

### int remove_quest_items_for_quest( quest_id: int ) {#method-remove-quest-items-for-quest}

Remove all quest items for a specific quest ID Useful when you want to remove items for a specific quest Returns the number of item stacks removed

### int remove_quest_items_on_completion( quest_id: int ) {#method-remove-quest-items-on-completion}

Remove the items of a completed quest that are made to leave with it (`remove_on_quest_complete`). Returns the number of stacks removed

### bool has_quest_items_for_quest( quest_id: int ) {#method-has-quest-items-for-quest}

Check if inventory contains any quest items for a specific quest

### Array[ItemInstance] get_all_quest_items() {#method-get-all-quest-items}

Get all quest items in the inventory

### Array[ItemInstance] get_quest_items_for_quest( quest_id: int ) {#method-get-quest-items-for-quest}

Get all quest items for a specific quest ID

### Dictionary to_save_data() {#method-to-save-data}

Serialize inventory state to dictionary for saving

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Restore inventory state from saved dictionary data


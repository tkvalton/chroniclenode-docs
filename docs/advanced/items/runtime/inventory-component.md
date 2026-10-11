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
| `bool` | [is_shared](#var-is-shared) | `false` |
| `InventoryComponent` | [wallet](#var-wallet) | `null` |
| `InventoryStyle` | [style](#var-style) | `null` |
| `Entity` | [owner_entity](#var-owner-entity) | `null` |
| `int` | [extra_slots](#var-extra-slots) | `0` |
| `float` | [extra_capacity](#var-extra-capacity) | `0.0` |
| `String` | [last_block_reason](#var-last-block-reason) | `""` |
| `Array[InventorySlotInstance]` | [aside_slots](#var-aside-slots) | `[]` |

## Methods

| | |
|---|---|
| `void` | [configure](#method-configure)( `p_style: InventoryStyle, p_owner: Entity = null, slots_override: int = -1` ) |
| `int` | [get_slot_capacity](#method-get-slot-capacity)() |
| `void` | [refresh_capacity](#method-refresh-capacity)() |
| `Array[ItemInstance]` | [get_worn_bags](#method-get-worn-bags)() |
| `int` | [get_overflow_count](#method-get-overflow-count)() |
| `bool` | [can_release_bag](#method-can-release-bag)( `bag_item: ItemInstance` ) |
| `void` | [add_extra_slots](#method-add-extra-slots)( `amount: int` ) |
| `void` | [add_extra_capacity](#method-add-extra-capacity)( `amount: float` ) |
| `bool` | [is_grid](#method-is-grid)() |
| `int` | [get_grid_width](#method-get-grid-width)() |
| `Vector2i` | [get_grid_cell](#method-get-grid-cell)( `slot: InventorySlotInstance` ) |
| `int` | [count_grid_placements](#method-count-grid-placements)( `shape: Vector2i, wanted: int` ) |
| `bool` | [can_place_in_grid](#method-can-place-in-grid)( `item_instance: ItemInstance, target_slot: InventorySlotInstance` ) |
| `bool` | [place_in_grid](#method-place-in-grid)( `item_instance: ItemInstance, target_slot: InventorySlotInstance` ) |
| `bool` | [is_weight_on](#method-is-weight-on)() |
| `float` | [get_total_weight](#method-get-total-weight)() |
| `float` | [get_weight_capacity](#method-get-weight-capacity)() |
| `float` | [get_weight_percent](#method-get-weight-percent)() |
| `bool` | [is_over_capacity](#method-is-over-capacity)() |
| `void` | [refresh_encumbrance](#method-refresh-encumbrance)() |
| `EncumbranceTier` | [get_encumbrance_step](#method-get-encumbrance-step)() |
| `void` | [attach_wallet](#method-attach-wallet)( `shared_wallet: InventoryComponent` ) |
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
| `Array[InventorySlotInstance]` | [get_empty_slots](#method-get-empty-slots)( `definition: ItemDefinition = null` ) |
| `bool` | [is_completely_full](#method-is-completely-full)() |
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
| `Dictionary` | [get_visible_currencies](#method-get-visible-currencies)() |
| `Dictionary` | [get_all_currency_amounts](#method-get-all-currency-amounts)() |
| `void` | [clear_all_currency](#method-clear-all-currency)() |
| `float` | [add_item_with_quantity](#method-add-item-with-quantity)( `item_instance: ItemInstance, quantity: float` ) |
| `Dictionary` | [calculate_addable_quantity](#method-calculate-addable-quantity)( `item_instance: ItemInstance, desired_quantity: float` ) |
| `bool` | [can_discard_item](#method-can-discard-item)( `item_instance: ItemInstance` ) |
| `bool` | [discard_item](#method-discard-item)( `item_instance: ItemInstance, quantity: int = -1` ) |
| `Array[ItemInstance]` | [get_aside_items](#method-get-aside-items)() |
| `int` | [remove_completed_quest_items](#method-remove-completed-quest-items)() |
| `int` | [remove_quest_items_for_quest](#method-remove-quest-items-for-quest)( `quest_id: int` ) |
| `int` | [remove_quest_items_on_end](#method-remove-quest-items-on-end)( `quest_id: int, completed: bool` ) |
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

### slots_resized() {#signal-slots-resized}

Emitted when the number of slots changed (the window builds its slots again)

## Variable descriptions

### Dictionary currency =  {#var-currency}

Currency storage - currency_id (int) -&gt; amount (int)

### Array[InventorySlotInstance] slots = [] {#var-slots}

Array of inventory slots containing item instances

### int max_slots = 20 {#var-max-slots}

Maximum number of inventory slots available

### CombatManager combat_manager {#var-combat-manager}

The combat system manager

### bool is_shared = false {#var-is-shared}

This is the one bag of the whole party (the characters all use this object): its changes are not the business of one character alone

### InventoryComponent wallet = null {#var-wallet}

The purse of the party, when the money is shared: the currency functions of this inventory work on it, so the bag of every member shows and spends the same money

### InventoryStyle style = null {#var-style}

The rules of this inventory (space, weight). Null = a plain list of max_slots slots, as before

### Entity owner_entity = null {#var-owner-entity}

The entity whose bag this is (its stats give the capacity, its effects are used for encumbrance), if any

### int extra_slots = 0 {#var-extra-slots}

Slots added for good (a reward, an event): they come on top of what the style gives

### float extra_capacity = 0.0 {#var-extra-capacity}

Weight capacity added for good

### String last_block_reason = "" {#var-last-block-reason}

Why the last add was held back ("" = it was not): the giver can tell the player

### Array[InventorySlotInstance] aside_slots = [] {#var-aside-slots}

The stacks that are kept aside: items that take no space (no slot, no cell, no weight), see ItemDefinition.is_kept_aside. They are a list outside `slots` that grows and shrinks with what is in it, and they count everywhere else (counts, removal, requirements, triggers, saves)

## Method descriptions

### void configure( p_style: InventoryStyle, p_owner: Entity = null, slots_override: int = -1 ) {#method-configure}

Sets the rules of this inventory, whose it is, and (for a container) the number of slots it asks for. The size follows the stats from now on

### int get_slot_capacity() {#method-get-slot-capacity}

How many slots the rules give now: the style's, plus the slots added for good. A plain inventory (no style) has max_slots

### void refresh_capacity() {#method-refresh-capacity}

Makes the slots what the rules say: the slots of the style (the stat, the bonuses) and the slots of the bags worn. Growing adds slots; shrinking never destroys items: an item in a slot that goes away moves to a free slot, and when there is none its slot stays (over the limit) until it is emptied

### Array[ItemInstance] get_worn_bags() {#method-get-worn-bags}

The bags the owner wears, in the order of the equipment slots

### int get_overflow_count() {#method-get-overflow-count}

Slots of the character's own bag that hold items past the capacity (the bag got smaller and there was nowhere to move them)

### bool can_release_bag( bag_item: ItemInstance ) {#method-can-release-bag}

Could this bag come off? What it holds has to fit in the other slots (and the bag itself needs a slot too)

### void add_extra_slots( amount: int ) {#method-add-extra-slots}

Adds slots for good (a reward, an event). A negative number takes them away again

### void add_extra_capacity( amount: float ) {#method-add-extra-capacity}

Adds weight capacity for good

### bool is_grid() {#method-is-grid}

Is this a grid inventory (and not a shared bag)?

### int get_grid_width() {#method-get-grid-width}

How many cells wide the grid is

### Vector2i get_grid_cell( slot: InventorySlotInstance ) {#method-get-grid-cell}

The cell of a slot of a grid (x across, y down)

### int count_grid_placements( shape: Vector2i, wanted: int ) {#method-count-grid-placements}

How many items of this shape fit side by side in the free cells (up to `wanted`)

### bool can_place_in_grid( item_instance: ItemInstance, target_slot: InventorySlotInstance ) {#method-can-place-in-grid}

Does this item fit with its top left cell on this slot? (the item may be in the grid already: its own cells do not count)

### bool place_in_grid( item_instance: ItemInstance, target_slot: InventorySlotInstance ) {#method-place-in-grid}

Puts the item with its top left cell on this slot: it moves there if it fits, or joins the stack that is there. False when it does not fit

### bool is_weight_on() {#method-is-weight-on}

Does this inventory count weight?

### float get_total_weight() {#method-get-total-weight}

What everything in the bag weighs (and what is worn, when the style counts it)

### float get_weight_capacity() {#method-get-weight-capacity}

The most this inventory can carry before the limit

### float get_weight_percent() {#method-get-weight-percent}

What share of the capacity is carried (100 = exactly the capacity); 0 when there is no capacity to compare with

### bool is_over_capacity() {#method-is-over-capacity}

Is the load above the capacity?

### void refresh_encumbrance() {#method-refresh-encumbrance}

Puts the effect of the step of encumbrance that the load has reached on the owner (and takes the old one off)

### EncumbranceTier get_encumbrance_step() {#method-get-encumbrance-step}

The step of encumbrance that is on now (null = none)

### void attach_wallet( shared_wallet: InventoryComponent ) {#method-attach-wallet}

Uses the purse of another inventory(the shared purse of the party) for all money, from now on. The money this one held is moved into it

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

### Array[InventorySlotInstance] get_empty_slots( definition: ItemDefinition = null ) {#method-get-empty-slots}

Get all empty slots

### bool is_completely_full() {#method-is-completely-full}

Is there no room at all? No free slot (or cell, or room to grow) and no stack of an item that stacks that has room left. A bag like this takes nothing

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

### Dictionary get_visible_currencies() {#method-get-visible-currencies}

The currencies the player is shown: the ones held, without the ones that are not listed with the money (CurrencyDefinition.show_in_wallet)

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

### Array[ItemInstance] get_aside_items() {#method-get-aside-items}

The items that are kept aside (they take no space in the bag)

### int remove_completed_quest_items() {#method-remove-completed-quest-items}

Remove all quest items that should be auto-removed (quest completed) Call this when a quest is completed to clean up associated items Returns the number of item stacks removed

### int remove_quest_items_for_quest( quest_id: int ) {#method-remove-quest-items-for-quest}

Remove all quest items for a specific quest ID Useful when you want to remove items for a specific quest Returns the number of item stacks removed

### int remove_quest_items_on_end( quest_id: int, completed: bool ) {#method-remove-quest-items-on-end}

Remove the items of a quest that stopped running: the ones that only exist while it runs, and (when it completed) the ones made to leave with it (`remove_on_quest_complete`). Returns the number of stacks removed

### int remove_quest_items_on_completion( quest_id: int ) {#method-remove-quest-items-on-completion}

Remove the items of a completed quest that are made to leave with it (kept for scripts; see remove_quest_items_on_end)

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


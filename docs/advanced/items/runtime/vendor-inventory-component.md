<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VendorInventoryComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Stock-based vendor inventory that manages item availability and creates instances on-demand No longer inherits from InventoryComponent - uses pure stock tracking instead

## Variables

| | | |
|---|---|---|
| `VendorDefinition` | [vendor_definition](#var-vendor-definition) |  |
| `Dictionary` | [current_stock](#var-current-stock) | `{}` |
| `float` | [last_restock_time](#var-last-restock-time) | `0.0` |
| `Dictionary` | [item_restock_times](#var-item-restock-times) | `{}` |
| `Array[Dictionary]` | [transaction_history](#var-transaction-history) | `[]` |
| `Dictionary` | [vendor_currency_reserves](#var-vendor-currency-reserves) | `{}` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_vendor_inventory](#method-initialize-vendor-inventory)( `definition: VendorDefinition` ) |
| `int` | [get_stock_quantity](#method-get-stock-quantity)( `item_id: int` ) |
| `bool` | [is_item_in_stock](#method-is-item-in-stock)( `item_id: int` ) |
| `void` | [set_stock_quantity](#method-set-stock-quantity)( `item_id: int, quantity: int` ) |
| `bool` | [reduce_stock](#method-reduce-stock)( `item_id: int, quantity: int` ) |
| `void` | [increase_stock](#method-increase-stock)( `item_id: int, quantity: int` ) |
| `Array[Dictionary]` | [get_available_items](#method-get-available-items)() |
| `Array[Dictionary]` | [get_all_stocked_items](#method-get-all-stocked-items)() |
| `int` | [get_currency_amount](#method-get-currency-amount)( `currency_id: int` ) |
| `void` | [set_currency_amount](#method-set-currency-amount)( `currency_id: int, amount: int` ) |
| `bool` | [can_afford](#method-can-afford)( `currency_id: int, cost: int` ) |
| `bool` | [remove_currency](#method-remove-currency)( `currency_id: int, amount: int` ) |
| `void` | [add_currency](#method-add-currency)( `currency_id: int, amount: int` ) |
| `bool` | [has_unlimited_currency](#method-has-unlimited-currency)( `currency_id: int` ) |
| `ItemInstance` | [create_item_for_purchase](#method-create-item-for-purchase)( `item_id: int, quantity: int` ) |
| `bool` | [check_and_restock](#method-check-and-restock)() |
| `void` | [perform_restock](#method-perform-restock)() |
| `float` | [get_time_until_restock](#method-get-time-until-restock)() |
| `Dictionary` | [sell_item_to_player](#method-sell-item-to-player)( `item_id: int, quantity: int, player: Entity` ) |
| `Dictionary` | [buy_item_from_player](#method-buy-item-from-player)( `item_instance: ItemInstance, quantity: int, player: Entity` ) |
| `int` | [get_item_price](#method-get-item-price)( `item_id: int` ) |
| `String` | [get_item_display_price](#method-get-item-display-price)( `item_id: int` ) |
| `String` | [get_buyback_price](#method-get-buyback-price)( `item_instance: ItemInstance` ) |
| `int` | [calculate_sell_price](#method-calculate-sell-price)( `item_instance: ItemInstance` ) |
| `Dictionary` | [get_vendor_summary](#method-get-vendor-summary)() |
| `Dictionary` | [get_save_data](#method-get-save-data)() |
| `void` | [load_save_data](#method-load-save-data)( `data: Dictionary` ) |
| `bool` | [is_valid_setup](#method-is-valid-setup)() |

## Signals

### vendor_restocked() {#signal-vendor-restocked}

Emitted when vendor restocks items

### item_sold_to_player( item_definition: ItemDefinition, quantity: int, total_cost: int, currency_id: int ) {#signal-item-sold-to-player}

Emitted when player buys an item from vendor

### item_bought_from_player( item_instance: ItemInstance, quantity: int, total_payment: int, currency_id: int ) {#signal-item-bought-from-player}

Emitted when player sells an item to vendor

### item_out_of_stock( item_definition: ItemDefinition ) {#signal-item-out-of-stock}

Emitted when item goes out of stock

### stock_changed( item_id: int, new_quantity: int, old_quantity: int ) {#signal-stock-changed}

Emitted when stock levels change

### currency_changed( currency_id: int, new_amount: int ) {#signal-currency-changed}

Emitted when vendor's currency reserves change

## Constants

- `int` **UNLIMITED_STOCK** = `-1` - Constant for unlimited stock

## Variable descriptions

### VendorDefinition vendor_definition {#var-vendor-definition}

Reference to the vendor definition (blueprint)

### Dictionary current_stock =  {#var-current-stock}

Current stock quantities by item_id: Dictionary[int, int] (-1 = unlimited)

### float last_restock_time = 0.0 {#var-last-restock-time}

Last restock time (game hours since the start of the game, ChronoManager.total_game_hours)

### Dictionary item_restock_times =  {#var-item-restock-times}

The last time each item was due for a restock (item id -&gt; game hours): every item waits its own interval

### Array[Dictionary] transaction_history = [] {#var-transaction-history}

Player transaction history (for reputation/relationship building)

### Dictionary vendor_currency_reserves =  {#var-vendor-currency-reserves}

Vendor's current currency reserves for buying items from players (-1 = unlimited)

### ChronoManager chrono_manager {#var-chrono-manager}

The combat system manager

## Method descriptions

### void initialize_vendor_inventory( definition: VendorDefinition ) {#method-initialize-vendor-inventory}

Initialize vendor inventory from definition

### int get_stock_quantity( item_id: int ) {#method-get-stock-quantity}

Get current stock quantity for an item

### bool is_item_in_stock( item_id: int ) {#method-is-item-in-stock}

Check if item is in stock

### void set_stock_quantity( item_id: int, quantity: int ) {#method-set-stock-quantity}

Set stock quantity for an item (with signals)

### bool reduce_stock( item_id: int, quantity: int ) {#method-reduce-stock}

Reduce stock quantity (for sales)

### void increase_stock( item_id: int, quantity: int ) {#method-increase-stock}

Increase stock quantity (for restocking)

### Array[Dictionary] get_available_items() {#method-get-available-items}

Get all available item definitions (items with stock &gt; 0 or unlimited)

### Array[Dictionary] get_all_stocked_items() {#method-get-all-stocked-items}

Get all stocked items (including out of stock for display)

### int get_currency_amount( currency_id: int ) {#method-get-currency-amount}

Get current amount of a currency

### void set_currency_amount( currency_id: int, amount: int ) {#method-set-currency-amount}

Set currency amount (with signal)

### bool can_afford( currency_id: int, cost: int ) {#method-can-afford}

Check if vendor can afford a cost

### bool remove_currency( currency_id: int, amount: int ) {#method-remove-currency}

Remove currency (returns false if insufficient)

### void add_currency( currency_id: int, amount: int ) {#method-add-currency}

Add currency

### bool has_unlimited_currency( currency_id: int ) {#method-has-unlimited-currency}

Check if vendor has unlimited currency

### ItemInstance create_item_for_purchase( item_id: int, quantity: int ) {#method-create-item-for-purchase}

Create an item instance for purchase (only called when actually buying)

### bool check_and_restock() {#method-check-and-restock}

Restock the items whose time is up (every item has its own interval: `custom_restock_hours`, else the one of the vendor). The wait of an item starts over every time it is due, whether or not it had room for more. Time is game hours that never wrap (ChronoManager.total_game_hours)

### void perform_restock() {#method-perform-restock}

Manually trigger restocking of everything that can restock

### float get_time_until_restock() {#method-get-time-until-restock}

Get time until the next restock (game hours; -1 when nothing restocks)

### Dictionary sell_item_to_player( item_id: int, quantity: int, player: Entity ) {#method-sell-item-to-player}

Player buys item from vendor: all or nothing (the stock, the price and the room for everything are checked first)

### Dictionary buy_item_from_player( item_instance: ItemInstance, quantity: int, player: Entity ) {#method-buy-item-from-player}

Player sells item to vendor (a key item cannot be sold)

### int get_item_price( item_id: int ) {#method-get-item-price}

Get the selling price for an item (what player pays to vendor)

### String get_item_display_price( item_id: int ) {#method-get-item-display-price}

Get display price for an item with currency formatting

### String get_buyback_price( item_instance: ItemInstance ) {#method-get-buyback-price}

Get buy-back price for an item instance (what vendor will pay player)

### int calculate_sell_price( item_instance: ItemInstance ) {#method-calculate-sell-price}

Calculate what vendor will pay player for an item (numerical value)

### Dictionary get_vendor_summary() {#method-get-vendor-summary}

A short description of the vendor (for debugging and the UI)

### Dictionary get_save_data() {#method-get-save-data}

*No description yet.*

### void load_save_data( data: Dictionary ) {#method-load-save-data}

*No description yet.*

### bool is_valid_setup() {#method-is-valid-setup}

Validate vendor setup


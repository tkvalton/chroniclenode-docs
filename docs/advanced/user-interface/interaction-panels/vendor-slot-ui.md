<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VendorSlotUI

**Inherits:** `MarginContainer`

Clean VendorSlotUI that initializes everything in setup_vendor_slot() instead of _ready() Refactored to use system_hub instead of ui_manager

## Variables

| | | |
|---|---|---|
| `ItemDefinition` | [item_definition](#var-item-definition) |  |
| `VendorInventoryComponent` | [vendor_inventory](#var-vendor-inventory) |  |
| `Entity` | [player_entity](#var-player-entity) |  |
| `int` | [item_id](#var-item-id) |  |
| `int` | [stock_quantity](#var-stock-quantity) |  |
| `int` | [item_price](#var-item-price) |  |
| `CurrencyDefinition` | [currency_definition](#var-currency-definition) |  |
| `bool` | [is_interactable](#var-is-interactable) | `true` |
| `Color` | [default_background_color](#var-default-background-color) | `Color.WHITE` |
| `Color` | [hover_background_color](#var-hover-background-color) | `Color(1.2, 1.2, 1.2, 1.0)` |
| `Color` | [unavailable_background_color](#var-unavailable-background-color) | `Color(0.5, 0.5, 0.5, 1.0)` |
| `Color` | [out_of_stock_background_color](#var-out-of-stock-background-color) | `Color(0.3, 0.3, 0.3, 1.0)` |

## Methods

| | |
|---|---|
| `void` | [setup_vendor_slot](#method-setup-vendor-slot)( `item_def: ItemDefinition, vendor_inv: VendorInventoryComponent, player: Entity` ) |
| `void` | [refresh_display](#method-refresh-display)() |
| `String` | [get_vendor_buy_price](#method-get-vendor-buy-price)() |
| `bool` | [has_item](#method-has-item)() |
| `String` | [get_price_string](#method-get-price-string)() |
| `bool` | [can_purchase](#method-can-purchase)() |
| `void` | [update_stock_display](#method-update-stock-display)( `new_stock: int` ) |
| `int` | [get_stock_quantity](#method-get-stock-quantity)() |
| `int` | [get_item_price](#method-get-item-price)() |
| `void` | [update_affordability](#method-update-affordability)() |

## Signals

### purchase_requested( item_id: int, quantity: int ) {#signal-purchase-requested}

Emitted when the player wants to buy: the item and how many.

### item_tooltip_requested( item: ItemInstance, definition: ItemDefinition, context: String, additional_data: Dictionary ) {#signal-item-tooltip-requested}

Tooltips

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Asks the interface to hide the tooltip (force hides it at once).

### message_requested( message: String ) {#signal-message-requested}

Messages

### warning_message_requested( message: String ) {#signal-warning-message-requested}

Asks the interface to show a warning.

### ui_sfx_request( sound: AudioManager.UISound, volume_modifier: float ) {#signal-ui-sfx-request}

Audio Request

## Constants

- `int` **UNLIMITED_STOCK** = `-1` - Constant for unlimited stock

## Variable descriptions

### ItemDefinition item_definition {#var-item-definition}

The item the slot sells.

### VendorInventoryComponent vendor_inventory {#var-vendor-inventory}

The stock of the vendor.

### Entity player_entity {#var-player-entity}

The player who buys.

### int item_id {#var-item-id}

The id of the item.

### int stock_quantity {#var-stock-quantity}

How many are in stock.

### int item_price {#var-item-price}

The price of one.

### CurrencyDefinition currency_definition {#var-currency-definition}

The currency of the price.

### bool is_interactable = true {#var-is-interactable}

True when the player can buy from the slot.

### Color default_background_color = Color.WHITE {#var-default-background-color}

The color of the background.

### Color hover_background_color = Color(1.2, 1.2, 1.2, 1.0) {#var-hover-background-color}

The color of the background under the mouse.

### Color unavailable_background_color = Color(0.5, 0.5, 0.5, 1.0) {#var-unavailable-background-color}

The color of the background when the player cannot buy.

### Color out_of_stock_background_color = Color(0.3, 0.3, 0.3, 1.0) {#var-out-of-stock-background-color}

The color of the background when it is out of stock.

## Method descriptions

### void setup_vendor_slot( item_def: ItemDefinition, vendor_inv: VendorInventoryComponent, player: Entity ) {#method-setup-vendor-slot}

Setup this slot with vendor item data - call this after adding as child

### void refresh_display() {#method-refresh-display}

Refresh all display elements

### String get_vendor_buy_price() {#method-get-vendor-buy-price}

Get vendor's buy-back price for this item type

### bool has_item() {#method-has-item}

Does the slot sell something?

### String get_price_string() {#method-get-price-string}

The price as text, with the currency.

### bool can_purchase() {#method-can-purchase}

Can the player buy from the slot (it is in stock)?

### void update_stock_display( new_stock: int ) {#method-update-stock-display}

Shows a new stock quantity.

### int get_stock_quantity() {#method-get-stock-quantity}

How many are in stock.

### int get_item_price() {#method-get-item-price}

The price of one.

### void update_affordability() {#method-update-affordability}

Checks whether the player can pay, and updates the slot.


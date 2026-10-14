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

### item_tooltip_requested( item: ItemInstance, definition: ItemDefinition, context: String, additional_data: Dictionary ) {#signal-item-tooltip-requested}

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

### message_requested( message: String ) {#signal-message-requested}

### warning_message_requested( message: String ) {#signal-warning-message-requested}

### ui_sfx_request( sound: AudioManager.UISound, volume_modifier: float ) {#signal-ui-sfx-request}

## Constants

- `int` **UNLIMITED_STOCK** = `-1` - Constant for unlimited stock

## Variable descriptions

### ItemDefinition item_definition {#var-item-definition}

*No description yet.*

### VendorInventoryComponent vendor_inventory {#var-vendor-inventory}

*No description yet.*

### Entity player_entity {#var-player-entity}

*No description yet.*

### int item_id {#var-item-id}

*No description yet.*

### int stock_quantity {#var-stock-quantity}

*No description yet.*

### int item_price {#var-item-price}

*No description yet.*

### CurrencyDefinition currency_definition {#var-currency-definition}

*No description yet.*

### bool is_interactable = true {#var-is-interactable}

*No description yet.*

### Color default_background_color = Color.WHITE {#var-default-background-color}

*No description yet.*

### Color hover_background_color = Color(1.2, 1.2, 1.2, 1.0) {#var-hover-background-color}

*No description yet.*

### Color unavailable_background_color = Color(0.5, 0.5, 0.5, 1.0) {#var-unavailable-background-color}

*No description yet.*

### Color out_of_stock_background_color = Color(0.3, 0.3, 0.3, 1.0) {#var-out-of-stock-background-color}

*No description yet.*

## Method descriptions

### void setup_vendor_slot( item_def: ItemDefinition, vendor_inv: VendorInventoryComponent, player: Entity ) {#method-setup-vendor-slot}

Setup this slot with vendor item data - call this after adding as child

### void refresh_display() {#method-refresh-display}

Refresh all display elements

### String get_vendor_buy_price() {#method-get-vendor-buy-price}

Get vendor's buy-back price for this item type

### bool has_item() {#method-has-item}

*No description yet.*

### String get_price_string() {#method-get-price-string}

*No description yet.*

### bool can_purchase() {#method-can-purchase}

*No description yet.*

### void update_stock_display( new_stock: int ) {#method-update-stock-display}

*No description yet.*

### int get_stock_quantity() {#method-get-stock-quantity}

*No description yet.*

### int get_item_price() {#method-get-item-price}

*No description yet.*

### void update_affordability() {#method-update-affordability}

*No description yet.*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VendorPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Refactored vendor panel that uses definition-based VendorSlotUI for shop display Left side: Vendor items (VendorSlotUI grid) Right side: Player inventory (InventoryUI for selling items back) Refactored to remove ui_manager references

## Properties

| | | |
|---|---|---|
| `bool` | [show_repair_button](#prop-show-repair-button) | `true` |
| `int` | [vendor_slots_per_row](#prop-vendor-slots-per-row) | `6` |
| `int` | [max_vendor_rows](#prop-max-vendor-rows) | `8` |
| `PackedScene` | [vendor_slot_scene](#prop-vendor-slot-scene) |  |
| `PackedScene` | [currency_display_scene](#prop-currency-display-scene) |  |

## Variables

| | | |
|---|---|---|
| `VendorInventoryComponent` | [vendor_inventory](#var-vendor-inventory) |  |
| `Entity` | [player_entity](#var-player-entity) |  |
| `bool` | [is_repair_mode](#var-is-repair-mode) | `false` |
| `Array[VendorSlotUI]` | [vendor_slots](#var-vendor-slots) | `[]` |
| `Dictionary` | [currency_displays](#var-currency-displays) | `{}  # currency_id -> CurrencyDisplay` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [setup_vendor_panel](#method-setup-vendor-panel)( `vendor: VendorInventoryComponent, player: Entity` ) |
| `void` | [clear_vendor_slots](#method-clear-vendor-slots)() |
| `void` | [close_panel](#method-close-panel)() |

## Signals

### transaction_completed( success: bool, message: String ) {#signal-transaction-completed}

Emitted when a purchase or a sale ends: whether it worked and a message.

## Property descriptions

### bool show_repair_button = true {#prop-show-repair-button}

True shows the repair button.

### int vendor_slots_per_row = 6 {#prop-vendor-slots-per-row}

How many vendor slots are in a row.

### int max_vendor_rows = 8 {#prop-max-vendor-rows}

How many rows of vendor slots the panel shows.

### PackedScene vendor_slot_scene {#prop-vendor-slot-scene}

The scene of one vendor slot.

### PackedScene currency_display_scene {#prop-currency-display-scene}

The scene of one currency display.

## Variable descriptions

### VendorInventoryComponent vendor_inventory {#var-vendor-inventory}

The stock of the vendor.

### Entity player_entity {#var-player-entity}

The player who trades.

### bool is_repair_mode = false {#var-is-repair-mode}

True while the player picks an item to repair.

### Array[VendorSlotUI] vendor_slots = [] {#var-vendor-slots}

Vendor slot management

### Dictionary currency_displays =   # currency_id -&gt; CurrencyDisplay {#var-currency-displays}

Currency displays

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### void setup_vendor_panel( vendor: VendorInventoryComponent, player: Entity ) {#method-setup-vendor-panel}

Setup the vendor panel with vendor and player data

### void clear_vendor_slots() {#method-clear-vendor-slots}

Clear all vendor slots

### void close_panel() {#method-close-panel}

Closes the window.


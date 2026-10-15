<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InventoryUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Clean and Simple Universal Inventory UI - Refactored to extend PanelUI Updated to remove VENDOR_INVENTORY logic (now handled by dedicated VendorSlotUI)

## Description

PLAYER_INVENTORY: Player's inventory

- Drag &amp; Drop: Move items around freely
- Right-click: Use/Equip items (ItemInstance.use() handles everything)

EXTERNAL_INVENTORY: Loot containers, corpses, etc.

- Drag &amp; Drop: Move items in/out freely (loot &lt;-&gt; inventory)
- Right-click: Auto-loot item to player inventory

PLAYER_VENDOR_INVENTORY: Player inventory in shop context

- Right-click: Sell item to vendor (instead of use)
- Shows vendor buy price in tooltips

READONLY: Display only, no interactions

- No interactions allowed
- Used for crafting material displays, quest rewards, etc.

## Properties

| | | |
|---|---|---|
| `InventoryContext` | [context](#prop-context) | `InventoryContext.PLAYER_INVENTORY` |
| `String` | [title](#prop-title) | `""` |
| `bool` | [show_currency](#prop-show-currency) | `true` |
| `bool` | [allow_drag_and_drop](#prop-allow-drag-and-drop) | `true` |
| `bool` | [show_kept_aside](#prop-show-kept-aside) | `true` |
| `int` | [grid_columns](#prop-grid-columns) | `4` |
| `PackedScene` | [inventory_slot_scene](#prop-inventory-slot-scene) |  |
| `PackedScene` | [currency_display_scene](#prop-currency-display-scene) |  |

## Variables

| | | |
|---|---|---|
| `InventoryComponent` | [inventory_data](#var-inventory-data) |  |
| `Variant` | [inventory_owner](#var-inventory-owner) |  |
| `VendorInventoryComponent` | [vendor_data](#var-vendor-data) |  |
| `Array[Control]` | [slot_uis](#var-slot-uis) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `system_hub: GameHost.SystemHub` ) |
| `void` | [setup_player_inventory](#method-setup-player-inventory)( `inventory: InventoryComponent, window_title: String = ""` ) |
| `void` | [setup_external_inventory](#method-setup-external-inventory)( `inventory: InventoryComponent, inv_owner: Variant, window_title: String = ""` ) |
| `void` | [setup_player_vendor_inventory](#method-setup-player-vendor-inventory)( `inventory: InventoryComponent, vendor: VendorInventoryComponent, window_title: String = ""` ) |
| `InventoryContext` | [get_context](#method-get-context)() |
| `InventoryComponent` | [get_inventory_data](#method-get-inventory-data)() |
| `VendorInventoryComponent` | [get_vendor_data](#method-get-vendor-data)() |
| `Entity` | [get_inventory_owner](#method-get-inventory-owner)() |
| `void` | [set_title](#method-set-title)( `new_title: String` ) |
| `void` | [refresh](#method-refresh)() |
| `void` | [cleanup](#method-cleanup)() |

## Enumerations

### enum InventoryContext {#enum-inventorycontext}

The options of inventory context: player inventory, external inventory, player vendor inventory, readonly.

- **PLAYER_INVENTORY** = `0` - Player's main inventory
- **EXTERNAL_INVENTORY** = `1` - Containers, loot, etc.
- **PLAYER_VENDOR_INVENTORY** = `2` - Player inventory while in shop
- **READONLY** = `3` - No interactions allowed

## Constants

- `int` **GRID_CELL_SIZE** = `44` - The size of one slot in pixels.

## Property descriptions

### InventoryContext context = InventoryContext.PLAYER_INVENTORY {#prop-context}

Whose inventory the window shows (the player, a container, a vendor ...).

### String title = "" {#prop-title}

The title of the window.

### bool show_currency = true {#prop-show-currency}

True shows the currencies.

### bool allow_drag_and_drop = true {#prop-allow-drag-and-drop}

True lets the player drag items.

### bool show_kept_aside = true {#prop-show-kept-aside}

Lists the items that are kept aside (quest items that take no space) under the slots, as "Quest items". Off = the window does not show them at all (they stay in the bag)

### int grid_columns = 4 {#prop-grid-columns}

How many slots are in a row.

### PackedScene inventory_slot_scene {#prop-inventory-slot-scene}

The scene of one slot.

### PackedScene currency_display_scene {#prop-currency-display-scene}

The scene of one currency display.

## Variable descriptions

### InventoryComponent inventory_data {#var-inventory-data}

The inventory shown.

### Variant inventory_owner {#var-inventory-owner}

Who owns the inventory.

### VendorInventoryComponent vendor_data {#var-vendor-data}

The stock of the vendor, when it shows one.

### Array[Control] slot_uis = [] {#var-slot-uis}

The slots shown.

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### void setup_player_inventory( inventory: InventoryComponent, window_title: String = "" ) {#method-setup-player-inventory}

Setup player inventory (normal or vendor context)

### void setup_external_inventory( inventory: InventoryComponent, inv_owner: Variant, window_title: String = "" ) {#method-setup-external-inventory}

Setup external inventory (containers, loot, etc.)

### void setup_player_vendor_inventory( inventory: InventoryComponent, vendor: VendorInventoryComponent, window_title: String = "" ) {#method-setup-player-vendor-inventory}

Setup player inventory in vendor context (for selling to vendor)

### InventoryContext get_context() {#method-get-context}

Whose inventory the window shows.

### InventoryComponent get_inventory_data() {#method-get-inventory-data}

The inventory shown.

### VendorInventoryComponent get_vendor_data() {#method-get-vendor-data}

The stock of the vendor, when it shows one.

### Entity get_inventory_owner() {#method-get-inventory-owner}

Who owns the inventory.

### void set_title( new_title: String ) {#method-set-title}

Sets the title of the window.

### void refresh() {#method-refresh}

Fills the grid and the currencies again.

### void cleanup() {#method-cleanup}

Disconnects the inventory and clears the grid.


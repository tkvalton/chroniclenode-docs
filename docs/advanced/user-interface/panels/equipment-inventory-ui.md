<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EquipmentInventoryUI

**Inherits:** `MarginContainer`

Clean equipment panel using the unified ItemSlotUI system

## Properties

| | | |
|---|---|---|
| `PackedScene` | [item_slot_scene](#prop-item-slot-scene) |  |

## Variables

| | | |
|---|---|---|
| `Player` | [panel_player](#var-panel-player) |  |
| `EquipmentInventoryComponent` | [current_equipment_data](#var-current-equipment-data) |  |
| `Array[ItemSlotUI]` | [equipment_slot_uis](#var-equipment-slot-uis) | `[]` |
| `Dictionary` | [slot_ui_lookup](#var-slot-ui-lookup) | `{}` |
| `PlayerController` | [player_controller](#var-player-controller) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `system_hub: GameHost.SystemHub` ) |
| `void` | [set_inventory_data](#method-set-inventory-data)( `equipment_data: EquipmentInventoryComponent` ) |
| `ItemSlotUI` | [get_equipment_slot_ui](#method-get-equipment-slot-ui)( `slot_definition: EquipmentSlotDefinition, instance_index: int = 0` ) |
| `Array[ItemSlotUI]` | [get_all_equipment_slot_uis](#method-get-all-equipment-slot-uis)() |
| `Array[ItemSlotUI]` | [get_equipment_slots_by_category](#method-get-equipment-slots-by-category)( `category: EquipmentSlotDefinition.SlotCategory` ) |
| `void` | [refresh_all_equipment_slots](#method-refresh-all-equipment-slots)() |
| `ItemSlotUI` | [find_slot_with_item](#method-find-slot-with-item)( `item_instance: ItemInstance` ) |
| `Array[ItemInstance]` | [get_equipped_items](#method-get-equipped-items)() |
| `Array[ItemInstance]` | [get_equipped_items_by_category](#method-get-equipped-items-by-category)( `category: EquipmentSlotDefinition.SlotCategory` ) |
| `bool` | [is_slot_occupied](#method-is-slot-occupied)( `slot_definition: EquipmentSlotDefinition, instance_index: int = 0` ) |
| `bool` | [has_equipped_item_in_category](#method-has-equipped-item-in-category)( `category: EquipmentSlotDefinition.SlotCategory` ) |
| `int` | [get_total_slot_count](#method-get-total-slot-count)() |
| `int` | [get_occupied_slot_count](#method-get-occupied-slot-count)() |
| `Array[ItemSlotUI]` | [get_sorted_equipment_slots](#method-get-sorted-equipment-slots)() |
| `Dictionary` | [get_equipment_summary](#method-get-equipment-summary)() |
| `void` | [set_panel_player](#method-set-panel-player)( `player: Player` ) |
| `void` | [set_preview_camera](#method-set-preview-camera)( `camera: Camera3D` ) |

## Signals

### socket_panel_requested( equipment_item: ItemInstance ) {#signal-socket-panel-requested}

========== SIGNALS ==========

### item_tooltip_requested( item: ItemInstance, definition: ItemDefinition, context: String, additional_data: Dictionary ) {#signal-item-tooltip-requested}

Asks the interface to show the tooltip of an item: the item, its definition, where it is and extra data.

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Asks the interface to hide the tooltip (force hides it at once).

### message_requested( message: String ) {#signal-message-requested}

Asks the interface to show a message.

### warning_message_requested( message: String ) {#signal-warning-message-requested}

Asks the interface to show a warning.

### drag_from_equipment_requested( item: ItemInstance, slot_data: SlotInstance ) {#signal-drag-from-equipment-requested}

========== DRAG SIGNALS ==========

## Property descriptions

### PackedScene item_slot_scene {#prop-item-slot-scene}

The scene of one slot.

## Variable descriptions

### Player panel_player {#var-panel-player}

The player whose equipment the panel shows.

### EquipmentInventoryComponent current_equipment_data {#var-current-equipment-data}

The equipment the panel shows.

### Array[ItemSlotUI] equipment_slot_uis = [] {#var-equipment-slot-uis}

UI slot tracking

### Dictionary slot_ui_lookup =  {#var-slot-ui-lookup}

slot_identifier -&gt; ItemSlotUI

### PlayerController player_controller {#var-player-controller}

SystemRefs

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### void set_inventory_data( equipment_data: EquipmentInventoryComponent ) {#method-set-inventory-data}

Shows the equipment of a player (the slots are made or updated).

### ItemSlotUI get_equipment_slot_ui( slot_definition: EquipmentSlotDefinition, instance_index: int = 0 ) {#method-get-equipment-slot-ui}

Get a specific equipment slot UI by definition and instance

### Array[ItemSlotUI] get_all_equipment_slot_uis() {#method-get-all-equipment-slot-uis}

Get all equipment slot UIs

### Array[ItemSlotUI] get_equipment_slots_by_category( category: EquipmentSlotDefinition.SlotCategory ) {#method-get-equipment-slots-by-category}

Get equipment slot UIs by category

### void refresh_all_equipment_slots() {#method-refresh-all-equipment-slots}

Refresh all equipment slot displays

### ItemSlotUI find_slot_with_item( item_instance: ItemInstance ) {#method-find-slot-with-item}

Find equipment slot UI that contains specific item

### Array[ItemInstance] get_equipped_items() {#method-get-equipped-items}

Get currently equipped items

### Array[ItemInstance] get_equipped_items_by_category( category: EquipmentSlotDefinition.SlotCategory ) {#method-get-equipped-items-by-category}

Get equipped items by category

### bool is_slot_occupied( slot_definition: EquipmentSlotDefinition, instance_index: int = 0 ) {#method-is-slot-occupied}

Check if a specific slot is occupied

### bool has_equipped_item_in_category( category: EquipmentSlotDefinition.SlotCategory ) {#method-has-equipped-item-in-category}

Check if any slot of a category is occupied

### int get_total_slot_count() {#method-get-total-slot-count}

Get total number of equipment slots

### int get_occupied_slot_count() {#method-get-occupied-slot-count}

Get number of occupied slots

### Array[ItemSlotUI] get_sorted_equipment_slots() {#method-get-sorted-equipment-slots}

Get equipment slots sorted by category and sort order

### Dictionary get_equipment_summary() {#method-get-equipment-summary}

Get equipment summary by category

### void set_panel_player( player: Player ) {#method-set-panel-player}

Set the panel player

### void set_preview_camera( camera: Camera3D ) {#method-set-preview-camera}

Set the preview camera for character preview


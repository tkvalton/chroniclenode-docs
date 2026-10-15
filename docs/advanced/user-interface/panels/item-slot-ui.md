<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemSlotUI

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Fully Unified Slot UI - handles ALL slot types (inventory, equipment, vendor) No need for separate InventorySlotUI, EquipmentSlotUI, etc.

## Variables

| | | |
|---|---|---|
| `SlotInstance` | [slot_data](#var-slot-data) |  |
| `SlotVisualState` | [current_visual_state](#var-current-visual-state) | `SlotVisualState.EMPTY` |
| `bool` | [allow_drag](#var-allow-drag) | `true` |
| `bool` | [allow_drop](#var-allow-drop) | `true` |
| `bool` | [allow_right_click_use](#var-allow-right-click-use) | `true` |
| `bool` | [drag_enabled](#var-drag-enabled) | `true` |
| `bool` | [interaction_enabled](#var-interaction-enabled) | `true` |
| `Color` | [default_color](#var-default-color) | `Color(0.25, 0.25, 0.25)` |
| `Color` | [locked_color](#var-locked-color) | `Color(0.1, 0.1, 0.1, 0.8)` |
| `Color` | [hover_color](#var-hover-color) | `Color(1.2, 1.2, 1.2, 1.0)` |
| `float` | [last_click_time](#var-last-click-time) | `0.0` |
| `float` | [double_click_threshold](#var-double-click-threshold) | `0.3` |
| `bool` | [needs_display_update](#var-needs-display-update) | `false` |
| `String` | [slot_type](#var-slot-type) | `"inventory"` |
| `String` | [group_name](#var-group-name) | `""` |
| `bool` | [is_showing_cooldown](#var-is-showing-cooldown) | `false` |
| `EquipmentSlotDefinition` | [equipment_slot_definition](#var-equipment-slot-definition) |  |
| `int` | [slot_instance_index](#var-slot-instance-index) | `0` |

## Methods

| | |
|---|---|
| `void` | [set_slot_type](#method-set-slot-type)( `type: String` ) |
| `void` | [setup_for_equipment_slot](#method-setup-for-equipment-slot)( `slot_def: EquipmentSlotDefinition, instance_index: int = 0` ) |
| `void` | [set_drag_enabled](#method-set-drag-enabled)( `enabled: bool` ) |
| `void` | [set_slot_data](#method-set-slot-data)( `new_slot_data: SlotInstance` ) |
| `void` | [update_display](#method-update-display)() |
| `void` | [set_visual_state](#method-set-visual-state)( `new_state: SlotVisualState` ) |
| `bool` | [should_show_quantity](#method-should-show-quantity)() |
| `ItemInstance` | [get_equipped_item_instance](#method-get-equipped-item-instance)() |
| `EquipmentSlotDefinition` | [get_equipment_slot_definition](#method-get-equipment-slot-definition)() |
| `bool` | [is_slot_empty](#method-is-slot-empty)() |
| `bool` | [is_slot_locked](#method-is-slot-locked)() |
| `ItemInstance` | [get_item_instance](#method-get-item-instance)() |
| `int` | [get_quantity](#method-get-quantity)() |
| `bool` | [has_item](#method-has-item)() |
| `SlotInstance` | [get_slot_data](#method-get-slot-data)() |
| `void` | [set_interaction_permissions](#method-set-interaction-permissions)( `drag: bool, drop: bool, right_click: bool` ) |

## Signals

### item_right_clicked( slot: ItemSlotUI ) {#signal-item-right-clicked}

Emitted when the slot is right clicked.

### item_left_clicked( slot: ItemSlotUI ) {#signal-item-left-clicked}

Emitted when the slot is left clicked.

### item_double_clicked( slot: ItemSlotUI ) {#signal-item-double-clicked}

Emitted when the slot is double clicked.

### item_hovered( slot: ItemSlotUI, is_hovering: bool ) {#signal-item-hovered}

Emitted when the mouse enters or leaves the slot.

### socket_panel_requested( equipment_item: ItemInstance, slot: ItemSlotUI ) {#signal-socket-panel-requested}

Emitted to open the socket window of the item in the slot.

### drag_requested( item: ItemInstance, quantity: int, slot_data: SlotInstance, slot_type: String ) {#signal-drag-requested}

========== DRAG SIGNALS ==========

### split_drag_requested( item: ItemInstance, split_amount: int, slot_data: SlotInstance, slot_type: String ) {#signal-split-drag-requested}

Asks the interface to start dragging part of a stack.

## Enumerations

### enum SlotVisualState {#enum-slotvisualstate}

The options of slot visual state: empty, occupied, locked, hover, dragging, disabled.

- **EMPTY** = `0`
- **OCCUPIED** = `1`
- **LOCKED** = `2`
- **HOVER** = `3`
- **DRAGGING** = `4`
- **DISABLED** = `5`

## Variable descriptions

### SlotInstance slot_data {#var-slot-data}

The slot the control shows (an inventory slot or an equipment slot).

### SlotVisualState current_visual_state = SlotVisualState.EMPTY {#var-current-visual-state}

How the slot looks now (empty, filled, locked, hovered ...).

### bool allow_drag = true {#var-allow-drag}

Enhanced interaction controls

### bool allow_drop = true {#var-allow-drop}

True when items can be dropped on the slot.

### bool allow_right_click_use = true {#var-allow-right-click-use}

True when a right click uses the item.

### bool drag_enabled = true {#var-drag-enabled}

True when the item can be dragged out.

### bool interaction_enabled = true {#var-interaction-enabled}

True when the slot reacts to the mouse.

### Color default_color = Color(0.25, 0.25, 0.25) {#var-default-color}

Visual colors

### Color locked_color = Color(0.1, 0.1, 0.1, 0.8) {#var-locked-color}

The color of a locked slot.

### Color hover_color = Color(1.2, 1.2, 1.2, 1.0) {#var-hover-color}

The color of the slot under the mouse.

### float last_click_time = 0.0 {#var-last-click-time}

Double-click detection

### float double_click_threshold = 0.3 {#var-double-click-threshold}

The most seconds between two clicks of a double click.

### bool needs_display_update = false {#var-needs-display-update}

Fix for display update timing

### String slot_type = "inventory" {#var-slot-type}

Slot type configuration

### String group_name = "" {#var-group-name}

The group of the slot (for the layout).

### bool is_showing_cooldown = false {#var-is-showing-cooldown}

Cooldown tracking

### EquipmentSlotDefinition equipment_slot_definition {#var-equipment-slot-definition}

The equipment slot the control stands for.

### int slot_instance_index = 0 {#var-slot-instance-index}

Which of the slots of this kind it is (an entity can have several).

## Method descriptions

### void set_slot_type( type: String ) {#method-set-slot-type}

Set the slot type (affects grouping and default behavior)

### void setup_for_equipment_slot( slot_def: EquipmentSlotDefinition, instance_index: int = 0 ) {#method-setup-for-equipment-slot}

Setup equipment slot with definition (replaces EquipmentSlotUI.setup_for_slot_definition)

### void set_drag_enabled( enabled: bool ) {#method-set-drag-enabled}

Enable or disable drag functionality

### void set_slot_data( new_slot_data: SlotInstance ) {#method-set-slot-data}

Shows another slot (the control follows its changes).

### void update_display() {#method-update-display}

Draws the item, the quantity and the state again.

### void set_visual_state( new_state: SlotVisualState ) {#method-set-visual-state}

Sets how the slot looks.

### bool should_show_quantity() {#method-should-show-quantity}

Does the slot show a quantity (equipment slots do not)?

### ItemInstance get_equipped_item_instance() {#method-get-equipped-item-instance}

The item in the slot.

### EquipmentSlotDefinition get_equipment_slot_definition() {#method-get-equipment-slot-definition}

The equipment slot the control stands for.

### bool is_slot_empty() {#method-is-slot-empty}

Is the slot empty?

### bool is_slot_locked() {#method-is-slot-locked}

Is the slot locked?

### ItemInstance get_item_instance() {#method-get-item-instance}

The item in the slot, or null.

### int get_quantity() {#method-get-quantity}

How many items are in the slot.

### bool has_item() {#method-has-item}

Does the slot hold an item?

### SlotInstance get_slot_data() {#method-get-slot-data}

The slot the control shows.

### void set_interaction_permissions( drag: bool, drop: bool, right_click: bool ) {#method-set-interaction-permissions}

Sets whether the item can be dragged, dropped on, and used with a right click.


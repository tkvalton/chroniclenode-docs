<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DragController

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Centralized drag-and-drop coordinator Handles all drag logic that was previously in DraggedItem Works with signals from UI components to coordinate operations

## Variables

| | | |
|---|---|---|
| `DragSourceInfo` | [current_drag](#var-current-drag) | `null` |
| `ContentType` | [current_content_type](#var-current-content-type) | `ContentType.NONE` |
| `DragType` | [drag_type](#var-drag-type) | `DragType.NORMAL` |
| `ItemInstance` | [enchant_scroll](#var-enchant-scroll) | `null` |

## Methods

| | |
|---|---|
| `bool` | [request_drag_from_inventory](#method-request-drag-from-inventory)( `item: ItemInstance, quantity: int, slot_data: SlotInstance` ) |
| `bool` | [request_drag_from_equipment](#method-request-drag-from-equipment)( `item: ItemInstance, slot_data: SlotInstance` ) |
| `bool` | [request_drag_from_action_bar](#method-request-drag-from-action-bar)( `item: ItemInstance, quantity: int` ) |
| `bool` | [request_drag_ability](#method-request-drag-ability)( `ability: AbilityInstance, source_type: String = "spellbook"` ) |
| `bool` | [request_enchanting_mode](#method-request-enchanting-mode)( `scroll: ItemInstance, player: Entity` ) |
| `DropResult` | [request_drop_at_position](#method-request-drop-at-position)( `position: Vector2` ) |
| `void` | [cancel_drag](#method-cancel-drag)() |
| `void` | [exit_enchanting_mode](#method-exit-enchanting-mode)() |
| `bool` | [can_drop_on_target](#method-can-drop-on-target)( `target_type: DropTargetType, target_slot: SlotInstance = null` ) |
| `bool` | [is_dragging](#method-is-dragging)() |
| `bool` | [is_enchanting](#method-is-enchanting)() |
| `ItemInstance` | [get_current_drag_item](#method-get-current-drag-item)() |
| `AbilityInstance` | [get_current_drag_ability](#method-get-current-drag-ability)() |
| `Variant` | [get_current_drag_content](#method-get-current-drag-content)() |
| `bool` | [is_dragging_item](#method-is-dragging-item)() |
| `bool` | [is_dragging_ability](#method-is-dragging-ability)() |

## Signals

### drag_started( item: ItemInstance, source_info: DragSourceInfo ) {#signal-drag-started}

========== SIGNALS ==========

### drag_ended( success: bool ) {#signal-drag-ended}

Emitted when a drag ends: whether it worked.

### drop_processed( result: DropResult ) {#signal-drop-processed}

Emitted when a drop was worked out, with its result.

### enchanting_started( scroll: ItemInstance ) {#signal-enchanting-started}

Emitted when the player starts to use an enchant scroll: the scroll.

### enchanting_ended( success: bool, target: ItemInstance ) {#signal-enchanting-ended}

Emitted when the use of the scroll ends: whether it worked, and the target.

### validation_failed( reason: String ) {#signal-validation-failed}

Emitted when a drop is refused, with the reason.

## Enumerations

### enum DragType {#enum-dragtype}

========== ENUMS ==========

- **NORMAL** = `0`
- **ENCHANTING** = `1`
- **SPLIT_STACK** = `2`

### enum ContentType {#enum-contenttype}

The options of content type: none, item, ability.

- **NONE** = `0`
- **ITEM** = `1`
- **ABILITY** = `2`

### enum DropTargetType {#enum-droptargettype}

The options of drop target type: inventory slot, equipment slot, vendor slot, action bar, socket slot, invalid.

- **INVENTORY_SLOT** = `0`
- **EQUIPMENT_SLOT** = `1`
- **VENDOR_SLOT** = `2`
- **ACTION_BAR** = `3`
- **SOCKET_SLOT** = `4`
- **INVALID** = `5`
- **WORLD** = `6`

## Variable descriptions

### DragSourceInfo current_drag = null {#var-current-drag}

========== STATE ==========

### ContentType current_content_type = ContentType.NONE {#var-current-content-type}

What is dragged now: an item, an ability or nothing.

### DragType drag_type = DragType.NORMAL {#var-drag-type}

What kind of drag it is (normal or enchanting).

### ItemInstance enchant_scroll = null {#var-enchant-scroll}

The enchant scroll being used.

## Method descriptions

### bool request_drag_from_inventory( item: ItemInstance, quantity: int, slot_data: SlotInstance ) {#method-request-drag-from-inventory}

Request to start dragging an item from inventory

### bool request_drag_from_equipment( item: ItemInstance, slot_data: SlotInstance ) {#method-request-drag-from-equipment}

Request to start dragging an item from equipment

### bool request_drag_from_action_bar( item: ItemInstance, quantity: int ) {#method-request-drag-from-action-bar}

Request to start dragging from action bar (validation mode)

### bool request_drag_ability( ability: AbilityInstance, source_type: String = "spellbook" ) {#method-request-drag-ability}

NEW: Request to start dragging ability from spellbook/action bar

### bool request_enchanting_mode( scroll: ItemInstance, player: Entity ) {#method-request-enchanting-mode}

Request to start enchanting mode

### DropResult request_drop_at_position( position: Vector2 ) {#method-request-drop-at-position}

Request drop at position - determines target and processes

### void cancel_drag() {#method-cancel-drag}

Cancel current drag

### void exit_enchanting_mode() {#method-exit-enchanting-mode}

Exit enchanting mode

### bool can_drop_on_target( target_type: DropTargetType, target_slot: SlotInstance = null ) {#method-can-drop-on-target}

Check if item can drop on target

### bool is_dragging() {#method-is-dragging}

Is something dragged?

### bool is_enchanting() {#method-is-enchanting}

Is an enchant scroll in use?

### ItemInstance get_current_drag_item() {#method-get-current-drag-item}

The item being dragged (or the scroll), or null.

### AbilityInstance get_current_drag_ability() {#method-get-current-drag-ability}

The ability being dragged, or null.

### Variant get_current_drag_content() {#method-get-current-drag-content}

What is being dragged (an item or an ability), or null.

### bool is_dragging_item() {#method-is-dragging-item}

Is an item dragged?

### bool is_dragging_ability() {#method-is-dragging-ability}

Is an ability dragged?


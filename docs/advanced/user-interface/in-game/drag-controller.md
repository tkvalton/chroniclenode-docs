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

### drag_ended( success: bool ) {#signal-drag-ended}

### drop_processed( result: DropResult ) {#signal-drop-processed}

### enchanting_started( scroll: ItemInstance ) {#signal-enchanting-started}

### enchanting_ended( success: bool, target: ItemInstance ) {#signal-enchanting-ended}

### validation_failed( reason: String ) {#signal-validation-failed}

## Enumerations

### enum DragType {#enum-dragtype}

- **NORMAL** = `0`
- **ENCHANTING** = `1`
- **SPLIT_STACK** = `2`

### enum ContentType {#enum-contenttype}

- **NONE** = `0`
- **ITEM** = `1`
- **ABILITY** = `2`

### enum DropTargetType {#enum-droptargettype}

- **INVENTORY_SLOT** = `0`
- **EQUIPMENT_SLOT** = `1`
- **VENDOR_SLOT** = `2`
- **ACTION_BAR** = `3`
- **SOCKET_SLOT** = `4`
- **INVALID** = `5`

## Variable descriptions

### DragSourceInfo current_drag = null {#var-current-drag}

*No description yet.*

### ContentType current_content_type = ContentType.NONE {#var-current-content-type}

*No description yet.*

### DragType drag_type = DragType.NORMAL {#var-drag-type}

*No description yet.*

### ItemInstance enchant_scroll = null {#var-enchant-scroll}

*No description yet.*

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

*No description yet.*

### bool is_enchanting() {#method-is-enchanting}

*No description yet.*

### ItemInstance get_current_drag_item() {#method-get-current-drag-item}

*No description yet.*

### AbilityInstance get_current_drag_ability() {#method-get-current-drag-ability}

*No description yet.*

### Variant get_current_drag_content() {#method-get-current-drag-content}

*No description yet.*

### bool is_dragging_item() {#method-is-dragging-item}

*No description yet.*

### bool is_dragging_ability() {#method-is-dragging-ability}

*No description yet.*


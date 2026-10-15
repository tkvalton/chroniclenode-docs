<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActionBarButton

**Inherits:** `MarginContainer`

Modern action bar button that handles both abilities and items

## Properties

| | | |
|---|---|---|
| `String` | [slot_number](#prop-slot-number) |  |

## Variables

| | | |
|---|---|---|
| `Player` | [owner_player](#var-owner-player) |  |
| `ActionBarSlotData` | [slot_data](#var-slot-data) |  |
| `Timer` | [ability_cooldown_timer](#var-ability-cooldown-timer) |  |
| `Timer` | [global_cooldown_timer](#var-global-cooldown-timer) |  |
| `String` | [slot_keybind](#var-slot-keybind) |  |
| `bool` | [alert_effect_active](#var-alert-effect-active) | `false:` |
| `bool` | [bar_locked](#var-bar-locked) | `false` |
| `bool` | [showing_charge_cooldown](#var-showing-charge-cooldown) | `false` |
| `bool` | [is_showing_cooldown](#var-is-showing-cooldown) | `false` |
| `Timer` | [long_press_timer](#var-long-press-timer) |  |
| `bool` | [is_mouse_held](#var-is-mouse-held) | `false` |
| `float` | [press_start_time](#var-press-start-time) | `0.0` |
| `float` | [long_press_duration](#var-long-press-duration) | `0.2` |
| `SettingsManager` | [settings_manager](#var-settings-manager) |  |
| `PlayerController` | [player_controller](#var-player-controller) |  |
| `bool` | [rearrange_allowed](#var-rearrange-allowed) | `true` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [set_player_owner](#method-set-player-owner)( `player: Player` ) |
| `void` | [set_slot_data](#method-set-slot-data)( `new_slot_data: ActionBarSlotData` ) |
| `bool` | [can_be_changed](#method-can-be-changed)() |
| `void` | [set_ability](#method-set-ability)( `ability: AbilityInstance` ) |
| `void` | [set_item](#method-set-item)( `item: ItemInstance, quantity: int = 1` ) |
| `void` | [clear](#method-clear)() |
| `Variant` | [get_current_content](#method-get-current-content)() |
| `bool` | [is_empty](#method-is-empty)() |
| `void` | [use_content](#method-use-content)() |
| `void` | [right_click_use_content](#method-right-click-use-content)() |
| `void` | [set_keybind_key](#method-set-keybind-key)() |

## Signals

### content_changed( slot_number: int, slot_data: ActionBarSlotData ) {#signal-content-changed}

Emitted when the slot gets another content: the slot number and its data.

### ability_tooltip_requested( ability: AbilityInstance ) {#signal-ability-tooltip-requested}

Asks the interface to show the tooltip of an ability.

### item_tooltip_requested( item: ItemInstance, definition: ItemDefinition, context: String, additional_data: Dictionary ) {#signal-item-tooltip-requested}

Asks the interface to show the tooltip of an item: the item, its definition, where it is and extra data.

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Asks the interface to hide the tooltip (force hides it at once).

### warning_message_requested( message: String ) {#signal-warning-message-requested}

Asks the interface to show a warning.

### ability_drag_requested( ability: AbilityInstance ) {#signal-ability-drag-requested}

========== DRAG SIGNALS ==========

### item_drag_requested( item: ItemInstance ) {#signal-item-drag-requested}

Asks the interface to start dragging the item of the slot.

## Property descriptions

### String slot_number {#prop-slot-number}

The slot number for this action bar button (used for keybinding and identification)

## Variable descriptions

### Player owner_player {#var-owner-player}

The player entity that owns this action bar

### ActionBarSlotData slot_data {#var-slot-data}

The slot data for this button

### Timer ability_cooldown_timer {#var-ability-cooldown-timer}

Timer for ability cooldowns

### Timer global_cooldown_timer {#var-global-cooldown-timer}

Timer for the entity's global cooldown

### String slot_keybind {#var-slot-keybind}

The keybind string for this slot (e.g., "1", "Ctrl 2", etc.)

### bool alert_effect_active = false: {#var-alert-effect-active}

Whether the alert effect animation is currently active

### bool bar_locked = false {#var-bar-locked}

Whether the action bar is locked (prevents drag operations)

### bool showing_charge_cooldown = false {#var-showing-charge-cooldown}

Whether we're currently showing charge-based cooldown

### bool is_showing_cooldown = false {#var-is-showing-cooldown}

Whether we're currently showing any cooldown

### Timer long_press_timer {#var-long-press-timer}

Timer for detecting long press gestures for drag operations

### bool is_mouse_held = false {#var-is-mouse-held}

Whether the mouse button is currently being held down

### float press_start_time = 0.0 {#var-press-start-time}

Timestamp when the mouse press started (for long press detection)

### float long_press_duration = 0.2 {#var-long-press-duration}

Duration required for a long press to trigger drag mode

### SettingsManager settings_manager {#var-settings-manager}

SystemRefs

### PlayerController player_controller {#var-player-controller}

The controller that uses the slot.

### bool rearrange_allowed = true {#var-rearrange-allowed}

The bar this button is on lets the player rearrange it (a bar that only shows sets this off)

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### void set_player_owner( player: Player ) {#method-set-player-owner}

Set the player owner for this button

### void set_slot_data( new_slot_data: ActionBarSlotData ) {#method-set-slot-data}

Set content using slot data

### bool can_be_changed() {#method-can-be-changed}

Can the player put something on this slot or take it off? (the bar allows it, and the project, the plan of the class or an effect does not lock the slot)

### void set_ability( ability: AbilityInstance ) {#method-set-ability}

Set content from ability instance

### void set_item( item: ItemInstance, quantity: int = 1 ) {#method-set-item}

Set content from item instance - REFACTORED: now takes item instance directly

### void clear() {#method-clear}

Clear the slot

### Variant get_current_content() {#method-get-current-content}

Get the current content (ability or item instance)

### bool is_empty() {#method-is-empty}

Check if slot is empty

### void use_content() {#method-use-content}

Uses what the slot holds (the controller does it).

### void right_click_use_content() {#method-right-click-use-content}

REFACTORED: Right-click now properly uses inventory system for item consumption

### void set_keybind_key() {#method-set-keybind-key}

Shows the key that is bound to the slot.


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PanelUI

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

**Inherited by:** [CharacterPanelUI](/advanced/user-interface/panels/character-panel-ui), [ConversationPanelUI](/advanced/user-interface/interaction-panels/conversation-panel-ui), [CraftingPanelUI](/advanced/user-interface/interaction-panels/crafting-panel-ui), [GameOverPanelUI](/advanced/user-interface/in-game/game-over-panel-ui), [InventoryUI](/advanced/user-interface/panels/inventory-ui), [QuestLogPanelUI](/advanced/user-interface/panels/quest-log-panel-ui), [ReadablePanelUI](/advanced/user-interface/interaction-panels/readable-panel-ui), [SaveLoadMenu](/advanced/user-interface/menus/save-load-menu), [SettingsMenuUI](/advanced/user-interface/menus/settings-menu-ui), [SocketPanelUI](/advanced/user-interface/interaction-panels/socket-panel-ui), [SpellBookPanelUI](/advanced/user-interface/panels/spell-book-panel-ui), [TrainerPanelUI](/advanced/user-interface/interaction-panels/trainer-panel-ui), [VendorPanelUI](/advanced/user-interface/interaction-panels/vendor-panel-ui)

The base of every window of the interface (the character sheet, the spellbook, the inventory, the quest log, the windows of interactions): the title bar, the close button, dragging, and the signals that relay tooltips, messages, sounds and drag requests to the in-game interface. A window you add extends this. It also has the options of a panel with a key: the panel name, the panel keybind, the menu icon and the menu description.

## Properties

| | | |
|---|---|---|
| `String` | [panel_name](#prop-panel-name) | `""` |
| `int` | [panel_keybind](#prop-panel-keybind) | `0` |
| `Texture2D` | [menu_icon](#prop-menu-icon) |  |
| `String` | [menu_description](#prop-menu-description) | `""` |
| `bool` | [show_in_mini_menu](#prop-show-in-mini-menu) | `true` |
| `bool` | [is_draggable](#prop-is-draggable) | `true` |
| `bool` | [title_bar_show](#prop-title-bar-show) | `true` |

## Variables

| | | |
|---|---|---|
| `bool` | [is_dragging](#var-is-dragging) | `false` |
| `Vector2` | [drag_offset](#var-drag-offset) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [close_panel](#method-close-panel)() |

## Signals

### window_closed() {#signal-window-closed}

========== COMMON SIGNALS ========== Window management

### ability_tooltip_requested( ability: AbilityInstance ) {#signal-ability-tooltip-requested}

Tooltips

### skill_node_tooltip_requested( node: SkillNode ) {#signal-skill-node-tooltip-requested}

Asks the interface to show the tooltip of a skill node.

### item_tooltip_requested( item: ItemInstance, definition: ItemDefinition, context: String, additional_data: Dictionary ) {#signal-item-tooltip-requested}

Asks the interface to show the tooltip of an item: the item, its definition, where it is and extra data.

### effect_tooltip_requested( effect: EffectInstance ) {#signal-effect-tooltip-requested}

Asks the interface to show the tooltip of an effect.

### description_tooltip_requested( object_name: String, description: String ) {#signal-description-tooltip-requested}

Asks the interface to show a tooltip with a name and a text.

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Asks the interface to hide the tooltip (force hides it at once).

### message_requested( message: String ) {#signal-message-requested}

Messages

### warning_message_requested( message: String ) {#signal-warning-message-requested}

Asks the interface to show a warning.

### ui_sfx_request( sound: AudioManager.UISound, volume_modifier: float ) {#signal-ui-sfx-request}

Audio Request

### socket_panel_requested( item: ItemInstance ) {#signal-socket-panel-requested}

Panels

### drag_from_inventory_requested( item: ItemInstance, quantity: int, slot_data: SlotInstance ) {#signal-drag-from-inventory-requested}

Dragged signals

### split_drag_from_inventory_requested( item: ItemInstance, split_amount: int, slot_data: SlotInstance ) {#signal-split-drag-from-inventory-requested}

Asks the interface to start dragging part of a stack from the inventory.

### drag_from_equipment_requested( item: ItemInstance, slot_data: SlotInstance ) {#signal-drag-from-equipment-requested}

Asks the interface to start dragging an item out of an equipment slot.

### enchant_scroll_use_requested( scroll: ItemInstance, player: Entity ) {#signal-enchant-scroll-use-requested}

Asks the interface to use an enchant scroll on an item.

### ability_drag_requested( ability: AbilityInstance ) {#signal-ability-drag-requested}

Asks the interface to start dragging an ability (onto the action bar).

## Property descriptions

### String panel_name = "" {#prop-panel-name}

Panel name for for open/close

### int panel_keybind = 0 {#prop-panel-keybind}

Which panel key opens this panel: 1 to 20 (the input action `panel_keybind_N`). 0 = no key. The mini menu makes a button for each numbered panel. Two panels with one number are reported when the interface starts. What the key is called for the player is set in the Keybinds tab of the Game Settings

### Texture2D menu_icon {#prop-menu-icon}

The icon of the mini menu button of this panel

### String menu_description = "" {#prop-menu-description}

The tooltip of the mini menu button of this panel (empty = the name of the panel)

### bool show_in_mini_menu = true {#prop-show-in-mini-menu}

The mini menu makes a button for this panel (a panel with no key number gets none)

### bool is_draggable = true {#prop-is-draggable}

If the panel can be dragged by the titlebar

### bool title_bar_show = true {#prop-title-bar-show}

Option to hide the title bar

## Variable descriptions

### bool is_dragging = false {#var-is-dragging}

Window dragging

### Vector2 drag_offset {#var-drag-offset}

Where in the window the player grabbed it, while it is dragged.

### GameHost.SystemHub system_hub {#var-system-hub}

SystemHubRef for ease of ui creation

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### void close_panel() {#method-close-panel}

Signal handlers for UI elements


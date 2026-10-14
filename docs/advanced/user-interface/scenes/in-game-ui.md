<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InGameUI

**Inherits:** [CurrentUI](/advanced/user-interface/scenes/current-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

InGameUI manages the interactive user interface elements during gameplay. Updated to use new CharacterPanelUI and SpellBookPanelUI, removing old character menu and party panels

## Description

Key features:

- Controls game windows (character panel, spell book, inventory, etc.)
- Manages HUD elements (party frames, action bars, minimap)
- Handles window state management and transitions
- Coordinates window visibility and menu states
- Processes menu interactions and button responses
- Maintains game UI state during gameplay

NOTE: UI vs world clicks are decided by each Control's `mouse_filter`.

- UI that must block the world (panels, buttons, action bar) uses STOP.
- HUD roots, containers and overlays use IGNORE (or PASS) so clicks reach the world.

A full-screen root Control left at the default STOP swallows every world click. World input is taken by the InputManager after the GUI (`_unhandled_input`), so this works as described. To see which Control consumed a click, enable GameplayConfig.log_input_routing. Details: docs/systems/camera-and-controller.md (section 4, "Input pipeline").

## Variables

| | | |
|---|---|---|
| `Array[Control]` | [hud_interfaces](#var-hud-interfaces) |  |
| `Array[PanelUI]` | [ui_panel_interfaces](#var-ui-panel-interfaces) |  |
| `Array[Control]` | [all_window_interfaces](#var-all-window-interfaces) |  |
| `DragController` | [drag_controller](#var-drag-controller) |  |
| `NameplateManager` | [nameplates](#var-nameplates) |  |
| `TrainerPanelUI` | [trainer_panel](#var-trainer-panel) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [setup_window_interfaces](#method-setup-window-interfaces)( `system_hub: GameHost.SystemHub` ) |
| `void` | [in_game_ui_connect_signals](#method-in-game-ui-connect-signals)( `system_hub: GameHost.SystemHub` ) |
| `void` | [handle_pause_state_change](#method-handle-pause-state-change)( `paused: bool` ) |
| `void` | [set_ui_scale](#method-set-ui-scale)( `ui_scale: float` ) |
| `void` | [show_hud](#method-show-hud)( `value: bool` ) |
| `void` | [toggle_panel](#method-toggle-panel)( `panel_name: String` ) |
| `PanelUI` | [get_panel_by_number](#method-get-panel-by-number)( `number: int` ) |
| `String` | [toggle_panel_number](#method-toggle-panel-number)( `number: int` ) |
| `Array[String]` | [get_panel_number_problems](#method-get-panel-number-problems)() |
| `void` | [toggle_window](#method-toggle-window)( `window: Control` ) |
| `void` | [open_window](#method-open-window)( `window: Control` ) |
| `void` | [close_window](#method-close-window)( `window: Control` ) |
| `void` | [update_ui_menu_state](#method-update-ui-menu-state)() |
| `void` | [close_all_windows](#method-close-all-windows)() |
| `void` | [toggle_conversation_panel](#method-toggle-conversation-panel)( `conversation: ConversationInstance = null, starting_chat: ConversationChat = null, interaction: ConversationInteraction = null` ) |
| `void` | [open_vendor_panel](#method-open-vendor-panel)( `vendor_inventory: VendorInventoryComponent, player: Entity` ) |
| `void` | [close_vendor_panel](#method-close-vendor-panel)() |
| `void` | [open_trainer_panel](#method-open-trainer-panel)( `interaction: TrainerInteraction, player: Player` ) |
| `void` | [close_trainer_panel](#method-close-trainer-panel)() |
| `void` | [toggle_external_inventory](#method-toggle-external-inventory)( `external_data: InventoryComponent, inventory_owner: Variant, active: bool` ) |
| `void` | [open_socket_panel](#method-open-socket-panel)( `equipment_item: ItemInstance` ) |
| `void` | [show_readable_panel](#method-show-readable-panel)( `readable_data: Dictionary` ) |
| `void` | [open_crafting_interface](#method-open-crafting-interface)( `interaction: CraftingInteraction, player: Player, school: CraftSchoolDefinition` ) |
| `void` | [close_crafting_interface](#method-close-crafting-interface)() |
| `void` | [update_crafting_progress](#method-update-crafting-progress)( `job: CraftingJob` ) |
| `void` | [hide_game_over_panel](#method-hide-game-over-panel)() |

## Variable descriptions

### Array[Control] hud_interfaces {#var-hud-interfaces}

Array of all hud interfaces

### Array[PanelUI] ui_panel_interfaces {#var-ui-panel-interfaces}

Array of all hud interfaces

### Array[Control] all_window_interfaces {#var-all-window-interfaces}

Array of all window interfaces

### DragController drag_controller {#var-drag-controller}

Drag Controller

### NameplateManager nameplates {#var-nameplates}

Nameplate Manager

### TrainerPanelUI trainer_panel {#var-trainer-panel}

The lessons of a trainer (made in code: there is no scene node for it)

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*Overrides this function of [CurrentUI](/advanced/user-interface/scenes/current-ui).*

### void setup_window_interfaces( system_hub: GameHost.SystemHub ) {#method-setup-window-interfaces}

Set up the array of window interfaces

### void in_game_ui_connect_signals( system_hub: GameHost.SystemHub ) {#method-in-game-ui-connect-signals}

Connects necessary signals

### void handle_pause_state_change( paused: bool ) {#method-handle-pause-state-change}

Handles changes in menu pause state

### void set_ui_scale( ui_scale: float ) {#method-set-ui-scale}

*No description yet.*

### void show_hud( value: bool ) {#method-show-hud}

*No description yet.*

### void toggle_panel( panel_name: String ) {#method-toggle-panel}

Toggles a named panel interface

### PanelUI get_panel_by_number( number: int ) {#method-get-panel-by-number}

The panel that a panel key number (1 to 20) opens, null when no panel has it

### String toggle_panel_number( number: int ) {#method-toggle-panel-number}

Toggles the panel of a key number. Returns the name of the panel ("" when no panel has the number)

### Array[String] get_panel_number_problems() {#method-get-panel-number-problems}

Problems with the numbers of the panels (two panels with one key): readable messages, empty when all is well

### void toggle_window( window: Control ) {#method-toggle-window}

Toggles a specific window

### void open_window( window: Control ) {#method-open-window}

Opens a specific window

### void close_window( window: Control ) {#method-close-window}

Closes a specific window

### void update_ui_menu_state() {#method-update-ui-menu-state}

Update the UI menu state based on open windows

### void close_all_windows() {#method-close-all-windows}

*No description yet.*

### void toggle_conversation_panel( conversation: ConversationInstance = null, starting_chat: ConversationChat = null, interaction: ConversationInteraction = null ) {#method-toggle-conversation-panel}

Toggles the conversation interface

### void open_vendor_panel( vendor_inventory: VendorInventoryComponent, player: Entity ) {#method-open-vendor-panel}

Opens vendor panel with vendor data

### void close_vendor_panel() {#method-close-vendor-panel}

Closes vendor panel

### void open_trainer_panel( interaction: TrainerInteraction, player: Player ) {#method-open-trainer-panel}

Opens the lessons of a trainer

### void close_trainer_panel() {#method-close-trainer-panel}

Closes the lessons of a trainer

### void toggle_external_inventory( external_data: InventoryComponent, inventory_owner: Variant, active: bool ) {#method-toggle-external-inventory}

Toggles the external inventory and synchronizes with player inventory

### void open_socket_panel( equipment_item: ItemInstance ) {#method-open-socket-panel}

Public method for external calls

### void show_readable_panel( readable_data: Dictionary ) {#method-show-readable-panel}

Show readable panel for books/scrolls/notes

### void open_crafting_interface( interaction: CraftingInteraction, player: Player, school: CraftSchoolDefinition ) {#method-open-crafting-interface}

Open crafting panel with interaction data

### void close_crafting_interface() {#method-close-crafting-interface}

Close crafting panel

### void update_crafting_progress( job: CraftingJob ) {#method-update-crafting-progress}

Update crafting progress

### void hide_game_over_panel() {#method-hide-game-over-panel}

Hide the game over panel


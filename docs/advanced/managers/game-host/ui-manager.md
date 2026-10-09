<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UIManager

**Inherits:** [CanvasLayer](https://docs.godotengine.org/en/stable/classes/class_canvaslayer.html)

Manages UI layers, scene transitions, and overlay systems. Handles loading screens, fade transitions, cinematics, and cutscenes.

## Variables

| | | |
|---|---|---|
| `Control` | [current_ui_container](#var-current-ui-container) |  |
| `CurrentUI` | [current_ui](#var-current-ui) |  |
| `TooltipManager` | [tool_tips](#var-tool-tips) |  |
| `LoadingScreen` | [loading_screen](#var-loading-screen) |  |
| `ColorRect` | [transition_rect](#var-transition-rect) |  |
| `MessagesManager` | [messages](#var-messages) |  |
| `VideoStreamPlayer` | [cinematic_player](#var-cinematic-player) |  |
| `Node3D` | [cutscene_container](#var-cutscene-container) |  |
| `InGameCutScenePlayer` | [current_cutscene](#var-current-cutscene) |  |
| `DebugMenu` | [debug_menu](#var-debug-menu) |  |
| `Button` | [debug_toggle_button](#var-debug-toggle-button) |  |
| `PopupManager` | [popups](#var-popups) |  |

## Methods

| | |
|---|---|
| `void` | [setup_signals](#method-setup-signals)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [fade_to_black](#method-fade-to-black)() |
| `void` | [fade_to_normal](#method-fade-to-normal)() |
| `void` | [initialize_ui_scenes](#method-initialize-ui-scenes)( `game_state: TransitionManager.GameState, system_hub: GameHost.SystemHub` ) |
| `void` | [play_cinematic](#method-play-cinematic)( `stream: VideoStream` ) |
| `void` | [stop_cinematic](#method-stop-cinematic)() |
| `void` | [play_cutscene](#method-play-cutscene)( `cutscene_scene: PackedScene` ) |
| `void` | [stop_cutscene](#method-stop-cutscene)() |
| `void` | [message](#method-message)( `message_sent: String` ) |
| `void` | [warning_message](#method-warning-message)( `warning_message_sent: String` ) |
| `void` | [yellow_message](#method-yellow-message)( `yellow_message_sent: String` ) |
| `void` | [show_item_tooltip](#method-show-item-tooltip)( `item_instance: ItemInstance, item_definition: ItemDefinition, context: String = "inventory", vendor_data: Dictionary = {}` ) |
| `void` | [show_ability_tooltip](#method-show-ability-tooltip)( `ability: Variant` ) |
| `void` | [show_effect_tooltip](#method-show-effect-tooltip)( `effect: EffectInstance` ) |
| `void` | [show_description_tooltip](#method-show-description-tooltip)( `object_name: String, description: String` ) |
| `void` | [show_skill_node_tooltip](#method-show-skill-node-tooltip)( `skill_node: SkillNode` ) |
| `void` | [show_choice_tooltip](#method-show-choice-tooltip)( `choice_node: ChoiceSkillNode, choice_index: int` ) |
| `void` | [hide_tooltip](#method-hide-tooltip)( `force_hide: bool` ) |
| `void` | [toggle_panel](#method-toggle-panel)( `panel_name: String` ) |
| `void` | [toggle_external_inventory](#method-toggle-external-inventory)( `inventory_data: InventoryComponent, inventory_owner: Variant, active: bool` ) |
| `void` | [open_socket_panel](#method-open-socket-panel)( `item_instance: ItemInstance` ) |
| `void` | [show_readable_panel](#method-show-readable-panel)( `readable_item: ItemInstance` ) |
| `void` | [show_readable_data](#method-show-readable-data)( `readable_data: Dictionary` ) |
| `void` | [open_crafting_interface](#method-open-crafting-interface)( `interaction: CraftingInteraction, player: Player, school: CraftSchoolDefinition` ) |
| `void` | [close_crafting_interface](#method-close-crafting-interface)() |
| `void` | [update_crafting_progress](#method-update-crafting-progress)( `job: CraftingJob` ) |
| `void` | [initialize_debug_menu](#method-initialize-debug-menu)( `system_hub: GameHost.SystemHub` ) |
| `void` | [toggle_debug_menu](#method-toggle-debug-menu)() |
| `bool` | [is_debug_menu_visible](#method-is-debug-menu-visible)() |

## Signals

### ui_ready() {#signal-ui-ready}

Emitted on when ui is setup

### transition_complete() {#signal-transition-complete}

Emitted after transition fade tween completes

### ui_sfx_requested( sound: AudioManager.UISound, volume_modifier: float ) {#signal-ui-sfx-requested}

Emitted on audio requests

### pause_all_audio_request() {#signal-pause-all-audio-request}

AudioManager music requests

### resume_all_audio_request() {#signal-resume-all-audio-request}

## Constants

- `float` **TRANSITION_DURATION** = `1.5` - Duration for fade transitions in seconds.

## Variable descriptions

### Control current_ui_container {#var-current-ui-container}

Container for the currently active UI scene.

### CurrentUI current_ui {#var-current-ui}

The currently loaded UI scene instance.

### TooltipManager tool_tips {#var-tool-tips}

Manages tooltip popups across the UI.

### LoadingScreen loading_screen {#var-loading-screen}

Loading screen overlay for scene transitions.

### ColorRect transition_rect {#var-transition-rect}

Full-screen colour overlay for fade transitions.

### MessagesManager messages {#var-messages}

Manages floating messages and notifications.

### VideoStreamPlayer cinematic_player {#var-cinematic-player}

Video player for pre-rendered cinematics.

### Node3D cutscene_container {#var-cutscene-container}

Container for in-game cutscene nodes.

### InGameCutScenePlayer current_cutscene {#var-current-cutscene}

Currently playing in-game cutscene.

### DebugMenu debug_menu {#var-debug-menu}

Debug menu for testing and debugging (only created when debug mode enabled)

### Button debug_toggle_button {#var-debug-toggle-button}

Debug menu toggle button (always visible when debug mode enabled)

### PopupManager popups {#var-popups}

The popups of the game (tutorials, messages, toasts)

## Method descriptions

### void setup_signals( p_system_hub: GameHost.SystemHub ) {#method-setup-signals}

*No description yet.*

### void fade_to_black() {#method-fade-to-black}

Fades the screen to black over TRANSITION_DURATION seconds.

### void fade_to_normal() {#method-fade-to-normal}

Fades the screen from black to transparent over TRANSITION_DURATION seconds.

### void initialize_ui_scenes( game_state: TransitionManager.GameState, system_hub: GameHost.SystemHub ) {#method-initialize-ui-scenes}

Loads the appropriate UI scene based on the current game state.

### void play_cinematic( stream: VideoStream ) {#method-play-cinematic}

Plays a pre-rendered video cinematic.

### void stop_cinematic() {#method-stop-cinematic}

Stops the current cinematic and resumes game audio.

### void play_cutscene( cutscene_scene: PackedScene ) {#method-play-cutscene}

Plays an in-game cutscene from a packed scene.

### void stop_cutscene() {#method-stop-cutscene}

Stops the current cutscene and cleans up.

### void message( message_sent: String ) {#method-message}

Display a standard message to the player

### void warning_message( warning_message_sent: String ) {#method-warning-message}

Display a warning message to the player (red/orange color)

### void yellow_message( yellow_message_sent: String ) {#method-yellow-message}

Display a highlighted message to the player (yellow/gold color)

### void show_item_tooltip( item_instance: ItemInstance, item_definition: ItemDefinition, context: String = "inventory", vendor_data: Dictionary = &#123;&#125; ) {#method-show-item-tooltip}

Show item tooltip

### void show_ability_tooltip( ability: Variant ) {#method-show-ability-tooltip}

Show ability tooltip

### void show_effect_tooltip( effect: EffectInstance ) {#method-show-effect-tooltip}

Show effect tooltip

### void show_description_tooltip( object_name: String, description: String ) {#method-show-description-tooltip}

Show description tooltip

### void show_skill_node_tooltip( skill_node: SkillNode ) {#method-show-skill-node-tooltip}

Show skill node tooltip

### void show_choice_tooltip( choice_node: ChoiceSkillNode, choice_index: int ) {#method-show-choice-tooltip}

Show choice tooltip

### void hide_tooltip( force_hide: bool ) {#method-hide-tooltip}

Hide all tooltips

### void toggle_panel( panel_name: String ) {#method-toggle-panel}

Toggle a named panel (character, spellbook, etc.)

### void toggle_external_inventory( inventory_data: InventoryComponent, inventory_owner: Variant, active: bool ) {#method-toggle-external-inventory}

Toggle external inventory display

### void open_socket_panel( item_instance: ItemInstance ) {#method-open-socket-panel}

Open socket panel for equipment

### void show_readable_panel( readable_item: ItemInstance ) {#method-show-readable-panel}

Show readable panel for books/scrolls

### void show_readable_data( readable_data: Dictionary ) {#method-show-readable-data}

Show a readable (a sign, a book, a letter) from its data: title, pages, background_texture, source

### void open_crafting_interface( interaction: CraftingInteraction, player: Player, school: CraftSchoolDefinition ) {#method-open-crafting-interface}

Request to open crafting interface

### void close_crafting_interface() {#method-close-crafting-interface}

Request to close crafting interface

### void update_crafting_progress( job: CraftingJob ) {#method-update-crafting-progress}

Update crafting progress

### void initialize_debug_menu( system_hub: GameHost.SystemHub ) {#method-initialize-debug-menu}

Initialize the debug menu (only when debug mode is enabled)

### void toggle_debug_menu() {#method-toggle-debug-menu}

Toggle debug menu visibility

### bool is_debug_menu_visible() {#method-is-debug-menu-visible}

Check if debug menu exists and is visible


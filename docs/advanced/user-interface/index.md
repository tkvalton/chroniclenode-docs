# User Interface: how it is built

The [User Interface chapter](/basic/user-interface/) explains the scenes. This page covers the classes behind them: who loads what, how a request travels from a button to a tooltip, and how windows are managed.

## Who loads the interface

[`UIManager`](/advanced/managers/game-host/ui-manager) (a `CanvasLayer`, held by the [system hub](/advanced/managers/game-host/game-host)) owns everything that sits over the game:

| Part | What it is |
|---|---|
| `current_ui_container`, `current_ui` | The one interface scene that is loaded now: main menu, character creation or in game |
| `tool_tips` | The [`TooltipManager`](/advanced/user-interface/tooltips/tooltip-manager): the five tooltips, made once |
| `loading_screen` | The [`LoadingScreen`](/advanced/user-interface/scenes/loading-screen) |
| `transition_rect` | The black fade between scenes |
| `popups` | The [`PopupManager`](/advanced/events-and-quests/popups/popup-manager) (see [Popups](/basic/events-and-quests/popups)) |
| `messages` | The [`MessagesManager`](/advanced/user-interface/in-game/messages-manager): the fading messages |
| `cinematic_player`, `cutscene_container` | Video cinematics and in-game cutscenes |
| `debug_menu` | The debug menu, when debug mode is on |

`initialize_ui_scenes(state, hub)` frees the current interface and loads the scene for the **game state** (`MAIN_MENU`, `CHARACTER_CREATION`, `MAIN_GAME`) from [`UISettingsConfig`](/advanced/game-settings/config/ui-settings-config), **threaded**, updating the loading screen while it loads. When the scene is ready it is added to the container, `initialize_ui(system_hub)` is called, and `ui_ready` is emitted.

## `CurrentUI`: the base of every interface scene

[`CurrentUI`](/advanced/user-interface/scenes/current-ui) holds the signals the game connects to and the relays every interface needs:

- **Requests that leave the interface**: `new_game_requested`, `character_creation_requested`, `load_game_requested`, `return_to_main_menu_requested`. The [transition manager](/advanced/managers/game-host/transition-manager) listens to them.
- **Requests that reach the shared parts**: `show_*_tooltip`, `hide_tooltip`, `message_request`, `warning_message_request`, `ui_sfx_request`. In `initialize_ui` they are connected to the matching methods of the UI manager, so **a scene never needs to find a tooltip**.

## Requests travel upward

The parts of the interface are built so that none of them knows another:

```text
ActionBarButton  ─ item_tooltip_requested ─►  ActionBarUI ─►  InGameUI  ─ show_item_tooltip ─►  UIManager ─►  TooltipItem
(a slot)                                  (HUDUIElement)   (CurrentUI)                   (shows it next to the mouse)
```

- A **HUD element** (`HUDUIElement`) and a **panel** (`PanelUI`) declare the same set of signals: tooltips, messages, sounds, plus the drag signals.
- `InGameUI._connect_hud_signals` and `_connect_panel_signals` connect those to its own signals when the scene starts. A `HUDUIElement` child gets them, and so does a `PanelUI` window; a node of another class gets nothing.
- Drag signals (`drag_from_inventory_requested`, `ability_drag_requested`...) are connected **only if the node has the signal**, so a part opts in by declaring it.

## Calls from the game into the interface

Interactions and systems never reference scene nodes. They call a method of the UI manager (`open_vendor_panel`, `toggle_external_inventory`, `open_crafting_interface`, `show_readable_data`, `toggle_panel_number`...). The manager passes it to `current_ui` **only if `current_ui.has_method(...)`**. An interface scene without the method ignores the request, and a [custom interface](/basic/user-interface/in-game#changing-what-the-interface-does) adds its own methods.

## Windows

`InGameUI` keeps three arrays:

| Array | Holds |
|---|---|
| `hud_interfaces` | The children of `HUD` |
| `ui_panel_interfaces` | The children of `UIPanels` (each cast to `PanelUI`) |
| `all_window_interfaces` | Every window: the interaction panels (found by unique name, plus the trainer panel made in code) and the UI panels |

`open_window(window)` hides every window in `all_window_interfaces` and shows the one asked for; `close_window` hides it (with the special cases of the vendor, which clears its slots, and the conversation, which plays no sound); `update_ui_menu_state` sets `system_hub.ui_menu_open` from whether any window is visible. `toggle_panel(name)` and `toggle_panel_number(n)` find a UI panel by its `panel_name` or `panel_keybind`; `get_panel_number_problems()` lists the panels that share a number.

The player controller opens panels by number: it listens for the input actions `panel_keybind_1` to `panel_keybind_20` and calls `ui_manager.toggle_panel_number(n)`.

## Reading a scene without running it

The editor needs to know what an interface scene holds (to check the root class of each scene, to list the panels and their numbers) without instancing it, because the scene's scripts would run. Two helpers read the **saved state** of the scene:

| Class | What it does |
|---|---|
| [`SceneStateReader`](/advanced/managers/utilities/scene-state-reader) | The nodes of a `PackedScene`: name, path, parent, the classes of its script (nearest first) and the options the scene sets (or the script's defaults) |
| [`InterfaceOverview`](/advanced/managers/utilities/interface-overview) | From that: the HUD elements, interaction panels and UI panels of the in-game scene, with the panel key numbers, and the problems found (two panels with one number, a node of the wrong class) |

`UISettingsConfig.get_scene_problems()` uses the same reader to check the root class of each scene (`REQUIRED_ROOT_CLASSES`), and the [UI Settings editor](/basic/game-settings/ui-settings#the-interface-at-a-glance) shows both in [`InterfaceOverviewPanel`](/advanced/editor/settings/interface-overview-panel).

## The classes

### Scenes

<!-- classes:user-interface/scenes -->
| Class | What it is |
|---|---|
| [CharacterCreationUI](/advanced/user-interface/scenes/character-creation-ui) | CharacterCreationUI - Prefab-Driven Character Creation Controller Populates UI containers using provided PackedScenes and manages character customization state Supports both pre-made templates and custom character creation with voice selection |
| [CurrentUI](/advanced/user-interface/scenes/current-ui) | Parent class for current UIs Holds logifc for all possible singals to be connected to the UIManager |
| [InGameUI](/advanced/user-interface/scenes/in-game-ui) | InGameUI manages the interactive user interface elements during gameplay. |
| [LoadingScreen](/advanced/user-interface/scenes/loading-screen) | LoadingScreen manages the visual feedback during loading processes, providing step-by-step progress updates and status information. |
| [MainMenu](/advanced/user-interface/scenes/main-menu) | MainMenu manages the game's main menu interface and navigation. |
| [SplashScreen](/advanced/user-interface/scenes/splash-screen) |  |
<!-- /classes -->

### HUD

<!-- classes:user-interface/hud -->
| Class | What it is |
|---|---|
| [ActionBarButton](/advanced/user-interface/hud/action-bar-button) |  |
| [ActionBarUI](/advanced/user-interface/hud/action-bar-ui) | This class manages the action bar UI, including ability/items slots, resource bars, buff/debuff displays, and cast bar functionality. |
| [Aura](/advanced/user-interface/hud/aura) | Aura represents and manages a single status effect (buff or debuff) in the game's user interface. |
| [CastBar](/advanced/user-interface/hud/cast-bar) | Modular cast bar component that can be used by ActionBarUI, Nameplate, or any UI Automatically connects to entity casting signals and manages its own display state |
| [CombatLog](/advanced/user-interface/hud/combat-log) | This class manages the combat log interface, displaying various types of combat information. |
| [DamageMeterUI](/advanced/user-interface/hud/damage-meter-ui) | This class manages the display of detailed combat statistics, including damage and healing done by each entity. |
| [DamaterBarUI](/advanced/user-interface/hud/damater-bar-ui) | This class represents a details bar in the UI, typically used to display entity-specific information such as damage or healing amounts. |
| [ExperienceBar](/advanced/user-interface/hud/experience-bar) |  |
| [HUDUIElement](/advanced/user-interface/hud/hudui-element) | Parent class for all HUD UI elements contains useful exports for ui scaling options. |
| [MiniMap](/advanced/user-interface/hud/mini-map) | MinimapCamera is a specialized camera used for rendering a top-down view of the game world, typically displayed as a minimap in the user interface. |
| [MiniMenuButton](/advanced/user-interface/hud/mini-menu-button) | Individual button in the MiniMenu for toggling a UI panel. |
| [MiniMenuUI](/advanced/user-interface/hud/mini-menu-ui) | MiniMenuUI is a row of quick-access buttons that open the panels of the interface. |
| [PartyFrame](/advanced/user-interface/hud/party-frame) | PartyFrame Class Modern party member frame using PoolBarUI system Displays health, resource, and status effects with settings integration |
| [PartyFramesUI](/advanced/user-interface/hud/party-frames-ui) | This class manages the display of party frames and tracked abilities for all party members. |
| [QuestTrackerQuestUI](/advanced/user-interface/hud/quest-tracker-quest-ui) |  |
| [QuestTrackerQuestUIObjectiveLabel](/advanced/user-interface/hud/quest-tracker-quest-ui-objective-label) |  |
| [QuestTrackerUI](/advanced/user-interface/hud/quest-tracker-ui) | QuestTrackerUI manages the on-screen display of tracked quests and their objectives. |
| [UnitFrame](/advanced/user-interface/hud/unit-frame) | This class serves as a base for different types of unit frames in the game UI. |
<!-- /classes -->

### Nameplates

<!-- classes:user-interface/nameplates -->
| Class | What it is |
|---|---|
| [FloatingText](/advanced/user-interface/nameplates/floating-text) | A short text that floats up from an entity's nameplate marker and fades out: damage numbers, "Dodge", "Immune", heals. |
| [Nameplate](/advanced/user-interface/nameplates/nameplate) | This class manages the display of entity nameplates in the game, showing health, cast bars, and status effects (buffs/debuffs). |
| [NameplateManager](/advanced/user-interface/nameplates/nameplate-manager) | Manages the creation, positioning, and cleanup of UI nameplates for various entities in the game. |
| [PoolBarUI](/advanced/user-interface/nameplates/pool-bar-ui) | UI component for displaying a single pool (health or resource) |
<!-- /classes -->

### Interaction panels

<!-- classes:user-interface/interaction-panels -->
| Class | What it is |
|---|---|
| [AnimatedTextLabel](/advanced/user-interface/interaction-panels/animated-text-label) | A RichTextLabel that can type out text character by character Simplified version for conversation system use |
| [ConversationPanelUI](/advanced/user-interface/interaction-panels/conversation-panel-ui) | UI panel for displaying conversations using the new Conversation system Refactored to extend PanelUI instead of MarginContainer |
| [CraftingPanelUI](/advanced/user-interface/interaction-panels/crafting-panel-ui) | Enhanced crafting panel that integrates with the existing UI system Handles multiple schools, recipe selection, material display, and crafting queue Uses Tween for smooth progress bar animation instead of polling Refactored to extend PanelUI instead of MarginContainer |
| [CraftMaterialIconUI](/advanced/user-interface/interaction-panels/craft-material-icon-ui) | Enhanced material icon UI with visual feedback for material availability |
| [DiceRollPanel](/advanced/user-interface/interaction-panels/dice-roll-panel) | UI panel for displaying dice rolls with animation and player interaction |
| [ReadablePanelUI](/advanced/user-interface/interaction-panels/readable-panel-ui) | UI panel for displaying readable items (books, scrolls, notes, etc.) Features multi-page support with navigation and conditional title display Refactored to extend PanelUI instead of Control |
| [ResponseButton](/advanced/user-interface/interaction-panels/response-button) | A response option button in the conversation UI |
| [SocketPanelUI](/advanced/user-interface/interaction-panels/socket-panel-ui) | Socket Panel UI for managing sockets on equipment items Opens when shift+right-clicking equipment with sockets Refactored to remove ui_manager references |
| [SocketSlotUI](/advanced/user-interface/interaction-panels/socket-slot-ui) | Individual socket slot display - supports both tooltip and interactive socket panel modes Tooltips disappear on hover anyway, so all functionality is always enabled Refactored to use system_hub instead of ui_manager |
| [TrainerPanelUI](/advanced/user-interface/interaction-panels/trainer-panel-ui) | The list of lessons of a trainer: what each teaches, what it costs, a Learn button, grey with the reason when a requirement is not met, "Known" when the character has all of it. |
| [VendorPanelUI](/advanced/user-interface/interaction-panels/vendor-panel-ui) | Refactored vendor panel that uses definition-based VendorSlotUI for shop display Left side: Vendor items (VendorSlotUI grid) Right side: Player inventory (InventoryUI for selling items back) Refactored to remove ui_manager references |
| [VendorSlotUI](/advanced/user-interface/interaction-panels/vendor-slot-ui) | Clean VendorSlotUI that initializes everything in setup_vendor_slot() instead of _ready() Refactored to use system_hub instead of ui_manager |
<!-- /classes -->

### UI panels

<!-- classes:user-interface/panels -->
| Class | What it is |
|---|---|
| [AbilityPanelUI](/advanced/user-interface/panels/ability-panel-ui) | Paginated Ability Panel - Displays abilities in a 3x5 grid with page navigation Shows active abilities first, then passive abilities Follows the new architecture pattern: setup once, signals handle updates No stored player references - gets initial data then relies on signals |
| [ActiveEffectsDisplayUI](/advanced/user-interface/panels/active-effects-display-ui) | Active Effects Display UI - Shows all active effects on the current player Gets initial data from GameHost.party_manager.current_player, then uses effects component signals for updates Uses color coding: Green for buffs, Red for debuffs, Grey/White for neutral effects No stored references needed - connects once to signals at setup Refactored to emit effect tooltip signals |
| [CharacterBackdropScene](/advanced/user-interface/panels/character-backdrop-scene) |  |
| [CharacterPanelUI](/advanced/user-interface/panels/character-panel-ui) | Character Panel UI - A fully self-sufficient character information interface Gets initial data from party_manager.current_player, then relies on signals for updates No stored references needed - signals handle everything! |
| [CharacterPreviewManager](/advanced/user-interface/panels/character-preview-manager) | Manages a 3D character preview for UI panels Creates a synchronized copy of the entity's skeleton that mirrors visual changes |
| [CharacterSheetStat](/advanced/user-interface/panels/character-sheet-stat) | Individual stat display component for character sheet Displays a stat name and its current value with color coding Stores the stat definition resource for enhanced functionality (shared resource, no memory overhead) Refactored to emit tooltip signals instead of calling ui_manager |
| [CharacterStatsDisplayUI](/advanced/user-interface/panels/character-stats-display-ui) | Character Stats Display UI - Dynamic stats interface with individual stat connections Gets initial data from GameHost.party_manager.current_player, then individual stats handle their own updates No stored references needed - each stat component connects directly to its stat instance signals Refactored to forward tooltip signals from stat components |
| [ChoiceButtonUI](/advanced/user-interface/panels/choice-button-ui) | Individual button UI for a choice option in ChoiceSelectionPopup Similar to SkillNodeUI but without rank display |
| [ChoiceSelectionPopup](/advanced/user-interface/panels/choice-selection-popup) | Popup UI for selecting between choice options in a ChoiceSkillNode Displays each choice as a button with icon and shows tooltip on hover |
| [CurrencyDisplay](/advanced/user-interface/panels/currency-display) | Enhanced display component for showing a single currency with icon and amount |
| [EquipmentInventoryUI](/advanced/user-interface/panels/equipment-inventory-ui) |  |
| [InventoryUI](/advanced/user-interface/panels/inventory-ui) | Clean and Simple Universal Inventory UI - Refactored to extend PanelUI Updated to remove VENDOR_INVENTORY logic (now handled by dedicated VendorSlotUI) |
| [ItemSlotUI](/advanced/user-interface/panels/item-slot-ui) | Fully Unified Slot UI - handles ALL slot types (inventory, equipment, vendor) No need for separate InventorySlotUI, EquipmentSlotUI, etc. |
| [PanelUI](/advanced/user-interface/panels/panel-ui) |  |
| [QuestLogButtonUI](/advanced/user-interface/panels/quest-log-button-ui) |  |
| [QuestLogPanelUI](/advanced/user-interface/panels/quest-log-panel-ui) |  |
| [QuestLogQuestObjectiveLabel](/advanced/user-interface/panels/quest-log-quest-objective-label) |  |
| [SkillNodeUIVisual](/advanced/user-interface/panels/skill-node-ui-visual) | Visual representation of a skill node for player UI (runtime) Follows ActionBarButton pattern - simple icon + border with modulate changes |
| [SkillTreePanelUI](/advanced/user-interface/panels/skill-tree-panel-ui) | Main panel for displaying player skill trees with integrated canvas Simple pan controls, no zoom, no grid |
| [SpellBookAbilityUI](/advanced/user-interface/panels/spell-book-ability-ui) |  |
| [SpellBookPanelUI](/advanced/user-interface/panels/spell-book-panel-ui) | Spell Book Panel UI - Container for abilities and skill tree Follows the new architecture pattern: setup once, signals handle updates Contains AbilityPanelUI for spells and future SkillTree panel |
| [TitleUI](/advanced/user-interface/panels/title-ui) |  |
<!-- /classes -->

### Tooltips

<!-- classes:user-interface/tooltips -->
| Class | What it is |
|---|---|
| [TooltipAbility](/advanced/user-interface/tooltips/tooltip-ability) |  |
| [TooltipBase](/advanced/user-interface/tooltips/tooltip-base) |  |
| [TooltipDescription](/advanced/user-interface/tooltips/tooltip-description) |  |
| [TooltipEffect](/advanced/user-interface/tooltips/tooltip-effect) |  |
| [TooltipItem](/advanced/user-interface/tooltips/tooltip-item) | Comprehensive tooltip for all item types with vendor context support Now supports both ItemInstance (full detail) and ItemDefinition (basic) display |
| [TooltipManager](/advanced/user-interface/tooltips/tooltip-manager) |  |
| [TooltipSkillNode](/advanced/user-interface/tooltips/tooltip-skill-node) | Tooltip display for skill nodes showing name, description, and rewards Handles different node types: basic, ranked, and choice nodes Integrates full tooltips for complex rewards (abilities, items, effects) |
<!-- /classes -->

### In game: menus, dragging, messages

<!-- classes:user-interface/in-game -->
| Class | What it is |
|---|---|
| [DebugMenu](/advanced/user-interface/in-game/debug-menu) | Comprehensive debug menu for testing and debugging game systems Provides access to world transitions, time control, player manipulation, spawning, quest triggers, and more |
| [DefaultPopupUI](/advanced/user-interface/in-game/default-popup-ui) | The popup that comes with the toolkit: a title, a text (with BBCode and the &lt;words&gt; of TextTokens), an optional icon and a button. |
| [DragController](/advanced/user-interface/in-game/drag-controller) | Centralized drag-and-drop coordinator Handles all drag logic that was previously in DraggedItem Works with signals from UI components to coordinate operations |
| [DraggedContent](/advanced/user-interface/in-game/dragged-content) | Unified visual component for dragging both items AND abilities Pure display - NO LOGIC Replaces both DraggedItem and DraggedAbility |
| [GameOverPanelUI](/advanced/user-interface/in-game/game-over-panel-ui) | GameOverPanelUI displays death/game over UI based on the game's death behavior setting. |
| [InGameMenu](/advanced/user-interface/in-game/in-game-menu) | InGameMenu manages the pause menu during gameplay. |
| [MessagesManager](/advanced/user-interface/in-game/messages-manager) | Displays temporary messages at the top of the screen. |
| [PopupUI](/advanced/user-interface/in-game/popup-ui) | The root of a popup scene. |
<!-- /classes -->

### Menus

<!-- classes:user-interface/menus -->
| Class | What it is |
|---|---|
| [ArrowSelectionButton](/advanced/user-interface/menus/arrow-selection-button) | ArrowSelectionButton - Cyclic selection control with arrow navigation Supports both numeric options (1 to N) and string-based options with display names |
| [ButtonSubMenu](/advanced/user-interface/menus/button-sub-menu) |  |
| [CharacterCreation3DScene](/advanced/user-interface/menus/character-creation3-d-scene) | CharacterCreation3DScene - Manages the 3D character preview in character creation Handles skeleton instantiation, customization preview, and idle animations |
| [CharacterCreationInfoBox](/advanced/user-interface/menus/character-creation-info-box) | CharacterCreationInfoBox - Displays template and class information in character creation Shows two sections: Template info (for templates) and Class info (for all modes) |
| [ClassSelectionButton](/advanced/user-interface/menus/class-selection-button) | ClassSelectionButton - Button for selecting a player class in character creation Displays class icon, name, and handles selection state |
| [ColorButton](/advanced/user-interface/menus/color-button) | ColorButton - Button that displays and selects a color Used in character creation for skin, hair, and eye color selection |
| [Credits](/advanced/user-interface/menus/credits) |  |
| [CustomSlider](/advanced/user-interface/menus/custom-slider) | CustomSlider - Labeled slider control for blend shape and other value adjustments Emits value_changed signal with the new value when slider changes |
| [SaveFileButton](/advanced/user-interface/menus/save-file-button) |  |
| [SaveLoadMenu](/advanced/user-interface/menus/save-load-menu) | SaveLoadMenu manages the save/load interface for both main menu and in-game menu. |
| [SettingsCheckBox](/advanced/user-interface/menus/settings-check-box) | Modern checkbox component that works with any boolean setting property |
| [SettingsColorButton](/advanced/user-interface/menus/settings-color-button) | Modern color picker component that works with any Color setting property |
| [SettingsDragBar](/advanced/user-interface/menus/settings-drag-bar) | Modern slider component that works with any numeric setting property |
| [SettingsKeybindButton](/advanced/user-interface/menus/settings-keybind-button) | Modern keybind button that works with any InputMap action dynamically |
| [SettingsMenuUI](/advanced/user-interface/menus/settings-menu-ui) | Dynamically builds and manages the runtime settings menu from Settings resource |
| [SettingsOptionButton](/advanced/user-interface/menus/settings-option-button) | Modern option button component that works with any enum setting property |
| [TemplateButton](/advanced/user-interface/menus/template-button) | TemplateButton - Button for selecting character templates or custom creation Used in the character creation template list |
<!-- /classes -->

## See also

- [User Interface chapter](/basic/user-interface/)
- [The game host and managers](/advanced/game-host)
- [Extending the toolkit](/advanced/extending)

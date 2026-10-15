<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CurrentUI

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

**Inherited by:** [CharacterCreationUI](/advanced/user-interface/scenes/character-creation-ui), [InGameUI](/advanced/user-interface/scenes/in-game-ui), [MainMenu](/advanced/user-interface/scenes/main-menu)

Parent class for current UIs Holds logifc for all possible singals to be connected to the UIManager

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [connect_signals_to_ui_manager](#method-connect-signals-to-ui-manager)() |

## Signals

### new_game_requested( custom_character_def: CustomCharacterDefinition ) {#signal-new-game-requested}

Emitted when requesting to start a new game

### character_creation_requested() {#signal-character-creation-requested}

Emitted when requesting to transition to character creation

### load_game_requested( save_file_name: String ) {#signal-load-game-requested}

Emitted when requesting to load a saved game

### return_to_main_menu_requested() {#signal-return-to-main-menu-requested}

Emitted when requesting to return to main menu

### show_ability_tooltip( ability: Variant ) {#signal-show-ability-tooltip}

Emitted on tooltip requests

### show_skill_node_tooltip( node: SkillNode ) {#signal-show-skill-node-tooltip}

Emitted to show the tooltip of a skill node.

### show_item_tooltip( item: ItemInstance, definition: ItemDefinition, context: String, additional_data: Dictionary ) {#signal-show-item-tooltip}

Emitted to show the tooltip of an item: the item, its definition, where it is and extra data.

### show_effect_tooltip( effect: EffectInstance ) {#signal-show-effect-tooltip}

Emitted to show the tooltip of an effect.

### show_description_tooltip( object_name: String, description: String ) {#signal-show-description-tooltip}

Emitted to show a tooltip with a name and a text.

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Asks the interface to hide the tooltip (force hides it at once).

### message_request( message: String ) {#signal-message-request}

Emitted on message requests

### warning_message_request( message: String ) {#signal-warning-message-request}

Emitted to show a warning.

### ui_sfx_request( sound: AudioManager.UISound, volume_modifier: float ) {#signal-ui-sfx-request}

Emitted on audio requests

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

SystemRefs

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### void connect_signals_to_ui_manager() {#method-connect-signals-to-ui-manager}

Connects the tooltip and message signals of the interface to the UI manager.


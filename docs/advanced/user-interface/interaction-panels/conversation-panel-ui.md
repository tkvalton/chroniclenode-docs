<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

UI panel for displaying conversations using the new Conversation system Refactored to extend PanelUI instead of MarginContainer

## Properties

| | | |
|---|---|---|
| `bool` | [enable_text_animation](#prop-enable-text-animation) | `true` |
| `bool` | [allow_skip_animation](#prop-allow-skip-animation) | `true` |
| `StringName` | [skip_animation_action](#prop-skip-animation-action) | `&"ui_accept"` |
| `bool` | [require_player_input_for_dice_rolls](#prop-require-player-input-for-dice-rolls) | `true` |
| `PackedScene` | [response_button_scene](#prop-response-button-scene) |  |
| `String` | [hand_in_response_format](#prop-hand-in-response-format) | `"Hand in: {quest_name}"` |
| `String` | [complete_quest_button_text](#prop-complete-quest-button-text) | `"< Complete Quest >"` |
| `String` | [offer_quest_response_format](#prop-offer-quest-response-format) | `"{quest_name}"` |
| `String` | [accept_quest_button_text](#prop-accept-quest-button-text) | `"< Accept Quest >"` |
| `String` | [decline_quest_button_text](#prop-decline-quest-button-text) | `"< Decline >"` |

## Variables

| | | |
|---|---|---|
| `ConversationInstance` | [active_conversation](#var-active-conversation) | `null` |
| `ConversationInteraction` | [active_interaction](#var-active-interaction) | `null` |
| `DiceRollPanel` | [dice_roll_panel](#var-dice-roll-panel) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [open_conversation](#method-open-conversation)( `conversation: ConversationInstance, starting_chat: ConversationChat, interaction: ConversationInteraction` ) |
| `void` | [close_conversation](#method-close-conversation)() |
| `void` | [show_dice_roll_panel](#method-show-dice-roll-panel)( `dice_roll: ConversationDiceRoll` ) |

## Property descriptions

### bool enable_text_animation = true {#prop-enable-text-animation}

Enable animated text typing effect

### bool allow_skip_animation = true {#prop-allow-skip-animation}

Allow skipping text animation with input

### StringName skip_animation_action = &amp;"ui_accept" {#prop-skip-animation-action}

Action to skip text animation

### bool require_player_input_for_dice_rolls = true {#prop-require-player-input-for-dice-rolls}

Require player input to start dice rolls (shows dice roll panel)

### PackedScene response_button_scene {#prop-response-button-scene}

The response button scene

### String hand_in_response_format = "Hand in: quest_name" {#prop-hand-in-response-format}

Format string for quest hand-in response buttons. Use &#123;quest_name&#125; as placeholder.

### String complete_quest_button_text = "&lt; Complete Quest &gt;" {#prop-complete-quest-button-text}

Text for the complete quest button

### String offer_quest_response_format = "quest_name" {#prop-offer-quest-response-format}

Format string for quest offer response buttons. Use &#123;quest_name&#125; as placeholder.

### String accept_quest_button_text = "&lt; Accept Quest &gt;" {#prop-accept-quest-button-text}

Text for the accept quest button

### String decline_quest_button_text = "&lt; Decline &gt;" {#prop-decline-quest-button-text}

Text for the decline quest button

## Variable descriptions

### ConversationInstance active_conversation = null {#var-active-conversation}

*No description yet.*

### ConversationInteraction active_interaction = null {#var-active-interaction}

*No description yet.*

### DiceRollPanel dice_roll_panel {#var-dice-roll-panel}

*No description yet.*

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*Overrides this function of [PanelUI](/advanced/user-interface/panels/panel-ui).*

### void open_conversation( conversation: ConversationInstance, starting_chat: ConversationChat, interaction: ConversationInteraction ) {#method-open-conversation}

Open the conversation panel with a conversation and starting chat

### void close_conversation() {#method-close-conversation}

Close the conversation panel

### void show_dice_roll_panel( dice_roll: ConversationDiceRoll ) {#method-show-dice-roll-panel}

Show the dice roll panel for player interaction


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationActionProceedToDiceRoll

**Inherits:** [ConversationAction](/advanced/behaviors/conversations/conversation-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action that proceeds to a dice roll / skill check Evaluates the dice roll and proceeds to success or fail chat Uses signals for clean communication with ConversationPanelUI

## Properties

| | | |
|---|---|---|
| `int` | [dice_roll_id](#prop-dice-roll-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [execute](#method-execute)( `player: Entity, conversation_instance: ConversationInstance` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_action_type_name](#method-get-action-type-name)() |
| `String` | [get_action_icon](#method-get-action-icon)() |

## Signals

### dice_roll_requested( dice_roll: ConversationDiceRoll, player: Entity, conversation_instance: ConversationInstance ) {#signal-dice-roll-requested}

Emitted to ask for the dice roll: the roll, the player and the conversation.

## Property descriptions

### int dice_roll_id = 0 {#prop-dice-roll-id}

ID of the dice roll to execute

## Method descriptions

### void execute( player: Entity, conversation_instance: ConversationInstance ) {#method-execute}

Runs the action in the conversation.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the action. Gives the problems found (empty when it is fine).

### String get_description() {#method-get-description}

A short text about what the action does, for the editor.

### String get_action_type_name() {#method-get-action-type-name}

The name of the kind of action, for the editor.

### String get_action_icon() {#method-get-action-icon}

The symbol of the kind of action, for the editor.


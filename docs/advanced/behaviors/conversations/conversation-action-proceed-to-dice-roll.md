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

## Property descriptions

### int dice_roll_id = 0 {#prop-dice-roll-id}

ID of the dice roll to execute

## Method descriptions

### void execute( player: Entity, conversation_instance: ConversationInstance ) {#method-execute}

Execute this action with the given context Must be overridden in child classes player: The entity (player) involved in the conversation conversation_instance: The runtime ConversationInstance (not the resource) *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

### Array[Dictionary] validate() {#method-validate}

Validate that this action is properly configured Returns an array of error dictionaries if invalid *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

### String get_description() {#method-get-description}

Get a human-readable description of this action for editor display *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

### String get_action_type_name() {#method-get-action-type-name}

*No description yet.*

### String get_action_icon() {#method-get-action-icon}

*No description yet.*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Conversation

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A conversation containing multiple chats and responses Responses are stored in a flat array and referenced by ID

## Description

All runtime state is managed by ConversationInstance.

## Properties

| | | |
|---|---|---|
| `Array[ConversationChat]` | [conversation_chats](#prop-conversation-chats) | `[]` |
| `Array[ConversationResponse]` | [conversation_responses](#prop-conversation-responses) | `[]` |
| `Array[ConversationDiceRoll]` | [conversation_dice_rolls](#prop-conversation-dice-rolls) | `[]` |
| `Array[Dictionary]` | [start_entries](#prop-start-entries) | `[]` |
| `Dictionary` | [conversation_layout](#prop-conversation-layout) | `{}` |
| `Array[Quest]` | [hand_in_quests](#prop-hand-in-quests) | `[]` |
| `Array[Quest]` | [offer_quests](#prop-offer-quests) | `[]` |

## Methods

| | |
|---|---|
| `Array[Conversation]` | [find_handing_in](#method-find-handing-in)( `quest_id: int` ) *static* |
| `int` | [get_id](#method-get-id)() |
| `ConversationChat` | [get_chat_by_id](#method-get-chat-by-id)( `chat_id: int` ) |
| `ConversationChat` | [get_first_chat](#method-get-first-chat)() |
| `void` | [add_chat](#method-add-chat)( `chat: ConversationChat` ) |
| `bool` | [remove_chat](#method-remove-chat)( `chat_id: int` ) |
| `int` | [get_next_chat_id](#method-get-next-chat-id)() |
| `ConversationResponse` | [get_response_by_id](#method-get-response-by-id)( `response_id: int` ) |
| `void` | [add_response](#method-add-response)( `response: ConversationResponse` ) |
| `bool` | [remove_response](#method-remove-response)( `response_id: int` ) |
| `int` | [get_next_response_id](#method-get-next-response-id)() |
| `Array[ConversationResponse]` | [get_responses_for_chat](#method-get-responses-for-chat)( `chat_id: int` ) |
| `ConversationDiceRoll` | [get_dice_roll_by_id](#method-get-dice-roll-by-id)( `dice_roll_id: int` ) |
| `void` | [add_dice_roll](#method-add-dice-roll)( `dice_roll: ConversationDiceRoll` ) |
| `bool` | [remove_dice_roll](#method-remove-dice-roll)( `dice_roll_id: int` ) |
| `int` | [get_next_dice_roll_id](#method-get-next-dice-roll-id)() |
| `int` | [get_starting_chat_id](#method-get-starting-chat-id)() |

## Property descriptions

### Array[ConversationChat] conversation_chats = [] {#prop-conversation-chats}

========== EXPORTED PROPERTIES ==========

### Array[ConversationResponse] conversation_responses = [] {#prop-conversation-responses}

Flat array of all responses

### Array[ConversationDiceRoll] conversation_dice_rolls = [] {#prop-conversation-dice-rolls}

Flat array of all dice rolls

### Array[Dictionary] start_entries = [] {#prop-start-entries}

Starting chat options with requirements (priority order)

### Dictionary conversation_layout =  {#prop-conversation-layout}

Stores graph editor layout

### Array[Quest] hand_in_quests = [] {#prop-hand-in-quests}

Quests that can be handed in through this conversation

### Array[Quest] offer_quests = [] {#prop-offer-quests}

Quests that can be offered/accepted through this conversation Only shown if player meets the quest's requirements

## Method descriptions

### Array[Conversation] find_handing_in( quest_id: int ) {#method-find-handing-in}

The conversations that take this quest in (it is in their hand-in list)

### int get_id() {#method-get-id}

========== PUBLIC API - CHATS ==========

### ConversationChat get_chat_by_id( chat_id: int ) {#method-get-chat-by-id}

The chat with this id, or null.

### ConversationChat get_first_chat() {#method-get-first-chat}

The chat the conversation starts with.

### void add_chat( chat: ConversationChat ) {#method-add-chat}

Adds a chat.

### bool remove_chat( chat_id: int ) {#method-remove-chat}

Removes a chat by id. False when it is not there.

### int get_next_chat_id() {#method-get-next-chat-id}

The next free chat id.

### ConversationResponse get_response_by_id( response_id: int ) {#method-get-response-by-id}

========== PUBLIC API - RESPONSES ==========

### void add_response( response: ConversationResponse ) {#method-add-response}

Adds a response.

### bool remove_response( response_id: int ) {#method-remove-response}

Removes a response by id. False when it is not there.

### int get_next_response_id() {#method-get-next-response-id}

The next free response id.

### Array[ConversationResponse] get_responses_for_chat( chat_id: int ) {#method-get-responses-for-chat}

The responses of a chat.

### ConversationDiceRoll get_dice_roll_by_id( dice_roll_id: int ) {#method-get-dice-roll-by-id}

========== PUBLIC API - DICE ROLLS ==========

### void add_dice_roll( dice_roll: ConversationDiceRoll ) {#method-add-dice-roll}

Adds a dice roll.

### bool remove_dice_roll( dice_roll_id: int ) {#method-remove-dice-roll}

Removes a dice roll by id. False when it is not there.

### int get_next_dice_roll_id() {#method-get-next-dice-roll-id}

The next free dice roll id.

### int get_starting_chat_id() {#method-get-starting-chat-id}

Get the starting chat ID (for editor use only) At runtime, use ConversationInstance._evaluate_start_entries() instead


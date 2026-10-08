<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Runtime instance of a Conversation resource Keeps the underlying resource immutable by tracking all mutable state here

## Variables

| | | |
|---|---|---|
| `Conversation` | [conversation](#var-conversation) |  |
| `Dictionary` | [response_states](#var-response-states) | `{}` |
| `Dictionary` | [response_history](#var-response-history) | `{}` |
| `int` | [starting_chat_override](#var-starting-chat-override) | `0` |
| `ConversationChat` | [active_chat](#var-active-chat) | `null` |
| `Entity` | [active_player](#var-active-player) | `null` |
| `Variant` | [source_entity](#var-source-entity) | `null` |
| `bool` | [is_active](#var-is-active) | `false` |
| `Quest` | [active_hand_in_quest](#var-active-hand-in-quest) | `null` |
| `Quest` | [active_offer_quest](#var-active-offer-quest) | `null` |
| `Dictionary` | [cached_interactions](#var-cached-interactions) | `{}` |
| `EventManager` | [event_manager](#var-event-manager) |  |

## Methods

| | |
|---|---|
| `void` | [reset_to_defaults](#method-reset-to-defaults)() |
| `void` | [initialize_interactions](#method-initialize-interactions)( `system_hub: GameHost.SystemHub` ) |
| `Interaction` | [get_cached_interaction](#method-get-cached-interaction)( `interaction_resource: Interaction` ) |
| `bool` | [is_response_active](#method-is-response-active)( `response_id: int` ) |
| `void` | [set_response_state](#method-set-response-state)( `response_id: int, state: bool` ) |
| `Dictionary` | [get_response_states](#method-get-response-states)() |
| `void` | [load_response_states](#method-load-response-states)( `states: Dictionary` ) |
| `void` | [mark_response_seen](#method-mark-response-seen)( `response_id: int` ) |
| `bool` | [has_response_been_seen](#method-has-response-been-seen)( `response_id: int` ) |
| `Array[int]` | [get_seen_responses](#method-get-seen-responses)() |
| `Dictionary` | [get_response_history](#method-get-response-history)() |
| `void` | [load_response_history](#method-load-response-history)( `history: Dictionary` ) |
| `void` | [set_starting_chat_override](#method-set-starting-chat-override)( `chat_id: int` ) |
| `int` | [get_starting_chat_override](#method-get-starting-chat-override)() |
| `void` | [clear_starting_chat_override](#method-clear-starting-chat-override)() |
| `int` | [get_id](#method-get-id)() |
| `ConversationChat` | [get_chat_by_id](#method-get-chat-by-id)( `chat_id: int` ) |
| `ConversationChat` | [get_first_chat](#method-get-first-chat)() |
| `int` | [get_next_chat_id](#method-get-next-chat-id)() |
| `ConversationResponse` | [get_response_by_id](#method-get-response-by-id)( `response_id: int` ) |
| `int` | [get_next_response_id](#method-get-next-response-id)() |
| `Array[ConversationResponse]` | [get_responses_for_chat](#method-get-responses-for-chat)( `chat_id: int` ) |
| `ConversationDiceRoll` | [get_dice_roll_by_id](#method-get-dice-roll-by-id)( `dice_roll_id: int` ) |
| `int` | [get_next_dice_roll_id](#method-get-next-dice-roll-id)() |
| `Array[Quest]` | [get_available_hand_in_quests](#method-get-available-hand-in-quests)() |
| `bool` | [has_available_hand_in_quests](#method-has-available-hand-in-quests)() |
| `bool` | [is_in_hand_in_state](#method-is-in-hand-in-state)() |
| `void` | [start_quest_hand_in](#method-start-quest-hand-in)( `quest: Quest` ) |
| `void` | [complete_quest_hand_in](#method-complete-quest-hand-in)() |
| `void` | [cancel_quest_hand_in](#method-cancel-quest-hand-in)() |
| `Array[Quest]` | [get_available_offer_quests](#method-get-available-offer-quests)() |
| `bool` | [has_available_offer_quests](#method-has-available-offer-quests)() |
| `bool` | [is_in_offer_state](#method-is-in-offer-state)() |
| `void` | [start_quest_offer](#method-start-quest-offer)( `quest: Quest` ) |
| `void` | [accept_quest_offer](#method-accept-quest-offer)() |
| `void` | [decline_quest_offer](#method-decline-quest-offer)() |
| `ConversationChat` | [start_conversation](#method-start-conversation)( `player: Entity, npc: NPC = null` ) |
| `void` | [end_conversation](#method-end-conversation)() |
| `void` | [proceed_to_chat](#method-proceed-to-chat)( `target_chat: ConversationChat, _player: Entity` ) |
| `Array[Dictionary]` | [get_response_data_for_current_chat](#method-get-response-data-for-current-chat)() |
| `Array[Dictionary]` | [get_response_data_for_chat](#method-get-response-data-for-chat)( `chat: ConversationChat, player: Entity` ) |
| `Array[ConversationResponse]` | [get_available_responses_for_current_chat](#method-get-available-responses-for-current-chat)() |
| `Array[ConversationResponse]` | [get_available_responses_for_chat](#method-get-available-responses-for-chat)( `chat: ConversationChat, player: Entity` ) |
| `void` | [execute_response_actions](#method-execute-response-actions)( `response: ConversationResponse, player: Entity` ) |
| `Dictionary` | [get_save_data](#method-get-save-data)() |
| `void` | [load_save_data](#method-load-save-data)( `data: Dictionary` ) |

## Signals

### conversation_started( starting_chat: ConversationChat ) {#signal-conversation-started}

### conversation_ended() {#signal-conversation-ended}

### chat_changed( new_chat: ConversationChat ) {#signal-chat-changed}

### dice_roll_completed( roll_result: Dictionary ) {#signal-dice-roll-completed}

### switch_interaction_requested( target_interaction: Interaction, player: Entity ) {#signal-switch-interaction-requested}

### quest_hand_in_started( quest: Quest ) {#signal-quest-hand-in-started}

### quest_hand_in_completed( quest: Quest ) {#signal-quest-hand-in-completed}

### quest_offer_started( quest: Quest ) {#signal-quest-offer-started}

### quest_offer_accepted( quest: Quest ) {#signal-quest-offer-accepted}

### quest_offer_declined( quest: Quest ) {#signal-quest-offer-declined}

## Variable descriptions

### Conversation conversation {#var-conversation}

The underlying conversation resource (immutable)

### Dictionary response_states =  {#var-response-states}

Runtime state - response active states (response_id -&gt; bool)

### Dictionary response_history =  {#var-response-history}

Response history - tracks which responses the player has selected (response_id -&gt; true)

### int starting_chat_override = 0 {#var-starting-chat-override}

Override for starting chat (0 = use default start_entries evaluation)

### ConversationChat active_chat = null {#var-active-chat}

Current conversation state

### Entity active_player = null {#var-active-player}

*No description yet.*

### Variant source_entity = null {#var-source-entity}

The NPC or entity this conversation belongs to

### bool is_active = false {#var-is-active}

*No description yet.*

### Quest active_hand_in_quest = null {#var-active-hand-in-quest}

Quest hand-in state

### Quest active_offer_quest = null {#var-active-offer-quest}

Quest offer state

### Dictionary cached_interactions =  {#var-cached-interactions}

Cached interactions that can be triggered from this conversation Key: Interaction resource, Value: Initialized interaction instance

### EventManager event_manager {#var-event-manager}

SystemRefs

## Method descriptions

### void reset_to_defaults() {#method-reset-to-defaults}

Reset all runtime state to defaults (for loading saves)

### void initialize_interactions( system_hub: GameHost.SystemHub ) {#method-initialize-interactions}

Initialize all interactions referenced in conversation actions Should be called after source_entity is set

### Interaction get_cached_interaction( interaction_resource: Interaction ) {#method-get-cached-interaction}

Get a cached interaction instance by its resource

### bool is_response_active( response_id: int ) {#method-is-response-active}

Get whether a response is currently active

### void set_response_state( response_id: int, state: bool ) {#method-set-response-state}

Set a response's active state

### Dictionary get_response_states() {#method-get-response-states}

Get all response states for serialization

### void load_response_states( states: Dictionary ) {#method-load-response-states}

Load response states from save data (a save is JSON: the ids come back as text)

### void mark_response_seen( response_id: int ) {#method-mark-response-seen}

Mark a response as seen/selected by the player

### bool has_response_been_seen( response_id: int ) {#method-has-response-been-seen}

Check if a response has been seen/selected by the player

### Array[int] get_seen_responses() {#method-get-seen-responses}

Get all seen response IDs

### Dictionary get_response_history() {#method-get-response-history}

Get response history for serialization

### void load_response_history( history: Dictionary ) {#method-load-response-history}

Load response history from save data

### void set_starting_chat_override( chat_id: int ) {#method-set-starting-chat-override}

Set which chat the conversation should start from (overrides start_entries)

### int get_starting_chat_override() {#method-get-starting-chat-override}

Get the current starting chat override (0 = none)

### void clear_starting_chat_override() {#method-clear-starting-chat-override}

Clear the starting chat override (revert to start_entries evaluation)

### int get_id() {#method-get-id}

*No description yet.*

### ConversationChat get_chat_by_id( chat_id: int ) {#method-get-chat-by-id}

*No description yet.*

### ConversationChat get_first_chat() {#method-get-first-chat}

*No description yet.*

### int get_next_chat_id() {#method-get-next-chat-id}

*No description yet.*

### ConversationResponse get_response_by_id( response_id: int ) {#method-get-response-by-id}

*No description yet.*

### int get_next_response_id() {#method-get-next-response-id}

*No description yet.*

### Array[ConversationResponse] get_responses_for_chat( chat_id: int ) {#method-get-responses-for-chat}

*No description yet.*

### ConversationDiceRoll get_dice_roll_by_id( dice_roll_id: int ) {#method-get-dice-roll-by-id}

*No description yet.*

### int get_next_dice_roll_id() {#method-get-next-dice-roll-id}

*No description yet.*

### Array[Quest] get_available_hand_in_quests() {#method-get-available-hand-in-quests}

Get all quests that are ready to hand in for this conversation

### bool has_available_hand_in_quests() {#method-has-available-hand-in-quests}

Check if there are any quests available for hand-in

### bool is_in_hand_in_state() {#method-is-in-hand-in-state}

Check if we're currently in a quest hand-in state

### void start_quest_hand_in( quest: Quest ) {#method-start-quest-hand-in}

Start the quest hand-in process for a specific quest

### void complete_quest_hand_in() {#method-complete-quest-hand-in}

Complete the current quest hand-in and end the conversation

### void cancel_quest_hand_in() {#method-cancel-quest-hand-in}

Cancel the quest hand-in and return to normal conversation

### Array[Quest] get_available_offer_quests() {#method-get-available-offer-quests}

Get all quests that can be offered (player meets requirements and the quest can be started)

### bool has_available_offer_quests() {#method-has-available-offer-quests}

Check if there are any quests available for offer

### bool is_in_offer_state() {#method-is-in-offer-state}

Check if we're currently in a quest offer state

### void start_quest_offer( quest: Quest ) {#method-start-quest-offer}

Start the quest offer process for a specific quest

### void accept_quest_offer() {#method-accept-quest-offer}

Accept the current quest offer

### void decline_quest_offer() {#method-decline-quest-offer}

Decline the current quest offer and return to normal conversation

### ConversationChat start_conversation( player: Entity, npc: NPC = null ) {#method-start-conversation}

Start the conversation with a player

### void end_conversation() {#method-end-conversation}

End the conversation and cleanup

### void proceed_to_chat( target_chat: ConversationChat, _player: Entity ) {#method-proceed-to-chat}

Proceed to a new chat

### Array[Dictionary] get_response_data_for_current_chat() {#method-get-response-data-for-current-chat}

Get response data for the current chat with requirement status Returns Array[Dictionary] with format: {"response": ConversationResponse, "requirements_met": bool}

### Array[Dictionary] get_response_data_for_chat( chat: ConversationChat, player: Entity ) {#method-get-response-data-for-chat}

Get response data for a specific chat with requirement status Returns Array[Dictionary] with format: {"response": ConversationResponse, "requirements_met": bool} Skips responses where runtime state is inactive

### Array[ConversationResponse] get_available_responses_for_current_chat() {#method-get-available-responses-for-current-chat}

Get available responses for the current chat (only those that pass requirements)

### Array[ConversationResponse] get_available_responses_for_chat( chat: ConversationChat, player: Entity ) {#method-get-available-responses-for-chat}

Get available responses for a specific chat

### void execute_response_actions( response: ConversationResponse, player: Entity ) {#method-execute-response-actions}

Execute a response's actions

### Dictionary get_save_data() {#method-get-save-data}

Get save data for this conversation instance

### void load_save_data( data: Dictionary ) {#method-load-save-data}

Load state from save data


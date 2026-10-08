<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationChat

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A single chat in a conversation References responses by ID instead of nesting them

## Properties

| | | |
|---|---|---|
| `int` | [id](#prop-id) | `0` |
| `Array[String]` | [text](#prop-text) |  |
| `Array[SFXSelection]` | [voice_line_sfx](#prop-voice-line-sfx) |  |
| `AnimationSelectionSocial` | [animation](#prop-animation) |  |
| `Array[int]` | [response_ids](#prop-response-ids) | `[]` |
| `bool` | [allow_end_conversation](#prop-allow-end-conversation) | `true` |

## Methods

| | |
|---|---|
| `int` | [get_response_count](#method-get-response-count)() |
| `int` | [add_response_slot](#method-add-response-slot)() |
| `void` | [remove_response_slot](#method-remove-response-slot)( `slot_index: int` ) |
| `void` | [set_response_at_slot](#method-set-response-at-slot)( `slot_index: int, response_id: int` ) |
| `int` | [get_response_id_at_slot](#method-get-response-id-at-slot)( `slot_index: int` ) |
| `bool` | [is_slot_connected](#method-is-slot-connected)( `slot_index: int` ) |
| `int` | [find_slot_for_response](#method-find-slot-for-response)( `response_id: int` ) |

## Signals

### response_slot_changed( slot_idx: int ) {#signal-response-slot-changed}

## Property descriptions

### int id = 0 {#prop-id}

*No description yet.*

### Array[String] text {#prop-text}

Text to display, Array to hold each language

### Array[SFXSelection] voice_line_sfx {#prop-voice-line-sfx}

Soundfile to play for interaction, Array to hold each language

### AnimationSelectionSocial animation {#prop-animation}

Animation to play on interact

### Array[int] response_ids = [] {#prop-response-ids}

Response IDs in order (references to Conversation.conversation_responses) Null values (0) represent empty/unconnected slots

### bool allow_end_conversation = true {#prop-allow-end-conversation}

Adds &lt;End Conversation&gt; default ConversationResponse to chat

## Method descriptions

### int get_response_count() {#method-get-response-count}

*No description yet.*

### int add_response_slot() {#method-add-response-slot}

*No description yet.*

### void remove_response_slot( slot_index: int ) {#method-remove-response-slot}

*No description yet.*

### void set_response_at_slot( slot_index: int, response_id: int ) {#method-set-response-at-slot}

*No description yet.*

### int get_response_id_at_slot( slot_index: int ) {#method-get-response-id-at-slot}

*No description yet.*

### bool is_slot_connected( slot_index: int ) {#method-is-slot-connected}

*No description yet.*

### int find_slot_for_response( response_id: int ) {#method-find-slot-for-response}

*No description yet.*


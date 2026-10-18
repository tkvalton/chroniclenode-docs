<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationResponse

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A single response option in a conversation Now includes chat_id to track which chat it belongs to

## Properties

| | | |
|---|---|---|
| `int` | [id](#prop-id) | `0` |
| `int` | [chat_id](#prop-chat-id) | `0` |
| `bool` | [active](#prop-active) | `true` |
| `PackedStringArray` | [tags](#prop-tags) | `[]` |
| `String` | [response_display_name](#prop-response-display-name) | `"":` |
| `String` | [response_text](#prop-response-text) | `"":` |
| `SFXSelection` | [voice_line_sfx](#prop-voice-line-sfx) |  |
| `AnimationSelectionSocial` | [animation](#prop-animation) |  |
| `Array[Requirement]` | [response_requirements](#prop-response-requirements) |  |
| `Array[ConversationAction]` | [response_actions](#prop-response-actions) |  |

## Methods

| | |
|---|---|
| `bool` | [has_tag](#method-has-tag)( `tag: String` ) |
| `void` | [add_tag](#method-add-tag)( `tag: String` ) |
| `void` | [remove_tag](#method-remove-tag)( `tag: String` ) |

## Property descriptions

### int id = 0 {#prop-id}

The id of the response.

### int chat_id = 0 {#prop-chat-id}

Which chat this response belongs to

### bool active = true {#prop-active}

If response is allowed (Will remain hidden until set active)

### PackedStringArray tags = [] {#prop-tags}

Tags for grouping responses (e.g., "quest_active", "merchant", "romance")

### String response_display_name = "": {#prop-response-display-name}

Display name of response button (the text of the source language)

### String response_text = "": {#prop-response-text}

Text to display on response (the text of the source language)

### SFXSelection voice_line_sfx {#prop-voice-line-sfx}

The voice line to play with the response: the line of the source language (a line in another language is the file of the same name in the language folder of the character)

### AnimationSelectionSocial animation {#prop-animation}

Animation to play on interact

### Array[Requirement] response_requirements {#prop-response-requirements}

Requirements for response

### Array[ConversationAction] response_actions {#prop-response-actions}

Actions to occur on response

## Method descriptions

### bool has_tag( tag: String ) {#method-has-tag}

Check if this response has a specific tag

### void add_tag( tag: String ) {#method-add-tag}

Add a tag if not already present

### void remove_tag( tag: String ) {#method-remove-tag}

Remove a tag if present


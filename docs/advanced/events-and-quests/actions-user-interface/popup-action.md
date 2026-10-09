<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PopupAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Shows or hides a popup (a scene built on PopupUI: a tutorial, a message, a toast, an achievement). What the popup does (pause, ESC, closing by itself, once only) is set on the popup. Fails when the popup does not exist.

## Properties

| | | |
|---|---|---|
| `int` | [popup_id](#prop-popup-id) | `0` |
| `PopupActionType` | [popup_state](#prop-popup-state) | `PopupActionType.SHOW` |
| `String` | [title](#prop-title) | `""` |
| `String` | [text](#prop-text) | `""` |
| `bool` | [wait_for_close](#prop-wait-for-close) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [cleanup](#method-cleanup)() |

## Enumerations

### enum PopupActionType {#enum-popupactiontype}

- **SHOW** = `0`
- **HIDE** = `1`

## Property descriptions

### int popup_id = 0 {#prop-popup-id}

The popup (the toolkit's own message popup is 1000001)

### PopupActionType popup_state = PopupActionType.SHOW {#prop-popup-state}

Whether to show or hide the popup

### String title = "" {#prop-title}

Given to the popup: the message popup shows a title and a text (words in &lt;angle brackets&gt; are filled in)

### String text = "" {#prop-text}

*No description yet.*

### bool wait_for_close = false {#prop-wait-for-close}

The action completes when the popup is closed (a tutorial that the next action of the event waits for)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### void cleanup() {#method-cleanup}

Clean up resources *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


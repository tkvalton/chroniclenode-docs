<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ResponseButton

**Inherits:** `MarginContainer`

A response option button in the conversation UI

## Variables

| | | |
|---|---|---|
| `bool` | [disabled](#var-disabled) | `false` |

## Methods

| | |
|---|---|
| `void` | [set_response_text](#method-set-response-text)( `text: String` ) |
| `void` | [set_disabled](#method-set-disabled)( `is_disabled: bool` ) |

## Signals

### button_clicked() {#signal-button-clicked}

Emitted when the player clicks the response.

## Variable descriptions

### bool disabled = false {#var-disabled}

True when the response cannot be picked.

## Method descriptions

### void set_response_text( text: String ) {#method-set-response-text}

Sets the text of the response.

### void set_disabled( is_disabled: bool ) {#method-set-disabled}

Greys the response out, or not.


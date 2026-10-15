<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AnimatedTextLabel

**Inherits:** `RichTextLabel`

A RichTextLabel that can type out text character by character Simplified version for conversation system use

## Properties

| | | |
|---|---|---|
| `float` | [seconds_per_character](#prop-seconds-per-character) | `0.02` |
| `bool` | [pause_at_punctuation](#prop-pause-at-punctuation) | `true` |
| `String` | [pause_characters](#prop-pause-characters) | `".!?"` |
| `float` | [punctuation_pause_duration](#prop-punctuation-pause-duration) | `0.15` |

## Variables

| | | |
|---|---|---|
| `bool` | [is_typing](#var-is-typing) | `false` |

## Methods

| | |
|---|---|
| `void` | [type_out_text](#method-type-out-text)( `new_text: String` ) |
| `void` | [finish_typing](#method-finish-typing)() |
| `void` | [skip_typing](#method-skip-typing)() |
| `bool` | [get_is_typing](#method-get-is-typing)() |

## Signals

### typing_started() {#signal-typing-started}

========== SIGNALS ==========

### typing_finished() {#signal-typing-finished}

Emitted when the whole text has been typed.

### typing_skipped() {#signal-typing-skipped}

Emitted when the player skipped the typing.

## Property descriptions

### float seconds_per_character = 0.02 {#prop-seconds-per-character}

Speed at which text types out (seconds per character)

### bool pause_at_punctuation = true {#prop-pause-at-punctuation}

Pause longer at these punctuation marks

### String pause_characters = ".!?" {#prop-pause-characters}

Characters that trigger a pause

### float punctuation_pause_duration = 0.15 {#prop-punctuation-pause-duration}

Duration of pause at punctuation (in seconds)

## Variable descriptions

### bool is_typing = false {#var-is-typing}

========== RUNTIME STATE ==========

## Method descriptions

### void type_out_text( new_text: String ) {#method-type-out-text}

Start typing out the given text

### void finish_typing() {#method-finish-typing}

Instantly finish typing and show all text

### void skip_typing() {#method-skip-typing}

Skip the typing animation (same as finish_typing but emits different signal)

### bool get_is_typing() {#method-get-is-typing}

Check if currently typing


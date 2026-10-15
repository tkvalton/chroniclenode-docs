<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ArrowSelectionButton

**Inherits:** `MarginContainer`

ArrowSelectionButton - Cyclic selection control with arrow navigation Supports both numeric options (1 to N) and string-based options with display names

## Properties

| | | |
|---|---|---|
| `int` | [number_of_options](#prop-number-of-options) | `1` |
| `Array[String]` | [option_labels](#prop-option-labels) | `[]` |

## Variables

| | | |
|---|---|---|
| `int` | [current_option](#var-current-option) | `1:` |

## Methods

| | |
|---|---|
| `void` | [set_label](#method-set-label)( `number: int` ) |
| `void` | [set_type_label](#method-set-type-label)( `label_text: String` ) |
| `void` | [set_options](#method-set-options)( `labels: Array[String]` ) |
| `void` | [set_options_from_packed](#method-set-options-from-packed)( `labels: PackedStringArray` ) |
| `String` | [get_current_label](#method-get-current-label)() |
| `int` | [get_current_index](#method-get-current-index)() |
| `void` | [update_arrow_visibility](#method-update-arrow-visibility)() |
| `void` | [set_selection](#method-set-selection)( `index: int` ) |

## Signals

### selection_changed( option: int ) {#signal-selection-changed}

Emitted when the option changes.

## Property descriptions

### int number_of_options = 1 {#prop-number-of-options}

How many options there are.

### Array[String] option_labels = [] {#prop-option-labels}

Optional array of display strings for each option If empty, shows numeric values (1, 2, 3...) If populated, shows these strings instead

## Variable descriptions

### int current_option = 1: {#var-current-option}

The option picked now (the first is 1).

## Method descriptions

### void set_label( number: int ) {#method-set-label}

Old way to set the option (use current_option).

### void set_type_label( label_text: String ) {#method-set-type-label}

Set the type label (static label showing what this selector is for) Example: "Hair", "Eyes", "Nose", etc.

### void set_options( labels: Array[String] ) {#method-set-options}

Set options from an array of strings Automatically sets number_of_options and option_labels

### void set_options_from_packed( labels: PackedStringArray ) {#method-set-options-from-packed}

Set options from a PackedStringArray (useful for database returns)

### String get_current_label() {#method-get-current-label}

Get the current label text (whether numeric or string)

### int get_current_index() {#method-get-current-index}

Get the current option as 0-indexed (useful for array lookups)

### void update_arrow_visibility() {#method-update-arrow-visibility}

Hides the arrows at the first and last option.

### void set_selection( index: int ) {#method-set-selection}

Moves to the next option.


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# NamePickerField

**Inherits:** [ConfigField](/advanced/editor/factory/config-field) < [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

A String property chosen from a list of names that the owner gives with set_choices (the parts of a Dynamic Music, its states). A value that is not in the list any more is shown as missing, so a renamed part is seen at once. With **Allow empty** the first entry is the empty value, named by **Empty text**.

## Properties

| | | |
|---|---|---|
| `String` | [empty_text](#prop-empty-text) | `"(none)"` |
| `bool` | [allow_empty](#prop-allow-empty) | `true` |

## Methods

| | |
|---|---|
| `void` | [set_choices](#method-set-choices)( `names: PackedStringArray` ) |
| `PackedStringArray` | [get_choices](#method-get-choices)() |

## Property descriptions

### String empty_text = "(none)" {#prop-empty-text}

The text of the empty choice ("Any state", "(none)")

### bool allow_empty = true {#prop-allow-empty}

Can the value be empty? (the first entry of the list)

## Method descriptions

### void set_choices( names: PackedStringArray ) {#method-set-choices}

Gives the names to choose from; the value that is shown stays

### PackedStringArray get_choices() {#method-get-choices}

The names it offers now (for the tests)


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DynamicDictionaryEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Reusable component for editing dictionaries with add/edit/remove functionality Supports items (id -&gt; quantity) and currency (id -&gt; amount) entries

## Description

Usage Example: var editor = DynamicDictionaryEditor.new() editor.setup(dialog_manager, "items", "item")  # For items dictionary editor.setup(dialog_manager, "currency", "currency")  # For currency dictionary editor.dictionary_changed.connect(_on_inventory_changed)

## Variables

| | | |
|---|---|---|
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `String` | [dictionary_key](#var-dictionary-key) | `"items"` |
| `String` | [database_type](#var-database-type) | `"item"` |
| `String` | [entry_name_singular](#var-entry-name-singular) | `"Item"` |
| `String` | [entry_name_plural](#var-entry-name-plural) | `"Items"` |
| `Dictionary` | [current_dictionary](#var-current-dictionary) | `{}` |
| `HBoxContainer` | [header_row](#var-header-row) |  |
| `Label` | [header_label](#var-header-label) |  |
| `Button` | [add_button](#var-add-button) |  |
| `VBoxContainer` | [entries_container](#var-entries-container) |  |
| `Label` | [empty_label](#var-empty-label) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_dialog_manager: DialogManager, p_dictionary_key: String = "items", p_database_type: String = "item"` ) |
| `void` | [load_dictionary](#method-load-dictionary)( `dictionary: Dictionary` ) |
| `Dictionary` | [get_dictionary](#method-get-dictionary)() |
| `bool` | [is_valid](#method-is-valid)() |
| `Array[String]` | [get_validation_errors](#method-get-validation-errors)() |

## Signals

### dictionary_changed( new_dictionary: Dictionary ) {#signal-dictionary-changed}

## Variable descriptions

### DialogManager dialog_manager {#var-dialog-manager}

========== CONFIGURATION ==========

### String dictionary_key = "items" {#var-dictionary-key}

"items" or "currency"

### String database_type = "item" {#var-database-type}

"item" or "currency"

### String entry_name_singular = "Item" {#var-entry-name-singular}

"Item" or "Currency"

### String entry_name_plural = "Items" {#var-entry-name-plural}

"Items" or "Currencies"

### Dictionary current_dictionary =  {#var-current-dictionary}

========== STATE ==========

### HBoxContainer header_row {#var-header-row}

========== UI COMPONENTS ==========

### Label header_label {#var-header-label}

*No description yet.*

### Button add_button {#var-add-button}

*No description yet.*

### VBoxContainer entries_container {#var-entries-container}

*No description yet.*

### Label empty_label {#var-empty-label}

*No description yet.*

## Method descriptions

### void setup( p_dialog_manager: DialogManager, p_dictionary_key: String = "items", p_database_type: String = "item" ) {#method-setup}

*No description yet.*

### void load_dictionary( dictionary: Dictionary ) {#method-load-dictionary}

========== PUBLIC API ==========

### Dictionary get_dictionary() {#method-get-dictionary}

*No description yet.*

### bool is_valid() {#method-is-valid}

========== VALIDATION ==========

### Array[String] get_validation_errors() {#method-get-validation-errors}

*No description yet.*


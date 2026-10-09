<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EventTypeSelector

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Reusable component for selecting and configuring event types (triggers/conditions/actions)

## Description

REFACTORED VERSION:

- Uses PropertySelectorRegistry for database type mappings (single source of truth)
- Uses dedicated ParameterPopup classes instead of inline popup creation
- Reduced from ~1300 lines to ~700 lines
- Only SPECIAL_SELECTORS dictionary remains for non-database types
- All database formatting delegated to PropertySelectorRegistry

This component provides:

- Category and specific type dropdowns
- RichTextLabel with clickable parameters
- All parameter extraction and popup handling
- Can be embedded in any popup/panel

Usage: var selector = EventTypeSelector.new() add_child(selector) selector.setup("trigger", trigger_types_dict) selector.type_configured.connect(_on_type_configured)

## Variables

| | | |
|---|---|---|
| `Label` | [type_label](#var-type-label) |  |
| `OptionButton` | [category_dropdown](#var-category-dropdown) |  |
| `OptionButton` | [specific_dropdown](#var-specific-dropdown) |  |
| `Label` | [description_label](#var-description-label) |  |
| `RichTextLabel` | [rich_text_label](#var-rich-text-label) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `Dictionary` | [type_dictionary](#var-type-dictionary) | `{}` |
| `String` | [current_type_category](#var-current-type-category) | `""  # "trigger", "condition", "action"` |
| `Dictionary` | [selected_type_data](#var-selected-type-data) | `{}` |
| `Dictionary` | [param_values](#var-param-values) | `{}` |
| `Dictionary` | [param_types](#var-param-types) | `{}` |
| `bool` | [edit_mode](#var-edit-mode) | `false` |
| `bool` | [show_dropdowns](#var-show-dropdowns) | `true` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `type_category: String, types_dict: Dictionary = {}` ) |
| `void` | [setup_for_edit](#method-setup-for-edit)( `type_category: String, instance: Resource` ) |
| `Dictionary` | [get_selected_type_data](#method-get-selected-type-data)() |
| `Dictionary` | [get_param_values](#method-get-param-values)() |
| `bool` | [has_selection](#method-has-selection)() |
| `void` | [set_dialog_manager](#method-set-dialog-manager)( `manager: DialogManager` ) |

## Signals

### type_configured( type_data: Dictionary, param_values: Dictionary ) {#signal-type-configured}

### param_changed( param_name: String, new_value ) {#signal-param-changed}

## Constants

- `Dictionary` **SPECIAL_SELECTORS** = `{`
- `Dictionary` **TYPE_PATHS** = `{`

## Variable descriptions

### Label type_label {#var-type-label}

*No description yet.*

### OptionButton category_dropdown {#var-category-dropdown}

*No description yet.*

### OptionButton specific_dropdown {#var-specific-dropdown}

*No description yet.*

### Label description_label {#var-description-label}

*No description yet.*

### RichTextLabel rich_text_label {#var-rich-text-label}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### Dictionary type_dictionary =  {#var-type-dictionary}

*No description yet.*

### String current_type_category = ""  # "trigger", "condition", "action" {#var-current-type-category}

*No description yet.*

### Dictionary selected_type_data =  {#var-selected-type-data}

*No description yet.*

### Dictionary param_values =  {#var-param-values}

*No description yet.*

### Dictionary param_types =  {#var-param-types}

*No description yet.*

### bool edit_mode = false {#var-edit-mode}

*No description yet.*

### bool show_dropdowns = true {#var-show-dropdowns}

*No description yet.*

## Method descriptions

### void setup( type_category: String, types_dict: Dictionary = &#123;&#125; ) {#method-setup}

Setup for selecting a new type - scans dynamically

### void setup_for_edit( type_category: String, instance: Resource ) {#method-setup-for-edit}

Setup for editing an existing instance

### Dictionary get_selected_type_data() {#method-get-selected-type-data}

Get current selection data

### Dictionary get_param_values() {#method-get-param-values}

Get current parameter values

### bool has_selection() {#method-has-selection}

Check if a type is selected

### void set_dialog_manager( manager: DialogManager ) {#method-set-dialog-manager}

Set dialog manager for catalog/dialog selections


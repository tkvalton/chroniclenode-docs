<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EventTypeSelectionDialog

**Inherits:** `ConfirmationDialog`

Simplified popup for selecting event types (Triggers, Conditions, Actions) Uses EventTypeSelector for all the heavy lifting

## Variables

| | | |
|---|---|---|
| `String` | [current_type](#var-current-type) | `""` |
| `bool` | [edit_mode](#var-edit-mode) | `false` |
| `Dictionary` | [edit_data](#var-edit-data) | `{}` |

## Methods

| | |
|---|---|
| `void` | [set_dialog_manager](#method-set-dialog-manager)( `manager: DialogManager` ) |
| `void` | [setup](#method-setup)( `title_type: String, types_dict: Dictionary = {}, additional_data: Dictionary = {}` ) |
| `void` | [setup_for_edit](#method-setup-for-edit)( `title_type: String, unit: Resource, unit_data: Dictionary` ) |

## Signals

### selection_made( type_name: String, type_data: Dictionary, additional_data: Dictionary, param_values: Dictionary ) {#signal-selection-made}

## Variable descriptions

### String current_type = "" {#var-current-type}

*No description yet.*

### bool edit_mode = false {#var-edit-mode}

*No description yet.*

### Dictionary edit_data =  {#var-edit-data}

*No description yet.*

## Method descriptions

### void set_dialog_manager( manager: DialogManager ) {#method-set-dialog-manager}

Set the dialog manager for catalog/dialog selections

### void setup( title_type: String, types_dict: Dictionary = &#123;&#125;, additional_data: Dictionary = &#123;&#125; ) {#method-setup}

Setup for selecting a new type

### void setup_for_edit( title_type: String, unit: Resource, unit_data: Dictionary ) {#method-setup-for-edit}

Setup for editing an existing type


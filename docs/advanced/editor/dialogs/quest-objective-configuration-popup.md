<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestObjectiveConfigurationPopup

**Inherits:** `ConfirmationDialog`

Popup for configuring quest objectives with trigger selection and objective-specific settings

## Description

Uses EventTypeSelector for trigger selection and adds objective-specific UI:

- Progress display options
- Hide description toggle
- Custom description field

## Variables

| | | |
|---|---|---|
| `bool` | [edit_mode](#var-edit-mode) | `false` |
| `QuestObjective` | [editing_objective](#var-editing-objective) | `null` |
| `bool` | [hide_description](#var-hide-description) | `false` |
| `bool` | [optional](#var-optional) | `false` |
| `int` | [progress_display](#var-progress-display) | `1  # Default to TALLY_PROGRESS` |
| `String` | [custom_description](#var-custom-description) | `""` |

## Methods

| | |
|---|---|
| `void` | [set_dialog_manager](#method-set-dialog-manager)( `manager: DialogManager` ) |
| `void` | [setup](#method-setup)( `trigger_types_dict: Dictionary, additional_data: Dictionary = {}` ) |
| `void` | [setup_for_edit](#method-setup-for-edit)( `objective: QuestObjective, trigger_types_dict: Dictionary` ) |

## Signals

### selection_made( trigger_data: Dictionary, objective_settings: Dictionary, param_values: Dictionary ) {#signal-selection-made}

### objective_edited( objective: QuestObjective, trigger_data: Dictionary, objective_settings: Dictionary, param_values: Dictionary ) {#signal-objective-edited}

## Variable descriptions

### bool edit_mode = false {#var-edit-mode}

*No description yet.*

### QuestObjective editing_objective = null {#var-editing-objective}

*No description yet.*

### bool hide_description = false {#var-hide-description}

*No description yet.*

### bool optional = false {#var-optional}

*No description yet.*

### int progress_display = 1  # Default to TALLY_PROGRESS {#var-progress-display}

*No description yet.*

### String custom_description = "" {#var-custom-description}

*No description yet.*

## Method descriptions

### void set_dialog_manager( manager: DialogManager ) {#method-set-dialog-manager}

Set the dialog manager for the event selector

### void setup( trigger_types_dict: Dictionary, additional_data: Dictionary = &#123;&#125; ) {#method-setup}

Setup the popup for creating a new quest objective

### void setup_for_edit( objective: QuestObjective, trigger_types_dict: Dictionary ) {#method-setup-for-edit}

Setup the popup for editing an existing quest objective


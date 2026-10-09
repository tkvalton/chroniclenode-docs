<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ReputationLevelDialog

**Inherits:** `ConfirmationDialog`

Dialog for creating and editing reputation levels within a faction.

## Description

This dialog dynamically builds its UI and can be used to add new reputation levels or edit existing ones. It emits a signal when the user confirms their changes.

## Variables

| | | |
|---|---|---|
| `LineEdit` | [name_edit](#var-name-edit) |  |
| `SpinBox` | [min_rep_spin](#var-min-rep-spin) |  |
| `TextEdit` | [description_edit](#var-description-edit) |  |
| `ColorPickerButton` | [color_picker](#var-color-picker) |  |
| `OptionButton` | [relationship_button](#var-relationship-button) |  |
| `ReputationLevel` | [editing_level](#var-editing-level) | `null` |

## Methods

| | |
|---|---|
| `void` | [open_for_new](#method-open-for-new)() |
| `void` | [open_for_edit](#method-open-for-edit)( `level: ReputationLevel` ) |

## Signals

### level_saved( level: ReputationLevel ) {#signal-level-saved}

Emitted when the user confirms the dialog with valid reputation level data

## Variable descriptions

### LineEdit name_edit {#var-name-edit}

UI controls for editing reputation level properties

### SpinBox min_rep_spin {#var-min-rep-spin}

*No description yet.*

### TextEdit description_edit {#var-description-edit}

*No description yet.*

### ColorPickerButton color_picker {#var-color-picker}

*No description yet.*

### OptionButton relationship_button {#var-relationship-button}

*No description yet.*

### ReputationLevel editing_level = null {#var-editing-level}

The reputation level being edited, or null if creating a new one

## Method descriptions

### void open_for_new() {#method-open-for-new}

Opens the dialog to create a new reputation level.

### void open_for_edit( level: ReputationLevel ) {#method-open-for-edit}

Opens the dialog to edit an existing reputation level.


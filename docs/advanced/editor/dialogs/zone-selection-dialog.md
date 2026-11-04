<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ZoneSelectionDialog

**Inherits:** `ConfirmationDialog`

The dialog that chooses a zone, like the dialogs that choose a track, an animation or a sound effect: a search box and the zones of the world as a tree (a sub-zone under its zone, each with the colour of the zone), a double click or OK chooses. The caller gives it the rows of the zones it offers (ZoneLookup.get_tree_list), the zone that is chosen now and the name of the "no zone" choice (empty = there is none). Used by the Zones section of the Worlds editor (the default zone of the world, the zone a zone is a part of) through ZonePickerButton.

## Methods

| | |
|---|---|
| `ZoneSelectionDialog` | [create_for](#method-create-for)( `parent: Node` ) *static* |
| `void` | [open](#method-open)( `rows: Array[Dictionary], current_id: int, none_text: String = ""` ) |
| `Array[int]` | [get_listed_ids](#method-get-listed-ids)() |
| `bool` | [select_id](#method-select-id)( `zone_id: int` ) |

## Signals

### zone_selected( zone_id: int ) {#signal-zone-selected}

A zone was chosen (0 = the "no zone" choice)

## Method descriptions

### ZoneSelectionDialog create_for( parent: Node ) {#method-create-for}

A dialog for a button: made from its scene and added to `parent`

### void open( rows: Array[Dictionary], current_id: int, none_text: String = "" ) {#method-open}

Shows the dialog with these zones. `current_id` is selected; `none_text` is the first choice (0), for example "None"

### Array[int] get_listed_ids() {#method-get-listed-ids}

The ids of the zones the tree lists now, and 0 for the "no zone" choice (for the tests)

### bool select_id( zone_id: int ) {#method-select-id}

Selects a zone in the tree as if it was clicked (for the tests)


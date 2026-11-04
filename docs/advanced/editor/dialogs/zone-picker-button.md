<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ZonePickerButton

**Inherits:** [Button](https://docs.godotengine.org/en/stable/classes/class_button.html)

A button that shows the zone chosen and opens the zone dialog (ZoneSelectionDialog) to choose another: the default zone of a world, the zone a zone is a part of. It replaces a drop-down of zones. It gives the zones to offer with `setup`, and sends `zone_chosen` when the user chooses one (the button does not change anything else).

## Variables

| | | |
|---|---|---|
| `int` | [zone_id](#var-zone-id) | `0` |
| `String` | [none_text](#var-none-text) | `"None"` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `rows: Array[Dictionary], chosen_id: int, p_none_text: String = "None"` ) |
| `void` | [set_zone](#method-set-zone)( `chosen_id: int` ) |
| `Array[int]` | [get_offered_ids](#method-get-offered-ids)() |

## Signals

### zone_chosen( zone_id: int ) {#signal-zone-chosen}

The user chose a zone (0 = the "no zone" choice)

## Variable descriptions

### int zone_id = 0 {#var-zone-id}

The id of the zone shown on the button (0 = none)

### String none_text = "None" {#var-none-text}

The text of the "no zone" choice and of the button when there is none (for example "None")

## Method descriptions

### void setup( rows: Array[Dictionary], chosen_id: int, p_none_text: String = "None" ) {#method-setup}

The zones to offer (ZoneLookup.get_tree_list rows, a zone that must not be chosen left out), the zone chosen now and the text of the "no zone" choice

### void set_zone( chosen_id: int ) {#method-set-zone}

Shows a zone on the button (nothing is sent)

### Array[int] get_offered_ids() {#method-get-offered-ids}

The ids the dialog offers (for the tests)


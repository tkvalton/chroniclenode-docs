<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GrowthProfilePicker

**Inherits:** `OptionButton`

A dropdown of the growth profiles of the project. `none_label` is the first entry (profile id 0): "Project default" on an NPC, "None" in the Gameplay Config. `exclude_id` hides one profile (the one being edited cannot be its own parent).

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `current_id: int, none_label: String, exclude_id: int = 0` ) |

## Signals

### profile_picked( profile_id: int ) {#signal-profile-picked}

## Method descriptions

### void setup( current_id: int, none_label: String, exclude_id: int = 0 ) {#method-setup}

Fills the list and selects `current_id`


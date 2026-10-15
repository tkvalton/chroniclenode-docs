<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestLogButtonUI

**Inherits:** `MarginContainer`

One quest in the list of the quest log: its name, with a highlight when it is the quest shown. `quest_selected` is emitted when it is clicked.

## Variables

| | | |
|---|---|---|
| `Quest` | [quest](#var-quest) |  |
| `bool` | [is_active](#var-is-active) | `false` |

## Methods

| | |
|---|---|
| `void` | [set_quest](#method-set-quest)( `new_quest: Quest` ) |
| `void` | [set_active](#method-set-active)( `active: bool` ) |
| `void` | [deactivate](#method-deactivate)() |

## Signals

### quest_selected( quest_button: QuestLogButtonUI ) {#signal-quest-selected}

Emitted when the button is clicked.

## Variable descriptions

### Quest quest {#var-quest}

The quest of the button.

### bool is_active = false {#var-is-active}

True when this is the quest shown.

## Method descriptions

### void set_quest( new_quest: Quest ) {#method-set-quest}

Sets the quest of the button.

### void set_active( active: bool ) {#method-set-active}

Marks the quest as the one shown (or not).

### void deactivate() {#method-deactivate}

Call this from outside to deactivate other buttons


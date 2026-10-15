<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChoiceSelectionPopup

**Inherits:** `MarginContainer`

Popup UI for selecting between choice options in a ChoiceSkillNode Displays each choice as a button with icon and shows tooltip on hover

## Properties

| | | |
|---|---|---|
| `PackedScene` | [choice_button_scene](#prop-choice-button-scene) |  |

## Variables

| | | |
|---|---|---|
| `ChoiceSkillNode` | [choice_node](#var-choice-node) |  |
| `Array[ChoiceButtonUI]` | [choice_buttons](#var-choice-buttons) | `[]` |

## Methods

| | |
|---|---|
| `void` | [show_choices](#method-show-choices)( `node: ChoiceSkillNode` ) |

## Signals

### choice_selected( choice_index: int ) {#signal-choice-selected}

========== SIGNALS ==========

### skill_node_tooltip_requested( node: SkillNode ) {#signal-skill-node-tooltip-requested}

Asks the interface to show the tooltip of a skill node.

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Asks the interface to hide the tooltip (force hides it at once).

### popup_closed() {#signal-popup-closed}

Emitted when the popup is closed.

## Property descriptions

### PackedScene choice_button_scene {#prop-choice-button-scene}

The scene of one choice.

## Variable descriptions

### ChoiceSkillNode choice_node {#var-choice-node}

========== PROPERTIES ==========

### Array[ChoiceButtonUI] choice_buttons = [] {#var-choice-buttons}

The buttons of the choices.

## Method descriptions

### void show_choices( node: ChoiceSkillNode ) {#method-show-choices}

Show the popup for a given choice node


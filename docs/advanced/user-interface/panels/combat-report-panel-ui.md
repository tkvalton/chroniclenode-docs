<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatReportPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The combat report window: the fights the game kept (Gameplay Config &gt; Combat log keep), the totals of the selected fight and its events, which can be filtered by kind and exported to a file. It opens with the command /report or any way a panel opens (its panel name is combat_report). The record of a fight is what the combat events of the combat session hold.

## Methods

| | |
|---|---|
| `void` | [refresh](#method-refresh)() |
| `Dictionary` | [get_selected_fight](#method-get-selected-fight)() |

## Method descriptions

### void refresh() {#method-refresh}

Fills the list with the fights the game kept

### Dictionary get_selected_fight() {#method-get-selected-fight}

The fight selected, or an empty dictionary


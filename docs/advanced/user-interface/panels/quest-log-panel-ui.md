<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestLogPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The quest log window: the lists of active and completed quests (a button for each, made from `quest_log_button`), and the name, the description and the objectives (made from `quest_log_objective_label`) of the selected quest.

## Properties

| | | |
|---|---|---|
| `PackedScene` | [quest_log_button](#prop-quest-log-button) |  |
| `PackedScene` | [quest_log_objective_label](#prop-quest-log-objective-label) |  |

## Variables

| | | |
|---|---|---|
| `Dictionary` | [button_instances](#var-button-instances) | `{}` |
| `QuestLogButtonUI` | [current_selected_quest](#var-current-selected-quest) | `null` |
| `Dictionary` | [objective_labels](#var-objective-labels) | `{}` |
| `Array[QuestObjective]` | [connected_objectives](#var-connected-objectives) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `system_hub: GameHost.SystemHub` ) |
| `QuestLogButtonUI` | [add_quest_button](#method-add-quest-button)( `quest: Quest, parent_container: VBoxContainer` ) |
| `void` | [update_quest_details](#method-update-quest-details)( `quest: Quest` ) |
| `void` | [clear_quest_details](#method-clear-quest-details)() |
| `void` | [close_panel](#method-close-panel)() |

## Property descriptions

### PackedScene quest_log_button {#prop-quest-log-button}

The scene of one quest in the list.

### PackedScene quest_log_objective_label {#prop-quest-log-objective-label}

The scene of one objective.

## Variable descriptions

### Dictionary button_instances =  {#var-button-instances}

Dictionary to store quest_id -&gt; button instance

### QuestLogButtonUI current_selected_quest = null {#var-current-selected-quest}

The button of the quest shown.

### Dictionary objective_labels =  {#var-objective-labels}

Dictionary to store objective -&gt; objective_label instances

### Array[QuestObjective] connected_objectives = [] {#var-connected-objectives}

Track connected objectives for cleanup

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### QuestLogButtonUI add_quest_button( quest: Quest, parent_container: VBoxContainer ) {#method-add-quest-button}

Adds the button of a quest to a list (or gives the one it has).

### void update_quest_details( quest: Quest ) {#method-update-quest-details}

Shows the name, the text and the objectives of a quest.

### void clear_quest_details() {#method-clear-quest-details}

Empties the details.

### void close_panel() {#method-close-panel}

Closes the window.


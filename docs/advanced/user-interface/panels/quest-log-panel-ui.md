<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestLogPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

## Properties

| | | |
|---|---|---|
| `PackedScene` | [quest_log_button](#prop-quest-log-button) |  |
| `PackedScene` | [quest_log_objective_label](#prop-quest-log-objective-label) |  |

## Variables

| | | |
|---|---|---|
| `Dictionary` | [button_instances](#var-button-instances) | `{}  # Dictionary to store quest_id -> button instance` |
| `QuestLogButtonUI` | [current_selected_quest](#var-current-selected-quest) | `null` |
| `Dictionary` | [objective_labels](#var-objective-labels) | `{}  # Dictionary to store objective -> objective_label in...` |
| `Array[QuestObjective]` | [connected_objectives](#var-connected-objectives) | `[]  # Track connected objectives for cleanup` |

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

*No description yet.*

### PackedScene quest_log_objective_label {#prop-quest-log-objective-label}

*No description yet.*

## Variable descriptions

### Dictionary button_instances =   # Dictionary to store quest_id -&gt; button instance {#var-button-instances}

*No description yet.*

### QuestLogButtonUI current_selected_quest = null {#var-current-selected-quest}

*No description yet.*

### Dictionary objective_labels =   # Dictionary to store objective -&gt; objective_label instanc {#var-objective-labels}

*No description yet.*

### Array[QuestObjective] connected_objectives = []  # Track connected objectives for cleanup {#var-connected-objectives}

*No description yet.*

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*Overrides this function of [PanelUI](/advanced/user-interface/panels/panel-ui).*

### QuestLogButtonUI add_quest_button( quest: Quest, parent_container: VBoxContainer ) {#method-add-quest-button}

*No description yet.*

### void update_quest_details( quest: Quest ) {#method-update-quest-details}

*No description yet.*

### void clear_quest_details() {#method-clear-quest-details}

*No description yet.*

### void close_panel() {#method-close-panel}

Signal handlers for UI elements *(from [PanelUI](/advanced/user-interface/panels/panel-ui))*


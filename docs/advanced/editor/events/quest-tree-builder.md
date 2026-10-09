<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestTreeBuilder

**Inherits:** [TreeBuilder](/advanced/editor/events/tree-builder) < `MarginContainer`

Quest tree builder with objectives and on start/complete actions

## Variables

| | | |
|---|---|---|
| `TreeItem` | [objectives_item](#var-objectives-item) |  |
| `TreeItem` | [on_start_actions_item](#var-on-start-actions-item) |  |
| `TreeItem` | [on_complete_actions_item](#var-on-complete-actions-item) |  |
| `TreeItem` | [on_abandon_actions_item](#var-on-abandon-actions-item) |  |

## Methods

| | |
|---|---|
| `bool` | [create_and_add_objective](#method-create-and-add-objective)( `trigger_data: Dictionary, objective_settings: Dictionary, param_values: Dictionary` ) |
| `bool` | [update_objective](#method-update-objective)( `objective: QuestObjective, trigger_data: Dictionary, objective_settings: Dictionary, param_values: Dictionary` ) |

## Signals

### show_add_quest_objective() {#signal-show-add-quest-objective}

### show_edit_quest_objective( objective: QuestObjective ) {#signal-show-edit-quest-objective}

## Variable descriptions

### TreeItem objectives_item {#var-objectives-item}

*No description yet.*

### TreeItem on_start_actions_item {#var-on-start-actions-item}

*No description yet.*

### TreeItem on_complete_actions_item {#var-on-complete-actions-item}

*No description yet.*

### TreeItem on_abandon_actions_item {#var-on-abandon-actions-item}

*No description yet.*

## Method descriptions

### bool create_and_add_objective( trigger_data: Dictionary, objective_settings: Dictionary, param_values: Dictionary ) {#method-create-and-add-objective}

*No description yet.*

### bool update_objective( objective: QuestObjective, trigger_data: Dictionary, objective_settings: Dictionary, param_values: Dictionary ) {#method-update-objective}

An objective is changed in the objective dialog: its settings, and its trigger (the same kind of trigger changes its parameters in place, another kind is replaced)


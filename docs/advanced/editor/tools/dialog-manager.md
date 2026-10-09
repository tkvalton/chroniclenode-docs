<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DialogManager

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Centralized dialog management with guaranteed clean connections

## Description

Use setup_dialog() to prepare any dialog - it will:

1. Disconnect EXTERNAL signals from the dialog (not internal UI signals)

2. Connect your callback to the dialog's selection_made signal

3. Return the clean dialog ready to use

## Variables

| | | |
|---|---|---|
| `UnifiedResourceDialog` | [unified_resource_dialog](#var-unified-resource-dialog) |  |
| `InteractionSelectionDialog` | [interaction_selection_dialog](#var-interaction-selection-dialog) |  |

## Methods

| | |
|---|---|
| `Node` | [setup_dialog](#method-setup-dialog)( `dialog: Node, callback: Callable` ) |
| `UnifiedResourceDialog` | [show_unified_resource_dialog_new](#method-show-unified-resource-dialog-new)( `category: String, callback: Callable` ) |
| `UnifiedResourceDialog` | [show_unified_resource_dialog_edit](#method-show-unified-resource-dialog-edit)( `resource: Resource, callback: Callable, is_single_type: bool = false` ) |
| `UnifiedResourceDialog` | [show_unified_resource_dialog_single_type](#method-show-unified-resource-dialog-single-type)( `resource_script: Script, display_name: String, callback: Callable` ) |
| `UnifiedResourceDialog` | [show_encounter_action_dialog](#method-show-encounter-action-dialog)( `callback: Callable` ) |
| `UnifiedResourceDialog` | [show_combat_action_dialog](#method-show-combat-action-dialog)( `callback: Callable` ) |
| `UnifiedResourceDialog` | [show_behavior_task_dialog](#method-show-behavior-task-dialog)( `callback: Callable` ) |
| `InteractionSelectionDialog` | [show_interaction_dialog_for_interactable](#method-show-interaction-dialog-for-interactable)( `callback: Callable, parent_res: Resource = null` ) |
| `InteractionSelectionDialog` | [show_interaction_dialog_for_entity](#method-show-interaction-dialog-for-entity)( `callback: Callable, parent_res: Resource = null` ) |
| `InteractionSelectionDialog` | [show_interaction_dialog_edit](#method-show-interaction-dialog-edit)( `interaction: Interaction, callback: Callable, parent_res: Resource = null` ) |

## Variable descriptions

### UnifiedResourceDialog unified_resource_dialog {#var-unified-resource-dialog}

*No description yet.*

### InteractionSelectionDialog interaction_selection_dialog {#var-interaction-selection-dialog}

*No description yet.*

## Method descriptions

### Node setup_dialog( dialog: Node, callback: Callable ) {#method-setup-dialog}

*No description yet.*

### UnifiedResourceDialog show_unified_resource_dialog_new( category: String, callback: Callable ) {#method-show-unified-resource-dialog-new}

Show unified resource dialog for creating a new resource category: "reward" or "requirement"

### UnifiedResourceDialog show_unified_resource_dialog_edit( resource: Resource, callback: Callable, is_single_type: bool = false ) {#method-show-unified-resource-dialog-edit}

Show unified resource dialog for editing an existing resource

### UnifiedResourceDialog show_unified_resource_dialog_single_type( resource_script: Script, display_name: String, callback: Callable ) {#method-show-unified-resource-dialog-single-type}

Show unified resource dialog for creating a new single-type resource (e.g., CombatReaction)

### UnifiedResourceDialog show_encounter_action_dialog( callback: Callable ) {#method-show-encounter-action-dialog}

Show unified resource dialog for encounter actions

### UnifiedResourceDialog show_combat_action_dialog( callback: Callable ) {#method-show-combat-action-dialog}

Show unified resource dialog for combat actions

### UnifiedResourceDialog show_behavior_task_dialog( callback: Callable ) {#method-show-behavior-task-dialog}

Show unified resource dialog for behavior tasks

### InteractionSelectionDialog show_interaction_dialog_for_interactable( callback: Callable, parent_res: Resource = null ) {#method-show-interaction-dialog-for-interactable}

Show interaction selection dialog for interactable objects

### InteractionSelectionDialog show_interaction_dialog_for_entity( callback: Callable, parent_res: Resource = null ) {#method-show-interaction-dialog-for-entity}

Show interaction selection dialog for entities (NPC/Encounter)

### InteractionSelectionDialog show_interaction_dialog_edit( interaction: Interaction, callback: Callable, parent_res: Resource = null ) {#method-show-interaction-dialog-edit}

Show interaction selection dialog for editing an existing interaction


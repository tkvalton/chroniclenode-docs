<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IfAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A conditional action that only executes its child actions if all conditions are met. This is different from event conditions because it's evaluated at action execution time, not at event trigger time, allowing for dynamic decision making during an event.

## Properties

| | | |
|---|---|---|
| `Array[Condition]` | [conditions](#prop-conditions) | `[]` |
| `Array[EventAction]` | [if_true_actions](#prop-if-true-actions) | `[]` |
| `Array[EventAction]` | [if_false_actions](#prop-if-false-actions) | `[]` |
| `bool` | [wait_for_actions](#prop-wait-for-actions) | `true` |

## Variables

| | | |
|---|---|---|
| `Event` | [parent_event](#var-parent-event) | `null` |
| `Array[EventAction]` | [current_branch](#var-current-branch) | `[]` |
| `Array[bool]` | [completed_actions](#var-completed-actions) | `[]` |
| `bool` | [condition_evaluated](#var-condition-evaluated) | `false` |
| `bool` | [condition_result](#var-condition-result) | `false` |

## Methods

| | |
|---|---|
| `void` | [set_system_hub](#method-set-system-hub)( `p_system_hub: GameHost.SystemHub` ) |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [set_parent_event](#method-set-parent-event)( `event: Event` ) |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [force_complete](#method-force-complete)() |
| `void` | [reset](#method-reset)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### Array[Condition] conditions = [] {#prop-conditions}

Array of conditions that must be met for the actions to execute

### Array[EventAction] if_true_actions = [] {#prop-if-true-actions}

Actions to execute if conditions are met

### Array[EventAction] if_false_actions = [] {#prop-if-false-actions}

Optional actions to execute if conditions are NOT met

### bool wait_for_actions = true {#prop-wait-for-actions}

Whether to complete this action when all child actions are complete

## Variable descriptions

### Event parent_event = null {#var-parent-event}

Reference to parent event (set by Event when action starts)

### Array[EventAction] current_branch = [] {#var-current-branch}

Tracks the active branch for completion tracking

### Array[bool] completed_actions = [] {#var-completed-actions}

Tracks which actions have completed

### bool condition_evaluated = false {#var-condition-evaluated}

Whether we've decided the condition result

### bool condition_result = false {#var-condition-result}

Result of the condition check

## Method descriptions

### void set_system_hub( p_system_hub: GameHost.SystemHub ) {#method-set-system-hub}

*Overrides this function of [EventAction](/advanced/events-and-quests/bases/event-action).*

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### void set_parent_event( event: Event ) {#method-set-parent-event}

Set the parent event (called by Event before starting action)

### void cleanup() {#method-cleanup}

Override cleanup to disconnect from child actions

### void force_complete() {#method-force-complete}

Override force_complete to force-complete all child actions

### void reset() {#method-reset}

Override reset to reset all child actions

### Dictionary save() {#method-save}

Override save to include child action states

### void load_data( data: Dictionary ) {#method-load-data}

Override load_data to restore child action states


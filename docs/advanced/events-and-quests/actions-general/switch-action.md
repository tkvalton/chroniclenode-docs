<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SwitchAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A multi-branch conditional action that executes different sets of actions based on which condition is met first. Works like a switch/case statement.

## Description

Each case consists of a condition and a set of actions. The first condition that evaluates to true will have its associated actions executed.

## Properties

| | | |
|---|---|---|
| `Array[Case]` | [cases](#prop-cases) | `[]` |
| `Array[EventAction]` | [default_actions](#prop-default-actions) | `[]` |
| `bool` | [wait_for_actions](#prop-wait-for-actions) | `true` |

## Variables

| | | |
|---|---|---|
| `Event` | [parent_event](#var-parent-event) | `null` |
| `int` | [active_case_index](#var-active-case-index) | `-2` |
| `Array[EventAction]` | [active_actions](#var-active-actions) | `[]` |
| `Array[bool]` | [completed_actions](#var-completed-actions) | `[]` |

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

### Array[Case] cases = [] {#prop-cases}

Array of cases with conditions and actions

### Array[EventAction] default_actions = [] {#prop-default-actions}

Actions to execute if no conditions are met (default case)

### bool wait_for_actions = true {#prop-wait-for-actions}

Whether to complete this action when all child actions complete

## Variable descriptions

### Event parent_event = null {#var-parent-event}

Reference to parent event (set by Event when action starts)

### int active_case_index = -2 {#var-active-case-index}

Currently active case index (-1 for default case)

### Array[EventAction] active_actions = [] {#var-active-actions}

Actions of the active case

### Array[bool] completed_actions = [] {#var-completed-actions}

Tracks which actions have completed

## Method descriptions

### void set_system_hub( p_system_hub: GameHost.SystemHub ) {#method-set-system-hub}

*Overrides this function of [EventAction](/advanced/events-and-quests/bases/event-action).*

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### void set_parent_event( event: Event ) {#method-set-parent-event}

Set the parent event (called by Event before starting action)

### void cleanup() {#method-cleanup}

Override cleanup to disconnect from child actions

### void force_complete() {#method-force-complete}

Override force_complete to force-complete all child actions

### void reset() {#method-reset}

Override reset to reset all child actions

### Dictionary save() {#method-save}

Override save to include all case and action states

### void load_data( data: Dictionary ) {#method-load-data}

Override load_data to restore all case and action states


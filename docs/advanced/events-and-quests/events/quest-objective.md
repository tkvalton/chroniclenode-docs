<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestObjective

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Base class for all quest objectives that can be extended for different objective types

## Properties

| | | |
|---|---|---|
| `int` | [id](#prop-id) | `0` |
| `bool` | [optional](#prop-optional) | `false` |
| `EventTrigger` | [event_trigger](#prop-event-trigger) |  |
| `bool` | [hide_description](#prop-hide-description) | `false` |
| `ProgressDisplay` | [progress_display](#prop-progress-display) | `ProgressDisplay.TALLY_PROGRESS` |
| `String` | [custom_description](#prop-custom-description) | `""` |

## Variables

| | | |
|---|---|---|
| `String` | [description](#var-description) | `""` |
| `String` | [progress_string](#var-progress-string) | `""` |
| `ObjectiveState` | [state](#var-state) | `ObjectiveState.INACTIVE` |
| `int` | [current_progress](#var-current-progress) | `0` |
| `int` | [target_progress](#var-target-progress) | `1` |

## Methods

| | |
|---|---|
| `void` | [activate](#method-activate)() |
| `void` | [reset](#method-reset)() |
| `void` | [complete](#method-complete)() |
| `void` | [fail](#method-fail)() |
| `bool` | [is_completed](#method-is-completed)() |
| `bool` | [is_failed](#method-is-failed)() |
| `bool` | [is_active](#method-is-active)() |
| `void` | [connect_signals](#method-connect-signals)() |
| `void` | [disconnect_signals](#method-disconnect-signals)() |
| `void` | [update_description](#method-update-description)() |
| `void` | [set_progress](#method-set-progress)( `amount: int` ) |
| `int` | [get_progress](#method-get-progress)() |
| `int` | [get_total](#method-get-total)() |
| `float` | [get_progress_percentage](#method-get-progress-percentage)() |
| `bool` | [update_progress](#method-update-progress)( `event_data: Variant = null` ) |
| `void` | [update_signals](#method-update-signals)() |
| `Dictionary` | [save_objective_data](#method-save-objective-data)() |
| `void` | [load_objective_data](#method-load-objective-data)( `data: Dictionary` ) |

## Signals

### objective_state_changed( objective: QuestObjective ) {#signal-objective-state-changed}

Emitted when objective state changes

## Enumerations

### enum ObjectiveState {#enum-objectivestate}

Possible states for objectives

- **INACTIVE** = `0`
- **ACTIVE** = `1`
- **COMPLETED** = `2`
- **FAILED** = `3`

### enum ProgressDisplay {#enum-progressdisplay}

How progress should be displayed in the UI

- **NO_PROGRESS** = `0`
- **TALLY_PROGRESS** = `1`
- **PERCENT_PROGRESS** = `2`

## Property descriptions

### int id = 0 {#prop-id}

The number of the objective in its quest (1 is the first; 0 = its position): what a conversation or an action uses to complete or fail one

### bool optional = false {#prop-optional}

An objective the player may leave undone: the quest completes without it, and failing it does not fail the quest

### EventTrigger event_trigger {#prop-event-trigger}

The event trigger that determines when this objective is completed

### bool hide_description = false {#prop-hide-description}

If true, description won't be shown in quest UI

### ProgressDisplay progress_display = ProgressDisplay.TALLY_PROGRESS {#prop-progress-display}

How progress should be displayed (none, X/Y, or percentage)

### String custom_description = "" {#prop-custom-description}

Override for the auto-generated description

## Variable descriptions

### String description = "" {#var-description}

Current description text of the objective

### String progress_string = "" {#var-progress-string}

String representation of current progress

### ObjectiveState state = ObjectiveState.INACTIVE {#var-state}

Current state of the objective

### int current_progress = 0 {#var-current-progress}

Tracking for progressive objectives

### int target_progress = 1 {#var-target-progress}

*No description yet.*

## Method descriptions

### void activate() {#method-activate}

Base activate function that all derived classes should call via super

### void reset() {#method-reset}

Back to the start: not listening, no progress (a quest that is activated or taken again starts its objectives like this)

### void complete() {#method-complete}

Base complete function that all derived classes should call via super

### void fail() {#method-fail}

Base fail function that all derived classes should call via super

### bool is_completed() {#method-is-completed}

State checking helper functions

### bool is_failed() {#method-is-failed}

*No description yet.*

### bool is_active() {#method-is-active}

*No description yet.*

### void connect_signals() {#method-connect-signals}

Signal management - connects to the event trigger

### void disconnect_signals() {#method-disconnect-signals}

*No description yet.*

### void update_description() {#method-update-description}

Generate dynamic description based on trigger type and properties

### void set_progress( amount: int ) {#method-set-progress}

Progress tracking interface

### int get_progress() {#method-get-progress}

*No description yet.*

### int get_total() {#method-get-total}

*No description yet.*

### float get_progress_percentage() {#method-get-progress-percentage}

*No description yet.*

### bool update_progress( event_data: Variant = null ) {#method-update-progress}

Called when progress should be updated in response to game events

### void update_signals() {#method-update-signals}

Update signals when level changes - for EventManager compatibility

### Dictionary save_objective_data() {#method-save-objective-data}

Save objective data to Dictionary for serialization

### void load_objective_data( data: Dictionary ) {#method-load-objective-data}

Load objective data from Dictionary


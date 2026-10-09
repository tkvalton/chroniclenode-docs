<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Event

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Self-managing event that handles its own trigger evaluation and condition checking

## Properties

| | | |
|---|---|---|
| `bool` | [enabled](#prop-enabled) | `true` |
| `bool` | [run_once](#prop-run-once) | `false` |
| `Array[EventTrigger]` | [triggers](#prop-triggers) | `[]` |
| `Array[Condition]` | [conditions](#prop-conditions) | `[]` |
| `Array[EventAction]` | [actions](#prop-actions) | `[]` |
| `LocalVariables` | [local_variables](#prop-local-variables) | `LocalVariables.new()` |

## Variables

| | | |
|---|---|---|
| `EventState` | [state](#var-state) | `EventState.NOT_STARTED` |
| `int` | [current_action_index](#var-current-action-index) | `0` |
| `EventAction` | [current_action](#var-current-action) | `null` |

## Methods

| | |
|---|---|
| `void` | [set_system_hub](#method-set-system-hub)( `system_hub: GameHost.SystemHub` ) |
| `void` | [setup_triggers](#method-setup-triggers)() |
| `void` | [cleanup_triggers](#method-cleanup-triggers)() |
| `bool` | [can_trigger](#method-can-trigger)() |
| `void` | [start](#method-start)() |
| `void` | [force_complete](#method-force-complete)() |
| `void` | [fail](#method-fail)() |
| `void` | [reset](#method-reset)() |
| `bool` | [force_trigger](#method-force-trigger)() |
| `bool` | [try_trigger](#method-try-trigger)( `event_data: Dictionary = {}` ) |
| `String` | [get_action_progress](#method-get-action-progress)() |
| `EventAction` | [get_current_action](#method-get-current-action)() |
| `Array[Condition]` | [get_failed_conditions](#method-get-failed-conditions)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |
| `void` | [set_local_variable](#method-set-local-variable)( `key: String, value: Variant` ) |
| `Variant` | [get_local_variable](#method-get-local-variable)( `key: String, default_value: Variant = null` ) |
| `bool` | [has_local_variable](#method-has-local-variable)( `key: String` ) |
| `bool` | [remove_local_variable](#method-remove-local-variable)( `key: String` ) |
| `void` | [clear_all_local_variables](#method-clear-all-local-variables)() |
| `Array` | [get_all_local_variable_keys](#method-get-all-local-variable-keys)() |
| `int` | [get_local_variable_count](#method-get-local-variable-count)() |
| `void` | [increment_local_variable](#method-increment-local-variable)( `key: String, amount: float = 1.0` ) |
| `void` | [decrement_local_variable](#method-decrement-local-variable)( `key: String, amount: float = 1.0` ) |
| `void` | [toggle_local_variable](#method-toggle-local-variable)( `key: String` ) |
| `void` | [append_to_local_variable](#method-append-to-local-variable)( `key: String, text: String` ) |
| `void` | [add_to_local_array_variable](#method-add-to-local-array-variable)( `key: String, item: Variant` ) |
| `bool` | [remove_from_local_array_variable](#method-remove-from-local-array-variable)( `key: String, item: Variant` ) |
| `bool` | [local_array_variable_contains](#method-local-array-variable-contains)( `key: String, item: Variant` ) |
| `Array[Dictionary]` | [get_local_variables_for_editor](#method-get-local-variables-for-editor)() |
| `Array[Dictionary]` | [validate_local_variables](#method-validate-local-variables)() |
| `String` | [get_local_variables_debug_string](#method-get-local-variables-debug-string)() |
| `Dictionary` | [create_local_variables_snapshot](#method-create-local-variables-snapshot)() |
| `bool` | [restore_local_variables_from_snapshot](#method-restore-local-variables-from-snapshot)( `snapshot: Dictionary` ) |
| `void` | [set_id](#method-set-id)( `new_id: int` ) |
| `LocalVariables` | [get_local_variables](#method-get-local-variables)() |

## Signals

### state_changed( event: Event, new_state: int ) {#signal-state-changed}

### trigger_activated( event: Event, trigger: EventTrigger, event_data: Dictionary ) {#signal-trigger-activated}

### conditions_failed( event: Event ) {#signal-conditions-failed}

### local_variable_changed( event: Event, key: String, old_value: Variant, new_value: Variant ) {#signal-local-variable-changed}

### local_variable_removed( event: Event, key: String, old_value: Variant ) {#signal-local-variable-removed}

## Enumerations

### enum EventState {#enum-eventstate}

- **NOT_STARTED** = `0`
- **IN_PROGRESS** = `1`
- **COMPLETED** = `2`
- **FAILED** = `3`

## Property descriptions

### bool enabled = true {#prop-enabled}

*No description yet.*

### bool run_once = false {#prop-run-once}

Runs only once: after the event has completed, its triggers no longer start it (a new game starts it fresh again). Off: it runs every time a trigger fires

### Array[EventTrigger] triggers = [] {#prop-triggers}

*No description yet.*

### Array[Condition] conditions = [] {#prop-conditions}

*No description yet.*

### Array[EventAction] actions = [] {#prop-actions}

*No description yet.*

### LocalVariables local_variables = LocalVariables.new() {#prop-local-variables}

*No description yet.*

## Variable descriptions

### EventState state = EventState.NOT_STARTED {#var-state}

*No description yet.*

### int current_action_index = 0 {#var-current-action-index}

*No description yet.*

### EventAction current_action = null {#var-current-action}

*No description yet.*

## Method descriptions

### void set_system_hub( system_hub: GameHost.SystemHub ) {#method-set-system-hub}

*No description yet.*

### void setup_triggers() {#method-setup-triggers}

Setup this event's triggers (called by EventManager during initialization)

### void cleanup_triggers() {#method-cleanup-triggers}

Cleanup this event's triggers

### bool can_trigger() {#method-can-trigger}

Check if the event can be triggered

### void start() {#method-start}

Start the event (conditions already checked)

### void force_complete() {#method-force-complete}

Force-complete all actions in the event

### void fail() {#method-fail}

Mark the event as failed

### void reset() {#method-reset}

Reset the event to its initial state

### bool force_trigger() {#method-force-trigger}

Manually trigger this event (bypasses conditions)

### bool try_trigger( event_data: Dictionary = {} ) {#method-try-trigger}

Manually trigger this event with condition checking

### String get_action_progress() {#method-get-action-progress}

Get current action progress info for debugging

### EventAction get_current_action() {#method-get-current-action}

Get currently executing action

### Array[Condition] get_failed_conditions() {#method-get-failed-conditions}

Get list of failed conditions for debugging

### Dictionary save() {#method-save}

*No description yet.*

### void load_data( data: Dictionary ) {#method-load-data}

*No description yet.*

### void set_local_variable( key: String, value: Variant ) {#method-set-local-variable}

*No description yet.*

### Variant get_local_variable( key: String, default_value: Variant = null ) {#method-get-local-variable}

*No description yet.*

### bool has_local_variable( key: String ) {#method-has-local-variable}

*No description yet.*

### bool remove_local_variable( key: String ) {#method-remove-local-variable}

*No description yet.*

### void clear_all_local_variables() {#method-clear-all-local-variables}

*No description yet.*

### Array get_all_local_variable_keys() {#method-get-all-local-variable-keys}

*No description yet.*

### int get_local_variable_count() {#method-get-local-variable-count}

*No description yet.*

### void increment_local_variable( key: String, amount: float = 1.0 ) {#method-increment-local-variable}

Increment a numeric local variable

### void decrement_local_variable( key: String, amount: float = 1.0 ) {#method-decrement-local-variable}

Decrement a numeric local variable

### void toggle_local_variable( key: String ) {#method-toggle-local-variable}

Toggle a boolean local variable

### void append_to_local_variable( key: String, text: String ) {#method-append-to-local-variable}

Append to a string local variable

### void add_to_local_array_variable( key: String, item: Variant ) {#method-add-to-local-array-variable}

Add item to array local variable

### bool remove_from_local_array_variable( key: String, item: Variant ) {#method-remove-from-local-array-variable}

Remove item from array local variable

### bool local_array_variable_contains( key: String, item: Variant ) {#method-local-array-variable-contains}

Check if array local variable contains item

### Array[Dictionary] get_local_variables_for_editor() {#method-get-local-variables-for-editor}

Get local variables formatted for editor display

### Array[Dictionary] validate_local_variables() {#method-validate-local-variables}

Validate all local variables

### String get_local_variables_debug_string() {#method-get-local-variables-debug-string}

Get local variables debug string

### Dictionary create_local_variables_snapshot() {#method-create-local-variables-snapshot}

Create snapshot of local variables

### bool restore_local_variables_from_snapshot( snapshot: Dictionary ) {#method-restore-local-variables-from-snapshot}

Restore local variables from snapshot

### void set_id( new_id: int ) {#method-set-id}

Override to ensure local variables always has correct parent event ID

### LocalVariables get_local_variables() {#method-get-local-variables}

Get local variables instance (for direct access if needed)


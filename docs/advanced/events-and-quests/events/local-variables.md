<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalVariables

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Resource for storing local variables dictionary for Events Provides methods for managing event-specific variables

## Properties

| | | |
|---|---|---|
| `Dictionary` | [variables](#prop-variables) | `{}` |
| `Dictionary` | [metadata](#prop-metadata) | `{}` |

## Methods

| | |
|---|---|
| `Variant` | [get_variable](#method-get-variable)( `key: String, default_value: Variant = null` ) |
| `void` | [set_variable](#method-set-variable)( `key: String, value: Variant` ) |
| `bool` | [has_variable](#method-has-variable)( `key: String` ) |
| `bool` | [remove_variable](#method-remove-variable)( `key: String` ) |
| `Array` | [get_variable_keys](#method-get-variable-keys)() |
| `int` | [get_variable_count](#method-get-variable-count)() |
| `void` | [clear_variables](#method-clear-variables)() |
| `void` | [update_metadata](#method-update-metadata)() |
| `void` | [set_variables_from_dict](#method-set-variables-from-dict)( `new_variables: Dictionary` ) |
| `void` | [set_parent_event_id](#method-set-parent-event-id)( `event_id: int` ) |
| `int` | [get_parent_event_id](#method-get-parent-event-id)() |
| `bool` | [is_valid_key](#method-is-valid-key)( `key: String` ) |
| `String` | [get_key_suggestions](#method-get-key-suggestions)( `key: String` ) |
| `Array[Dictionary]` | [validate_variables](#method-validate-variables)() |
| `void` | [increment_variable](#method-increment-variable)( `key: String, amount: float = 1.0` ) |
| `void` | [decrement_variable](#method-decrement-variable)( `key: String, amount: float = 1.0` ) |
| `void` | [multiply_variable](#method-multiply-variable)( `key: String, multiplier: float` ) |
| `void` | [toggle_variable](#method-toggle-variable)( `key: String` ) |
| `void` | [append_to_variable](#method-append-to-variable)( `key: String, text: String` ) |
| `void` | [add_to_array_variable](#method-add-to-array-variable)( `key: String, item: Variant` ) |
| `bool` | [remove_from_array_variable](#method-remove-from-array-variable)( `key: String, item: Variant` ) |
| `bool` | [array_variable_contains](#method-array-variable-contains)( `key: String, item: Variant` ) |
| `void` | [merge_variables](#method-merge-variables)( `other: LocalVariables, overwrite: bool = false` ) |
| `void` | [copy_variables_to](#method-copy-variables-to)( `target: LocalVariables, overwrite: bool = false` ) |
| `Dictionary` | [create_snapshot](#method-create-snapshot)() |
| `bool` | [restore_from_snapshot](#method-restore-from-snapshot)( `snapshot: Dictionary` ) |
| `Dictionary` | [to_dict](#method-to-dict)() |
| `void` | [from_dict](#method-from-dict)( `data: Dictionary` ) |
| `Array[Dictionary]` | [get_variables_for_editor](#method-get-variables-for-editor)() |
| `Dictionary` | [export_variables](#method-export-variables)() |
| `bool` | [import_variables](#method-import-variables)( `data: Dictionary, merge_mode: bool = false` ) |
| `String` | [get_variables_debug_string](#method-get-variables-debug-string)() |
| `Dictionary` | [get_debug_info](#method-get-debug-info)() |
| `Dictionary` | [estimate_memory_usage](#method-estimate-memory-usage)() |

## Property descriptions

### Dictionary variables =  {#prop-variables}

*No description yet.*

### Dictionary metadata =  {#prop-metadata}

*No description yet.*

## Method descriptions

### Variant get_variable( key: String, default_value: Variant = null ) {#method-get-variable}

Get a variable value with optional default

### void set_variable( key: String, value: Variant ) {#method-set-variable}

Set a variable value

### bool has_variable( key: String ) {#method-has-variable}

Check if variable exists

### bool remove_variable( key: String ) {#method-remove-variable}

Remove a variable

### Array get_variable_keys() {#method-get-variable-keys}

Get all variable keys

### int get_variable_count() {#method-get-variable-count}

Get variable count

### void clear_variables() {#method-clear-variables}

Clear all variables

### void update_metadata() {#method-update-metadata}

Update metadata

### void set_variables_from_dict( new_variables: Dictionary ) {#method-set-variables-from-dict}

Set variables from dictionary

### void set_parent_event_id( event_id: int ) {#method-set-parent-event-id}

Set parent event ID for reference

### int get_parent_event_id() {#method-get-parent-event-id}

Get parent event ID

### bool is_valid_key( key: String ) {#method-is-valid-key}

Validate variable key (checks for common issues)

### String get_key_suggestions( key: String ) {#method-get-key-suggestions}

Get suggestions for fixing invalid keys

### Array[Dictionary] validate_variables() {#method-validate-variables}

Validate all variables

### void increment_variable( key: String, amount: float = 1.0 ) {#method-increment-variable}

Increment a numeric variable (creates with value 1 if doesn't exist)

### void decrement_variable( key: String, amount: float = 1.0 ) {#method-decrement-variable}

Decrement a numeric variable

### void multiply_variable( key: String, multiplier: float ) {#method-multiply-variable}

Multiply a numeric variable

### void toggle_variable( key: String ) {#method-toggle-variable}

Toggle a boolean variable (creates with true if doesn't exist)

### void append_to_variable( key: String, text: String ) {#method-append-to-variable}

Append to a string variable (creates empty string if doesn't exist)

### void add_to_array_variable( key: String, item: Variant ) {#method-add-to-array-variable}

Add item to array variable (creates empty array if doesn't exist)

### bool remove_from_array_variable( key: String, item: Variant ) {#method-remove-from-array-variable}

Remove item from array variable

### bool array_variable_contains( key: String, item: Variant ) {#method-array-variable-contains}

Check if array variable contains item

### void merge_variables( other: LocalVariables, overwrite: bool = false ) {#method-merge-variables}

Merge variables from another LocalVariables instance

### void copy_variables_to( target: LocalVariables, overwrite: bool = false ) {#method-copy-variables-to}

Copy variables to another LocalVariables instance

### Dictionary create_snapshot() {#method-create-snapshot}

Create a snapshot of current variables

### bool restore_from_snapshot( snapshot: Dictionary ) {#method-restore-from-snapshot}

Restore from a snapshot

### Dictionary to_dict() {#method-to-dict}

Serialize to dictionary for save/load

### void from_dict( data: Dictionary ) {#method-from-dict}

Deserialize from dictionary for save/load

### Array[Dictionary] get_variables_for_editor() {#method-get-variables-for-editor}

Get variables formatted for editor display

### Dictionary export_variables() {#method-export-variables}

Export variables to dictionary for external use

### bool import_variables( data: Dictionary, merge_mode: bool = false ) {#method-import-variables}

Import variables from dictionary

### String get_variables_debug_string() {#method-get-variables-debug-string}

Get variables as formatted string for debugging

### Dictionary get_debug_info() {#method-get-debug-info}

Get comprehensive info about this LocalVariables instance

### Dictionary estimate_memory_usage() {#method-estimate-memory-usage}

Estimate memory usage of variables


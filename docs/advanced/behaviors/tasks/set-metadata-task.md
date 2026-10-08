<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetMetadataTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Set, modify, or manipulate entity metadata with flexible operations

## Properties

| | | |
|---|---|---|
| `String` | [metadata_key](#prop-metadata-key) | `""` |
| `MetadataOperation` | [operation](#prop-operation) | `MetadataOperation.SET` |
| `String` | [value](#prop-value) | `""` |
| `String` | [secondary_value](#prop-secondary-value) | `""` |
| `ValueType` | [force_type](#prop-force-type) | `ValueType.AUTO` |
| `bool` | [create_if_missing](#prop-create-if-missing) | `true` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `void` | [setup_set](#method-setup-set)( `key: String, val: String, type: ValueType = ValueType.AUTO` ) |
| `void` | [setup_increment](#method-setup-increment)( `key: String, amount: String = "1"` ) |
| `void` | [setup_toggle](#method-setup-toggle)( `key: String` ) |
| `void` | [setup_append](#method-setup-append)( `key: String, text: String` ) |
| `void` | [setup_array_add](#method-setup-array-add)( `key: String, item: String` ) |
| `void` | [setup_clamp](#method-setup-clamp)( `key: String, min_val: String, max_val: String` ) |
| `void` | [setup_random](#method-setup-random)( `key: String, min_val: String, max_val: String` ) |
| `void` | [setup_timestamp](#method-setup-timestamp)( `key: String` ) |
| `void` | [setup_copy](#method-setup-copy)( `target_key: String, source_key: String` ) |

## Enumerations

### enum MetadataOperation {#enum-metadataoperation}

- **SET** = `0`
- **DELETE** = `1`
- **INCREMENT** = `2`
- **DECREMENT** = `3`
- **MULTIPLY** = `4`
- **APPEND** = `5`
- **PREPEND** = `6`
- **TOGGLE** = `7`
- **ARRAY_ADD** = `8`
- **ARRAY_REMOVE** = `9`
- **ARRAY_CLEAR** = `10`
- **CLAMP** = `11`
- **RANDOM_INT** = `12`
- **TIMESTAMP** = `13`

### enum ValueType {#enum-valuetype}

- **AUTO** = `0`
- **STRING** = `1`
- **INT** = `2`
- **FLOAT** = `3`
- **BOOL** = `4`

## Property descriptions

*Target*

### String metadata_key = "" {#prop-metadata-key}

Metadata key to modify

*Operation*

### MetadataOperation operation = MetadataOperation.SET {#prop-operation}

What operation to perform

### String value = "" {#prop-value}

Primary value for the operation

### String secondary_value = "" {#prop-secondary-value}

Secondary value (for range operations, copy source, etc.)

*Type Handling*

### ValueType force_type = ValueType.AUTO {#prop-force-type}

Force value to be treated as specific type

### bool create_if_missing = true {#prop-create-if-missing}

Create key if it doesn't exist

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Execute the metadata operation

### void execute_task_complete() {#method-execute-task-complete}

Task completed successfully

### void execute_task_interrupt() {#method-execute-task-interrupt}

Nothing to interrupt for metadata operations

### void execute_task_fail() {#method-execute-task-fail}

Nothing to clean up for metadata operations

### void setup_set( key: String, val: String, type: ValueType = ValueType.AUTO ) {#method-setup-set}

Quick setup methods for common operations

### void setup_increment( key: String, amount: String = "1" ) {#method-setup-increment}

*No description yet.*

### void setup_toggle( key: String ) {#method-setup-toggle}

*No description yet.*

### void setup_append( key: String, text: String ) {#method-setup-append}

*No description yet.*

### void setup_array_add( key: String, item: String ) {#method-setup-array-add}

*No description yet.*

### void setup_clamp( key: String, min_val: String, max_val: String ) {#method-setup-clamp}

*No description yet.*

### void setup_random( key: String, min_val: String, max_val: String ) {#method-setup-random}

*No description yet.*

### void setup_timestamp( key: String ) {#method-setup-timestamp}

*No description yet.*

### void setup_copy( target_key: String, source_key: String ) {#method-setup-copy}

*No description yet.*


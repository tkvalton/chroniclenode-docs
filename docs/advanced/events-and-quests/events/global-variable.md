<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GlobalVariable

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Individual global variable resource Stores a single named variable with type safety and metadata

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `VariableType` | [variable_type](#prop-variable-type) | `VariableType.INT` |
| `int` | [int_value](#prop-int-value) | `0` |
| `float` | [float_value](#prop-float-value) | `0.0` |
| `bool` | [bool_value](#prop-bool-value) | `false` |
| `String` | [string_value](#prop-string-value) | `""` |
| `Array` | [array_value](#prop-array-value) | `[]` |
| `Dictionary` | [dictionary_value](#prop-dictionary-value) | `{}` |

## Methods

| | |
|---|---|
| `Variant` | [get_value](#method-get-value)() |
| `void` | [set_value](#method-set-value)( `value: Variant` ) |
| `String` | [get_type_string](#method-get-type-string)() |

## Enumerations

### enum VariableType {#enum-variabletype}

- **INT** = `0`
- **FLOAT** = `1`
- **BOOL** = `2`
- **STRING** = `3`
- **ARRAY** = `4`
- **DICTIONARY** = `5`

## Property descriptions

### String variable_key = "" {#prop-variable-key}

Variable key (unique identifier)

### VariableType variable_type = VariableType.INT {#prop-variable-type}

Type of the variable

### int int_value = 0 {#prop-int-value}

The actual value stored (type depends on variable_type)

### float float_value = 0.0 {#prop-float-value}

*No description yet.*

### bool bool_value = false {#prop-bool-value}

*No description yet.*

### String string_value = "" {#prop-string-value}

*No description yet.*

### Array array_value = [] {#prop-array-value}

*No description yet.*

### Dictionary dictionary_value =  {#prop-dictionary-value}

*No description yet.*

## Method descriptions

### Variant get_value() {#method-get-value}

Get the current value based on type

### void set_value( value: Variant ) {#method-set-value}

Set the value (automatically determines type)

### String get_type_string() {#method-get-type-string}

Get type as string


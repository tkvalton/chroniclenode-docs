<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PropertySelectorRegistry

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Utility class for mapping property names to database/selector types Single source of truth for property name → database mappings Used by editors, dialogs, and dynamic UI generation systems

## Methods

| | |
|---|---|
| `String` | [get_database_for_property](#method-get-database-for-property)( `property_name: String` ) *static* |
| `bool` | [has_database_mapping](#method-has-database-mapping)( `property_name: String` ) *static* |
| `Array[String]` | [get_properties_for_database](#method-get-properties-for-database)( `database_name: String` ) *static* |
| `bool` | [is_unique_id_type](#method-is-unique-id-type)( `database_name: String` ) *static* |
| `String` | [get_database_display_name](#method-get-database-display-name)( `database_name: String` ) *static* |
| `String` | [format_property_value](#method-format-property-value)( `property_name: String, value` ) *static* |
| `void` | [register_mapping](#method-register-mapping)( `property_name: String, database_name: String` ) *static* |
| `void` | [unregister_mapping](#method-unregister-mapping)( `property_name: String` ) *static* |
| `String` | [get_database_with_runtime](#method-get-database-with-runtime)( `property_name: String` ) *static* |
| `void` | [clear_runtime_mappings](#method-clear-runtime-mappings)() *static* |

## Constants

- `Dictionary` **PROPERTY_SELECTORS** = `{` - ============================================================================= PROPERTY SELECTOR MAPPING (Single Source of Truth) Maps property names to their database/selector type for UI handling =============================================================================

## Method descriptions

### String get_database_for_property( property_name: String ) {#method-get-database-for-property}

Get database name for a property by its name Returns empty string if no mapping found

### bool has_database_mapping( property_name: String ) {#method-has-database-mapping}

Check if a property name has a database mapping

### Array[String] get_properties_for_database( database_name: String ) {#method-get-properties-for-database}

Get all property names that map to a specific database

### bool is_unique_id_type( database_name: String ) {#method-is-unique-id-type}

Check if a database is a "unique ID" type (runtime, not database)

### String get_database_display_name( database_name: String ) {#method-get-database-display-name}

Get display name for a database type

### String format_property_value( property_name: String, value ) {#method-format-property-value}

Format a property value for display (with database lookup if applicable)

### void register_mapping( property_name: String, database_name: String ) {#method-register-mapping}

Register a custom property → database mapping at runtime

### void unregister_mapping( property_name: String ) {#method-unregister-mapping}

Unregister a custom mapping

### String get_database_with_runtime( property_name: String ) {#method-get-database-with-runtime}

Get database with runtime mappings considered

### void clear_runtime_mappings() {#method-clear-runtime-mappings}

Clear all runtime mappings


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EventTypeManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Manages all event type scanning, creation, and parameter handling Updated to work with new Condition system using @export hints Uses PropertySelectorRegistry for unified property → database mappings

## Variables

| | | |
|---|---|---|
| `String` | [triggers_path](#var-triggers-path) | `"res://addons/chroniclenode/data_classes/events/event_tri...` |
| `String` | [conditions_path](#var-conditions-path) | `"res://addons/chroniclenode/data_classes/conditions/"` |
| `String` | [actions_path](#var-actions-path) | `"res://addons/chroniclenode/data_classes/events/event_act...` |
| `Dictionary` | [trigger_types](#var-trigger-types) | `{}` |
| `Dictionary` | [condition_types](#var-condition-types) | `{}` |
| `Dictionary` | [action_types](#var-action-types) | `{}` |
| `Dictionary` | [script_cache](#var-script-cache) | `{}` |
| `Dictionary` | [parameter_cache](#var-parameter-cache) | `{}` |
| `bool` | [auto_refresh_on_file_change](#var-auto-refresh-on-file-change) | `true` |
| `bool` | [cache_script_instances](#var-cache-script-instances) | `true` |
| `bool` | [validate_scripts_on_load](#var-validate-scripts-on-load) | `true` |

## Methods

| | |
|---|---|
| `void` | [refresh_all_types](#method-refresh-all-types)() |
| `void` | [refresh_triggers](#method-refresh-triggers)() |
| `void` | [refresh_conditions](#method-refresh-conditions)() |
| `void` | [refresh_actions](#method-refresh-actions)() |
| `Dictionary` | [get_types](#method-get-types)( `category: TypeCategory` ) |
| `Dictionary` | [get_types_by_name](#method-get-types-by-name)( `category_name: String` ) |
| `Dictionary` | [find_type_by_path](#method-find-type-by-path)( `script_path: String` ) |
| `Array[Dictionary]` | [find_types_by_name](#method-find-types-by-name)( `display_name: String` ) |
| `EventTrigger` | [create_trigger](#method-create-trigger)( `type_info: Dictionary, parameters: Dictionary = {}` ) |
| `Condition` | [create_condition](#method-create-condition)( `type_info: Dictionary, parameters: Dictionary = {}` ) |
| `EventAction` | [create_action](#method-create-action)( `type_info: Dictionary, parameters: Dictionary = {}` ) |
| `Resource` | [create_instance_from_type](#method-create-instance-from-type)( `type_name: String, type_info: Dictionary, parameters: Dictionary = {}` ) |
| `bool` | [update_instance](#method-update-instance)( `instance: Resource, type_info: Dictionary, parameters: Dictionary = {}` ) |
| `Dictionary` | [extract_parameters_from_script](#method-extract-parameters-from-script)( `script_path: String` ) |
| `Dictionary` | [extract_parameters_from_instance](#method-extract-parameters-from-instance)( `instance: Resource` ) |
| `String` | [get_function_description](#method-get-function-description)( `script_path: String` ) |
| `Array[Dictionary]` | [validate_script](#method-validate-script)( `script_path: String, expected_base_class: String = ""` ) |
| `String` | [format_description_with_parameters](#method-format-description-with-parameters)( `description: String, instance: Resource` ) |
| `String` | [format_parameter_value_with_type](#method-format-parameter-value-with-type)( `param_name: String, value, param_info: Dictionary` ) |

## Signals

### types_refreshed( type_category: String, types_dict: Dictionary ) {#signal-types-refreshed}

### type_created( type_category: String, instance: Resource, type_info: Dictionary ) {#signal-type-created}

### type_updated( type_category: String, instance: Resource, type_info: Dictionary ) {#signal-type-updated}

### parameter_extracted( type_info: Dictionary, parameters: Dictionary ) {#signal-parameter-extracted}

## Enumerations

### enum TypeCategory {#enum-typecategory}

- **TRIGGER** = `0`
- **CONDITION** = `1`
- **ACTION** = `2`

## Variable descriptions

### String triggers_path = "res://addons/chroniclenode/data_classes/events/event_trigge {#var-triggers-path}

*No description yet.*

### String conditions_path = "res://addons/chroniclenode/data_classes/conditions/" {#var-conditions-path}

*No description yet.*

### String actions_path = "res://addons/chroniclenode/data_classes/events/event_action {#var-actions-path}

*No description yet.*

### Dictionary trigger_types =  {#var-trigger-types}

*No description yet.*

### Dictionary condition_types =  {#var-condition-types}

*No description yet.*

### Dictionary action_types =  {#var-action-types}

*No description yet.*

### Dictionary script_cache =  {#var-script-cache}

*No description yet.*

### Dictionary parameter_cache =  {#var-parameter-cache}

*No description yet.*

### bool auto_refresh_on_file_change = true {#var-auto-refresh-on-file-change}

*No description yet.*

### bool cache_script_instances = true {#var-cache-script-instances}

*No description yet.*

### bool validate_scripts_on_load = true {#var-validate-scripts-on-load}

*No description yet.*

## Method descriptions

### void refresh_all_types() {#method-refresh-all-types}

Refresh all type dictionaries

### void refresh_triggers() {#method-refresh-triggers}

Refresh trigger types

### void refresh_conditions() {#method-refresh-conditions}

Refresh condition types

### void refresh_actions() {#method-refresh-actions}

Refresh action types

### Dictionary get_types( category: TypeCategory ) {#method-get-types}

Get all types for a specific category

### Dictionary get_types_by_name( category_name: String ) {#method-get-types-by-name}

Get types by category name (string)

### Dictionary find_type_by_path( script_path: String ) {#method-find-type-by-path}

Find a specific type by path

### Array[Dictionary] find_types_by_name( display_name: String ) {#method-find-types-by-name}

Find types by display name

### EventTrigger create_trigger( type_info: Dictionary, parameters: Dictionary = &#123;&#125; ) {#method-create-trigger}

Create a new trigger instance

### Condition create_condition( type_info: Dictionary, parameters: Dictionary = &#123;&#125; ) {#method-create-condition}

Create a new condition instance

### EventAction create_action( type_info: Dictionary, parameters: Dictionary = &#123;&#125; ) {#method-create-action}

Create a new action instance

### Resource create_instance_from_type( type_name: String, type_info: Dictionary, parameters: Dictionary = &#123;&#125; ) {#method-create-instance-from-type}

Create instance by type info (generic)

### bool update_instance( instance: Resource, type_info: Dictionary, parameters: Dictionary = &#123;&#125; ) {#method-update-instance}

Update an existing instance with new script and parameters

### Dictionary extract_parameters_from_script( script_path: String ) {#method-extract-parameters-from-script}

Extract parameters from a script

### Dictionary extract_parameters_from_instance( instance: Resource ) {#method-extract-parameters-from-instance}

Extract parameters from an existing instance

### String get_function_description( script_path: String ) {#method-get-function-description}

Get function description from script (with fallbacks)

### Array[Dictionary] validate_script( script_path: String, expected_base_class: String = "" ) {#method-validate-script}

Validate a script for compatibility

### String format_description_with_parameters( description: String, instance: Resource ) {#method-format-description-with-parameters}

Format description with parameter values (used by tree builders)

### String format_parameter_value_with_type( param_name: String, value, param_info: Dictionary ) {#method-format-parameter-value-with-type}

Format parameter value with context (knows about selector types)


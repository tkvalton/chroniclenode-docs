<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UnifiedResourceDialog

**Inherits:** `AcceptDialog`

Unified dialog for creating and editing resources with dynamic UI generation Similar to EventTypeSelector but for creating/editing resources like Rewards and Requirements

## Description

Uses property name mapping to determine which UI control to create Automatically scans directories for resource types Builds UI dynamically based on exported properties

## Variables

| | | |
|---|---|---|
| `OptionButton` | [resource_type_option](#var-resource-type-option) |  |
| `VBoxContainer` | [dynamic_container](#var-dynamic-container) |  |
| `Resource` | [current_resource](#var-current-resource) |  |
| `bool` | [is_editing](#var-is-editing) | `false` |
| `Dictionary` | [param_values](#var-param-values) | `{}  # Property name -> current value` |
| `String` | [current_type_key](#var-current-type-key) | `""` |
| `String` | [current_class_name](#var-current-class-name) | `""` |
| `Dictionary` | [current_type_info](#var-current-type-info) | `{}  # Store current type info for single-type mode` |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `String` | [resource_category](#var-resource-category) | `""  # "reward" or "requirement"` |
| `Array[Dictionary]` | [scanned_types](#var-scanned-types) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_dialog_manager: DialogManager` ) |
| `void` | [setup](#method-setup)( `category: String` ) |
| `void` | [setup_single_type](#method-setup-single-type)( `resource_script: Script, display_name: String = ""` ) |
| `void` | [edit_resource](#method-edit-resource)( `resource: Resource, is_single_type: bool = false` ) |

## Signals

### resource_configured( resource: Resource ) {#signal-resource-configured}

## Constants

- `Dictionary` **TYPE_PATHS** = `{`
- `Dictionary` **PROJECT_PATHS** = `{` - Where a project keeps its own types of a category (the addon folder is overwritten by updates, these never are). Missing folders are fine
- `Dictionary` **PROPERTY_SELECTORS** = `{`

## Variable descriptions

### OptionButton resource_type_option {#var-resource-type-option}

*No description yet.*

### VBoxContainer dynamic_container {#var-dynamic-container}

*No description yet.*

### Resource current_resource {#var-current-resource}

*No description yet.*

### bool is_editing = false {#var-is-editing}

*No description yet.*

### Dictionary param_values =   # Property name -&gt; current value {#var-param-values}

*No description yet.*

### String current_type_key = "" {#var-current-type-key}

*No description yet.*

### String current_class_name = "" {#var-current-class-name}

*No description yet.*

### Dictionary current_type_info =   # Store current type info for single-type mode {#var-current-type-info}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### String resource_category = ""  # "reward" or "requirement" {#var-resource-category}

*No description yet.*

### Array[Dictionary] scanned_types = [] {#var-scanned-types}

*No description yet.*

## Method descriptions

### void setup_managers( p_dialog_manager: DialogManager ) {#method-setup-managers}

*No description yet.*

### void setup( category: String ) {#method-setup}

Setup for creating a new resource of a specific category (reward/requirement)

### void setup_single_type( resource_script: Script, display_name: String = "" ) {#method-setup-single-type}

Setup for creating a new resource of a specific single type (e.g., CombatReaction, EncounterReaction) This is for resources that don't have multiple types to choose from

### void edit_resource( resource: Resource, is_single_type: bool = false ) {#method-edit-resource}

Setup for editing an existing resource


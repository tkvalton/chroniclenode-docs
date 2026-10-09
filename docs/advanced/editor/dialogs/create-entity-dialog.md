<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CreateEntityDialog

**Inherits:** `AcceptDialog`

Dialog for creating new entities or player classes with optional template selection

## Properties

| | | |
|---|---|---|
| `EntityMode` | [creation_mode](#prop-creation-mode) | `EntityMode.ENTITY` |

## Variables

| | | |
|---|---|---|
| `ResourceManager` | [resource_manager](#var-resource-manager) |  |
| `Array` | [available_templates](#var-available-templates) | `[]` |
| `Dictionary` | [mode_config](#var-mode-config) | `{}` |

## Methods

| | |
|---|---|
| `void` | [setup_and_show](#method-setup-and-show)( `p_resource_manager: ResourceManager` ) |
| `bool` | [is_valid_resource_name](#method-is-valid-resource-name)( `name: String` ) |
| `Dictionary` | [get_template_info](#method-get-template-info)( `template_id: int` ) |
| `void` | [reset_form](#method-reset-form)() |
| `void` | [suggest_name](#method-suggest-name)( `suggested_name: String` ) |
| `int` | [get_selected_template_id](#method-get-selected-template-id)() |
| `String` | [get_resource_name](#method-get-resource-name)() |
| `void` | [set_creation_mode](#method-set-creation-mode)( `mode: EntityMode` ) |
| `EntityMode` | [get_creation_mode](#method-get-creation-mode)() |
| `bool` | [is_entity_mode](#method-is-entity-mode)() |
| `bool` | [is_player_class_mode](#method-is-player-class-mode)() |

## Signals

### selection_made( display_name: String, template_id: int ) {#signal-selection-made}

## Enumerations

### enum EntityMode {#enum-entitymode}

- **ENTITY** = `0`
- **PLAYER_CLASS** = `1`

## Property descriptions

### EntityMode creation_mode = EntityMode.ENTITY {#prop-creation-mode}

Configure what type of resource this dialog creates

## Variable descriptions

### ResourceManager resource_manager {#var-resource-manager}

*No description yet.*

### Array available_templates = [] {#var-available-templates}

*No description yet.*

### Dictionary mode_config =  {#var-mode-config}

*No description yet.*

## Method descriptions

### void setup_and_show( p_resource_manager: ResourceManager ) {#method-setup-and-show}

Setup the dialog with resource manager and show

### bool is_valid_resource_name( name: String ) {#method-is-valid-resource-name}

Validate resource name

### Dictionary get_template_info( template_id: int ) {#method-get-template-info}

Get template info for display

### void reset_form() {#method-reset-form}

Reset dialog state

### void suggest_name( suggested_name: String ) {#method-suggest-name}

Pre-fill dialog with suggested name

### int get_selected_template_id() {#method-get-selected-template-id}

Get currently selected template ID

### String get_resource_name() {#method-get-resource-name}

Get current resource name

### void set_creation_mode( mode: EntityMode ) {#method-set-creation-mode}

Set creation mode programmatically

### EntityMode get_creation_mode() {#method-get-creation-mode}

Get current creation mode

### bool is_entity_mode() {#method-is-entity-mode}

Check if dialog is configured for entities

### bool is_player_class_mode() {#method-is-player-class-mode}

Check if dialog is configured for player classes


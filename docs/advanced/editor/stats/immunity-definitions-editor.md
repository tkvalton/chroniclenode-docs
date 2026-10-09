<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ImmunityDefinitionsEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Immunity Definitions Editor for managing immunity definition resources

## Variables

| | | |
|---|---|---|
| `ImmunityDefinition:` | [current_immunity_definition](#var-current-immunity-definition) |  |
| `Array` | [available_damage_types](#var-available-damage-types) | `[]  # Array of {id: int, name: String}` |
| `Array` | [available_school_types](#var-available-school-types) | `[]  # Array of {id: int, name: String}` |
| `Array` | [available_status_effects](#var-available-status-effects) | `[]  # Array of {id: int, name: String}` |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `ImmunityDefinition` | [get_current_immunity_definition](#method-get-current-immunity-definition)() |
| `void` | [set_available_damage_types](#method-set-available-damage-types)( `damage_types: Array` ) |
| `void` | [set_available_status_effects](#method-set-available-status-effects)( `status_effects: Array` ) |
| `void` | [set_available_school_types](#method-set-available-school-types)( `school_types: Array` ) |

## Variable descriptions

### ImmunityDefinition: current_immunity_definition {#var-current-immunity-definition}

*No description yet.*

### Array available_damage_types = []  # Array of id: int, name: String {#var-available-damage-types}

*No description yet.*

### Array available_school_types = []  # Array of id: int, name: String {#var-available-school-types}

*No description yet.*

### Array available_status_effects = []  # Array of id: int, name: String {#var-available-status-effects}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### ImmunityDefinition get_current_immunity_definition() {#method-get-current-immunity-definition}

*No description yet.*

### void set_available_damage_types( damage_types: Array ) {#method-set-available-damage-types}

*No description yet.*

### void set_available_status_effects( status_effects: Array ) {#method-set-available-status-effects}

*No description yet.*

### void set_available_school_types( school_types: Array ) {#method-set-available-school-types}

*No description yet.*


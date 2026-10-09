<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TreeBuilder

**Inherits:** `MarginContainer`

**Inherited by:** [EventTreeBuilder](/advanced/editor/events/event-tree-builder), [QuestLineTreeBuilder](/advanced/editor/events/quest-line-tree-builder), [QuestTreeBuilder](/advanced/editor/events/quest-tree-builder)

Base class for all tree builders with shared functionality

## Variables

| | | |
|---|---|---|
| `Resource` | [current_resource](#var-current-resource) | `null` |
| `EventTypeManager` | [type_manager](#var-type-manager) |  |
| `TreeItem` | [root](#var-root) |  |

## Methods

| | |
|---|---|
| `void` | [set_resource](#method-set-resource)( `resource: Resource` ) |
| `void` | [rebuild_tree](#method-rebuild-tree)() |
| `bool` | [has_unsaved_changes](#method-has-unsaved-changes)() |
| `void` | [mark_saved](#method-mark-saved)() |
| `void` | [set_managers](#method-set-managers)( `p_type_manager: EventTypeManager` ) |
| `bool` | [create_and_add_action](#method-create-and-add-action)( `type_data: Dictionary, param_values: Dictionary, additional_data: Dictionary = {}` ) |
| `bool` | [create_and_add_condition](#method-create-and-add-condition)( `type_data: Dictionary, param_values: Dictionary, additional_data: Dictionary = {}` ) |
| `bool` | [update_instance](#method-update-instance)( `instance: Resource, type_data: Dictionary, param_values: Dictionary` ) |

## Signals

### show_add_unit_dialog( type: String, data: Dictionary ) {#signal-show-add-unit-dialog}

### show_edit_unit_dialog( type: String, unit_data: Dictionary ) {#signal-show-edit-unit-dialog}

### resource_modified() {#signal-resource-modified}

## Enumerations

### enum ItemType {#enum-itemtype}

- **CATEGORY** = `0`
- **QUEST_STEP** = `1`
- **QUEST_IN_STEP** = `2`
- **OBJECTIVE** = `3`
- **TRIGGER** = `4`
- **CONDITION** = `5`
- **ACTION** = `6`
- **ON_START_ACTION** = `7`
- **ON_COMPLETE_ACTION** = `8`
- **ON_ABANDON_ACTION** = `9`
- **IF_CONDITION_SECTION** = `10`
- **IF_TRUE_SECTION** = `11`
- **IF_FALSE_SECTION** = `12`
- **SWITCH_CASE_SECTION** = `13`
- **SWITCH_DEFAULT_SECTION** = `14`
- **SWITCH_CASE_CONDITION_SECTION** = `15`
- **SWITCH_CASE_ACTIONS_SECTION** = `16`
- **SWITCH_DEFAULT_ACTIONS_SECTION** = `17`

## Variable descriptions

### Resource current_resource = null {#var-current-resource}

*No description yet.*

### EventTypeManager type_manager {#var-type-manager}

*No description yet.*

### TreeItem root {#var-root}

*No description yet.*

## Method descriptions

### void set_resource( resource: Resource ) {#method-set-resource}

*No description yet.*

### void rebuild_tree() {#method-rebuild-tree}

*No description yet.*

### bool has_unsaved_changes() {#method-has-unsaved-changes}

*No description yet.*

### void mark_saved() {#method-mark-saved}

*No description yet.*

### void set_managers( p_type_manager: EventTypeManager ) {#method-set-managers}

*No description yet.*

### bool create_and_add_action( type_data: Dictionary, param_values: Dictionary, additional_data: Dictionary = &#123;&#125; ) {#method-create-and-add-action}

*No description yet.*

### bool create_and_add_condition( type_data: Dictionary, param_values: Dictionary, additional_data: Dictionary = &#123;&#125; ) {#method-create-and-add-condition}

*No description yet.*

### bool update_instance( instance: Resource, type_data: Dictionary, param_values: Dictionary ) {#method-update-instance}

*No description yet.*


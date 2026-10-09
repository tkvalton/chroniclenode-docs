<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementGraphNode

**Inherits:** `GraphNode`

GraphNode that holds multiple requirements as a visual "gate" Uses DialogManager.setup_dialog() for guaranteed clean connections

## Variables

| | | |
|---|---|---|
| `Array[Requirement]` | [requirements](#var-requirements) | `[]` |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `Array[Dictionary]` | [requirement_entries](#var-requirement-entries) | `[]` |

## Methods

| | |
|---|---|
| `void` | [set_dialog_manager](#method-set-dialog-manager)( `p_dialog_manager: DialogManager` ) |
| `void` | [setup_with_requirements](#method-setup-with-requirements)( `reqs: Array[Requirement]` ) |
| `Array[Requirement]` | [get_requirements](#method-get-requirements)() |
| `void` | [add_requirement](#method-add-requirement)( `requirement: Requirement` ) |
| `void` | [remove_requirement](#method-remove-requirement)( `index: int` ) |
| `void` | [clear_requirements](#method-clear-requirements)() |

## Signals

### requirements_changed() {#signal-requirements-changed}

## Constants

- `const` **PORT_TYPE_RESPONSE_FLOW** = `1`

## Variable descriptions

### Array[Requirement] requirements = [] {#var-requirements}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### Array[Dictionary] requirement_entries = [] {#var-requirement-entries}

*No description yet.*

## Method descriptions

### void set_dialog_manager( p_dialog_manager: DialogManager ) {#method-set-dialog-manager}

*No description yet.*

### void setup_with_requirements( reqs: Array[Requirement] ) {#method-setup-with-requirements}

*No description yet.*

### Array[Requirement] get_requirements() {#method-get-requirements}

*No description yet.*

### void add_requirement( requirement: Requirement ) {#method-add-requirement}

*No description yet.*

### void remove_requirement( index: int ) {#method-remove-requirement}

*No description yet.*

### void clear_requirements() {#method-clear-requirements}

*No description yet.*


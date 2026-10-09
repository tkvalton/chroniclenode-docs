<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConnectionCreationDialog

**Inherits:** `AcceptDialog`

Dialog for creating new skill node connections with advanced options and pre-selection support

## Variables

| | | |
|---|---|---|
| `SkillTree` | [skill_tree](#var-skill-tree) |  |
| `int` | [preselected_from_node_id](#var-preselected-from-node-id) | `-1` |
| `int` | [preselected_to_node_id](#var-preselected-to-node-id) | `-1` |
| `bool` | [lock_from_selection](#var-lock-from-selection) | `false` |
| `bool` | [lock_to_selection](#var-lock-to-selection) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `tree: SkillTree` ) |
| `void` | [setup_with_preselection](#method-setup-with-preselection)( `tree: SkillTree, from_node_id: int = -1, to_node_id: int = -1` ) |
| `void` | [setup_for_connection_from](#method-setup-for-connection-from)( `tree: SkillTree, from_node: SkillNode` ) |
| `void` | [setup_for_connection_to](#method-setup-for-connection-to)( `tree: SkillTree, to_node: SkillNode` ) |
| `Array[String]` | [validate_connection](#method-validate-connection)() |
| `void` | [reset_preselections](#method-reset-preselections)() |
| `Dictionary` | [get_preselection_info](#method-get-preselection-info)() |
| `bool` | [is_from_node_locked](#method-is-from-node-locked)() |
| `bool` | [is_to_node_locked](#method-is-to-node-locked)() |
| `Dictionary` | [get_selected_nodes_info](#method-get-selected-nodes-info)() |

## Signals

### connection_created( connection: SkillConnection ) {#signal-connection-created}

## Variable descriptions

### SkillTree skill_tree {#var-skill-tree}

*No description yet.*

### int preselected_from_node_id = -1 {#var-preselected-from-node-id}

*No description yet.*

### int preselected_to_node_id = -1 {#var-preselected-to-node-id}

*No description yet.*

### bool lock_from_selection = false {#var-lock-from-selection}

*No description yet.*

### bool lock_to_selection = false {#var-lock-to-selection}

*No description yet.*

## Method descriptions

### void setup( tree: SkillTree ) {#method-setup}

*No description yet.*

### void setup_with_preselection( tree: SkillTree, from_node_id: int = -1, to_node_id: int = -1 ) {#method-setup-with-preselection}

*No description yet.*

### void setup_for_connection_from( tree: SkillTree, from_node: SkillNode ) {#method-setup-for-connection-from}

*No description yet.*

### void setup_for_connection_to( tree: SkillTree, to_node: SkillNode ) {#method-setup-for-connection-to}

*No description yet.*

### Array[String] validate_connection() {#method-validate-connection}

*No description yet.*

### void reset_preselections() {#method-reset-preselections}

*No description yet.*

### Dictionary get_preselection_info() {#method-get-preselection-info}

*No description yet.*

### bool is_from_node_locked() {#method-is-from-node-locked}

*No description yet.*

### bool is_to_node_locked() {#method-is-to-node-locked}

*No description yet.*

### Dictionary get_selected_nodes_info() {#method-get-selected-nodes-info}

*No description yet.*


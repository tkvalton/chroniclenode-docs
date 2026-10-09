<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillNodePropertiesEditor

**Inherits:** `ScrollContainer`

## Variables

| | | |
|---|---|---|
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `SkillNode` | [current_node](#var-current-node) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `Dictionary` | [selected_reward_info](#var-selected-reward-info) | `{}` |

## Methods

| | |
|---|---|
| `void` | [setup_dialog_manager](#method-setup-dialog-manager)( `p_dialog_manager: DialogManager` ) |
| `void` | [load_node](#method-load-node)( `node: SkillNode` ) |
| `void` | [refresh_point_pools](#method-refresh-point-pools)() |
| `SkillNode` | [get_current_node](#method-get-current-node)() |
| `String` | [get_rewards_summary](#method-get-rewards-summary)() |
| `Array[String]` | [validate_rewards](#method-validate-rewards)() |

## Signals

### node_updated( node: SkillNode ) {#signal-node-updated}

### node_type_conversion_requested( node: SkillNode, new_type_index: int ) {#signal-node-type-conversion-requested}

### refresh_tree_view() {#signal-refresh-tree-view}

### refresh_canvas() {#signal-refresh-canvas}

## Variable descriptions

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### SkillNode current_node {#var-current-node}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### Dictionary selected_reward_info =  {#var-selected-reward-info}

*No description yet.*

## Method descriptions

### void setup_dialog_manager( p_dialog_manager: DialogManager ) {#method-setup-dialog-manager}

*No description yet.*

### void load_node( node: SkillNode ) {#method-load-node}

*No description yet.*

### void refresh_point_pools() {#method-refresh-point-pools}

*No description yet.*

### SkillNode get_current_node() {#method-get-current-node}

*No description yet.*

### String get_rewards_summary() {#method-get-rewards-summary}

*No description yet.*

### Array[String] validate_rewards() {#method-validate-rewards}

*No description yet.*


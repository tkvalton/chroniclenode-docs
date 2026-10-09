<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillNodeManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Handles skill node operations and type conversions

## Methods

| | |
|---|---|
| `SkillNode` | [create_node](#method-create-node)( `skill_tree: SkillTree, node_type: String, position: Vector2` ) *static* |
| `SkillNode` | [duplicate_node](#method-duplicate-node)( `skill_tree: SkillTree, source_node: SkillNode, position: Vector2 = Vector2.ZERO` ) *static* |
| `SkillNode` | [convert_node_type](#method-convert-node-type)( `skill_tree: SkillTree, source_node: SkillNode, target_type_index: int` ) *static* |
| `void` | [delete_node](#method-delete-node)( `skill_tree: SkillTree, node: SkillNode` ) *static* |
| `void` | [move_node](#method-move-node)( `node: SkillNode, new_position: Vector2` ) *static* |
| `Rect2` | [get_node_bounds](#method-get-node-bounds)( `nodes: Array[SkillNode]` ) *static* |
| `void` | [center_nodes_at](#method-center-nodes-at)( `nodes: Array[SkillNode], center_position: Vector2` ) *static* |
| `void` | [distribute_nodes_horizontally](#method-distribute-nodes-horizontally)( `nodes: Array[SkillNode], start_x: float, spacing: float` ) *static* |
| `void` | [distribute_nodes_vertically](#method-distribute-nodes-vertically)( `nodes: Array[SkillNode], start_y: float, spacing: float` ) *static* |
| `void` | [arrange_nodes_in_grid](#method-arrange-nodes-in-grid)( `nodes: Array[SkillNode], columns: int, spacing: Vector2, start_position: Vector2 = Vector2.ZERO` ) *static* |
| `Vector2` | [find_optimal_position_for_new_node](#method-find-optimal-position-for-new-node)( `skill_tree: SkillTree, preferred_position: Vector2 = Vector2.ZERO` ) *static* |
| `Array[Dictionary]` | [validate_node_positions](#method-validate-node-positions)( `skill_tree: SkillTree` ) *static* |
| `int` | [auto_fix_overlapping_nodes](#method-auto-fix-overlapping-nodes)( `skill_tree: SkillTree` ) *static* |

## Method descriptions

### SkillNode create_node( skill_tree: SkillTree, node_type: String, position: Vector2 ) {#method-create-node}

*No description yet.*

### SkillNode duplicate_node( skill_tree: SkillTree, source_node: SkillNode, position: Vector2 = Vector2.ZERO ) {#method-duplicate-node}

*No description yet.*

### SkillNode convert_node_type( skill_tree: SkillTree, source_node: SkillNode, target_type_index: int ) {#method-convert-node-type}

*No description yet.*

### void delete_node( skill_tree: SkillTree, node: SkillNode ) {#method-delete-node}

*No description yet.*

### void move_node( node: SkillNode, new_position: Vector2 ) {#method-move-node}

*No description yet.*

### Rect2 get_node_bounds( nodes: Array[SkillNode] ) {#method-get-node-bounds}

*No description yet.*

### void center_nodes_at( nodes: Array[SkillNode], center_position: Vector2 ) {#method-center-nodes-at}

*No description yet.*

### void distribute_nodes_horizontally( nodes: Array[SkillNode], start_x: float, spacing: float ) {#method-distribute-nodes-horizontally}

*No description yet.*

### void distribute_nodes_vertically( nodes: Array[SkillNode], start_y: float, spacing: float ) {#method-distribute-nodes-vertically}

*No description yet.*

### void arrange_nodes_in_grid( nodes: Array[SkillNode], columns: int, spacing: Vector2, start_position: Vector2 = Vector2.ZERO ) {#method-arrange-nodes-in-grid}

*No description yet.*

### Vector2 find_optimal_position_for_new_node( skill_tree: SkillTree, preferred_position: Vector2 = Vector2.ZERO ) {#method-find-optimal-position-for-new-node}

*No description yet.*

### Array[Dictionary] validate_node_positions( skill_tree: SkillTree ) {#method-validate-node-positions}

*No description yet.*

### int auto_fix_overlapping_nodes( skill_tree: SkillTree ) {#method-auto-fix-overlapping-nodes}

*No description yet.*


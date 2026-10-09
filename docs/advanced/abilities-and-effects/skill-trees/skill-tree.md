<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillTree

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Main container for skill trees with nodes and connections

## Properties

| | | |
|---|---|---|
| `CompressedTexture2D` | [background_texture](#prop-background-texture) |  |
| `Color` | [background_color](#prop-background-color) | `Color(0.15, 0.15, 0.15, 1.0)` |
| `Color` | [tree_tint_color](#prop-tree-tint-color) | `Color.WHITE` |
| `Array[SkillNode]` | [skill_nodes](#prop-skill-nodes) | `[]` |
| `Array[SkillConnection]` | [node_connections](#prop-node-connections) | `[]` |
| `Dictionary` | [visual_layout_data](#prop-visual-layout-data) | `{}  # Store any editor metadata` |

## Methods

| | |
|---|---|
| `void` | [add_node](#method-add-node)( `node: SkillNode` ) |
| `bool` | [remove_node](#method-remove-node)( `node_id: int` ) |
| `SkillNode` | [get_node_by_id](#method-get-node-by-id)( `node_id: int` ) |
| `void` | [add_connection](#method-add-connection)( `connection: SkillConnection` ) |
| `bool` | [remove_connection](#method-remove-connection)( `connection: SkillConnection` ) |
| `bool` | [remove_connection_by_nodes](#method-remove-connection-by-nodes)( `from_node_id: int, to_node_id: int` ) |
| `SkillConnection` | [get_connection_between_nodes](#method-get-connection-between-nodes)( `from_node_id: int, to_node_id: int` ) |
| `Array[SkillConnection]` | [get_connections_for_node](#method-get-connections-for-node)( `node_id: int` ) |
| `bool` | [has_connection_between_nodes](#method-has-connection-between-nodes)( `from_node_id: int, to_node_id: int` ) |
| `Array[SkillNode]` | [get_prerequisite_nodes](#method-get-prerequisite-nodes)( `node_id: int` ) |
| `Array[SkillNode]` | [get_dependent_nodes](#method-get-dependent-nodes)( `node_id: int` ) |
| `Array[SkillNode]` | [get_mutually_exclusive_nodes](#method-get-mutually-exclusive-nodes)( `node_id: int` ) |
| `Array[SkillNode]` | [get_root_nodes](#method-get-root-nodes)() |
| `Array[SkillNode]` | [get_leaf_nodes](#method-get-leaf-nodes)() |
| `bool` | [has_cycles](#method-has-cycles)() |
| `int` | [get_max_depth](#method-get-max-depth)() |
| `Array[SkillNode]` | [get_nodes_by_point_pool](#method-get-nodes-by-point-pool)( `pool_id: int` ) |
| `Array[int]` | [get_used_point_pools](#method-get-used-point-pools)() |
| `void` | [set_node_position](#method-set-node-position)( `node_id: int, position: Vector2` ) |
| `Vector2` | [get_node_position](#method-get-node-position)( `node_id: int` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Dictionary` | [get_detailed_info](#method-get-detailed-info)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

### CompressedTexture2D background_texture {#prop-background-texture}

Optional background image for the skill tree UI

### Color background_color = Color(0.15, 0.15, 0.15, 1.0) {#prop-background-color}

Fallback background color if no texture

### Color tree_tint_color = Color.WHITE {#prop-tree-tint-color}

Tint color overlay for theming

### Array[SkillNode] skill_nodes = [] {#prop-skill-nodes}

*No description yet.*

### Array[SkillConnection] node_connections = [] {#prop-node-connections}

*No description yet.*

### Dictionary visual_layout_data =   # Store any editor metadata {#prop-visual-layout-data}

*No description yet.*

## Method descriptions

### void add_node( node: SkillNode ) {#method-add-node}

*No description yet.*

### bool remove_node( node_id: int ) {#method-remove-node}

*No description yet.*

### SkillNode get_node_by_id( node_id: int ) {#method-get-node-by-id}

*No description yet.*

### void add_connection( connection: SkillConnection ) {#method-add-connection}

*No description yet.*

### bool remove_connection( connection: SkillConnection ) {#method-remove-connection}

Remove a specific connection from the tree

### bool remove_connection_by_nodes( from_node_id: int, to_node_id: int ) {#method-remove-connection-by-nodes}

Remove connection between two specific nodes

### SkillConnection get_connection_between_nodes( from_node_id: int, to_node_id: int ) {#method-get-connection-between-nodes}

Get the connection between two specific nodes (if it exists)

### Array[SkillConnection] get_connections_for_node( node_id: int ) {#method-get-connections-for-node}

Get all connections involving a specific node

### bool has_connection_between_nodes( from_node_id: int, to_node_id: int ) {#method-has-connection-between-nodes}

Check if a connection exists between two nodes

### Array[SkillNode] get_prerequisite_nodes( node_id: int ) {#method-get-prerequisite-nodes}

*No description yet.*

### Array[SkillNode] get_dependent_nodes( node_id: int ) {#method-get-dependent-nodes}

Get all nodes that have this node as a prerequisite

### Array[SkillNode] get_mutually_exclusive_nodes( node_id: int ) {#method-get-mutually-exclusive-nodes}

*No description yet.*

### Array[SkillNode] get_root_nodes() {#method-get-root-nodes}

Get all nodes that have no prerequisites

### Array[SkillNode] get_leaf_nodes() {#method-get-leaf-nodes}

Get all nodes that have no dependent nodes

### bool has_cycles() {#method-has-cycles}

Check if the skill tree has circular dependencies

### int get_max_depth() {#method-get-max-depth}

Get the maximum depth of the skill tree

### Array[SkillNode] get_nodes_by_point_pool( pool_id: int ) {#method-get-nodes-by-point-pool}

Get all nodes that use a specific point pool

### Array[int] get_used_point_pools() {#method-get-used-point-pools}

Get all point pool IDs used by nodes in this tree

### void set_node_position( node_id: int, position: Vector2 ) {#method-set-node-position}

Store node position in visual layout data and update the node itself

### Vector2 get_node_position( node_id: int ) {#method-get-node-position}

Get node position from visual layout data

### String get_summary() {#method-get-summary}

*No description yet.*

### Dictionary get_detailed_info() {#method-get-detailed-info}

Get detailed information about the tree structure

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### bool is_valid() {#method-is-valid}

*No description yet.*


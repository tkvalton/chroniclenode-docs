<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillNode

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ChoiceSkillNode](/advanced/abilities-and-effects/skill-trees/choice-skill-node), [RankedSkillNode](/advanced/abilities-and-effects/skill-trees/ranked-skill-node)

Base class for all skill node types

## Properties

| | | |
|---|---|---|
| `int` | [id](#prop-id) |  |
| `String` | [display_name](#prop-display-name) | `""` |
| `String` | [description](#prop-description) | `""` |
| `CompressedTexture2D` | [icon](#prop-icon) |  |
| `int` | [required_point_pool](#prop-required-point-pool) | `0  # Which pool to spend from (0 = no pool required)` |
| `bool` | [can_refund](#prop-can-refund) | `true  # Whether this node can be refunded` |
| `Array[int]` | [required_nodes](#prop-required-nodes) | `[]  # Node IDs that must be unlocked first` |
| `int` | [required_level](#prop-required-level) | `1` |
| `int` | [required_points_in_tree](#prop-required-points-in-tree) | `0  # Minimum points spent in this tree to unlock` |
| `Array[int]` | [mutually_exclusive_nodes](#prop-mutually-exclusive-nodes) | `[]  # Can't have both` |
| `Vector2` | [editor_position](#prop-editor-position) | `Vector2.ZERO` |
| `Color` | [node_color](#prop-node-color) | `Color.WHITE` |

## Methods

| | |
|---|---|
| `int` | [get_max_ranks](#method-get-max-ranks)() |
| `int` | [get_point_cost_for_rank](#method-get-point-cost-for-rank)( `rank: int` ) |
| `bool` | [apply_rewards_for_rank](#method-apply-rewards-for-rank)( `player: Player, rank: int` ) |
| `Array` | [get_rewards_for_rank](#method-get-rewards-for-rank)( `rank: int` ) |
| `int` | [get_total_point_cost_through_rank](#method-get-total-point-cost-through-rank)( `target_rank: int` ) |
| `bool` | [has_node_prerequisite](#method-has-node-prerequisite)( `node_id_to_check: int` ) |
| `void` | [add_node_prerequisite](#method-add-node-prerequisite)( `prereq_node_id: int` ) |
| `bool` | [remove_node_prerequisite](#method-remove-node-prerequisite)( `prereq_node_id: int` ) |
| `void` | [add_mutually_exclusive_node](#method-add-mutually-exclusive-node)( `exclusive_node_id: int` ) |
| `bool` | [remove_mutually_exclusive_node](#method-remove-mutually-exclusive-node)( `exclusive_node_id: int` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

### int id {#prop-id}

*No description yet.*

### String display_name = "" {#prop-display-name}

*No description yet.*

### String description = "" {#prop-description}

*No description yet.*

### CompressedTexture2D icon {#prop-icon}

*No description yet.*

### int required_point_pool = 0  # Which pool to spend from (0 = no pool required) {#prop-required-point-pool}

*No description yet.*

### bool can_refund = true  # Whether this node can be refunded {#prop-can-refund}

*No description yet.*

### Array[int] required_nodes = []  # Node IDs that must be unlocked first {#prop-required-nodes}

*No description yet.*

### int required_level = 1 {#prop-required-level}

*No description yet.*

### int required_points_in_tree = 0  # Minimum points spent in this tree to unlock {#prop-required-points-in-tree}

*No description yet.*

### Array[int] mutually_exclusive_nodes = []  # Can't have both {#prop-mutually-exclusive-nodes}

*No description yet.*

### Vector2 editor_position = Vector2.ZERO {#prop-editor-position}

*No description yet.*

### Color node_color = Color.WHITE {#prop-node-color}

*No description yet.*

## Method descriptions

### int get_max_ranks() {#method-get-max-ranks}

Override in child classes to return maximum ranks for this node

### int get_point_cost_for_rank( rank: int ) {#method-get-point-cost-for-rank}

Override in child classes to return point cost for specific rank

### bool apply_rewards_for_rank( player: Player, rank: int ) {#method-apply-rewards-for-rank}

Override in child classes to apply rewards for specific rank

### Array get_rewards_for_rank( rank: int ) {#method-get-rewards-for-rank}

Override in child classes to return rewards for specific rank

### int get_total_point_cost_through_rank( target_rank: int ) {#method-get-total-point-cost-through-rank}

Calculate total cost to reach a specific rank (uses child class implementation)

### bool has_node_prerequisite( node_id_to_check: int ) {#method-has-node-prerequisite}

*No description yet.*

### void add_node_prerequisite( prereq_node_id: int ) {#method-add-node-prerequisite}

*No description yet.*

### bool remove_node_prerequisite( prereq_node_id: int ) {#method-remove-node-prerequisite}

*No description yet.*

### void add_mutually_exclusive_node( exclusive_node_id: int ) {#method-add-mutually-exclusive-node}

*No description yet.*

### bool remove_mutually_exclusive_node( exclusive_node_id: int ) {#method-remove-mutually-exclusive-node}

*No description yet.*

### String get_summary() {#method-get-summary}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### bool is_valid() {#method-is-valid}

*No description yet.*


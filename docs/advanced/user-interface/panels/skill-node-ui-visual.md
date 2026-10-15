<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillNodeUIVisual

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Visual representation of a skill node for player UI (runtime) Follows ActionBarButton pattern - simple icon + border with modulate changes

## Variables

| | | |
|---|---|---|
| `SkillNode` | [skill_node](#var-skill-node) |  |
| `SkillTreeInstance` | [tree_instance](#var-tree-instance) |  |
| `Dictionary` | [pool_instances](#var-pool-instances) | `{}` |
| `Player` | [current_player](#var-current-player) |  |
| `NodeState` | [current_state](#var-current-state) | `NodeState.LOCKED` |
| `int` | [current_rank](#var-current-rank) | `0` |
| `int` | [max_ranks](#var-max-ranks) | `1` |

## Methods

| | |
|---|---|
| `void` | [set_node_data](#method-set-node-data)( `node: SkillNode, instance: SkillTreeInstance, pools: Dictionary, player: Player` ) |
| `void` | [update_state](#method-update-state)() |
| `int` | [get_required_points](#method-get-required-points)() |
| `int` | [get_required_pool](#method-get-required-pool)() |
| `bool` | [can_afford_next_rank](#method-can-afford-next-rank)() |
| `SkillNode` | [get_node_data](#method-get-node-data)() |
| `Vector2` | [get_center_position](#method-get-center-position)() |
| `NodeState` | [get_current_state](#method-get-current-state)() |
| `bool` | [is_interactable](#method-is-interactable)() |

## Signals

### node_clicked( node: SkillNode ) {#signal-node-clicked}

========== SIGNALS ==========

### node_right_clicked( node: SkillNode ) {#signal-node-right-clicked}

Emitted when the node is right clicked (to refund it).

### node_hover_started( node: SkillNode ) {#signal-node-hover-started}

Emitted when the mouse enters the node.

### node_hover_ended( node: SkillNode ) {#signal-node-hover-ended}

Emitted when the mouse leaves the node.

## Enumerations

### enum NodeState {#enum-nodestate}

========== NODE STATES ==========

- **LOCKED** = `0`
- **AVAILABLE** = `1`
- **UNLOCKED** = `2`
- **MAXED** = `3`

## Constants

- `Vector2` **NODE_SIZE** = `Vector2(50, 50)` - ========== VISUAL CONSTANTS ==========
- `Color` **BORDER_LOCKED** = `Color(0.3, 0.3, 0.3, 1.0)         # Dark gray` - ========== COLORS ==========
- `Color` **BORDER_AVAILABLE** = `Color(1.0, 0.9, 0.3, 1.0)` - Bright gold
- `Color` **BORDER_UNLOCKED** = `Color(0.4, 0.9, 0.5, 1.0)` - Bright green
- `Color` **BORDER_MAXED** = `Color(0.4, 0.9, 1.0, 1.0)` - Bright cyan
- `Color` **BORDER_INSUFFICIENT** = `Color(0.6, 0.5, 0.3, 1.0)` - Dim gold
- `Color` **ICON_LOCKED_MODULATE** = `Color(0.4, 0.4, 0.4, 1.0)` - Dimmed
- `Color` **ICON_NORMAL_MODULATE** = `Color(1.0, 1.0, 1.0, 1.0)` - Normal
- `Color` **ICON_HOVER_MODULATE** = `Color(1.2, 1.2, 1.2, 1.0)` - Brighter on hover

## Variable descriptions

### SkillNode skill_node {#var-skill-node}

========== PROPERTIES ==========

### SkillTreeInstance tree_instance {#var-tree-instance}

The tree the node belongs to.

### Dictionary pool_instances =  {#var-pool-instances}

pool_id -&gt; SkillPointPoolInstance

### Player current_player {#var-current-player}

The player who owns the tree.

### NodeState current_state = NodeState.LOCKED {#var-current-state}

The state of the node (locked, available, taken ...).

### int current_rank = 0 {#var-current-rank}

The rank taken.

### int max_ranks = 1 {#var-max-ranks}

The most ranks the node has.

## Method descriptions

### void set_node_data( node: SkillNode, instance: SkillTreeInstance, pools: Dictionary, player: Player ) {#method-set-node-data}

Set the node data and instances for this visual

### void update_state() {#method-update-state}

Update the state and refresh visual

### int get_required_points() {#method-get-required-points}

Get the cost for the next rank

### int get_required_pool() {#method-get-required-pool}

Get the pool ID required for this node

### bool can_afford_next_rank() {#method-can-afford-next-rank}

Check if player can afford the next rank

### SkillNode get_node_data() {#method-get-node-data}

========== UTILITY METHODS ==========

### Vector2 get_center_position() {#method-get-center-position}

The center of the node on its canvas.

### NodeState get_current_state() {#method-get-current-state}

Get the current state for external queries

### bool is_interactable() {#method-is-interactable}

Check if this node is interactable


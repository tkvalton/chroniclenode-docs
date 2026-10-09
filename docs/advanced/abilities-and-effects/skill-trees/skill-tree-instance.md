<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillTreeInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Runtime instance tracking state of a skill tree for a player

## Variables

| | | |
|---|---|---|
| `SkillTree` | [tree_definition](#var-tree-definition) |  |
| `Dictionary` | [node_states](#var-node-states) | `{}` |

## Methods

| | |
|---|---|
| `SkillTreeInstance` | [create_from_definition](#method-create-from-definition)( `tree_def: SkillTree` ) *static* |
| `int` | [get_tree_id](#method-get-tree-id)() |
| `String` | [get_tree_name](#method-get-tree-name)() |
| `bool` | [is_node_unlocked](#method-is-node-unlocked)( `node_id: int` ) |
| `int` | [get_node_rank](#method-get-node-rank)( `node_id: int` ) |
| `int` | [get_node_choice](#method-get-node-choice)( `node_id: int` ) |
| `int` | [get_total_nodes_unlocked](#method-get-total-nodes-unlocked)() |
| `Array[int]` | [get_unlocked_node_ids](#method-get-unlocked-node-ids)() |
| `int` | [get_total_points_spent](#method-get-total-points-spent)() |
| `int` | [get_total_points_spent_from_pool](#method-get-total-points-spent-from-pool)( `pool_id: int` ) |
| `Dictionary` | [get_points_spent_by_pool](#method-get-points-spent-by-pool)() |
| `Dictionary` | [can_unlock_node](#method-can-unlock-node)( `node_id: int, player: Player = null` ) |
| `Array[SkillNode]` | [get_available_nodes](#method-get-available-nodes)( `player: Player` ) |
| `bool` | [unlock_node_rank](#method-unlock-node-rank)( `node_id: int, choice_index: int = -1, player: Player = null` ) |
| `bool` | [refund_node_rank](#method-refund-node-rank)( `node_id: int, player: Player = null, full_refund: bool = false` ) |
| `Dictionary` | [can_refund_node](#method-can-refund-node)( `node_id: int` ) |
| `void` | [reset_all_nodes](#method-reset-all-nodes)( `player: Player = null` ) |
| `bool` | [change_choice_node_selection](#method-change-choice-node-selection)( `node_id: int, new_choice_index: int, player: Player` ) |
| `bool` | [apply_node_rewards](#method-apply-node-rewards)( `node_id: int, rank: int, player: Player` ) |
| `bool` | [unapply_node_rewards](#method-unapply-node-rewards)( `node_id: int, rank: int, player: Player` ) |
| `Dictionary` | [can_respec_node](#method-can-respec-node)( `node_id: int` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [restore_from_save_data](#method-restore-from-save-data)( `save_data: Dictionary, player: Player = null` ) |
| `SkillTreeInstance` | [from_save_data](#method-from-save-data)( `save_data: Dictionary, tree_def: SkillTree, player: Player = null` ) *static* |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |

## Variable descriptions

### SkillTree tree_definition {#var-tree-definition}

The tree definition this instance tracks

### Dictionary node_states =  {#var-node-states}

Tracks the state of each node: node_id -&gt; NodeUnlockState

## Method descriptions

### SkillTreeInstance create_from_definition( tree_def: SkillTree ) {#method-create-from-definition}

Factory method to create a new instance from a tree definition

### int get_tree_id() {#method-get-tree-id}

Get the tree ID this instance tracks

### String get_tree_name() {#method-get-tree-name}

Get the display name of this tree

### bool is_node_unlocked( node_id: int ) {#method-is-node-unlocked}

Check if a node has been unlocked

### int get_node_rank( node_id: int ) {#method-get-node-rank}

Get current rank of a node (0 = not unlocked)

### int get_node_choice( node_id: int ) {#method-get-node-choice}

Get the choice index selected for a ChoiceSkillNode (-1 = no choice made)

### int get_total_nodes_unlocked() {#method-get-total-nodes-unlocked}

Get total count of unlocked nodes

### Array[int] get_unlocked_node_ids() {#method-get-unlocked-node-ids}

Get array of all unlocked node IDs

### int get_total_points_spent() {#method-get-total-points-spent}

Calculate total points spent across all nodes

### int get_total_points_spent_from_pool( pool_id: int ) {#method-get-total-points-spent-from-pool}

Get total points spent from a specific pool in this tree

### Dictionary get_points_spent_by_pool() {#method-get-points-spent-by-pool}

Get breakdown of points spent per pool in this tree

### Dictionary can_unlock_node( node_id: int, player: Player = null ) {#method-can-unlock-node}

Check if a node can be unlocked Returns a dictionary with:

- can_unlock: bool
- reason: String (if can_unlock is false)

### Array[SkillNode] get_available_nodes( player: Player ) {#method-get-available-nodes}

Get all nodes that can currently be unlocked

### bool unlock_node_rank( node_id: int, choice_index: int = -1, player: Player = null ) {#method-unlock-node-rank}

Unlock the next rank of a node For ChoiceSkillNode, choice_index must be provided on first unlock If player is provided, rewards will be automatically applied Returns true if successful

### bool refund_node_rank( node_id: int, player: Player = null, full_refund: bool = false ) {#method-refund-node-rank}

Refund one rank from a node (or all ranks if full_refund is true) If player is provided, rewards will be automatically unapplied Returns true if successful

### Dictionary can_refund_node( node_id: int ) {#method-can-refund-node}

Check if a node can be refunded Returns a dictionary with:

- can_refund: bool
- reason: String (if can_refund is false)

### void reset_all_nodes( player: Player = null ) {#method-reset-all-nodes}

Reset all nodes to unspent state (full tree respec) If player is provided, all rewards will be unapplied

### bool change_choice_node_selection( node_id: int, new_choice_index: int, player: Player ) {#method-change-choice-node-selection}

Change the selected choice for an already-unlocked ChoiceSkillNode This is a respec operation - unapplies old choice rewards and applies new ones Returns true if successful

### bool apply_node_rewards( node_id: int, rank: int, player: Player ) {#method-apply-node-rewards}

Apply rewards for unlocking a node rank Called automatically by unlock_node_rank if player is provided Returns true if all rewards were successfully applied

### bool unapply_node_rewards( node_id: int, rank: int, player: Player ) {#method-unapply-node-rewards}

Unapply rewards when refunding a node rank Called automatically by refund_node_rank if player is provided Returns true if all rewards were successfully removed

### Dictionary can_respec_node( node_id: int ) {#method-can-respec-node}

Check if a node can be fully refunded (all rewards support unapply) Returns a Dictionary with:

- "can_respec": bool
- "reason": String (if can_respec is false)
- "non_reversible_rewards": Array[String] (summaries of rewards that can't be removed)

### Dictionary to_save_data() {#method-to-save-data}

Convert instance to save data

### void restore_from_save_data( save_data: Dictionary, player: Player = null ) {#method-restore-from-save-data}

Restore state from save data into this existing instance Use this instead of from_save_data() when instance already exists

### SkillTreeInstance from_save_data( save_data: Dictionary, tree_def: SkillTree, player: Player = null ) {#method-from-save-data}

Create instance from save data (legacy/factory method) Prefer using restore_from_save_data() on existing instances

### Array[Dictionary] validate() {#method-validate}

Validate the instance state

### bool is_valid() {#method-is-valid}

Check if instance is in a valid state


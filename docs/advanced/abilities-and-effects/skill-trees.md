# Skill trees: how they are built

The [Skill Trees chapter](/basic/abilities-and-effects/skill-trees) explains the editor. A skill tree is a good example of the toolkit's split between a **definition** (the tree as the designer made it) and an **instance** (what one character has done with it): see [Definitions and instances](/advanced/definitions-and-instances).

| Definition (a resource, shared, never changed in play) | Instance (a `RefCounted`, one per character) |
|---|---|
| [`SkillTree`](/advanced/abilities-and-effects/skill-trees/skill-tree), database type `skill_tree` | [`SkillTreeInstance`](/advanced/abilities-and-effects/skill-trees/skill-tree-instance) |
| [`SkillPointPool`](/advanced/abilities-and-effects/skill-trees/skill-point-pool), database type `skill_pool` | [`SkillPointPoolInstance`](/advanced/abilities-and-effects/skill-trees/skill-point-pool-instance) |
| [`SkillNode`](/advanced/abilities-and-effects/skill-trees/skill-node), [`RankedSkillNode`](/advanced/abilities-and-effects/skill-trees/ranked-skill-node), [`ChoiceSkillNode`](/advanced/abilities-and-effects/skill-trees/choice-skill-node) | `NodeUnlockState`, an inner class of the tree instance |
| [`SkillConnection`](/advanced/abilities-and-effects/skill-trees/skill-connection) | (none: connections only matter to the rules) |

## The definition

`SkillTree` holds `skill_nodes: Array[SkillNode]`, `node_connections: Array[SkillConnection]`, the look of the tree (`background_texture`, `background_color`, `tree_tint_color`) and `visual_layout_data` for the editor. It answers structural questions: `get_node_by_id`, `get_prerequisite_nodes`, `get_dependent_nodes`, `get_mutually_exclusive_nodes`, `get_root_nodes`, `get_leaf_nodes`, `has_cycles`, `get_max_depth`, `get_nodes_by_point_pool`. `validate()` reports the problems the editor's **Validate** button lists.

`SkillNode` is the base. It has an `id` (unique inside the tree, not in the database), the display fields, `required_point_pool`, `can_refund`, `required_nodes`, `required_level`, `required_points_in_tree`, `mutually_exclusive_nodes` and the editor position. The base node has one rank and no rewards; the editor offers its two subclasses:

| Class | Adds |
|---|---|
| `RankedSkillNode` | `max_ranks`, `point_costs_per_rank`, `rewards_per_rank: Array[Array]` (`rewards_per_rank[0]` is rank 1) |
| `ChoiceSkillNode` | `point_cost`, `choice_options: Array[Array]` (the rewards of each option), `choice_icons`. Always one rank |

All three answer the same questions (`get_max_ranks()`, `get_point_cost_for_rank(rank)`, `get_rewards_for_rank(rank)`, `get_total_point_cost_through_rank(rank)`), so the instance does not care which kind it holds.

A `SkillConnection` has `from_node_id`, `to_node_id`, `connection_type` (`PREREQUISITE`, `VISUAL_ONLY`, `MUTUAL_EXCLUSIVE`) and its line style.

## The instance

`Player._initialize_skill_trees` makes a `SkillTreeInstance` for each tree of the player's class (`SkillTreeInstance.create_from_definition`), and a `SkillPointPoolInstance` for every `skill_pool` in the database. Reach them with `player.get_skill_tree_instance(tree_id)` and `player.get_skill_point_pool_instance(pool_id)`.

`SkillTreeInstance` keeps `node_states: Dictionary` (node id -> `NodeUnlockState`). A state holds `current_rank`, `choice_index` (for a choice node) and `applied_rewards_by_rank`: for every rank, the reward records (`reward`, `reward_index`, `tracking_data`, `applied_at`) so that a refund can undo exactly what was given.

`SkillPointPoolInstance` keeps `total_points_earned` and `points_spent`; `get_available_points()` is the difference. A pool with `max_total_points` caps what can be earned (`is_at_cap`, `get_remaining_capacity`).

### The calls

Use the `Player` wrappers; they do the checks the tree instance leaves to its caller.

| Call | What it does |
|---|---|
| `player.can_unlock_skill_node(tree_id, node_id)` | `{"can_unlock": bool, "reason": String}`: rank, level, points in the tree, prerequisites (connections and `required_nodes`), exclusions |
| `player.unlock_skill_node(tree_id, node_id, choice_index = -1)` | Checks `can_unlock_node`, then `SkillTreeInstance.unlock_node_rank`: spends the points, raises the rank, applies the rewards. If the rewards fail the rank and the points are rolled back |
| `player.refund_skill_node(tree_id, node_id, full_refund = false)` | `refund_node_rank`: unapplies the rewards of the rank (last applied, first removed), lowers the rank, gives the points back. Check `can_refund_node(node_id)` first: it refuses a node with `can_refund` off or one that an unlocked node depends on |
| `player.reset_skill_tree(tree_id)` | `reset_all_nodes`: refunds everything, per pool |
| `player.has_skill_node_unlocked`, `get_skill_node_rank` | Reads |
| `player.add_skill_points_to_pool(pool_id, n)`, `remove_skill_points_from_pool`, `get_available_skill_points` | The points; `SkillPointReward` calls the first |
| `SkillTreeInstance.change_choice_node_selection(node_id, index, player)` | Unapplies the old option, applies the new, rolls back on failure |
| `SkillTreeInstance.can_respec_node(node_id)` | Lists the applied rewards that do not support `unapply` |
| `SkillTreeInstance.get_available_nodes(player)` | The nodes that can be unlocked now |

Rewards are given with `player.grant_reward(reward)`, the same call quests use, so a reward that needs room in the bag waits and is not tracked. The reward classes decide whether they can be undone (`supports_unapply`, `unapply_from_player`); the tracking data they return (an instance id, the pool and points of a `SkillPointReward`) is what a refund needs.

## Saving

`SkillTreeInstance.to_save_data()` writes the states; `restore_from_save_data(data, player)` reads them back, finds each reward again by its index in the node (a resource cannot go into a JSON save) and re-applies the rewards that must be given again after a load (`should_apply_on_load`). Numbers come back from JSON as floats, so ids and ranks are converted to integers. The tree definitions are not in the save: a changed tree keeps working as long as its node ids stay.

## Extending

- A new reward type (give a stat, unlock a mount) is a `Reward`: implement `apply_to_player` returning tracking data, and `supports_unapply` and `unapply_from_player` if it can be undone. It appears in the node's reward list.
- A new kind of node extends `SkillNode`: override the max rank, the cost and `get_rewards_for_rank`. The editor offers only the two built-in kinds; add yours to the node type list in `skill_node_properties_editor.gd`.

## The classes

<!-- classes:abilities-and-effects/skill-trees -->
| Class | What it is |
|---|---|
| [ChoiceSkillNode](/advanced/abilities-and-effects/skill-trees/choice-skill-node) | Single-rank skill node where player chooses between multiple reward options |
| [RankedSkillNode](/advanced/abilities-and-effects/skill-trees/ranked-skill-node) | Multi-rank skill node with sequential rewards per rank |
| [SkillConnection](/advanced/abilities-and-effects/skill-trees/skill-connection) | Visual and logical links between skill nodes |
| [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node) | Base class for all skill node types |
| [SkillPointPool](/advanced/abilities-and-effects/skill-trees/skill-point-pool) | Point management for different skill point sources |
| [SkillPointPoolInstance](/advanced/abilities-and-effects/skill-trees/skill-point-pool-instance) | Runtime instance tracking state of a skill point pool for a player |
| [SkillTree](/advanced/abilities-and-effects/skill-trees/skill-tree) | Main container for skill trees with nodes and connections |
| [SkillTreeInstance](/advanced/abilities-and-effects/skill-trees/skill-tree-instance) | Runtime instance tracking state of a skill tree for a player |
<!-- /classes -->

<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RankedSkillNode

**Inherits:** [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Multi-rank skill node with sequential rewards per rank

## Properties

| | | |
|---|---|---|
| `Array[int]` | [point_costs_per_rank](#prop-point-costs-per-rank) | `[1]  # Cost for each rank [rank1, rank2, rank3...]` |
| `int` | [max_ranks](#prop-max-ranks) | `1` |
| `Array[Array]` | [rewards_per_rank](#prop-rewards-per-rank) | `[]` |

## Methods

| | |
|---|---|
| `int` | [get_max_ranks](#method-get-max-ranks)() |
| `int` | [get_point_cost_for_rank](#method-get-point-cost-for-rank)( `rank: int` ) |
| `Array` | [get_rewards_for_rank](#method-get-rewards-for-rank)( `rank: int` ) |
| `void` | [add_reward_to_rank](#method-add-reward-to-rank)( `rank: int, reward: Reward` ) |
| `bool` | [remove_reward_from_rank](#method-remove-reward-from-rank)( `rank: int, reward: Reward` ) |
| `void` | [clear_rewards_for_rank](#method-clear-rewards-for-rank)( `rank: int` ) |
| `int` | [get_total_rewards_count](#method-get-total-rewards-count)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### Array[int] point_costs_per_rank {#prop-point-costs-per-rank}

========== RANKED NODE PROPERTIES ==========

### int max_ranks = 1 {#prop-max-ranks}

How many times can be taken

### Array[Array] rewards_per_rank = [] {#prop-rewards-per-rank}

rewards_per_rank[0] = rank 1 rewards

## Method descriptions

### int get_max_ranks() {#method-get-max-ranks}

========== IMPLEMENTATION OF ABSTRACT METHODS ==========

### int get_point_cost_for_rank( rank: int ) {#method-get-point-cost-for-rank}

The skill points the node costs for a rank (the first rank is 1).

### Array get_rewards_for_rank( rank: int ) {#method-get-rewards-for-rank}

The rewards of a rank (the first rank is 1).

### void add_reward_to_rank( rank: int, reward: Reward ) {#method-add-reward-to-rank}

========== REWARD MANAGEMENT ==========

### bool remove_reward_from_rank( rank: int, reward: Reward ) {#method-remove-reward-from-rank}

Takes a reward off a rank. False when it was not there.

### void clear_rewards_for_rank( rank: int ) {#method-clear-rewards-for-rank}

Removes every reward of a rank.

### int get_total_rewards_count() {#method-get-total-rewards-count}

How many rewards the node has over all its ranks.

### Array[Dictionary] validate() {#method-validate}

========== VALIDATION ==========


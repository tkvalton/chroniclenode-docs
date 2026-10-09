<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RankedSkillNode

**Inherits:** [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Multi-rank skill node with sequential rewards per rank

## Properties

| | | |
|---|---|---|
| `Array[int]` | [point_costs_per_rank](#prop-point-costs-per-rank) | `[1]  # Cost for each rank [rank1, rank2, rank3...]` |
| `int` | [max_ranks](#prop-max-ranks) | `1  # How many times can be taken` |
| `Array[Array]` | [rewards_per_rank](#prop-rewards-per-rank) | `[]  # rewards_per_rank[0] = rank 1 rewards` |

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

*No description yet.*

### int max_ranks = 1  # How many times can be taken {#prop-max-ranks}

*No description yet.*

### Array[Array] rewards_per_rank = []  # rewards_per_rank[0] = rank 1 rewards {#prop-rewards-per-rank}

*No description yet.*

## Method descriptions

### int get_max_ranks() {#method-get-max-ranks}

Override in child classes to return maximum ranks for this node *(from [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node))*

### int get_point_cost_for_rank( rank: int ) {#method-get-point-cost-for-rank}

Override in child classes to return point cost for specific rank *(from [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node))*

### Array get_rewards_for_rank( rank: int ) {#method-get-rewards-for-rank}

Override in child classes to return rewards for specific rank *(from [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node))*

### void add_reward_to_rank( rank: int, reward: Reward ) {#method-add-reward-to-rank}

*No description yet.*

### bool remove_reward_from_rank( rank: int, reward: Reward ) {#method-remove-reward-from-rank}

*No description yet.*

### void clear_rewards_for_rank( rank: int ) {#method-clear-rewards-for-rank}

*No description yet.*

### int get_total_rewards_count() {#method-get-total-rewards-count}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*Overrides this function of [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node).*


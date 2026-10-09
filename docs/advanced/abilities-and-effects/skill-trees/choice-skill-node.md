<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChoiceSkillNode

**Inherits:** [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Single-rank skill node where player chooses between multiple reward options

## Properties

| | | |
|---|---|---|
| `int` | [point_cost](#prop-point-cost) | `1  # Single cost since max rank is always 1` |
| `Array[Array]` | [choice_options](#prop-choice-options) | `[]  # Each element is an array of rewards for that choice` |
| `Array[CompressedTexture2D]` | [choice_icons](#prop-choice-icons) | `[]  # Icon for each choice option` |

## Methods

| | |
|---|---|
| `int` | [get_max_ranks](#method-get-max-ranks)() |
| `int` | [get_point_cost_for_rank](#method-get-point-cost-for-rank)( `rank: int` ) |
| `int` | [get_choice_count](#method-get-choice-count)() |
| `Array[Array]` | [get_choice_options](#method-get-choice-options)() |
| `Array` | [get_choice_option](#method-get-choice-option)( `choice_index: int` ) |
| `CompressedTexture2D` | [get_choice_icon](#method-get-choice-icon)( `choice_index: int` ) |
| `void` | [set_choice_icon](#method-set-choice-icon)( `choice_index: int, icon: CompressedTexture2D` ) |
| `void` | [add_choice_option](#method-add-choice-option)( `rewards: Array, icon: CompressedTexture2D = null` ) |
| `bool` | [remove_choice_option](#method-remove-choice-option)( `choice_index: int` ) |
| `void` | [clear_choice_options](#method-clear-choice-options)() |
| `bool` | [apply_choice](#method-apply-choice)( `player: Player, choice_index: int` ) |
| `String` | [get_choice_summary](#method-get-choice-summary)( `choice_index: int` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int point_cost = 1  # Single cost since max rank is always 1 {#prop-point-cost}

*No description yet.*

### Array[Array] choice_options = []  # Each element is an array of rewards for that choice {#prop-choice-options}

*No description yet.*

### Array[CompressedTexture2D] choice_icons = []  # Icon for each choice option {#prop-choice-icons}

*No description yet.*

## Method descriptions

### int get_max_ranks() {#method-get-max-ranks}

Override in child classes to return maximum ranks for this node *(from [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node))*

### int get_point_cost_for_rank( rank: int ) {#method-get-point-cost-for-rank}

Override in child classes to return point cost for specific rank *(from [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node))*

### int get_choice_count() {#method-get-choice-count}

*No description yet.*

### Array[Array] get_choice_options() {#method-get-choice-options}

*No description yet.*

### Array get_choice_option( choice_index: int ) {#method-get-choice-option}

*No description yet.*

### CompressedTexture2D get_choice_icon( choice_index: int ) {#method-get-choice-icon}

*No description yet.*

### void set_choice_icon( choice_index: int, icon: CompressedTexture2D ) {#method-set-choice-icon}

*No description yet.*

### void add_choice_option( rewards: Array, icon: CompressedTexture2D = null ) {#method-add-choice-option}

*No description yet.*

### bool remove_choice_option( choice_index: int ) {#method-remove-choice-option}

*No description yet.*

### void clear_choice_options() {#method-clear-choice-options}

*No description yet.*

### bool apply_choice( player: Player, choice_index: int ) {#method-apply-choice}

*No description yet.*

### String get_choice_summary( choice_index: int ) {#method-get-choice-summary}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*Overrides this function of [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node).*


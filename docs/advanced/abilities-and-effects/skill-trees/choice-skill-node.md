<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChoiceSkillNode

**Inherits:** [SkillNode](/advanced/abilities-and-effects/skill-trees/skill-node) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Single-rank skill node where player chooses between multiple reward options

## Properties

| | | |
|---|---|---|
| `int` | [point_cost](#prop-point-cost) | `1  # Single cost since max rank is always 1` |
| `Array[Array]` | [choice_options](#prop-choice-options) | `[]` |
| `Array[CompressedTexture2D]` | [choice_icons](#prop-choice-icons) | `[]` |

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

========== CHOICE NODE PROPERTIES ==========

### Array[Array] choice_options = [] {#prop-choice-options}

Each element is an array of rewards for that choice

### Array[CompressedTexture2D] choice_icons = [] {#prop-choice-icons}

Icon for each choice option

## Method descriptions

### int get_max_ranks() {#method-get-max-ranks}

========== IMPLEMENTATION OF ABSTRACT METHODS ==========

### int get_point_cost_for_rank( rank: int ) {#method-get-point-cost-for-rank}

The skill points the node costs (a choice node has one rank).

### int get_choice_count() {#method-get-choice-count}

========== CHOICE-SPECIFIC METHODS ==========

### Array[Array] get_choice_options() {#method-get-choice-options}

The options of the node: the rewards of each.

### Array get_choice_option( choice_index: int ) {#method-get-choice-option}

The rewards of one option.

### CompressedTexture2D get_choice_icon( choice_index: int ) {#method-get-choice-icon}

The icon of one option.

### void set_choice_icon( choice_index: int, icon: CompressedTexture2D ) {#method-set-choice-icon}

Sets the icon of one option.

### void add_choice_option( rewards: Array, icon: CompressedTexture2D = null ) {#method-add-choice-option}

Adds an option with its rewards and icon.

### bool remove_choice_option( choice_index: int ) {#method-remove-choice-option}

Removes an option. False when the number is not valid.

### void clear_choice_options() {#method-clear-choice-options}

Removes every option.

### bool apply_choice( player: Player, choice_index: int ) {#method-apply-choice}

Old way to give an option to a player (use SkillTreeInstance.apply_node_rewards).

### String get_choice_summary( choice_index: int ) {#method-get-choice-summary}

A short text about what an option gives.

### Array[Dictionary] validate() {#method-validate}

========== VALIDATION ==========


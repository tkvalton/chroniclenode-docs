<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementSkillNode

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Needs a node of a skill tree to be unlocked (a rank of it, or one choice of a choice node), or needs that it is NOT. A choice node that picks the specialization ("Fire, Frost or Arcane") and a tree of each specialization that needs that choice is how a class has a tree for the specialization it picked.

## Properties

| | | |
|---|---|---|
| `int` | [tree_id](#prop-tree-id) | `0` |
| `int` | [node_id](#prop-node-id) | `0` |
| `int` | [min_rank](#prop-min-rank) | `1` |
| `int` | [choice_index](#prop-choice-index) | `-1` |
| `bool` | [must_have](#prop-must-have) | `true` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `_entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int tree_id = 0 {#prop-tree-id}

The skill tree (an id of the skill_tree type)

### int node_id = 0 {#prop-node-id}

The node in that tree

### int min_rank = 1 {#prop-min-rank}

The rank the node must have (1 = unlocked)

### int choice_index = -1 {#prop-choice-index}

For a choice node: the option that must be picked (-1 = any option)

### bool must_have = true {#prop-must-have}

On: the node must be unlocked. Off: it must not be

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Does the entity meet the requirement?

### String get_failure_message( _entity: Entity ) {#method-get-failure-message}

The reason shown when the entity does not meet the requirement.

### String get_summary() {#method-get-summary}

A short text about the requirement and its settings.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the requirement. Gives the problems found (empty when it is fine).


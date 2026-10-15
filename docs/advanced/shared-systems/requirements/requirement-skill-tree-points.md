<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementSkillTreePoints

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Needs a number of points spent in a skill tree of the player (and optionally not more than a number). Put it on a skill tree to lock the tree until another has points ("the second tree opens at 31 points in the first"), or on anything that asks for requirements.

## Properties

| | | |
|---|---|---|
| `int` | [tree_id](#prop-tree-id) | `0` |
| `int` | [min_points](#prop-min-points) | `1` |
| `int` | [max_points](#prop-max-points) | `-1` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int tree_id = 0 {#prop-tree-id}

The skill tree (an id of the skill_tree type)

### int min_points = 1 {#prop-min-points}

At least this many points spent in the tree

### int max_points = -1 {#prop-max-points}

At most this many points spent in the tree (-1 = no ceiling; 0 with a minimum of 0 means "no points in it")

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Does the entity meet the requirement?

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

The reason shown when the entity does not meet the requirement.

### String get_summary() {#method-get-summary}

A short text about the requirement and its settings.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the requirement. Gives the problems found (empty when it is fine).


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementKnowsRecipe

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Needs the character to know a crafting recipe (learned, or given by the profession, or by a specialization).

## Properties

| | | |
|---|---|---|
| `int` | [recipe_id](#prop-recipe-id) | `0` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `_entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int recipe_id = 0 {#prop-recipe-id}

The recipe

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Does the entity meet the requirement?

### String get_failure_message( _entity: Entity ) {#method-get-failure-message}

The reason shown when the entity does not meet the requirement.

### String get_summary() {#method-get-summary}

A short text about the requirement and its settings.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the requirement. Gives the problems found (empty when it is fine).


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementKnowsAbility

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Needs the entity to have an ability, optionally at a rank: "needs Fireball to learn Fireball II".

## Description

(RequirementAbilityRank asks about the rank of the ability that an effect belongs to; this one asks whether the entity has an ability at all.)

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) | `0` |
| `int` | [min_rank](#prop-min-rank) | `1` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int ability_id = 0 {#prop-ability-id}

The ability

### int min_rank = 1 {#prop-min-rank}

The lowest rank (1 = any rank)

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### Array[Dictionary] validate() {#method-validate}

Configuration problems of this requirement, as a list of &#123;"type", "message", "severity"&#125; ("warning" or "error"). An empty list is fine. Types override it to point out settings that make them useless. RequirementChecker.validate_requirements collects them for the editor *(from [Requirement](/advanced/shared-systems/requirements/requirement))*


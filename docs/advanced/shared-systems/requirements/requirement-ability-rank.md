<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementAbilityRank

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Needs the ability that uses the effect to be at a rank: put it on an effect of an ability so that rank 3 adds the burn and rank 5 the second projectile.

## Description

Only an effect that an ability uses has a rank to ask about. Anywhere else (no ability to ask) the requirement is met.

## Properties

| | | |
|---|---|---|
| `int` | [min_rank](#prop-min-rank) | `2` |
| `int` | [max_rank](#prop-max-rank) | `0` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `_entity: Entity` ) |
| `bool` | [check_in_context](#method-check-in-context)( `_entity: Entity, context: Dictionary` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `_entity: Entity` ) |
| `String` | [get_failure_message_in_context](#method-get-failure-message-in-context)( `_entity: Entity, context: Dictionary` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int min_rank = 2 {#prop-min-rank}

The lowest rank the ability must have

### int max_rank = 0 {#prop-max-rank}

The highest rank (0 = no limit): an effect that is replaced by a better one above a rank

## Method descriptions

### bool check( _entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### bool check_in_context( _entity: Entity, context: Dictionary ) {#method-check-in-context}

The same checks with extra facts about what the requirement guards: &#123;"item_level": int&#125; for an item. Most requirements do not need them and give the plain answer *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_failure_message( _entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_failure_message_in_context( _entity: Entity, context: Dictionary ) {#method-get-failure-message-in-context}

*Overrides this function of [Requirement](/advanced/shared-systems/requirements/requirement).*

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### Array[Dictionary] validate() {#method-validate}

Configuration problems of this requirement, as a list of &#123;"type", "message", "severity"&#125; ("warning" or "error"). An empty list is fine. Types override it to point out settings that make them useless. RequirementChecker.validate_requirements collects them for the editor *(from [Requirement](/advanced/shared-systems/requirements/requirement))*


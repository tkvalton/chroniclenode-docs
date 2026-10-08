<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementProficiency

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Requires a level in a proficiency (swords, heavy armor, lockpicking): "needs Plate 25 to wear this". Only players have proficiencies; any other entity has the starting level.

## Properties

| | | |
|---|---|---|
| `int` | [proficiency_id](#prop-proficiency-id) | `0` |
| `int` | [required_level](#prop-required-level) | `1` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `void` | [connect_to_entity_signals](#method-connect-to-entity-signals)( `entity: Entity` ) |
| `void` | [disconnect_from_entity_signals](#method-disconnect-from-entity-signals)( `entity: Entity` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int proficiency_id = 0 {#prop-proficiency-id}

The proficiency

### int required_level = 1 {#prop-required-level}

The level the entity needs

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### void connect_to_entity_signals( entity: Entity ) {#method-connect-to-entity-signals}

Connect to the level changes of the player's proficiencies, so the answer is asked again when one changes

### void disconnect_from_entity_signals( entity: Entity ) {#method-disconnect-from-entity-signals}

Stop listening to the proficiencies of the entity

### Array[Dictionary] validate() {#method-validate}

Configuration problems of this requirement, as a list of {"type", "message", "severity"} ("warning" or "error"). An empty list is fine. Types override it to point out settings that make them useless. RequirementChecker.validate_requirements collects them for the editor *(from [Requirement](/advanced/shared-systems/requirements/requirement))*


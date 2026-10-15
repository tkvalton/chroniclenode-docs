<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementProficiency

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Requires a level in a proficiency (swords, heavy armor, lockpicking): "needs Plate 25 to wear this". Only players have proficiencies; any other entity has the starting level.

## Properties

| | | |
|---|---|---|
| `int` | [proficiency_id](#prop-proficiency-id) | `0` |
| `int` | [required_level](#prop-required-level) | `1` |
| `int` | [min_tier](#prop-min-tier) | `0` |

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

### int min_tier = 0 {#prop-min-tier}

The tier the entity needs to be in, a number from 0 (0 = any tier)

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Does the entity meet the requirement?

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

The reason shown when the entity does not meet the requirement.

### String get_summary() {#method-get-summary}

A short text about the requirement and its settings.

### void connect_to_entity_signals( entity: Entity ) {#method-connect-to-entity-signals}

Connect to the level changes of the player's proficiencies, so the answer is asked again when one changes

### void disconnect_from_entity_signals( entity: Entity ) {#method-disconnect-from-entity-signals}

Stop listening to the proficiencies of the entity

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the requirement. Gives the problems found (empty when it is fine).


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementLevel

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Requires the entity to be at or above a level, and optionally at or below another (a level range: a buff that only works up to level 60)

## Properties

| | | |
|---|---|---|
| `int` | [required_level](#prop-required-level) | `1` |
| `int` | [max_level](#prop-max-level) | `0` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `void` | [connect_to_entity_signals](#method-connect-to-entity-signals)( `entity: Entity` ) |
| `void` | [disconnect_from_entity_signals](#method-disconnect-from-entity-signals)( `entity: Entity` ) |

## Property descriptions

### int required_level = 1 {#prop-required-level}

Minimum level required

### int max_level = 0 {#prop-max-level}

Maximum level (0 = no limit)

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### Array[Dictionary] validate() {#method-validate}

A maximum level below the required level can never be met

### void connect_to_entity_signals( entity: Entity ) {#method-connect-to-entity-signals}

Connect to entity level change signals

### void disconnect_from_entity_signals( entity: Entity ) {#method-disconnect-from-entity-signals}

Disconnect from entity level change signals


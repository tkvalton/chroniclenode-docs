<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementWeapon

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Requires entity to have specific weapon types equipped

## Properties

| | | |
|---|---|---|
| `bool` | [requires_any_weapon](#prop-requires-any-weapon) | `true` |
| `Array[int]` | [required_weapon_types](#prop-required-weapon-types) | `[]` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `void` | [connect_to_entity_signals](#method-connect-to-entity-signals)( `entity: Entity` ) |
| `void` | [disconnect_from_entity_signals](#method-disconnect-from-entity-signals)( `entity: Entity` ) |

## Property descriptions

### bool requires_any_weapon = true {#prop-requires-any-weapon}

If true, any weapon satisfies the requirement

### Array[int] required_weapon_types = [] {#prop-required-weapon-types}

Required weapon type IDs - entity must have one of these equipped

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### void connect_to_entity_signals( entity: Entity ) {#method-connect-to-entity-signals}

Connect to entity equipment change signals (weapons are equipment)

### void disconnect_from_entity_signals( entity: Entity ) {#method-disconnect-from-entity-signals}

Disconnect from entity equipment change signals


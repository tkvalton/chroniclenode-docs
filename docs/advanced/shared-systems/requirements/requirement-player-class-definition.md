<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementPlayerClassDefinition

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Requires entity to be one of the specified player classes

## Properties

| | | |
|---|---|---|
| `Array[int]` | [allowed_classes](#prop-allowed-classes) | `[]` |
| `bool` | [exclusion_mode](#prop-exclusion-mode) | `false` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `void` | [connect_to_entity_signals](#method-connect-to-entity-signals)( `entity: Entity` ) |
| `void` | [disconnect_from_entity_signals](#method-disconnect-from-entity-signals)( `entity: Entity` ) |

## Property descriptions

### Array[int] allowed_classes = [] {#prop-allowed-classes}

List of allowed classes

### bool exclusion_mode = false {#prop-exclusion-mode}

If true, entity must NOT be one of these classes

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### Array[Dictionary] validate() {#method-validate}

An empty list of classes restricts nothing

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### void connect_to_entity_signals( entity: Entity ) {#method-connect-to-entity-signals}

Connect to player class change signals (only for Player entities)

### void disconnect_from_entity_signals( entity: Entity ) {#method-disconnect-from-entity-signals}

Disconnect from player class change signals


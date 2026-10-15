<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementEquipmentSlot

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Requires entity to have equipment in specific slot

## Properties

| | | |
|---|---|---|
| `int` | [required_slot_id](#prop-required-slot-id) |  |

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

### int required_slot_id {#prop-required-slot-id}

Slots that must have equipment

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Does the entity meet the requirement?

### Array[Dictionary] validate() {#method-validate}

No slot chosen means the requirement asks nothing

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

The reason shown when the entity does not meet the requirement.

### String get_summary() {#method-get-summary}

A short text about the requirement and its settings.

### void connect_to_entity_signals( entity: Entity ) {#method-connect-to-entity-signals}

Connect to entity equipment change signals

### void disconnect_from_entity_signals( entity: Entity ) {#method-disconnect-from-entity-signals}

Disconnect from entity equipment change signals


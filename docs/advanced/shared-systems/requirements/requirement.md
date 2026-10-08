<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Requirement

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [RequirementEquipmentSlot](/advanced/shared-systems/requirements/requirement-equipment-slot), [RequirementFaction](/advanced/shared-systems/requirements/requirement-faction), [RequirementLevel](/advanced/shared-systems/requirements/requirement-level), [RequirementPlayerClassDefinition](/advanced/shared-systems/requirements/requirement-player-class-definition), [RequirementResponseSeen](/advanced/shared-systems/requirements/requirement-response-seen), [RequirementStat](/advanced/shared-systems/requirements/requirement-stat), [RequirementWeapon](/advanced/shared-systems/requirements/requirement-weapon)

Base class for all requirement types in the game.

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `void` | [connect_to_entity_signals](#method-connect-to-entity-signals)( `entity: Entity` ) |
| `void` | [disconnect_from_entity_signals](#method-disconnect-from-entity-signals)( `entity: Entity` ) |

## Signals

### requirement_state_changed( requirement: Requirement, entity: Entity ) {#signal-requirement-state-changed}

Signal emitted when the requirement's state may have changed for an entity Passive abilities can connect to this to reactively check if they should activate/deactivate

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI

### void connect_to_entity_signals( entity: Entity ) {#method-connect-to-entity-signals}

Connect to entity signals to monitor for requirement state changes Override in subclasses to connect to specific signals

### void disconnect_from_entity_signals( entity: Entity ) {#method-disconnect-from-entity-signals}

Disconnect from entity signals Override in subclasses to clean up specific signal connections


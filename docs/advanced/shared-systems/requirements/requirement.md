<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Requirement

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [RequirementAbilityRank](/advanced/shared-systems/requirements/requirement-ability-rank), [RequirementEquipmentSlot](/advanced/shared-systems/requirements/requirement-equipment-slot), [RequirementFaction](/advanced/shared-systems/requirements/requirement-faction), [RequirementLevel](/advanced/shared-systems/requirements/requirement-level), [RequirementPlayerClassDefinition](/advanced/shared-systems/requirements/requirement-player-class-definition), [RequirementProficiency](/advanced/shared-systems/requirements/requirement-proficiency), [RequirementResponseSeen](/advanced/shared-systems/requirements/requirement-response-seen), [RequirementStat](/advanced/shared-systems/requirements/requirement-stat), [RequirementWeapon](/advanced/shared-systems/requirements/requirement-weapon)

Base class for all requirement types in the game. Requirements determine whether an entity can use an item, ability, or access content. Pure validation logic - no side effects.

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `bool` | [check_in_context](#method-check-in-context)( `entity: Entity, _context: Dictionary` ) |
| `String` | [get_failure_message_in_context](#method-get-failure-message-in-context)( `entity: Entity, _context: Dictionary` ) |
| `String` | [get_summary_in_context](#method-get-summary-in-context)( `_context: Dictionary` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `void` | [connect_to_entity_signals](#method-connect-to-entity-signals)( `entity: Entity` ) |
| `void` | [disconnect_from_entity_signals](#method-disconnect-from-entity-signals)( `entity: Entity` ) |

## Signals

### requirement_state_changed( requirement: Requirement, entity: Entity ) {#signal-requirement-state-changed}

Signal emitted when the requirement's state may have changed for an entity Passive abilities can connect to this to reactively check if they should activate/deactivate

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise

### bool check_in_context( entity: Entity, _context: Dictionary ) {#method-check-in-context}

The same checks with extra facts about what the requirement guards: &#123;"item_level": int&#125; for an item. Most requirements do not need them and give the plain answer

### String get_failure_message_in_context( entity: Entity, _context: Dictionary ) {#method-get-failure-message-in-context}

*No description yet.*

### String get_summary_in_context( _context: Dictionary ) {#method-get-summary-in-context}

*No description yet.*

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI

### Array[Dictionary] validate() {#method-validate}

Configuration problems of this requirement, as a list of &#123;"type", "message", "severity"&#125; ("warning" or "error"). An empty list is fine. Types override it to point out settings that make them useless. RequirementChecker.validate_requirements collects them for the editor

### void connect_to_entity_signals( entity: Entity ) {#method-connect-to-entity-signals}

Connect to entity signals to monitor for requirement state changes Override in subclasses to connect to specific signals

### void disconnect_from_entity_signals( entity: Entity ) {#method-disconnect-from-entity-signals}

Disconnect from entity signals Override in subclasses to clean up specific signal connections


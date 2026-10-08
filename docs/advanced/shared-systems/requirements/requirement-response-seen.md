<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementResponseSeen

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Requirement that checks if a player has seen/selected a specific response Useful for branching conversations based on player choices

## Properties

| | | |
|---|---|---|
| `SourceType` | [source_type](#prop-source-type) | `SourceType.NPC` |
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `int` | [response_id](#prop-response-id) | `0` |
| `bool` | [must_have_seen](#prop-must-have-seen) | `true` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `_entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |

## Enumerations

### enum SourceType {#enum-sourcetype}

- **NPC** = `0`
- **INTERACTABLE** = `1`

## Property descriptions

### SourceType source_type = SourceType.NPC {#prop-source-type}

Source type - NPC or Interactable

### int entity_unique_id = 0 {#prop-entity-unique-id}

Unique ID of the NPC (used when source_type == NPC)

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

Unique ID of the interactable (used when source_type == INTERACTABLE)

### int response_id = 0 {#prop-response-id}

ID of the response to check

### bool must_have_seen = true {#prop-must-have-seen}

If true, requirement passes if response was seen. If false, passes if NOT seen.

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Check if the requirement is met

### String get_failure_message( _entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI


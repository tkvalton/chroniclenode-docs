<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityCombatStateChangeTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific entity enters or exits combat

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `CombatStateTriggerType` | [combat_state](#prop-combat-state) | `CombatStateTriggerType.ENTER_COMBAT` |

## Variables

| | | |
|---|---|---|
| `Entity` | [target_entity](#var-target-entity) | `null` |
| `String` | [display_name](#var-display-name) | `""` |
| `Array[Entity]` | [connected_entities](#var-connected-entities) | `[]` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [find_target_entity](#method-find-target-entity)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Enumerations

### enum CombatStateTriggerType {#enum-combatstatetriggertype}

- **ENTER_COMBAT** = `0`
- **EXIT_COMBAT** = `1`

## Property descriptions

### int entity_unique_id = 0 {#prop-entity-unique-id}

Unique identifier of the specific entity to track

### CombatStateTriggerType combat_state = CombatStateTriggerType.ENTER_COMBAT {#prop-combat-state}

Whether to trigger on entering or exiting combat

## Variable descriptions

### Entity target_entity = null {#var-target-entity}

Reference to the target entity

### String display_name = "" {#var-display-name}

Entity name - will be auto-populated from the entity itself if found

### Array[Entity] connected_entities = [] {#var-connected-entities}

Track connected entities to disconnect later

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger

### void cleanup() {#method-cleanup}

Clean up any listeners or connections

### void find_target_entity() {#method-find-target-entity}

Try to find the target entity in the world

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


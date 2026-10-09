<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityStatChangedTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific entity's stat changes

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `Condition.CheckLogic` | [stat_check_logic](#prop-stat-check-logic) | `Condition.CheckLogic.EQUAL` |
| `Variant` | [target_stat_value](#prop-target-stat-value) | `0` |

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
| `bool` | [meets_stat_condition](#method-meets-stat-condition)( `current_stat_value: Variant` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int entity_unique_id = 0 {#prop-entity-unique-id}

Unique identifier of the specific entity to track

### int stat_id = 0 {#prop-stat-id}

Stat to track

### Condition.CheckLogic stat_check_logic = Condition.CheckLogic.EQUAL {#prop-stat-check-logic}

Comparison logic for stat check

### Variant target_stat_value = 0 {#prop-target-stat-value}

Target stat value to compare against

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

### bool meets_stat_condition( current_stat_value: Variant ) {#method-meets-stat-condition}

Check if the current stat meets the comparison logic

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


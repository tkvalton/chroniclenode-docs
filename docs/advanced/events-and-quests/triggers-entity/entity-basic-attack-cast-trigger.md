<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityBasicAttackCastTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific entity casts their basic attack

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [required_basic_attack_count](#prop-required-basic-attack-count) | `0` |

## Variables

| | | |
|---|---|---|
| `Entity` | [target_entity](#var-target-entity) | `null` |
| `String` | [display_name](#var-display-name) | `""` |
| `int` | [current_count](#var-current-count) | `0` |

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

## Property descriptions

### int entity_unique_id = 0 {#prop-entity-unique-id}

Unique identifier of the specific entity to track

### int required_basic_attack_count = 0 {#prop-required-basic-attack-count}

Number of basic attacks required to trigger (0 = trigger on every basic attack)

## Variable descriptions

### Entity target_entity = null {#var-target-entity}

Reference to the target entity

### String display_name = "" {#var-display-name}

Entity name - will be auto-populated from the entity itself if found

### int current_count = 0 {#var-current-count}

Current count of basic attacks

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


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityHealCastTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific entity casts a heal

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |

## Variables

| | | |
|---|---|---|
| `Entity` | [target_entity](#var-target-entity) | `null` |
| `String` | [display_name](#var-display-name) | `""` |

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

*No description yet.*

## Variable descriptions

### Entity target_entity = null {#var-target-entity}

*No description yet.*

### String display_name = "" {#var-display-name}

*No description yet.*

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Trigger *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String get_function_description() {#method-get-function-description}

Return a description of this trigger with parameter placeholders *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### void cleanup() {#method-cleanup}

Clean up any listeners or connections *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### void find_target_entity() {#method-find-target-entity}

*No description yet.*

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*


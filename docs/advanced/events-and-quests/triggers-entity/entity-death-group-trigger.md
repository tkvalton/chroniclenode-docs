<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityDeathGroupTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a group of specific unique entities are all killed

## Properties

| | | |
|---|---|---|
| `Array[int]` | [entity_unique_ids](#prop-entity-unique-ids) | `[]` |

## Variables

| | | |
|---|---|---|
| `Array[int]` | [defeated_entities](#var-defeated-entities) | `[]` |
| `Dictionary` | [target_entities](#var-target-entities) | `{}` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [reset](#method-reset)() |
| `void` | [set_progress](#method-set-progress)( `amount: int` ) |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [find_target_entities](#method-find-target-entities)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### Array[int] entity_unique_ids = [] {#prop-entity-unique-ids}

Array of unique identifiers of the specific entities to track

## Variable descriptions

### Array[int] defeated_entities = [] {#var-defeated-entities}

Track which entities have been defeated

### Dictionary target_entities =  {#var-target-entities}

Dictionary to store entity references

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger

### void reset() {#method-reset}

The count starts again (the objective or event that owns this trigger starts over)

### void set_progress( amount: int ) {#method-set-progress}

The count from a save (how many were defeated: the ones in front of the list)

### void cleanup() {#method-cleanup}

Clean up any listeners or connections

### void find_target_entities() {#method-find-target-entities}

Try to find the target entities in the world

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


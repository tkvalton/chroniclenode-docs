<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityDamageMitigatedTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific entity's defences (armor, block, dodge ...) reduce a hit it receives. Reads the DamageResult of every hit the entity receives: the modifier steps of the defender's phase say which stats reduced the hit, and `mitigated_amount()` says by how much.

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [stat_id_filter](#prop-stat-id-filter) | `0` |
| `float` | [minimum_mitigated_amount](#prop-minimum-mitigated-amount) | `0.0` |

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

Unique identifier of the specific entity to track

### int stat_id_filter = 0 {#prop-stat-id-filter}

Only react when this stat took part in the mitigation (0 = any stat)

### float minimum_mitigated_amount = 0.0 {#prop-minimum-mitigated-amount}

Minimum mitigated amount to trigger

## Variable descriptions

### Entity target_entity = null {#var-target-entity}

Reference to the target entity

### String display_name = "" {#var-display-name}

Entity name - will be auto-populated from the entity itself if found

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


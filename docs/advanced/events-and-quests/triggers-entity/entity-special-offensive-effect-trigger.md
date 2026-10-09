<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntitySpecialOffensiveEffectTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific entity fires an offensive trigger (critical strike ...) on a hit that lands. Reads the DamageResult of every hit the entity deals: the trigger records of the attacker's phase tell which offensive stats fired, and the result tells how much damage the hit did.

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `String` | [trigger_tag](#prop-trigger-tag) | `""` |
| `float` | [minimum_total_damage](#prop-minimum-total-damage) | `0.0` |

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

### int stat_id = 0 {#prop-stat-id}

Only react to triggers owned by this stat (0 = any stat)

### String trigger_tag = "" {#prop-trigger-tag}

Only react to this trigger tag, e.g. "critical strike" (empty = any tag)

### float minimum_total_damage = 0.0 {#prop-minimum-total-damage}

The hit must have done at least this much damage after the attacker's modifiers (0 = any)

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


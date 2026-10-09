<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ObjectDestructibleDamagedTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific destructible object takes damage

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `Condition.CheckLogic` | [damage_check_logic](#prop-damage-check-logic) | `Condition.CheckLogic.GREATER_EQUAL` |
| `int` | [target_damage](#prop-target-damage) | `0` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_object](#var-target-object) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [find_target_object](#method-find-target-object)() |
| `bool` | [meets_damage_condition](#method-meets-damage-condition)( `damage_taken: int` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

The object ID to track

### Condition.CheckLogic damage_check_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-damage-check-logic}

Comparison logic for damage check

### int target_damage = 0 {#prop-target-damage}

Damage amount to compare against

## Variable descriptions

### InteractableObject target_object = null {#var-target-object}

Reference to the target destructible object

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger

### void cleanup() {#method-cleanup}

Clean up any listeners or connections

### void find_target_object() {#method-find-target-object}

Try to find the target object in the world

### bool meets_damage_condition( damage_taken: int ) {#method-meets-damage-condition}

Check if the current damage meets the comparison logic

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ObjectLockedStateChangeTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific object is locked or unlocked

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `LockStateTriggerType` | [trigger_on](#prop-trigger-on) | `LockStateTriggerType.UNLOCKED` |

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
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Enumerations

### enum LockStateTriggerType {#enum-lockstatetriggertype}

- **LOCKED** = `0`

## Property descriptions

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

The object ID to track

### LockStateTriggerType trigger_on = LockStateTriggerType.UNLOCKED {#prop-trigger-on}

Whether to trigger on locking or unlocking

## Variable descriptions

### InteractableObject target_object = null {#var-target-object}

Reference to the target interactable object

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

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ObjectLadderClimbTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when an entity interacts with a ladder (starts climbing, finishes, or is interrupted)

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `LadderClimbTriggerType` | [trigger_on](#prop-trigger-on) | `LadderClimbTriggerType.CLIMB_FINISHED` |

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

### enum LadderClimbTriggerType {#enum-ladderclimbtriggertype}

- **CLIMB_STARTED** = `0`
- **CLIMB_FINISHED** = `1`

## Property descriptions

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

The object ID to track

### LadderClimbTriggerType trigger_on = LadderClimbTriggerType.CLIMB_FINISHED {#prop-trigger-on}

Which climb event to trigger on

## Variable descriptions

### InteractableObject target_object = null {#var-target-object}

Reference to the target ladder object

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


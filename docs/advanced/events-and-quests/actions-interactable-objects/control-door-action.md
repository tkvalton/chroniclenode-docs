<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ControlDoorAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to open or close a door

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `DoorOperation` | [operation](#prop-operation) | `DoorOperation.OPEN` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_door](#var-target-door) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `InteractableObject` | [find_target_door](#method-find-target-door)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum DoorOperation {#enum-dooroperation}

- **OPEN** = `0` - Open the door
- **CLOSE** = `1` - Close the door

## Property descriptions

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

ID of the door object to control

### DoorOperation operation = DoorOperation.OPEN {#prop-operation}

Operation to perform on the door

## Variable descriptions

### InteractableObject target_door = null {#var-target-door}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### InteractableObject find_target_door() {#method-find-target-door}

Find the target door by ID

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LockObjectAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to lock or unlock an interactable object

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `bool` | [lock_state](#prop-lock-state) | `true` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_object](#var-target-object) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `InteractableObject` | [find_target_object](#method-find-target-object)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

ID of the object to lock/unlock

### bool lock_state = true {#prop-lock-state}

Whether to lock (true) or unlock (false) the object

## Variable descriptions

### InteractableObject target_object = null {#var-target-object}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### InteractableObject find_target_object() {#method-find-target-object}

Find the target object by ID

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


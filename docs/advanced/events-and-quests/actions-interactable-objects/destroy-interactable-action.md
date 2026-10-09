<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DestroyInteractableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to instantly destroy a destructible object

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_destructible](#var-target-destructible) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `InteractableObject` | [find_target_destructible](#method-find-target-destructible)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

ID of the destructible object to destroy

## Variable descriptions

### InteractableObject target_destructible = null {#var-target-destructible}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### InteractableObject find_target_destructible() {#method-find-target-destructible}

Find the target destructible by ID

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


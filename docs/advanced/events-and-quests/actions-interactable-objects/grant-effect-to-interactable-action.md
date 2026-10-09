<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GrantEffectToInteractableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to grant an effect to a specific interactable object

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `int` | [effect_id](#prop-effect-id) | `0` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_interactable](#var-target-interactable) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `InteractableObject` | [find_target_interactable](#method-find-target-interactable)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

ID of the interactable to grant effect to

### int effect_id = 0 {#prop-effect-id}

Effect ID to grant

## Variable descriptions

### InteractableObject target_interactable = null {#var-target-interactable}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### InteractableObject find_target_interactable() {#method-find-target-interactable}

Find the target interactable by ID

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


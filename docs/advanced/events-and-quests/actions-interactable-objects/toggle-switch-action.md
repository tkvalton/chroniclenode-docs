<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ToggleSwitchAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to toggle a switch between ON and OFF states

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_switch](#var-target-switch) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `InteractableObject` | [find_target_switch](#method-find-target-switch)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

ID of the switch/light to toggle

## Variable descriptions

### InteractableObject target_switch = null {#var-target-switch}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### InteractableObject find_target_switch() {#method-find-target-switch}

Find the target switch by ID

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


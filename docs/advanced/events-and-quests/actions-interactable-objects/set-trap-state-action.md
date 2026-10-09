<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetTrapStateAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to set a trap to ARMED state (ready to trigger)

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `TrapInteraction.TrapState` | [trap_state](#prop-trap-state) | `TrapInteraction.TrapState.ARMED` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_trap](#var-target-trap) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `InteractableObject` | [find_target_trap](#method-find-target-trap)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

ID of the trap to arm

### TrapInteraction.TrapState trap_state = TrapInteraction.TrapState.ARMED {#prop-trap-state}

State to set for trap

## Variable descriptions

### InteractableObject target_trap = null {#var-target-trap}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### InteractableObject find_target_trap() {#method-find-target-trap}

Find the target trap by ID

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


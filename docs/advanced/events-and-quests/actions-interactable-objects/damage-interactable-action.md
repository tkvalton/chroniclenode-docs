<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DamageInteractableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to deal damage to a destructible object

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `int` | [damage_amount](#prop-damage-amount) | `10` |
| `int` | [damage_type](#prop-damage-type) | `0` |

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

ID of the destructible object to damage

### int damage_amount = 10 {#prop-damage-amount}

Amount of damage to deal

### int damage_type = 0 {#prop-damage-type}

Type of damage

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


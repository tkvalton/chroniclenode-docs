<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ForceTeleportEntityAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to force an entity to teleport through a rabbit hole programmatically Bypasses normal interaction requirements

## Properties

| | | |
|---|---|---|
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [target_rabbit_hole](#var-target-rabbit-hole) | `null` |
| `Entity` | [target_entity](#var-target-entity) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `InteractableObject` | [find_target_rabbit_hole](#method-find-target-rabbit-hole)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

ID of the rabbit hole to use for teleportation

### int entity_unique_id = 0 {#prop-entity-unique-id}

ID of the entity to teleport

## Variable descriptions

### InteractableObject target_rabbit_hole = null {#var-target-rabbit-hole}

*No description yet.*

### Entity target_entity = null {#var-target-entity}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### InteractableObject find_target_rabbit_hole() {#method-find-target-rabbit-hole}

Find the target rabbit hole by ID

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


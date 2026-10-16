<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetVehicleHijackableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Makes a vehicle (a placed NPC with a Mount interaction) hijackable or not: a hostile vehicle that is hijackable can be boarded and taken over by the characters it is hostile to. A story can open a tank to the player after a quest step, or lock it again.

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `bool` | [hijackable](#prop-hijackable) | `true` |

## Variables

| | | |
|---|---|---|
| `Entity` | [target_entity](#var-target-entity) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int entity_unique_id = 0 {#prop-entity-unique-id}

Unique ID of the vehicle

### bool hijackable = true {#prop-hijackable}

Can it be hijacked from now on

## Variable descriptions

### Entity target_entity = null {#var-target-entity}

Reference to the vehicle

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


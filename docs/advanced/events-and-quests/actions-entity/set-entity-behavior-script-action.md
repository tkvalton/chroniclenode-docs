<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetEntityBehaviorScriptAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to change an entity's behavior script at runtime Uses ListCatalog to select from available behavior scripts

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [behavior_script_id](#prop-behavior-script-id) | `0` |

## Variables

| | | |
|---|---|---|
| `Entity` | [target_entity](#var-target-entity) | `null` |
| `ModularBehaviorScript` | [new_behavior_script](#var-new-behavior-script) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int entity_unique_id = 0 {#prop-entity-unique-id}

Unique ID of the entity to change behavior

### int behavior_script_id = 0 {#prop-behavior-script-id}

ID of the behavior script from DatabaseBehaviors

## Variable descriptions

### Entity target_entity = null {#var-target-entity}

*No description yet.*

### ModularBehaviorScript new_behavior_script = null {#var-new-behavior-script}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


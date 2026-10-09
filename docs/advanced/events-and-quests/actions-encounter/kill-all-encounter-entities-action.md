<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# KillAllEncounterEntitiesAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to kill all entities in a Encounter

## Properties

| | | |
|---|---|---|
| `int` | [encounter_id](#prop-encounter-id) | `0` |

## Variables

| | | |
|---|---|---|
| `Encounter` | [encounter](#var-encounter) |  |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `Encounter` | [find_encounter](#method-find-encounter)( `name: int` ) |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int encounter_id = 0 {#prop-encounter-id}

Name of the Encounter to manipulate

## Variable descriptions

### Encounter encounter {#var-encounter}

*No description yet.*

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Encounter find_encounter( name: int ) {#method-find-encounter}

Find a special encounter by its name

### Dictionary save() {#method-save}

Save action state

### void load_data( data: Dictionary ) {#method-load-data}

Load action state


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetPackActiveStateAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to activate or deactivate an encounter (it hides and stops its members while it is off)

## Properties

| | | |
|---|---|---|
| `int` | [encounter_id](#prop-encounter-id) | `0` |
| `bool` | [active_state](#prop-active-state) | `true` |

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

### bool active_state = true {#prop-active-state}

Whether to activate (true) or deactivate (false) the encounter

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


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChangeEncounterBehaviorAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to dynamically change a Encounter's formation and behavior Updated to work with new EncounterState enum system.

## Properties

| | | |
|---|---|---|
| `int` | [encounter_id](#prop-encounter-id) | `0` |
| `UniqueEncounterData.Formation` | [new_formation](#prop-new-formation) | `UniqueEncounterData.Formation.NONE` |
| `UniqueEncounterData.GroupBehavior` | [new_group_behavior](#prop-new-group-behavior) | `UniqueEncounterData.GroupBehavior.BALANCED` |
| `bool` | [apply_formation_immediately](#prop-apply-formation-immediately) | `true` |
| `float` | [behavior_duration](#prop-behavior-duration) | `0.0  # 0 = permanent` |

## Variables

| | | |
|---|---|---|
| `Encounter` | [encounter](#var-encounter) |  |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Encounter` | [find_encounter](#method-find-encounter)( `name: int` ) |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int encounter_id = 0 {#prop-encounter-id}

Name of the Encounter to manipulate

### UniqueEncounterData.Formation new_formation = UniqueEncounterData.Formation.NONE {#prop-new-formation}

*No description yet.*

### UniqueEncounterData.GroupBehavior new_group_behavior = UniqueEncounterData.GroupBehavior.BALANCED {#prop-new-group-behavior}

*No description yet.*

### bool apply_formation_immediately = true {#prop-apply-formation-immediately}

*No description yet.*

### float behavior_duration = 0.0  # 0 = permanent {#prop-behavior-duration}

*No description yet.*

## Variable descriptions

### Encounter encounter {#var-encounter}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Encounter find_encounter( name: int ) {#method-find-encounter}

Find a special encounter by its name

### Dictionary save() {#method-save}

Save action state

### void load_data( data: Dictionary ) {#method-load-data}

Load action state


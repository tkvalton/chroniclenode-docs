<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EncounterCombatStateChangeTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when an Encounter changes state (enters combat, exits combat, or is defeated)

## Properties

| | | |
|---|---|---|
| `int` | [encounter_id](#prop-encounter-id) | `0` |
| `Encounter.EncounterState` | [target_state](#prop-target-state) | `Encounter.EncounterState.IN_COMBAT` |

## Variables

| | | |
|---|---|---|
| `Encounter` | [encounter](#var-encounter) |  |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [find_encounter](#method-find-encounter)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int encounter_id = 0 {#prop-encounter-id}

*No description yet.*

### Encounter.EncounterState target_state = Encounter.EncounterState.IN_COMBAT {#prop-target-state}

*No description yet.*

## Variable descriptions

### Encounter encounter {#var-encounter}

*No description yet.*

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger

### void cleanup() {#method-cleanup}

Clean up any listeners or connections

### void find_encounter() {#method-find-encounter}

Find the special encounter by name

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatDurationCondition

**Inherits:** [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the group has been in combat for a specified duration

## Properties

| | | |
|---|---|---|
| `Condition.CheckLogic` | [comparison_logic](#prop-comparison-logic) | `Condition.CheckLogic.GREATER_EQUAL` |
| `float` | [target_duration_seconds](#prop-target-duration-seconds) | `30.0` |

## Variables

| | | |
|---|---|---|
| `float` | [combat_start_time](#var-combat-start-time) | `0.0` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_encounter](#method-evaluate-encounter)( `encounter: Encounter` ) |
| `String` | [get_encounter_description](#method-get-encounter-description)() |
| `String` | [get_encounter_function_description](#method-get-encounter-function-description)() |
| `void` | [set_combat_start_time](#method-set-combat-start-time)( `start_time: float` ) |
| `void` | [reset_combat_time](#method-reset-combat-time)() |

## Property descriptions

### Condition.CheckLogic comparison_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-comparison-logic}

How the time in combat is compared with the target duration

### float target_duration_seconds = 30.0 {#prop-target-duration-seconds}

The time in combat to compare with, in seconds

## Variable descriptions

### float combat_start_time = 0.0 {#var-combat-start-time}

Track when combat started (set by Encounter)

## Method descriptions

### bool evaluate_encounter( encounter: Encounter ) {#method-evaluate-encounter}

Override this in subclasses to implement encounter-specific evaluation @param encounter: The target encounter to evaluate @return: true if condition is met for this encounter *(from [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition))*

### String get_encounter_description() {#method-get-encounter-description}

Override this in subclasses to describe the specific encounter condition *(from [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition))*

### String get_encounter_function_description() {#method-get-encounter-function-description}

Override this in subclasses to provide template for inline editing *(from [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition))*

### void set_combat_start_time( start_time: float ) {#method-set-combat-start-time}

Called by Encounter when group enters combat

### void reset_combat_time() {#method-reset-combat-time}

Reset combat timing


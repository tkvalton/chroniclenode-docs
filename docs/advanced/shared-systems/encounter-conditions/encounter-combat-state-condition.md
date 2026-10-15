<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EncounterCombatStateCondition

**Inherits:** [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if an encounter is in a specific combat state. Uses EncounterCondition targeting to determine which encounter to check. Updated to work with new EncounterState enum system.

## Properties

| | | |
|---|---|---|
| `Encounter.EncounterState` | [required_encounter_state](#prop-required-encounter-state) | `Encounter.EncounterState.IN_COMBAT` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_encounter](#method-evaluate-encounter)( `encounter: Encounter` ) |
| `String` | [get_encounter_description](#method-get-encounter-description)() |
| `String` | [get_encounter_function_description](#method-get-encounter-function-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |

## Property descriptions

*Combat State Check*

### Encounter.EncounterState required_encounter_state = Encounter.EncounterState.IN_COMBAT {#prop-required-encounter-state}

The encounter state to check for

## Method descriptions

### bool evaluate_encounter( encounter: Encounter ) {#method-evaluate-encounter}

Is the condition met for this encounter?

### String get_encounter_description() {#method-get-encounter-description}

A short text about what the condition checks on the encounter.

### String get_encounter_function_description() {#method-get-encounter-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool is_valid() {#method-is-valid}

Are the settings of the condition complete?

### String get_expected_argument_type() {#method-get-expected-argument-type}

The kind of thing the condition is checked against (an entity, an encounter ...).


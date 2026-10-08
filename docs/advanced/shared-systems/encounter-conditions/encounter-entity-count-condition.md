<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EncounterEntityCountCondition

**Inherits:** [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if an encounter has a specific number of entities alive/dead. Uses EncounterCondition targeting to determine which encounter to check.

## Properties

| | | |
|---|---|---|
| `Condition.CheckLogic` | [comparison_logic](#prop-comparison-logic) | `Condition.CheckLogic.LESS_EQUAL` |
| `int` | [target_count](#prop-target-count) | `0` |
| `bool` | [count_dead_entities](#prop-count-dead-entities) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_encounter](#method-evaluate-encounter)( `encounter: Encounter` ) |
| `String` | [get_encounter_description](#method-get-encounter-description)() |
| `String` | [get_encounter_function_description](#method-get-encounter-function-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |

## Property descriptions

*Entity Count Check*

### Condition.CheckLogic comparison_logic = Condition.CheckLogic.LESS_EQUAL {#prop-comparison-logic}

Logic for comparing the entity count

### int target_count = 0 {#prop-target-count}

Target number of entities to compare against

### bool count_dead_entities = true {#prop-count-dead-entities}

Whether to count alive entities (true) or dead entities (false)

## Method descriptions

### bool evaluate_encounter( encounter: Encounter ) {#method-evaluate-encounter}

Override this in subclasses to implement encounter-specific evaluation @param encounter: The target encounter to evaluate @return: true if condition is met for this encounter *(from [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition))*

### String get_encounter_description() {#method-get-encounter-description}

Override this in subclasses to describe the specific encounter condition *(from [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition))*

### String get_encounter_function_description() {#method-get-encounter-function-description}

Override this in subclasses to provide template for inline editing *(from [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition))*

### bool is_valid() {#method-is-valid}

Validate encounter targeting configuration *(from [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition))*

### String get_expected_argument_type() {#method-get-expected-argument-type}

*Overrides this function of [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition).*


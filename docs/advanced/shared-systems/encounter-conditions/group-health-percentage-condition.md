<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GroupHealthPercentageCondition

**Inherits:** [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the group's average health percentage meets specified criteria

## Properties

| | | |
|---|---|---|
| `Condition.CheckLogic` | [comparison_logic](#prop-comparison-logic) | `Condition.CheckLogic.LESS_EQUAL` |
| `float` | [target_health_percentage](#prop-target-health-percentage) | `50.0` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_encounter](#method-evaluate-encounter)( `encounter: EncounterGroup` ) |
| `String` | [get_encounter_description](#method-get-encounter-description)() |
| `String` | [get_encounter_function_description](#method-get-encounter-function-description)() |

## Property descriptions

### Condition.CheckLogic comparison_logic = Condition.CheckLogic.LESS_EQUAL {#prop-comparison-logic}

How the average health of the group is compared with the target

### float target_health_percentage = 50.0 {#prop-target-health-percentage}

The average health percentage of the group to compare with

## Method descriptions

### bool evaluate_encounter( encounter: EncounterGroup ) {#method-evaluate-encounter}

Is the condition met for this encounter?

### String get_encounter_description() {#method-get-encounter-description}

A short text about what the condition checks on the encounter.

### String get_encounter_function_description() {#method-get-encounter-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.


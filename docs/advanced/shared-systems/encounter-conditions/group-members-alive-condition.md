<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GroupMembersAliveCondition

**Inherits:** [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the number of alive group members meets specified criteria

## Properties

| | | |
|---|---|---|
| `Condition.CheckLogic` | [comparison_logic](#prop-comparison-logic) | `Condition.CheckLogic.GREATER_EQUAL` |
| `int` | [target_count](#prop-target-count) | `1` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_encounter](#method-evaluate-encounter)( `encounter: EncounterGroup` ) |
| `String` | [get_encounter_description](#method-get-encounter-description)() |
| `String` | [get_encounter_function_description](#method-get-encounter-function-description)() |

## Property descriptions

### Condition.CheckLogic comparison_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-comparison-logic}

How the number of members alive is compared with the target count

### int target_count = 1 {#prop-target-count}

The number of members alive to compare with

## Method descriptions

### bool evaluate_encounter( encounter: EncounterGroup ) {#method-evaluate-encounter}

Is the condition met for this encounter?

### String get_encounter_description() {#method-get-encounter-description}

A short text about what the condition checks on the encounter.

### String get_encounter_function_description() {#method-get-encounter-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.


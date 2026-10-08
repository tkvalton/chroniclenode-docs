<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DistanceFromPositionCondition

**Inherits:** [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if group is within certain distance of a position

## Properties

| | | |
|---|---|---|
| `Vector3` | [target_position](#prop-target-position) | `Vector3.ZERO` |
| `float` | [max_distance](#prop-max-distance) | `10.0` |
| `bool` | [check_all_members](#prop-check-all-members) | `false  # true = all must be in range, false = any one` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_encounter](#method-evaluate-encounter)( `encounter: Encounter` ) |
| `String` | [get_encounter_description](#method-get-encounter-description)() |
| `String` | [get_encounter_function_description](#method-get-encounter-function-description)() |

## Property descriptions

### Vector3 target_position = Vector3.ZERO {#prop-target-position}

The world position to measure from

### float max_distance = 10.0 {#prop-max-distance}

The greatest distance from the position that counts as near

### bool check_all_members = false  # true = all must be in range, false = any one {#prop-check-all-members}

True: every member of the group must be near. False: one is enough

## Method descriptions

### bool evaluate_encounter( encounter: Encounter ) {#method-evaluate-encounter}

Override this in subclasses to implement encounter-specific evaluation @param encounter: The target encounter to evaluate @return: true if condition is met for this encounter *(from [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition))*

### String get_encounter_description() {#method-get-encounter-description}

Override this in subclasses to describe the specific encounter condition *(from [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition))*

### String get_encounter_function_description() {#method-get-encounter-function-description}

Override this in subclasses to provide template for inline editing *(from [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition))*


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
| `bool` | [evaluate_encounter](#method-evaluate-encounter)( `encounter: EncounterGroup` ) |
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

### bool evaluate_encounter( encounter: EncounterGroup ) {#method-evaluate-encounter}

Is the condition met for this encounter?

### String get_encounter_description() {#method-get-encounter-description}

A short text about what the condition checks on the encounter.

### String get_encounter_function_description() {#method-get-encounter-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.


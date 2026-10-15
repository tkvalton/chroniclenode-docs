<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayersInAreaCondition

**Inherits:** [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if a minimum number of players are within the encounter area

## Properties

| | | |
|---|---|---|
| `int` | [min_players_required](#prop-min-players-required) | `1` |
| `float` | [area_radius](#prop-area-radius) | `15.0` |
| `bool` | [check_from_center](#prop-check-from-center) | `true  # If false, checks from any group member` |

## Methods

| | |
|---|---|
| `String` | [get_encounter_function_description](#method-get-encounter-function-description)() |
| `bool` | [evaluate_encounter](#method-evaluate-encounter)( `encounter: Encounter` ) |
| `String` | [get_encounter_description](#method-get-encounter-description)() |

## Property descriptions

### int min_players_required = 1 {#prop-min-players-required}

How many players must be in the area

### float area_radius = 15.0 {#prop-area-radius}

The radius of the area

### bool check_from_center = true  # If false, checks from any group member {#prop-check-from-center}

True: measure from the center of the encounter. False: from any member of the group

## Method descriptions

### String get_encounter_function_description() {#method-get-encounter-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool evaluate_encounter( encounter: Encounter ) {#method-evaluate-encounter}

Is the condition met for this encounter?

### String get_encounter_description() {#method-get-encounter-description}

A short text about what the condition checks on the encounter.


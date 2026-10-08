<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EncounterCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [CombatDurationCondition](/advanced/shared-systems/encounter-conditions/combat-duration-condition), [DistanceFromPositionCondition](/advanced/shared-systems/encounter-conditions/distance-from-position-condition), [EncounterActiveStateCondition](/advanced/shared-systems/encounter-conditions/encounter-active-state-condition), [EncounterCombatStateCondition](/advanced/shared-systems/encounter-conditions/encounter-combat-state-condition), [EncounterEntityCountCondition](/advanced/shared-systems/encounter-conditions/encounter-entity-count-condition), [GroupHealthPercentageCondition](/advanced/shared-systems/encounter-conditions/group-health-percentage-condition), [GroupMembersAliveCondition](/advanced/shared-systems/encounter-conditions/group-members-alive-condition), [PlayersInAreaCondition](/advanced/shared-systems/encounter-conditions/players-in-area-condition)

Base class for conditions that evaluate encounter state. Can target different encounters based on EncounterTarget enum or specific encounter ID.

## Properties

| | | |
|---|---|---|
| `EncounterTarget` | [encounter_target](#prop-encounter-target) | `EncounterTarget.ARGUMENT_ENCOUNTER` |
| `String` | [encounter_id](#prop-encounter-id) | `""` |

## Methods

| | |
|---|---|
| `Encounter` | [get_target_encounter](#method-get-target-encounter)( `argument: Variant = null` ) |
| `bool` | [evaluate_encounter](#method-evaluate-encounter)( `encounter: Encounter` ) |
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_encounter_description](#method-get-encounter-description)() |
| `String` | [get_encounter_function_description](#method-get-encounter-function-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |
| `Array[Entity]` | [get_alive_group_members](#method-get-alive-group-members)( `encounter: Encounter` ) |
| `Array[Entity]` | [get_all_group_members](#method-get-all-group-members)( `encounter: Encounter` ) |
| `Array[Entity]` | [get_combat_group_members](#method-get-combat-group-members)( `encounter: Encounter` ) |
| `Vector3` | [get_encounter_center](#method-get-encounter-center)( `encounter: Encounter` ) |

## Enumerations

### enum EncounterTarget {#enum-encountertarget}

- **ARGUMENT_ENCOUNTER** = `0` - Use the encounter passed as argument
- **CURRENT_ACTIVE** = `1` - Use the currently active encounter
- **NEAREST** = `2` - Use the encounter nearest to argument entity
- **UNIQUE_ID** = `3` - Use encounter with specific unique_id

## Property descriptions

*Encounter Targeting*

### EncounterTarget encounter_target = EncounterTarget.ARGUMENT_ENCOUNTER {#prop-encounter-target}

How to determine which encounter to evaluate

### String encounter_id = "" {#prop-encounter-id}

Unique ID of encounter to target (only used when encounter_target is UNIQUE_ID)

## Method descriptions

### Encounter get_target_encounter( argument: Variant = null ) {#method-get-target-encounter}

Get the target encounter based on the targeting settings @param argument: The argument passed to evaluate() - could be Encounter or Entity @return: The Encounter to evaluate, or null if not found/invalid

### bool evaluate_encounter( encounter: Encounter ) {#method-evaluate-encounter}

Override this in subclasses to implement encounter-specific evaluation @param encounter: The target encounter to evaluate @return: true if condition is met for this encounter

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Final evaluate method that handles encounter targeting and calls evaluate_encounter Don't override this - override evaluate_encounter instead

### String get_description() {#method-get-description}

Get description including encounter targeting info

### String get_encounter_description() {#method-get-encounter-description}

Override this in subclasses to describe the specific encounter condition

### String get_encounter_function_description() {#method-get-encounter-function-description}

Override this in subclasses to provide template for inline editing

### String get_function_description() {#method-get-function-description}

Main function description method - includes targeting as part of inline template

### bool is_valid() {#method-is-valid}

Validate encounter targeting configuration

### String get_expected_argument_type() {#method-get-expected-argument-type}

Get the expected argument type for this condition (for editor hints) Override in subclasses to specify what argument type is expected *(from [Condition](/advanced/shared-systems/condition-bases/condition))*

### Array[Entity] get_alive_group_members( encounter: Encounter ) {#method-get-alive-group-members}

Get all alive group members from the target encounter

### Array[Entity] get_all_group_members( encounter: Encounter ) {#method-get-all-group-members}

Get all group members (alive and dead) from the target encounter

### Array[Entity] get_combat_group_members( encounter: Encounter ) {#method-get-combat-group-members}

Get group members currently in combat from the target encounter

### Vector3 get_encounter_center( encounter: Encounter ) {#method-get-encounter-center}

Get the encounter center position


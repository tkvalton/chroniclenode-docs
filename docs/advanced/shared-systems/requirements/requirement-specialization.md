<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementSpecialization

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Needs a specialization of a proficiency or a profession (or needs that the character does NOT have it).

## Properties

| | | |
|---|---|---|
| `Kind` | [kind](#prop-kind) | `Kind.PROFICIENCY` |
| `int` | [target_id](#prop-target-id) | `0` |
| `int` | [specialization_id](#prop-specialization-id) | `0` |
| `bool` | [must_have](#prop-must-have) | `true` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `_entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Kind {#enum-kind}

The options of kind: proficiency, profession.

- **PROFICIENCY** = `0` - A proficiency (swords, lockpicking)
- **PROFESSION** = `1` - A profession (a craft school: blacksmithing)

## Property descriptions

### Kind kind = Kind.PROFICIENCY {#prop-kind}

What the specialization belongs to

### int target_id = 0 {#prop-target-id}

The id of the proficiency, or of the craft school

### int specialization_id = 0 {#prop-specialization-id}

The id of the specialization

### bool must_have = true {#prop-must-have}

On: the character must have it. Off: the character must not have it

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Does the entity meet the requirement?

### String get_failure_message( _entity: Entity ) {#method-get-failure-message}

The reason shown when the entity does not meet the requirement.

### String get_summary() {#method-get-summary}

A short text about the requirement and its settings.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the requirement. Gives the problems found (empty when it is fine).


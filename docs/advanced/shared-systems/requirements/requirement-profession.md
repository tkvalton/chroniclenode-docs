<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementProfession

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Needs a profession (a craft school): learned, and optionally at a skill level or in a tier.

## Description

"Needs Blacksmithing 150 (Expert)". Whose profession it is, the party or the character, follows the project setting. Only players have professions.

## Properties

| | | |
|---|---|---|
| `int` | [craft_school_id](#prop-craft-school-id) | `0` |
| `int` | [min_level](#prop-min-level) | `0` |
| `int` | [min_tier](#prop-min-tier) | `0` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int craft_school_id = 0 {#prop-craft-school-id}

The profession

### int min_level = 0 {#prop-min-level}

The skill level needed (0 = only that the profession is learned)

### int min_tier = 0 {#prop-min-tier}

The tier needed: a number from 0 (0 = any tier)

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Does the entity meet the requirement?

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

The reason shown when the entity does not meet the requirement.

### String get_summary() {#method-get-summary}

A short text about the requirement and its settings.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the requirement. Gives the problems found (empty when it is fine).


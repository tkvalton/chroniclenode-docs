<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementSkillTier

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Needs a proficiency or a profession to be in a tier (Journeyman or higher), or to be at the cap of its tier (ready to be trained further).

## Description

The lesson of the next tier uses "at the cap of the tier before": you cannot train Expert until Journeyman is full.

## Properties

| | | |
|---|---|---|
| `Kind` | [kind](#prop-kind) | `Kind.PROFICIENCY` |
| `int` | [target_id](#prop-target-id) | `0` |
| `int` | [min_tier](#prop-min-tier) | `1` |
| `bool` | [must_be_at_cap](#prop-must-be-at-cap) | `false` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Kind {#enum-kind}

- **PROFICIENCY** = `0` - A proficiency (swords, lockpicking)
- **PROFESSION** = `1` - A profession (a craft school: blacksmithing)

## Property descriptions

### Kind kind = Kind.PROFICIENCY {#prop-kind}

What is asked about

### int target_id = 0 {#prop-target-id}

The id of the proficiency, or of the craft school

### int min_tier = 1 {#prop-min-tier}

The lowest tier: a number from 0 (0 = the first tier)

### bool must_be_at_cap = false {#prop-must-be-at-cap}

The level also has to be at the cap of that tier: the character is ready for the next one

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### Array[Dictionary] validate() {#method-validate}

Configuration problems of this requirement, as a list of &#123;"type", "message", "severity"&#125; ("warning" or "error"). An empty list is fine. Types override it to point out settings that make them useless. RequirementChecker.validate_requirements collects them for the editor *(from [Requirement](/advanced/shared-systems/requirements/requirement))*


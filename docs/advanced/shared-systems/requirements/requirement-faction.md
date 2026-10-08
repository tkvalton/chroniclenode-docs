<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementFaction

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Requires entity to have a minimum reputation with a faction

## Properties

| | | |
|---|---|---|
| `int` | [faction_id](#prop-faction-id) | `0` |
| `int` | [minimum_reputation](#prop-minimum-reputation) | `0` |
| `String` | [standing_name](#prop-standing-name) | `""` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |

## Property descriptions

### int faction_id = 0 {#prop-faction-id}

ID of the faction (leave empty to use FactionDefinition directly)

### int minimum_reputation = 0 {#prop-minimum-reputation}

Minimum reputation value required

### String standing_name = "" {#prop-standing-name}

Named reputation level (e.g., "Friendly", "Allied")

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI *(from [Requirement](/advanced/shared-systems/requirements/requirement))*


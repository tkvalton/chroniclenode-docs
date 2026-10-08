<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementStat

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Requires entity to have a minimum value in a specific stat

## Properties

| | | |
|---|---|---|
| `int` | [stat_id](#prop-stat-id) | `0` |
| `float` | [minimum_value](#prop-minimum-value) | `0.0` |
| `bool` | [check_base_stat](#prop-check-base-stat) | `false` |

## Methods

| | |
|---|---|
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `void` | [connect_to_entity_signals](#method-connect-to-entity-signals)( `entity: Entity` ) |
| `void` | [disconnect_from_entity_signals](#method-disconnect-from-entity-signals)( `entity: Entity` ) |

## Property descriptions

### int stat_id = 0 {#prop-stat-id}

Name of the stat to check (e.g., "strength", "intelligence")

### float minimum_value = 0.0 {#prop-minimum-value}

Minimum stat value required

### bool check_base_stat = false {#prop-check-base-stat}

If true, check base stat; if false, check modified stat

## Method descriptions

### bool check( entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### void connect_to_entity_signals( entity: Entity ) {#method-connect-to-entity-signals}

Connect to entity stat change signals

### void disconnect_from_entity_signals( entity: Entity ) {#method-disconnect-from-entity-signals}

Disconnect from entity stat change signals


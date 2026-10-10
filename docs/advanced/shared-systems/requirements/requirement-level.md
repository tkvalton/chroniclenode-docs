<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RequirementLevel

**Inherits:** [Requirement](/advanced/shared-systems/requirements/requirement) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Requires the entity to be at or above a level, and optionally at or below another (a level range: a buff that only works up to level 60)

## Properties

| | | |
|---|---|---|
| `int` | [required_level](#prop-required-level) | `1` |
| `int` | [max_level](#prop-max-level) | `0` |
| `bool` | [follow_item_level](#prop-follow-item-level) | `false` |
| `int` | [item_level_offset](#prop-item-level-offset) | `0` |

## Methods

| | |
|---|---|
| `int` | [required_for](#method-required-for)( `context: Dictionary` ) |
| `bool` | [check_in_context](#method-check-in-context)( `entity: Entity, context: Dictionary` ) |
| `String` | [get_failure_message_in_context](#method-get-failure-message-in-context)( `entity: Entity, context: Dictionary` ) |
| `String` | [get_summary_in_context](#method-get-summary-in-context)( `context: Dictionary` ) |
| `bool` | [check](#method-check)( `entity: Entity` ) |
| `String` | [get_failure_message](#method-get-failure-message)( `entity: Entity` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `void` | [connect_to_entity_signals](#method-connect-to-entity-signals)( `entity: Entity` ) |
| `void` | [disconnect_from_entity_signals](#method-disconnect-from-entity-signals)( `entity: Entity` ) |

## Property descriptions

### int required_level = 1 {#prop-required-level}

Minimum level required

### int max_level = 0 {#prop-max-level}

Maximum level (0 = no limit)

### bool follow_item_level = false {#prop-follow-item-level}

On an item: the level needed is the item level of the item (an item generated at level 30 needs level 30) instead of the number above. Does nothing on other things

### int item_level_offset = 0 {#prop-item-level-offset}

With "follow item level": how many levels under the item level the entity may be (2: an item of level 30 needs level 28). 0 = the item level itself

## Method descriptions

### int required_for( context: Dictionary ) {#method-required-for}

The level this requirement asks for, given what it guards (&#123;"item_level": int&#125; on an item)

### bool check_in_context( entity: Entity, context: Dictionary ) {#method-check-in-context}

The same checks with extra facts about what the requirement guards: &#123;"item_level": int&#125; for an item. Most requirements do not need them and give the plain answer *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_failure_message_in_context( entity: Entity, context: Dictionary ) {#method-get-failure-message-in-context}

*Overrides this function of [Requirement](/advanced/shared-systems/requirements/requirement).*

### String get_summary_in_context( context: Dictionary ) {#method-get-summary-in-context}

*Overrides this function of [Requirement](/advanced/shared-systems/requirements/requirement).*

### bool check( entity: Entity ) {#method-check}

Check if the entity meets this requirement Returns true if requirement is satisfied, false otherwise *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_failure_message( entity: Entity ) {#method-get-failure-message}

Get the failure message with entity-specific context *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### String get_summary() {#method-get-summary}

Get a summary of this requirement for tooltips/UI *(from [Requirement](/advanced/shared-systems/requirements/requirement))*

### Array[Dictionary] validate() {#method-validate}

A maximum level below the required level can never be met

### void connect_to_entity_signals( entity: Entity ) {#method-connect-to-entity-signals}

Connect to entity level change signals

### void disconnect_from_entity_signals( entity: Entity ) {#method-disconnect-from-entity-signals}

Disconnect from entity level change signals


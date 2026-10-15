<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AlliesInRangeCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if a minimum number of allies are within a specified range.

## Properties

| | | |
|---|---|---|
| `float` | [range](#prop-range) | `10.0` |
| `int` | [min_count](#prop-min-count) | `1` |
| `SearchScope` | [search_scope](#prop-search-scope) | `SearchScope.ANY_ENTITY` |
| `bool` | [in_range](#prop-in-range) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |

## Enumerations

### enum SearchScope {#enum-searchscope}

The options of search scope: any entity, encounter only, encounter preferred.

- **ANY_ENTITY** = `0` - Search all entities in range (original behavior)
- **ENCOUNTER_ONLY** = `1` - Only search within current encounter
- **ENCOUNTER_PREFERRED** = `2` - Prefer encounter entities, fallback to any if encounter empty

## Property descriptions

### float range = 10.0 {#prop-range}

The distance, from the entity, within which to look

### int min_count = 1 {#prop-min-count}

How many entities must be found

### SearchScope search_scope = SearchScope.ANY_ENTITY {#prop-search-scope}

Where to look: all entities in range, only the current encounter, or the encounter first and everyone in range when it has none

### bool in_range = true {#prop-in-range}

If true, checks for health ABOVE threshold; if false, checks BELOW

## Method descriptions

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.


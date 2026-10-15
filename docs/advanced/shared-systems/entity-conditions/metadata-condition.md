<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MetadataCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Check entity metadata with flexible operations and type handling

## Properties

| | | |
|---|---|---|
| `String` | [metadata_key](#prop-metadata-key) | `""` |
| `ComparisonType` | [comparison](#prop-comparison) | `ComparisonType.EQUALS` |
| `String` | [target_value](#prop-target-value) | `""` |
| `String` | [max_value](#prop-max-value) | `""` |
| `bool` | [missing_as_empty](#prop-missing-as-empty) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Enumerations

### enum ComparisonType {#enum-comparisontype}

The options of comparison type: equals, not equals, greater than, less than, contains, starts with, ends with, exists, not exists, is empty ....

- **EQUALS** = `0`
- **NOT_EQUALS** = `1`
- **GREATER_THAN** = `2`
- **LESS_THAN** = `3`
- **CONTAINS** = `4`
- **STARTS_WITH** = `5`
- **ENDS_WITH** = `6`
- **EXISTS** = `7`
- **NOT_EXISTS** = `8`
- **IS_EMPTY** = `9`
- **NOT_EMPTY** = `10`
- **ARRAY_CONTAINS** = `11`
- **ARRAY_SIZE** = `12`

## Property descriptions

*Target*

### String metadata_key = "" {#prop-metadata-key}

Metadata key to check

*Comparison*

### ComparisonType comparison = ComparisonType.EQUALS {#prop-comparison}

Type of comparison to perform

### String target_value = "" {#prop-target-value}

Target value for comparison

### String max_value = "" {#prop-max-value}

Secondary value (for IN_RANGE)

*Behavior*

### bool missing_as_empty = true {#prop-missing-as-empty}

Whether missing keys should be treated as empty/false

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.


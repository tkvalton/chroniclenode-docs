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

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*


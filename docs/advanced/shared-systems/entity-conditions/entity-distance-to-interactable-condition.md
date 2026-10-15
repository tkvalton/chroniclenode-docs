<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityDistanceToInteractableCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks distance between the target entity and a specific interactable object. Uses EntityCondition targeting to determine the entity, then compares distance to an interactable by ID.

## Properties

| | | |
|---|---|---|
| `int` | [target_interactable_unique_id](#prop-target-interactable-unique-id) | `0` |
| `Condition.CheckLogic` | [distance_check_logic](#prop-distance-check-logic) | `Condition.CheckLogic.LESS_EQUAL` |
| `float` | [target_distance](#prop-target-distance) | `5.0` |

## Methods

| | |
|---|---|
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |

## Property descriptions

*Target Interactable*

### int target_interactable_unique_id = 0 {#prop-target-interactable-unique-id}

Unique ID of the interactable object to measure distance to

*Distance Check*

### Condition.CheckLogic distance_check_logic = Condition.CheckLogic.LESS_EQUAL {#prop-distance-check-logic}

Logic for comparing the distance

### float target_distance = 5.0 {#prop-target-distance}

Target distance to compare against

## Method descriptions

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### bool is_valid() {#method-is-valid}

Are the settings of the condition complete?

### String get_expected_argument_type() {#method-get-expected-argument-type}

The kind of thing the condition is checked against (an entity, an encounter ...).


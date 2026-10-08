<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WearingArmorClassCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks the armor an entity wears: "wears at least three pieces of plate". On a stat effect it makes a skill work only with its own armor (an Armor Skill stat that lowers damage only while plate is worn). Weapons do not count as armor.

## Properties

| | | |
|---|---|---|
| `Array[int]` | [armor_class_ids](#prop-armor-class-ids) | `[]` |
| `int` | [minimum_pieces](#prop-minimum-pieces) | `1` |
| `bool` | [invert](#prop-invert) | `false` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Property descriptions

### Array[int] armor_class_ids = [] {#prop-armor-class-ids}

The armor classes to look for (ArmorClassDefinition ids)

### int minimum_pieces = 1 {#prop-minimum-pieces}

How many pieces of those classes must be worn (counted together)

### bool invert = false {#prop-invert}

True: the condition is met when fewer pieces than that are worn (not in plate)

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*


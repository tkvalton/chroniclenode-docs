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

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.


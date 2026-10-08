<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EquippedWeaponTypeCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks the weapons an entity holds: "holds a one-handed weapon". On a stat effect it makes a skill work only with its own weapon type (a Weapon Skill stat that raises the hit chance only while a sword is held). A disarmed entity holds nothing.

## Properties

| | | |
|---|---|---|
| `Array[int]` | [weapon_type_ids](#prop-weapon-type-ids) | `[]` |
| `bool` | [require_all](#prop-require-all) | `false` |
| `bool` | [invert](#prop-invert) | `false` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Property descriptions

### Array[int] weapon_type_ids = [] {#prop-weapon-type-ids}

The weapon types to look for (WeaponTypeDefinition ids)

### bool require_all = false {#prop-require-all}

True: the entity must hold a weapon of every type. False: one of them is enough

### bool invert = false {#prop-invert}

True: the condition is met when the entity holds none of these types (no sword in hand)

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*


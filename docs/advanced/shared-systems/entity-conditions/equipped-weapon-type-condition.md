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

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.


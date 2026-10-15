<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityHasTagCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks the type tags of an entity ("Undead", "Beast" ...). With the target kind "opponent" on a stat effect this is the condition behind "+30 % damage against Undead". See docs/systems/entity-stats.md, section 24.3.

## Properties

| | | |
|---|---|---|
| `Array[int]` | [tag_ids](#prop-tag-ids) | `[]` |
| `bool` | [require_all](#prop-require-all) | `false` |
| `bool` | [invert](#prop-invert) | `false` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

### Array[int] tag_ids = [] {#prop-tag-ids}

The tags to look for (EntityTagDefinition ids)

### bool require_all = false {#prop-require-all}

True: the entity must have every tag. False: any one of them is enough

### bool invert = false {#prop-invert}

True: the condition is met when the entity has NONE of the tags (not undead)

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool is_valid() {#method-is-valid}

Are the settings of the condition complete?


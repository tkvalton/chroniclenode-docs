<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnerAliveCountCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks how many things a spawner made are standing now (NPCs that are alive, objects that are there, items that lie): "the wolves of the forest are all dead" is a count of 0. See docs: World &gt; Spawners.

## Properties

| | | |
|---|---|---|
| `int` | [spawner_id](#prop-spawner-id) | `0` |
| `Condition.CheckLogic` | [comparison_logic](#prop-comparison-logic) | `Condition.CheckLogic.EQUAL` |
| `int` | [target_count](#prop-target-count) | `0` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `_argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

### int spawner_id = 0 {#prop-spawner-id}

The spawner (a placed Spawner of a world: Uniques &gt; Spawners)

### Condition.CheckLogic comparison_logic = Condition.CheckLogic.EQUAL {#prop-comparison-logic}

How the count is compared with the number

### int target_count = 0 {#prop-target-count}

The number to compare the count with

## Method descriptions

### bool evaluate( _argument: Variant = null ) {#method-evaluate}

Is the condition met?

### String get_description() {#method-get-description}

A short text about what the condition checks.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### String get_expected_argument_type() {#method-get-expected-argument-type}

The kind of thing the condition is checked against (an entity, an encounter ...).

### bool is_valid() {#method-is-valid}

Are the settings of the condition complete?


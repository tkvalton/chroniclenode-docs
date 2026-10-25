<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GroundWeatherCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks how wet the ground is or how much snow lies on it (what the terrain shows): "the snow is at least half" opens a pass, "the ground is dry" lets a fire be lit. See docs: World &gt; Ground weather.

## Properties

| | | |
|---|---|---|
| `Measure` | [measure](#prop-measure) | `Measure.SNOW` |
| `Condition.CheckLogic` | [comparison_logic](#prop-comparison-logic) | `Condition.CheckLogic.GREATER_EQUAL` |
| `float` | [level](#prop-level) | `0.5` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `_argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |
| `bool` | [is_valid](#method-is-valid)() |

## Enumerations

### enum Measure {#enum-measure}

What is measured

- **WETNESS** = `0`
- **SNOW** = `1`

## Property descriptions

### Measure measure = Measure.SNOW {#prop-measure}

Wetness or snow

### Condition.CheckLogic comparison_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-comparison-logic}

How the level is compared with the number

### float level = 0.5 {#prop-level}

The number to compare the level with (0 to 1)

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


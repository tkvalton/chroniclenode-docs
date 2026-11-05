<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TimeOfDayCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Is it between two hours of the game day? The condition of a schedule that is for a time of day: the guard walks his round from 8 to 18, goes home from 18 to 22 and sleeps from 22 to 8. The hours are the game clock (8.5 = half past eight); a range that goes past midnight (22 to 8) works; the same hour twice is all day. It does not look at the entity: the entity target is not used.

## Properties

| | | |
|---|---|---|
| `float` | [start_hour](#prop-start-hour) | `8.0` |
| `float` | [end_hour](#prop-end-hour) | `18.0` |

## Methods

| | |
|---|---|
| `bool` | [contains_hour](#method-contains-hour)( `start: float, end: float, hour: float` ) *static* |
| `String` | [clock_text](#method-clock-text)( `hour: float` ) *static* |
| `bool` | [evaluate](#method-evaluate)( `_argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |

## Property descriptions

### float start_hour = 8.0 {#prop-start-hour}

The hour the time starts (0 to 24; 8.5 = 08:30)

### float end_hour = 18.0 {#prop-end-hour}

The hour the time ends (0 to 24). Before this hour is over the condition is met; at this hour it is not

## Method descriptions

### bool contains_hour( start: float, end: float, hour: float ) {#method-contains-hour}

Is the hour inside the range? A range past midnight (start after end) is the two stretches around it; start equal to end is all day

### String clock_text( hour: float ) {#method-clock-text}

The hour as clock text: 8.5 -&gt; "08:30"

### bool evaluate( _argument: Variant = null ) {#method-evaluate}

Is the game clock inside the range now?

### String get_description() {#method-get-description}

A short text about the condition

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values

### String get_expected_argument_type() {#method-get-expected-argument-type}

The kind of thing the condition is checked against


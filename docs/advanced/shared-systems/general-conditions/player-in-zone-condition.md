<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerInZoneCondition

**Inherits:** [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks whether the party is in a zone. The zone counts when the party is in it or in one of its sub-zones: "the party is in Elderwood" is true in The Old Mill. See docs: World &gt; Zones.

## Properties

| | | |
|---|---|---|
| `int` | [zone_id](#prop-zone-id) | `0` |
| `bool` | [require_presence](#prop-require-presence) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `_argument: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

*Zone Check*

### int zone_id = 0 {#prop-zone-id}

The zone to check (a Zone of the database: World &gt; Zones)

### bool require_presence = true {#prop-require-presence}

Whether the party should be in the zone (true) or outside it (false)

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


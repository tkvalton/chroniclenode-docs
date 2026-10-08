<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Quality

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Defines item quality/rarity with display properties Create instances as .tres files for each quality tier

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `int` | [quality_tier](#prop-quality-tier) | `1` |

## Methods

| | |
|---|---|
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_id](#method-get-id)() |
| `bool` | [is_higher_than](#method-is-higher-than)( `other: Quality` ) |
| `bool` | [is_lower_than](#method-is-lower-than)( `other: Quality` ) |
| `String` | [get_quality_description](#method-get-quality-description)() |

## Property descriptions

### Color color = Color.WHITE {#prop-color}

Color for UI display

### int quality_tier = 1 {#prop-quality-tier}

Numeric tier for sorting/comparison (1=lowest, 5=highest)

## Method descriptions

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### String get_id() {#method-get-id}

*No description yet.*

### bool is_higher_than( other: Quality ) {#method-is-higher-than}

*No description yet.*

### bool is_lower_than( other: Quality ) {#method-is-lower-than}

*No description yet.*

### String get_quality_description() {#method-get-quality-description}

*No description yet.*


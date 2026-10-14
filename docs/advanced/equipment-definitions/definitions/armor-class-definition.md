<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ArmorClassDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `Array[ArmorClassBonus]` | [bonuses](#prop-bonuses) | `[]` |

## Methods

| | |
|---|---|
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_id](#method-get-id)() |
| `Dictionary` | [get_armor_info](#method-get-armor-info)() |
| `String` | [get_description_text](#method-get-description-text)() |

## Property descriptions

*Visual Properties*

### Color color = Color.WHITE {#prop-color}

Color associated with this armor type

*Bonuses Of The Class*

### Array[ArmorClassBonus] bonuses = [] {#prop-bonuses}

The effects the wearer gets for wearing pieces of this class, in the way of a set bonus: each bonus says how many worn pieces of the class it needs. Empty = the class gives nothing by itself

## Method descriptions

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### String get_id() {#method-get-id}

*No description yet.*

### Dictionary get_armor_info() {#method-get-armor-info}

*No description yet.*

### String get_description_text() {#method-get-description-text}

*No description yet.*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherTable

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A table of weathers for a place that has a weather of its own, not the same all the time: the lines are weathers (or a clear sky) with a weight and how long they last. When the table is in force (the world has it as its default, or the zone the party is in) a line is picked by weight, lasts its time, and then another is picked (it may be the same). A zone with a table of its own uses it instead of the world's. The table is made in World Configs &gt; Weather Tables. See docs: World &gt; Weather tables.

## Properties

| | | |
|---|---|---|
| `Array[WeatherTableEntry]` | [entries](#prop-entries) | `[]` |

## Methods

| | |
|---|---|
| `WeatherTableEntry` | [pick](#method-pick)( `rng: RandomNumberGenerator` ) |
| `float` | [chance_of](#method-chance-of)( `entry: WeatherTableEntry` ) |
| `PackedStringArray` | [validate](#method-validate)() |

## Property descriptions

### Array[WeatherTableEntry] entries = [] {#prop-entries}

The lines of the table

## Method descriptions

### WeatherTableEntry pick( rng: RandomNumberGenerator ) {#method-pick}

Picks a line by weight (null when the table has no line that can come up)

### float chance_of( entry: WeatherTableEntry ) {#method-chance-of}

The share of the table a line has (0 to 1)

### PackedStringArray validate() {#method-validate}

The warnings of this table (shown by the editor)


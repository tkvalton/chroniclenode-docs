<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnTableDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A **spawn table**: a list of things that can appear (SpawnEntry), each with a weight, like a loot table. A spawner holds one and rolls it every time it makes something. It is a database type (World &gt; Spawn Tables): one table can be used by any number of spawners. A line can be another table, so a "Forest animals" table can hold a "Wolves" table and a "Deer" table. `roll()` gives the line that came up, with tables inside tables already followed. See docs: World &gt; Spawn Tables.

## Properties

| | | |
|---|---|---|
| `Array[SpawnEntry]` | [entries](#prop-entries) | `[]` |

## Methods

| | |
|---|---|
| `float` | [get_total_weight](#method-get-total-weight)() |
| `Array[float]` | [get_chances](#method-get-chances)() |
| `int` | [pick_index](#method-pick-index)( `rng: RandomNumberGenerator = null` ) |
| `SpawnEntry` | [roll](#method-roll)( `rng: RandomNumberGenerator = null, depth: int = 0` ) |
| `Array[SpawnEntry]` | [roll_many](#method-roll-many)( `count: int, rng: RandomNumberGenerator = null` ) |
| `PackedStringArray` | [get_problems](#method-get-problems)() |

## Property descriptions

### Array[SpawnEntry] entries = [] {#prop-entries}

The lines of the table

## Method descriptions

### float get_total_weight() {#method-get-total-weight}

The sum of the weights of the lines that can come up.

### Array[float] get_chances() {#method-get-chances}

The chance (percent) of every line, in the order of the lines: 0 for a line that cannot come up (weight 0, or a target that does not exist). They add up to 100 (or all 0 for an empty table).

### int pick_index( rng: RandomNumberGenerator = null ) {#method-pick-index}

The position of the line that comes up (-1 when nothing can: an empty table, or no line with a weight and a target).

### SpawnEntry roll( rng: RandomNumberGenerator = null, depth: int = 0 ) {#method-roll}

Rolls the table: the line that came up, a line of another table when it was a table (followed up to MAX_DEPTH deep), or null when nothing can come up. The line "Nothing" comes back as itself: whoever asks makes nothing for it.

### Array[SpawnEntry] roll_many( count: int, rng: RandomNumberGenerator = null ) {#method-roll-many}

Rolls the table `count` times (for the editor's preview and for a spawner that fills several places at once). A roll that came up with nothing is not in the list.

### PackedStringArray get_problems() {#method-get-problems}

Problems of the table for the editor to show: no lines, lines that cannot come up, a table that holds itself.


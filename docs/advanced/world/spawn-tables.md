# Spawn tables: how they are built

This page is for developers. For the fields and the way to use them, see [Spawn tables](/basic/world/spawn-tables).

A spawn table is a database record (`spawn_table`, `res://src/data/spawn_tables/`) that holds a list of lines. It only **answers a question**: *what comes up next?* What is made out of the answer, and where, is up to the spawner that asked.

## The pieces

| Piece | What it does |
|---|---|
| [`SpawnTableDefinition`](/advanced/world/spawning/spawn-table-definition) | The record: `entries`. `pick_index(rng)`, `roll(rng)`, `roll_many(count, rng)`, `get_total_weight()`, `get_chances()` (percent for each line) and `get_problems()` |
| [`SpawnEntry`](/advanced/world/spawning/spawn-entry) | One line, a sub-resource of the table: `kind` (`NPC`, `INTERACTABLE`, `DROPPED_ITEM`, `DROPPED_CURRENCY`, `LOOT_TABLE`, `SPAWN_TABLE`, `NOTHING`), `weight`, `target_id`, the NPC fields (`level_min`, `level_max`, `group_min`, `group_max`, `encounter_mode`) and the amount (`amount_min`, `amount_max`). `database_for_kind(kind)` says which database the target is in. `pick_group_size`, `pick_level` and `pick_amount` take a number between the two ends |
| [`SpawnTablesEditor`](/advanced/editor/world/spawn-tables-editor) | The editor of the Database (a `ResourceEditor`): the rows of the lines are built in code under *Basic Properties*; a change writes to the line and saves the table |

## The roll

`pick_index` adds up the weights of the lines that **can roll** (`SpawnEntry.can_roll()`: a weight above 0 and a target that exists in the database; *Nothing* needs no target), takes a random point in the sum and returns the line it falls in, or -1 when no line can come up. A deleted NPC therefore does not break a table: its line is skipped and the others share its chance.

`roll` follows a line of kind `SPAWN_TABLE` into the other table, up to `SpawnEntry.MAX_DEPTH` (8) deep, and returns the **leaf line** (or null when the chain ended without one, or came to a loop). A line of *Nothing* comes back as itself: the caller makes nothing for it. `roll_many` leaves those out.

The random generator is a parameter, so a spawner can roll with a seed of its own (the same seed gives the same spawns, which the saving of a spawner can use).

## Tests

`tests/spawn_tables_audit.gd` (36 checks): the lines (validity, names, the numbers they pick, the summary), the roll (weights, chances, a missing target, a table inside a table, a loop, a table that holds itself), saving, and the editor in the real main editor (rows, chances, kind change, moving and removing lines, the roll of 100).

## See also

- [World: how it is built](/advanced/world/), [Encounters](/advanced/world/encounters).

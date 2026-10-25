<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnEntry

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One line of a spawn table: **what** can appear (an NPC, an interactable, a dropped item, some money, a roll of a loot table, another spawn table, or nothing) and **how likely** it is next to the other lines (its weight). An NPC line also says how many appear at once (a group), at what level, and whether the group fights as one (an encounter). An item or money line says how many. SpawnTableDefinition rolls a line; a spawner makes what it says. See docs: World &gt; Spawn Tables.

## Properties

| | | |
|---|---|---|
| `Kind` | [kind](#prop-kind) | `Kind.NPC` |
| `float` | [weight](#prop-weight) | `1.0` |
| `int` | [target_id](#prop-target-id) | `0` |
| `int` | [level_min](#prop-level-min) | `0` |
| `int` | [level_max](#prop-level-max) | `0` |
| `int` | [group_min](#prop-group-min) | `1` |
| `int` | [group_max](#prop-group-max) | `1` |
| `EncounterMode` | [encounter_mode](#prop-encounter-mode) | `EncounterMode.NONE` |
| `int` | [amount_min](#prop-amount-min) | `1` |
| `int` | [amount_max](#prop-amount-max) | `1` |

## Methods

| | |
|---|---|
| `String` | [database_for_kind](#method-database-for-kind)( `entry_kind: Kind` ) *static* |
| `String` | [kind_name](#method-kind-name)( `entry_kind: Kind` ) *static* |
| `bool` | [is_valid](#method-is-valid)() |
| `bool` | [can_roll](#method-can-roll)() |
| `String` | [get_target_name](#method-get-target-name)() |
| `String` | [get_summary](#method-get-summary)() |
| `int` | [pick_group_size](#method-pick-group-size)( `rng: RandomNumberGenerator = null` ) |
| `int` | [pick_level](#method-pick-level)( `rng: RandomNumberGenerator = null` ) |
| `int` | [pick_amount](#method-pick-amount)( `rng: RandomNumberGenerator = null` ) |

## Enumerations

### enum Kind {#enum-kind}

What the line makes

- **NPC** = `0` - An NPC of the database
- **INTERACTABLE** = `1` - An interactable object (a herb, an ore node, a chest ...)
- **DROPPED_ITEM** = `2` - An item that lies on the ground
- **DROPPED_CURRENCY** = `3` - Some money that lies on the ground
- **LOOT_TABLE** = `4` - What a loot table gives when it is rolled, lying on the ground
- **SPAWN_TABLE** = `5` - Another spawn table is rolled in its place (a table of tables)
- **NOTHING** = `6` - Nothing appears (the chance that the place stays empty)

### enum EncounterMode {#enum-encountermode}

Whether a group of NPCs fights as one

- **NONE** = `0` - Each NPC acts alone
- **NEW_GROUP** = `1` - Every group that appears is a new encounter: its NPCs fight together

## Constants

- `int` **MAX_DEPTH** = `8` - The deepest chain of tables inside tables that is followed (a loop of tables ends here)

## Property descriptions

### Kind kind = Kind.NPC {#prop-kind}

What the line makes

### float weight = 1.0 {#prop-weight}

How likely the line is next to the others: a line with weight 3 comes up three times as often as one with weight 1. 0 = never

### int target_id = 0 {#prop-target-id}

What it makes, an id of the database: the NPC, the interactable, the item, the currency, the loot table or the spawn table (not used by Nothing)

*NPC*

### int level_min = 0 {#prop-level-min}

The lowest level an NPC of this line appears at (0 = the level of its definition)

### int level_max = 0 {#prop-level-max}

The highest level (never under the lowest; 0 = the level of its definition)

### int group_min = 1 {#prop-group-min}

The fewest NPCs that appear together from this line

### int group_max = 1 {#prop-group-max}

The most NPCs that appear together from this line

### EncounterMode encounter_mode = EncounterMode.NONE {#prop-encounter-mode}

Whether the NPCs that appear together fight as one

*Items and money*

### int amount_min = 1 {#prop-amount-min}

The fewest items (or coins) that lie there

### int amount_max = 1 {#prop-amount-max}

The most items (or coins)

## Method descriptions

### String database_for_kind( entry_kind: Kind ) {#method-database-for-kind}

The database a kind picks its target from ("" = it has none).

### String kind_name( entry_kind: Kind ) {#method-kind-name}

The name of a kind for the editor.

### bool is_valid() {#method-is-valid}

Does the line make anything that can be made now? (Nothing always can; the others need their target to exist.) A line that cannot is never rolled.

### bool can_roll() {#method-can-roll}

Can the line come up (valid, and a weight above 0)?

### String get_target_name() {#method-get-target-name}

The name of what the line makes ("Wolf", "Iron ore", "Nothing"), or "(none chosen)" / "(missing)".

### String get_summary() {#method-get-summary}

A line of text about the entry: "NPC: Wolf, 2 to 4 together, level 5 to 7".

### int pick_group_size( rng: RandomNumberGenerator = null ) {#method-pick-group-size}

How many NPCs appear together this time (between the two numbers; never under 1).

### int pick_level( rng: RandomNumberGenerator = null ) {#method-pick-level}

The level an NPC appears at this time: between the two numbers, or 0 = the level of its definition.

### int pick_amount( rng: RandomNumberGenerator = null ) {#method-pick-amount}

How many items (or coins) lie there this time.


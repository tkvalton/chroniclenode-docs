<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FactionDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Enhanced faction definition with reputation levels and relationships

## Properties

| | | |
|---|---|---|
| `Color` | [faction_color](#prop-faction-color) | `Color.WHITE` |
| `Array[ReputationLevel]` | [reputation_levels](#prop-reputation-levels) | `[]` |
| `Dictionary` | [faction_relationships](#prop-faction-relationships) | `{}` |
| `bool` | [is_builtin](#prop-is-builtin) | `false` |

## Variables

| | | |
|---|---|---|
| `Dictionary` | [runtime_reputation](#var-runtime-reputation) | `{}` |

## Methods

| | |
|---|---|
| `bool` | [add_reputation](#method-add-reputation)( `other_faction_id: int, amount: int` ) |
| `bool` | [set_reputation](#method-set-reputation)( `other_faction_id: int, amount: int` ) |
| `int` | [get_reputation](#method-get-reputation)( `other_faction_id: int` ) |
| `ReputationLevel` | [get_standing_level](#method-get-standing-level)( `other_faction_id: int` ) |
| `String` | [get_standing_name](#method-get-standing-name)( `other_faction_id: int` ) |
| `ReputationLevel` | [get_reputation_level_for_value](#method-get-reputation-level-for-value)( `reputation: int` ) |
| `ReputationLevel` | [get_reputation_level_by_name](#method-get-reputation-level-by-name)( `level_name: String` ) |
| `void` | [add_reputation_level](#method-add-reputation-level)( `level: ReputationLevel` ) |
| `bool` | [remove_reputation_level](#method-remove-reputation-level)( `level_name: String` ) |
| `Array[String]` | [get_reputation_level_names](#method-get-reputation-level-names)() |
| `ReputationLevel` | [get_highest_reputation_level](#method-get-highest-reputation-level)() |
| `ReputationLevel` | [get_lowest_reputation_level](#method-get-lowest-reputation-level)() |
| `void` | [set_relationship_with_faction](#method-set-relationship-with-faction)( `other_faction_id: int, standing_name: String` ) |
| `String` | [get_relationship_with_faction](#method-get-relationship-with-faction)( `other_faction_id: int` ) |
| `bool` | [remove_relationship_with_faction](#method-remove-relationship-with-faction)( `other_faction_id: int` ) |
| `bool` | [is_hostile_to](#method-is-hostile-to)( `other_faction_id: int` ) |
| `bool` | [is_friendly_to](#method-is-friendly-to)( `other_faction_id: int` ) |
| `bool` | [is_neutral_to](#method-is-neutral-to)( `other_faction_id: int` ) |
| `bool` | [can_target_as_enemy](#method-can-target-as-enemy)( `other_faction_id: int` ) |
| `void` | [clear_runtime_reputation](#method-clear-runtime-reputation)() |
| `void` | [set_runtime_reputation](#method-set-runtime-reputation)( `reputation_data: Dictionary` ) |
| `Dictionary` | [get_runtime_reputation](#method-get-runtime-reputation)() |
| `int` | [get_id](#method-get-id)() |

## Signals

### standing_changed( other_faction_id: int, old_standing: String, new_standing: String ) {#signal-standing-changed}

Emitted when this faction's standing with another faction changes

## Property descriptions

### Color faction_color = Color.WHITE {#prop-faction-color}

Primary color associated with this faction

### Array[ReputationLevel] reputation_levels = [] {#prop-reputation-levels}

Reputation levels for this faction (sorted by min_reputation)

### Dictionary faction_relationships =  {#prop-faction-relationships}

Predefined relationships with other factions (faction_id -&gt; standing_name like "Hostile", "Friendly")

### bool is_builtin = false {#prop-is-builtin}

Whether this faction is a built-in system faction

## Variable descriptions

### Dictionary runtime_reputation =  {#var-runtime-reputation}

Runtime reputation values with other factions (faction_id -&gt; reputation_value)

## Method descriptions

### bool add_reputation( other_faction_id: int, amount: int ) {#method-add-reputation}

Add reputation with another faction

### bool set_reputation( other_faction_id: int, amount: int ) {#method-set-reputation}

Set reputation with another faction

### int get_reputation( other_faction_id: int ) {#method-get-reputation}

Get reputation with another faction

### ReputationLevel get_standing_level( other_faction_id: int ) {#method-get-standing-level}

Get current standing level with another faction

### String get_standing_name( other_faction_id: int ) {#method-get-standing-name}

Get standing name with another faction

### ReputationLevel get_reputation_level_for_value( reputation: int ) {#method-get-reputation-level-for-value}

Get reputation level that contains a specific reputation value

### ReputationLevel get_reputation_level_by_name( level_name: String ) {#method-get-reputation-level-by-name}

Get reputation level by name

### void add_reputation_level( level: ReputationLevel ) {#method-add-reputation-level}

Add a new reputation level (maintains sorting)

### bool remove_reputation_level( level_name: String ) {#method-remove-reputation-level}

Remove reputation level by name

### Array[String] get_reputation_level_names() {#method-get-reputation-level-names}

Get all reputation level names

### ReputationLevel get_highest_reputation_level() {#method-get-highest-reputation-level}

Get the highest reputation level

### ReputationLevel get_lowest_reputation_level() {#method-get-lowest-reputation-level}

Get the lowest reputation level

### void set_relationship_with_faction( other_faction_id: int, standing_name: String ) {#method-set-relationship-with-faction}

Set relationship with another faction

### String get_relationship_with_faction( other_faction_id: int ) {#method-get-relationship-with-faction}

Get relationship with another faction

### bool remove_relationship_with_faction( other_faction_id: int ) {#method-remove-relationship-with-faction}

Remove relationship with another faction

### bool is_hostile_to( other_faction_id: int ) {#method-is-hostile-to}

Check if this faction is hostile to another faction

### bool is_friendly_to( other_faction_id: int ) {#method-is-friendly-to}

Check if this faction is friendly to another faction

### bool is_neutral_to( other_faction_id: int ) {#method-is-neutral-to}

Check if this faction is neutral to another faction

### bool can_target_as_enemy( other_faction_id: int ) {#method-can-target-as-enemy}

Check if this faction can target another as an enemy

### void clear_runtime_reputation() {#method-clear-runtime-reputation}

Clear runtime reputation (for new game)

### void set_runtime_reputation( reputation_data: Dictionary ) {#method-set-runtime-reputation}

Initialize runtime reputation from save data

### Dictionary get_runtime_reputation() {#method-get-runtime-reputation}

Get runtime reputation for saving

### int get_id() {#method-get-id}

Get ID from filename or use faction_id


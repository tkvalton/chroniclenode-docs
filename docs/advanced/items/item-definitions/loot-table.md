<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LootTable

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A shareable resource for randomizing loot drops Can be used by entities, containers, chests, etc.

## Properties

| | | |
|---|---|---|
| `int` | [min_items](#prop-min-items) | `1` |
| `int` | [max_items](#prop-max-items) | `3` |
| `Array[LootEntry]` | [loot_entries](#prop-loot-entries) | `[]` |
| `Array[LootEntry]` | [guaranteed_entries](#prop-guaranteed-entries) | `[]` |

## Methods

| | |
|---|---|
| `Dictionary` | [generate_loot](#method-generate-loot)( `looter: Variant = null` ) |
| `void` | [add_loot_entry](#method-add-loot-entry)( `item_id: int, weight: int = 10, min_qty: int = 1, max_qty: int = 1, can_dup: bool = false` ) |
| `void` | [add_guaranteed_entry](#method-add-guaranteed-entry)( `item_id: int, min_qty: int = 1, max_qty: int = 1` ) |
| `int` | [get_total_weight](#method-get-total-weight)() |
| `Array` | [validate](#method-validate)() |

## Property descriptions

### int min_items = 1 {#prop-min-items}

Minimum number of items to roll from the loot_entries array

### int max_items = 3 {#prop-max-items}

Maximum number of items to roll from the loot_entries array

### Array[LootEntry] loot_entries = [] {#prop-loot-entries}

Array of possible loot entries with weights and quantities - rolled randomly up to min/max_items

### Array[LootEntry] guaranteed_entries = [] {#prop-guaranteed-entries}

Array of guaranteed loot entries - these always drop and don't count toward min/max_items

## Method descriptions

### Dictionary generate_loot( looter: Variant = null ) {#method-generate-loot}

Generate loot based on the table configuration. `looter` (the entity that gets it, usually the killer) can change it through two gain channels: loot_quantity (the size of every stack; a fraction is a chance of one more) and loot_rarity (magic find: a percentage that raises the weight of the entries that are rarer than the table's average)

### void add_loot_entry( item_id: int, weight: int = 10, min_qty: int = 1, max_qty: int = 1, can_dup: bool = false ) {#method-add-loot-entry}

Helper function to add a loot entry

### void add_guaranteed_entry( item_id: int, min_qty: int = 1, max_qty: int = 1 ) {#method-add-guaranteed-entry}

Helper function to add a guaranteed entry

### int get_total_weight() {#method-get-total-weight}

Get total weight

### Array validate() {#method-validate}

Validate the loot table configuration


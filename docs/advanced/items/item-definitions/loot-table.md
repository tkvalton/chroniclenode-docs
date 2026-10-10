<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LootTable

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A shareable resource for randomizing loot drops Can be used by entities, containers, chests, etc.

## Description

The table says WHAT drops. WHEN it drops and at what item level is said by the loot rule of the holder (LootRule, LootLevelSource); a table can also pin its own level source. Entries are items, amounts of a currency, or other tables. See docs/systems/ability-ranks-and-item-generation.md, section 8.

## Properties

| | | |
|---|---|---|
| `int` | [min_items](#prop-min-items) | `1` |
| `int` | [max_items](#prop-max-items) | `3` |
| `Array[LootEntry]` | [loot_entries](#prop-loot-entries) | `[]` |
| `Array[LootEntry]` | [guaranteed_entries](#prop-guaranteed-entries) | `[]` |
| `int` | [nothing_weight](#prop-nothing-weight) | `0` |
| `int` | [min_quality_tier](#prop-min-quality-tier) | `0` |
| `LootLevelSource` | [level_source](#prop-level-source) |  |

## Methods

| | |
|---|---|
| `Dictionary` | [generate_loot](#method-generate-loot)( `looter: Variant = null` ) |
| `Dictionary` | [roll_drops](#method-roll-drops)( `context: Dictionary = {}` ) |
| `void` | [add_loot_entry](#method-add-loot-entry)( `item_id: int, weight: int = 10, min_qty: int = 1, max_qty: int = 1, can_dup: bool = false` ) |
| `void` | [add_guaranteed_entry](#method-add-guaranteed-entry)( `item_id: int, min_qty: int = 1, max_qty: int = 1` ) |
| `void` | [add_guaranteed_currency](#method-add-guaranteed-currency)( `currency_id: int, min_amount: int, max_amount: int = -1` ) |
| `int` | [get_total_weight](#method-get-total-weight)() |
| `bool` | [uses_item_level](#method-uses-item-level)() |
| `Array` | [validate](#method-validate)() |

## Constants

- `int` **MAX_DEPTH** = `6` - The most tables that can be inside each other (a table that points back at itself does not run for ever)

## Property descriptions

### int min_items = 1 {#prop-min-items}

Minimum number of items to roll from the loot_entries array

### int max_items = 3 {#prop-max-items}

Maximum number of items to roll from the loot_entries array

### Array[LootEntry] loot_entries = [] {#prop-loot-entries}

Array of possible loot entries with weights and quantities - rolled randomly up to min/max_items

### Array[LootEntry] guaranteed_entries = [] {#prop-guaranteed-entries}

Array of guaranteed loot entries - these always drop and don't count toward min/max_items

### int nothing_weight = 0 {#prop-nothing-weight}

The weight of "nothing": a roll can come up empty. With the entries at a total weight of 30 and a nothing weight of 10, a roll in four gives nothing (0 = never)

### int min_quality_tier = 0 {#prop-min-quality-tier}

Generated items from this table never roll a quality under this tier (a boss never drops Common). 0 = any

### LootLevelSource level_source {#prop-level-source}

Where the item level of the drops comes from. A table that sets one (not Inherit) overrules the loot rule of the holder

## Method descriptions

### Dictionary generate_loot( looter: Variant = null ) {#method-generate-loot}

Generate loot based on the table configuration. `looter` (the entity that gets it, usually the killer) can change it through two gain channels: loot_quantity (the size of every stack; a fraction is a chance of one more) and loot_rarity (magic find: a percentage that raises the weight of the entries that are rarer than the table's average). The answer is item id -&gt; quantity: items only, at item level 1. Use `roll_drops` for currency, nested tables and item levels

### Dictionary roll_drops( context: Dictionary = &#123;&#125; ) {#method-roll-drops}

The drops of one roll: &#123;"items": [&#123;"item_id", "quantity", "item_level", "min_quality_tier", "magic_find"&#125;], "currency": &#123;currency id: amount&#125;&#125;. Context (all optional): `looter` (an entity), `item_level` (the level of the items, 1 when missing), `rng` (a RandomNumberGenerator), `level_resolver` (a Callable that gets the LootLevelSource of a nested table and the level it inherits, and returns its level), `depth`

### void add_loot_entry( item_id: int, weight: int = 10, min_qty: int = 1, max_qty: int = 1, can_dup: bool = false ) {#method-add-loot-entry}

Helper function to add a loot entry

### void add_guaranteed_entry( item_id: int, min_qty: int = 1, max_qty: int = 1 ) {#method-add-guaranteed-entry}

Helper function to add a guaranteed entry

### void add_guaranteed_currency( currency_id: int, min_amount: int, max_amount: int = -1 ) {#method-add-guaranteed-currency}

Helper function to add a guaranteed amount of a currency

### int get_total_weight() {#method-get-total-weight}

Get total weight

### bool uses_item_level() {#method-uses-item-level}

Does anything in the table (or the tables inside it) need an item level: a generated item, or an entry with a level band?

### Array validate() {#method-validate}

Validate the loot table configuration


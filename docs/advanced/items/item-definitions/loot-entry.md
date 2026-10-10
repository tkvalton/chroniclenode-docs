<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LootEntry

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One line of a loot table: an item, an amount of a currency, or another loot table.

## Properties

| | | |
|---|---|---|
| `EntryType` | [entry_type](#prop-entry-type) | `EntryType.ITEM` |
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [currency_id](#prop-currency-id) | `0` |
| `int` | [table_id](#prop-table-id) | `0` |
| `int` | [weight](#prop-weight) | `10` |
| `int` | [min_quantity](#prop-min-quantity) | `1` |
| `int` | [max_quantity](#prop-max-quantity) | `1` |
| `bool` | [can_duplicate](#prop-can-duplicate) | `false` |
| `float` | [chance](#prop-chance) | `100.0` |
| `int` | [min_level](#prop-min-level) | `0` |
| `int` | [max_level](#prop-max-level) | `0` |

## Methods

| | |
|---|---|
| `bool` | [fits_level](#method-fits-level)( `item_level: int` ) |
| `int` | [get_target_id](#method-get-target-id)() |
| `String` | [get_key](#method-get-key)() |

## Enumerations

### enum EntryType {#enum-entrytype}

What the entry gives

- **ITEM** = `0` - An item (`item_id`)
- **CURRENCY** = `1` - An amount of a currency (`currency_id`, between the minimum and the maximum quantity)
- **TABLE** = `2` - The drops of another loot table (`table_id`): "a boss drops its own table and the common table of the zone"

## Property descriptions

### EntryType entry_type = EntryType.ITEM {#prop-entry-type}

*No description yet.*

### int item_id = 0 {#prop-item-id}

ITEM: the item

### int currency_id = 0 {#prop-currency-id}

CURRENCY: the currency

### int table_id = 0 {#prop-table-id}

TABLE: the loot table

### int weight = 10 {#prop-weight}

Higher weight = more likely among the random entries of the table (not used by guaranteed entries)

### int min_quantity = 1 {#prop-min-quantity}

*No description yet.*

### int max_quantity = 1 {#prop-max-quantity}

*No description yet.*

### bool can_duplicate = false {#prop-can-duplicate}

The same item can be picked again in the same roll

### float chance = 100.0 {#prop-chance}

The chance (percent) that the entry gives anything once it is picked (a guaranteed entry of 50 gives half the time)

### int min_level = 0 {#prop-min-level}

The lowest item level this entry drops at (0 = any): the Dragon Scale never drops from level 5 loot

### int max_level = 0 {#prop-max-level}

The highest item level this entry drops at (0 = any): the Rusty Sword stops dropping at level 20

## Method descriptions

### bool fits_level( item_level: int ) {#method-fits-level}

Can the entry drop at this item level?

### int get_target_id() {#method-get-target-id}

What the entry points at, for a check that it points at something

### String get_key() {#method-get-key}

Does the entry drop the same thing every time it is picked (same id as another entry of the table is a duplicate)?


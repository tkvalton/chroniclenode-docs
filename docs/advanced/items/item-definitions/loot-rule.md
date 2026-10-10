<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LootRule

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One rule of what a holder (an NPC, a chest, a crate) hands out and when: a loot table, a trigger, and where the item level of the drops comes from.

## Description

The loot table says WHAT can drop; the rule says WHEN (the trigger) and at what level. A holder can have several rules: a guard has a small table of coins and a trinket for the thief (On First Access) and a bigger table for when it dies (On Death). A rule that has rolled once on First Access does not roll again (the holder remembers). See LootDispatcher and docs/systems/ability-ranks-and-item-generation.md, section 8.

## Properties

| | | |
|---|---|---|
| `Trigger` | [trigger](#prop-trigger) | `Trigger.ON_DEATH` |
| `int` | [table_id](#prop-table-id) | `0` |
| `LootTable` | [own_table](#prop-own-table) |  |
| `LootLevelSource` | [level_source](#prop-level-source) |  |
| `bool` | [uses_receiver](#prop-uses-receiver) | `true` |

## Methods

| | |
|---|---|
| `LootTable` | [get_table](#method-get-table)() |
| `bool` | [has_table](#method-has-table)() |
| `String` | [get_trigger_name](#method-get-trigger-name)( `value: Trigger` ) *static* |
| `String` | [describe](#method-describe)() |
| `Array[String]` | [validate](#method-validate)( `holder_is_npc: bool = true, holder_has_health: bool = true` ) |
| `LootRule` | [from_table](#method-from-table)( `p_table_id: int, p_trigger: Trigger` ) *static* |
| `LootRule` | [from_inventory](#method-from-inventory)( `inventory: Dictionary` ) *static* |

## Enumerations

### enum Trigger {#enum-trigger}

- **ON_INITIALIZE** = `0` - When the holder is made: an NPC spawns, an object is set up. What it gets is there to pickpocket, steal or open from the start
- **ON_DEATH** = `1` - When an NPC dies. The loot is on the body
- **ON_DESTROYED** = `2` - When an object with health is destroyed. The remains stay lootable
- **ON_FIRST_ACCESS** = `3` - The first time someone opens the inventory: a chest is opened, a pocket is picked, a body is looted. Rolled once and kept

## Property descriptions

### Trigger trigger = Trigger.ON_DEATH {#prop-trigger}

*No description yet.*

### int table_id = 0 {#prop-table-id}

A loot table of the project (Items &gt; Loot Tables). Used when the rule has no table of its own

### LootTable own_table {#prop-own-table}

A table made for this holder only, edited with the rule. It is used instead of `table_id` when it is set ("this guard carries the key" needs no table in the shared list)

### LootLevelSource level_source {#prop-level-source}

Where the item level of the drops comes from. Inherit = the loot table's own source if it has one, else the project default for this kind of holder

### bool uses_receiver = true {#prop-uses-receiver}

The one who gets the loot (the killer, the one who opens the chest, the one who picks the pocket) changes it with their loot quantity and magic find

## Method descriptions

### LootTable get_table() {#method-get-table}

The table the rule rolls (its own, else the shared one; null when it has none)

### bool has_table() {#method-has-table}

*No description yet.*

### String get_trigger_name( value: Trigger ) {#method-get-trigger-name}

*No description yet.*

### String describe() {#method-describe}

A short text for the editor: "On Death: Wolf loot (Holder level)"

### Array[String] validate( holder_is_npc: bool = true, holder_has_health: bool = true ) {#method-validate}

Configuration problems as readable messages (empty = fine). `holder_is_npc` says whether the holder can die; `holder_has_health` whether an object can be destroyed

### LootRule from_table( p_table_id: int, p_trigger: Trigger ) {#method-from-table}

A rule made from a holder's old settings: a loot table with a trigger (the old `loot_table` + `loot_table_logic` of an NPC)

### LootRule from_inventory( inventory: Dictionary ) {#method-from-inventory}

A rule made from an old fixed inventory (&#123;"items": &#123;item id: quantity&#125;, "currency": &#123;currency id: amount&#125;&#125;): its own table with guaranteed entries, rolled when the holder is made


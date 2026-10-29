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
| `Delivery` | [delivery](#prop-delivery) | `Delivery.INHERIT` |
| `int` | [table_id](#prop-table-id) | `0` |
| `LootTable` | [own_table](#prop-own-table) |  |
| `LootLevelSource` | [level_source](#prop-level-source) |  |
| `bool` | [uses_receiver](#prop-uses-receiver) | `true` |

## Methods

| | |
|---|---|
| `Delivery` | [get_delivery](#method-get-delivery)( `holder_is_npc: bool` ) |
| `LootTable` | [get_table](#method-get-table)() |
| `bool` | [has_table](#method-has-table)() |
| `String` | [get_trigger_name](#method-get-trigger-name)( `value: Trigger` ) *static* |
| `String` | [describe](#method-describe)() |
| `Array[String]` | [validate](#method-validate)( `holder_is_npc: bool = true, holder_has_health: bool = true` ) |
| `LootRule` | [from_table](#method-from-table)( `p_table_id: int, p_trigger: Trigger` ) *static* |
| `LootRule` | [from_inventory](#method-from-inventory)( `inventory: Dictionary` ) *static* |

## Enumerations

### enum Trigger {#enum-trigger}

The options of trigger: on initialize, on death, on destroyed, on first access, on gathered.

- **ON_INITIALIZE** = `0` - When the holder is made: an NPC spawns, an object is set up. What it gets is there to pickpocket, steal or open from the start
- **ON_DEATH** = `1` - When an NPC dies. The loot is on the body
- **ON_DESTROYED** = `2` - When an object with health is destroyed. The remains stay lootable
- **ON_FIRST_ACCESS** = `3` - The first time someone opens the inventory: a chest is opened, a pocket is picked, a body is looted. Rolled once and kept
- **ON_GATHERED** = `4` - Each time a gathering node is gathered from. Rolled again every time and given straight to the bag of the gatherer (no room: nothing is given)

### enum Delivery {#enum-delivery}

Where the drops go: into the inventory of the holder (a body or a chest is looted through its window), or on the ground where the holder is (dropped items)

- **INVENTORY** = `0` - The drops go into the inventory of the holder; the player opens it to take them
- **GROUND** = `1` - The drops lie on the ground around the holder as dropped items. There is no loot window. Needs On Death or On Destroyed
- **INHERIT** = `2` - The project decides (Gameplay Config &gt; Dropped Items: where the loot of NPCs and of objects goes)

## Property descriptions

### Trigger trigger = Trigger.ON_DEATH {#prop-trigger}

When the rule rolls (on death, on first access, on initialize ...).

### Delivery delivery = Delivery.INHERIT {#prop-delivery}

Where the drops go: the inventory of the holder, or the ground around it (see Gameplay Config &gt; Dropped Items). On the ground only works for On Death and On Destroyed

### int table_id = 0 {#prop-table-id}

A loot table of the project (Items &gt; Loot Tables). Used when the rule has no table of its own

### LootTable own_table {#prop-own-table}

A table made for this holder only, edited with the rule. It is used instead of `table_id` when it is set ("this guard carries the key" needs no table in the shared list)

### LootLevelSource level_source {#prop-level-source}

Where the item level of the drops comes from. Inherit = the loot table's own source if it has one, else the project default for this kind of holder

### bool uses_receiver = true {#prop-uses-receiver}

The one who gets the loot (the killer, the one who opens the chest, the one who picks the pocket) changes it with their loot quantity and magic find

## Method descriptions

### Delivery get_delivery( holder_is_npc: bool ) {#method-get-delivery}

The delivery that counts: the one of the rule, or (when it follows the project) the project's choice for this kind of holder. Only a death or a destruction can leave loot on the ground

### LootTable get_table() {#method-get-table}

The table the rule rolls (its own, else the shared one; null when it has none)

### bool has_table() {#method-has-table}

Does the rule have a loot table (its own or one by id)?

### String get_trigger_name( value: Trigger ) {#method-get-trigger-name}

The name of a trigger, for the editor.

### String describe() {#method-describe}

A short text for the editor: "On Death: Wolf loot (Holder level)"

### Array[String] validate( holder_is_npc: bool = true, holder_has_health: bool = true ) {#method-validate}

Configuration problems as readable messages (empty = fine). `holder_is_npc` says whether the holder can die; `holder_has_health` whether an object can be destroyed

### LootRule from_table( p_table_id: int, p_trigger: Trigger ) {#method-from-table}

A rule made from a holder's old settings: a loot table with a trigger (the old `loot_table` + `loot_table_logic` of an NPC)

### LootRule from_inventory( inventory: Dictionary ) {#method-from-inventory}

A rule made from an old fixed inventory (&#123;"items": &#123;item id: quantity&#125;, "currency": &#123;currency id: amount&#125;&#125;): its own table with guaranteed entries, rolled when the holder is made


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Durability

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The durability of worn equipment: how it is given, how it wears, how it breaks and how it is repaired.

## Description

The numbers are on the SLOT (Equipment Slots &gt; Durability): its maximum, a multiplier for how fast an item in it wears, and what makes it wear. A slot with a maximum of 0 never wears. An item gets its durability the first time it is worn (the maximum of its slot, or the one of its own: `durability_override` of the equipment definition) and keeps it in `runtime_data`, so it is saved and shown by the tooltip. The project decides whether durability exists at all and how it wears: Gameplay Config &gt; Durability. Only the characters of the player (Player) wear out their equipment.

A weapon slot wears when its owner deals damage; any other slot wears when its owner takes damage (a slot can say Both, or the other way round: a shield in the off hand wears on damage taken). A piece that reaches 0 is broken: it gives nothing until it is repaired, comes off, or is destroyed, as the settings say.

## Methods

| | |
|---|---|
| `bool` | [is_enabled](#method-is-enabled)() *static* |
| `float` | [max_of](#method-max-of)( `item: ItemInstance` ) *static* |
| `float` | [current_of](#method-current-of)( `item: ItemInstance` ) *static* |
| `float` | [percent_of](#method-percent-of)( `item: ItemInstance` ) *static* |
| `bool` | [has_durability](#method-has-durability)( `item: ItemInstance` ) *static* |
| `bool` | [is_broken](#method-is-broken)( `item: ItemInstance` ) *static* |
| `float` | [max_for](#method-max-for)( `item: ItemInstance, slot_definition: EquipmentSlotDefinition` ) *static* |
| `void` | [initialize](#method-initialize)( `item: ItemInstance, slot_definition: EquipmentSlotDefinition` ) *static* |
| `void` | [wear_from_hit](#method-wear-from-hit)( `result: DamageResult` ) *static* |
| `void` | [lose](#method-lose)( `item: ItemInstance, amount: float, owner: Entity = null` ) *static* |
| `void` | [lose_on_death](#method-lose-on-death)( `player: Player` ) *static* |
| `float` | [repair](#method-repair)( `item: ItemInstance, amount: float = -1.0, owner: Entity = null` ) *static* |
| `int` | [repair_cost](#method-repair-cost)( `item: ItemInstance` ) *static* |
| `Array[ItemInstance]` | [damaged_pieces](#method-damaged-pieces)( `owner: Entity` ) *static* |

## Constants

- `String` **KEY_CURRENT** = `"durability"`
- `String` **KEY_MAX** = `"max_durability"`
- `String` **KEY_BROKEN** = `"broken"`

## Method descriptions

### bool is_enabled() {#method-is-enabled}

Does durability exist in this game?

### float max_of( item: ItemInstance ) {#method-max-of}

The most durability the item has (0 = it has none, it never wears)

### float current_of( item: ItemInstance ) {#method-current-of}

The durability the item has now

### float percent_of( item: ItemInstance ) {#method-percent-of}

The durability as a share of the maximum (1 = new, 0 = broken). Items with no durability give 1

### bool has_durability( item: ItemInstance ) {#method-has-durability}

Does the item have durability?

### bool is_broken( item: ItemInstance ) {#method-is-broken}

Is the item broken (it reached 0 and was not repaired)?

### float max_for( item: ItemInstance, slot_definition: EquipmentSlotDefinition ) {#method-max-for}

The durability an item gets in a slot: the item's own (-1 = never wears), else the one of the slot

### void initialize( item: ItemInstance, slot_definition: EquipmentSlotDefinition ) {#method-initialize}

Gives a worn item its durability the first time it is worn (new: the maximum). Nothing when durability is off, the slot has none or the item has it already

### void wear_from_hit( result: DamageResult ) {#method-wear-from-hit}

A hit was resolved (CombatManager calls this for every hit): the weapons of the attacker wear, and the equipment of the target

### void lose( item: ItemInstance, amount: float, owner: Entity = null ) {#method-lose}

Takes durability off an item (a negative or zero amount does nothing). A piece that reaches 0 breaks

### void lose_on_death( player: Player ) {#method-lose-on-death}

What dying does to the equipment: every worn piece loses a share of its maximum (the setting is a share from 0 to 1)

### float repair( item: ItemInstance, amount: float = -1.0, owner: Entity = null ) {#method-repair}

Gives durability back (amount &lt; 0 = all of it). A broken piece works again once it has some. Gives how much was restored

### int repair_cost( item: ItemInstance ) {#method-repair-cost}

What it costs to repair an item fully, in the currency of a vendor: its vendor value times the share that is missing times the repair cost multiplier of the project

### Array[ItemInstance] damaged_pieces( owner: Entity ) {#method-damaged-pieces}

The worn pieces that are not at full durability


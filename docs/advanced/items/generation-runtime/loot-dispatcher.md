<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LootDispatcher

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Runs the loot rules of a holder (an NPC, a chest, a crate): finds the rules of a trigger, works out the item level, rolls the table and puts the drops in the inventory of the holder (items that are generated get their roll, currency goes to the currency of the inventory).

## Description

The holder keeps a list of the rule numbers that have rolled (`rolled`): a rule on Initialize or First Access rolls once and is not rolled again when the holder is loaded from a save or opened a second time. See LootRule, LootLevel and docs/systems/ability-ranks-and-item-generation.md, section 8.

## Methods

| | |
|---|---|
| `int` | [run](#method-run)( `holder: Object, holder_kind: LootLevel.HolderKind, rules: Array, trigger: LootRule.Trigger, inventory: InventoryComponent, rolled: Array, receiver: Entity = null, hub: Variant = null, rng: RandomNumberGenerator = null` ) *static* |
| `Dictionary` | [roll_rule](#method-roll-rule)( `rule: LootRule, holder: Object, holder_kind: LootLevel.HolderKind, receiver: Entity, hub: Variant, rng: RandomNumberGenerator = null` ) *static* |
| `Array[ItemInstance]` | [deliver](#method-deliver)( `drops: Dictionary, inventory: InventoryComponent, rng: RandomNumberGenerator = null` ) *static* |

## Method descriptions

### int run( holder: Object, holder_kind: LootLevel.HolderKind, rules: Array, trigger: LootRule.Trigger, inventory: InventoryComponent, rolled: Array, receiver: Entity = null, hub: Variant = null, rng: RandomNumberGenerator = null ) {#method-run}

Runs every rule of `trigger`. `rolled` is the holder's list of rolled rule numbers (changed here and saved by the holder). Returns the number of rules that rolled

### Dictionary roll_rule( rule: LootRule, holder: Object, holder_kind: LootLevel.HolderKind, receiver: Entity, hub: Variant, rng: RandomNumberGenerator = null ) {#method-roll-rule}

The drops of one rule: &#123;"items": [...], "currency": &#123;...&#125;&#125; as LootTable.roll_drops gives them (empty when the rule has no table)

### Array[ItemInstance] deliver( drops: Dictionary, inventory: InventoryComponent, rng: RandomNumberGenerator = null ) {#method-deliver}

Puts drops in an inventory. A generated item (it rolls something, or scales with its item level) is generated at the item level of its drop; any other item is added as it is. Returns the generated item instances


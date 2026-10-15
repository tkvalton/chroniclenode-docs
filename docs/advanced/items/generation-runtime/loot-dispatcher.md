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
| `bool` | [can_drop_to_ground](#method-can-drop-to-ground)( `holder: Object, hub: Variant` ) *static* |
| `Array[DroppedItem]` | [deliver_to_ground](#method-deliver-to-ground)( `drops: Dictionary, position: Vector3, hub: Variant, rng: RandomNumberGenerator = null, launch: bool = true` ) *static* |
| `Dictionary` | [roll_rule](#method-roll-rule)( `rule: LootRule, holder: Object, holder_kind: LootLevel.HolderKind, receiver: Entity, hub: Variant, rng: RandomNumberGenerator = null` ) *static* |
| `bool` | [deliver_all_or_nothing](#method-deliver-all-or-nothing)( `drops: Dictionary, inventory: InventoryComponent, rng: RandomNumberGenerator = null` ) *static* |
| `Array[ItemInstance]` | [deliver](#method-deliver)( `drops: Dictionary, inventory: InventoryComponent, rng: RandomNumberGenerator = null` ) *static* |

## Method descriptions

### int run( holder: Object, holder_kind: LootLevel.HolderKind, rules: Array, trigger: LootRule.Trigger, inventory: InventoryComponent, rolled: Array, receiver: Entity = null, hub: Variant = null, rng: RandomNumberGenerator = null ) {#method-run}

Runs every rule of `trigger`. `rolled` is the holder's list of rolled rule numbers (changed here and saved by the holder). Returns the number of rules that rolled

### bool can_drop_to_ground( holder: Object, hub: Variant ) {#method-can-drop-to-ground}

Can the drops of this holder be put on the ground? The holder is in the world, dropped items are on and the world can hold them

### Array[DroppedItem] deliver_to_ground( drops: Dictionary, position: Vector3, hub: Variant, rng: RandomNumberGenerator = null, launch: bool = true ) {#method-deliver-to-ground}

Puts drops on the ground around a position as dropped items, scattered (a generated item is generated at the item level of its drop, as in `deliver`). Gives the dropped items

### Dictionary roll_rule( rule: LootRule, holder: Object, holder_kind: LootLevel.HolderKind, receiver: Entity, hub: Variant, rng: RandomNumberGenerator = null ) {#method-roll-rule}

The drops of one rule: &#123;"items": [...], "currency": &#123;...&#125;&#125; as LootTable.roll_drops gives them (empty when the rule has no table)

### bool deliver_all_or_nothing( drops: Dictionary, inventory: InventoryComponent, rng: RandomNumberGenerator = null ) {#method-deliver-all-or-nothing}

Puts drops in an inventory all or nothing: when one of them does not fit, what was put in is taken out again and false is returned (a gatherer with a full bag gets nothing). Currency goes in last (it takes no room)

### Array[ItemInstance] deliver( drops: Dictionary, inventory: InventoryComponent, rng: RandomNumberGenerator = null ) {#method-deliver}

Puts drops in an inventory. A generated item (it rolls something, or scales with its item level) is generated at the item level of its drop; any other item is added as it is. Returns the generated item instances


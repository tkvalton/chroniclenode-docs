<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionConsumable

**Inherits:** [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Consumable items that provide immediate effects when used (potions, food, scrolls, etc.) Uses the effect system for all functionality - effects, validation, and state management

## Properties

| | | |
|---|---|---|
| `int` | [consume_effect_id](#prop-consume-effect-id) |  |
| `int` | [consume_amount](#prop-consume-amount) | `1` |
| `bool` | [consume_effect_per_amount](#prop-consume-effect-per-amount) | `false` |
| `bool` | [has_cooldown](#prop-has-cooldown) | `false` |
| `float` | [cooldown_duration](#prop-cooldown-duration) | `0.0` |

## Methods

| | |
|---|---|
| `bool` | [can_use](#method-can-use)( `user: Entity, item_instance: ItemInstance = null` ) |
| `bool` | [execute_use](#method-execute-use)( `user: Entity, item_instance: ItemInstance` ) |
| `String` | [get_use_action_name](#method-get-use-action-name)( `_item_instance: ItemInstance` ) |
| `int` | [get_effective_consume_amount](#method-get-effective-consume-amount)( `item_instance: ItemInstance` ) |
| `float` | [get_effective_cooldown_duration](#method-get-effective-cooldown-duration)( `item_instance: ItemInstance` ) |
| `Effect` | [get_effective_consume_effect](#method-get-effective-consume-effect)( `item_instance: ItemInstance` ) |
| `void` | [on_consumable_used](#method-on-consumable-used)( `item_instance: ItemInstance, user: Entity, amount_consumed: int` ) |

## Property descriptions

### int consume_effect_id {#prop-consume-effect-id}

The effect applied when this consumable is used - determines what the item actually does

### int consume_amount = 1 {#prop-consume-amount}

Number of item instances consumed per use for stackable items

### bool consume_effect_per_amount = false {#prop-consume-effect-per-amount}

Whether to apply the consume_effect once per item consumed or only once total

*Cooldown Settings*

### bool has_cooldown = false {#prop-has-cooldown}

Whether this consumable type has a cooldown period after use

### float cooldown_duration = 0.0 {#prop-cooldown-duration}

Duration in seconds before this consumable can be used again

## Method descriptions

### bool can_use( user: Entity, item_instance: ItemInstance = null ) {#method-can-use}

Check if the consumable can be used

### bool execute_use( user: Entity, item_instance: ItemInstance ) {#method-execute-use}

Execute consumable usage - apply effects only, let instance handle consumption

### String get_use_action_name( _item_instance: ItemInstance ) {#method-get-use-action-name}

Get display name for consumable action

### int get_effective_consume_amount( item_instance: ItemInstance ) {#method-get-effective-consume-amount}

Get effective consume amount including instance modifications

### float get_effective_cooldown_duration( item_instance: ItemInstance ) {#method-get-effective-cooldown-duration}

Get effective cooldown duration including instance modifications

### Effect get_effective_consume_effect( item_instance: ItemInstance ) {#method-get-effective-consume-effect}

Get effective consume effect including instance modifications

### void on_consumable_used( item_instance: ItemInstance, user: Entity, amount_consumed: int ) {#method-on-consumable-used}

Virtual method for consumable-specific logic when consumed Called by ItemInstance after successful consumption


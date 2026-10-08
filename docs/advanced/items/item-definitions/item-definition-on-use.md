<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemDefinitionOnUse

**Inherits:** [ItemDefinition](/advanced/items/item-definitions/item-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Items that function like abilities when used - trigger ability execution with charge consumption Uses charges instead of stacking for cleaner inventory management

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) |  |
| `int` | [max_charges](#prop-max-charges) | `1` |
| `int` | [starting_charges](#prop-starting-charges) | `1` |
| `int` | [charges_per_use](#prop-charges-per-use) | `1` |
| `bool` | [consume_on_start](#prop-consume-on-start) | `true` |

## Methods

| | |
|---|---|
| `bool` | [can_use](#method-can-use)( `user: Entity, item_instance: ItemInstance = null` ) |
| `bool` | [execute_use](#method-execute-use)( `user: Entity, item_instance: ItemInstance` ) |
| `String` | [get_use_action_name](#method-get-use-action-name)( `item_instance: ItemInstance` ) |
| `int` | [get_effective_charges_per_use](#method-get-effective-charges-per-use)( `item_instance: ItemInstance` ) |
| `void` | [on_on_use_item_used](#method-on-on-use-item-used)( `item_instance: ItemInstance, user: Entity, charges_consumed: int` ) |

## Property descriptions

### int ability_id {#prop-ability-id}

The ability definition executed when this item is used

### int max_charges = 1 {#prop-max-charges}

Maximum charges this item can hold

### int starting_charges = 1 {#prop-starting-charges}

Charges the item starts with when created

### int charges_per_use = 1 {#prop-charges-per-use}

Number of charges consumed per use (allows flexibility for powerful abilities)

### bool consume_on_start = true {#prop-consume-on-start}

True: consume immediately when used; False: consume only after ability completes successfully

## Method descriptions

### bool can_use( user: Entity, item_instance: ItemInstance = null ) {#method-can-use}

Check if the on-use item can be used

### bool execute_use( user: Entity, item_instance: ItemInstance ) {#method-execute-use}

Execute on-use item - trigger ability and let instance handle charge consumption

### String get_use_action_name( item_instance: ItemInstance ) {#method-get-use-action-name}

Get display name for on-use action

### int get_effective_charges_per_use( item_instance: ItemInstance ) {#method-get-effective-charges-per-use}

Get effective charges per use including instance modifications

### void on_on_use_item_used( item_instance: ItemInstance, user: Entity, charges_consumed: int ) {#method-on-on-use-item-used}

Virtual method for on-use specific logic when charges are consumed Called by ItemInstance after successful charge consumption


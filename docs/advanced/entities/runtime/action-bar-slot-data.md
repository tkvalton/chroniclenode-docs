<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActionBarSlotData

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Data structure for storing action bar slot content Can reference either abilities or items REFACTORED: Now stores direct item instance references instead of inventory indices

## Variables

| | | |
|---|---|---|
| `ContentType` | [content_type](#var-content-type) | `ContentType.EMPTY` |
| `AbilityInstance` | [ability_instance](#var-ability-instance) | `null` |
| `ItemInstance` | [item_instance](#var-item-instance) | `null` |
| `int` | [quantity](#var-quantity) | `1` |

## Methods

| | |
|---|---|
| `ActionBarSlotData` | [for_ability](#method-for-ability)( `ability: AbilityInstance` ) *static* |
| `ActionBarSlotData` | [for_item](#method-for-item)( `item: ItemInstance, quantity: int = 1` ) *static* |
| `Variant` | [get_content](#method-get-content)( `player: Player` ) |
| `bool` | [is_empty](#method-is-empty)() |
| `void` | [clear](#method-clear)() |
| `Dictionary` | [to_dict](#method-to-dict)() |
| `ActionBarSlotData` | [from_dict](#method-from-dict)( `data: Dictionary, player: Player = null` ) *static* |
| `bool` | [restore_ability_reference](#method-restore-ability-reference)( `player: Player, ability_definition_id: int` ) |
| `bool` | [restore_item_reference](#method-restore-item-reference)( `player: Player, item_instance_id: String` ) |
| `bool` | [is_valid_for_player](#method-is-valid-for-player)( `player: Player` ) |
| `int` | [get_current_stack_size](#method-get-current-stack-size)() |
| `bool` | [has_sufficient_quantity](#method-has-sufficient-quantity)() |

## Enumerations

### enum ContentType {#enum-contenttype}

The options of content type: empty, ability, item.

- **EMPTY** = `0`
- **ABILITY** = `1`
- **ITEM** = `2`

## Variable descriptions

### ContentType content_type = ContentType.EMPTY {#var-content-type}

What the slot holds: nothing, an ability or an item.

### AbilityInstance ability_instance = null {#var-ability-instance}

For abilities: direct reference to the ability instance

### ItemInstance item_instance = null {#var-item-instance}

For items: direct reference to the item instance

### int quantity = 1 {#var-quantity}

For items that consume multiple per use

## Method descriptions

### ActionBarSlotData for_ability( ability: AbilityInstance ) {#method-for-ability}

Create slot data for an ability

### ActionBarSlotData for_item( item: ItemInstance, quantity: int = 1 ) {#method-for-item}

Create slot data for an item - now takes direct item instance

### Variant get_content( player: Player ) {#method-get-content}

Get the actual content (ability or item) from this slot data

### bool is_empty() {#method-is-empty}

Check if this slot is empty

### void clear() {#method-clear}

Clear this slot

### Dictionary to_dict() {#method-to-dict}

Convert to dictionary for save/load

### ActionBarSlotData from_dict( data: Dictionary, player: Player = null ) {#method-from-dict}

Create from dictionary for save/load NOTE: This will need to be paired with a restoration system that rebuilds ability and item instance references from IDs after player data is loaded

### bool restore_ability_reference( player: Player, ability_definition_id: int ) {#method-restore-ability-reference}

Restore ability instance reference from player (call after loading)

### bool restore_item_reference( player: Player, item_instance_id: String ) {#method-restore-item-reference}

Restore item instance reference from inventory (call after loading)

### bool is_valid_for_player( player: Player ) {#method-is-valid-for-player}

Check if this slot data is valid for the given player

### int get_current_stack_size() {#method-get-current-stack-size}

Get the current stack size for item in this slot (for display)

### bool has_sufficient_quantity() {#method-has-sufficient-quantity}

Check if the referenced item has enough quantity/charges for usage


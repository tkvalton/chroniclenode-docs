<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DropItemAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Puts an item (or a pile of a currency) on the ground as a dropped item: a quest reward left on a table, a key that falls from the ceiling, coins that spill from a chest. It lies where you say (a position, where an NPC stands, or where the player stands) and is picked up the way the Gameplay Config says. It fails when dropped items are switched off.

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [quantity](#prop-quantity) | `1` |
| `int` | [item_level](#prop-item-level) | `0` |
| `int` | [currency_id](#prop-currency-id) | `0` |
| `int` | [currency_amount](#prop-currency-amount) | `0` |
| `Place` | [place](#prop-place) | `Place.POSITION` |
| `Vector3` | [drop_position](#prop-drop-position) | `Vector3.ZERO` |
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `bool` | [launch](#prop-launch) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum Place {#enum-place}

Where the item is put

- **POSITION** = `0` - At the position below
- **AT_ENTITY** = `1` - Where the NPC with the unique id below stands
- **AT_PLAYER** = `2` - Where the player in control stands

## Property descriptions

### int item_id = 0 {#prop-item-id}

The item to drop (leave 0 to drop currency)

### int quantity = 1 {#prop-quantity}

How many of the item

### int item_level = 0 {#prop-item-level}

The item level a generated item is made at (0 = the level of its definition)

### int currency_id = 0 {#prop-currency-id}

The currency to drop when no item is set

### int currency_amount = 0 {#prop-currency-amount}

How much of the currency

### Place place = Place.POSITION {#prop-place}

Where the item is put

### Vector3 drop_position = Vector3.ZERO {#prop-drop-position}

The position, when the place is Position

### int entity_unique_id = 0 {#prop-entity-unique-id}

The unique id of the NPC, when the place is At entity

### bool launch = true {#prop-launch}

True throws the item up so it falls and bounces (if the Gameplay Config uses physics), false puts it where it is

## Method descriptions

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the action, with &#123;placeholders&#125; for its values.

### Dictionary save() {#method-save}

The state of the action for a save.

### void load_data( data: Dictionary ) {#method-load-data}

Restores the state of the action from a save.


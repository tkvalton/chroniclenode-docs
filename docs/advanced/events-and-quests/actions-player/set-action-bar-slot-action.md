<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetActionBarSlotAction

**Inherits:** [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action) < [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action that puts an ability on a slot of the action bar of player(s), empties a slot, or locks and unlocks it. The ability does not have to be known yet: the slot waits for it and the ability goes there when it is learned. Use it for a bar that changes with the story (a new ability on the same key), or for a fixed bar.

## Properties

| | | |
|---|---|---|
| `int` | [slot_number](#prop-slot-number) | `1` |
| `int` | [ability_id](#prop-ability-id) | `0` |
| `LockChange` | [lock](#prop-lock) | `LockChange.KEEP` |

## Methods

| | |
|---|---|
| `String` | [get_player_function_description](#method-get-player-function-description)() |
| `bool` | [execute_on_players](#method-execute-on-players)( `players: Array[Player]` ) |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum LockChange {#enum-lockchange}

- **KEEP** = `0` - The slot stays as it is (locked or not)
- **LOCK** = `1` - The player cannot change the slot any more
- **UNLOCK** = `2` - The player can change the slot again

## Property descriptions

### int slot_number = 1 {#prop-slot-number}

The slot (1 is the first)

### int ability_id = 0 {#prop-ability-id}

The ability to put on the slot. 0 = empty the slot

### LockChange lock = LockChange.KEEP {#prop-lock}

Locks or unlocks the slot for the player

## Method descriptions

### String get_player_function_description() {#method-get-player-function-description}

Get template description for child classes to extend *(from [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action))*

### bool execute_on_players( players: Array[Player] ) {#method-execute-on-players}

Override this in child classes to implement player-specific action logic @param players: Array of target players to execute the action on @return: true if action succeeded, false if it failed *(from [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action))*

### Dictionary save() {#method-save}

Save action state to a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


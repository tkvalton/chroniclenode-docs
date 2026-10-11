<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChangeInventorySizeAction

**Inherits:** [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action) < [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action that makes the bag of player(s) bigger (or smaller) for good: more slots, more carry capacity. A bigger backpack as the reward of a quest, a pouch bought from a smith. What the stats give (Bag Slots, Carry Capacity) is changed with effects and equipment; this is on top of it and is saved.

## Properties

| | | |
|---|---|---|
| `int` | [slots](#prop-slots) | `4` |
| `float` | [capacity](#prop-capacity) | `0.0` |

## Methods

| | |
|---|---|
| `String` | [get_player_function_description](#method-get-player-function-description)() |
| `bool` | [execute_on_players](#method-execute-on-players)( `players: Array[Player]` ) |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int slots = 4 {#prop-slots}

Slots to add (a negative number takes slots away). In a grid, one slot is one row

### float capacity = 0.0 {#prop-capacity}

Carry capacity to add (a negative number takes it away). It only matters when the inventory style counts weight

## Method descriptions

### String get_player_function_description() {#method-get-player-function-description}

Override to provide action-specific description

### bool execute_on_players( players: Array[Player] ) {#method-execute-on-players}

Execute action on target players

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


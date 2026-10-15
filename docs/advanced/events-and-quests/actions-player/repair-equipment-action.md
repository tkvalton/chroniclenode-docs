<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RepairEquipmentAction

**Inherits:** [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action) < [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action that repairs the worn equipment of player(s): all of it, or a share of the maximum durability of each piece. A broken piece works again once it has some durability. Does nothing when the project does not use durability.

## Properties

| | | |
|---|---|---|
| `float` | [percent](#prop-percent) | `100.0` |

## Methods

| | |
|---|---|
| `String` | [get_player_function_description](#method-get-player-function-description)() |
| `bool` | [execute_on_players](#method-execute-on-players)( `players: Array[Player]` ) |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### float percent = 100.0 {#prop-percent}

How much each piece gets back, as a share of its maximum durability (100 = fully repaired)

## Method descriptions

### String get_player_function_description() {#method-get-player-function-description}

The sentence the editor shows for the action, with &#123;placeholders&#125; for its values.

### bool execute_on_players( players: Array[Player] ) {#method-execute-on-players}

Repairs the damaged pieces each player wears. False when nothing was repaired

### Dictionary save() {#method-save}

The state of the action for a save.

### void load_data( data: Dictionary ) {#method-load-data}

Restores the state of the action from a save.


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# KillPlayerAction

**Inherits:** [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action) < [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to kill player(s) (trigger death state)

## Methods

| | |
|---|---|
| `String` | [get_player_function_description](#method-get-player-function-description)() |
| `bool` | [execute_on_players](#method-execute-on-players)( `players: Array[Player]` ) |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Method descriptions

### String get_player_function_description() {#method-get-player-function-description}

Override to provide action-specific description

### bool execute_on_players( players: Array[Player] ) {#method-execute-on-players}

Execute action on target players

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


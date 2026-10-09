<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetPlayerPositionAction

**Inherits:** [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action) < [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to teleport/move player(s) to a specific position

## Properties

| | | |
|---|---|---|
| `Vector3` | [target_position](#prop-target-position) | `Vector3.ZERO` |
| `bool` | [interrupt_casting](#prop-interrupt-casting) | `true` |
| `bool` | [stop_movement](#prop-stop-movement) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_player_function_description](#method-get-player-function-description)() |
| `bool` | [execute_on_players](#method-execute-on-players)( `players: Array[Player]` ) |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### Vector3 target_position = Vector3.ZERO {#prop-target-position}

Target position to move the player(s) to

### bool interrupt_casting = true {#prop-interrupt-casting}

Whether to interrupt casting when teleporting

### bool stop_movement = true {#prop-stop-movement}

Whether to stop movement state (velocity, navigation)

## Method descriptions

### String get_player_function_description() {#method-get-player-function-description}

Override to provide action-specific description

### bool execute_on_players( players: Array[Player] ) {#method-execute-on-players}

Execute action on target players

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary


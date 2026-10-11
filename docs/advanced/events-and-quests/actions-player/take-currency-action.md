<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TakeCurrencyAction

**Inherits:** [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action) < [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action that takes currency from player(s): a fee, a bribe, the meat a quest asks for when a currency stands for it.

## Properties

| | | |
|---|---|---|
| `int` | [currency_id](#prop-currency-id) | `0` |
| `int` | [amount](#prop-amount) | `1` |
| `bool` | [all_or_nothing](#prop-all-or-nothing) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_player_function_description](#method-get-player-function-description)() |
| `bool` | [execute_on_players](#method-execute-on-players)( `players: Array[Player]` ) |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int currency_id = 0 {#prop-currency-id}

The currency to take

### int amount = 1 {#prop-amount}

How much to take

### bool all_or_nothing = true {#prop-all-or-nothing}

Take nothing when the player has less than that (on), or take what they have (off). The action fails when nothing could be taken from a player

## Method descriptions

### String get_player_function_description() {#method-get-player-function-description}

Get template description for child classes to extend *(from [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action))*

### bool execute_on_players( players: Array[Player] ) {#method-execute-on-players}

Override this in child classes to implement player-specific action logic @param players: Array of target players to execute the action on @return: true if action succeeded, false if it failed *(from [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action))*

### Dictionary save() {#method-save}

Save action state to a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


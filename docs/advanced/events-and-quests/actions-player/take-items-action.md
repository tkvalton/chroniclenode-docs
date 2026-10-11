<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TakeItemsAction

**Inherits:** [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action) < [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action that takes items out of the bag of player(s): a toll, a payment, items handed over to an NPC. Quest items that are kept aside are taken too.

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [quantity](#prop-quantity) | `1` |
| `bool` | [all_or_nothing](#prop-all-or-nothing) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_player_function_description](#method-get-player-function-description)() |
| `bool` | [execute_on_players](#method-execute-on-players)( `players: Array[Player]` ) |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int item_id = 0 {#prop-item-id}

The item to take

### int quantity = 1 {#prop-quantity}

How many to take

### bool all_or_nothing = true {#prop-all-or-nothing}

Take nothing when the player has fewer than that (on), or take what they have (off). The action fails when nothing could be taken from a player

## Method descriptions

### String get_player_function_description() {#method-get-player-function-description}

Get template description for child classes to extend *(from [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action))*

### bool execute_on_players( players: Array[Player] ) {#method-execute-on-players}

Override this in child classes to implement player-specific action logic @param players: Array of target players to execute the action on @return: true if action succeeded, false if it failed *(from [PlayerEventAction](/advanced/events-and-quests/bases/player-event-action))*

### Dictionary save() {#method-save}

Save action state to a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerEventAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [GrantEffectToPlayerAction](/advanced/events-and-quests/actions-player/grant-effect-to-player-action), [KillPlayerAction](/advanced/events-and-quests/actions-player/kill-player-action), [RemoveAllEffectsFromPlayerAction](/advanced/events-and-quests/actions-player/remove-all-effects-from-player-action), [RemoveEffectFromPlayerAction](/advanced/events-and-quests/actions-player/remove-effect-from-player-action), [SetPlayerCombatScriptAction](/advanced/events-and-quests/actions-player/set-player-combat-script-action), [SetPlayerPositionAction](/advanced/events-and-quests/actions-player/set-player-position-action)

Base class for actions that target player(s). Child classes should override execute_on_players() instead of _execute_action().

## Properties

| | | |
|---|---|---|
| `PlayerTarget` | [player_target](#prop-player-target) | `PlayerTarget.CURRENT_PLAYER` |

## Methods

| | |
|---|---|
| `bool` | [target_matches](#method-target-matches)( `hub: GameHost.SystemHub, target: int, player: Player` ) *static* |
| `int` | [slot_number_of](#method-slot-number-of)( `hub: GameHost.SystemHub, player: Player` ) *static* |
| `Array[Player]` | [get_target_players](#method-get-target-players)() |
| `bool` | [execute_on_players](#method-execute-on-players)( `players: Array[Player]` ) |
| `String` | [get_player_action_description](#method-get-player-action-description)() |
| `String` | [get_player_function_description](#method-get-player-function-description)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Enumerations

### enum PlayerTarget {#enum-playertarget}

- **CURRENT_PLAYER** = `0` - The currently controlled player
- **PLAYER_1** = `1` - Player in slot 1
- **PLAYER_2** = `2` - Player in slot 2
- **PLAYER_3** = `3` - Player in slot 3
- **PLAYER_4** = `4` - Player in slot 4
- **PLAYER_5** = `5` - Player in slot 5
- **PLAYER_6** = `6` - Player in slot 6
- **PLAYER_7** = `7` - Player in slot 7
- **PLAYER_8** = `8` - Player in slot 8
- **PLAYER_9** = `9` - Player in slot 9
- **PLAYER_10** = `10` - Player in slot 10
- **PLAYER_11** = `11` - Player in slot 11
- **PLAYER_12** = `12` - Player in slot 12
- **PLAYER_13** = `13` - Player in slot 13
- **PLAYER_14** = `14` - Player in slot 14
- **PLAYER_15** = `15` - Player in slot 15
- **PLAYER_16** = `16` - Player in slot 16
- **PLAYER_17** = `17` - Player in slot 17
- **PLAYER_18** = `18` - Player in slot 18
- **PLAYER_19** = `19` - Player in slot 19
- **PLAYER_20** = `20` - Player in slot 20
- **ANY_PLAYER** = `21`
- **ALL_PLAYERS** = `22` - All players in the party

## Property descriptions

### PlayerTarget player_target = PlayerTarget.CURRENT_PLAYER {#prop-player-target}

Target player(s) for this action

## Method descriptions

### bool target_matches( hub: GameHost.SystemHub, target: int, player: Player ) {#method-target-matches}

Is this player one the target setting means? (ANY_PLAYER and ALL_PLAYERS: every player; CURRENT_PLAYER: the one in control; PLAYER_1 and up: the player in that slot of the party)

### int slot_number_of( hub: GameHost.SystemHub, player: Player ) {#method-slot-number-of}

The number of the slot a player is in (1 is the first), 0 when the player is not in the party

### Array[Player] get_target_players() {#method-get-target-players}

Get the target players based on selection @return: Array of Player objects matching the target criteria

### bool execute_on_players( players: Array[Player] ) {#method-execute-on-players}

Override this in child classes to implement player-specific action logic @param players: Array of target players to execute the action on @return: true if action succeeded, false if it failed

### String get_player_action_description() {#method-get-player-action-description}

Get description base for child classes to extend

### String get_player_function_description() {#method-get-player-function-description}

Get template description for child classes to extend

### String get_function_description() {#method-get-function-description}

Main function description - includes player targeting as part of template


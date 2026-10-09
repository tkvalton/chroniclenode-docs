<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerEventTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [PlayerAbilityCastTrigger](/advanced/events-and-quests/triggers-player/player-ability-cast-trigger), [PlayerBasicAttackCastTrigger](/advanced/events-and-quests/triggers-player/player-basic-attack-cast-trigger), [PlayerBecameCurrentTrigger](/advanced/events-and-quests/triggers-player/player-became-current-trigger), [PlayerCombatStateChangedTrigger](/advanced/events-and-quests/triggers-player/player-combat-state-changed-trigger), [PlayerDamageDealtTrigger](/advanced/events-and-quests/triggers-player/player-damage-dealt-trigger), [PlayerDamageTakenTrigger](/advanced/events-and-quests/triggers-player/player-damage-taken-trigger), [PlayerDeathTrigger](/advanced/events-and-quests/triggers-player/player-death-trigger), [PlayerEffectTrigger](/advanced/events-and-quests/triggers-player/player-effect-trigger), [PlayerHasXItemsTrigger](/advanced/events-and-quests/triggers-item/player-has-x-items-trigger), [PlayerHealCastTrigger](/advanced/events-and-quests/triggers-player/player-heal-cast-trigger), [PlayerHealingReceivedTrigger](/advanced/events-and-quests/triggers-player/player-healing-received-trigger), [PlayerHealthChangedTrigger](/advanced/events-and-quests/triggers-player/player-health-changed-trigger), [PlayerItemConsumedTrigger](/advanced/events-and-quests/triggers-item/player-item-consumed-trigger), [PlayerItemReceivedTrigger](/advanced/events-and-quests/triggers-item/player-item-received-trigger), [PlayerItemUsedTrigger](/advanced/events-and-quests/triggers-item/player-item-used-trigger), [PlayerResourceChangedTrigger](/advanced/events-and-quests/triggers-player/player-resource-changed-trigger), [PlayerSpecialDefensiveEffectTrigger](/advanced/events-and-quests/triggers-player/player-special-defensive-effect-trigger), [PlayerSpecialHealingReceivedTrigger](/advanced/events-and-quests/triggers-player/player-special-healing-received-trigger), [PlayerSpecialOffensiveEffectTrigger](/advanced/events-and-quests/triggers-player/player-special-offensive-effect-trigger), [PlayerSpecificAbilityCastTrigger](/advanced/events-and-quests/triggers-player/player-specific-ability-cast-trigger), [PlayerStatChangedTrigger](/advanced/events-and-quests/triggers-player/player-stat-changed-trigger)

Base class for triggers that monitor player(s). Child classes should override setup_player_connections() and cleanup_player_connections().

## Properties

| | | |
|---|---|---|
| `PlayerTarget` | [player_target](#prop-player-target) | `PlayerTarget.CURRENT_PLAYER` |

## Variables

| | | |
|---|---|---|
| `Array[Player]` | [connected_players](#var-connected-players) | `[]` |

## Methods

| | |
|---|---|
| `Array[Player]` | [get_target_players](#method-get-target-players)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [setup_player_connection](#method-setup-player-connection)( `player: Player` ) |
| `void` | [cleanup_player_connection](#method-cleanup-player-connection)( `player: Player` ) |
| `String` | [get_player_target_description](#method-get-player-target-description)() |

## Enumerations

### enum PlayerTarget {#enum-playertarget}

- **CURRENT_PLAYER** = `0` - The currently controlled player
- **ALL_PLAYERS** = `1` - All players in the party
- **PLAYER_1** = `2` - Player in slot 1
- **PLAYER_2** = `3` - Player in slot 2
- **PLAYER_3** = `4` - Player in slot 3
- **PLAYER_4** = `5` - Player in slot 4
- **PLAYER_5** = `6` - Player in slot 5
- **PLAYER_6** = `7` - Player in slot 6
- **PLAYER_7** = `8` - Player in slot 7
- **PLAYER_8** = `9` - Player in slot 8
- **PLAYER_9** = `10` - Player in slot 9
- **PLAYER_10** = `11` - Player in slot 10
- **PLAYER_11** = `12` - Player in slot 11
- **PLAYER_12** = `13` - Player in slot 12
- **PLAYER_13** = `14` - Player in slot 13
- **PLAYER_14** = `15` - Player in slot 14
- **PLAYER_15** = `16` - Player in slot 15
- **PLAYER_16** = `17` - Player in slot 16
- **PLAYER_17** = `18` - Player in slot 17
- **PLAYER_18** = `19` - Player in slot 18
- **PLAYER_19** = `20` - Player in slot 19
- **PLAYER_20** = `21` - Player in slot 20

## Property descriptions

### PlayerTarget player_target = PlayerTarget.CURRENT_PLAYER {#prop-player-target}

Target player(s) for this trigger

## Variable descriptions

### Array[Player] connected_players = [] {#var-connected-players}

Track connected players to disconnect later

## Method descriptions

### Array[Player] get_target_players() {#method-get-target-players}

Get the target players based on selection

### void setup() {#method-setup}

Set up listeners for all target players

### void cleanup() {#method-cleanup}

Clean up listeners for all connected players

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Override this in child classes to set up signal connections for a player

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Override this in child classes to clean up signal connections for a player

### String get_player_target_description() {#method-get-player-target-description}

Get description of which player(s) are targeted


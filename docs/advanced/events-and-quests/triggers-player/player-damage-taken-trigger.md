<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerDamageTakenTrigger

**Inherits:** [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger) < [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when target player(s) take damage

## Properties

| | | |
|---|---|---|
| `Condition.CheckLogic` | [damage_check_logic](#prop-damage-check-logic) | `Condition.CheckLogic.GREATER_EQUAL` |
| `int` | [target_damage](#prop-target-damage) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup_player_connection](#method-setup-player-connection)( `player: Player` ) |
| `void` | [cleanup_player_connection](#method-cleanup-player-connection)( `player: Player` ) |
| `bool` | [meets_damage_condition](#method-meets-damage-condition)( `damage_taken: int` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### Condition.CheckLogic damage_check_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-damage-check-logic}

Comparison logic for damage check

### int target_damage = 0 {#prop-target-damage}

Damage amount to compare against

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Set up signal connection for a player

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Clean up signal connection for a player

### bool meets_damage_condition( damage_taken: int ) {#method-meets-damage-condition}

Check if the current damage meets the comparison logic

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


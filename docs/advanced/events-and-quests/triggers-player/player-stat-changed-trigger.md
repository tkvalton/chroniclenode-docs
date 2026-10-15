<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerStatChangedTrigger

**Inherits:** [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger) < [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when target player(s) stat changes

## Properties

| | | |
|---|---|---|
| `int` | [stat_id](#prop-stat-id) | `0` |
| `Condition.CheckLogic` | [stat_check_logic](#prop-stat-check-logic) | `Condition.CheckLogic.EQUAL` |
| `float` | [target_stat_value](#prop-target-stat-value) | `0.0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup_player_connection](#method-setup-player-connection)( `player: Player` ) |
| `void` | [cleanup_player_connection](#method-cleanup-player-connection)( `player: Player` ) |
| `bool` | [meets_stat_condition](#method-meets-stat-condition)( `current_value: float` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int stat_id = 0 {#prop-stat-id}

The stat to watch.

### Condition.CheckLogic stat_check_logic = Condition.CheckLogic.EQUAL {#prop-stat-check-logic}

How the stat is compared with the target value (equal, at least, less than ...).

### float target_stat_value = 0.0 {#prop-target-stat-value}

The value to compare with.

## Method descriptions

### String get_display_name() {#method-get-display-name}

The name of the trigger in the editor.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the trigger, with &#123;placeholders&#125; for its values.

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Connects the signal of a player this trigger listens to.

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Disconnects the signal of a player.

### bool meets_stat_condition( current_value: float ) {#method-meets-stat-condition}

Does this value satisfy the trigger?

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Does this event data satisfy the trigger? Called when the signal the trigger listens to fires.

### String generate_objective_description() {#method-generate-objective-description}

The line of the quest objective this trigger makes ("Kill 5 wolves").


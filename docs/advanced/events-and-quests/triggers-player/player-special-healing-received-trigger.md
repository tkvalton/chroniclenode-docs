<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerSpecialHealingReceivedTrigger

**Inherits:** [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger) < [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when target player(s) receive a heal on which a trigger fired (a critical heal ...)

## Properties

| | | |
|---|---|---|
| `int` | [stat_id](#prop-stat-id) | `0` |
| `String` | [trigger_tag](#prop-trigger-tag) | `""` |
| `float` | [minimum_healing_amount](#prop-minimum-healing-amount) | `0.0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup_player_connection](#method-setup-player-connection)( `player: Player` ) |
| `void` | [cleanup_player_connection](#method-cleanup-player-connection)( `player: Player` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int stat_id = 0 {#prop-stat-id}

Only react to triggers owned by this stat (0 = any stat)

### String trigger_tag = "" {#prop-trigger-tag}

Only react to this trigger tag (empty = any tag)

### float minimum_healing_amount = 0.0 {#prop-minimum-healing-amount}

At least this much must have been restored (0 = any)

## Method descriptions

### String get_display_name() {#method-get-display-name}

The name of the trigger in the editor.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the trigger, with &#123;placeholders&#125; for its values.

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Connects the signal of a player this trigger listens to.

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Disconnects the signal of a player.

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Does this event data satisfy the trigger? Called when the signal the trigger listens to fires.

### String generate_objective_description() {#method-generate-objective-description}

The line of the quest objective this trigger makes ("Kill 5 wolves").


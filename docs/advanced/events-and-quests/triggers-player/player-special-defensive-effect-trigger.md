<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerSpecialDefensiveEffectTrigger

**Inherits:** [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger) < [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when target player(s) fire a defensive trigger (dodge, parry, block ...) while receiving a hit

## Properties

| | | |
|---|---|---|
| `int` | [stat_id](#prop-stat-id) | `0` |
| `String` | [trigger_tag](#prop-trigger-tag) | `""` |
| `float` | [minimum_damage_prevented](#prop-minimum-damage-prevented) | `0.0` |

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

Only react to this trigger tag, e.g. "dodge" (empty = any tag)

### float minimum_damage_prevented = 0.0 {#prop-minimum-damage-prevented}

The hit must have been reduced by at least this much by the defender's side (0 = any)

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Trigger *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String get_function_description() {#method-get-function-description}

Return a description of this trigger with parameter placeholders *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Override this in child classes to set up signal connections for a player *(from [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger))*

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Override this in child classes to clean up signal connections for a player *(from [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger))*

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*


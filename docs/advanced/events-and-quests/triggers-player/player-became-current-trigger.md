<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerBecameCurrentTrigger

**Inherits:** [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger) < [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a player becomes the current/active player (character switching)

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [is_target_player](#method-is-target-player)( `player: Player` ) |
| `int` | [get_player_slot_index](#method-get-player-slot-index)( `player: Player` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Trigger *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String get_function_description() {#method-get-function-description}

Return a description of this trigger with parameter placeholders *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### void setup() {#method-setup}

Set up listeners for all target players *(from [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger))*

### void cleanup() {#method-cleanup}

Clean up listeners for all connected players *(from [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger))*

### bool is_target_player( player: Player ) {#method-is-target-player}

*No description yet.*

### int get_player_slot_index( player: Player ) {#method-get-player-slot-index}

*No description yet.*

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*


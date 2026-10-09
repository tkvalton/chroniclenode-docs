<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerHasXItemsTrigger

**Inherits:** [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger) < [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when target player(s) have X amount of a specific item

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [required_quantity](#prop-required-quantity) | `1` |
| `Condition.CheckLogic` | [check_logic](#prop-check-logic) | `Condition.CheckLogic.GREATER_EQUAL` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup_player_connection](#method-setup-player-connection)( `player: Player` ) |
| `void` | [cleanup_player_connection](#method-cleanup-player-connection)( `player: Player` ) |
| `bool` | [meets_quantity_condition](#method-meets-quantity-condition)( `current_quantity: int` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int item_id = 0 {#prop-item-id}

*No description yet.*

### int required_quantity = 1 {#prop-required-quantity}

*No description yet.*

### Condition.CheckLogic check_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-check-logic}

*No description yet.*

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Trigger *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String get_function_description() {#method-get-function-description}

Return a description of this trigger with parameter placeholders *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Override this in child classes to set up signal connections for a player *(from [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger))*

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Override this in child classes to clean up signal connections for a player *(from [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger))*

### bool meets_quantity_condition( current_quantity: int ) {#method-meets-quantity-condition}

*No description yet.*

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*


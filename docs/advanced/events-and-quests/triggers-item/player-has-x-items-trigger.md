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
| `int` | [get_tally_target](#method-get-tally-target)() |
| `int` | [get_tally_progress](#method-get-tally-progress)() |
| `void` | [reset](#method-reset)() |
| `void` | [poll](#method-poll)() |
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup_player_connection](#method-setup-player-connection)( `player: Player` ) |
| `void` | [cleanup_player_connection](#method-cleanup-player-connection)( `player: Player` ) |
| `bool` | [meets_quantity_condition](#method-meets-quantity-condition)( `current_quantity: int` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int item_id = 0 {#prop-item-id}

The item to count.

### int required_quantity = 1 {#prop-required-quantity}

The number to compare the count with.

### Condition.CheckLogic check_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-check-logic}

How the count is compared with the number (equal, at least, more than ...).

## Method descriptions

### int get_tally_target() {#method-get-tally-target}

The number the quest objective counts up to (0 when it does not count).

### int get_tally_progress() {#method-get-tally-progress}

How far the count of the quest objective is now.

### void reset() {#method-reset}

Sets the count back to zero.

### void poll() {#method-poll}

The player may hold the items already when an objective starts to listen

### String get_display_name() {#method-get-display-name}

The name of the trigger in the editor.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the trigger, with &#123;placeholders&#125; for its values.

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Connects the signal of a player this trigger listens to.

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Disconnects the signal of a player.

### bool meets_quantity_condition( current_quantity: int ) {#method-meets-quantity-condition}

Does this count satisfy the trigger?

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Does this event data satisfy the trigger? Called when the signal the trigger listens to fires.

### String generate_objective_description() {#method-generate-objective-description}

The line of the quest objective this trigger makes ("Kill 5 wolves").


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerGatheredTrigger

**Inherits:** [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger) < [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when the player gathers from a gathering node (a GatherInteraction): any node, or one kind of node, a number of times. As an objective of a quest it shows the tally ("Gather 5 Moonpetal 3/5").

## Properties

| | | |
|---|---|---|
| `int` | [gather_node_id](#prop-gather-node-id) | `0` |
| `int` | [amount_required](#prop-amount-required) | `1` |

## Variables

| | | |
|---|---|---|
| `int` | [current_amount](#var-current-amount) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `int` | [get_tally_target](#method-get-tally-target)() |
| `int` | [get_tally_progress](#method-get-tally-progress)() |
| `void` | [reset](#method-reset)() |
| `void` | [set_progress](#method-set-progress)( `amount: int` ) |
| `void` | [setup_player_connection](#method-setup-player-connection)( `player: Player` ) |
| `void` | [cleanup_player_connection](#method-cleanup-player-connection)( `player: Player` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int gather_node_id = 0 {#prop-gather-node-id}

The kind of node (an interactable) to count. 0 = any gathering node

### int amount_required = 1 {#prop-amount-required}

How many times the player has to gather before the trigger fires

## Variable descriptions

### int current_amount = 0 {#var-current-amount}

How many gathers were counted so far

## Method descriptions

### String get_display_name() {#method-get-display-name}

The name of the trigger in the editor.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the trigger, with &#123;placeholders&#125; for its values.

### int get_tally_target() {#method-get-tally-target}

The number the quest objective counts up to (0 when it does not count).

### int get_tally_progress() {#method-get-tally-progress}

How far the count of the quest objective is now.

### void reset() {#method-reset}

Sets the count back to zero.

### void set_progress( amount: int ) {#method-set-progress}

Sets the count (when a quest is restored from a save).

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Connects the signal of a player this trigger listens to.

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Disconnects the signal of a player.

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Does this event data satisfy the trigger? Called when the signal the trigger listens to fires.

### String generate_objective_description() {#method-generate-objective-description}

The line of the quest objective this trigger makes ("Kill 5 wolves").


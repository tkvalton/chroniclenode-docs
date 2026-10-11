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

Return the display name of this Trigger *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String get_function_description() {#method-get-function-description}

Return a description of this trigger with parameter placeholders *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### int get_tally_target() {#method-get-tally-target}

How far a counting trigger has to count (0 = it does not count: a quest objective of it is done or not). An objective shows the tally "3/10" for it *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### int get_tally_progress() {#method-get-tally-progress}

How far a counting trigger has counted *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### void reset() {#method-reset}

What a trigger that holds a count does when its owner starts it over (see QuestObjective.reset) *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### void set_progress( amount: int ) {#method-set-progress}

*No description yet.*

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Override this in child classes to set up signal connections for a player *(from [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger))*

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Override this in child classes to clean up signal connections for a player *(from [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger))*

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*


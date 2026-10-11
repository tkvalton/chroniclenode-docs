<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerCurrencyChangedTrigger

**Inherits:** [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger) < [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when the player gains or spends an amount of a currency. It counts what comes and goes from the moment it starts listening: 10 Boar Meat gained, 50 Gold spent. As an objective of a quest it shows the tally (3/10). A currency can stand for anything (meat, pelts, tokens): it takes no space in the bag.

## Properties

| | | |
|---|---|---|
| `int` | [currency_id](#prop-currency-id) | `0` |
| `Direction` | [direction](#prop-direction) | `Direction.GAINED` |
| `int` | [amount_required](#prop-amount-required) | `1` |
| `bool` | [count_existing](#prop-count-existing) | `false` |

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
| `void` | [poll](#method-poll)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Enumerations

### enum Direction {#enum-direction}

- **GAINED** = `0` - Counts what the player gains
- **LOST** = `1` - Counts what the player spends or loses
- **EITHER** = `2` - Counts both

## Property descriptions

### int currency_id = 0 {#prop-currency-id}

The currency to watch

### Direction direction = Direction.GAINED {#prop-direction}

Which way the currency moves

### int amount_required = 1 {#prop-amount-required}

How much has to be gained (or lost) before the trigger fires

### bool count_existing = false {#prop-count-existing}

Count what the player already holds when the trigger starts (gained only): "have 10", not "gain 10 more"

## Variable descriptions

### int current_amount = 0 {#var-current-amount}

What has been counted so far

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

The count starts again (the objective or event that owns this trigger starts over)

### void set_progress( amount: int ) {#method-set-progress}

The count from a save

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Override this in child classes to set up signal connections for a player *(from [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger))*

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Override this in child classes to clean up signal connections for a player *(from [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger))*

### void poll() {#method-poll}

What a start of the count that already holds enough says (an objective asks once it listens)

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*


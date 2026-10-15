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

The options of direction: gained, lost, either.

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

The name of the trigger in the editor.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the trigger, with &#123;placeholders&#125; for its values.

### int get_tally_target() {#method-get-tally-target}

The number the quest objective counts up to (0 when it does not count).

### int get_tally_progress() {#method-get-tally-progress}

How far the count of the quest objective is now.

### void reset() {#method-reset}

The count starts again (the objective or event that owns this trigger starts over)

### void set_progress( amount: int ) {#method-set-progress}

The count from a save

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Connects the signal of a player this trigger listens to.

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Disconnects the signal of a player.

### void poll() {#method-poll}

What a start of the count that already holds enough says (an objective asks once it listens)

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Does this event data satisfy the trigger? Called when the signal the trigger listens to fires.

### String generate_objective_description() {#method-generate-objective-description}

The line of the quest objective this trigger makes ("Kill 5 wolves").


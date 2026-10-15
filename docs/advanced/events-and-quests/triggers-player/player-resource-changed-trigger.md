<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerResourceChangedTrigger

**Inherits:** [PlayerEventTrigger](/advanced/events-and-quests/bases/player-event-trigger) < [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when target player(s) resource changes

## Properties

| | | |
|---|---|---|
| `Condition.CheckLogic` | [resource_check_logic](#prop-resource-check-logic) | `Condition.CheckLogic.GREATER_EQUAL` |
| `int` | [target_resource](#prop-target-resource) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup_player_connection](#method-setup-player-connection)( `player: Player` ) |
| `void` | [cleanup_player_connection](#method-cleanup-player-connection)( `player: Player` ) |
| `bool` | [meets_resource_condition](#method-meets-resource-condition)( `current_resource: int` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### Condition.CheckLogic resource_check_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-resource-check-logic}

How the resource is compared with the target (equal, at least, less than ...).

### int target_resource = 0 {#prop-target-resource}

The amount of the resource to compare with.

## Method descriptions

### String get_display_name() {#method-get-display-name}

The name of the trigger in the editor.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the trigger, with &#123;placeholders&#125; for its values.

### void setup_player_connection( player: Player ) {#method-setup-player-connection}

Connects the signal of a player this trigger listens to.

### void cleanup_player_connection( player: Player ) {#method-cleanup-player-connection}

Disconnects the signal of a player.

### bool meets_resource_condition( current_resource: int ) {#method-meets-resource-condition}

Does this amount satisfy the trigger?

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Does this event data satisfy the trigger? Called when the signal the trigger listens to fires.

### String generate_objective_description() {#method-generate-objective-description}

The line of the quest objective this trigger makes ("Kill 5 wolves").


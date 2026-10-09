<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerExperienceGainedTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a player gains a specific amount of experience

## Properties

| | | |
|---|---|---|
| `PlayerEventAction.PlayerTarget` | [player_slot](#prop-player-slot) | `PlayerEventAction.PlayerTarget.ANY_PLAYER` |
| `Condition.CheckLogic` | [xp_check_logic](#prop-xp-check-logic) | `Condition.CheckLogic.GREATER_EQUAL` |
| `int` | [target_experience](#prop-target-experience) | `0` |

## Variables

| | | |
|---|---|---|
| `Array[Player]` | [connected_entities](#var-connected-entities) | `[]` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [is_matching_player_slot](#method-is-matching-player-slot)( `player: Player` ) |
| `bool` | [meets_xp_condition](#method-meets-xp-condition)( `current_xp: int` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### PlayerEventAction.PlayerTarget player_slot = PlayerEventAction.PlayerTarget.ANY_PLAYER {#prop-player-slot}

Specific player slot to track

### Condition.CheckLogic xp_check_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-xp-check-logic}

Comparison logic for experience check

### int target_experience = 0 {#prop-target-experience}

Experience amount to compare against

## Variable descriptions

### Array[Player] connected_entities = [] {#var-connected-entities}

Track connected entities to disconnect later

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger

### void cleanup() {#method-cleanup}

Clean up any listeners or connections

### bool is_matching_player_slot( player: Player ) {#method-is-matching-player-slot}

Check if a player matches the slot requirement

### bool meets_xp_condition( current_xp: int ) {#method-meets-xp-condition}

Check if the current experience meets the comparison logic

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


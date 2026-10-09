<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerEquipmentChangeTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific player's equipment changes

## Properties

| | | |
|---|---|---|
| `PlayerEventAction.PlayerTarget` | [player_slot](#prop-player-slot) | `PlayerEventAction.PlayerTarget.ANY_PLAYER` |
| `int` | [item_id](#prop-item-id) | `0` |
| `EquipmentChangeType` | [equipment_change_type](#prop-equipment-change-type) | `EquipmentChangeType.EQUIPPED` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [is_matching_player_slot](#method-is-matching-player-slot)( `player: Player` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Enumerations

### enum EquipmentChangeType {#enum-equipmentchangetype}

- **EQUIPPED** = `0`
- **UNEQUIPPED** = `1`

## Property descriptions

### PlayerEventAction.PlayerTarget player_slot = PlayerEventAction.PlayerTarget.ANY_PLAYER {#prop-player-slot}

Specific player slot to track

### int item_id = 0 {#prop-item-id}

Specific item ID to track

### EquipmentChangeType equipment_change_type = EquipmentChangeType.EQUIPPED {#prop-equipment-change-type}

Whether to trigger on equipping or unequipping

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

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


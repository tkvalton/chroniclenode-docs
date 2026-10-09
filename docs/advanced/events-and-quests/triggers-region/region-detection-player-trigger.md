<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RegionDetectionPlayerTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a player-controlled entity enters or exits a detection region

## Properties

| | | |
|---|---|---|
| `int` | [region_id](#prop-region-id) | `0` |
| `TriggerMode` | [trigger_mode](#prop-trigger-mode) | `TriggerMode.ON_ENTER` |
| `PlayerTarget` | [player_target](#prop-player-target) | `PlayerTarget.CURRENT_PLAYER` |

## Variables

| | | |
|---|---|---|
| `String` | [region_name](#var-region-name) | `""` |
| `Region` | [target_region](#var-target-region) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [find_target_region](#method-find-target-region)() |
| `void` | [connect_region_signals](#method-connect-region-signals)() |
| `void` | [disconnect_region_signals](#method-disconnect-region-signals)() |
| `bool` | [is_matching_player](#method-is-matching-player)( `body: Node3D` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Enumerations

### enum TriggerMode {#enum-triggermode}

- **ON_ENTER** = `0`
- **ON_EXIT** = `1`
- **ON_BOTH** = `2`

### enum PlayerTarget {#enum-playertarget}

- **CURRENT_PLAYER** = `0`
- **ALL_PLAYERS** = `1`
- **PLAYER_1** = `2`
- **PLAYER_2** = `3`
- **PLAYER_3** = `4`
- **PLAYER_4** = `5`
- **PLAYER_5** = `6`
- **PLAYER_6** = `7`
- **PLAYER_7** = `8`
- **PLAYER_8** = `9`
- **PLAYER_9** = `10`
- **PLAYER_10** = `11`
- **PLAYER_11** = `12`
- **PLAYER_12** = `13`
- **PLAYER_13** = `14`
- **PLAYER_14** = `15`
- **PLAYER_15** = `16`
- **PLAYER_16** = `17`
- **PLAYER_17** = `18`
- **PLAYER_18** = `19`
- **PLAYER_19** = `20`
- **PLAYER_20** = `21`

## Property descriptions

### int region_id = 0 {#prop-region-id}

The region ID to track

### TriggerMode trigger_mode = TriggerMode.ON_ENTER {#prop-trigger-mode}

When to trigger (enter, exit, or both)

### PlayerTarget player_target = PlayerTarget.CURRENT_PLAYER {#prop-player-target}

Which player(s) to detect

## Variable descriptions

### String region_name = "" {#var-region-name}

Region name - auto-populated from the target region if it exists

### Region target_region = null {#var-target-region}

Reference to the target Region

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Trigger *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String get_function_description() {#method-get-function-description}

Return a description of this trigger with parameter placeholders *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### void cleanup() {#method-cleanup}

Clean up any listeners or connections *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### void find_target_region() {#method-find-target-region}

*No description yet.*

### void connect_region_signals() {#method-connect-region-signals}

*No description yet.*

### void disconnect_region_signals() {#method-disconnect-region-signals}

*No description yet.*

### bool is_matching_player( body: Node3D ) {#method-is-matching-player}

*No description yet.*

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description *(from [EventTrigger](/advanced/events-and-quests/bases/event-trigger))*


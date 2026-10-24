<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TriggerAreaDetectionPlayerTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a player-controlled entity enters or exits a detection trigger area

## Properties

| | | |
|---|---|---|
| `int` | [trigger_area_id](#prop-trigger-area-id) | `0` |
| `TriggerMode` | [trigger_mode](#prop-trigger-mode) | `TriggerMode.ON_ENTER` |
| `PlayerTarget` | [player_target](#prop-player-target) | `PlayerTarget.CURRENT_PLAYER` |

## Variables

| | | |
|---|---|---|
| `String` | [trigger_area_name](#var-trigger-area-name) | `""` |
| `TriggerArea` | [target_trigger_area](#var-target-trigger-area) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [find_target_trigger_area](#method-find-target-trigger-area)() |
| `void` | [connect_trigger_area_signals](#method-connect-trigger-area-signals)() |
| `void` | [disconnect_trigger_area_signals](#method-disconnect-trigger-area-signals)() |
| `bool` | [is_matching_player](#method-is-matching-player)( `body: Node3D` ) |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Enumerations

### enum TriggerMode {#enum-triggermode}

The options of trigger mode: on enter, on exit, on both.

- **ON_ENTER** = `0`
- **ON_EXIT** = `1`
- **ON_BOTH** = `2`

### enum PlayerTarget {#enum-playertarget}

Reuse PlayerTarget enum from PlayerEventTrigger

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

### int trigger_area_id = 0 {#prop-trigger-area-id}

The trigger area ID to track

### TriggerMode trigger_mode = TriggerMode.ON_ENTER {#prop-trigger-mode}

When to trigger (enter, exit, or both)

### PlayerTarget player_target = PlayerTarget.CURRENT_PLAYER {#prop-player-target}

Which player(s) to detect

## Variable descriptions

### String trigger_area_name = "" {#var-trigger-area-name}

Trigger area name - auto-populated from the target trigger area if it exists

### TriggerArea target_trigger_area = null {#var-target-trigger-area}

Reference to the target Trigger area

## Method descriptions

### String get_display_name() {#method-get-display-name}

The name of the trigger in the editor.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the trigger, with &#123;placeholders&#125; for its values.

### void setup() {#method-setup}

Starts listening: connects the signals the trigger waits for.

### void cleanup() {#method-cleanup}

Stops listening: disconnects the signals of the trigger.

### void find_target_trigger_area() {#method-find-target-trigger-area}

Finds the trigger area the trigger watches by its id.

### void connect_trigger_area_signals() {#method-connect-trigger-area-signals}

Connects the signals of the trigger area (an entity enters, an entity leaves).

### void disconnect_trigger_area_signals() {#method-disconnect-trigger-area-signals}

Disconnects the signals of the trigger area.

### bool is_matching_player( body: Node3D ) {#method-is-matching-player}

Is the body a player entity?

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Does this event data satisfy the trigger? Called when the signal the trigger listens to fires.

### String generate_objective_description() {#method-generate-objective-description}

The line of the quest objective this trigger makes ("Kill 5 wolves").


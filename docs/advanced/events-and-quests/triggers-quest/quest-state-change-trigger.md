<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestStateChangeTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a specific quest changes state (activated, completed, or failed)

## Properties

| | | |
|---|---|---|
| `int` | [quest_id](#prop-quest-id) | `0` |
| `Quest.QuestState` | [trigger_on](#prop-trigger-on) | `Quest.QuestState.ACTIVE` |

## Variables

| | | |
|---|---|---|
| `Quest` | [target_quest](#var-target-quest) | `null` |
| `bool` | [is_connected_to_manager](#var-is-connected-to-manager) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [find_target_quest](#method-find-target-quest)() |
| `void` | [connect_to_quest_manager](#method-connect-to-quest-manager)() |
| `void` | [disconnect_from_quest_manager](#method-disconnect-from-quest-manager)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int quest_id = 0 {#prop-quest-id}

The quest ID to track

### Quest.QuestState trigger_on = Quest.QuestState.ACTIVE {#prop-trigger-on}

Whether to trigger on activation, completion, or failure

## Variable descriptions

### Quest target_quest = null {#var-target-quest}

Reference to the target quest object

### bool is_connected_to_manager = false {#var-is-connected-to-manager}

Track if we're connected to EventManager signals

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger

### void cleanup() {#method-cleanup}

Clean up any listeners or connections

### void find_target_quest() {#method-find-target-quest}

Try to find the target quest through EventManager

### void connect_to_quest_manager() {#method-connect-to-quest-manager}

Connect to EventManager signals to listen for quest state changes

### void disconnect_from_quest_manager() {#method-disconnect-from-quest-manager}

Disconnect from EventManager signals

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


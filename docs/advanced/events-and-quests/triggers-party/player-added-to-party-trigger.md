<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerAddedToPartyTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when a player is added to the party

## Properties

| | | |
|---|---|---|
| `int` | [slot_index](#prop-slot-index) | `0` |
| `int` | [character_definition_id](#prop-character-definition-id) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Property descriptions

### int slot_index = 0 {#prop-slot-index}

Specific slot index to track (0 = any slot, 1-10 = specific slot)

### int character_definition_id = 0 {#prop-character-definition-id}

Specific character ID to track (0 = any character)

## Method descriptions

### String get_display_name() {#method-get-display-name}

The name of the trigger in the editor.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the trigger, with &#123;placeholders&#125; for its values.

### void setup() {#method-setup}

Starts listening: connects the signals the trigger waits for.

### void cleanup() {#method-cleanup}

Stops listening: disconnects the signals of the trigger.

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Does this event data satisfy the trigger? Called when the signal the trigger listens to fires.

### String generate_objective_description() {#method-generate-objective-description}

The line of the quest objective this trigger makes ("Kill 5 wolves").


<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ZoneTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when the party enters or leaves a zone. The zone counts when the party is in it or in one of its **sub-zones**: a trigger for *Elderwood* fires when the party walks into *Elderwood* from outside, whether it arrives in the forest itself or straight in *The Old Mill* inside it, and does not fire when it walks between the two. As the trigger of a quest objective it is "Reach the zone" (an objective is complete at once when the party is already there when it starts). See docs: World &gt; Zones.

## Properties

| | | |
|---|---|---|
| `int` | [zone_id](#prop-zone-id) | `0` |
| `TriggerMode` | [trigger_mode](#prop-trigger-mode) | `TriggerMode.ON_ENTER` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [poll](#method-poll)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Enumerations

### enum TriggerMode {#enum-triggermode}

The options of trigger mode: on enter, on exit, on both.

- **ON_ENTER** = `0`
- **ON_EXIT** = `1`
- **ON_BOTH** = `2`

## Property descriptions

### int zone_id = 0 {#prop-zone-id}

The zone to watch (a Zone of the database: World &gt; Zones)

### TriggerMode trigger_mode = TriggerMode.ON_ENTER {#prop-trigger-mode}

When to trigger (enter, exit, or both)

## Method descriptions

### String get_display_name() {#method-get-display-name}

The name of the trigger in the editor.

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the trigger, with &#123;placeholders&#125; for its values.

### void setup() {#method-setup}

Starts listening: connects the signals of the zone tracker.

### void cleanup() {#method-cleanup}

Stops listening: disconnects the signals of the tracker.

### void poll() {#method-poll}

The party may be in the zone already when an objective starts to listen.

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Does this event data satisfy the trigger? Called when the signal the trigger listens to fires.

### String generate_objective_description() {#method-generate-objective-description}

The line of the quest objective this trigger makes ("Reach Elderwood").


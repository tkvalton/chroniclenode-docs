<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnerTrigger

**Inherits:** [EventTrigger](/advanced/events-and-quests/bases/event-trigger) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Triggers when something happens at a spawner: it makes something, what it made is gone (all the NPCs of a group killed, the object used up, the items taken), or it is switched on or off. A quest objective of "the wolves are cleared" is the second one. See docs: World &gt; Spawners.

## Properties

| | | |
|---|---|---|
| `int` | [spawner_id](#prop-spawner-id) | `0` |
| `SpawnerEvent` | [spawner_event](#prop-spawner-event) | `SpawnerEvent.CLEARED` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `void` | [setup](#method-setup)() |
| `void` | [cleanup](#method-cleanup)() |
| `bool` | [is_triggered](#method-is-triggered)( `event_data: Dictionary` ) |
| `String` | [generate_objective_description](#method-generate-objective-description)() |

## Enumerations

### enum SpawnerEvent {#enum-spawnerevent}

What happened at the spawner

- **SPAWNED** = `0`
- **CLEARED** = `1`
- **TURNED_ON** = `2`
- **TURNED_OFF** = `3`

## Property descriptions

### int spawner_id = 0 {#prop-spawner-id}

The spawner (a placed Spawner of a world: Uniques &gt; Spawners)

### SpawnerEvent spawner_event = SpawnerEvent.CLEARED {#prop-spawner-event}

What to wait for

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name for this trigger

### String get_function_description() {#method-get-function-description}

Return the function description with parameter placeholders

### void setup() {#method-setup}

Set up any listeners or connections needed by this trigger

### void cleanup() {#method-cleanup}

Clean up any listeners or connections

### bool is_triggered( event_data: Dictionary ) {#method-is-triggered}

Check if this trigger is currently active

### String generate_objective_description() {#method-generate-objective-description}

Generate quest objective description


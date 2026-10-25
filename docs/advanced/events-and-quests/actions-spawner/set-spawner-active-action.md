<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetSpawnerActiveAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Switches a spawner on or off. A spawner that is off makes nothing new (what it made stays); switching it on lets it work again. See docs: World &gt; Spawners.

## Properties

| | | |
|---|---|---|
| `int` | [spawner_id](#prop-spawner-id) | `0` |
| `Operation` | [operation](#prop-operation) | `Operation.TURN_ON` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Enumerations

### enum Operation {#enum-operation}

What the action does to the spawner

- **TURN_ON** = `0`
- **TURN_OFF** = `1`
- **TOGGLE** = `2`

## Property descriptions

### int spawner_id = 0 {#prop-spawner-id}

The spawner (a placed Spawner of a world: Uniques &gt; Spawners)

### Operation operation = Operation.TURN_ON {#prop-operation}

Turn it on, turn it off, or flip it

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders


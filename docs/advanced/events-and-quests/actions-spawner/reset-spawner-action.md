<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ResetSpawnerAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Makes a spawner start over: what it made is taken away (or left standing and forgotten), every place is empty and the spawner rolls its table again at its next look, without waiting for a respawn time. The wait of what was killed is forgotten. See docs: World &gt; Spawners.

## Properties

| | | |
|---|---|---|
| `int` | [spawner_id](#prop-spawner-id) | `0` |
| `bool` | [remove_what_stands](#prop-remove-what-stands) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### int spawner_id = 0 {#prop-spawner-id}

The spawner (a placed Spawner of a world: Uniques &gt; Spawners)

### bool remove_what_stands = true {#prop-remove-what-stands}

Take away what the spawner made (true), or leave it standing and let the spawner forget it (false)

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders


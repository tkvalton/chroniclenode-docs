<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnFromTableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Rolls a spawn table and makes what comes up at a place, once: an ambush from the bushes, a pack that runs out of the cave when a lever is pulled, loot that drops from the ceiling. The things made are ordinary things of the world (like those of the Spawn Entity and Spawn Interactable actions): no spawner keeps them, and the game saves them. See docs: World &gt; Spawn tables.

## Properties

| | | |
|---|---|---|
| `int` | [spawn_table_id](#prop-spawn-table-id) | `0` |
| `Vector3` | [spawn_position](#prop-spawn-position) | `Vector3.ZERO` |
| `int` | [rolls](#prop-rolls) | `1` |
| `float` | [spread_radius](#prop-spread-radius) | `0.0` |

## Variables

| | | |
|---|---|---|
| `Array[Node]` | [spawned](#var-spawned) | `[]` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Property descriptions

### int spawn_table_id = 0 {#prop-spawn-table-id}

The table to roll (Database &gt; World &gt; Spawn Tables)

### Vector3 spawn_position = Vector3.ZERO {#prop-spawn-position}

Where the things appear

### int rolls = 1 {#prop-rolls}

How many times the table is rolled

### float spread_radius = 0.0 {#prop-spread-radius}

Spread the things over a disc of this radius (metres) round the place, so several rolls do not stand on each other. 0 = all at the place

## Variable descriptions

### Array[Node] spawned = [] {#var-spawned}

What the action made.

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders


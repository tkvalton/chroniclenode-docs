<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CallReinforcementsAction

**Inherits:** [EncounterAction](/advanced/world/encounters/encounter-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Spawns reinforcement entities at designated positions to aid the group

## Properties

| | | |
|---|---|---|
| `Vector3` | [reinforcement_spawn_point](#prop-reinforcement-spawn-point) | `Vector3.ZERO` |
| `int` | [entity_id](#prop-entity-id) | `0` |
| `int` | [amount_to_spawn](#prop-amount-to-spawn) | `1` |
| `bool` | [spawn_all_at_once](#prop-spawn-all-at-once) | `true` |
| `float` | [spawn_interval](#prop-spawn-interval) | `2.0` |
| `int` | [max_total_spawns](#prop-max-total-spawns) | `0  # 0 = no limit` |
| `bool` | [join_encounter_immediately](#prop-join-encounter-immediately) | `true` |

## Variables

| | | |
|---|---|---|
| `int` | [entities_spawned](#var-entities-spawned) | `0` |
| `float` | [spawn_timer](#var-spawn-timer) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [process](#method-process)( `delta: float` ) |
| `void` | [reset_spawning](#method-reset-spawning)() |

## Property descriptions

### Vector3 reinforcement_spawn_point = Vector3.ZERO {#prop-reinforcement-spawn-point}

Where the reinforcements appear.

### int entity_id = 0 {#prop-entity-id}

The NPC that is spawned.

### int amount_to_spawn = 1 {#prop-amount-to-spawn}

How many are spawned each time.

### bool spawn_all_at_once = true {#prop-spawn-all-at-once}

True when they all appear together, false one after the other.

### float spawn_interval = 2.0 {#prop-spawn-interval}

If not spawning all at once

### int max_total_spawns = 0  # 0 = no limit {#prop-max-total-spawns}

The most reinforcements the action ever spawns (0 = no limit).

### bool join_encounter_immediately = true {#prop-join-encounter-immediately}

True when they join the encounter as soon as they appear.

## Variable descriptions

### int entities_spawned = 0 {#var-entities-spawned}

Track how many entities have been spawned

### float spawn_timer = 0.0 {#var-spawn-timer}

Track spawn timing for interval spawning

## Method descriptions

### void process( delta: float ) {#method-process}

Process method for interval spawning

### void reset_spawning() {#method-reset-spawning}

Reset spawn tracking


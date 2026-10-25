<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Spawner

**Inherits:** [SpaceVolume](/advanced/world/runtime/space-volume) < [Area3D](https://docs.godotengine.org/en/stable/classes/class_area3d.html)

A **spawner**: a place in a world that makes things appear and keeps the place alive. It rolls a spawn table (Database &gt; World &gt; Spawn Tables) and makes what comes up: an NPC (or a group of them, as an encounter if the line says so), an interactable, a dropped item, some money, a roll of a loot table, or nothing. When what it made goes away (the NPC is killed, the item is taken, the object is freed) the spawner waits a respawn time and rolls again. A **Point** spawner keeps one thing at its own place. Like a trigger area it makes and keeps its own record (UniqueSpawnerData) when it is placed in a world scene.

## Description

It works only while a player is near (the activation radius) and never makes something right in front of the party (the minimum distance). Its state (what stands there, the timers) is saved with the game by the object registry, and what it made is made again when the game is loaded. See docs: World &gt; Spawners.

## Properties

| | | |
|---|---|---|
| `UniqueSpawnerData` | [unique_data](#prop-unique-data) |  |

## Variables

| | | |
|---|---|---|
| `Array[Slot]` | [slots](#var-slots) | `[]` |
| `bool` | [active](#var-active) | `true` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) | `null` |

## Methods

| | |
|---|---|
| `int` | [get_unique_id](#method-get-unique-id)() |
| `void` | [initialize_spawner](#method-initialize-spawner)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [set_active_state](#method-set-active-state)( `is_on: bool` ) |
| `void` | [tick](#method-tick)( `seconds: float` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `data: Dictionary` ) |

## Signals

### spawned( slot_index: int, members: Array ) {#signal-spawned}

Something was made: the position of the slot and what it made (nodes).

### slot_emptied( slot_index: int ) {#signal-slot-emptied}

What a slot made is gone (killed, taken, used up): the respawn time starts.

## Enumerations

### enum SlotState {#enum-slotstate}

One of the things the spawner keeps: empty (it will roll when it can), alive (what it made is there), or waiting (the respawn time runs).

- **EMPTY** = `0`
- **ALIVE** = `1`
- **WAITING** = `2`

## Constants

- `float` **TICK** = `0.5` - The seconds between two looks of the spawner at its slots.
- `float` **GROUP_RADIUS** = `1.5` - How far (metres) from the spawner the members of a group stand.

## Property descriptions

### UniqueSpawnerData unique_data {#prop-unique-data}

The record of the spawner (its settings)

## Variable descriptions

### Array[Slot] slots = [] {#var-slots}

The slots (made when the spawner is registered).

### bool active = true {#var-active}

Whether the spawner works now (the record says so at the start; an event can change it).

### GameHost.SystemHub system_hub = null {#var-system-hub}

*No description yet.*

## Method descriptions

### int get_unique_id() {#method-get-unique-id}

The id of the record of the spawner (-1 when it has none).

### void initialize_spawner( p_system_hub: GameHost.SystemHub ) {#method-initialize-spawner}

Starts the spawner (the object registry calls it when the world loads).

### void set_active_state( is_on: bool ) {#method-set-active-state}

Switches the spawner on or off (an event does it). Off, it makes nothing and what it made stays.

### void tick( seconds: float ) {#method-tick}

One look at the slots: what went away starts its wait, what waited long enough can roll, an empty slot rolls and makes something when a player is near. `seconds` is the time since the last look.

### Dictionary to_save_data() {#method-to-save-data}

The state of the spawner for a save: for each slot whether it is alive, empty or waiting (with the time left), and what it made.

### void from_save_data( data: Dictionary ) {#method-from-save-data}

Puts a saved state back: what was alive is made again at the next look (a player is near), what waited keeps waiting for the time that was left.


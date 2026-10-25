<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UniqueSpawnerData

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A placed spawner: what the world keeps about one Spawner node in one world. It holds the world, the position, the spawn table and the rules (how many at once, how soon things come back, near whom it works). It is made by the Spawner node when the node is placed in a world scene and deleted with it, like the data of a trigger area. The state of the spawner while the game is played (what stands there, the timers) is saved with the game by the object registry, not here. See docs: World &gt; Spawners.

## Properties

| | | |
|---|---|---|
| `int` | [map_id](#prop-map-id) | `0` |
| `Vector3` | [world_position](#prop-world-position) | `Vector3.ZERO` |
| `Vector3` | [world_rotation](#prop-world-rotation) | `Vector3.ZERO` |
| `String` | [spawner_name](#prop-spawner-name) | `"Spawner"` |
| `bool` | [is_active](#prop-is-active) | `true` |
| `Mode` | [mode](#prop-mode) | `Mode.POINT` |
| `int` | [spawn_table_id](#prop-spawn-table-id) | `0` |
| `int` | [max_alive](#prop-max-alive) | `1` |
| `float` | [respawn_min](#prop-respawn-min) | `60.0` |
| `float` | [respawn_max](#prop-respawn-max) | `60.0` |
| `bool` | [spawn_at_start](#prop-spawn-at-start) | `true` |
| `float` | [activation_radius](#prop-activation-radius) | `80.0` |
| `float` | [min_player_distance](#prop-min-player-distance) | `12.0` |
| `float` | [despawn_radius](#prop-despawn-radius) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [update_position_from_node](#method-update-position-from-node)( `node: Node3D` ) |
| `bool` | [save_to_disk](#method-save-to-disk)() |
| `float` | [pick_respawn_time](#method-pick-respawn-time)( `rng: RandomNumberGenerator = null` ) |
| `int` | [get_slot_count](#method-get-slot-count)() |

## Enumerations

### enum Mode {#enum-mode}

How the spawner chooses its places

- **POINT** = `0` - One place (the spawner itself), one thing at a time

## Property descriptions

### int map_id = 0 {#prop-map-id}

The id of the world the spawner is in.

### Vector3 world_position = Vector3.ZERO {#prop-world-position}

Position in world space (the place of the spawner; kept up to date when the scene is saved).

### Vector3 world_rotation = Vector3.ZERO {#prop-world-rotation}

Rotation in world space

*What and where*

### String spawner_name = "Spawner" {#prop-spawner-name}

A name for you (the Uniques list and the debug tools show it)

### bool is_active = true {#prop-is-active}

Whether the spawner works. An event can switch it on and off

### Mode mode = Mode.POINT {#prop-mode}

How the spawner chooses its places: Point = the spawner itself

### int spawn_table_id = 0 {#prop-spawn-table-id}

The spawn table the spawner rolls every time it makes something (Database &gt; World &gt; Spawn Tables)

*How often*

### int max_alive = 1 {#prop-max-alive}

How many things the spawner keeps alive at once (a Point spawner always keeps one: a group of NPCs from one line counts as one)

### float respawn_min = 60.0 {#prop-respawn-min}

The fewest seconds between what a spawner made going away (killed, taken, used up) and the next one coming

### float respawn_max = 60.0 {#prop-respawn-max}

The most seconds before the next one comes (the time is chosen between the two numbers)

### bool spawn_at_start = true {#prop-spawn-at-start}

Whether the first thing appears at once when the spawner starts working (a player comes near), instead of waiting a respawn time

*Near the player*

### float activation_radius = 80.0 {#prop-activation-radius}

The spawner only works while a player of the party is this close (metres). 0 = it works everywhere, always

### float min_player_distance = 12.0 {#prop-min-player-distance}

Nothing appears this close to a player (metres): it does not pop up in front of the party

### float despawn_radius = 0.0 {#prop-despawn-radius}

What stands there when no player is within this distance (metres) leaves again, so a world full of spawners costs nothing while nobody is there. Things in a fight stay. 0 = they stay

## Method descriptions

### void update_position_from_node( node: Node3D ) {#method-update-position-from-node}

Keeps the place of the spawner

### bool save_to_disk() {#method-save-to-disk}

Save this data to disk

### float pick_respawn_time( rng: RandomNumberGenerator = null ) {#method-pick-respawn-time}

The seconds a thing takes to come back this time (between the two numbers).

### int get_slot_count() {#method-get-slot-count}

How many places the spawner keeps (a Point spawner has one).


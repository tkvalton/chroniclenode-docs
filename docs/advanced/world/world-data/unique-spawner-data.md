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
| `float` | [density](#prop-density) | `4.0` |
| `float` | [max_slope](#prop-max-slope) | `45.0` |
| `bool` | [only_walkable](#prop-only-walkable) | `true` |
| `Color` | [paint_color](#prop-paint-color) | `Color(1.0, 0.55, 0.2, 1.0)` |
| `bool` | [only_between_hours](#prop-only-between-hours) | `false` |
| `float` | [from_hour](#prop-from-hour) | `20.0` |
| `float` | [to_hour](#prop-to-hour) | `6.0` |
| `WeatherRule` | [weather_rule](#prop-weather-rule) | `WeatherRule.ANY` |
| `String` | [weather_name](#prop-weather-name) | `""` |
| `int` | [condition_event_id](#prop-condition-event-id) | `0` |
| `bool` | [leave_when_unmet](#prop-leave-when-unmet) | `false` |
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

### enum WeatherRule {#enum-weatherrule}

What the weather has to be for a spawner to work

- **ANY** = `0` - The weather does not matter
- **ONLY_IN** = `1` - Only while the weather is the one named below
- **NOT_IN** = `2` - Never while the weather is the one named below

### enum Mode {#enum-mode}

How the spawner chooses its places

- **POINT** = `0` - One place (the spawner itself), one thing at a time
- **VOLUME** = `1` - Random places inside the shape of the node (a cave, a room), snapped down to the floor, up to Max alive things at once
- **PAINTED** = `2` - Random places on the ground painted for this spawner with the Paint spawner tool of the terrain, filled round the players

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

How the spawner chooses its places: Point = the spawner itself, Volume = inside its shape, Painted = on the ground painted for it

### int spawn_table_id = 0 {#prop-spawn-table-id}

The spawn table the spawner rolls every time it makes something (Database &gt; World &gt; Spawn Tables)

### float max_slope = 45.0 {#prop-max-slope}

The steepest ground (degrees) a thing may appear on (Volume and Painted)

### bool only_walkable = true {#prop-only-walkable}

NPCs only appear where they can walk (there is baked navigation there). A world with no baked navigation ignores this

### Color paint_color = Color(1.0, 0.55, 0.2, 1.0) {#prop-paint-color}

The colour of the spawner on the ground while you paint it (a Painted spawner only)

*How often*

### int max_alive = 1 {#prop-max-alive}

How many things a Volume spawner keeps alive at once (a Point spawner always keeps one, a Painted spawner keeps as many as its density asks: a group of NPCs from one line counts as one)

### float respawn_min = 60.0 {#prop-respawn-min}

The fewest seconds between what a spawner made going away (killed, taken, used up) and the next one coming

### float respawn_max = 60.0 {#prop-respawn-max}

The most seconds before the next one comes (the time is chosen between the two numbers)

### bool spawn_at_start = true {#prop-spawn-at-start}

Whether the first thing appears at once when the spawner starts working (a player comes near), instead of waiting a respawn time

### float density = 4.0 {#prop-density}

For a Painted spawner: how many things stand on every 1000 square metres of painted ground (a chunk of 16 m by 16 m that is all painted is 256 square metres). Less than one means some chunks have none

*Only when*

### bool only_between_hours = false {#prop-only-between-hours}

The spawner only makes things between two hours of the game clock (a night spawner for undead). The window may cross midnight (from 20 to 6)

### float from_hour = 20.0 {#prop-from-hour}

The hour (0 to 24, 0.5 is half past midnight) the window starts

### float to_hour = 6.0 {#prop-to-hour}

The hour the window ends

### WeatherRule weather_rule = WeatherRule.ANY {#prop-weather-rule}

Whether the weather decides: only in a weather, or never in it

### String weather_name = "" {#prop-weather-name}

The weather the rule is about: the name of a weather of the VFX database ("rain"), or "clear" for no weather at all

### int condition_event_id = 0 {#prop-condition-event-id}

The conditions of this Event (Database &gt; Events) must all be met: the same conditions events use (a quest is running, a switch is on, a variable is high). The event itself is not run

### bool leave_when_unmet = false {#prop-leave-when-unmet}

What the spawner made leaves (when nothing is fighting) as soon as the conditions are no longer met, instead of staying until it is killed

*Near the player*

### float activation_radius = 80.0 {#prop-activation-radius}

The spawner only works while a player of the party is this close (metres; for a Volume spawner counted from its shape, for a Painted one from each chunk). 0 = it works everywhere, always (a Painted spawner then works 80 m round the players)

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

How many places the spawner keeps at the start (a Point spawner has one, a Volume spawner its Max alive; a Painted spawner makes its places per chunk near the players).


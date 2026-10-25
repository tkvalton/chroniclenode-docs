<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnMaker

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Makes what a line of a spawn table says: an NPC or a group of them, an interactable, items or money on the ground. The Spawner node uses it for every thing it makes, and the *Spawn From Table* event action uses it to make things at a place on the spot. A line that came up is turned into a **plan** (`plan_of`: the kind, the target, how many, the level, the amount, whether the group fights as one), and a plan is turned into nodes at a place (`make`). See docs: World &gt; Spawners.

## Methods

| | |
|---|---|
| `Dictionary` | [plan_of](#method-plan-of)( `entry: SpawnEntry, rng: RandomNumberGenerator` ) *static* |
| `Array[Node]` | [make](#method-make)( `plan: Dictionary, place: Vector3, system_hub: GameHost.SystemHub, rng: RandomNumberGenerator, rotation: Vector3 = Vector3.ZERO, from_spawner: bool = false` ) *static* |
| `Vector3` | [ring_spot](#method-ring-spot)( `place: Vector3, index: int, count: int` ) *static* |
| `Dictionary` | [drops_of](#method-drops-of)( `kind: int, target_id: int, amount: int, system_hub: GameHost.SystemHub, rng: RandomNumberGenerator` ) *static* |
| `int` | [item_level](#method-item-level)( `system_hub: GameHost.SystemHub` ) *static* |
| `EncounterGroup` | [make_group](#method-make-group)( `plan: Dictionary, members: Array[Node], system_hub: GameHost.SystemHub, key: int` ) *static* |

## Constants

- `float` **GROUP_RADIUS** = `1.5` - How far (metres) from the place the members of a group stand.

## Method descriptions

### Dictionary plan_of( entry: SpawnEntry, rng: RandomNumberGenerator ) {#method-plan-of}

The plan of a line that came up: &#123;"kind", "target_id", "count", "level", "amount", "group"&#125;. Null for no line or a line of Nothing.

### Array[Node] make( plan: Dictionary, place: Vector3, system_hub: GameHost.SystemHub, rng: RandomNumberGenerator, rotation: Vector3 = Vector3.ZERO, from_spawner: bool = false ) {#method-make}

Makes what a plan says at a place and gives the nodes. `rotation` turns an interactable. With `from_spawner` the nodes get the meta "spawner_made" (the object registry leaves them out of the save: the spawner makes them again).

### Vector3 ring_spot( place: Vector3, index: int, count: int ) {#method-ring-spot}

Where the member i of a group of count stands: the place itself for one, a ring round it for more.

### Dictionary drops_of( kind: int, target_id: int, amount: int, system_hub: GameHost.SystemHub, rng: RandomNumberGenerator ) {#method-drops-of}

What lies on the ground for a line: &#123;"items": [...], "currency": &#123;...&#125;&#125; as the loot code gives them.

### int item_level( system_hub: GameHost.SystemHub ) {#method-item-level}

The level of the items that are made: the item level of the world, else the level of the player in control.

### EncounterGroup make_group( plan: Dictionary, members: Array[Node], system_hub: GameHost.SystemHub, key: int ) {#method-make-group}

The NPCs that appear together from one line fight as one encounter (a new group that only lives as long as they do). `key` makes the name of the node different from another group's.


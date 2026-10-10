# Uniques

A **unique** is one placed object of a world: *this* goblin, *this* chest, *this* area, *this* ambush. When you put an NPC in a scene, the toolkit makes a unique for it in the database; when you move it, the unique remembers where it is. **World > Uniques** is the list of all of them.

You do not make uniques here. You place objects with [Add Object](/basic/world/add-object) and change them in the [Unique Object panel](/basic/world/unique-object-tool). This list is for finding things.

## The list

| Control | What it does |
|---|---|
| **Type** | Which kind to list: **Entities** (NPCs), **Interactables**, **Regions** or **Encounters** |
| **Map** | Only the uniques of one world, or *All Maps* |
| **Search** | Filters by name |
| **Refresh** | Reads the list again |
| The count | How many are shown |

Each line shows the object, its definition and the world it is in. **Select a line** to see its details under the list: what it is and its id, the definition it uses, the **world** it is in and its **position**, and its main settings (an NPC's level and respawn, an encounter's behavior and formation and whether it respawns). The list is for looking: to change a unique, open its world scene, select the node, and use the Unique Object panel.

## Definition and unique

| | The definition | The unique |
|---|---|---|
| **What it is** | What a *Goblin* is: stats, abilities, loot, model | This goblin in the Tutorial, near the bridge |
| **Where it lives** | [Entities](/basic/entities/): the NPC editor | The scene, and the Uniques list |
| **A change affects** | Every goblin in the game | This goblin only |

A unique **overrides** a definition field only when you ask it to. Leave a field at its empty value (`0`, nothing, `-1`) and the unique uses the definition. This is how one *Goblin* definition gives you a level 3 scout and a level 8 chieftain with a different [loot table](/basic/items/loot-tables), without a second definition.

What each kind can override:

| Kind | Overrides |
|---|---|
| **NPC** | Active or hidden at the start, spawn delay, respawn time, killable once, despawn on death, **level**, model scale, [faction](/basic/behaviors/factions), experience worth and multiplier, behavior script, combat script, **loot rules**, (the older loot table and starting inventory), **stats**, interaction |
| **Interactable** | Faction, lock item, interaction [cooldown](/basic/keywords#cooldown), damage threshold, whether it can be targeted directly or by area abilities, stats, **loot rules**, interaction |
| **Region** | Its area name (set on the node) |
| **Encounter** | Formation, behavior, auto-join, reactions (the whole encounter is one unique) |

**Loot rules** of a placed NPC or object **replace** all the [rules](/basic/items/loot-rules) of its definition when it has any: a unique boss with its own table, a chest with its own contents. Leave the list empty to use the definition's.

All kinds also store their **position and rotation**, which follow the object when you save the scene.

## When a unique is deleted

Deleting the node from the scene deletes its unique too, so the list does not keep objects that are no longer in a world.

## See also

- [Add Object](/basic/world/add-object), [The Unique Object tool](/basic/world/unique-object-tool).
- [NPCs](/basic/entities/npcs) and [Interactables](/basic/entities/interactables) for the definitions.

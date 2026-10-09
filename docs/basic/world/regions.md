# Regions

A **region** is an area of a world that the game can *watch*: the old mill, the cave mouth, the market square. It does nothing by itself. It lets an [event](/basic/events-and-quests/events), a [quest](/basic/events-and-quests/quests) or a condition ask "is someone in there?" and react when they enter or leave.

## Placing one

1. Open the world scene, **Add Object > Add Region**. A region node appears in the *Regions* container and is selected.
2. Give it a shape: add a `CollisionShape3D` as a child of the region, choose a box, a sphere or a capsule, and size and move it over the area. (The node shows a warning until it has a shape.)
3. Move the region node to the place. Moving the node moves the shape with it.
4. Set its **Area Name** in Godot's inspector (the Unique Object panel does not show regions): *The Old Mill*. Triggers and quest texts show this name ("Reach The Old Mill").

The region gets an id and a record in the database (`RegionData`: its world, position and rotation, and its name) as soon as it is in a world scene, like every other [unique](/basic/world/uniques).

| Field | What it does | Default |
|---|---|---|
| **Area Name** | The name shown in event triggers and quest descriptions. Also the name of the region record | empty |

## What a region sees

A region placed from **Add Object** sits on the *Regions* [collision layer](/basic/game-settings/collision-layers) and sees the **player characters, NPCs and pets**. If you need it to see something else (a projectile, an interactable), change the node's collision *mask* in the inspector; a region you placed keeps the layers it is saved with.

## Watching a region

A region is **asleep** until something watches it: it does not check for bodies, so a world with a hundred regions costs nothing. The things that watch a region wake it up while they need it:

| Watcher | What it does |
|---|---|
| **Region triggers** of an [event](/basic/events-and-quests/events) | Fire when something enters or leaves the region. There are four: **any entity**, **a player-controlled entity**, **an entity of a faction**, **one specific placed NPC** |
| **Conditions** | *Player Region Presence* and *Region Entity Presence* ask who is inside right now. A condition can ask about **any** region at any time, even one nothing watches: it asks the physics directly |

### Who counts as "the player"

The *Player Region Presence* condition has a **Player slot** setting:

| Choice | True when |
|---|---|
| **Any player** | Any member of the party is inside |
| **All players** | The whole party is inside |
| **Current player** | The character you control is inside |
| **Player 1, 2, 3...** | The character in that party slot is inside |

**Require presence** chooses between "is inside" (on) and "is not inside" (off).

## Examples

- **A quest objective "Reach the old mill":** an event with a *Player in region* trigger on the mill region; the event completes the objective.
- **An ambush:** an event with a trigger *any player enters the forest road*; its action spawns bandits or activates an [encounter](/basic/world/encounters).
- **A safe area:** a condition on an ability or an effect "only while *not* in the arena region".

## See also

- [Events](/basic/events-and-quests/events) for the triggers and actions, [Conditions](/basic/shared-systems/conditions) for the presence conditions.
- [How regions are built](/advanced/world/regions).

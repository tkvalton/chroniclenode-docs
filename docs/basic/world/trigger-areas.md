# Trigger areas

::: info Formerly called regions
The editor, the palette and these pages say **trigger area** so that it is not mixed up with a [zone](/basic/world/zones) (a named place of the map with a banner). Only the word changed: the node is still a `TriggerArea`, its record a `TriggerAreaData`, and nothing in an existing project has to be redone.
:::

A **trigger area** (the `TriggerArea` node) is an area of a world that the game can *watch*: the old mill, the cave mouth, the market square. It does nothing by itself. It lets an [event](/basic/events-and-quests/events), a [quest](/basic/events-and-quests/quests) or a condition ask "is someone in there?" and react when they enter or leave.

## Placing one

1. Open the world scene, click the **Volumes** button, choose **Trigger area** and click where it goes. A trigger area node appears in the *TriggerAreas* container and is selected.
2. It comes with a box shape (6 x 3 x 6 m): resize it with the gizmo over the area, or replace it with a sphere or a capsule (a `CollisionShape3D` child).
3. Move the trigger area node to the place. Moving the node moves the shape with it.
4. Set its **Area Name** in the [Unique Object panel](/basic/world/unique-object-tool) (or in Godot's inspector): *The Old Mill*. Triggers and quest texts show this name ("Reach The Old Mill").

The trigger area gets an id and a record in the database ([`TriggerAreaData`](/advanced/world/world-data/trigger-area-data): its world, position and rotation, and its name) as soon as it is in a world scene, like every other [unique](/basic/world/uniques).

| Field | What it does | Default |
|---|---|---|
| **Area Name** | The name shown in event triggers and quest descriptions. Also the name of the trigger area record | empty |

## What a trigger area sees

A trigger area placed with the placement tool sits on the *Trigger areas* [collision layer](/basic/game-settings/collision-layers) and sees the **player characters, NPCs and pets**. If you need it to see something else (a projectile, an interactable), change the node's collision *mask* in the inspector; a trigger area you placed keeps the layers it is saved with.

## Watching a trigger area

A trigger area is **asleep** until something watches it: it does not check for bodies, so a world with a hundred trigger areas costs nothing. The things that watch a trigger area wake it up while they need it:

| Watcher | What it does |
|---|---|
| **Trigger area triggers** of an [event](/basic/events-and-quests/events) | Fire when something enters or leaves the trigger area. There are four: **any entity**, **a player-controlled entity**, **an entity of a faction**, **one specific placed NPC** |
| **Conditions** | *Player Trigger area Presence* and *Trigger area Entity Presence* ask who is inside right now. A condition can ask about **any** trigger area at any time, even one nothing watches: it asks the physics directly |

### Who counts as "the player"

The *Player Trigger area Presence* condition has a **Player slot** setting:

| Choice | True when |
|---|---|
| **Any player** | Any member of the party is inside |
| **All players** | The whole party is inside |
| **Current player** | The character you control is inside |
| **Player 1, 2, 3...** | The character in that party slot is inside |

**Require presence** chooses between "is inside" (on) and "is not inside" (off).

## Examples

- **A quest objective "Reach the old mill":** an event with a *Player in trigger area* trigger on the mill trigger area; the event completes the objective.
- **An ambush:** an event with a trigger *any player enters the forest road*; its action spawns bandits or activates an [encounter](/basic/world/encounters).
- **A safe area:** a condition on an ability or an effect "only while *not* in the arena trigger area".

## See also

- [Events](/basic/events-and-quests/events) for the triggers and actions, [Conditions](/basic/shared-systems/conditions) for the presence conditions.
- [How trigger areas are built](/advanced/world/trigger-areas).

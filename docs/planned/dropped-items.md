# Dropped items

::: warning Not built yet
This page describes a planned feature. Today an item that is taken out of a bag is destroyed, and loot goes straight into an inventory. The settings below exist but nothing reads them, so they change nothing.
:::

**Dropped items** are items that lie in the world: on the ground, where anybody can walk up and take them. The feature is **optional**: a game that does not want items on the ground leaves it off and everything works as it does today.

## What it will do

Items will end up on the ground in several ways:

| Source | What happens |
|---|---|
| **The player** | Drops an item from the inventory onto the ground, and can pick it up again |
| **An event** | An [event action](/basic/events-and-quests/events) puts an item on the ground: a quest reward left on a table, a key that falls from the ceiling |
| **A destructible object** | When it is destroyed, its [loot](/basic/items/loot-rules) lies where it stood |
| **An NPC** | Its loot lies where it died |
| **An NPC, as behaviour** | An NPC puts an item on the ground as one of its [behaviours](/basic/behaviors/behavior-scripts): a farmer who leaves a crate, a thief who drops loot |
| **You, by hand** | Place an item in the world with a dedicated tool, like [placing an entity](/basic/world/add-object) |

### An item on the ground is a 3D node

A dropped item is a node in the 3D world:

- It can be given **its own mesh**, or it can **share a mesh that is defined once** and used by many items (a bag, a crate, a glowing orb), so a hundred potions do not need a hundred models.
- It can be picked up **by walking over it** (auto pickup) or **with an interaction**, as the **pickup rule** says.
- A [generated item](/basic/items/item-generation) keeps the roll it was made with, so picking up a "Heavy Hood of the Monkey" gives back the same Heavy Hood of the Monkey.

## What is there today

The [Gameplay Config](/basic/game-settings/gameplay-config#items-and-inventory) already has the settings the feature will use. They are stored, but nothing reads them yet:

| Setting | Meaning |
|---|---|
| **Dropped items enabled** | The switch of the feature |
| **Visual style** | Dropped items are a mesh, or a sprite that uses the icon of the item |
| **Pickup rule** | Interact, walk over, or both |
| **Saved to map** | Whether dropped items are kept when the player leaves the world and comes back |

The [collision layer](/basic/game-settings/collision-layers) **Items and loot** (layer 8) is reserved for them.

## What will change in the editors

- A **loot rule** will get a *delivery* choice: put the items in the holder's inventory (today's behaviour), or drop them on the ground.
- A new **event action** will put an item on the ground at a place.
- A new **tool** will place and edit dropped items in the 3D viewport.

## Still to decide

- Whether a dropped item disappears after a time, and who owns the loot while it lies there (the killer, the party, nobody).
- How a pile of many items is shown and picked up.
- Whether items dropped by the player are kept when a world is left and entered again (the *Saved to map* setting), and for how long.

# Add Object

When a world scene is open in the 3D viewport, an **Add Object** button appears in the viewport's toolbar. It places the four things a world is made of.

| Choice | What it places | Where it goes in the scene |
|---|---|---|
| **Add NPC** | An NPC. A catalog opens to choose its [definition](/basic/entities/npcs) | The *Entities* node |
| **Add Interactable** | A chest, door, switch, destructible... A catalog opens to choose its [definition](/basic/entities/interactables) | The *Interactables* node |
| **Add Region** | An empty [region](/basic/world/regions) | The *Regions* node |
| **Add Encounter** | An empty [encounter](/basic/world/encounters) | The *Entities* node |

The containers (*Entities*, *Interactables*, *Regions*) are made for you the first time they are needed. The new node is placed at the origin of the world and **selected**, so you can move it with the gizmo at once. For an NPC, an interactable or an encounter the [Unique Object panel](/basic/world/unique-object-tool) opens for it.

## What happens to the database

You do not have to do anything for the database. As soon as the node is in a world scene:

- it gets a **unique** (an id, the world it belongs to, its position), which you can see in [Uniques](/basic/world/uniques);
- moving or rotating it updates the unique when you save the scene;
- deleting it from the scene deletes the unique.

An NPC is added with the *definition* you chose; change what is different about *this* NPC in the Unique Object panel.

## Tips

- Put a group of NPCs that should fight together **under an Encounter node** (drag them onto it in the scene tree). See [Encounters](/basic/world/encounters).
- A **Region** needs a collision shape: add a `CollisionShape3D` child with a box or a sphere, and size it over the area.
- The button only shows when the scene you have open is a world scene (the root is a *WorldScene*), and in the 3D editor.

## See also

- [Worlds](/basic/world/worlds), [Uniques](/basic/world/uniques), [How Add Object is built](/advanced/world/add-object).

# Collision Layers

Everything physical in the game sits on a **layer**, and each layer has a **mask**: the list of layers it collides with or *sees*. A player collides with the terrain but not with other players; a projectile hits characters and destructibles but not chests; the camera only cares about walls. **Game Settings > Collision Layers** shows the layers and lets you change what each one sees.

The layers themselves are fixed, because the game's code uses them by name. Only the masks are yours.

## The layers

| # | Layer | What is on it |
|---|---|---|
| 1 | **World terrain** | Static world geometry |
| 2 | **Player characters** | The characters the player controls |
| 3 | **All NPCs** | Every NPC, whatever its [faction](/basic/behaviors/factions) |
| 4 | **Environmental destructibles** | Destructible objects (crates, doors that can be broken, target dummies) |
| 5 | **Interactable objects** | Chests, switches and other non-destructible interactables |
| 6 | **Moveable objects** | Physics objects that can be pushed |
| 7 | **Projectiles** | Spells, arrows, bullets |
| 8 | **Items and loot** | Dropped items |
| 9 | **Player pets** | Companions and pets of the player |
| 10 | **Area effects** | The shapes of area effects |
| 11 | **Regions** | [Quest](/basic/events-and-quests/quests) triggers and detection areas ([Regions](/basic/world/regions)) |
| 12 | **Camera detection** | What the camera collides with |
| 13 | **Mouse detection** | What a mouse click can pick |

(Layers 15 to 32 are reserved for later.)

## The default masks

| Layer | Sees by default |
|---|---|
| World terrain | nothing (it does not move) |
| Player characters | terrain, destructibles, interactables, moveable objects |
| All NPCs | the same |
| Environmental destructibles, Interactable objects | nothing |
| Moveable objects | terrain, player characters, NPCs, other moveable objects |
| Projectiles | terrain, player characters, NPCs, destructibles |
| Items and loot | terrain |
| Player pets | terrain, NPCs, destructibles, interactables, moveable objects |
| Area effects | player characters, NPCs, player pets |
| Regions | player characters, NPCs, player pets |
| Camera detection | terrain, destructibles |
| Mouse detection | player characters, NPCs, destructibles, interactables, items |

## The editor

| Control | What it does |
|---|---|
| **The list** | Select a layer to edit |
| **The checkboxes** | "Check the layers that this layer should collide with": tick a layer to let the selected one see it |
| **Reset Layer to Default** | Puts the selected layer back to its default mask |
| **Reset All to Defaults** | Puts every layer back |
| **Reload Config** | Reads the saved file again, undoing unsaved changes |
| **Save Configuration** | Writes `collision_layer_config.tres` ("Saved!" shows for a moment) |
| A warning line | Shown when something looks wrong (an invalid layer) |

## Things to know

- A mask is one-directional: "the projectile sees the NPC" does not mean "the NPC sees the projectile". For two things to collide physically, one of them needs the other in its mask; for something to *detect* the other (an area effect finding characters), the detector needs it.
- Characters and NPCs do not collide with each other by default, so a crowd can pass through itself. To make NPCs block the player, tick **All NPCs** in the mask of **Player characters** (and the reverse).
- If a change seems to do nothing, check that the object is on the layer you think: the layer of an object is set by its kind, so you cannot move a chest to another layer here.

## See also

- [Regions](/basic/world/regions), [Controller & Camera](/basic/game-settings/controller-and-camera) (camera collision).
- [How the layers are built](/advanced/game-settings/).

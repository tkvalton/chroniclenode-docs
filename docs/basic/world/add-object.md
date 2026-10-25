# Placing objects

When a world scene is open in the 3D viewport, a row of **icon buttons** sits in the viewport's toolbar next to the Terrain button. They place the things a world is made of. (They replace the old *Add Object* drop-down.)

| Button | What it places | Where it goes in the scene |
|---|---|---|
| **NPCs** | An NPC, chosen from the [NPC definitions](/basic/entities/npcs), optionally in an [encounter](/basic/world/encounters) | The *Entities* node |
| **Interactables** | A chest, door, switch, destructible... chosen from the [definitions](/basic/entities/interactables) | The *Interactables* node |
| **Dropped items** | An item that lies in the world ([Dropped items](/basic/items/dropped-items#placing-an-item-by-hand)) | The *DroppedItems* node |
| **Dropped currencies** | A pile of money that lies in the world | The *DroppedItems* node |
| **Spawners** | A [spawner](/basic/world/spawners): a place that makes NPCs, objects or items appear from a spawn table | The *Spawners* node |
| **Assets** | A scene of your own (a house, a tree, a rock, a prop) from the asset folder, see [Assets](#assets) | The *Assets* node |
| **Volumes** | A [trigger area](/basic/world/trigger-areas), a [movement volume](/basic/world/movement-volumes) (water, lava, no gravity) or an [audio zone](/basic/world/audio-zones) (a cave, indoors) | The *Trigger areas* or *Volumes* node |

The containers (*Entities*, *Interactables*, *TriggerAreas*, *DroppedItems*, *Spawners*, *Volumes*, *Assets*) are made for you the first time they are needed. The **icons** of the buttons are the icons of the nodes (`res://addons/chroniclenode/assets/node_icons/`: `entity_icon.svg` for NPCs, `interactable_icon.svg`, `dropped_item_icon.svg`, `encounter_icon.svg`, `spawner_icon.svg` for spawners, and `trigger_area_icon.svg` for volumes), so the toolbar and the scene tree agree. The dropped currencies and assets buttons use `dropped_currency_icon.svg` and `asset_icon.svg` there too; replace any of these files to change a button. A kind with no node icon uses a plain outline from `res://addons/chroniclenode/assets/toolbar_icons/placement/`. The buttons only show when the scene you have open is a world scene (its root is a *WorldScene*), in the 3D editor. **Test World** is next to them.

## Placing one

1. **Click a button.** A **palette** opens along the bottom of the 3D viewport with everything of that kind, each with its picture, and a **search bar**.
2. **Click an entry.** Its model is on your mouse, half see-through: the model scene of the NPC or the interactable, the model of the item. When there is no model a marker stands in (a capsule the size of the NPC, a box, a small ball).
3. **Click where it goes.** It is placed there, and the next one is ready: keep clicking to place more. One placing is one step of **Undo**.
4. **Esc** stops (so does the button again, or any other tool of the terrain). **Q** and **E** turn what is on the mouse, **R** turns it back. Tick **Align to the ground** to tip it with the slope under the mouse.

### Where it lands

The thing on your mouse **stands on whatever is under the mouse**: the ground of the [terrain](/basic/world/terrain), or any solid thing in the scene with a collision shape: click the floor of a building and it goes on that floor, click the roof and it goes on the roof. Something you placed before (an NPC, an interactable, a dropped item, an encounter) does not count: the new one lands on the floor under it, not on its head. Where the mouse points at nothing, the thing is not shown and a click does nothing.

### NPCs and encounters

The NPC palette has an **Encounter** menu. The NPC always goes in *Entities* where you clicked; the menu says which [encounter](/basic/world/encounters) it belongs to:

- **No encounter**: the NPC acts alone.
- One of the encounters of this world (listed by name): the NPC belongs to it.
- **New encounter**: the first click makes an encounter and the NPC belongs to it; the menu then points at that encounter, so the next NPCs go in it. To start another group, choose **New encounter** again.

### Volumes

The **Volumes** palette lists the usual ones: **Trigger area** (the invisible area events and conditions watch), **Water**, **Lava**, **Weightless**, **Audio zone: cave**, **Audio zone: indoors** and **Zone volume** (puts the party in a [zone](/basic/world/zones#zone-volumes) while it is inside; choose the zone in the inspector). Each comes with a **box shape** (10 x 4 x 10 m, a trigger area 6 x 3 x 6 m) that you resize with the gizmo afterwards. Water and Lava come with their [look](/basic/world/movement-volumes#the-look).

#### Your own presets

The quickest way: set a volume up in the scene (a *River* with the right speed and a look, a *Swamp* with a slow effect, a *Mine* audio zone, a trigger area of the size of your doors), **select it**, open the **Volumes** palette and press **Save selected as preset...**. Give it a name. The preset shows in the palette, with a square of its colour; **Delete preset** takes the chosen one away. The rest of this section says what a preset is made of.

After the usual ones the palette lists **your presets**: any scene in `res://src/data/volume_presets/` (and the folders in it). To make one, build a volume in a scene (a *River* with the right speed and a look, a *Sea* the size of the bay, a *Swamp* with a slow effect, a *Mine* audio zone), select it and **Save Branch as Scene** into that folder. It shows in the palette named after the file, with a ghost of its box. Placing it makes a **copy** with everything you set (the fields, the shape, the look, the audio profile); changing the preset afterwards does not change the volumes already placed.

### Assets

The **Assets** button places the scenes you collect in one folder: `res://src/data/world_assets/`. Put a scene there (a `.tscn` or `.scn`, or a `.glb`, `.gltf`, `.fbx` or `.blend` model) and it is in the palette.

- **Subfolders are categories.** `world_assets/trees/oak.tscn` is in the category *trees*; `world_assets/buildings/ruins/tower.tscn` in *buildings / ruins*. A scene in the folder itself is *Uncategorised*. The **category menu** in the palette shows one category or all of them.
- **Each scene has a picture**, drawn by the editor the first time the palette opens (they show up one by one) and kept in a hidden `.thumbnails` folder inside the asset folder. The **search bar** works on the names (the file name in words: `stone_pillar.tscn` is *Stone pillar*), inside the category you chose.
- Placing works as for everything else: the scene is on the mouse, stands on the ground or on any floor, **Q** and **E** turn it. What lands in the world is an **instance of your scene**, linked to the file: change the asset later and every one you placed changes with it.

::: tip Name the folders as you would look for things
A short list of categories (*trees*, *rocks*, *buildings*, *props*) is quicker to use than a deep tree, but the folders can be as deep as you like.
:::

## What happens to the database

You do not have to do anything for the database. As soon as the node is in a world scene:

- it gets a **unique** (an id, the world it belongs to, its position), which you can see in [Uniques](/basic/world/uniques) (a dropped item has no unique: it has a *placement id* of its own, and the game remembers whether it was taken);
- moving or rotating it updates the unique when you save the scene;
- deleting it from the scene deletes the unique.

An NPC is added with the *definition* you chose; change what is different about *this* NPC in the Unique Object panel.

## Tips

- A group of NPCs that should fight together belong to **one encounter**: use the Encounter menu of the NPC palette, or the Encounter setting of each NPC. See [Encounters](/basic/world/encounters).
- The placement and the [terrain tools](/basic/world/terrain) both want the left mouse button: turning on one turns the other off.
- Right mouse button and the keys of the camera work as always while something is on your mouse.

## See also

- [Worlds](/basic/world/worlds), [Uniques](/basic/world/uniques), [How the placement tools are built](/advanced/world/add-object).

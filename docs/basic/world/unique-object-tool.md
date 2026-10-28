# The Unique Object tool

The **Unique Object** panel starts at the bottom of the editor (next to Output and Debugger). It is a **dock** like the others: drag its tab to any other dock position (left, right, bottom), or **right-click the tab and make it floating** to have it in a window of its own (on a second screen, say). The editor remembers where you put it. It shows the unique of whatever you select in a world scene, and edits it. Select an NPC, an interactable, a spawner, a trigger area, a volume or a dropped item in the scene tree or the 3D viewport and the panel opens by itself. **Select anything else and it closes** (select nothing at all and it only empties); it opens again at the same place the next time you select a unique object.

It is how you say "this one is different": the same *Goblin* definition, but this goblin is level 8, hostile to the town [faction](/basic/behaviors/factions), and guards a chest.

## The panel

The panel has three parts:

- **The header**: the **name** of the object, its **type** (NPC, Interactable, Spawner, Trigger area, Encounter), its **id**, and two buttons: **Open definition** (edit the definition this object follows, in a window) and **Reset overrides (3)** (put everything this object overrides back to what its definition says; it asks first).
- **The key fields**: a strip of the few fields you set on most objects, each on a panel of its own. For an NPC: **Level**, **Faction**, **Active**, **Encounter**. For an interactable: **Faction**, **Locked by**, **Cooldown**. For a spawner: **Active**, **Spawn table** and, unless it is a Point spawner, **Max alive**. They are not repeated in the sections.
- **The sections**: a list on the left (NPC Settings, Stats Overrides, Interactions...) and the fields of the chosen one on the right, with its sub-groups side by side. A small amber number beside a section says how many fields in it are overridden. In a narrow dock (or a floating window) the list moves to the top. The panel remembers the section you were in.

Changes are saved as you make them. Every name and every field has a short **tooltip**.

### Overrides

An object follows its definition until you change something. A field you changed is shown with an **amber name** and a **reset arrow** at its right (it appears the moment you change the field): click the arrow and the object follows the definition again for that field. A field that follows the definition says what the definition has, in grey: *(definition: 8)*. Settings that belong to this object alone (an NPC being active, its spawn delay, its respawn timer, its encounter) are never marked, and a spawner has settings only.

### Several objects at once

Select several NPCs (or several interactables, or several spawners) in the scene tree or the viewport and the panel edits **all of them**: the header says *3 selected* and lists their ids (hover for all of them). A field where they differ says **mixed**; what you set is set on every selected object, and **Reset overrides** resets them all. Objects of different kinds (an NPC and a chest) are not edited together; the panel shows the first one. If the selected objects follow different definitions, **Open definition** is not shown.

### NPC

| Page | Fields |
|---|---|
| **NPC Settings** | Two boxes side by side. **Spawn Properties**: **Is active** (hidden and switched off at the start if not), **Spawn delay**, **Respawn timer** (`0` = it does not respawn), **Is unique encounter** (can only be killed once), **Despawn on death** (the body goes after some seconds). **Overrides**: **Model scale override**, **Experience worth override**, the **tags** this NPC has or lacks compared with its definition (**Added** and **Removed UI tags**, each with a button to choose them), **Experience multiplier** (a rarer version: `3`), **Behavior script**, **Combat script**. (Level and Faction are in the strip) |
| **Loot & Inventory** | The loot rules (**Add a rule**; hover the buttons for how rules work), the **Loot table override**, and a folded **Inventory override** box with items and currency |
| **Stats Overrides** | A **Stats Override** tick box, **off** for a new NPC (it has the stats of its definition). Ticking it makes a copy of the NPC's [stats data](/basic/entities/npcs#stats) that you can change for this NPC alone: pools, base values, weapon damage, immunities and, last, the [growth profile](/basic/entity-stats/growth-profiles) and growth overrides. A line above the stats says **what differs from the definition**, stat by stat. Unticking goes back to the definition |
| **Interactions** | The [interaction](/basic/entities/npcs) of this NPC (dialogue, vendor...) if it differs from its definition. **Remove interaction** takes the NPC's own away: it follows its definition again |

### Interactable

| Section | Fields |
|---|---|
| **Basic Properties** | **Faction**, **Locked by item** (an item id needed to open it), **Interaction cooldown override** |
| **Targeting** | **Damaged threshold** (the share of health at which it looks damaged), **Targetable directly**, **Targetable by area abilities** |
| **Stats Override** | The same tick box (off by default), for the stats of a destructible. It matters when the object can be targeted |
| **Loot** | The loot rules of the object |
| **Interactions** | The interaction of this object (with **Remove interaction**) |

### Dropped item and pile of currency

Select an item or a pile of currency lying in the world. A column at the left of the panel, one field under the other, has **Lies here: An item / A pile of currency**; for an item the **Item** (a picker) and, only when the item can stack, the **Stack**; for currency the **Currency** and the **Amount**. For **equipment** there is also a **Custom item level** tick box: ticked, a box takes the level the item is made at. The page has **Physics override**, **Respawn time** and **Lifetime override**. Select several and a change is made to all of them. The Inspector no longer lists these settings.

### Volumes

A **movement volume**, an **audio zone** and a **zone volume** are edited in the panel too (the Inspector keeps only what Godot gives a node):

| Volume | Strip | Pages |
|---|---|---|
| **Movement volume** | **Preset** menu (with *Save as preset...*), **Moves as**, **Affects**, **Speed** | Movement, Surface and shallow water, Breath, Effects while inside, [Flow](/basic/world/movement-volumes#flow), Look, Camera and sound, Editor. See [Movement volumes](/basic/world/movement-volumes) |
| **Audio zone** | none | **Sound**: the [audio profile](/basic/world/audio-zones#the-audio-profile) in full, with a preset menu. Editor (the colour of the box) |
| **Zone volume** | **Zone**, **Priority** | Editor |

A change to a volume is a normal editor change: **Ctrl+Z** undoes it, and the scene is marked as changed. Select several volumes of one kind and a change is made to all of them.

### Spawner

Select a spawner: the strip has **Active**, **Spawn table** and **Max alive** (a **Point** spawner keeps one thing, so it has no **Max alive**: it appears for the other modes). The page **Spawner Settings** has the box **What and where** (name, mode, spawn table, **Max slope**, **Only walkable** and, for a Painted spawner only, **Paint color**) and the boxes **How often** and **Only when**; **Near the player** is a page of its own. In the editor a spawner is a **red capsule** (1 m tall, standing where the spawner is), so it can be seen and picked; the capsule is not in the game.

### Trigger area

The **Area Name** of the trigger area (what [quests](/basic/events-and-quests/quests) and triggers call it), and, for your information, the world it is in and its position. The area itself is the collision shape under the Trigger area node. See [Trigger areas](/basic/world/trigger-areas).

### Encounter

An NPC has an **Encounter** setting (NPC Settings): *None*, one of the encounters of its world, or *New encounter*. **Edit encounter** shows all the [encounter](/basic/world/encounters) settings, including the reaction list with **Add Reaction**, in this panel (an encounter is a record, not a node you can select); **< Back to the NPC** returns.

## The position

The position and rotation are not typed here. Move the node in the 3D viewport; the unique takes the new position when you save the scene.

## See also

- [Uniques](/basic/world/uniques), [Add Object](/basic/world/add-object), [How the tool is built](/advanced/world/unique-object-tool).

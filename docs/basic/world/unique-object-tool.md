# The Unique Object tool

The **Unique Object** panel starts at the bottom of the editor (next to Output and Debugger). It is a **dock** like the others: drag its tab to any other dock position (left, right, bottom), or **right-click the tab and make it floating** to have it in a window of its own (on a second screen, say). The editor remembers where you put it. It shows the unique of whatever you select in a world scene, and edits it. Select an NPC, an interactable, a trigger area or an encounter in the scene tree or the 3D viewport and the panel opens by itself. Select anything else and it empties (it stays where it is: a floating panel is not closed from under you).

It is how you say "this one is different": the same *Goblin* definition, but this goblin is level 8, hostile to the town [faction](/basic/behaviors/factions), and guards a chest.

## The panel

The panel has three parts:

- **The header**: the **name** of the object, its **type** (NPC, Interactable, Spawner, Trigger area, Encounter), its **id**, and two buttons: **Open definition** (edit the definition this object follows, in a window) and **Reset overrides (3)** (put everything this object overrides back to what its definition says; it asks first).
- **The key fields**: a strip of the few fields you set on most objects. For an NPC: **Level**, **Faction**, **Active**, **Encounter**. For an interactable: **Faction**, **Locked by**, **Cooldown**. For a spawner: **Active**, **Spawn table**, **Max alive**. They are not repeated in the sections.
- **The sections**: a list on the left (NPC Settings, Stats Overrides, Interactions...) and the fields of the chosen one on the right, with its sub-groups side by side. A small amber number beside a section says how many fields in it are overridden. In a narrow dock (or a floating window) the list moves to the top. The panel remembers the section you were in.

Changes are saved as you make them.

### Overrides

An object follows its definition until you change something. A field you changed is shown with an **amber name** and a **reset arrow** at its right: click the arrow and the object follows the definition again for that field. A field that follows the definition says what the definition has, in grey: *(definition: 8)*. Settings that belong to this object alone (an NPC being active, its spawn delay, its respawn timer, its encounter) are never marked, and a spawner has settings only.

### Several objects at once

Select several NPCs (or several interactables, or several spawners) in the scene tree or the viewport and the panel edits **all of them**: the header says *3 selected* and lists their ids (hover for all of them). A field where they differ says **mixed**; what you set is set on every selected object, and **Reset overrides** resets them all. Objects of different kinds (an NPC and a chest) are not edited together; the panel shows the first one. If the selected objects follow different definitions, **Open definition** is not shown.

### NPC

| Section | Fields |
|---|---|
| **Spawn Properties** | **Is active** (hidden and switched off at the start if not), **Spawn delay**, **Respawn timer** (`0` = it does not respawn), **Is unique encounter** (can only be killed once), **Despawn on death** (the body goes after some seconds) |
| **Overrides** | **Level override** (`0` = the definition's level), **Model scale override**, **Faction**, **Experience worth override**, **Experience multiplier** (a rarer version: `3`), **Behavior script**, **Combat script** |
| **Loot & Inventory** | **Loot table override**, **Inventory override** |
| **Stats Overrides** | A **Stats Override** tick box. Ticking it makes a copy of the NPC's [stats data](/basic/entities/npcs#stats) that you can change for this NPC alone: pools, base values, [growth profile](/basic/entity-stats/growth-profiles), growth overrides, weapon damage. Unticking goes back to the definition |
| **Interactions** | The [interaction](/basic/entities/npcs) of this NPC (dialogue, vendor...) if it differs from its definition |

### Interactable

| Section | Fields |
|---|---|
| **Basic Properties** | **Faction**, **Locked by item** (an item id needed to open it), **Interaction cooldown override** |
| **Targeting** | **Damaged threshold** (the share of health at which it looks damaged), **Targetable directly**, **Targetable by area abilities** |
| **Stats Override** | The same tick box, for the stats of a destructible. It matters when the object can be targeted |
| **Interactions** | The interaction of this object |

### Trigger area

The **Area Name** of the trigger area (what [quests](/basic/events-and-quests/quests) and triggers call it), and, for your information, the world it is in and its position. The area itself is the collision shape under the Trigger area node. See [Trigger areas](/basic/world/trigger-areas).

### Encounter

An NPC has an **Encounter** setting (NPC Settings): *None*, one of the encounters of its world, or *New encounter*. **Edit encounter** shows all the [encounter](/basic/world/encounters) settings, including the reaction list with **Add Reaction**, in this panel (an encounter is a record, not a node you can select); **< Back to the NPC** returns.

## The position

The position and rotation are not typed here. Move the node in the 3D viewport; the unique takes the new position when you save the scene.

## See also

- [Uniques](/basic/world/uniques), [Add Object](/basic/world/add-object), [How the tool is built](/advanced/world/unique-object-tool).

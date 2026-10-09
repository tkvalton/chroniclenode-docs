# The Unique Object tool

The **Unique Object** panel is at the bottom of the editor (next to Output and Debugger). It shows the unique of whatever you select in a world scene, and edits it. Select an NPC, an interactable or an encounter in the scene tree or the 3D viewport and the panel opens by itself. Select anything else and it empties. (A region is edited in Godot's own inspector: see below.)

It is how you say "this one is different": the same *Goblin* definition, but this goblin is level 8, hostile to the town [faction](/basic/behaviors/factions), and guards a chest.

## The panel

The header has the **name** of the object, a row of **group buttons** (one per section), and, at the right, the **type** (NPC, Interactable, Encounter) and the **id**. Click a group button to show its fields; sections have columns for their sub-groups.

Changes are saved as you make them. A field left at its empty value (`0`, empty, `-1`) uses the definition; only what you fill in overrides it.

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

### Region

A region is not in this panel. Select the Region node and set its **Area Name** in Godot's inspector. See [Regions](/basic/world/regions).

### Encounter

All the [encounter](/basic/world/encounters) settings, including the reaction list with **Add Reaction**.

## The position

The position and rotation are not typed here. Move the node in the 3D viewport; the unique takes the new position when you save the scene.

## See also

- [Uniques](/basic/world/uniques), [Add Object](/basic/world/add-object), [How the tool is built](/advanced/world/unique-object-tool).

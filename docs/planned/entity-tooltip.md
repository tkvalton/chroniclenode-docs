# Entity tooltip

::: warning Not built yet
This page describes a planned feature. Today there are [five tooltips](/basic/user-interface/tooltips), and none of them is for an entity.
:::

When the player points at an **NPC, a pet, a party member or an object**, nothing describes it except its [nameplate](/basic/user-interface/nameplates). A sixth tooltip, the **entity tooltip**, will.

## What it shows

| Line | Where it comes from |
|---|---|
| **Name**, and a title if it has one (*Captain of the Guard*) | The [entity](/basic/entities/npcs) |
| **Level** (and a skull for a level far above the player's) | The entity's level |
| **Type**, class or race | The [entity types](/basic/types-and-groups/entity-types), the class |
| **Faction** and **standing**: friendly, neutral, hostile | The [faction](/basic/behaviors/factions) of the entity against the player's |
| **What it does** | *Vendor*, *Trainer*, *Quest giver*, *Can be talked to*, from its interactions |
| **Health**, if the player may see it | The settings |
| A **description** | A text field on the entity |

An **object** gets a shorter tooltip: its name and what it does (*Chest: opens*, *Copper vein: gather with Mining 10*).

## How it is going to work

It follows the pattern of the other tooltips, so it will be easy to restyle or replace:

- A scene with its own **root class** (`TooltipEntity`), set in [UI Settings](/basic/game-settings/ui-settings#tooltip-scenes) with the other five, and checked by the settings editor.
- A signal, `entity_tooltip_requested`, that the [HUD elements](/basic/user-interface/hud) and [panels](/basic/user-interface/ui-panels) already have the others of, and that the world's mouse-over (the entity under the cursor) raises.
- A setting for the player: show it on hover, show it only with a key held, or never.

## Still undecided

- Which fields of an entity are shown by default and which are left to the developer (a *description* field on the entity is new).
- Whether it shows when pointing at the **nameplate** as well as the body.
- How it behaves with a **target** (the player has one already: should it show for the target only?).

## See also

- [Tooltips](/basic/user-interface/tooltips)
- [Nameplates](/basic/user-interface/nameplates)

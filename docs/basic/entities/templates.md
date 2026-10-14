# Templates

A **template** is the stats, pools, immunities, growth and abilities that many NPCs (or interactables) share. Make a *Goblin* template once, make fifty goblins that **follow** it, and when you give the template 100 more health, the fifty goblins have 100 more health too. What each goblin changed for itself stays.

Without templates, a change to "all the goblins" is a change to every goblin. With them, an NPC definition only holds what makes it *different*.

## How a change reaches an NPC that follows

The NPC keeps its own values (the editor shows and edits them as always) and remembers what the template was the last time it looked. When the template changes, the **difference** is added to the NPC.

| The template has | The NPC has | The template gains 100 | The NPC has |
|---|---|---|---|
| 100 health | 150 health (50 more) | 200 health | **250** health |

| What | How it follows |
|---|---|
| **Numbers**: the base value of a stat, the maximum of a pool, the core values (movement speed, weapon damage ...) | The difference is added. 50 more stays 50 more |
| **Lists**: pools, immunities, abilities (an NPC's active and passive abilities, its basic attack) | What the template adds is added, what it takes away is taken away. What the NPC added for itself stays |
| **Growth**: the growth profile and the growth overrides | They are the template's. An NPC that follows a template **cannot change its growth**; one that follows nothing can |

A stat can be set to **Always this value**: right-click it in the stats list. It keeps the value you give it whatever the template does.

::: tip A removed thing the NPC changed
If the template takes away a stat or a pool that an NPC had **changed**, the NPC keeps it and the Template section shows a **warning**. An NPC that never touched it loses it with the template.
:::

## The Template section

The top of the NPC and interactable editors.

| Part | What it does |
|---|---|
| **Follows template** | The template the entity follows. Choose one to follow it, *No template* to stop. Following keeps the values the entity has (what differs from the template is what it changed) and gives it the growth of the template. A new, blank NPC can **take the values of the template** too: the box in the question is on for it |
| **Edit template**, **Stop following** | Open the template, or let the entity go with the values it has (its growth can be changed again) |
| **Templates** | A menu: **New template...** makes a blank one, and every template is listed with the number of entities that follow it. Choosing one opens it for editing |
| **Save as template...** | Makes a template from what this entity is now. The box says whether this entity follows the new template from then on |
| **What this entity changed** | A list of what the entity has that the template does not (+50 health, an ability it added ...), each with a **Reset** button that gives the template's value back, and **Reset everything** |
| Warnings (yellow) | A template removed something this entity changed, or the template was deleted (the entity keeps its values) |

In the stats list an entity that follows a template shows what differs: *Strength (Base: 60) [template: 10, +50]*. Below the growth section, a followed template's growth is written out and not editable. The same stats editor has a **Preview at a level**: pick a level and it lists every stat and pool at that level, with the **base**, the **growth** and **where the growth comes from** (the entity's own override, the growth profile, or the stat itself).

## Editing a template

A template is edited in the same editor. It hides what only an entity has: the model, animations, audio and loot. The Template section shows **Used by 12: Goblin, Goblin Archer ...**. A template has a **name**.

When you change a template, every entity that follows it is brought up to date and saved. An entity is also brought up to date when you open it or when the game starts: the game uses a copy with the template's changes added, and saves nothing.

## NPCs, interactables and player classes

| Kind | The template holds |
|---|---|
| **NPC** | Stats, pools, immunities, growth, abilities (active, passive, basic attack) |
| **Interactable** | Stats, pools, immunities and growth (an object has no abilities): *Wooden Crate*, *Iron Door*, *Training Dummy* |
| **Player class** | Stats, pools, immunities, growth and abilities. A *Warrior Base* template for every warrior-like class. A class template hides level rewards, skill trees and equipment, which are of each class |

The **Create** dialog of the NPC, interactable and player class editors asks for a template: the new one follows it and has its values. A character follows its **class** (the class is what a character takes its stats and abilities from), so a template reaches characters through their class. A class shows how many characters use it.

## Placed NPCs and objects

A [placed NPC or object](/basic/world/uniques) with a **stats override** follows its **definition**, exactly as the definition follows its template: the override keeps what you changed, and what the definition gains (its own changes, or its template's) is added. The stats list of the override marks what differs from the definition (*[definition: 10, +3]*), **Always this value** keeps a stat as it is, and a placed NPC can still choose its own growth. A template change therefore reaches every placed NPC with an override.

## See also

- [Growth profiles](/basic/entity-stats/growth-profiles): the shared growth a template names
- [NPCs](/basic/entities/npcs), [Interactables](/basic/entities/interactables), [Player classes](/basic/entities/player-classes)

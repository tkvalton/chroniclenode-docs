# Tag-driven interface

::: warning Not built yet
The [entity tags](/basic/types-and-groups/entity-types) (types and ranks) are built, with their editor, their effects and their level and experience rules. **The in-game interface does not read them yet.** This page is the plan for how it will.
:::

The idea: the **tag** of an entity decides **how the interface shows it**, so a game can make a boss feel like a boss without a line of code.

| Tag | What the interface does |
|---|---|
| **Boss** | The boss gets a **large unit frame at the top of the screen** instead of the normal target frame |
| **Elite** | The **nameplate** shows an extra piece of art (a dragon frame around it, a skull), hidden for a normal entity |
| **Rare** | The entity appears on the **minimap and the map with its own icon** |
| **Undead, Beast ...** (types) | A type icon on the nameplate or the tooltip, a color on the target frame |

## What is there already

An entity tag has a **color** and an **icon**, an entity knows its tags ([`Entity.get_entity_tags`](/advanced/entities/runtime/entity), `get_rank`, `get_entity_types`) and a placed NPC can have its own rank. That is all the data a unit frame, a nameplate or a map marker needs to ask "which rank is this?".

## What has to be decided

- **Where the choice is made.** On the tag (each tag names the scene or the art it brings) or in the **UI Settings** (a table: tag, unit frame scene, nameplate art, map icon). The first keeps everything about a tag in one place; the second keeps all the interface choices in the interface.
- **Unit frames.** The HUD has one target frame today. A tag that asks for another frame needs a place for it (the top of the screen) and a rule for which wins when an entity has several tags.
- **Nameplates.** The nameplate scene gets optional parts that a tag turns on (an extra texture, a different bar).
- **Map icons.** The minimap and the world map read the icon of the rank of an entity.
- **Which tag wins.** An entity has one rank and several types; the rank decides the frame, and the types decorate it.

Nothing here changes how tags work in the game: it only decides how they are drawn.

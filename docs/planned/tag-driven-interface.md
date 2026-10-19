# Tag-driven interface

::: warning Not built yet
The [entity tags](/basic/types-and-groups/entity-tags) are built, with their editor, their assignment on definitions and placed NPCs, and `has_ui_tag` to read them. **The toolkit's own in-game interface does not choose different nodes for them yet.** This page is the plan for how it will.
:::

The idea: the **entity tag** of an entity decides **how the interface shows it**, so a game can make a boss feel like a boss without a line of code.

| Tag | What the interface does |
|---|---|
| **Boss** | The boss gets a **large unit frame at the top of the screen** instead of the normal target frame |
| **Elite** | The **nameplate** shows an extra piece of art (a dragon frame around it, a skull), hidden for a normal entity |
| **Rare** | The entity appears on the **minimap and the map with its own icon** |
| **Quest giver, Vendor ...** | A marker over the head, a color on the name |

## What is there already

An entity tag has a **key**, a **color** and an **icon**, and an entity knows its tags ([`Entity.get_ui_tags`](/advanced/entities/runtime/entity), `has_ui_tag("boss")`, also on interactable objects). A placed NPC can add tags and take away the ones of its definition. That is all the data a unit frame, a nameplate or a map marker needs to ask "is this a boss?". Your own interface scenes can use it today.

## What has to be decided

- **Where the choice is made.** On the tag (each tag names the scene or the art it brings) or in the **UI Settings** (a table: tag, unit frame scene, nameplate art, map icon). The first keeps everything about a tag in one place; the second keeps all the interface choices in the interface.
- **Unit frames.** The HUD has one target frame today. A tag that asks for another frame needs a place for it (the top of the screen) and a rule for which wins when an entity has several tags.
- **Nameplates.** The nameplate scene gets optional parts that a tag turns on (an extra texture, a different bar).
- **Map icons.** The minimap and the world map read the icon of the tag of an entity.
- **Which tag wins.** An entity can have several tags; a rule (an order of priority in the table) decides which frame it gets when two tags ask for different ones.

Nothing here changes how tags work in the game: it only decides how they are drawn.

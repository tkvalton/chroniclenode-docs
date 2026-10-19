# Entity Tags

<Shot name="ui-tags-editor" caption="The Entity Tags editor (Types & Groups > Entity Tags)." />

An **entity tag** is a label with **no effect on the entity**. It exists only so the **interface** can read an entity and show a different set of nodes for it:

| Tag | What the interface can do with it |
|---|---|
| **Boss** | A large **unit frame at the top of the screen** instead of the normal one |
| **Elite** | A **nameplate** that shows an extra piece of art (a dragon frame, a skull), hidden for a normal entity |
| **Rare** | A **unique icon on the minimap and the map** |
| **Quest giver** | A marker above the head, a different color of the name |

A tag gives no stat, no ability, no effect and no experience, and no condition reads it. If you want an entity to take more damage, use an [entity type](/basic/types-and-groups/entity-types); if you want to build forty goblins from one setup, use a [template](/basic/entities/templates). Take the tag when the only thing that changes is **what the player sees**.

::: tip Types, templates and entity tags
| | Does |
|---|---|
| **[Entity type](/basic/types-and-groups/entity-types)** | Says what the entity **is** and brings default **effects** to every entity of the type (Humanoid, Undead, Fire Elemental) |
| **[Template](/basic/entities/templates)** | A profile you **build entities from**, to save duplicating setup |
| **Entity tag** (this page) | **No effect.** Only for the interface to read (Boss, Elite, Rare) |
:::

## Making a tag

**Types & Groups > Entity Tags.** A tag has a **Display name** (translated like any name), a **Description**, a **Color** and an **Icon** (for the interface to use), and a **Key**.

The **Key** is the word the interface asks for: `boss`, `elite`, `rare`. When it is empty, the key is the display name in lower case (`Quest Giver` is `quest_giver`). The key does not change when you translate the name, so use the key in your interface and never the display name.

## Giving tags to entities

An entity has **any number** of tags.

| Where | What |
|---|---|
| **[NPC](/basic/entities/npcs)**, **[character](/basic/entities/playable-character)** and **[interactable object](/basic/entities/interactables)** definitions | **Entity tags** in the Basic Properties: the tags every entity made from the definition has |
| **A placed NPC or object** ([unique](/basic/world/uniques)) | **Added ui tags** gives this one entity more tags; **Removed ui tags** takes away a tag of its definition. The goblin chieftain is a Boss while the goblin it is made from is not |
| **A [template](/basic/entities/templates)** | Templates do not carry tags; each NPC keeps its own |

## How the interface reads tags

On a runtime entity (NPC, character or interactable object):

| Call | Gives |
|---|---|
| `entity.has_ui_tag("boss")` | True when the entity has the tag with that key (any case). You can also give the tag id |
| `entity.get_ui_tags()` | The tags ([`UITagDefinition`](/advanced/entities/definitions/ui-tag-definition): display name, key, color, icon) |
| `entity.get_ui_tag_ids()` | Their ids |

For example, a unit frame script can ask `if target.has_ui_tag("boss")` and show the large frame. See [Tag-driven interface](/planned/tag-driven-interface) for how the in-game interface will use them out of the box: **the tags are built and ready to read, but the toolkit's own unit frames, nameplates and maps do not choose different nodes for them yet.**

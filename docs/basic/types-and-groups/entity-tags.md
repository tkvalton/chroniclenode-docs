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

The **Interface** section is what the toolkit's own interface does with the tag:

| Field | What it does |
|---|---|
| **Priority** | When an entity has several tags, the tag with the highest priority decides its unit frame, its nameplate art and its map icon. The first one wins on a tie |
| **Draw the name in the color of the tag** | The name on the nameplate and on the unit frame uses the **Color** of the tag |
| **Nameplate art** | A texture the nameplate shows for an entity with the tag (a frame around it, a skull). Empty: nothing is added |
| **Show on the map** | The minimap shows an icon for entities and objects with the tag |
| **Map icon** | The icon on the map. Empty: the **Icon** of the tag |

The demo has three tags to start from: **Boss** (priority 10, red name), **Elite** (priority 5) and **Rare** (priority 1, shown on the map). They have no art: add your own textures.

## Giving tags to entities

An entity has **any number** of tags.

| Where | What |
|---|---|
| **[NPC](/basic/entities/npcs)**, **[character](/basic/entities/playable-character)** and **[interactable object](/basic/entities/interactables)** definitions | **Entity tags** in the Basic Properties: the tags every entity made from the definition has |
| **A placed NPC or object** ([unique](/basic/world/uniques)) | **Added ui tags** gives this one entity more tags; **Removed ui tags** takes away a tag of its definition. The goblin chieftain is a Boss while the goblin it is made from is not |
| **A [template](/basic/entities/templates)** | Templates do not carry tags; each NPC keeps its own |

## What the interface does with them

Nothing here changes how the entity plays. It only decides what the player sees.

### A unit frame for a tag

A **TagUnitFrame** is a HUD element that appears while the **target** of the player you control has its tag, and goes when the target loses it, dies or is dropped. It shows the name, the **Icon** of the tag, a bar for each health pool of the target and the cast bar while the target casts. The `BossFrameHUD` of the in-game UI template is one, for the key `boss`, at the top of the screen.

To give another tag a frame (an elite with a smaller frame at the top), add another one to the HUD of your in-game UI scene: instance `tag_unit_frame_template.tscn` (in `ui_scenes/in_game/HUD/unit_frames`) and set its **Ui tag key** to the key of the tag. Place and style it like any HUD element: it is a plain control with its own name label, icon and bars, so a game can change its look without code.

When the target has several tags that each have a frame, only the frame of the tag with the highest **priority** shows. A target with a tag that has no frame shows none (the toolkit's HUD has no standard target frame to fall back to).

### Nameplate art and name color

The nameplate of an entity or object with a tag that has **Nameplate art** shows the art in the `TagArt` node of the nameplate scene (behind the bars, stretched over the nameplate): a frame around it, or a skull. A tag that asks for it also draws the name in its color. Move or restyle the `TagArt` node in your own copy of the nameplate scene; a nameplate scene without the node simply shows no art.

### Icons on the minimap

The minimap has a **TagMarkers** layer. An entity or object with a tag that is shown on the map gets the **Map icon** at its place on the minimap, and an entity outside of the map is shown on its edge. Dead entities have no icon. If you build a world map of your own, ask the same: the tag with the highest priority among the tags that show on the map gives the icon (`UITagDefinition.top_tag`, `get_map_icon()`).

## How the interface reads tags

On a runtime entity (NPC, character or interactable object):

| Call | Gives |
|---|---|
| `entity.has_ui_tag("boss")` | True when the entity has the tag with that key (any case). You can also give the tag id |
| `entity.get_ui_tags()` | The tags ([`UITagDefinition`](/advanced/entities/definitions/ui-tag-definition): display name, key, color, icon) |
| `entity.get_ui_tag_ids()` | Their ids |

For example, a script of your own can ask `if target.has_ui_tag("boss")` and show something else. The toolkit's own unit frame, nameplate and minimap use these calls and the fields of the tag, as described above.
